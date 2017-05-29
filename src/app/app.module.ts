import { ApplicationRef, NgModule } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { CoreModule } from './components/core/core.module';
import { SharedModule } from './components/shared/shared.module';

import { AppComponent } from './app.component';

import { routing } from './routes';

import { AppState } from './store/root.reducer';
import reducer from './store/root.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EmailsModule } from './components/emails-container/emails.module';
import { EmailsActions } from './components/emails-container/store/emails.actions';
import { EmailService } from './components/emails-container/emails.service';
import { EmailsEffects } from './components/emails-container/store/emails.effects';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    EmailsModule,
    routing,
    StoreModule.provideStore(reducer),
    EffectsModule.run(EmailsEffects)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ EmailsActions, EmailService ],
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
