import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import PricingCard from '../molecules/PricingCard';
import { PRICING_PLANS } from '@/constants/pricing';

const PricingGrid: FC = () => {
	return (
		<Row className='row-cols-1 row-cols-lg-3 row-cols-md-2 mb-3 text-center'>
			{PRICING_PLANS.map((plan, index) => (
				<Col key={index}>
					<PricingCard {...plan} />
				</Col>
			))}
		</Row>
	);
};

export default PricingGrid;
