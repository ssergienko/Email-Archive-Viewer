import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private _store: Store<any>
  ) {}
  public ngOnInit() {
    console.log('Home component ngOnInit');
  }
  public addItemToCart(){
    console.log('addItemToCart');
  }
}
