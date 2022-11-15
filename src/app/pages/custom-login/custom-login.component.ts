import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

interface Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss']
})
export class CustomLoginComponent extends NbLoginComponent implements OnInit {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: Login;
  submitted: boolean;
  rememberMe: boolean;

  estado1 = false;
  estado2 = false;
  messagem = null;
  usuario: any;

  constructor() {
    super(null, null, null, null);
  }

  ngOnInit(): void {
  }

  logar(): void {

  }

}
