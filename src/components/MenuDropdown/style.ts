import { tv, VariantProps } from 'tailwind-variants';

export const dropdown = tv({
	slots: {
		base: ['relative', 'inline-block', 'text-left', 'shadow-2xl'],
		menu: [
			'absolute',
			'min-w-full',
			'bg-white',
			'dark:bg-dark-8',
			'mt-2',
			'right-0',
			'z-40',
			'origin-top-right',
			'rounded-md',
			'ring-1',
			'ring-black',
			'ring-opacity-5',
			'focus:outline-none',
		],
		item: [
			'w-full',
			'block',
			'px-4',
			'py-2',
			'hover:bg-gray-600/10',
			'dark:hover:bg-dark-6',
			'last:rounded-b-md',
			'z-50',
		],
	},
	variants: {
		show: {
			false: {
				menu: ['invisible'],
			},
			true: {
				menu: ['visible'],
			},
		},
	},
});

export type DropdownVariants = VariantProps<typeof dropdown>;
