import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import Jumbotron from '@/components/ui/Jumbotron';

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
							`.text-*` color utility to mix up the
							jumbotron look. Then, mix and match with
							additional component themes and more.
						</p>
						<Button>Example button</Button>
					</div>
				</Col>
				<Col md={6}>
					<div className='h-100 p-5 text-bg-light rounded-3'>
						<h2>Change the background</h2>
						<p>
							Swap the background-color utility and add a
							`.text-*` color utility to mix up the
							jumbotron look. Then, mix and match with
							additional component themes and more.
						</p>
						<Button>Example button</Button>
					</div>
				</Col>
			</Row>

			<section>
				<div className='text-center'>
					<h2 className='fw-bolder text-uppercase fs-5'>
						Polling made easy
					</h2>
					<p className='mt-2 fs-1 fw-bold text-primary'>
						Simple polls with powerfull configuration
					</p>

					<p className='mt-3 fst-5'>
						While we make our polls as simple and beautiful as
						possible, we also offer powerful customization
						options to enable on-demand adjustments for many
						different purposes.
					</p>
				</div>

				<Row className='g-4 text-center'>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col
						lg={4}
						md={6}
						xs={12}>
						<Card className='py-5 bg-body-tertiary rounded-3 d-flex align-items-start'>
							<Card.Body>
								<Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
									Card Title
								</Card.Title>
								<Card.Text>
									Some quick example text to
									build on the card title and
									make up the bulk of the
									card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</section>
		</>
	);
};

export default Home;
