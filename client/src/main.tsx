import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import { BrowserRouter } from 'react-router';

import '@/styles/globals.css';
import App from './App.tsx';

const root = document.getElementById('root');

if (root) {
	createRoot(root!).render(
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>,
	);
} else {
	throw Error('Root element is not exist !!!');
}
