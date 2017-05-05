import { Injectable, Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class userSettings {

  private storage : Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = {team: team,
                tournamentId: tournamentId,
                tournamentName: tournamentName};
                this.storage.set(team.id, JSON.stringify(item));
  }

  unfavoriteTeam(team) {
    this.storage.remove(team.id);
  }

  isFavoriteTeam(teamId) {
    return this.storage.get(teamId).then(value => value ? true : false);
  }
}
