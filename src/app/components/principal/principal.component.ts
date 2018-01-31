import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent implements OnInit {

  usuarios: any;

  constructor(private usuarioService: UsuarioService) {
    this.getUsuarios();
    console.log('adad');
    console.log(this.usuarios);
  }

  ngOnInit() {
    // this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarios=this.usuarioService.getUsuarios()
                       .subscribe();
    // this.usuarios = this.usuarioService.getUsuarios();
  }

}
