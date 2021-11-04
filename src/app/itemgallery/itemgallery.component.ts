import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-itemgallery',
  templateUrl: './itemgallery.component.html',
  styleUrls: ['./itemgallery.component.css']
})
export class ItemgalleryComponent implements OnChanges {
  title = 'For Auction Items'
  @Input() filterBy?: string = 'all'
  visibleImages : any[] = [];

  constructor (private imgService:ImageService){
    this.visibleImages = this.imgService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imgService.getImages();
  }

}
