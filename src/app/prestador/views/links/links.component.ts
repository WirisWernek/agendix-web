import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FormLinkComponent } from './modals/form-link/form-link.component';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
	modalService = inject(NgbModal);

	novoLink(){
		this.modalService.open( FormLinkComponent, environment.DEFAULT_MODAL_OPTIONS)
	}
}
