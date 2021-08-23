import { Component } from '@angular/core';

@Component({
  selector: 'app-view-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ViewReferenceComponent {
  referenceLinks = [
    {
      linkUrl: 'https://github.com/nemtus/symbol-sample-angular',
      imagePath: '../../../assets/logo-github.png',
    },
    {
      linkUrl: 'https://docs.symbolplatform.com/ja/',
      imagePath: '../../../assets/logo-symbol-color.png',
    },
    {
      linkUrl: 'https://angular.jp/',
      imagePath: '../../../favicon.ico',
    },
    {
      linkUrl: 'https://nemtus.com/',
      imagePath: '../../../assets/logo-nemtus-color.png',
    },
    {
      linkUrl: 'https://twitter.com/NemtusOfficial',
      imagePath: '../../../assets/logo-twitter-color.png',
    },
  ];

  constructor() {}
}
