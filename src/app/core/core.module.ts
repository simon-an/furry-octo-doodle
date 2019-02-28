import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'environments/environment';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { SafeInMemDataService } from './services/in-memory-safe.service';
import { TimingInterceptor } from './interceptors/timing.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true,
        }),
  ],
  providers: [
    { provide: SafeInMemDataService, useExisting: InMemoryDbService },
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
  ],
})
export class CoreModule {}
