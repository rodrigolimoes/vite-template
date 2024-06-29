import { FC, ReactNode, useState, useRef, useEffect } from 'react';
import { DropdownContext } from '@/components/MenuDropdown/DropdownContext';
import { dropdown } from '@/components/MenuDropdown/style';

interface DropdownStateProps {
	children: ReactNode;
}
interface DropdownDispatchProps {}

export type DropdownProps = DropdownStateProps & DropdownDispatchProps;

/**
 * Dropdown component
 * @param children The content of the component
 */
const Dropdown: FC<DropdownProps> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);

	/**
	 * Toggle menu dropdown state
	 */
	const onToggle = (): void => {
		setOpen(prevState => !prevState);
	};

	/**
	 * Close the menu if user click outside dropdown
	 * @param event MouseEvent
	 */
	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const { base } = dropdown();
	return (
		<div className={base()} ref={menuRef}>
			<DropdownContext.Provider
				value={{
					show: open,
					onToggle,
				}}
			>
				{children}
			</DropdownContext.Provider>
		</div>
	);
};

export default Dropdown;
