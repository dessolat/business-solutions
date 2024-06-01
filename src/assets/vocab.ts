import { type TLanguage } from 'types';

type TLangEntries = {
  loading_message: string;
  feedbacks_header: string;
  feedbacks_table_fields: {
    name: string;
    feedback: string;
    date: string;
  };
};

type TVocab = Record<TLanguage, TLangEntries>;

const vocab: TVocab = {
  en: {
    loading_message: 'Loading...',
    feedbacks_header: 'Сlients feedbacks',
    feedbacks_table_fields: {
      name: 'Name',
      feedback: 'Feedback',
      date: 'Date'
    }
  },
  ru: {
    loading_message: 'Загрузка...',
    feedbacks_header: 'Отзывы клиентов',
    feedbacks_table_fields: {
      name: 'Имя',
      feedback: 'Отзыв',
      date: 'Дата'
    }
  }
};

export default vocab;
