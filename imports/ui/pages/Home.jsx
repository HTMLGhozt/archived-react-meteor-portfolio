import React from 'react';
import { func, string } from 'prop-types';

import styles from '../styles/clock.css';

export default class Home extends React.Component {
  static propTypes = {
    setBackgroundColor: func.isRequired,
    backgroundColor: string.isRequired,
  }

  componentDidMount() {
    this.interval = setInterval(this.setDateToColor, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setDateToColor = () => {
    const { setBackgroundColor } = this.props;

    const date = new Date();
    const hours = this.checkTime(date.getHours());
    const minutes = this.checkTime(date.getMinutes());
    const seconds = this.checkTime(date.getSeconds());

    setBackgroundColor(`#${hours + minutes + seconds}`);
  }

  checkTime = (time) => {
    if (time < 10) {
      return `0${time}`;
    }
    return time.toString();
  }

  render() {
    const { backgroundColor } = this.props;
    return (
      <span className={styles.clock}>{backgroundColor}</span>
    );
  }
}
