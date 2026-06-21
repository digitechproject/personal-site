export interface Route {
  label: string;
  path: string;
  index?: boolean;
  menu?: 'main' | 'plus' | 'hidden';
}

const routes: Route[] = [
  {
    index: true,
    label: 'Fernando HOUSSOU',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
    menu: 'main',
  },
  {
    label: 'Resume',
    path: '/resume',
    menu: 'main',
  },
  {
    label: 'Projects',
    path: '/projects',
    menu: 'main',
  },
  {
    label: 'Contact',
    path: '/contact',
    menu: 'main',
  },
  {
    label: 'Event',
    path: '/event',
    menu: 'plus',
  },
  {
    label: 'Writing',
    path: '/writing',
    menu: 'plus',
  },
  {
    label: 'Gallery',
    path: '/gallery',
    menu: 'plus',
  },
  {
    label: 'Stats',
    path: '/stats',
    menu: 'hidden',
  },
];

export default routes;
