import { ComponentProps, ElementType, FC, forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@/components/Typography';
import { textField } from '@components/Form/TextField/style';

const components: Record<string, Pick<ElementType, 'input' | 'textarea'>> = {
	input: 'input',
	textarea: 'textarea',
};

interface TextFieldStateProps extends ComponentProps<'input'> {
	label?: string;
	error?: string;
	component?: 'input' | 'textarea';
}
interface TextFieldDispatchProps {}

type TextFieldProps = TextFieldStateProps & TextFieldDispatchProps;

const TextField: FC<TextFieldProps> = forwardRef<
	HTMLInputElement,
	TextFieldProps
>(
	(
		{
			children,
			required,
			component = 'input',
			label,
			className,
			error,
			...props
		},
		ref,
	) => {
		const {
			label: labelStyle,
			input: inputStyle,
			message,
		} = textField({ error: !!error });
		const id = uuidv4();
		const Input = component ? components[component] : components['input'];

		return (
			<div className={className}>
				{label && (
					<Typography
						htmlFor={id}
						variant='subtitle2'
						component='label'
						className={labelStyle({ required })}
					>
						{label}
					</Typography>
				)}
				<Input ref={ref} id={id} className={inputStyle()} {...props} />
				{error && (
					<Typography variant={'error'} className={message()}>
						{error}
					</Typography>
				)}
			</div>
		);
	},
);

export default TextField;
