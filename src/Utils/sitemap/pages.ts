export const SITE_PAGES = {
    home: ()=>`/`,
    about: ()=>`/about`,
    contact: ()=>`/contact`,
    feedback: ()=>`/feedback`,
} as const;

export type SITE_PAGE = keyof typeof SITE_PAGES