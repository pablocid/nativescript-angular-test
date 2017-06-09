import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { DialogContent, DialogContent2 } from './shared/dialog';
import { RowHolder, CollectionDB } from './shared/services';

import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { PlantRowComponent } from './pages/plantRow';
import { Router, RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [RowHolder, CollectionDB],
  entryComponents: [DialogContent, DialogContent2],
  bootstrap: [AppComponent]
})
export class AppModule { }