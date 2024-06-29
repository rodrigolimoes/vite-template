import { tv, VariantProps } from 'tailwind-variants';

export const textField = tv({
	slots: {
		label: ['block', 'font-normal', 'mb-1'],
		input: [
			'px-3',
			'py-2',
			'w-full',
			'bg-transparent',
			'border',
			'border-gray-300',
			'rounded-md',
			'text-sm',
			'shadow-sm',
			'dark:text-dark-4',
			'placeholder-gray-400',
			'dark:placeholder-dark-4',
			'focus:outline-none',
			'focus:border-primary',
			'dark:focus:border-primary-dark',
			'focus:ring-1',
			'focus:ring-primary',
			'dark:focus:ring-primary-dark',
			'invalid:border-error',
			'invalid:text-error',
			'disabled:bg-gray-50',
			'disabled:bg-dark-4/10',
			'disabled:text-gray-500',
			'dark:disabled:bg-dark-4/10',
			'disabled:shadow-none',
			'disabled:cursor-not-allowed',
		],
		message: ['mt-[3px] mb-0 mx-3 text-error', 'dark:text-error-dark'],
	},
	variants: {
		error: {
			true: {
				input: [
					'border-error',
					'dark:border-error-dark',
					'focus:border-error',
					'dark:focus:border-error-dark',
					'focus:ring-error',
					'dark:focus:ring-error-dark',
					'invalid:border-error',
					'invalid:text-error',
				],
			},
		},
		required: {
			true: {
				label: [
					"after:content-['*']",
					'after:ml-0.5',
					'after:text-error',
					'dark:after:text-error-dark',
				],
			},
		},
	},
});

export type TextFieldVariants = VariantProps<typeof textField>;
