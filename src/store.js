/* ******************************************
 * IMPORTS
 ****************************************** */
import { reactive, readonly, ref } from "vue";

/* ******************************************
 * STATE
 ****************************************** */
const _availableBreakpoints = ref([]);
const _defaultBreakpoint = ref(null);
const _defaultOrientation = ref(null);
const _defaultTheme = ref(null);
const _mqState = reactive({
	current: "",
});

export const _listeners = [];
export const _isMounted = ref(false);

/* ******************************************
 * GETTERS
 ****************************************** */
export const availableBreakpoints = readonly(_availableBreakpoints);
export const defaultBreakpoint = readonly(_defaultBreakpoint);
export const defaultOrientation = readonly(_defaultOrientation);
export const defaultTheme = readonly(_defaultTheme);
export const mqState = readonly(_mqState);

/* ******************************************
 * MUTATIONS
 ****************************************** */
export const setAvailableBreakpoints = (v) => {
	_availableBreakpoints.value = v;
};

/**
 * @constant
 * @type {Function} - Sets the breakpoint to use when plugin executes in a non-browser context
 */
export const setDefaultBreakpoint = (v) => {
	_defaultBreakpoint.value = v;
};

/**
 * @constant
 * @type {Function} - Sets the orientation to use when plugin executes in a non-browser context
 */
export const setDefaultOrientation = (v) => {
	_defaultOrientation.value = v;
};

/**
 * @constant
 * @type {Function} - Sets the theme to use when plugin executes in a non-browser context
 */
export const setDefaultTheme = (v) => {
	_defaultTheme.value = v;
};

export const updateState = (v = defaultBreakpoint.value) => {
	_mqState.current = v;
	const currentIndex = availableBreakpoints.value.findIndex(
		(bp) => bp.name === v
	);
	const allKeys = availableBreakpoints.value.map((bp) => bp.name);

	for (let i = 0; i < allKeys.length; i++) {
		if (i > 0 && i < allKeys.length - 1) {
			const mKey = allKeys[i] + "Minus";
			const pKey = allKeys[i] + "Plus";

			_mqState[mKey] = currentIndex <= i ? true : false;
			_mqState[pKey] = currentIndex >= i ? true : false;
		}

		_mqState[allKeys[i]] = allKeys[i] === v ? true : false;
	}
};

/**
 * @constant
 * @type {Function} - Resets the MQ object to its initial values, using defaultBreakpoint and defaultOrientation
 */
export const resetState = () => {
	const keys = Object.keys(_mqState);
	for (let key of keys) {
		delete _mqState[key];
	}

	updateState();
	updateOrientationState();
	updateThemeState();
};

/**
 * @constant
 * @type {Function} - Update values for the MQ object's orientation properties
 * @param {string} v - The orientation value to set, either "portrait" or "landscape".
 */
export const updateOrientationState = (v = defaultOrientation.value) => {
	_mqState.orientation = v;
	_mqState.isLandscape = v === "landscape";
	_mqState.isPortrait = v === "portrait";
};

/**
 * @constant
 * @type {Function} - Update values for the MQ object's theme properties
 * @param {string} v - The theme value to set, either "dark" or "light".
 */
export const updateThemeState = (v = defaultTheme.value || "light") => {
	_mqState.theme = v;
	_mqState.isDark = v === "dark";
	_mqState.isLight = v === "light";
};
