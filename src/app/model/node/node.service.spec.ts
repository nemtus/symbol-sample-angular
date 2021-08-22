import { TestBed } from '@angular/core/testing';
import { NodeService } from './node.service';
import {
  MAINNET_HTTPS_NODES,
  MAINNET_HTTP_NODES,
  TESTNET_HTTPS_NODES,
  TESTNET_HTTP_NODES,
  MAINNET_HTTPS_IREGULAR_NODE,
  MAINNET_HTTPS_IREGULAR_NODE_URL,
  MAINNET_HTTPS_REGULAR_NODE,
  MAINNET_HTTPS_REGULAR_NODE_URL,
  MAINNET_HTTP_REGULAR_NODE,
  MAINNET_HTTP_REGULAR_NODE_URL,
  TESTNET_HTTPS_REGULAR_NODE,
  TESTNET_HTTPS_REGULAR_NODE_URL,
  TESTNET_HTTP_REGULAR_NODE,
  TESTNET_HTTP_REGULAR_NODE_URL,
  MAINNET_HTTPS_NODE_URLS,
  MAINNET_HTTP_NODE_URLS,
  TESTNET_HTTPS_NODE_URLS,
  TESTNET_HTTP_NODE_URLS,
} from './node'
import { Network, Nodes, Node, Protocol } from './node.model';

