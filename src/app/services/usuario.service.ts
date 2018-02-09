import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Usuario } from "../interface/usuario.interface";

const headers = {
  headers: new Headers({
    // 'Content-Type':  'application/json'
    'Content-Type':  'application/x-www-form-urlencoded'
  })
}

@Injectable()
export class UsuarioService {

  // private apiUrl = 'https://camilu.000webhostapp.com/api/';  // URL to web api
  private apiUrl = 'http://localhost/test_api/api/';  // URL to web api
  usuarios: any[] = [];



  constructor(private http: Http) {




  }

  getUsuarios() {
    // console.log(this.http.get(this.apiUrl+'usuarios/index.json'));
    return this.http.get(this.apiUrl+'usuarios/index.json')
                    .map((resp: any) => {
                      // this.usuarios = resp.artists.items;
                      resp = resp.json();
                      this.usuarios = resp.data;
                      console.log(this.usuarios);
                      return this.usuarios;
                      // console.log(resp);
                    }
                  );

    // return this.http.get(this.apiUrl+'usuarios/index.json');
    // return {'nombre':'erisk'}
  }

  addUsuario(usuario){

    // console.log(JSON.stringify(usuario));

    var body = "nombre=" + usuario.nombre + "&apellidos=" + usuario.apellidos + "&sexo=" + usuario.sexo;
    //
    // let arr = {
    //   nombre:usuario.nombre,
    //   apellidos:usuario.apellidos,
    //   sexo:usuario.sexo
    // };

    // let head = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: head });
    //    return this.http.post('http://localhost:8080/auth', JSON.stringify({ username: username, password: password }),options)
    //        .map((response: Response) => {
    //            // login successful if there's a jwt token in the response
    //            let token = response.json() && response.json().token;
    //            console.log(response);

    //Funciona para formData
    // let formData: FormData =  new  FormData ();
    // formData.append ( 'nombre' , usuario.nombre);
    // formData.append ( 'apellidos' , usuario.apellidos);
    // formData.append ( 'sexo' , usuario.sexo);

    console.log('servicio');
    console.log(usuario);
    return this.http.post(this.apiUrl+'usuarios/add.json',JSON.stringify(usuario),headers)
                    .map((resp: any) => {
                      // this.usuarios = resp.artists.items;
                      resp = resp.json();
                      let a = resp.data;
                      // console.log(a);
                      return a;
                      // console.log(resp);
                    }
                  );

  }

  existUser(usuario:string){
    // console.log(JSON.stringify({'usuario':usuario}));

    return this.http.post(this.apiUrl+'usuarios/existeUser.json',JSON.stringify({'usuario':usuario}),headers)
                    .map((resp: any) => {
                      // this.usuarios = resp.artists.items;
                      resp = resp.json();
                      let a = resp.data.existe;
                      // console.log(a);
                      return a;
                      // console.log(resp);
                    }
                  );

  }

}
