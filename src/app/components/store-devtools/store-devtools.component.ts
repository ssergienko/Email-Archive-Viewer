import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-store-devtools',
  template: `
    <ngrx-store-log-monitor #storeMonitor
      toggleCommand="ctrl-t"
      positionCommand="ctrl-m"
      [expandEntries]="true">
    </ngrx-store-log-monitor>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    md-sidenav-layout {
      width: 70% !important;
    }
  `]
})

export class StoreDevToolsComponent {}
