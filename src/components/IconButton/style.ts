import { tv, VariantProps } from 'tailwind-variants';

export const iconButton = tv({
	base: [
		'text-2xl',
		'text-center',
		'border',
		'border-solid',
		'rounded-full',
		'outline-none',
		'disabled:cursor-not-allowed',
		'disabled:text-zinc-300',
		'disabled:border-zinc-200',
		'disabled:bg-zinc-200',
		'dark:disabled:text-zinc-400',
		'dark:disabled:cursor-not-allowed',
		'dark:disabled:border-zinc-200',
		'dark:disabled:hover:bg-transparent',
	],
	variants: {
		color: {
			primary: [
				'bg-primary',
				'border-primary',
				'text-primary-contrast',
				'hover:bg-primary-hover',
				'hover:border-primary-hover',
				'dark:bg-primary-dark',
				'dark:border-primary-dark',
				'dark:text-primary-dark-contrast',
				'dark:hover:bg-primary-dark-hover',
				'dark:hover:border-primary-dark-hover',
			],
			secondary: [
				'bg-secondary',
				'text-secondary-contrast',
				'border-secondary',
				'hover:bg-secondary-hover',
				'hover:border-secondary-hover',
				'dark:bg-secondary-dark',
				'dark:border-secondary-dark',
				'dark:hover:bg-secondary-dark-hover',
				'dark:hover:border-secondary-dark-hover',
				'dark:text-secondary-dark-contrast',
			],
			error: [
				'bg-error',
				'text-error-contrast',
				'border-error',
				'hover:bg-error-hover',
				'hover:border-error-hover',
				'dark:bg-error-dark',
				'dark:border-error-dark',
				'dark:text-error-dark-contrast',
				'dark:hover:bg-error-dark-hover',
				'dark:hover:border-error-dark-hover',
			],
			success: [
				'bg-success',
				'text-success-contrast',
				'border-success',
				'hover:bg-success-hover',
				'hover:border-success-hover',
				'dark:bg-success-dark',
				'dark:border-success-dark',
				'dark:text-success-dark-contrast',
				'dark:hover:bg-success-dark-hover',
				'dark:hover:border-success-dark-hover',
			],
			warning: [
				'bg-warning',
				'text-warning-contrast',
				'border-warning',
				'hover:bg-warning-hover',
				'hover:border-warning-hover',
				'dark:bg-warning-dark',
				'dark:border-warning-dark',
				'dark:text-warning-dark-contrast',
				'dark:hover:bg-warning-dark-hover',
				'dark:hover:border-warning-dark-hover',
			],
		},
		size: {
			sm: ['p-1.5', '[&>svg]:w-[18px]', '[&>svg]:h-[18px]'],
			md: ['p-[0.313rem]', 'h-9'],
			lg: ['p-2', 'h-[2.625rem]'],
		},
		variant: {
			contained: [],
			outlined: [
				'bg-transparent',
				'dark:bg-transparent',
				'disabled:bg-transparent',
			],
			text: [
				'bg-transparent',
				'dark:bg-transparent',
				'disabled:bg-transparent',
				'border-0',
			],
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
			color: 'secondary',
			variant: ['outlined', 'text'],
			className: [
				'text-secondary',
				'hover:bg-secondary/10',
				'dark:text-secondary-dark',
				'dark:hover:bg-secondary-dark-hover/10',
			],
		},
		{
			color: 'error',
			variant: ['outlined', 'text'],
			className: [
				'text-error',
				'hover:bg-error/10',
				'dark:text-error-dark',
				'dark:hover:bg-error-dark-hover/40',
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
	],
});

export type IconButtonVariants = VariantProps<typeof iconButton>;
