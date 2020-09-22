import { Component, OnInit } from '@angular/core';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';
import {User} from '../../../Model/user';
import {ApiResponse} from '../../../Model/api-response';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  clicked = false;
  constructor(private apiService: SqlDbserviceService,
    private router : Router,
    private http: HttpClient) {
    
   }

  data:any;
  bus:any;
  selected: any;
  users: any;
  
  dataSource:any[] = [];
  staffs:any[] = [];


  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });
  }

  onchange(event){
    this.selected = event.target.value;
  }

  assign(user){
    alert('Assigned Succesfully');
    var deo = {'id': user, 'staff': this.selected };
    var assign = JSON.stringify(deo);
    this.http.post('/upload-job/assignstaff.php', assign , { responseType: 'text'}).subscribe(id => {
      console.log(id);
    });
    console.log(assign);
    }

  deleteUser(user: User): void {
    if(confirm("Are You Sure to Delete?")){
    this.apiService.deleteUser(user.id).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    })
  }
  }

  logout(){
    this.router.navigate(['/login']);
  }


}
