import { ElementType, FC, ReactNode } from 'react';
import { typography, TypographyVariants } from '@/components/Typography/style';
import { ClassValue } from 'tailwind-variants';

const variantsTag: Record<string, ElementType> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	subtitle1: 'h6',
	subtitle2: 'h6',
	body1: 'p',
	body2: 'p',
	button: 'span',
	caption: 'span',
	overline: 'span',
	error: 'p',
};

interface TypographyStateProps extends Omit<TypographyVariants, 'class'> {
	children: ReactNode;
	component?: ElementType;
	className?: ClassValue;
	htmlFor?: string;
}
interface TypographyDispatchProps {}

export type TypographyProps = TypographyStateProps & TypographyDispatchProps;

/**
 * Returns a Typography based on [m2-material.io]{@link https://m2.material.io/design/typography/the-type-system.html#type-scale}
 * @example
 * //Example 1 - Get h1 variant style and set h1 tag in html structure
 * const text = 'custom text';
 * <Typography variant="h1">{text}</Typography>
 *
 * //Example 2 – Get the h1 variant style but set the span in the html structure
 * <Typography variant="h1" component="span">
 *   {text}
 *  </Typography>
 */
const Typography: FC<TypographyProps> = ({
	children,
	variant = 'body1',
	className,
	component,
	...props
}) => {
	const Tag = component ?? (variantsTag[variant] || variantsTag['span']);

	return (
		<Tag className={typography({ variant, className })} {...props}>
			{children}
		</Tag>
	);
};

export default Typography;
