import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showMenuBoxContent();
  }

  applyShowClassInMenuBoxContent(): void {

    const menuBox = document.querySelector('.js-menu-box-content');

    if (!menuBox) {

      return;
    }

    menuBox.classList.toggle('menu-box-active');
  }

  showMenuBoxContent(): void {

    const buttonMenu = document.querySelector('.js-button-menu');

    if (!buttonMenu) {

      return;
    }

    buttonMenu.addEventListener('click', () => {

      this.applyShowClassInMenuBoxContent();
    });
  }
}
