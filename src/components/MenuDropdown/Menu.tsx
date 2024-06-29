import { ComponentProps, FC } from 'react';
import { useDropdownContext } from '@/components/MenuDropdown/DropdownContext';
import { dropdown } from '@/components/MenuDropdown/style';

interface MenuStateProps {}
interface MenuDispatchProps {}

export type MenuProps = MenuStateProps &
	MenuDispatchProps &
	ComponentProps<'div'>;

/**
 * Dropdown menu component
 * @param children The content of the component
 * @param className Override or extend the styles applied to the component
 * @param props Props
 * @example
 * <Menu>
 *     <MenuItem href="/Home">
 *         Home
 *     </MenuItem>
 * </Menu>
 */
const Menu: FC<MenuProps> = ({ children, className, ...props }) => {
	const { show } = useDropdownContext();
	const { menu } = dropdown({ show });
	return (
		<div className={menu({ className })} {...props}>
			{children}
		</div>
	);
};

export default Menu;
