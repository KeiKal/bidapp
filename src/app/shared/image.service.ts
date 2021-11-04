import { Injectable } from "@angular/core";

@Injectable()

export class ImageService {

    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage (id:number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }

} 

const IMAGES = [
    {"id" : 1, "category": "finds", "description":"Gold Binoculars", "detail": "cumque error dolores saepe minima lorem dolorum perferendis", "url": "assets/img/finds_01.jpg" },
    {"id" : 2, "category": "finds", "description":"Gold Old Camera", "detail": "Consequuntur LOREM, dolor tempora a ad quas ab molestias,",  "url": "assets/img/finds_02.jpg" },
    {"id" : 3, "category": "pottery", "description":"Old Pottery Set", "detail": "cumque error dolores saepe minima repellat dolorum perferendis",  "url": "assets/img/pottery_01.png" },
    {"id" : 4, "category": "relic", "description":"Pope Bone Relic", "detail": "laborum adipisci praesentium, corporis explicabo!",  "url": "assets/img/relic_01.jpg" },
    {"id" : 5, "category": "relic", "description":"Maitreya Project", "detail": "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",  "url": "assets/img/relic_02.jpg" }
]