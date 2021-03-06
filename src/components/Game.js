import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import PropTypes from 'prop-types';

const Game = (props) => {

  const [savedLines, addSavedLines] = useState([]);
  const [newLine, setNewLine] = useState('');
  const [player, setPlayer] = useState(1);
  const [poemCompletion, setPoemCompletion] = useState(false);

  const saveLine = (submittedLine) => {
    const newSavedLines = [...savedLines]
    const newestLine = Object.values(submittedLine).join(" ");

    newSavedLines.push(newestLine)//Add new line to poem

    setNewLine(newestLine);//makes new line out of submission
    addSavedLines(newSavedLines);//update poem with submission
    setPlayer(player + 1);
  };

  const isPoemFinished = (status) => {
    setPoemCompletion(status);
  };

  const resetPoem = () => {
    setNewLine('');
    addSavedLines([]);
    setPlayer(1);
    setPoemCompletion(false);
  }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {/* //REQ: Verify: The form to submit new lines is hidden */}
      {newLine !== '' && poemCompletion === false &&
        <RecentSubmission newLine={ newLine } />
      }

      {/* //REQ: Verify: The form to submit new lines is hidden */}
      {poemCompletion === false &&
      <PlayerSubmissionForm submitPlayerLine={saveLine} player={player}/>}

      <FinalPoem savedLines={savedLines} isPoemFinished={isPoemFinished}/>

      {/* <input type="button">Reset Game</input> */}
      <div className="ResetGame-btn-container" >
        <input type="button" value="Reset Game" className="ResetGame-btn" onClick={resetPoem}/>
      </div>

    </div>
  );
}


const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
