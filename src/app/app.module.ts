import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListOfGamesComponent } from "./pages/list-of-games/list-of-games.component";
import { PrimengModule } from "./resources/primeng/primeng.module";
import { OrderByFieldPipe } from "./resources/pipes/order-by-field.pipe";

@NgModule({
  declarations: [AppComponent, ListOfGamesComponent, OrderByFieldPipe],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
