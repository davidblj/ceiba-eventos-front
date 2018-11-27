import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddEventComponent } from "./components/add-event/add-event.component";

const routes: Routes = [
    {
        path: "",
        component: AddEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AddEventRoutingModule { }
