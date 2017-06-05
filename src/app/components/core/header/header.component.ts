import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header row">
      <div class="col-lg-2">
        <h2 class="logo">
          <a href="/home">МАГАЗИН</a>
        </h2>
      </div>
      <div class="col-lg-8"></div>
      <div class="col-lg-2"></div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('Header component ngOnInit');
  }
}
