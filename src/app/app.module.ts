import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImageFilterPipe } from './shared/filter.pipes';
import { ImageService } from './shared/image.service';
import { MaterialModule } from './material-module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ItemgalleryComponent } from './itemgallery/itemgallery.component';
import { ImagesComponent } from './images/images.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { TimerService } from './shared/timer';

@NgModule({
  declarations: [					
    AppComponent,
    ToolbarComponent,
    ItemgalleryComponent,
    ImagesComponent,
    ImageFilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImageService,
    ImageFilterPipe, 
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
