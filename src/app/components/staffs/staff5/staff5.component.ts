import { Component, OnInit } from '@angular/core';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';
import {User} from '../../../Model/user';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-staff5',
  templateUrl: './staff5.component.html',
  styleUrls: ['./staff5.component.css']
})
export class Staff5Component implements OnInit {

  constructor(private router : Router,
    private apiService: SqlDbserviceService,
    private http: HttpClient,private sanitizer: DomSanitizer) { }

    users: any;
  selectedFile: File;
  image_name: any;
  whole_id: any;
  ngOnInit(): void {
    this.apiService.getStaff5().subscribe( (data : any) => {
      this.users = data;
  });
  }

  
  onchange(event){
    this.selectedFile = event.target.files[0];
  }

  submit(user){
    var add_file =  {'whole_id': user , 'upload': this.selectedFile.name};
    var add = JSON.stringify(add_file);
    const upload = new FormData();
    upload.append('myfile', this.selectedFile, this.selectedFile.name);
    this.http.post('/upload-job/staffupload.php', upload, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log(event);
    })
    
    this.http.post('/upload-job/staffupload.php', add, {responseType: 'text'}).subscribe(i => {
      alert('Uploaded Successfully');
    })
  }


  view(user){

    window.localStorage.setItem('id', user);
    this.router.navigate(['/view']);
  }
  
  deleteUser(user: User): void {
    if(confirm("Are You Sure to Delete?")){
    this.apiService.deleteStaff5(user.id).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    })
  }
}

  logout(){
    this.router.navigate(['/login']);
  }


}
