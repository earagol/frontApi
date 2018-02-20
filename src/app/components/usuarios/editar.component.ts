import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  forma:FormGroup;
  typeFieldsPassword:string='text';

  constructor(private router:ActivatedRoute,
              private usuarioService:UsuarioService) {

        this.forma = new FormGroup({
          'id': new FormControl('', Validators.required),
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
          'usuario': new FormControl({value: '', disabled: true}, [
                                          Validators.required,
                                          Validators.minLength(5),
                                        ]),
          'sexo': new FormControl('',Validators.required),
          'activo': new FormControl(''),

        })


// 'clave': new FormControl('',Validators.required),
// 'clave2': new FormControl(),
// 'verclave': new FormControl(false)

                // this.forma.controls['clave2'].setValidators([
                //                                 Validators.required,
                //                                 this.noIgual.bind( this.forma )
                //                               ])

      this.router.params
                 .map(params => params['id'])
                 .subscribe(id =>{
                      console.log(this.usuarioService.usuarios[id]);
                      delete this.usuarioService.usuarios[id].nombre_despliegue;
                      delete this.usuarioService.usuarios[id].imagen;
                      delete this.usuarioService.usuarios[id].fecha_nacimiento;
                      delete this.usuarioService.usuarios[id].celular;
                      delete this.usuarioService.usuarios[id].direccion;
                      delete this.usuarioService.usuarios[id].telefono;
                      delete this.usuarioService.usuarios[id].estado;
                      delete this.usuarioService.usuarios[id].direccion;
                      delete this.usuarioService.usuarios[id].created;
                      // console.log(this.usuarioService.usuarios[id].splice(1,5));
                      console.log(this.usuarioService.usuarios[id]);
                      this.forma.setValue(this.usuarioService.usuarios[id]);
                      // console.log(this.usuarioService.usuarios[parametro]);
                });

  }

  ngOnInit() {
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
    let promesa = new Promise(
      ( resolve, reject )=>{
        setTimeout( ()=>{
          console.log(control.value);
          band=servicio.existUser(control.value).subscribe(res=>{
            if(res){
              resolve( {existe:true})
            }else{
              resolve( null )
            }
          });
        },3000)
      }
    )

    return promesa;
  }

  editaUsuario(){

    this.usuarioService.editaUsuario(this.forma.value).subscribe();

  }

}
