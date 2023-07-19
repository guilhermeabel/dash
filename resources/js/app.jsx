import './bootstrap';
import '../css/resume.scss';
import '../css/chat.scss';
import '../css/loading.scss';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const globPages = {
	...import.meta.glob('./Pages/**/*.jsx'),
	...import.meta.glob('./Pages/**/*.tsx'),
};


createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, globPages).catch(() => resolvePageComponent(`./Pages/${name}.tsx`, globPages)),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(
			<QueryClientProvider client={new QueryClient()}>
				<App {...props} />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		);
	},
	progress: {
		color: '#4B5563',
	},
});
