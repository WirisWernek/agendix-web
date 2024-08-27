import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent extends TitleStrategy implements OnInit{
	closeResult = ''
	nomeUsuario = ''
	menuOptions$!: Observable<MenuModel[]>
 
	constructor(
	   private offcanvasService: NgbOffcanvas,
	   public readonly title: Title,
	   private menuService: MenuService,
	   private router: Router,
	//    private authTokenService: AuthTokenService
	) {
	   super()
	}
 
	ngOnInit(): void {
	//    const tokenData = <TokenData>this.authTokenService.decodePayloadJWT()
	   this.menuOptions$ = this.menuService.getMenuItems("PRESTADOR")
	//    this.nomeUsuario = this.authTokenService.getNomeUsuario()
	}
 
	override updateTitle(routerState: RouterStateSnapshot) {
	   const title = this.buildTitle(routerState)
	   if (title !== undefined) {
		  this.title.setTitle(`My Application | ${title}`)
	   }
	}
 
	navigate(endpoint: string) {
	   this.offcanvasService.dismiss('Cross click')
	   this.router.navigateByUrl(endpoint)
	}
 
	open(content: any) {
	   this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
		  (result) => {
			 this.closeResult = `Closed with: ${result}`
		  },
		  (reason) => {
			 this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
		  }
	   )
	}
 
	logout() {
	//    this.authTokenService.logout()
	   this.navigate('/')
	}
 
	private getDismissReason(reason: any): string {
	   if (reason === OffcanvasDismissReasons.ESC) {
		  return 'by pressing ESC'
	   } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on the backdrop'
	   } else {
		  return `with: ${reason}`
	   }
	}
}
