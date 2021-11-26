import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface UserMoviesInfo {
    'popular': number[],
    'keepWatching': number[],
}
export interface Movies {
  "cardImage": string,
  "titleImage": string,
  "backgroundImage": string,
  "relevance": number,
  "year": number,
  "minAge": number,
  "time": number,
  "season": null,
  "description": string,
  "cast": string[],
  "genre": string[],
  "scenes": string[]
}
export interface UserInterface {
    "token": string,
    "users": [
        {
            "id": number,
            "name": string,
            "avatarUrl": string,
        },
        {
            "id": number,
            "name": string,
            "avatarUrl": string,
        }
    ]
}

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }
    //baseUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com';

    postLogin() {
        return this.http.post(
            'https://private-3923c4-santandercoders809.apiary-mock.com/login',
            {},
            {
                responseType: 'text'
            });
    }
    getUser(userId: number): Observable<UserMoviesInfo> {
      return this.http.get<UserMoviesInfo>(
        `https://private-3923c4-santandercoders809.apiary-mock.com/users/1`
      )
    }

    getMovies(MoviesListId: number): Observable<Movies> {
      return this.http.get<Movies>(
        `https://private-3923c4-santandercoders809.apiary-mock.com/series/3`
      )
    }
}
