import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { User } from '../Model/user';
import {ApiResponse} from '../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class SqlDbserviceService {

  constructor(private http: HttpClient) { }
  baseUrl ='/upload-job';

login(loginData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
}

payment(use){
  return this.http.post<ApiResponse>(this.baseUrl + '/pay.php', use);
}

getUsers(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
}

deleteUser(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/delete.php?id=' + id);
}

updateStudent(user: User){
  return this.http.post<ApiResponse>(this.baseUrl + '/update.php', user);
}

loginUser(loginData): Observable<ApiResponse> {
  return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
}


selectWholeid(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/getbywholeid.php');
}

getStaff1(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/staff1.php');
}

deleteStaff1(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/delete1.php?id=' + id);
}

getStaff2(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/staff2.php');
}

deleteStaff2(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/delete2.php?id=' + id);
}

getStaff3(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/staff3.php');
}

deleteStaff3(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/delete3.php?id=' + id);
}

getStaff4(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/staff4.php');
}

deleteStaff4(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/delete4.php?id=' + id);
}

getStaff5(): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/staff5.php');
}

deleteStaff5(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(this.baseUrl + '/staffs/delete5.php?id=' + id);
}

}
