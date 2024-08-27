export class MenuModel implements IMenuModel {
   constructor(model: IMenuModel) {
      this.iconPath = model.iconPath
      this.label = model.label
      this.roles = model.roles
      this.relations = model.relations
      this.isSelected = model.isSelected
      this.endpoint = model.endpoint
      this.prefix = model.prefix
      this.visible = model.visible ?? true
      this.hideOnSession = model.hideOnSession ?? false
      this.disableFn = model.disableFn
   }

   iconPath?: string = ''
   label = ''
   roles?: string[]
   relations?: string[]
   isCollapsed?: boolean = true
   isSelected?: boolean = false
   endpoint?: string
   prefix?: string = ''
   visible = true
   hideOnSession = false
   disableFn?: (...args: any) => boolean = () => true
   hideItems: () => void = () => {
      this.isCollapsed = true
   }
   showItems: () => void = () => {
      this.isCollapsed = false
   }
   isExternalUrl: () => boolean = () => {
      return this.endpoint?.startsWith('http://') ?? this.endpoint?.startsWith('https://') ?? false
   }
   getIconPath: () => string = () => {
      return this.iconPath ? `assets/icons/${this.iconPath}.svg` : ''
   }
}

export interface IMenuModel {
   iconPath?: string
   label: string
   roles?: string[]
   relations?: string[]
   isCollapsed?: boolean
   isSelected?: boolean
   endpoint?: string
   prefix?: string
   visible?: boolean
   hideOnSession?: boolean
   disableFn?: (...args: any) => boolean
   hasSubMenu?: () => boolean
   hideItems?: () => void
   showItems?: () => void
   isExternalUrl?: () => boolean
}
