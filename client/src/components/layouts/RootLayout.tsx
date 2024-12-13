import { Outlet } from 'react-router';
import { FC } from 'react';

import Footer from '../ui/organisms/Footer';
import Header from '../ui/organisms/Header';

const RootLayout: FC = () => {
	return (
		<>
			<Header />
			<main className='container'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
