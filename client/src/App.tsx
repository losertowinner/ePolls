import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import RootLayout from '@/components/layouts/RootLayout';
import Loading from '@/components/ui/atoms/Loading';
import { PublicRoutes } from '@/routes/routes';

const App: FC = () => {
	return (
		<Suspense fallback={<Loading />}>
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
		</Suspense>
	);
};

export default App;
