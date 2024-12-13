import { FC } from 'react';

import Title from '@/components/ui/atoms/Title';
import PricingGrid from '@/components/ui/organisms/PricingGrid';

const Pricing: FC = () => {
	return (
		<div className='pt-5 px-3 pb-md-4 mx-auto text-center'>
			<Title
				subject={'Pricing Plans'}
				description={
					'StrawPoll is free to use. If you need additional features, you can upgrade to a paid plan.'
				}
			/>
			<PricingGrid />
		</div>
	);
};

export default Pricing;
