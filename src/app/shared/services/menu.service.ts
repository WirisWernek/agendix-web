import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { menu } from '../config/menu.config'
import { IMenuModel, MenuModel } from '../models/menu.model'


@Injectable({
   providedIn: 'root',
})
export class MenuService {
   private _menuConfig: IMenuModel[] = menu

   getMenuItems(role: string) {
      return new Observable<MenuModel[]>((o) => {
         const menu = this._renderMenu(this._menuConfig, role)
         o.next(menu)
         o.complete()
      })
   }

   private _renderMenu(menuConfig: IMenuModel[], role: string): MenuModel[] {
      return menuConfig
         .filter((item) => this.isMenuItemVisible(item, role))
         .map((item) => {
            const menu = new MenuModel(item)
            return menu
         })
   }

   isMenuItemVisible(item: IMenuModel, role: string) {
      return item.roles?.includes(role)
   }
}
