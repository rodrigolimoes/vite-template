import { tv, VariantProps } from 'tailwind-variants';

const baseButton: Array<string> = [
	'flex',
	'items-center',
	'justify-center',
	'px-4',
	'h-9',
	'rounded',
	'border',
	'outline-none',
	'disabled:cursor-not-allowed',
	'disabled:text-zinc-300',
	'disabled:border-zinc-200',
];

export const button = tv({
	slots: {
		base: baseButton,
		wrapper: ['flex', 'transition-opacity', 'ease-in'],
	},
	variants: {
		fullWidth: {
			true: {
				base: ['w-full'],
			},
		},
		startIcon: {
			true: {
				wrapper: ['[&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:mr-2'],
			},
		},
		endIcon: {
			true: {
				wrapper: ['[&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:ml-2'],
			},
		},
		color: {
			primary: {
				base: [
					'bg-primary',
					'text-primary-contrast',
					'border-primary',
					'hover:bg-primary-hover',
					'dark:bg-primary-dark',
					'dark:border-primary-dark',
					'dark:text-primary-dark-contrast',
					'dark:hover:bg-primary-dark-hover',
					'dark:hover:border-primary-dark-hover',
				],
			},
			secondary: {
				base: [
					'bg-secondary',
					'text-secondary-contrast',
					'border-secondary',
					'hover:bg-secondary-hover',
					'dark:bg-secondary-dark',
					'dark:border-secondary-dark',
					'dark:hover:bg-secondary-dark-hover',
					'dark:hover:border-secondary-dark-hover',
					'dark:text-secondary-dark-contrast',
				],
			},
			error: {
				base: [
					'bg-error',
					'text-error-contrast',
					'border-error',
					'hover:bg-error-hover',
					'dark:bg-error-dark',
					'dark:border-error-dark',
					'dark:text-error-dark-contrast',
					'dark:hover:bg-error-dark-hover',
					'dark:hover:border-error-dark-hover',
				],
			},
			success: {
				base: [
					'bg-success',
					'text-success-contrast',
					'border-success',
					'hover:bg-success-hover',
					'dark:bg-success-dark',
					'dark:border-success-dark',
					'dark:text-success-dark-contrast',
					'dark:hover:bg-success-dark-hover',
					'dark:hover:border-success-dark-hover',
				],
			},
			warning: {
				base: [
					'bg-warning',
					'text-warning-contrast',
					'border-warning',
					'hover:bg-warning-hover',
					'dark:bg-warning-dark',
					'dark:border-warning-dark',
					'dark:text-warning-dark-contrast',
					'dark:hover:bg-warning-dark-hover',
					'dark:hover:border-warning-dark-hover',
				],
			},
		},
		variant: {
			contained: {
				base: ['disabled:text-zinc-400', 'disabled:bg-zinc-200'],
			},
			outlined: {
				base: [
					'bg-transparent',
					'dark:bg-transparent',
					'disabled:bg-transparent',
				],
			},
			text: {
				base: [
					'bg-transparent',
					'dark:bg-transparent',
					'disabled:bg-transparent',
					'border-0',
				],
			},
		},
		loading: {
			true: {
				wrapper: ['opacity-0'],
			},
			false: {
				wrapper: ['opacity-100'],
			},
		},
		defaultVariants: {
			color: 'primary',
			variant: 'contained',
			loading: false,
		},
	},
	compoundVariants: [
		{
			color: 'primary',
			variant: ['outlined', 'text'],
			className: [
				'text-primary',
				'hover:bg-primary/10',
				'dark:text-primary-dark',
				'dark:hover:bg-primary-dark-hover/10',
			],
		},
		{
			color: 'error',
			variant: ['outlined', 'text'],
			className: [
				'text-error',
				'hover:bg-error/10',
				'dark:text-error-dark',
				'dark:hover:bg-error-dark-hover/10',
			],
		},
		{
			color: 'success',
			variant: ['outlined', 'text'],
			className: [
				'text-success',
				'hover:bg-success/10',
				'dark:text-success-dark',
				'dark:hover:bg-success-dark-hover/10',
			],
		},
		{
			color: 'warning',
			variant: ['outlined', 'text'],
			className: [
				'text-warning',
				'hover:bg-warning/10',
				'dark:text-warning-dark',
				'dark:hover:bg-warning-dark-hover/10',
			],
		},
		{
			color: 'secondary',
			variant: ['outlined', 'text'],
			className: [
				'text-secondary',
				'hover:bg-secondary/10',
				'dark:text-secondary-dark',
				'dark:hover:bg-secondary-dark-hover/10',
			],
		},
	],
});

export type ButtonVariants = VariantProps<typeof button>;
