import { ComponentProps, FC, JSX } from 'react';
import { button, ButtonVariants } from '@components/Button/style';
import Typography from '@components/Typography';
import Loading from '@components/Loading';

export type Color =
	| 'primary'
	| 'error'
	| 'success'
	| 'warning'
	| 'secondary'
	| undefined;

export type Variant = 'outlined' | 'text' | 'contained' | undefined;

interface ButtonStateProps
	extends Omit<ButtonVariants, 'class' | 'startIcon' | 'endIcon'> {
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	color?: Color;
	variant?: Variant;
	loading?: boolean;
	fullWidth?: boolean;
}
interface ButtonDispatchProps {}

type ButtonProps = ButtonStateProps &
	ButtonDispatchProps &
	ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
	children,
	fullWidth,
	color = 'primary',
	variant = 'contained',
	loading = false,
	startIcon,
	endIcon,
	className,
	...props
}) => {
	const { base, wrapper } = button({
		color: color,
		variant: variant,
		loading: loading,
		fullWidth,
	});
	const loadingColor = ['outlined', 'text'].includes(variant as string)
		? color
		: undefined;

	return (
		<button className={base({ className })} {...props}>
			{loading && <Loading color={loadingColor as Color} />}
			<span
				className={wrapper({
					startIcon: !!startIcon,
					endIcon: endIcon && !startIcon,
				})}
			>
				{startIcon ? startIcon : null}
				<Typography variant='button'>{children}</Typography>
				{endIcon && !startIcon ? endIcon : null}
			</span>
		</button>
	);
};

export default Button;
