import { Component, inject, OnInit } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
   selector: 'app-form-link',
   standalone: true,
   imports: [],
   templateUrl: './form-link.component.html',
   styleUrl: './form-link.component.scss',
})
export class FormLinkComponent implements OnInit {
   activeModal = inject(NgbActiveModal)
   title = 'Novo Link'
   isEditar = false

   ngOnInit(): void {
      if (this.isEditar) {
         this.title = 'Visualização do Link'
      } else {
         this.title = 'Novo Link'
      }
   }
}
