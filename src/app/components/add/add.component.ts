import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from "../../interface/usuario.interface";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  // nombre:string;
  // apellidos:string;
  // email:string;
  // rut:string;
  // usuario:string;
  // clave:string;
  // clave2:string;
  // sexo:number;
  submitted = false;
  usuario:Object = {
        nombre:'',
        apellidos:'',
        email:'',
        rut:'',
        usuario:'',
        clave:'',
        clave2:'',
        sexo:''
  }


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  nuevoUsuario(userForm:NgForm){
    console.log('Forma',userForm);
    console.log('valor',userForm.value);
    console.log('Usuario',this.usuario);
    this.submitted = true;


    // this.usuarioService.addUsuario(usuario);

    // this.usuarioService.addUsuario(usuario).subscribe();
    // this.usuarioService.addUsuario(usuario);
    // console.log(this.nombre,this.apellidos,this.email,this.rut,this.usuario,this.clave,this.clave2,this.sexo);

  }

}
