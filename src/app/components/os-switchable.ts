import {EventEmitter, Input, Output} from "@angular/core";
import {OsTypes} from "../../../projects/ngx-desktop/src/lib/types/types";

export abstract class OsSwitchable {
  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();
}
