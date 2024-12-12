import { Routes } from '@/types/routes.types';

import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import Create from '@/pages/Create';
import Demo from '@/pages/Demo';

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
