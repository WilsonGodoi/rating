import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOfGamesComponent } from "./pages/list-of-games/list-of-games.component";

const routes: Routes = [
  { path: "", component: ListOfGamesComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
