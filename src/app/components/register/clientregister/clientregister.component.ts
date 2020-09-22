import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.css']
})
export class ClientregisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: SqlDbserviceService) { }

    whole_id: any;
    registerForm: FormGroup;
  ngOnInit(): void {
    this.whole_id = Math.random().toString(36).substr(2);
    this.registerForm = this.formBuilder.group({
      login : ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    var login_name = {'whole_id': this.whole_id, 'val': this.registerForm.value };
    var whole_id = JSON.stringify(login_name);
    this.http.post('/upload-job/register.php', whole_id, {responseType: 'text'}).subscribe(i => {
      this.router.navigate(['/login']);
    })

  }

  login(){
    this.router.navigate(['/login']);
  }
}
