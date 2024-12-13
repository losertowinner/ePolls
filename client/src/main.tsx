import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import { BrowserRouter } from 'react-router';

import '@/styles/globals.css';
import App from '@/App.tsx';
import queryClient from '@/services/query';

const root = document.getElementById('root');

if (root) {
	createRoot(root!).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</QueryClientProvider>
		</StrictMode>,
	);
} else {
	throw Error('Root element is not exist !!!');
}
