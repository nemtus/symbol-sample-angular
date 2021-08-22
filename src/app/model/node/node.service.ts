import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  DEFAULT_HTTPS_PORT,
  DEFAULT_HTTP_PORT,
  MAINNET_NODE_DOMAIN_LIST,
  MAINNET_NODE_IRREGULAR_PORT_NUMBER_LIST,
  TESTNET_NODE_DOMAIN_LIST,
  TESTNET_NODE_IRREGULAR_PORT_NUMBER_LIST } from './node';
import { Node, Nodes, Network, Protocol } from './node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  network?: Network;
  protocol: Protocol = environment.protocol as Protocol;
  nodes?: Nodes;
  nodeUrls?: string[];
  node?: Node;
  nodeUrl?: string;

  getPort(network: Network, protocol: Protocol, domain: string): number {
    if (network === 'mainnet') {
      for (let index = 0; index < MAINNET_NODE_IRREGULAR_PORT_NUMBER_LIST.length; index++) {
        const node = MAINNET_NODE_IRREGULAR_PORT_NUMBER_LIST[index];
        if (node.protocol === protocol && node.domain === domain) {
          return node.port;
        }
      }
      if (protocol === 'https') {
        return DEFAULT_HTTPS_PORT;
      } else if (protocol === 'http') {
        return DEFAULT_HTTP_PORT;
      } else {
        throw new Error('protocol must be https or http!');
      }
    } else if (network === 'testnet') {
      for (let index = 0; index < TESTNET_NODE_IRREGULAR_PORT_NUMBER_LIST.length; index++) {
        const node = TESTNET_NODE_IRREGULAR_PORT_NUMBER_LIST[index];
        if (node.protocol === protocol && node.domain === domain) {
          return node.port;
        }
      }
      if (protocol === 'https') {
        return DEFAULT_HTTPS_PORT;
      } else if (protocol === 'http') {
        return DEFAULT_HTTP_PORT;
      } else {
        throw new Error('protocol must be https or http!');
      }
    } else {
      throw new Error('network must be mainnet or testnet');
    }
  }

  getInitialNodes(network: Network, protocol: Protocol): Nodes {
    if (network === 'mainnet') {
      return MAINNET_NODE_DOMAIN_LIST.map((domain) => {
        return {
          protocol: protocol,
          domain: domain,
          port: this.getPort(network, protocol, domain)
        };
      });
    } else if (network === 'testnet') {
      return TESTNET_NODE_DOMAIN_LIST.map((domain) => {
        return {
          protocol: protocol,
          domain: domain,
          port: this.getPort(network, protocol, domain)
        };
      });
    } else {
      throw new Error('protocol must be https or http!');
    }
  }

  convertNodeToNodeUrl(node: Node): string {
    return `${node.protocol}://${node.domain}:${node.port}`;
  }

  convertNodesToNodeUrls(nodes: Nodes): string[] {
    return nodes.map(node => this.convertNodeToNodeUrl(node));
  }

  selectRandomNode(nodes: Nodes): Node {
    const randomIndex = Math.floor(Math.random() * nodes.length);
    this.node = nodes[randomIndex]
    this.nodeUrl = this.convertNodeToNodeUrl(this.node);
    return this.node;
  }

  selectRandomNodeUrl(nodes: Nodes): string {
    const randomIndex = Math.floor(Math.random() * nodes.length);
    const node = nodes[randomIndex];
    this.node = node;
    this.nodeUrl = this.convertNodeToNodeUrl(this.node);
    return this.nodeUrl;
  }

  removeNodeAndSelectAnotherNode(node: Node): Node {
    if (this.nodes !== undefined) {
      this.nodes = this.nodes.filter((tempNode) => {
        return ! (tempNode.protocol === node.protocol && tempNode.domain === node.domain && tempNode.port === node.port);
      });
      this.nodeUrls = this.convertNodesToNodeUrls(this.nodes);
      return this.selectRandomNode(this.nodes);
    } else {
      throw new Error('node must not be undefined!');
    }
  }

  removeNodeUrlAndSelectAnotherNodeUrl(nodeUrl: string): string {
    if (this.nodeUrls !== undefined && this.nodes !== undefined) {
      this.nodeUrls = this.nodeUrls.filter(tempNodeUrl => tempNodeUrl !== nodeUrl);
      this.nodes = this.nodes.filter(tempNode => nodeUrl !== this.convertNodeToNodeUrl(tempNode));
      return this.selectRandomNodeUrl(this.nodes);
    } else {
      throw new Error('nodeUrl must not be undefined!');
    }
  }

  init(network: Network, protocol: Protocol): void {
    this.nodes = this.getInitialNodes(network, protocol);
    this.nodeUrls = this.convertNodesToNodeUrls(this.nodes);
    this.node = this.selectRandomNode(this.nodes);
    this.nodeUrl = this.convertNodeToNodeUrl(this.node);
  }

  constructor() { }
}
