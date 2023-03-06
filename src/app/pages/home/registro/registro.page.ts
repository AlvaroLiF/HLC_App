import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }
  
  onRegistro(form: { value: any; }): void{
    this.usuarioService.register(form.value).subscribe(res=>{
      this.router.navigateByUrl('/login')
    });
  }
  
}
