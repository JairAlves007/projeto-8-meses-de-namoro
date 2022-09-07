import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../img/welldone.svg'

import "./GameOver.css";

const GameOver = () => {

	const [quizState, dispatch] = useContext(QuizContext);

	return(
    <div id="gameover">
      <h2>Fim de jogo, Amor!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas 🤓</p>
      <img src={WellDone} alt="Game Over Image" />
      <button onClick={() => dispatch({type: "RESTART_GAME"})}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
