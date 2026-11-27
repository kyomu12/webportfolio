type ExperienceItem = {
    from: string;
    to: string;
    company: string;
    role: string;
    description: string;
    stack?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
    {
        from: '2024',
        to: '2026',
        company: 'Агентство веб-разработки',
        role: 'Frontend-разработчик',
        description:
            'Платформа для теннисных клубов «Чемпион» и Gorin Tennis: четыре приложения на общем GraphQL-API, от админки до клиентского и методических модулей.',
        stack: 'TypeScript · React · Next.js · GraphQL',
    },
    {
        from: '2026',
        to: 'сейчас',
        company: 'Свои проекты',
        role: 'Fullstack-разработчик',
        description:
            'Flowsy — SaaS-платформа для бизнеса, интернет-магазин errorBrand на её API, мобильное приложение и другие проекты в разработке (Хватка, Cofeo, streamer-web).',
        stack: 'Next.js · PostgreSQL · Drizzle · better-auth',
    },
];
