import {Component, OnInit} from '@angular/core';
import {SearchService} from "./search.service";


export interface GifData {
  preview: string,
  original: string,
  id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  thumbnails: GifData[] = [];
  private searchService: SearchService;
  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }

  ngOnInit(): void {
    this.searchService.getInitialData()
      .then( (response) => {
        const { data } = response.data;
        this.thumbnails = data.map((singleThumb: any) => ({
          preview: `${singleThumb.images.preview_gif.url}`,
          original: `${singleThumb.images.original.url}`,
          id: singleThumb.id}));
      });

  }
  getSearch(q: string): void {
    this.searchService.getSearch(q)
      .then( (response) => {
        const { data } = response.data;
        this.thumbnails = data.map((singleThumb: any) => ({
          preview: `${singleThumb.images.preview_gif.url}`,
          original: `${singleThumb.images.original.url}`,
          id: singleThumb.id}));
      });
  }
}
