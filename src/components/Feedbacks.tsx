import { Component } from 'react';

import { connect } from 'react-redux';

import { type RootState } from 'redux/store';
import { type TLanguage, type TFeedbacks } from 'types';

import vocab from 'assets/vocab';

import FeedbacksList from './FeedbacksList';

type Props = {
  feedbacks: TFeedbacks;
  lang: TLanguage;
  rowsPerPage: number;
  currentPage: number;
};

class Feedbacks extends Component<Props> {
  render() {
    const { lang, feedbacks, rowsPerPage, currentPage } = this.props;

    const filteredFeedbacks = Object.entries(feedbacks![lang]).slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );

    return (
      <>
        <h1 className='text-2xl font-bold text-center'>{vocab[lang].feedbacks_header}</h1>
        <div className='mt-5 flex justify-between border-b font-bold border-indigo-400 [&>p]:p-4 [&>p]:text-center [&>p+p]:border-l [&>p+p]:border-indigo-400'>
          <p className='w-48'>{vocab[lang].feedbacks_table_fields.name}</p>
          <p className='flex-grow'>{vocab[lang].feedbacks_table_fields.feedback}</p>
          <p className='w-32'>{vocab[lang].feedbacks_table_fields.date}</p>
        </div>
        <FeedbacksList feedbacks={filteredFeedbacks} />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    feedbacks: state.feedbacks.data,
    lang: state.languages.lang
  };
};

export default connect(mapStateToProps)(Feedbacks);
