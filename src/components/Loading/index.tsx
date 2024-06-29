import { FC } from 'react';
import { loading, LoadingVariants } from '@components/Loading/style';

interface LoadingStateProps extends Omit<LoadingVariants, 'class'> {
	className?: string;
}
interface LoadingDispatchProps {}

export type LoadingProps = LoadingStateProps & LoadingDispatchProps;

/**
 * Loading Component
 * @param props Props
 * @param props.color Loading Color
 * @example
 * <Loading/>
 */
const Loading: FC<LoadingProps> = ({ color = 'inherit', className }) => {
	const { base, circular } = loading({ color, className });

	return (
		<div className={base()}>
			<div className={circular()} />
		</div>
	);
};

export default Loading;
