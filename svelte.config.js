// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        })
	},
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/style/app.scss';`
        }
    })
};

export default config;
