import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {NgxDesktopComponent} from './ngx-desktop.component';
import {CheckboxComponent} from "./components/checkbox/checkbox.component";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "./components/button/button.component";
import {BoxComponent} from "./components/box/box.component";
import {LabelComponent} from "./components/label/label.component";
import {RadioComponent} from "./components/radio/radio.component";
import {CommonModule} from "@angular/common";
import {OS_TOKEN, OsTypes} from "./types/types";
import {OsUtils} from "./utils/os.utils";
import {SegmentedControlComponent} from "./components/segmented-control/segmented-control.component";
import {SegmentedControlItemComponent} from "./components/segmented-control-item/segmented-control-item.component";
import {TextInputComponent} from "./components/text-input/text-input.component";
import {ViewComponent} from "./components/view/view.component";
import {TextComponent} from "./components/text/text.component";
import {WindowComponent} from "./components/window/window.component";


@NgModule({
  declarations: [
    NgxDesktopComponent,
    CheckboxComponent,
    ButtonComponent,
    BoxComponent,
    LabelComponent,
    RadioComponent,
    TextInputComponent,
    SegmentedControlComponent,
    SegmentedControlItemComponent,
    TextComponent,
    WindowComponent,
    ViewComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NgxDesktopComponent,
    CheckboxComponent,
    ButtonComponent,
    BoxComponent,
    LabelComponent,
    RadioComponent,
    TextInputComponent,
    SegmentedControlComponent,
    SegmentedControlItemComponent,
    TextComponent,
    WindowComponent,
    ViewComponent,
  ]
})
export class NgxDesktopModule {
  static forRoot(os: OsTypes | 'auto' = 'auto'): ModuleWithProviders {
    return {
      ngModule: NgxDesktopModule,
      providers: [{
        provide: OS_TOKEN,
        useValue: os === 'auto' ? OsUtils.os() : os
      }]
    };
  }
}
