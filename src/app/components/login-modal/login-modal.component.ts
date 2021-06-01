import { Component, OnInit ,Inject} from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  adminArr = []

  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public loginServices : LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.load()
  }

  loginGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  })

  load() {
    this.loginServices.getDatali().then(res => {
      this.adminArr = res 
      
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Login(){
   const admin = this.adminArr.find(el =>el)
   const {login ,password } = this.loginGroup.value
  if(login == admin.login && password == admin.password ) {
      this.loginServices.isLogin = true
      this.router.navigate(['admin'])
      this.onNoClick()
  }
   
   
    
  }

}
