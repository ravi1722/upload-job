import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SqlDbserviceService } from '../../../services/sql-dbservice.service';

@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.css']
})
export class ClientloginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  page_path: any;
  whole_id: String;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: SqlDbserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.loginForm.invalid) {
     return;
   }

    const loginData = {
     username: this.loginForm.controls.username.value,
     password: this.loginForm.controls.password.value
   };

   this.apiService.loginUser(loginData).subscribe((data: any) => {
     this.whole_id = data.whole_id;
    this.page_path = data.router;
    console.log(this.page_path);
      if(data.whole_id){
        window.localStorage.setItem('whole_id', data.whole_id);
        if(this.page_path == 'go_to_file'){
          this.router.navigate(['down']);
        }
        else if(this.page_path == 'at_to_form'){
          this.router.navigate(['add']);
        }
        else if(this.page_path == 'admin'){
          this.router.navigate(['admin']);
        }
        else if(this.page_path == 'staff1'){
          this.router.navigate(['staff1']);
        }
        else if(this.page_path == 'staff2'){
          this.router.navigate(['staff2']);
        }
        else if(this.page_path == 'staff3'){
          this.router.navigate(['staff3']);
        }
        else if(this.page_path == 'staff4'){
          this.router.navigate(['staff4']);
        }
        else if(this.page_path == 'staff5'){
          this.router.navigate(['staff5']);
        }
      }
      else {
        this.invalidLogin = true;
      }
   });
  }

  register(){
    this.router.navigate(['/register']);
  }

}
