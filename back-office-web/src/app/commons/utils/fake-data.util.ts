import {SidenavItem} from '../../layout/sidenav/sidenav-item/sidenav-item.interface';

export const someMenu: SidenavItem = {
  name: 'Template',
  icon: 'dataset',
  position: 1000,
  subItems: [
    {
      name: 'Dashboard',
      route: '/dashboard',
      icon: 'dashboard',
      position: 0,
      pathMatchExact: true
    },
    {
      name: 'Components',
      route: '/components',
      icon: 'layers',
      position: 1
    },
    {
      name: 'Forms',
      icon: 'description',
      position: 2,
      subItems: [
        {
          name: 'Form Elements',
          route: '/forms/form-elements',
          position: 1
        },
        {
          name: 'Form Wizard',
          route: '/forms/form-wizard',
          position: 2
        }
      ]
    },
    {
      name: 'Page Layouts',
      icon: 'view_compact',
      position: 3,
      subItems: [
        {
          name: 'Simple',
          route: '/page-layouts/simple',
          position: 1
        },
        {
          name: 'Simple Tabbed',
          route: '/page-layouts/simple-tabbed',
          position: 2
        },
        {
          name: 'Card',
          route: '/page-layouts/card',
          position: 3
        },
        {
          name: 'Card Tabbed',
          route: '/page-layouts/card-tabbed',
          position: 4
        },
      ]
    },
    {
      name: 'Material Icons',
      route: '/icons',
      icon: 'grade',
      position: 4
    },
  ]
};