describe('NodeService', () => {
  let service: NodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPort', () => {
    expect(service.getPort('mainnet', 'https', 'symbol-sakura-16.next-web-technology.com')).toBe(3001);
    expect(service.getPort('mainnet', 'https', 'a.symbol.lcnem.net')).toBe(443);
    expect(service.getPort('mainnet', 'http', 'symbol-sakura-16.next-web-technology.com')).toBe(3000);
    expect(service.getPort('testnet', 'https', 'symbol-sakura-16.next-web-technology.com')).toBe(3001);
    expect(service.getPort('testnet', 'http', 'symbol-sakura-16.next-web-technology.com')).toBe(3000);
  });

  it('getInitialNodes', () => {
    expect(service.getInitialNodes('mainnet', 'https')).toEqual(MAINNET_HTTPS_NODES);
    expect(service.getInitialNodes('mainnet', 'http')).toEqual(MAINNET_HTTP_NODES);
    expect(service.getInitialNodes('testnet', 'https')).toEqual(TESTNET_HTTPS_NODES);
    expect(service.getInitialNodes('testnet', 'http')).toEqual(TESTNET_HTTP_NODES);
  });

  it('convertNodeToNodeUrl', () => {
    expect(service.convertNodeToNodeUrl(MAINNET_HTTPS_REGULAR_NODE)).toEqual(MAINNET_HTTPS_REGULAR_NODE_URL);
    expect(service.convertNodeToNodeUrl(MAINNET_HTTPS_IREGULAR_NODE)).toEqual(MAINNET_HTTPS_IREGULAR_NODE_URL);
    expect(service.convertNodeToNodeUrl(MAINNET_HTTP_REGULAR_NODE)).toEqual(MAINNET_HTTP_REGULAR_NODE_URL);
    expect(service.convertNodeToNodeUrl(TESTNET_HTTPS_REGULAR_NODE)).toEqual(TESTNET_HTTPS_REGULAR_NODE_URL);
    expect(service.convertNodeToNodeUrl(TESTNET_HTTP_REGULAR_NODE)).toEqual(TESTNET_HTTP_REGULAR_NODE_URL);
  });

  it('convertNodesToNodeUrls', () => {
    expect(service.convertNodesToNodeUrls(MAINNET_HTTPS_NODES)).toEqual(MAINNET_HTTPS_NODE_URLS);
    expect(service.convertNodesToNodeUrls(MAINNET_HTTP_NODES)).toEqual(MAINNET_HTTP_NODE_URLS);
    expect(service.convertNodesToNodeUrls(TESTNET_HTTPS_NODES)).toEqual(TESTNET_HTTPS_NODE_URLS);
    expect(service.convertNodesToNodeUrls(TESTNET_HTTP_NODES)).toEqual(TESTNET_HTTP_NODE_URLS);
  });

  function initTestUtils(network: Network, protocol: Protocol, nodes: Nodes, nodeUrls: string[]): void {
    service.init(network, protocol);
    expect(service.nodes).toEqual(nodes);
    expect(service.nodeUrls).toEqual(nodeUrls);
    if (service.node !== undefined) {
      expect(service.nodes?.includes(service.node)).toBeTrue();
    } else {
      throw new Error('service.node must not be undefined!');
    }
    if (service.nodeUrl !== undefined) {
      expect(service.nodeUrls?.includes(service.nodeUrl)).toBeTrue();
    } else {
      throw new Error('service.nodeUrl must not be undefined!');
    }
    expect(service.convertNodeToNodeUrl(service.node)).toBe(service.nodeUrl);
  }
  it('init', () => {
    initTestUtils('mainnet', 'https', MAINNET_HTTPS_NODES, MAINNET_HTTPS_NODE_URLS);
    initTestUtils('mainnet', 'http', MAINNET_HTTP_NODES, MAINNET_HTTP_NODE_URLS);
    initTestUtils('testnet', 'https', TESTNET_HTTPS_NODES, TESTNET_HTTPS_NODE_URLS);
    initTestUtils('testnet', 'http', TESTNET_HTTP_NODES, TESTNET_HTTP_NODE_URLS);
  });

  function removeNodeAndSelectAnotherNodeTestUtils(network: Network, protocol: Protocol, node: Node): void {
    service.init(network, protocol);
    const beforeNodesLength = service.nodes?.length;
    const beforeNodeUrlsLength = service.nodes?.length;
    const selectedNode = service.removeNodeAndSelectAnotherNode(node);
    if (selectedNode !== undefined) {
      expect(service.nodes?.includes(selectedNode)).toBeTrue();
    } else {
      throw new Error('selectedNode must not be undefined!');
    }
    if (service.nodes !== undefined) {
      expect(service.nodes?.includes(node)).toBeFalse();
    }
    const afterNodesLength = service.nodes?.length;
    const afterNodeUrlsLength = service.nodeUrls?.length;
    if (beforeNodesLength !== undefined) {
      expect(afterNodesLength).toBe(beforeNodesLength - 1);
    } else {
      throw new Error('beforeNodesLengh must not be undefined!');
    }
    if (beforeNodeUrlsLength !== undefined) {
      expect(afterNodeUrlsLength).toBe(beforeNodeUrlsLength -1);
    } else {
      throw new Error('beforeNodeUrlsLength must not be undefined!');
    }
    if (service.node !== undefined) {
      expect(selectedNode).toEqual(service.node);
    } else {
      throw new Error('service.node must not be undefined!');
    }
    if (service.nodeUrl !== undefined) {
      expect(service.convertNodeToNodeUrl(selectedNode)).toBe(service.nodeUrl);
    } else {
      throw new Error('service.nodeUrl must not be undefined!');
    }
  }
  it('removeNodeAndSelectAnotherNode', () => {
    removeNodeAndSelectAnotherNodeTestUtils('mainnet', 'https', MAINNET_HTTPS_REGULAR_NODE);
    removeNodeAndSelectAnotherNodeTestUtils('mainnet', 'https', MAINNET_HTTPS_IREGULAR_NODE);
    removeNodeAndSelectAnotherNodeTestUtils('mainnet', 'http', MAINNET_HTTP_REGULAR_NODE);
    removeNodeAndSelectAnotherNodeTestUtils('testnet', 'https', TESTNET_HTTPS_REGULAR_NODE);
    removeNodeAndSelectAnotherNodeTestUtils('testnet', 'http', TESTNET_HTTP_REGULAR_NODE);
  });

  function removeNodeUrlAndSelectAnotherNodeUrlTestUtils(network: Network, protocol: Protocol, nodeUrl: string): void {
    service.init(network, protocol);
    const beforeNodesLength = service.nodes?.length;
    const beforeNodeUrlsLength = service.nodes?.length;
    const selectedNodeUrl = service.removeNodeUrlAndSelectAnotherNodeUrl(nodeUrl);
    if (selectedNodeUrl !== undefined) {
      expect(service.nodeUrls?.includes(selectedNodeUrl)).toBeTrue();
    } else {
      throw new Error('selectedNodeUrl must not be undefined!');
    }
    if (nodeUrl !== undefined) {
      expect(service.nodeUrls?.includes(nodeUrl)).toBeFalse();
    }
    const afterNodesLength = service.nodes?.length;
    const afterNodeUrlsLength = service.nodeUrls?.length;
    if (beforeNodesLength !== undefined) {
      expect(afterNodesLength).toBe(beforeNodesLength - 1);
    } else {
      throw new Error('beforeNodesLengh must not be undefined!');
    }
    if (beforeNodeUrlsLength !== undefined) {
      expect(afterNodeUrlsLength).toBe(beforeNodeUrlsLength -1);
    } else {
      throw new Error('beforeNodeUrlsLength must not be undefined!');
    }
    if (service.nodeUrl !== undefined) {
      expect(selectedNodeUrl).toBe(service.nodeUrl);
    } else {
      throw new Error('service.nodeUrl must not be undefined!');
    }
    if (service.nodeUrl !== undefined && service.node !== undefined) {
      expect(service.convertNodeToNodeUrl(service.node)).toEqual(service.nodeUrl);
    } else {
      throw new Error('service.nodeUrl must not be undefined!');
    }
  }
  it('removeNodeUrlAndSelectAnotherNodeUrl', () => {
    removeNodeUrlAndSelectAnotherNodeUrlTestUtils('mainnet', 'https', 'https://symbol-sakura-16.next-web-technology.com:3001');
    removeNodeUrlAndSelectAnotherNodeUrlTestUtils('mainnet', 'https', 'https://a.symbol.lcnem.net:443');
    removeNodeUrlAndSelectAnotherNodeUrlTestUtils('mainnet', 'http', 'http://symbol-sakura-16.next-web-technology.com:3000');
    removeNodeUrlAndSelectAnotherNodeUrlTestUtils('testnet', 'https', 'https://symbol-test.next-web-technology.com:3001');
    removeNodeUrlAndSelectAnotherNodeUrlTestUtils('testnet', 'http', 'http://symbol-test.next-web-technology.com:3000');
  });
});
