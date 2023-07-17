import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private as: AuthService, private router: Router) {

  }

  async login() {
    // Logik, um mit backend zu kommunizieren
   
    try {
      let resp:any = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      localStorage.setItem('token', resp['token']);
      // TODO: Redirect
      this.router.navigateByUrl('/todos');
    } catch(e) {
      // Show error message
      alert('Login fehlgeschlagen!')
      console.error(e);
      
    }
  }

  

}
