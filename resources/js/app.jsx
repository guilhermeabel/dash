import './bootstrap';
import '../sass/app.scss';
import '../css/resume.scss';
import '../css/loading.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const globPages = {
	...import.meta.glob('./Pages/**/*.jsx'),
	...import.meta.glob('./Pages/**/*.tsx'),
};

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => {
		const page = `./Pages/${name}`;
		return resolvePageComponent(`${page}.tsx`, globPages) || resolvePageComponent(`${page}.jsx`, globPages);
	},
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
});

InertiaProgress.init({ color: '#4B5563' });
