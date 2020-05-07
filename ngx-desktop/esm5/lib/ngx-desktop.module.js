import { NgModule } from '@angular/core';
import { NgxDesktopComponent } from './ngx-desktop.component';
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./components/button/button.component";
import { BoxComponent } from "./components/box/box.component";
import { LabelComponent } from "./components/label/label.component";
import { RadioComponent } from "./components/radio/radio.component";
import { CommonModule } from "@angular/common";
import { OS_TOKEN } from "./types/types";
import { SegmentedControlComponent } from "./components/segmented-control/segmented-control.component";
import { SegmentedControlItemComponent } from "./components/segmented-control-item/segmented-control-item.component";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { ViewComponent } from "./components/view/view.component";
import { TextComponent } from "./components/text/text.component";
import { WindowComponent } from "./components/window/window.component";
import { NgxDesktopSizeDirective } from "./directives/ngx-desktop-size.directive";
import { NgxDesktopHeightDirective } from "./directives/ngx-desktop-height.directive";
import { NgxDesktopWidthDirective } from "./directives/ngx-desktop-width.directive";
import { NgxDesktopBoldDirective } from "./directives/ngx-desktop-bold.directive";
import { NgxDesktopMarginDirective } from "./directives/ngx-desktop-margin.directive";
import { NgxDesktopPaddingDirective } from "./directives/ngx-desktop-padding.directive";
import { NgxDesktopHorizontalAlignmentDirective } from "./directives/ngx-desktop-horizontal-alignment.directive";
import { NgxDesktopVerticalAlignmentDirective } from "./directives/ngx-desktop-vertical-alignment.directive";
import { NgxDesktopOsClassDirective } from "./directives/ngx-desktop-os-class.directive";
import { NgxDesktopMouseoverDirective } from "./directives/ngx-desktop-mouseover.directive";
import { NgxDesktopFocusDirective } from "./directives/ngx-desktop-focus.directive";
import { NgxDesktopMousedownDirective } from "./directives/ngx-desktop-mousedown.directive";
import { NgxDesktopWindowBlurDirective } from "./directives/ngx-desktop-window-blur.directive";
import { StyleValuePipe } from "./pipes/style-value.pipe";
import { TitleBarComponent } from "./components/title-bar/title-bar.component";
import { ProgressCircleComponent } from "./components/progress-circle/progress-circle.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ToolbarNavComponent } from "./components/toolbar-nav/toolbar-nav.component";
import { ToolbarNavItemComponent } from "./components/toolbar-nav-item/toolbar-nav-item.component";
import { NavPaneComponent } from "./components/nav-pane/nav-pane.component";
import { NavPaneItemComponent } from "./components/nav-pane-item/nav-pane-item.component";
import { SearchFieldComponent } from "./components/search-field/search-field.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxDesktopLayoutDirective } from "./directives/ngx-desktop-layout.directive";
import * as i0 from "@angular/core";
var NgxDesktopModule = /** @class */ (function () {
    function NgxDesktopModule() {
    }
    NgxDesktopModule.forRoot = function (os) {
        if (os === void 0) { os = 'auto'; }
        return {
            ngModule: NgxDesktopModule,
            providers: [{
                    provide: OS_TOKEN,
                    useValue: os
                }]
        };
    };
    NgxDesktopModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDesktopModule });
    NgxDesktopModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDesktopModule_Factory(t) { return new (t || NgxDesktopModule)(); }, imports: [[
                FormsModule,
                CommonModule,
                BrowserAnimationsModule,
                ReactiveFormsModule
            ]] });
    return NgxDesktopModule;
}());
export { NgxDesktopModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxDesktopModule, { declarations: [NgxDesktopComponent,
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
        TitleBarComponent,
        ProgressCircleComponent,
        ToolbarComponent,
        ToolbarNavComponent,
        ToolbarNavItemComponent,
        NavPaneComponent,
        NavPaneItemComponent,
        SearchFieldComponent,
        NgxDesktopLayoutDirective], imports: [FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule], exports: [NgxDesktopComponent,
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
        TitleBarComponent,
        ProgressCircleComponent,
        ToolbarComponent,
        ToolbarNavComponent,
        ToolbarNavItemComponent,
        NavPaneComponent,
        NavPaneItemComponent,
        SearchFieldComponent,
        NgxDesktopLayoutDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopModule, [{
        type: NgModule,
        args: [{
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
                    TitleBarComponent,
                    ProgressCircleComponent,
                    ToolbarComponent,
                    ToolbarNavComponent,
                    ToolbarNavItemComponent,
                    NavPaneComponent,
                    NavPaneItemComponent,
                    SearchFieldComponent,
                    NgxDesktopLayoutDirective,
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule
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
                    TitleBarComponent,
                    ProgressCircleComponent,
                    ToolbarComponent,
                    ToolbarNavComponent,
                    ToolbarNavItemComponent,
                    NavPaneComponent,
                    NavPaneItemComponent,
                    SearchFieldComponent,
                    NgxDesktopLayoutDirective,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvbmd4LWRlc2t0b3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0MsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFDckcsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sc0VBQXNFLENBQUM7QUFDbkgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FB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QkFDaEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QiwwQkFBMEI7b0JBQzFCLHNDQUFzQztvQkFDdEMsb0NBQW9DO29CQUNwQywwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsd0JBQXdCO29CQUN4Qiw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIseUJBQXlCO2lCQUMxQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05neERlc2t0b3BDb21wb25lbnR9IGZyb20gJy4vbmd4LWRlc2t0b3AuY29tcG9uZW50JztcclxuaW1wb3J0IHtDaGVja2JveENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Qm94Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JveC9ib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGFiZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UmFkaW9Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7T3NVdGlsc30gZnJvbSBcIi4vdXRpbHMvb3MudXRpbHNcIjtcclxuaW1wb3J0IHtTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NlZ21lbnRlZC1jb250cm9sL3NlZ21lbnRlZC1jb250cm9sLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUZXh0SW5wdXRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1ZpZXdDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RleHRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1dpbmRvd0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy93aW5kb3cvd2luZG93LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTaXplRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXNpemUuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcEhlaWdodERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1oZWlnaHQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFdpZHRoRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXdpZHRoLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BCb2xkRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLWJvbGQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcE1hcmdpbkRpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1tYXJnaW4uZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFBhZGRpbmdEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtcGFkZGluZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnREaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BPc0NsYXNzRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLW9zLWNsYXNzLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BNb3VzZW92ZXJEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbW91c2VvdmVyLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BGb2N1c0RpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1mb2N1cy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wTW91c2Vkb3duRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLW1vdXNlZG93bi5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wV2luZG93Qmx1ckRpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aW5kb3ctYmx1ci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlUGlwZX0gZnJvbSBcIi4vcGlwZXMvc3R5bGUtdmFsdWUucGlwZVwiO1xyXG5pbXBvcnQge1RpdGxlQmFyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RpdGxlLWJhci90aXRsZS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvZ3Jlc3NDaXJjbGVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUb29sYmFyTmF2Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3Rvb2xiYXItbmF2L3Rvb2xiYXItbmF2LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Rvb2xiYXJOYXZJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3Rvb2xiYXItbmF2LWl0ZW0vdG9vbGJhci1uYXYtaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXZQYW5lQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL25hdi1wYW5lL25hdi1wYW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05hdlBhbmVJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL25hdi1wYW5lLWl0ZW0vbmF2LXBhbmUtaXRlbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTZWFyY2hGaWVsZENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcExheW91dERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1sYXlvdXQuZGlyZWN0aXZlXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neERlc2t0b3BDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEJveENvbXBvbmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICBUZXh0SW5wdXRDb21wb25lbnQsXHJcbiAgICBTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgU2VnbWVudGVkQ29udHJvbEl0ZW1Db21wb25lbnQsXHJcbiAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgV2luZG93Q29tcG9uZW50LFxyXG4gICAgVmlld0NvbXBvbmVudCxcclxuICAgIE5neERlc2t0b3BTaXplRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEhlaWdodERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BXaWR0aERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BCb2xkRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE1hcmdpbkRpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BQYWRkaW5nRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wT3NDbGFzc0RpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BNb3VzZW92ZXJEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wRm9jdXNEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wTW91c2Vkb3duRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcFdpbmRvd0JsdXJEaXJlY3RpdmUsXHJcbiAgICBTdHlsZVZhbHVlUGlwZSxcclxuICAgIFRpdGxlQmFyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhck5hdkNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJOYXZJdGVtQ29tcG9uZW50LFxyXG4gICAgTmF2UGFuZUNvbXBvbmVudCxcclxuICAgIE5hdlBhbmVJdGVtQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoRmllbGRDb21wb25lbnQsXHJcbiAgICBOZ3hEZXNrdG9wTGF5b3V0RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5neERlc2t0b3BDb21wb25lbnQsXHJcbiAgICBDaGVja2JveENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEJveENvbXBvbmVudCxcclxuICAgIExhYmVsQ29tcG9uZW50LFxyXG4gICAgUmFkaW9Db21wb25lbnQsXHJcbiAgICBUZXh0SW5wdXRDb21wb25lbnQsXHJcbiAgICBTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgU2VnbWVudGVkQ29udHJvbEl0ZW1Db21wb25lbnQsXHJcbiAgICBUZXh0Q29tcG9uZW50LFxyXG4gICAgV2luZG93Q29tcG9uZW50LFxyXG4gICAgVmlld0NvbXBvbmVudCxcclxuICAgIE5neERlc2t0b3BTaXplRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEhlaWdodERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BXaWR0aERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BCb2xkRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE1hcmdpbkRpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BQYWRkaW5nRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wT3NDbGFzc0RpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BNb3VzZW92ZXJEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wRm9jdXNEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wTW91c2Vkb3duRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcFdpbmRvd0JsdXJEaXJlY3RpdmUsXHJcbiAgICBTdHlsZVZhbHVlUGlwZSxcclxuICAgIFRpdGxlQmFyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhck5hdkNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJOYXZJdGVtQ29tcG9uZW50LFxyXG4gICAgTmF2UGFuZUNvbXBvbmVudCxcclxuICAgIE5hdlBhbmVJdGVtQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoRmllbGRDb21wb25lbnQsXHJcbiAgICBOZ3hEZXNrdG9wTGF5b3V0RGlyZWN0aXZlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KG9zOiBPc1R5cGVzID0gJ2F1dG8nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4RGVza3RvcE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbe1xyXG4gICAgICAgIHByb3ZpZGU6IE9TX1RPS0VOLFxyXG4gICAgICAgIHVzZVZhbHVlOiBvc1xyXG4gICAgICB9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19