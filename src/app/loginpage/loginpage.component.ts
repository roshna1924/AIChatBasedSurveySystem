import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
public username;
public password;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }
  custLogin(user) {
    if (this.username === undefined || this.password === undefined) {
      // base_pages_login.js - validation code
      alert('Please enter username or password');
    } else {
      console.log('b4 passing');
      this.httpService.custLogin(user).subscribe(data => {
        console.log(data);
        if (data.success) {
          if (data.userType === 'Global Admin') {
            this.router.navigate(['/globadmin']);
          } else if (data.userType === 'Organization Admin') {
            this.router.navigate(['/orgadmin']);
          } else {
            this.router.navigate(['/professor']);
          }
        } else {
          window.alert(data.message);
        }
      });

      // if (response === 'Global Admin') {
       // this.router.navigate(['/globadmin']);
      // }
      // if (this.username === localStorage.getItem('userName') && this.password === localStorage.getItem('userPassword') ) {
      //   if (localStorage.getItem('userList') === 'Global Admin') {
      //     this.router.navigate(['/globadmin']);
      //   } else if (localStorage.getItem('userList') === 'Organization Admin') {
      //     this.router.navigate(['/orgadmin']);
      //   } else {
      //     this.router.navigate(['/professor']);
      //   }
      // } else {
      //   alert('Invalid Userid or password');
      // }
      // console.log(user);
      // this.httpService.custLogin(user);
    }
  }
}
