import { Injectable } from '@angular/core';
import { BibleModel } from './bible.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BibleService {
  readonly BibleLinkUrl = '../assets/dataFIles/kjv.json';

  constructor(private http: HttpClient) {
  }

  getBibleData(): Observable<BibleModel> {
    return this.http.get<BibleModel>(this.BibleLinkUrl);
  }
}
