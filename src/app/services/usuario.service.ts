import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private apiUrl = 'https://camilu.000webhostapp.com/api/';  // URL to web api
  usuarios: any[] = [];

  constructor(private http: Http) { }


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

}
