import { FC, MouseEvent, ReactNode } from 'react';
import { dropdown } from '@/components/MenuDropdown/style';
import { useDropdownContext } from '@/components/MenuDropdown/DropdownContext';
import { Link } from 'react-router-dom';

interface MenuItemStateProps {
	href?: string;
	children: ReactNode;
	className?: string;
}
interface MenuItemDispatchProps {
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type MenuItemProps = MenuItemDispatchProps & MenuItemStateProps;

/**
 * Menu Item Component
 * @param children The content of the component
 * @param href Specifies the URL of the page the link goes to
 * @param className Override or extend the styles applied to the component
 * @param onClick On Click event
 * @param props Props
 * @example
 * <MenuItem href="/">Home</Item>
 */
const MenuItem: FC<MenuItemProps> = ({
	children,
	href,
	className,
	onClick,
	...props
}) => {
	const { onToggle } = useDropdownContext();
	const { item } = dropdown();

	if (href)
		return (
			<Link
				to={href}
				className={item({ className: `cursor-pointer ${className}` })}
				onClick={(event: any) => {
					if (onClick) onClick(event);

					onToggle();
				}}
				{...props}
			>
				{children}
			</Link>
		);

	return (
		<button
			className={item({ className: `cursor-pointer ${className}` })}
			onClick={event => {
				if (onClick) onClick(event);

				onToggle();
			}}
			{...props}
		>
			{children}
		</button>
	);
};

export default MenuItem;
