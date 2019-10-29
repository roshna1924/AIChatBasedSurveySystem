import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globadmin',
  templateUrl: './globadmin.component.html',
  styleUrls: ['./globadmin.component.css']
})
export class GlobadminComponent implements OnInit {
public orgName;
public orgAdd;
public orgEmail;
public  orgPhone;
  constructor() { }

  ngOnInit() {
    // document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'none';
    document.getElementById('block4').style.display = 'none';
    document.getElementById('block5').style.display = 'none';
  }

  /* generateOrg() {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block3').style.display = 'none';
    document.getElementById('block4').style.display = 'none';
    document.getElementById('block5').style.display = 'none';
    document.getElementById('block6').style.display = 'none';
    document.getElementById('block2').style.display = 'block';
  } */
  viewOrg() {
    document.getElementById('orgAdd').style.display = 'none';
    document.getElementById('orgModify').style.display = 'none';
    document.getElementById('orgDelete').style.display = 'none';
    document.getElementById('block6').style.display = 'block';
    document.getElementById('orgList').style.display = 'block';
  }
  addOrg() {
    document.getElementById('orgList').style.display = 'none';
    document.getElementById('orgModify').style.display = 'none';
    document.getElementById('orgDelete').style.display = 'none';
    document.getElementById('block6').style.display = 'block';
    document.getElementById('orgAdd').style.display = 'block';
  }
  modifyOrg() {
    document.getElementById('orgAdd').style.display = 'none';
    document.getElementById('orgList').style.display = 'none';
    document.getElementById('orgDelete').style.display = 'none';
    document.getElementById('block6').style.display = 'block';
    document.getElementById('orgModify').style.display = 'block';
  }
  deleteOrg() {
    document.getElementById('orgAdd').style.display = 'none';
    document.getElementById('orgModify').style.display = 'none';
    document.getElementById('orgList').style.display = 'none';
    document.getElementById('block6').style.display = 'block';
    document.getElementById('orgDelete').style.display = 'block';
  }
}
