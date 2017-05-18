import { ApplicationRef, NgModule } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { routing } from './routes';
import reducer from './store/root.reducer';
import { NotFound404Component } from './components/not-found404.component';

import { EmailsModule } from './components/emails-container';
import { EmailsActions } from './components/emails-container/store/emails.actions';
import { EmailService } from './components/emails-container/emails.service';
import { EmailsEffects } from './components/emails-container/store/emails.effects';

import { AppState } from './store/root.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreDevToolsModule } from './components/store-devtools/store-devtools.module';
import { useLogMonitor } from '@ngrx/store-log-monitor';
const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) {
  STORE_DEV_TOOLS_IMPORTS.push(...[
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    })
  ]);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    EmailsModule,
    routing,
    StoreModule.provideStore(reducer),
    EffectsModule.run(EmailsEffects),
    STORE_DEV_TOOLS_IMPORTS,
    StoreDevToolsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [EmailsActions, EmailService],
  bootstrap: [AppComponent]
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
