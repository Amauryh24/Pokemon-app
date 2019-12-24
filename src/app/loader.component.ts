import { Component } from "@angular/core";

@Component({
  selector: "pokemon-loader",
  template: `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  `
})
export class LoaderComponent {}
