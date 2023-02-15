import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Input() search: Function | undefined;

  ngOnInit(): void {
    console.log(this.search, 1);
  }
  debounceSearch(e: Event): void {
    // @ts-ignore
    this.search(e.target.value);
  }
}
