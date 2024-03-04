import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// ** provideHttpClient(withFetch()) para el siguiente warning
// NG02801: Angular detected that `HttpClient` is not configured to use `fetch` APIs.
// It's strongly recommended to enable `fetch` for applications that use Server-Side
// Rendering for better performance and compatibility. To enable `fetch`, add the
// `withFetch()` to the `provideHttpClient()` call at the root of the application.
