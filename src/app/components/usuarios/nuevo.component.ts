import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  forma:FormGroup;
  typeFieldsPassword:string='text';

  @ViewChild('fileInput') fileInput: ElementRef;

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
      'verclave': new FormControl(false),
      'imagen': new FormControl(null),
      'imageInput': new FormControl('',Validators.required)
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


  /////////////////load archivo

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.forma.get('imagen').setValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       })
  //     };
  //   }
  // }

  // onFileChange($event) {
  //      let file = $event.target.files[0]; // <--- File Object for future use.
  //      this.forma.controls['imageInput'].setValue(file ? file.name : ''); // <-- Set Value for Validation
  // }


  ///////////////formdata

  nuevoUsuario(){

    console.log(this.forma.value);
    this.usuarioService.addUsuario(this.forma.value).subscribe();

  }

  }
