import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public allUserS: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(user => {
      this.allUserS = user;
      console.log(this.allUserS);
    });
  }
}
