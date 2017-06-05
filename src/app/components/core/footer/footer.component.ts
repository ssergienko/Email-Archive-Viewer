import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'footer',
  encapsulation: ViewEncapsulation.None,
  template: `
    <span>
      <a href="/reviews">Отзывы</a>
    </span>
  `,
  styleUrls: [
    './footer.component.css'
  ]
})
export class FooterComponent implements OnInit {
  public ngOnInit() {
    console.log('Footer component ngOnInit');
  }
}
