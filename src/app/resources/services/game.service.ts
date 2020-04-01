import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../models/game";

@Injectable({
  providedIn: "root"
})
export class GameService {
  constructor(private http: HttpClient) {}

  public list(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>("http://localhost:4200/data/games.json");
  }
}
