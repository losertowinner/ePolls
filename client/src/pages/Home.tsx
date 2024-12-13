import { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import Jumbotron from '@/components/ui/molecules/Jumbotron';
import PollGrid from '@/components/ui/organisms/PollGrid';

const Home: FC = () => {
	return (
		<>
			<Jumbotron />
			<Row className='align-items-md-stretch mb-5'>
				<Col md={6}>
					<div className='h-100 p-5 text-bg-light rounded-3'>
						<h2>Change the background</h2>
						<p>
							Swap the background-color utility and add a
							`.text-*` color utility to mix up the jumbotron
							look. Then, mix and match with additional
							component themes and more.
						</p>
						<Button>Example button</Button>
					</div>
				</Col>
				<Col md={6}>
					<div className='h-100 p-5 text-bg-light rounded-3'>
						<h2>Change the background</h2>
						<p>
							Swap the background-color utility and add a
							`.text-*` color utility to mix up the jumbotron
							look. Then, mix and match with additional
							component themes and more.
						</p>
						<Button>Example button</Button>
					</div>
				</Col>
			</Row>

			<section>
				<div className='text-center'>
					<h2 className='fw-bolder text-uppercase fs-5'>
						Recent Polls
					</h2>
					<p className='mt-2 fs-1 fw-bold text-primary'>
						Vote on trending polls
					</p>
					<p className='mt-3 fst-5'>
						Check out our most recent polls and make your voice heard.
						Join the community in discussing and voting on various topics.
					</p>
				</div>

				<PollGrid />
			</section>
		</>
	);
};

export default Home;
