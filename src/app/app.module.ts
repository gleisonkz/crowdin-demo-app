import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { WelcomeModule } from 'src/app/pages/welcome/welcome.module';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { TranslocoRootModule } from './transloco-root.module';

registerLocaleData(pt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WelcomeModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
