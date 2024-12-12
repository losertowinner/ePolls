import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

import Title from '@/components/ui/Title';

const Pricing: FC = () => {
	return (
		<div className='pt-5 px-3 pb-md-4 mx-auto text-center'>
			<Title
				subject={'Pricing Plans'}
				description={
					'StrawPoll is free to use. If you need additional features, you can upgrade to a paid plan.'
				}
			/>
			<Row className='row-cols-1 row-cols-lg-4 row-cols-md-2 mb-3 text-center'>
				<Col>
					<Card
						bg={'light'}
						className='mb-4 rounded-3 shadow-sm'>
						<Card.Body>
							<Card.Title className='fw-bold'>
								Free
							</Card.Title>
							<Card.Text className='fs-1'>
								$0
								<small className='text-body-secondary fw-light'>
									/mo
								</small>
							</Card.Text>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>10 users included</li>
								<li>2 GB of storage</li>
								<li>Email support</li>
								<li>Help center access</li>
							</ul>
							<Link
								to={'/signup'}
								className='btn btn-outline'>
								Create account
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Pricing;
