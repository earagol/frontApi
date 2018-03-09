import { Component,  ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {


  forma:FormGroup;

  constructor(private usuarioService:UsuarioService,private router:Router) {

    this.forma = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    })

  }

  ngOnInit() {
  }


  login(){
    console.log(this.forma.value);
    this.usuarioService.login(this.forma.value).subscribe(res => {
      console.log(res,'gdgdgdgd');
      this.router.navigate(['home/dashboard']);
    });

    // if(this.forma.value.usuario === 'admin' && this.forma.value.password === 'admin'){
    //   console.log(this.forma.value.usuario);
    //   this.router.navigate(['home']);
    //   // this.router.navigate(['home/dashboard']);
    // }

  }

}
