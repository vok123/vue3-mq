/* ******************************************
 * MODULE IMPORTS
 ****************************************** */
import { inject, reactive } from "vue";

/* ******************************************
 * LOCAL IMPORTS
 ****************************************** */
import { validatePreset, sanitiseBreakpoints } from "./validation";
import {
	removeListeners,
	createMediaQueries,
	subscribeToMediaQuery,
} from "./helpers";

/* ******************************************
 * STATE IMPORTS
 ****************************************** */
import {
	setAvailableBreakpoints,
	updateState,
	updateMotionState,
	updateOrientationState,
	updateThemeState,
	resetState,
} from "./store";

/**
 * Update the breakpoint presets and assign MediaQuery listeners for each of them
 *
 * @public
 * @param {object} config - Configuration object for updating breakpoints
 * @param {object} config.breakpoints - An object of name:min values to set
 * @param {object} config.preset - A breakpoint preset to use
 */
export function updateBreakpoints({ breakpoints, preset }) {
	const validatedPreset = validatePreset(preset);
	const sanitisedBreakpoints = sanitiseBreakpoints(breakpoints);

	if (validatedPreset === false && !sanitisedBreakpoints) {
		throw new TypeError(
			"Vue3 Mq: You must provide a valid preset, or valid breakpoint settings."
		);
	} else {
		setAvailableBreakpoints(
			sanitisedBreakpoints
				? sanitisedBreakpoints
				: sanitiseBreakpoints(validatedPreset)
		);
	}

	removeListeners();
	resetState();

	// Set matchMedia queries for breakpoints
	const mediaQueries = createMediaQueries();
	for (const key in mediaQueries) {
		const mediaQuery = mediaQueries[key];
		const callback = () => {
			updateState(key);
		};
		subscribeToMediaQuery(mediaQuery, callback);
	}

	// Set matchMedia queries for orientation
	["portrait", "landscape"].forEach((o) => {
		const orientationCallback = () => {
			updateOrientationState(o);
		};

		subscribeToMediaQuery(`(orientation: ${o})`, orientationCallback);
	});

	// Set matchMedia queries for OS theme
	["light", "dark"].forEach((t) => {
		const themeCallback = () => {
			updateThemeState(t);
		};

		subscribeToMediaQuery(`(prefers-color-scheme: ${t})`, themeCallback);
	});

	// Set matchMedia queries for OS theme
	["reduce", "no-preference"].forEach((m) => {
		const motionCallback = () => {
			updateMotionState(m);
		};

		subscribeToMediaQuery(`(prefers-reduced-motion: ${m})`, motionCallback);
	});
}

/**
 * Composable function which returns the MQ object provided in the ./plugin.js->install method
 *
 * @public
 * @returns {reactive} - The Vue Reactive object
 */
export function useMq() {
	const mq = inject("mq", null);
	return (
		mq || reactive({
			current: "xl",
			xs: false,
			smMinus: false,
			smPlus: true,
			sm: false,
			mdMinus: false,
			mdPlus: true,
			md: false,
			lgMinus: false,
			lgPlus: true,
			lg: false,
			xlMinus: false,
			xlPlus: true,
			xl: false,
			xxl: true,
			orientation: "landscape",
			isLandscape: true,
			isPortrait: false,
			theme: "light",
			isDark: false,
			isLight: true,
			motionPreference: "no-preference",
			isMotion: true,
			isInert: false,
		}
	));
}
