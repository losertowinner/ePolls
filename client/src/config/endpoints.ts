export const ENDPOINTS = {
    QUESTIONS: {
        BASE: `${import.meta.env.VITE_API_QUESTIONS}`,
        GET_ALL: `${import.meta.env.VITE_API_QUESTIONS}`,
        CREATE: `${import.meta.env.VITE_API_QUESTIONS}`,
        GET_BY_SLUG: (slug: string) => `${import.meta.env.VITE_API_QUESTIONS}/${slug}`,
    },
} as const; 