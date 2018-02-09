import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styles: []
})
export class DataformComponent implements OnInit {

  forma:FormGroup;
  typeFieldsPassword:string='text';


  constructor(private usuarioService: UsuarioService) {
      // Validators.pattern("^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)" rut
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(5)
                                    ]),
      'apellidos': new FormControl('',[
                                        Validators.required,
                                        Validators.minLength(5)
                                      ]),
      'email': new FormControl('',[
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                  ]),
      'rut': new FormControl('',Validators.required),
      'usuario': new FormControl('',[
                                      Validators.required,
                                      Validators.minLength(5),
                                    ],this.existeUsuario.bind( this.usuarioService )),
      'clave': new FormControl('',Validators.required),
      'clave2': new FormControl(),
      'sexo': new FormControl('',Validators.required),
      'verclave': new FormControl(false)
    })

    this.forma.controls['clave2'].setValidators([
                                    Validators.required,
                                    this.noIgual.bind( this.forma )
                                  ])
  }

  ngOnInit(){

  }

  noIgual(control:FormControl): {[s:string]:boolean} {
    console.log(this);
    let forma:any = this;
    if(control.value !== forma.controls['clave'].value){
      return {
        noiguales:true
      }
    }

    return null;
  }


  existeUsuario( control:FormControl): Promise<any>|Observable<any>{

    let band:any=false;
    let servicio:any = this;
    // usuarioService2 = new UsuarioService();
    // console.log(servicio.getUsuarios().subscribe());
    // console.log(servicio.usuarioService.getUsuarios().subscribe());
// this.usuarioService1.existUser(control.value).subscribe();
    let promesa = new Promise(
      ( resolve, reject )=>{
        setTimeout( ()=>{
          console.log(control.value);
          band=servicio.existUser(control.value).subscribe(res=>{
            console.log('ver',res);
            if(res){
              resolve( {existe:true})
            }else{
              resolve( null )
            }
          });
          // this.usuarioService.existUser(control.value).subscribe();

        },3000)
      }
    )

    return promesa;
  }





  nuevoUsuario(){

    console.log(this.forma.value);

  }

}
