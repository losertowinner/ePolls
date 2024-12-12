import { FC, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import Title from '@/components/ui/Title';
import axios from 'axios';

type Question = {
	slug: string;
	title: string;
	description: undefined | string;
	choices: Array<{ id: number; content: string }>;
};

const Demo: FC = () => {
	const [question, setQuestion] = useState<Question[]>([]);
	const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await axios.get<Question[]>(
					'http://127.0.0.1:8000/questions/',
				);
				setQuestion(response.data);
			} catch (err) {
				console.error(err);
			} finally {
				console.log('Loading...');
			}
		};

		fetchQuestions();
	}, []);

	const handleAnswerChange = (questionSlug: string, choiceId: number) => {
		setSelectedAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionSlug]: choiceId,
		}));
	};

	return (
		<>
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
					{question.map((q) => (
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
										{q.choices.map(
											(c) => {
												return (
													<Form.Check
														key={
															c.id
														}
														type={
															'radio'
														}
														id={`${q.slug}-${c.id}`}
														label={`${c.content}`}
														name={
															q.slug
														}
														checked={
															selectedAnswers[
																q
																	.slug
															] ===
															c.id
														}
														onChange={() =>
															handleAnswerChange(
																q.slug,
																c.id,
															)
														}
													/>
												);
											},
										)}
									</div>
								</Form.Group>
								<Form.Group className='mb-3 gap-4'>
									<Button>Vote</Button>
									<Button>
										Show results
									</Button>
								</Form.Group>
								<p>150,776 votes</p>
							</Form>
						</Modal.Body>
					))}
				</Modal.Dialog>
			</section>
		</>
	);
};

export default Demo;
