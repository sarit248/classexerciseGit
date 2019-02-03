import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { PhotoService } from '../../services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

    public singleUser: User;
    public singlePhoto: Photo;
    public imageWidth: number;


    constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private photoService: PhotoService) { }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id']; // return string.

        id = Number(id); // convert to int.

        this.usersService.getAllUsers().subscribe((user) => {
            for (let i = 0; i < user.length; i++) {
                if (user[i].id === id) {
                    this.singleUser = user[i];
                    break;
                }
            }
        });

        this.photoService.getAllPhotos().subscribe((photos) => {
            for (let i = 0; i < photos.length; i++) {
                if (photos[i].id === id) {
                    this.singlePhoto = photos[i];
                    break;
                }
            }
        });
    }



    public decrease(): void {
        if (this.imageWidth > 100) {
            this.imageWidth -= 10;
        }
    }

    public increase(): void {
        if (this.imageWidth < 300) {
            this.imageWidth += 10;
        }
    }

    public reset(): void {
        this.imageWidth = 200;
    }

}


