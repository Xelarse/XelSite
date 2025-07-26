import { writable } from "svelte/store";

const mobileWidth = 880;
type WindowDims = {
	width: number;
	height: number;
}

export const isMobile = writable<boolean>(false);
export const isInitialized = writable<boolean>(false);
export const windowDims = writable<WindowDims>(
	typeof window !== "undefined" ? {width: window.innerWidth, height: window.innerHeight} : {width: 0, height: 0}
);

const updateDims = () => {
	windowDims.set({width: window.innerWidth, height: window.innerHeight})
};

const updateIsMobile = () => {
	isMobile.set(window.innerWidth <= mobileWidth);
};

const resizeConsumers: (() => void)[] = [updateDims, updateIsMobile];
const loadConsumers: (() => void)[] = [updateDims, updateIsMobile];

if (typeof window !== 'undefined') {
	const resizeListener = () => {
		for (const fn of resizeConsumers) {
			fn();
		}
	}
	
	const loadListener = () => {
		for (const fn of loadConsumers) {
			fn();
		}
	}
	
	// Call listeners on page load to make sure defaults are calculated.
	resizeListener();
	loadListener();
	
	isInitialized.set(true);

	window.addEventListener('resize', resizeListener);
	window.addEventListener('load', loadListener);

	// Cleanup listener when module is reloaded (HMR)
	if (import.meta.hot) {
		import.meta.hot.dispose(() => {
			window.removeEventListener('resize', resizeListener);
			window.removeEventListener('load', loadListener);
		});
	}
}