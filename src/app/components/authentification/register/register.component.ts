import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({email: new FormControl(),password : new FormControl()});
  isSubmitted  :any;
  constructor(private authService : UserService,
    private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }
  get formControls() { return this.loginForm.controls; }

  Register(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.authService.register(this.loginForm.value)
    .subscribe(data => {console.log(data)});
    this.router.navigateByUrl('/admin');
  }


}
