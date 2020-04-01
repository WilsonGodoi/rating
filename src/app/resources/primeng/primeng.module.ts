import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, RatingModule],
  exports: [ButtonModule, RatingModule]
})
export class PrimengModule {}
