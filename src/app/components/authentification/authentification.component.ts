import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from  '../../Service/auth.service'
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({email: new FormControl(),password : new FormControl()});
  isSubmitted  :any;
  constructor(private authService : UserService,
    private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value)
    .subscribe(data => {console.log(data)});
    this.router.navigateByUrl('/admin');
  }
}
