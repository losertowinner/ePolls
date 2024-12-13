export type Choice = {
    id: number;
    content: string;
};

export type Question = {
    slug: string;
    title: string;
    description: string;
    choices: Choice[];
}; 