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
import {NgxDesktopSizeDirective} from "./directives/ngx-desktop-size.directive";
import {NgxDesktopHeightDirective} from "./directives/ngx-desktop-height.directive";
import {NgxDesktopWidthDirective} from "./directives/ngx-desktop-width.directive";
import {NgxDesktopBoldDirective} from "./directives/ngx-desktop-bold.directive";
import {NgxDesktopMarginDirective} from "./directives/ngx-desktop-margin.directive";
import {NgxDesktopPaddingDirective} from "./directives/ngx-desktop-padding.directive";
import {NgxDesktopHorizontalAlignmentDirective} from "./directives/ngx-desktop-horizontal-alignment.directive";
import {NgxDesktopVerticalAlignmentDirective} from "./directives/ngx-desktop-vertical-alignment.directive";
import {NgxDesktopOsClassDirective} from "./directives/ngx-desktop-os-class.directive";
import {NgxDesktopMouseoverDirective} from "./directives/ngx-desktop-mouseover.directive";
import {NgxDesktopFocusDirective} from "./directives/ngx-desktop-focus.directive";
import {NgxDesktopMousedownDirective} from "./directives/ngx-desktop-mousedown.directive";
import {NgxDesktopWindowBlurDirective} from "./directives/ngx-desktop-window-blur.directive";
import {StyleValuePipe} from "./pipes/style-value.pipe";


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
    NgxDesktopSizeDirective,
    NgxDesktopHeightDirective,
    NgxDesktopWidthDirective,
    NgxDesktopBoldDirective,
    NgxDesktopMarginDirective,
    NgxDesktopPaddingDirective,
    NgxDesktopHorizontalAlignmentDirective,
    NgxDesktopVerticalAlignmentDirective,
    NgxDesktopOsClassDirective,
    NgxDesktopMouseoverDirective,
    NgxDesktopFocusDirective,
    NgxDesktopMousedownDirective,
    NgxDesktopWindowBlurDirective,
    StyleValuePipe,
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
    NgxDesktopSizeDirective,
    NgxDesktopHeightDirective,
    NgxDesktopWidthDirective,
    NgxDesktopBoldDirective,
    NgxDesktopMarginDirective,
    NgxDesktopPaddingDirective,
    NgxDesktopHorizontalAlignmentDirective,
    NgxDesktopVerticalAlignmentDirective,
    NgxDesktopOsClassDirective,
    NgxDesktopMouseoverDirective,
    NgxDesktopFocusDirective,
    NgxDesktopMousedownDirective,
    NgxDesktopWindowBlurDirective,
    StyleValuePipe,
  ]
})
export class NgxDesktopModule {
  static forRoot(os: OsTypes = 'auto'): ModuleWithProviders {
    return {
      ngModule: NgxDesktopModule,
      providers: [{
        provide: OS_TOKEN,
        useValue: os
      }]
    };
  }
}
