import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private serv: UsersService, private router:Router){}
  ngOnInit(){
    this.getUser();
  }
  UserData:any
  getUser(){
    this.serv.getuserAPI().subscribe((data)=> {
      console.log(data)
      this.UserData=data
    })
  }
  account(id:any){
    this.router.navigate(['auth/account',id])
  }
}
