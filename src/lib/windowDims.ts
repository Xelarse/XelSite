import { writable } from "svelte/store";

type WindowDims = {
	width: number;
	height: number;
}

export const windowDims = writable<WindowDims>(
	typeof window !== "undefined" ? {width: window.innerWidth, height: window.innerHeight} : {width: 0, height: 0}
);

if (typeof window !== 'undefined') {
	const updateDims = () => {
		windowDims.set({width: window.innerWidth, height: window.innerHeight})
	};

	window.addEventListener('resize', updateDims);
	window.addEventListener('load', updateDims);

	// Cleanup listener when module is reloaded (HMR)
	if (import.meta.hot) {
		import.meta.hot.dispose(() => {
			window.removeEventListener('resize', updateDims);
			window.removeEventListener('load', updateDims);
		});
	}
}