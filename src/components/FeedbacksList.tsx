import { Component } from 'react';

import { getFormattedName } from 'utils';

import { type TFeedback } from 'types';

type Props = {
  feedbacks: [string, TFeedback][];
};

export default class FeedbacksList extends Component<Props> {
  render() {
    const { feedbacks } = this.props;

    return (
      <>
        {feedbacks.map(([key, { name, review, date }]) => {
          return (
            <div
              key={key}
              className='flex justify-between [&>p]:p-4 [&>p+p]:border-l [&>p+p]:border-indigo-400 [&+&]:border-t border-indigo-400'>
              <p className='w-48 flex-none flex items-center'>{getFormattedName(name)}</p>
              <p className='flex-grow'>{review}</p>
              <p className='w-32 flex-none flex items-center text-center'>{date}</p>
            </div>
          );
        })}
      </>
    );
  }
}
