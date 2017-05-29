import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <h2 class="bd-title" id="my-app-title">Email Archive Viewer</h2>
    </div>
  `,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {}
