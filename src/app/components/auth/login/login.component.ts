import { Component, inject } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  standalone: true,
  selector: 'app-login',
  imports: [SidebarModule, ButtonModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
