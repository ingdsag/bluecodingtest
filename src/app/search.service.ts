import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {

  }
  getInitialData(): Promise<any> {
    console.log(123);
    return axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: 'jTAuqirruj85Vtd9DISWXopoSqNOHRUG'
      }
    });
  }
  getSearch(q: string): Promise<any> {
    return axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
        q,
        api_key: 'jTAuqirruj85Vtd9DISWXopoSqNOHRUG'
      }
    })
  }
}
