import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventManagementComponent } from "./components/event-management/event-management.component";

const routes: Routes = [
    {
        path: "",
        component: EventManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventManagementRoutingModule { }
