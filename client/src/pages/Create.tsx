import { FC, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { CiCircleRemove } from 'react-icons/ci';

import Title from '@/components/ui/Title';

const Create: FC = () => {
	const [options, setOptions] = useState<string[]>(['Option 1', 'Option 2']);
	const [description, setDescription] = useState<string>('');
	const [showDescription, setShowDescription] = useState<boolean>(false);

	const handleAddOption = () => {
		setOptions([...options, `Option ${options.length + 1}`]);
	};

	const handleDeleteOption = (index: number) => {
		if (index !== 0) setOptions(options.filter((_, i) => i !== index));
	};

	const toggleDescription = () => {
		setShowDescription(!showDescription);
	};

	return (
		<>
			<section className='pt-5 px-3 mx-auto text-center'>
				<Title
					subject={'Create a Poll'}
					description={
						'Complete the below fields to create your poll.'
					}
				/>
			</section>
			<section
				className='modal show mb-5'
				style={{ display: 'block', position: 'initial' }}>
				<Modal.Dialog>
					<Modal.Body>
						<Form className='p-3'>
							<Form.Group
								className='mb-3'
								controlId='exampleForm.ControlInput1'>
								<Form.Label>Title</Form.Label>
								<Form.Control
									type='text'
									className='mb-2'
									placeholder='Type your question here'
								/>
								{!showDescription && (
									<Button
										size='sm'
										onClick={
											toggleDescription
										}>
										Add description or
										image
									</Button>
								)}
							</Form.Group>
							{showDescription && (
								<Form.Group className='mb-3'>
									<Form.Label>
										Description
										(optional)
									</Form.Label>
									<Form.Control
										as='textarea'
										rows={3}
										className='mb-2'
										placeholder='Enter a description...'
										value={description}
										onChange={(e) =>
											setDescription(
												e
													.target
													.value,
											)
										}
									/>
									<Form.Group className='mb-3'>
										<Form.Label>
											Add image
										</Form.Label>
										<Form.Control type='file' />
									</Form.Group>

									<Button
										size='sm'
										onClick={
											toggleDescription
										}>
										Hide description
									</Button>
								</Form.Group>
							)}
							<Form.Group className='mb-3'>
								<Form.Label>
									Answer Options
								</Form.Label>
								{options.map((option, index) => (
									<div
										key={index}
										className='d-flex align-items-center mb-2'>
										<Form.Control
											key={index}
											className='mb-2'
											type='text'
											value={
												option
											}
											placeholder={`Option ${
												index +
												1
											}`}
											onChange={(
												e,
											) => {
												const newOptions =
													[
														...options,
													];
												newOptions[
													index
												] =
													e.target.value;
												setOptions(
													newOptions,
												);
											}}
										/>

										{index !== 0 && (
											<Button
												variant='danger'
												size='sm'
												className='ms-2'
												onClick={() =>
													handleDeleteOption(
														index,
													)
												}>
												<CiCircleRemove className='size-6' />
											</Button>
										)}
									</div>
								))}
								<Button
									size='sm'
									onClick={handleAddOption}>
									Add option
								</Button>
							</Form.Group>
							<Button
								onClick={() =>
									console.log('Hello')
								}>
								Create poll
							</Button>
						</Form>
					</Modal.Body>
				</Modal.Dialog>
			</section>

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

export default Create;
