import { Routes, RouterModule } from "@angular/router";
import { EventSummaryComponent } from "./components/event-summary/event-summary.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: EventSummaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventSummaryRoutingModule { }
