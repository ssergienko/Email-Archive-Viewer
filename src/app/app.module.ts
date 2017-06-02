import { ApplicationRef, NgModule } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { CoreModule } from './components/core/core.module';
import { SharedModule } from './shared/shared.module';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReviewsModule } from './components/reviews/reviews.module';

import { Store, StoreModule } from '@ngrx/store';
import { AppState } from './shared/reducers/root.reducer';
import { rootReducer } from './shared/reducers/root.reducer';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ReviewsModule,
    AppRoutingModule,
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, private _store: Store<AppState>) {}
  hmrOnInit(store) {
    if (!store || !store.rootState) return;
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }
    if ('restoreInputValues' in store) { store.restoreInputValues(); }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this._store.take(1).subscribe(s => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
