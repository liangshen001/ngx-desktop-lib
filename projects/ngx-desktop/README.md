# NgxDesktop

Angular Desktop UI components (mac / windows)

The included components are as follows

* button (support mac or windows)
* checkbox (support mac or windows)
* text (support mac or windows)
* label (support mac or windows)
* text-input (support mac or windows)
* radio (support mac or windows)
* view (support mac or windows)
* window (support mac or windows)
* title-bar (support mac or windows)
* toolbar (support mac)
* toolbar-nav / toolbar-item (support mac)
* segmented-control / segmented-control-item (support mac)

## Demo

[https://liangshen001.github.io/ngx-desktop-lib/](https://liangshen001.github.io/ngx-desktop-lib/)

## Install
````
npm i ngx-desktop -s
````

## Usage

### import module

```
import {NgxDesktopModule} from "ngx-desktop";

@NgModule({
  imports: [
    NgxDesktopModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule { }
```

You can set the OS to use globally

* NgxDesktopModule.forRoot('mac');
* NgxDesktopModule.forRoot('windows');

default value is 'auto';
Will automatically switch according to the current system
