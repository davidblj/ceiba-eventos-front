import { Routes, RouterModule } from "@angular/router";
import { EventCategoriesComponent } from "./components/event-categories/event-categories.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: EventCategoriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventCategoriesRoutingModule { }
