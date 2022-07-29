declare module "vital-mq" {
	import { App } from "vue";

	export function vitalMq(app: App): void;
	export function useMq(): any;
}
