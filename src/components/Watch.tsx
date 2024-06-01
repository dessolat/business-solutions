import { Component } from 'react';

type Props = {};

type State = {
  currentTime: Date;
};

export default class Watch extends Component<Props, State> {
  private timerID?: number;

  state = {
    currentTime: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      currentTime: new Date()
    });
  };

  render() {
    return <p className='text-2xl font-semibold'>{this.state.currentTime.toLocaleTimeString('ru-RU')}</p>;
  }
}
