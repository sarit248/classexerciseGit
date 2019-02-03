import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
    @Input()

    public photos:Photo[];

  constructor(private photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe((photos)=>{
        this.photos=photos;
        console.log(this.photos);
    });
}

  }


