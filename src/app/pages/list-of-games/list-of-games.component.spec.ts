import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListOfGamesComponent } from "./list-of-games.component";
import { HttpClientModule } from "@angular/common/http";
import { OrderByFieldPipe } from "src/app/resources/pipes/order-by-field.pipe";

describe("ListOfGamesComponent", () => {
  let component: ListOfGamesComponent;
  let fixture: ComponentFixture<ListOfGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfGamesComponent, OrderByFieldPipe],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
