import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
   selector: 'app-layout',
   templateUrl: './layout.component.html',
   styleUrls: ['./layout.component.scss'],
   standalone: true,
   imports: [NavbarComponent, RouterOutlet],
})
export class LayoutComponent {}
