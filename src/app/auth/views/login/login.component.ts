import { Component, inject } from '@angular/core'
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { LoginRequestModel } from '../../models/login-request.model'
import { LoginStore } from '../../store/login.store'

@Component({
   selector: 'app-login',
   standalone: true,
   imports: [RouterModule, FormsModule, ReactiveFormsModule],
   providers: [LoginStore],
   templateUrl: './login.component.html',
   styleUrl: './login.component.scss',
})
export class LoginComponent {
   fb = inject(NonNullableFormBuilder)
   loginStore = inject(LoginStore)
   router = inject(Router)

   form: FormGroup

   constructor() {
      this.form = this.fb.group({
         login: ['', Validators.required],
         senha: ['', Validators.required],
      })
   }

   logar() {
      const data = this.form.getRawValue() as LoginRequestModel
      this.loginStore.login(data).subscribe({
         next: (value) => {
            if (value.token != null && value.token != undefined && value.token.trim() != '') {
               this.router.navigateByUrl(value.role.toLowerCase())
            }
         },
      })
   }
}
