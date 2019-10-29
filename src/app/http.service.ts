import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MyData {
  success: boolean;
  message: string;
  status: number;
  userType: string;
}

interface SaveStatus {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  test = 'How r u?';
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: 'Roshna' });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

  registerUser(user) {
    this.http.post<SaveStatus>('http://localhost:3000/registration', user).subscribe(res => {
      console.log(res);
    });
  }

  custLogin(user) {
    return this.http.post<MyData>('http://localhost:3000/loginpage', user);
  }

  questSet(questName) {
    console.log('questSet : ' + questName);
    return this.http.post<SaveStatus>('http://localhost:3000/questName', {questName});
  }
}
