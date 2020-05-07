import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxDesktopModule} from "../../projects/ngx-desktop/src/lib/ngx-desktop.module";
import {FormsModule} from "@angular/forms";
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { OsSwitchComponent } from './components/os-switch/os-switch.component';
import { CheckboxDemoComponent } from './components/checkbox-demo/checkbox-demo.component';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    OsSwitchComponent,
    CheckboxDemoComponent,
    InputDemoComponent,
    ProgressCircleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDesktopModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
