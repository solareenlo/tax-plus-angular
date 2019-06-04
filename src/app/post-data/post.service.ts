import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Cryptos } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  host = 'http://localhost:3001/api/v1';
  private cryptos: Crypto[] = [];

  constructor(private http: HttpClient) {}

  addPost(crypto: string, miner: string, file: File) {
    const name: string = file.name;
    const post: Cryptos = {crypto, miner, file};
    console.log(post);
    this.http
    .post<{message: string, crypto: string, miner: string, file: File}>(this.host, post)
    .subscribe((resData) => {
    console.log(resData);
    });
  }

}
