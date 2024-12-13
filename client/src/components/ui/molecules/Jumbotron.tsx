import { FC } from 'react';
import { Link } from 'react-router';

const Jumbotron: FC = () => {
	return (
		<div className='p-5 my-5 bg-body-tertiary rounded-3'>
			<h1 className='display-3 fw-bold'>
				Create a poll <span className='text-primary'>in seconds</span>
			</h1>
			<p className='col-md-8 fs-4'>
				Want to ask your friends where to go friday night or arrange a
				meeting with co-workers? Create a poll - and get answers in no time.
			</p>
			<div className='d-grid gap-4 d-sm-flex mb-3'>
				<Link
					to={'/create/'}
					className='px-4 btn btn-primary'>
					Create a poll
				</Link>
				<Link
					to={'/demo/'}
					className='px-4 btn btn-outline-primary'>
					Live Demo
				</Link>
			</div>
			<p>No signup required</p>
		</div>
	);
};

export default Jumbotron;
