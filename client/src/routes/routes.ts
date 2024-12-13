import { lazy } from 'react';
import { Routes } from '@/types/routes.types';

const Home = lazy(() => import('@/pages/Home'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Create = lazy(() => import('@/pages/Create'));
const Demo = lazy(() => import('@/pages/Demo'));

const PublicRoutes: Routes[] = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/pricing/',
			component: Pricing,
	},
	{
		path: '/create/',
		component: Create,
	},
	{
		path: '/demo/',
		component: Demo,
	},
];

export { PublicRoutes };
