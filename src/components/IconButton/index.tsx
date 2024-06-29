import { ComponentProps, FC } from 'react';
import { iconButton, IconButtonVariants } from './style';

interface IconButtonStateProps extends Omit<IconButtonVariants, 'class'> {}
interface IconButtonDispatchProps {}

export type IconButtonProps = IconButtonStateProps &
	IconButtonDispatchProps &
	ComponentProps<'button'>;

const IconButton: FC<IconButtonProps> = ({
	size = 'md',
	color = 'primary',
	variant = 'contained',
	className,
	children,
	...props
}) => {
	return (
		<button
			className={iconButton({ className, color, size, variant })}
			{...props}
		>
			{children}
		</button>
	);
};

export default IconButton;
