import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from "../img/welldone.svg"

import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)


    return (
        <div id="gameover">
            <h2>End Game</h2>
            <p>Score: {quizState.score}</p>
            <p>You got {quizState.score} out of {quizState.questions.length}{" "} questions correct</p>
            <img src={WellDone} alt="End quiz" />
            <button onClick={()=>dispatch({type:"NEW_GAME"})}>Restart</button>
        </div>
    )
}

export default GameOver