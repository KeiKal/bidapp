import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { TimerService } from '../shared/timer';

@Component({
  selector: 'app-itemgallery',
  templateUrl: './itemgallery.component.html',
  styleUrls: ['./itemgallery.component.css']
})
export class ItemgalleryComponent implements OnChanges, OnInit {
  title = 'For Auction Items'
  @Input() filterBy?: string = 'all'
  visibleImages : any[] = [];
  timeleft : number = 60;

  constructor (private imgService:ImageService){
    this.visibleImages = this.imgService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imgService.getImages();
  }

  ngOnInit() {
   
  }
}
