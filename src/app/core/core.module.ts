import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors/interceptor-providers';
import { EventService } from './services/event.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInService } from './services/log-in.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    interceptorProviders,
    EventService,
    LogInService
  ]
})
export class CoreModule { }
