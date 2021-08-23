import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Symbol x Angular';
  imageLinks = [
    {
      linkUrl: 'https://docs.symbolplatform.com/ja/',
      imagePath: '../assets/logo-symbol-color.png',
    },
    {
      linkUrl: 'https://angular.jp/',
      imagePath: '../favicon.ico',
    },
    {
      linkUrl: 'https://nemtus.com/',
      imagePath: '../assets/logo-nemtus-color.png',
    },
  ];
  sideNavLinks = [
    {
      name: 'Home',
      icon: 'home',
      linkPath: '/',
    },
    {
      name: 'Account',
      icon: 'account_circle',
      linkPath: '/explorer/accounts/NDLXI3OMXJCHO2A2ZD54TO4UZJQQV36DQYK33SA',
    },
  ];
}
