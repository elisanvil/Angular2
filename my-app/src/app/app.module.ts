import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackendApiService } from './backend-api.service';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { ConvertToEuroPipe } from './convert-to-euro/convert-to-euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective,
    ConvertToEuroPipe
  ],
  imports: [
    BrowserModule,
    AdminModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
