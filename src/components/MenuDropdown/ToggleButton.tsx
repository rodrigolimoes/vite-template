import { FC, ReactNode, MouseEvent } from 'react';
import { useDropdownContext } from '@/components/MenuDropdown/DropdownContext';

interface ToggleButtonStateProps {
	children: ReactNode;
	className?: string;
}
interface ToggleButtonDispatchProps {
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

type ToggleButtonProps = ToggleButtonStateProps & ToggleButtonDispatchProps;

/**
 *
 * @param children The content of the component
 * @param onClick onClick event
 * @param className classname
 * @param props Props
 */
const ToggleButton: FC<ToggleButtonProps> = ({
	children,
	onClick,
	className,
	...props
}) => {
	const { onToggle } = useDropdownContext();
	return (
		<div
			{...props}
			className={`cursor-pointer ${className}`}
			onClick={event => {
				if (onClick) onClick(event);

				onToggle();
			}}
		>
			{children}
		</div>
	);
};

export default ToggleButton;
