import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { RegistrationComponent } from './registration/registration.component';
import { KuhinjaComponent } from './kvizovi/kuhinja/kuhinja.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { PticeComponent } from './kvizovi/ptice/ptice.component';
import { RefleksiSonantnogLComponent } from './kvizovi/refleksi-sonantnog-l/refleksi-sonantnog-l.component';
import { SinonimiMeseciUGodiniComponent } from './kvizovi/sinonimi-meseci-u-godini/sinonimi-meseci-u-godini.component';
import { RadniGlagolskiPridevComponent } from './kvizovi/radni-glagolski-pridev/radni-glagolski-pridev.component';
import { MlogoS6mSeMuchilaComponent } from './tekstovi/mlogo-s6m-se-muchila/mlogo-s6m-se-muchila.component';
import { MlogoS6mSeMuchilaKvizComponent } from './tekstovi/mlogo-s6m-se-muchila-kviz/mlogo-s6m-se-muchila-kviz.component';
import { BrojeviIBrojneImeniceComponent } from './kvizovi/grammar/brojevi-i-brojne-imenice/brojevi-i-brojne-imenice.component';
import { VokativComponent } from './kvizovi/grammar/vokativ/vokativ.component';
import { VokalizacijaPoluglasnikaComponent } from './kvizovi/grammar/vokalizacija-poluglasnika/vokalizacija-poluglasnika.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { GlagolJesamComponent } from './kvizovi/grammar/glagol-jesam/glagol-jesam.component';
import { TokenInterceptor } from './services/token-interceptor';
import { AuthGuard } from './guard/auth.guard';
import { ListOfUsersComponent } from './admin/list-of-users/list-of-users.component';
import { AdminGuard } from './guard/admin.guard';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ImaNaukaAImaIOdukaComponent } from './tekstovi/ima-nauka-a-ima-i-oduka/ima-nauka-a-ima-i-oduka.component';
import { ImaNaukaAImaIOdukaKvizComponent } from './tekstovi/ima-nauka-a-ima-i-oduka-kviz/ima-nauka-a-ima-i-oduka-kviz.component';
import { OvojSiTekjePocheDaSeOsnuraComponent } from './tekstovi/ovoj-si-tekje-poche-da-se-osnura/ovoj-si-tekje-poche-da-se-osnura.component';
import { OvojSiTekjePocheDaSeOsnuraKvizComponent } from './tekstovi/ovoj-si-tekje-poche-da-se-osnura-kviz/ovoj-si-tekje-poche-da-se-osnura-kviz.component';
import { SinonimiTurcizmiComponent } from './kvizovi/vocab/sinonimi-turcizmi/sinonimi-turcizmi.component';
import { AlbanizmiComponent } from './kvizovi/vocab/albanizmi/albanizmi.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    ChangeBgDirective,
    RegistrationComponent,
    KuhinjaComponent,
    ZivotinjeComponent,
    InsektiComponent,
    PticeComponent,
    RefleksiSonantnogLComponent,
    SinonimiMeseciUGodiniComponent,
    RadniGlagolskiPridevComponent,
    MlogoS6mSeMuchilaComponent,
    MlogoS6mSeMuchilaKvizComponent,
    BrojeviIBrojneImeniceComponent,
    VokativComponent,
    VokalizacijaPoluglasnikaComponent,
    InfoPageComponent,
    GlagolJesamComponent,
    ListOfUsersComponent,
    ScoreboardComponent,
    ImaNaukaAImaIOdukaComponent,
    ImaNaukaAImaIOdukaKvizComponent,
    OvojSiTekjePocheDaSeOsnuraComponent,
    OvojSiTekjePocheDaSeOsnuraKvizComponent,
    SinonimiTurcizmiComponent,
    AlbanizmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //MatSliderModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
