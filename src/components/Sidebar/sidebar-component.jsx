import React, { Component } from 'react';

import './sidebar-styles.css';
import SkillCard from "../SkillCard/skillcard-component";

export default class Sidebar extends Component {
  state = {
    skills: [
      {
        title: 'Creating a middleware in NodeJS',
        description: 'Not target has been configured'
      },
      {
        title: 'Configure an express route',
        description: 'Not target has been configured'
      },
      {
        title: 'Writing a router handler in express',
        description: 'Not target has been configured'
      },
      {
        title: 'Parsing a request response in express',
        description: 'Not target has been configured'
      },
      {
        title: 'Returning a response in express',
        description: 'Not target has been configured'
      },
      {
        title: 'Using exceptions in NodeJS',
        description: 'Not target has been configured'
      },
      {
        title: 'Working with sequelize migrations',
        description: 'Not target has been configured'
      },
      {
        title: 'Working with sequelize seeders',
        description: 'Not target has been configured'
      },
      {
        title: 'Writing a router handler in express',
        description: 'Not target has been configured'
      },
      {
        title: 'Parsing a request response in express',
        description: 'Not target has been configured'
      },
      {
        title: 'Returning a response in express',
        description: 'Not target has been configured'
      }
    ]
  };

  render() {
    const { skills } = this.state;
    return (
      <div className="c-sidebar">
        <div className="c-sidebar__header">
          <div className="c-sidebar__title">
            Available skills
          </div>
          <div className="c-sidebar__sub-title">
            Select one to capture on the provided code snippet
          </div>
        </div>

        <ul className="c-skill-list">
          {
            skills.map(skill => (
              <SkillCard
                {...skill}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}
