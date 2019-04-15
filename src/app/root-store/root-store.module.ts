import { SafeItemEffects } from './effects/safe-item.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SafeEffects } from './effects/safe.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SafeItemEffects, SafeEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({name: 'CoolSafes'}) : [],
  ],
})
export class RootStoreModule {}
