import { Component } from 'react';

import { connect } from 'react-redux';

import { type TLanguage, type TFeedbacks } from 'types';
import { type AppDispatch, type RootState } from 'redux/store';
import { storeData } from 'redux/feedbacksSlice';

import Feedbacks from './Feedbacks';
import Pagination from './UI/Pagination';

import vocab from 'assets/vocab';

import feedbacksData from 'assets/data.json';

type Props = {
  feedbacks: TFeedbacks;
  storeFeedbacks: (feedbacks: TFeedbacks) => void;
  lang: TLanguage;
};

type State = {
  currentPage: number;
};

class Main extends Component<Props, State> {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.props.storeFeedbacks(feedbacksData);
  }

  handlePageChange = (page: number) => () => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { feedbacks, lang } = this.props;
    const { currentPage } = this.state;

    if (!feedbacks)
      return (
        <main>
          <h1 className='text-center'>{vocab[lang].loading_message}</h1>
        </main>
      );

    return (
      <main className='container mt-10'>
        <Feedbacks rowsPerPage={10} currentPage={currentPage} />
        <Pagination
          rowsPerPage={10}
          totalRows={Object.keys(feedbacks.en).length}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
          className='text-center mt-3'
        />
      </main>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    feedbacks: state.feedbacks.data,
    lang: state.languages.lang
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    storeFeedbacks: (feedbacks: TFeedbacks) => dispatch(storeData(feedbacks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
