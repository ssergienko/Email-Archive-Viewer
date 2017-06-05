import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'footer',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './footer.component.css'
  ],
  template: `
    <span></span>
  `
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('Footer component ngOnInit');
  }
}
