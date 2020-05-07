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
export class NgxDesktopModule {
    static forRoot(os = 'auto') {
        return {
            ngModule: NgxDesktopModule,
            providers: [{
                    provide: OS_TOKEN,
                    useValue: os
                }]
        };
    }
}
NgxDesktopModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDesktopModule });
NgxDesktopModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDesktopModule_Factory(t) { return new (t || NgxDesktopModule)(); }, imports: [[
            FormsModule,
            CommonModule,
            BrowserAnimationsModule,
            ReactiveFormsModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvbmd4LWRlc2t0b3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0MsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sNERBQTRELENBQUM7QUFDckcsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sc0VBQXNFLENBQUM7QUFDbkgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FB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LG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osdUJBQXVCO29CQUN2QixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLHlCQUF5QjtvQkFDekIsNkJBQTZCO29CQUM3QixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsd0JBQXdCO29CQUN4Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsMEJBQTBCO29CQUMxQixzQ0FBc0M7b0JBQ3RDLG9DQUFvQztvQkFDcEMsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLHdCQUF3QjtvQkFDeEIsNEJBQTRCO29CQUM1Qiw2QkFBNkI7b0JBQzdCLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHlCQUF5QjtpQkFDMUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ3hEZXNrdG9wQ29tcG9uZW50fSBmcm9tICcuL25neC1kZXNrdG9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2hlY2tib3hDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0JveENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ib3gvYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xhYmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JhZGlvQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge09zVXRpbHN9IGZyb20gXCIuL3V0aWxzL29zLnV0aWxzXCI7XHJcbmltcG9ydCB7U2VnbWVudGVkQ29udHJvbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTZWdtZW50ZWRDb250cm9sSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC1pdGVtL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGV4dElucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUZXh0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaW5kb3dDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2l6ZURpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1zaXplLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BIZWlnaHREaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaGVpZ2h0LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BXaWR0aERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aWR0aC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wQm9sZERpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ib2xkLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BNYXJnaW5EaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbWFyZ2luLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BQYWRkaW5nRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXBhZGRpbmcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnREaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50RGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXZlcnRpY2FsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wT3NDbGFzc0RpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1vcy1jbGFzcy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wTW91c2VvdmVyRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLW1vdXNlb3Zlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wRm9jdXNEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtZm9jdXMuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcE1vdXNlZG93bkRpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1tb3VzZWRvd24uZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFdpbmRvd0JsdXJEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3Atd2luZG93LWJsdXIuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7U3R5bGVWYWx1ZVBpcGV9IGZyb20gXCIuL3BpcGVzL3N0eWxlLXZhbHVlLnBpcGVcIjtcclxuaW1wb3J0IHtUaXRsZUJhckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb2dyZXNzQ2lyY2xlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2dyZXNzLWNpcmNsZS9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VG9vbGJhckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VG9vbGJhck5hdkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90b29sYmFyLW5hdi90b29sYmFyLW5hdi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUb29sYmFyTmF2SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90b29sYmFyLW5hdi1pdGVtL3Rvb2xiYXItbmF2LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmF2UGFuZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXYtcGFuZS9uYXYtcGFuZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXZQYW5lSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXYtcGFuZS1pdGVtL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2VhcmNoRmllbGRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BMYXlvdXREaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbGF5b3V0LmRpcmVjdGl2ZVwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ3hEZXNrdG9wQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBCb3hDb21wb25lbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCxcclxuICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgVGV4dElucHV0Q29tcG9uZW50LFxyXG4gICAgU2VnbWVudGVkQ29udHJvbENvbXBvbmVudCxcclxuICAgIFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50LFxyXG4gICAgVGV4dENvbXBvbmVudCxcclxuICAgIFdpbmRvd0NvbXBvbmVudCxcclxuICAgIFZpZXdDb21wb25lbnQsXHJcbiAgICBOZ3hEZXNrdG9wU2l6ZURpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BIZWlnaHREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wV2lkdGhEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wQm9sZERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BNYXJnaW5EaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wUGFkZGluZ0RpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50RGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50RGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE9zQ2xhc3NEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wTW91c2VvdmVyRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEZvY3VzRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE1vdXNlZG93bkRpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BXaW5kb3dCbHVyRGlyZWN0aXZlLFxyXG4gICAgU3R5bGVWYWx1ZVBpcGUsXHJcbiAgICBUaXRsZUJhckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJOYXZDb21wb25lbnQsXHJcbiAgICBUb29sYmFyTmF2SXRlbUNvbXBvbmVudCxcclxuICAgIE5hdlBhbmVDb21wb25lbnQsXHJcbiAgICBOYXZQYW5lSXRlbUNvbXBvbmVudCxcclxuICAgIFNlYXJjaEZpZWxkQ29tcG9uZW50LFxyXG4gICAgTmd4RGVza3RvcExheW91dERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3hEZXNrdG9wQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBCb3hDb21wb25lbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCxcclxuICAgIFJhZGlvQ29tcG9uZW50LFxyXG4gICAgVGV4dElucHV0Q29tcG9uZW50LFxyXG4gICAgU2VnbWVudGVkQ29udHJvbENvbXBvbmVudCxcclxuICAgIFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50LFxyXG4gICAgVGV4dENvbXBvbmVudCxcclxuICAgIFdpbmRvd0NvbXBvbmVudCxcclxuICAgIFZpZXdDb21wb25lbnQsXHJcbiAgICBOZ3hEZXNrdG9wU2l6ZURpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BIZWlnaHREaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wV2lkdGhEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wQm9sZERpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BNYXJnaW5EaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wUGFkZGluZ0RpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50RGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50RGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE9zQ2xhc3NEaXJlY3RpdmUsXHJcbiAgICBOZ3hEZXNrdG9wTW91c2VvdmVyRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcEZvY3VzRGlyZWN0aXZlLFxyXG4gICAgTmd4RGVza3RvcE1vdXNlZG93bkRpcmVjdGl2ZSxcclxuICAgIE5neERlc2t0b3BXaW5kb3dCbHVyRGlyZWN0aXZlLFxyXG4gICAgU3R5bGVWYWx1ZVBpcGUsXHJcbiAgICBUaXRsZUJhckNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJOYXZDb21wb25lbnQsXHJcbiAgICBUb29sYmFyTmF2SXRlbUNvbXBvbmVudCxcclxuICAgIE5hdlBhbmVDb21wb25lbnQsXHJcbiAgICBOYXZQYW5lSXRlbUNvbXBvbmVudCxcclxuICAgIFNlYXJjaEZpZWxkQ29tcG9uZW50LFxyXG4gICAgTmd4RGVza3RvcExheW91dERpcmVjdGl2ZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChvczogT3NUeXBlcyA9ICdhdXRvJyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neERlc2t0b3BNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3tcclxuICAgICAgICBwcm92aWRlOiBPU19UT0tFTixcclxuICAgICAgICB1c2VWYWx1ZTogb3NcclxuICAgICAgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==