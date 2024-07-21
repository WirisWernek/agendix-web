import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { JwtModule } from '@auth0/angular-jwt'
import { routes } from './app.routes'
export function tokenGetter() {
   return localStorage.getItem('token')
}

export const appConfig: ApplicationConfig = {
   providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
	  provideHttpClient(),
      importProvidersFrom(
         JwtModule.forRoot({
            config: {
               tokenGetter: tokenGetter,
               allowedDomains: ['localhost:8082', '192.168.18.19:8082'],
            },
         })
      ),
   ],
}
