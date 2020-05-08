import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxDesktopModule} from "ngx-desktop";
import {FormsModule} from "@angular/forms";
import { ButtonDemoComponent } from './components/button-demo/button-demo.component';
import { OsSwitchComponent } from './components/os-switch/os-switch.component';
import { CheckboxDemoComponent } from './components/checkbox-demo/checkbox-demo.component';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { RadioDemoComponent } from './components/radio-demo/radio-demo.component';
import { WindowDemoComponent } from './components/window-demo/window-demo.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { ToolbarNavDemoComponent } from './components/toolbar-nav-demo/toolbar-nav-demo.component';
import { ToolbarDemoComponent } from './components/toolbar-demo/toolbar-demo.component';
import { TextDemoComponent } from './components/text-demo/text-demo.component';
import { SegmentedControlDemoComponent } from './components/segmented-control-demo/segmented-control-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponent,
    OsSwitchComponent,
    CheckboxDemoComponent,
    InputDemoComponent,
    ProgressCircleComponent,
    RadioDemoComponent,
    WindowDemoComponent,
    TitleBarComponent,
    ToolbarNavDemoComponent,
    ToolbarDemoComponent,
    TextDemoComponent,
    SegmentedControlDemoComponent,
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
