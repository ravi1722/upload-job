import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css']
})
export class AddfileComponent implements OnInit {

  is_edit : boolean = true;
  constructor(private router: Router,private http: HttpClient) { }

  width: number = 60;
  selectedFile: File;
  image_name: any;
  whole_id: any;
  ngOnInit(): void {
    this.whole_id = window.localStorage.getItem('whole_id');
    console.log(this.whole_id);
  }

  onchange(event){
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    var add_file =  {'whole_id': this.whole_id , 'upload': this.selectedFile.name};
    var add = JSON.stringify(add_file);
    const upload = new FormData();
    upload.append('myfile', this.selectedFile, this.selectedFile.name);
    this.http.post('/upload-job/uploadfile.php', upload, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log(event);
    })
    
    this.http.post('/upload-job/uploadfile.php', add, {responseType: 'text'}).subscribe(i => {
      alert('Uploaded Successfully');
      this.is_edit = false;
    })
  }

  next(){
    this.router.navigate(['/user']);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
