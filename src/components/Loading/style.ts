import { tv, VariantProps } from 'tailwind-variants';

export const loading = tv({
	slots: {
		base: ['absolute', 'inline-flex', 'items-center'],
		circular: ['w-4', 'h-4', 'rounded-full', 'border-2', 'animate-spin'],
	},
	variants: {
		color: {
			inherit: {
				circular: ['border-[inherit]'],
			},
			primary: {
				circular: ['border-primary'],
			},
			secondary: {
				circular: ['border-secondary'],
			},
			error: {
				circular: ['border-error'],
			},
			warning: {
				circular: ['border-warning'],
			},
			success: {
				circular: ['border-success'],
			},
		},
		defaultVariants: {
			color: 'inherit',
		},
	},
	compoundSlots: [
		{
			slots: ['circular'],
			className: ['border-b-transparent'],
		},
	],
});

export type LoadingVariants = VariantProps<typeof loading>;
