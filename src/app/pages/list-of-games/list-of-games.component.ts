import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/resources/services/game.service";
import { Game } from "src/app/resources/models/game";

@Component({
  selector: "app-list-of-games",
  templateUrl: "./list-of-games.component.html",
  styleUrls: ["./list-of-games.component.scss"]
})
export class ListOfGamesComponent implements OnInit {
  public games: Array<Game> = [];
  public isRandom: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.listGames();
  }

  private listGames(): void {
    this.gameService.list().subscribe(data => (this.games = data));
  }

  handleClick() {
    this.isRandom = !this.isRandom;
  }

  handleRate() {
    setTimeout(() => {
      this.games = [...this.games];
    }, 500);
  }
}
