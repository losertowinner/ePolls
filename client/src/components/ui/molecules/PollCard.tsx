import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';

import { Question } from '@/types/poll.types';

interface PollCardProps {
    poll: Question;
}

const PollCard: FC<PollCardProps> = ({ poll }) => {
    return (
        <Card className='py-5 bg-body-tertiary rounded-3 h-100'>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='fw-bold mb-2 fs-4 text-body-emphasis'>
                    {poll.title}
                </Card.Title>
                <Card.Text className='flex-grow-1'>
                    {poll.description || 'No description available'}
                </Card.Text>
                <div className='mt-3'>
                    <Link
                        to={`/poll/${poll.slug}`}
                        className='btn btn-primary'>
                        Vote Now
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PollCard; 