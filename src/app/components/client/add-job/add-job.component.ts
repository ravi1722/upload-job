import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  data:any;

  constructor(private formBuilder: FormBuilder,
    private apiService: SqlDbserviceService,
    private router: Router,
    private http: HttpClient) { }


  width: number;
  addForm: FormGroup;
  token: any;
  whole_id: String;
  ngOnInit(): void {
    this.whole_id = window.localStorage.getItem('whole_id');
    if(!this.whole_id){
      this.router.navigate(['login']);
   }
   this.addForm = this.formBuilder.group({
      id: [],
      yourname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      jobs: ['', Validators.required],
      remarks: ['', Validators.required]
    });
  }

  onSubmit() {
      
      var add_job = {'whole_id': this.whole_id, 'val': this.addForm.value };
      var add = JSON.stringify(add_job);
      this.http.post('/upload-job/insert.php', add, {responseType: 'text'}).subscribe(i => {
        alert('Added Successfully');
        this.router.navigate(['/payment']);
      })
  }

  logout(){
    this.router.navigate(['/login']);
  }

}
