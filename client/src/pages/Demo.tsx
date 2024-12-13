import { FC, Suspense } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import Title from '@/components/ui/atoms/Title';
import Loading from '@/components/ui/atoms/Loading';
import { useQuestions } from '@/hooks/useQuestions';

const Demo: FC = () => {
	const { data: questions, error } = useQuestions();

	if (error) {
		console.error('Error fetching questions:', error);
		return (
			<div className='text-center text-danger mt-5'>
				Failed to load questions. Please try again later.
			</div>
		);
	}

	return (
		<Suspense fallback={<Loading />}>
			<section className='pt-5 px-3 pb-md-4 mx-auto text-center'>
				<Title
					subject={'Experience Live Voting'}
					description={
						'See how easy it is to conduct a poll with live results using StrawPoll.'
					}
				/>
			</section>
			<section
				className='modal show mb-5'
				style={{ display: 'block', position: 'initial' }}>
				<Modal.Dialog>
					{questions?.map((q) => (
						<Modal.Body key={q.slug}>
							<Form className='p-3'>
								<h3 className='fs-5 fw-bold'>
									{q.title}
								</h3>
								<Form.Group className='mb-3'>
									<Form.Label>
										Make a choice:
									</Form.Label>

									<div className='mb-3'>
										{q.choices.map((c) => (
											<Form.Check
												key={c.id}
												type={'radio'}
												id={`${q.slug}-${c.id}`}
												label={c.content}
												name={q.slug}
											/>
										))}
									</div>
								</Form.Group>
								<Form.Group className='mb-3 gap-4'>
									<Button>Vote</Button>
									<Button>Show results</Button>
								</Form.Group>
								<p>150,776 votes</p>
							</Form>
						</Modal.Body>
					))}
				</Modal.Dialog>
			</section>
		</Suspense>
	);
};

export default Demo;
