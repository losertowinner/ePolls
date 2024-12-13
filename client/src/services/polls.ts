import { Question } from '@/types/poll.types';
import { ENDPOINTS } from '@/config/endpoints';
import axiosInstance from './axios';

export const pollsApi = {
	getQuestions: async (): Promise<Question[]> => {
		const { data } = await axiosInstance.get(ENDPOINTS.QUESTIONS.GET_ALL);
		return data;
	},

	createQuestion: async (question: Partial<Question>): Promise<Question> => {
		const { data } = await axiosInstance.post(ENDPOINTS.QUESTIONS.CREATE, question);
		return data;
	},
};
