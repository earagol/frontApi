import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Usuario } from "../interface/usuario.interface";

const headers = {
  headers: new Headers({
    'Content-Type':  'multipart/form-data'
    // 'Content-Type':  'application/json'
    // 'Content-Type':  'application/x-www-form-urlencoded'
  })
}

@Injectable()
export class UsuarioService {

  // private apiUrl = 'https://camilu.000webhostapp.com/api/';  // URL to web api
  private apiUrl = 'http://localhost/test_api/api/api/';  // URL to web api
  usuarios: any[] = [];



  constructor(private http: Http) {}

  getUsuarios() {
    return this.http.get(this.apiUrl+'usuarios/index.json')
                    .map((resp: any) => {
                      resp = resp.json();
                      this.usuarios = resp.data;
                      console.log(this.usuarios);
                      return this.usuarios;
                    }
                  );

  }

  addUsuario(usuario){


    // return this.http.post(this.apiUrl+'usuarios/add.json',JSON.stringify(usuario),headers)
    //                 .map((resp: any) => {
    //                   return resp.json();
    //                 }
    //               );

    usuario = {'username':'arango','password':1111};
    let formData:FormData = new FormData();
     formData.append('username','arango');
     formData.append('password', 1111);
    console.log(usuario);

    return this.http.post(this.apiUrl+'usuarios/token.json',formData,headers)
                    .map((resp: any) => {
                      return resp.json();
                    }
                  );
    // return this.http.post(this.apiUrl+'usuarios/token.json',JSON.stringify(usuario),headers)
    //                 .map((resp: any) => {
    //                   return resp.json();
    //                 }
    //               );



  }

  existUser(usuario:string){

    return this.http.post(this.apiUrl+'usuarios/existeUser.json',JSON.stringify({'usuario':usuario}),headers)
                    .map((resp: any) => {
                      resp = resp.json();
                      let a = resp.success;
                      return a;
                    }
                  );

  }

  editaUsuario(usuario){
    let url = `${ this.apiUrl }usuarios/edit/${ usuario.id }.json`;
    return this.http.post(url,JSON.stringify(usuario),headers)
                    .map((resp: any) => {
                      resp = resp.json();
                      let a = resp.success;
                      return a;
                    }
                  );
  }

  deleteUsuario(index:number){

    let id = this.usuarios[index].id;

    let url = `${ this.apiUrl }usuarios/delete/${ id }.json`;
    return this.http.post(url,JSON.stringify({'id':id}),headers)
                    .map((resp: any) => {
                      resp = resp.json();
                      let a = resp.success;
                      if(a){
                        this.usuarios.splice(index, 1);
                      }
                      return a;
                    }
                  );



  }

}
