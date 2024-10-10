import { Component } from '@angular/core';
import { backgroundVideoComponent } from '../../layout/background1/background1.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    backgroundVideoComponent,
    NavbarComponent,
    RodapeComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
