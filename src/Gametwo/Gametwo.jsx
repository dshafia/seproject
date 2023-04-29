import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { LETTERS, WORDLETS, WORDS } from './data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './utils';

import Dropzone from './Dropzone';
import Header from './Header';
import Modal from './Modal';

const GAME_DURATION = 1000 * 30; // 30 seconds

const lettersList = ['M', 'A', 'E', 'P', 'L', 'F', 'O'];

const initialState = {
  bench: shuffle(LETTERS),
  [WORDS.WORDS]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0,
};

class Gametwo extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        bench: shuffle(shuffle(WORDLETS)[0]),
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  Letters = (letter) => {
    return (
      <div className="letter">
        {letter.letter}
      </div>
    )
  }

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, bench, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

    return (
      <>
        <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
        {this.state.gameState !== GAME_STATE.PLAYING && (
          <Modal
            startGame={this.startGame}
            resetGame={this.resetGame}
            timeLeft={timeLeft}
            gameState={gameState}
            groups={groups}
          />
        )}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="container">
            <div className="rows">
              <Dropzone id="bench" letters={bench} isDropDisabled={isDropDisabled} />
              <Dropzone
                id={WORDS.WORDS}
                letters={this.state[WORDS.WORDS]}
                isDropDisabled={isDropDisabled}
              />
            </div>
          </div>
        </DragDropContext>
      </>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default Gametwo;
