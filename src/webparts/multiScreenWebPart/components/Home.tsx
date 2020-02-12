import React, { Component } from 'react';
import ReactGetItems from './ReactGetItems';

const questionsMap = [0, 1, 2, 3];

export class Home extends React.Component<{},{}> {
    constructor (props) {
        super (props);
        this.state = {
            questions: ['question1', 'question2', 'question3', 'question4'],
            answers: ['answers1', 'answers2', 'answers3', 'answers4']
        }
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(value) {
        /* Some code for when buttons are clicked */
    }

    public render (): React.ReactElement<{}> {
        return (
            <div>
              {ReactGetItems}
            </div>
        );
    }
}


/*export class Home extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
      return (
        <div>
          <h2>Home Screen</h2>
        </div>
      );
    }
  }*/

  