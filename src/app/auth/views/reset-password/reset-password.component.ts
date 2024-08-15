import { Component, inject } from '@angular/core'
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ResetPasswordRequestModel } from '../../models/reset-password-request.model'
import { LoginStore } from '../../store/login.store'

@Component({
   selector: 'app-login',
   standalone: true,
   imports: [RouterModule, FormsModule, ReactiveFormsModule],
   providers: [LoginStore],
   templateUrl: './reset-password.component.html',
   styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
   fb = inject(NonNullableFormBuilder)
   loginStore = inject(LoginStore)
   router = inject(Router)

   form: FormGroup

   constructor() {
      this.form = this.fb.group({
         login: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
      })
   }

   alterar() {
      const data = this.form.getRawValue() as ResetPasswordRequestModel
      this.loginStore.resetPassword(data).subscribe({
         next: (value) => {
            alert('Senha alterada')
         },
         error: (err) => {
            alert(err.message)
         },
      })
   }
}
