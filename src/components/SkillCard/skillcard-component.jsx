import React, { PureComponent } from 'react';

import './skillcard-styles.css';
import Ellipsis from '../../assets/ellipsis-icon.svg';

export default class SkillCard extends PureComponent {
  render() {
    const { title, description } = this.props;
    return (
      <li key={title} className="c-skill-card">
        <div className="c-skill-card__toggle">
          <input type="radio"/>
        </div>
        <div className="c-skill-card__content">
          <div className="c-skill-card__title">
            { title }
          </div>
          <div className="c-skill-card__description">
            { description }
          </div>
        </div>
        <div className="c-skill-card__menu">
          <img src={Ellipsis} alt="Menu"/>
        </div>
      </li>
    );
  }
}
