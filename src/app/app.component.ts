import { Component, OnInit } from '@angular/core';
import { User } from './modules/user/models/user';
import { Thingy } from './modules/object/models/thingy';
import { UserService } from './modules/user/services/user.service';
import { ThingyService } from './modules/object/services/thingy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[];
  things: Thingy[];
  allUsers: User[];
  allThings: Thingy[];
  searchTxtUser: string;
  searchTxtThing: string;

  constructor(private userService: UserService, private thingyService: ThingyService) {

  }

  ngOnInit() {
    this.allUsers = this.userService.getUsers();
    this.allThings = this.thingyService.getThingys();
    this.searchTxtUser = '';
    this.searchTxtThing = '';
    this.filterUsers();
    this.filterThings();
  }

  filterUsers() {
    this.users = this.allUsers.filter((user)=> {
      let result = user.active;
      if (this.searchTxtUser) {
        result = result && (user.name.indexOf(this.searchTxtUser) !== -1);
      }
      return result;
    });
  }

  filterThings() {
    this.things = this.allThings.filter((thing)=> {
      let result = thing.active;
      if (this.searchTxtThing) {
        result = result && (thing.name.indexOf(this.searchTxtThing) !== -1);
      }
      return result;
    });
  }

  userTxtSearch(search: string) {
    this.searchTxtUser = search;
    this.filterUsers();
  }

  objTxtSearch(search: string) {
    this.searchTxtThing = search;
    this.filterThings();
  }

}

