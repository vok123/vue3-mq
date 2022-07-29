import { updateBreakpoints } from "./composables";
import {
	setDefaultBreakpoint,
	setDefaultMotion,
	setDefaultOrientation,
	setDefaultTheme,
	mqState,
} from "./store";
import {
	validateOrientation,
	validateTheme,
	validateMotion,
} from "./validation";

/**
 * Install the VitalMq plugin on the Vue app instance
 *
 * @param {object} app - The Vue3 app instance
 * @param {object} config - Plugin installation configuration object
 * @param {string} config.preset - A string representing an exported preset from ./presets.js
 * @param {object} config.breakpoints - User defined breakpoints comprising a named key with a minimum width value
 * @param {string} config.defaultBreakpoint - The screen size to set when the plugin is executed in a non-browser context (e.g. SSR)
 * @param {string} config.defaultOrientation - The screen orientation to set when the plugin is executed in a non-browser context (e.g. SSR)
 * @param {string} config.defaultMotion - The motion preference to set when the plugin is executed in a non-browser context (e.g. SSR)
 * @param {string} config.defaultTheme - The theme to set when the plugin is executed in a non-browser context (e.g. SSR) or for users with no OS preference
 */
export const install = (
	app,
	{
		preset = "bootstrap5",
		breakpoints,
		defaultBreakpoint,
		defaultOrientation = "landscape",
		defaultMotion = "no-preference",
		defaultTheme,
	} = {}
) => {
	try {
		const validatedDefaultOrientation =
			validateOrientation(defaultOrientation);
		const validatedDefaultTheme = validateTheme(defaultTheme);
		const validatedDefaultMotion = validateMotion(defaultMotion);

		setDefaultBreakpoint(defaultBreakpoint);
		setDefaultOrientation(validatedDefaultOrientation);
		setDefaultTheme(validatedDefaultTheme);
		setDefaultMotion(validatedDefaultMotion);

		app.provide("mq", mqState);
		app.provide("updateBreakpoints", updateBreakpoints);

		updateBreakpoints({ breakpoints, preset });
	} catch (e) {
		console.error(e);
	}
};

export default { install };