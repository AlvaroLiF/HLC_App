import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }
  
  onLogin(form: { value: any; }): void{
    this.usuarioService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('/recetas')
    });
  }
  
}
