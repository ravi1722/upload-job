import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-staff-file-view',
  templateUrl: './staff-file-view.component.html',
  styleUrls: ['./staff-file-view.component.css']
})
export class StaffFileViewComponent implements OnInit {

  imageUrl = null;
  photo: Blob;
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  
  imagePath: any;
  thumbnail: any;
  ngOnInit(): void {
    var user = window.localStorage.getItem('id');
    var add_job = {'whole_id': user};
    var add = JSON.stringify(add_job);
    this.http.post('/upload-job/showfile.php',  add, {responseType: 'blob'}).subscribe((val : any) => {
      this.photo = val;
      var myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(<string>myReader.result);
        console.log(this.imageUrl)
      }
      myReader.readAsDataURL(this.photo);
    });
  }

}
