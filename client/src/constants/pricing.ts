export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingPlan {
    title: string;
    price: number;
    features: PricingFeature[];
    isPopular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
    {
        title: 'Free',
        price: 0,
        features: [
            { text: '10 users included', included: true },
            { text: '2 GB of storage', included: true },
            { text: 'Email support', included: true },
            { text: 'Help center access', included: true },
            { text: 'Priority support', included: false },
        ],
    },
    {
        title: 'Pro',
        price: 15,
        isPopular: true,
        features: [
            { text: '20 users included', included: true },
            { text: '10 GB of storage', included: true },
            { text: 'Priority email support', included: true },
            { text: 'Help center access', included: true },
            { text: 'Phone support', included: true },
        ],
    },
    {
        title: 'Enterprise',
        price: 29,
        features: [
            { text: '30 users included', included: true },
            { text: '15 GB of storage', included: true },
            { text: 'Phone and email support', included: true },
            { text: 'Help center access', included: true },
            { text: 'Custom features', included: true },
        ],
    },
]; 