import {Component, Input} from '@angular/core';
import {GifData} from "../../app.component";


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() image: string | undefined;

}
