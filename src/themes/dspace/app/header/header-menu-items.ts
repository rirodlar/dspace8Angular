/**
 * Shared menu configuration for the USACH site menu (Inicio / Personal de
 * Investigacion / Unidad Academica / Publicaciones / Colecciones).
 *
 * Used by both the desktop header row (#header-bottom in
 * header.component.html) and the mobile collapsible panel
 * (header-navbar-wrapper.component.html), so the two stay in sync.
 */
export interface MenuItem {
  label: string;
  link?: string;
  icon?: string;
  subMenu?: MenuItem[];
}

export const HEADER_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Inicio',
    link: '/home',
    icon: 'fas fa-home',
  },
  {
    label: 'Personal de Investigación',
    link: '/explore/researcherprofiles',
    icon: 'fas fa-users',
  },
  {
    label: 'Unidad Académica',
    link: '/handle/usach/43',
    icon: 'fas fa-university',
  },
  {
    label: 'Publicaciones',
    link: '/handle/usach/8',
    icon: 'fas fa-book',
  },
  {
    label: 'Colecciones',
    icon: 'fas fa-layer-group',
    subMenu: [
      {
        label: 'Ciencia Abierta',
        link: '/handle/usach/35915',
        icon: 'fas fa-lock-open',
      },
      {
        label: 'Datos de Investigacion',
        link: '/handle/usach/66',
        icon: 'fas fa-database',
      },
      {
        label: 'Divulgacion cientifica',
        link: '/handle/usach/51',
        icon: 'fas fa-bullhorn',
      },
      {
        label: 'Personal de Investigacion',
        link: '/handle/usach/3',
        icon: 'fas fa-users',
      },
      {
        label: 'Protecciones',
        link: '/handle/usach/9',
        icon: 'fas fa-shield-alt',
      },
      {
        label: 'Proyectos Externos',
        link: '/handle/usach/56',
        icon: 'fas fa-project-diagram',
      },
      {
        label: 'Proyectos Internos',
        link: '/handle/usach/58',
        icon: 'fas fa-project-diagram',
      },
      {
        label: 'Publicaciones',
        link: '/handle/usach/8',
        icon: 'fas fa-book',
      },
      {
        label: 'Tesis',
        link: '/handle/usach/17290',
        icon: 'fas fa-graduation-cap',
      },
    ],
  },
];
