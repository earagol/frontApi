import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  usuarios: any;

  constructor(private usuarioService: UsuarioService) {
    if(!this.usuarios){
      this.getUsuarios();
      console.log('adad');
      console.log(this.usuarios);
    }

  }

  ngOnInit() {
    // this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarios=this.usuarioService.getUsuarios()
                       .subscribe();
  }

  editar(index:number){
    console.log('index',index);
  }

  delete(index:number){

    this.usuarioService.deleteUsuario(index).subscribe(res=>{
      if(res){
      }else{
      }
    });

  }

}
