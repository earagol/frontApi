import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Usuario } from "../interface/usuario.interface";

// const headers = {
//   headers: new Headers({
//     'Content-Type':  'application/x-www-form-urlencoded'
//   })
// }

// const headers = {
//   headers: new Headers({
//     'Accept':'application/json',
//     'Content-Type':  'application/json',
//   })
// }

// application/x-www-form-urlencoded
  // 'Content-Type':  'multipart/form-data'
  // 'Content-Type':  'application/json'

@Injectable()
export class UsuarioService {

  // private apiUrl = 'https://camilu.000webhostapp.com/api/';  // URL to web api
  private apiUrl = 'http://localhost/test_api/api2/api/';  // URL to web api
  // private apiUrl = 'http://10.0.0.166/gc/gc-andain/usuarios/login';  // URL to web api
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

    return this.http.post(this.apiUrl+'usuarios/add.json',JSON.stringify(usuario),headers)
                    .map((resp: any) => {
                      return resp.json();
                    }
                  );

    // usuario = {'username':'arango','password':1111};
    // console.log(usuario);
    // return this.http.post(this.apiUrl+'usuarios/token.json',JSON.stringify(usuario),headers)
    //                 .map((resp: any) => {
    //                   return resp.json();
    //                 }
    //               );


    // let formData:FormData = new FormData();
    //  formData.append('username','arango');
    //  formData.append('password', 1111);
    // return this.http.post(this.apiUrl+'usuarios/token.json',formData,headers)
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

  login(usuario){
    console.log(usuario);
    // return usuario;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.http.post(this.apiUrl+'users/token.json',JSON.stringify(usuario),headers)
                    .map((resp: any) => {
                      return resp.json();
                    }
                  );
  }


  // login2(email: string, password: string): Observable<boolean> {
  //
  //     let body = JSON.stringify({ 'email': email, 'password': password });
  //     let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json'});
  //     let options = new RequestOptions({ headers: headers });
  //     let url=  ServerConfig.url + '/api/users/token';
  //
  //       return this.http.post( url, body, options)
  //           // .map((response: Response) => {
  //           .map((response: Response) =>{
  //
  //                   let data_response = response.json();
  //                   if (data_response.success && data_response.data.token) {
  //                       // set token property
  //                       this.token = data_response.data.token;
  //
  //                       // store username and jwt token in local storage to keep user logged in between page refreshes
  //                       data_response.data['role_id'] = data_response.data.role;
  //                       this.setUser(data_response.data, true);
  //
  //                       // return true to indicate successful login
  //                       return true;
  //                   } else {
  //                       // return false to indicate failed login
  //                       return false;
  //                   }
  //           }).catch((error: any) => {
  //                 console.log(error);
  //                 return Observable.throw(error);
  //           });
  //   }

}
