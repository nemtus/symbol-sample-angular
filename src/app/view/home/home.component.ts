import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ViewHomeComponent implements OnInit {
  referenceLinks = [
    {
      linkUrl: 'https://github.com/nemtus/symbol-sample-angular',
      imagePath: '../../../assets/logo-github.png'
    },
    {
      linkUrl: 'https://docs.symbolplatform.com/ja/',
      imagePath: '../../../assets/logo-symbol-color.png'
    },
    {
      linkUrl: 'https://angular.jp/',
      imagePath: '../../../favicon.ico'
    },
    {
      linkUrl: 'https://nemtus.com/',
      imagePath: '../../../assets/logo-nemtus-color.png'
    },
    {
      linkUrl: 'https://twitter.com/NemtusOfficial',
      imagePath: '../../../assets/logo-twitter-color.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}