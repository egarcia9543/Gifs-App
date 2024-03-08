import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = JSON.parse(localStorage.getItem('tags')!) || [];
  private apiKey: string = 'u8Lvy8jBKm5f9bE4OxNG7gLsbA75M9AV';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';

  public gifsList: Gif[] = [];
  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private sortHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) =>  oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveIntoLocalStorage();
  };

  private saveIntoLocalStorage() {
    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  };

  searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.sortHistory(tag);

    this.http.get<SearchResponse>(`${this.baseUrl}/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
      .subscribe((response) => {
        this.gifsList = response.data;
    });
  };
}
