import { IMenuModel } from '../models/menu.model'

export const menu: IMenuModel[] = [
   {
      iconPath: 'bi bi-link',
      label: 'Links',
      endpoint: '/prestador/links',
      roles: ['PRESTADOR'],
   },
   {
      iconPath: 'bi bi-link',
      label: 'Comunicação',
      endpoint: '/prestador/comunicacao',
      roles: ['PRESTADOR'],
   },
   {
      iconPath: 'bi bi-link',
      label: 'Clientes',
      endpoint: '/prestador/clientes',
      roles: ['PRESTADOR'],
   },
]
