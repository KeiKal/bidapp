import { Route, Routes } from "@angular/router";
import { ItemgalleryComponent } from "./itemgallery/itemgallery.component";
import { ImagesComponent } from "./images/images.component";

export const appRoutes:Routes = [
    {path: "gallery", component: ItemgalleryComponent},
    {path: "image/:id", component: ImagesComponent},
    {path: "", redirectTo: "/gallery", pathMatch: "full"}
]