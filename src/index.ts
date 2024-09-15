import { defineDisplay } from '@directus/extensions-sdk';
import DisplayComponent from './display.vue';

export default defineDisplay({
	id: 'photo-url',
	name: 'Photo URL',
	icon: 'image',
	description: 'Displays an external image by URL',
	component: DisplayComponent,
	options: null,
	types: ['string'],
});