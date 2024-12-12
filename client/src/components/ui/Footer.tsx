import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
	return (
		<footer className='bg-light'>
			<Container>
				<div className='row pt-5 pb-3 mt-5 border-top'>
					<div className='col-lg-4 col-12 mb-5'>
						<a
							href='/'
							className='fw-bold fs-3 d-flex align-items-center mb-3 text-body text-decoration-none'>
							❓StrawPoll
						</a>
						<p className='text-body-secondary'>
							Making it easy to create instant, real-time
							polls and surveys for free.
						</p>
						<ul className='nav list-unstyled'>
							<li className='mr-3'>
								<a
									className='text-body-secondary'
									href='#'>
									<FaTwitter className='size-6' />
								</a>
							</li>
							<li className='ms-3'>
								<a
									className='text-body-secondary'
									href='#'>
									<FaInstagram className='size-6' />
								</a>
							</li>
							<li className='ms-3'>
								<a
									className='text-body-secondary'
									href='#'>
									<FaFacebook className='size-6' />
								</a>
							</li>
							<li className='ms-3'>
								<a
									className='text-body-secondary'
									href='#'>
									<FaGithub className='size-6' />
								</a>
							</li>
						</ul>
					</div>

					<div className='col mb-3'>
						<h5>Support</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Help Center
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Guides
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									F.A.Q.
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Integrations
								</a>
							</li>
						</ul>
					</div>

					<div className='col mb-3'>
						<h5>Company</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									About
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Imprint
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div className='col mb-3'>
						<h5>Legal</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Privacy
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a
									href='#'
									className='nav-link p-0 text-body-secondary'>
									Terms
								</a>
							</li>
						</ul>
					</div>

					<p className='text-center my-4'>
						&copy; {new Date().getFullYear()} StrawPoll. All
						rights reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
