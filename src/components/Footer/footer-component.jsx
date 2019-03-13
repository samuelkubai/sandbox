import React, { Component } from 'react';

import './footer-styles.css';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="c-footer">
        <div className="c-footer__message">
          Captured <span className="text-highlight">5</span> occurrences of the skill
        </div>

        <div className="c-footer__navigation">
          <img src={ArrowLeft} alt="Back"/>

          <div className="c-footer__counter">
            10 / 25
          </div>

          <img src={ArrowRight} alt={"Next"}/>
        </div>
      </div>
    );
  }
}
