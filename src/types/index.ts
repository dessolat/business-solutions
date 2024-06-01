export type TLanguage = 'ru' | 'en';

export type TFeedback = { name: string; review: string; date: string };

export type TFeedbacks = Record<TLanguage, Record<string, TFeedback>> | null;
