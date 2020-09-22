import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  imageUrl = null;
  photo: Blob;
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  whole_id: any;
  imagePath: any;
  thumbnail: any;
  
  ngOnInit(): void {
    this.whole_id = window.localStorage.getItem('whole_id');
    var add_job = {'whole_id': this.whole_id};
    var add = JSON.stringify(add_job);
    this.http.post('/upload-job/waitcomponent.php',  add, {responseType: 'blob'}).subscribe((val : any) => {
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
