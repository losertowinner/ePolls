import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import PollCard from '@/components/ui/molecules/PollCard';
import Loading from '@/components/ui/atoms/Loading';
import { useQuestions } from '@/hooks/useQuestions';

const PollGrid: FC = () => {
	const { data: questions, error, isLoading } = useQuestions();

	if (error) {
		console.error('Error fetching questions:', error);
		return <div className='text-center text-danger'>Failed to load questions</div>;
	}

	if (isLoading) return <Loading />;

	return (
		<Row className='g-4 text-center'>
			{questions?.slice(0, 6).map((question) => (
				<Col
					key={question.slug}
					lg={4}
					md={6}
					xs={12}>
					<PollCard poll={question} />
				</Col>
			))}
		</Row>
	);
};

export default PollGrid;
