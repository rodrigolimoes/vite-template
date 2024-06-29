import { tv, VariantProps } from 'tailwind-variants';

/**
 * Typography Variants
 */
export const typography = tv({
	base: 'font-sans',
	variants: {
		variant: {
			h1: 'text-8xl font-light tracking-[-0.094rem]',
			h2: 'text-6xl font-light tracking-[-0.031rem]',
			h3: 'text-5xl font-normal tracking-[0rem]',
			h4: 'text-4xl font-normal tracking-[0.016rem]',
			h5: 'text-2xl font-normal tracking-[0rem]',
			h6: 'text-xl font-medium tracking-[0.009rem]',
			subtitle1: 'text-base font-normal tracking-[0.009rem]',
			subtitle2: 'text-sm font-medium tracking-[0.006rem]',
			body1: 'text-base font-normal tracking-[0.031rem]',
			body2: 'text-sm font-normal tracking-[0.016rem]',
			button: 'text-sm font-medium uppercase tracking-[0.078rem]',
			caption: 'text-xs font-normal tracking-[0.025rem]',
			overline: 'text-[0.625rem] font-normal uppercase tracking-[0.078rem]',
			error: 'text-xs font-normal',
		},
		defaultVariants: {
			variant: 'body1',
		},
	},
	compoundVariants: [
		{
			variant: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			className: ['dark:text-white'],
		},
		{
			variant: [
				'subtitle1',
				'subtitle2',
				'body1',
				'body2',
				'caption',
				'overline',
			],
			className: ['dark:text-dark-4'],
		},
	],
});

export type TypographyVariants = VariantProps<typeof typography>;
