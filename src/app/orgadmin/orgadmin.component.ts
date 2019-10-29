import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orgadmin',
  templateUrl: './orgadmin.component.html',
  styleUrls: ['./orgadmin.component.css']
})
export class OrgadminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viewProf() {
    alert('testingg');
    document.getElementById('profAdd').style.display = 'none';
    document.getElementById('profModify').style.display = 'none';
    document.getElementById('profDelete').style.display = 'none';
    document.getElementById('profList').style.display = 'block';
  }
  addProf() {
    document.getElementById('profList').style.display = 'none';
    document.getElementById('profModify').style.display = 'none';
    document.getElementById('profDelete').style.display = 'none';
    document.getElementById('profAdd').style.display = 'block';
  }
  modifyProf() {
    document.getElementById('profAdd').style.display = 'none';
    document.getElementById('profList').style.display = 'none';
    document.getElementById('profDelete').style.display = 'none';
    document.getElementById('profModify').style.display = 'block';
  }
  deleteProf() {
    document.getElementById('profAdd').style.display = 'none';
    document.getElementById('profModify').style.display = 'none';
    document.getElementById('profList').style.display = 'none';
    document.getElementById('profDelete').style.display = 'block';
  }

  viewQuest() {
    document.getElementById('questAdd').style.display = 'none';
    document.getElementById('questModify').style.display = 'none';
    document.getElementById('questDelete').style.display = 'none';
    document.getElementById('questList').style.display = 'block';
  }
  addQuest() {
    document.getElementById('questList').style.display = 'none';
    document.getElementById('questModify').style.display = 'none';
    document.getElementById('questDelete').style.display = 'none';
    document.getElementById('questAdd').style.display = 'block';
  }
  modifyQuest() {
    document.getElementById('questAdd').style.display = 'none';
    document.getElementById('questList').style.display = 'none';
    document.getElementById('questDelete').style.display = 'none';
    document.getElementById('questModify').style.display = 'block';
  }
  deleteQuest() {
    document.getElementById('questAdd').style.display = 'none';
    document.getElementById('questModify').style.display = 'none';
    document.getElementById('questList').style.display = 'none';
    document.getElementById('questDelete').style.display = 'block';
  }
}
