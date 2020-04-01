import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/resources/services/game.service";
import { Game } from "src/app/resources/models/game";
import { zip, interval, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-list-of-games",
  templateUrl: "./list-of-games.component.html",
  styleUrls: ["./list-of-games.component.scss"]
})
export class ListOfGamesComponent implements OnInit {
  public games: Array<Game> = [];
  public isRandom: boolean = false;
  private obs: Observable<number[]>;
  private subscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.listGames();
  }

  private listGames(): void {
    this.gameService.list().subscribe(data => (this.games = data));
  }

  handleClick() {
    this.isRandom = !this.isRandom;
    if (this.isRandom) {
      this.obs = zip(interval(1000));

      this.subscription.add(
        this.obs.subscribe(() => {
          this.games[
            Math.floor(Math.random() * this.games.length)
          ].rating = Math.floor(Math.floor(Math.random() * 5) + 1);
          this.handleRate();
        })
      );
    } else {
      this.subscription.unsubscribe();
      this.subscription = new Subscription();
    }
  }

  handleRate() {
    this.games = [...this.games];
  }
}
