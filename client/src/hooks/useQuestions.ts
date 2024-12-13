import { useQuery } from '@tanstack/react-query';

import { pollsApi } from '@/services/polls';

export const useQuestions = () => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: pollsApi.getQuestions,
    });
}; 