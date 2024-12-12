import { FC } from 'react';
import { Route, Routes } from 'react-router';

import RootLayout from '@/components/layouts/RootLayout';
import { PublicRoutes } from '@/routes/routes';

const App: FC = () => {
	return (
		<Routes>
			<Route element={<RootLayout />}>
				{PublicRoutes.map((route, idx) => {
					const Page = route.component;
					return (
						<Route
							key={idx}
							path={route.path}
							element={<Page />}
						/>
					);
				})}
			</Route>
		</Routes>
	);
};

export default App;
