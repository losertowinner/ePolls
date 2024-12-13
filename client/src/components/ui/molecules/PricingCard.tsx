import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';

import { PricingPlan } from '@/constants/pricing';

type PricingCardProps = PricingPlan;

const PricingCard: FC<PricingCardProps> = ({ title, price, features, isPopular }) => {
	return (
		<Card className={`mb-4 rounded-3 shadow-sm ${isPopular ? 'border-primary' : ''}`}>
			{isPopular && (
				<div className='card-header py-3 text-bg-primary border-primary'>
					<h4 className='my-0 fw-normal'>Popular</h4>
				</div>
			)}
			<Card.Body>
				<Card.Title className='fw-bold'>{title}</Card.Title>
				<Card.Text className='fs-1'>
					${price}
					<small className='text-body-secondary fw-light'>/mo</small>
				</Card.Text>
				<ul className='list-unstyled mt-3 mb-4'>
					{features.map((feature, index) => (
						<li
							key={index}
							className={
								feature.included
									? ''
									: 'text-body-secondary text-decoration-line-through'
							}>
							{feature.text}
						</li>
					))}
				</ul>
				<Link
					to={'/signup'}
					className={`w-100 btn btn-lg ${
						isPopular ? 'btn-primary' : 'btn-outline-primary'
					}`}>
					Get started
				</Link>
			</Card.Body>
		</Card>
	);
};

export default PricingCard;
