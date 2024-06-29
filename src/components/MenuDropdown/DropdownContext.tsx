import { createContext, useContext } from 'react';

interface DropdownContext {
	show: boolean;
	onToggle: () => void;
}

export const DropdownContext = createContext<DropdownContext | null>(null);

/**
 * Returns Dropdown context
 */
export const useDropdownContext = () => {
	let context = useContext(DropdownContext);

	if (!context)
		throw new Error(
			'Child components of Dropdown cannot be rendered outside the Dropdown component!',
		);

	return context;
};
