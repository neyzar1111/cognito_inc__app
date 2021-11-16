import { StyledGrid } from '../styles';
import React from "react";
import {data} from "../Data/dictionary";

enum wordTypes {
    i = 'я',
    you = 'ты',
    he = 'он',
    she = 'она',
    they = 'они',
    it = 'оно'
}

 const QuizDragCorrectAnswer: React.FC   = () => {
     let words = data[0].russian;
     let englishWords = Object.keys(words).sort(() => (Math.random() > .5) ? 1 : -1);

    return(
        <>
        <StyledGrid>
            <li className="grid__item" >
                <div className="word__container">{words.i}</div>
                <div className="word__container">{words.you}</div>
                <div className="word__container">{words.he}</div>
                <div className="word__container">{words.she}</div>
                <div className="word__container">{words.they}</div>
                <div className="word__container">{words.it}</div>
            </li>
            <li className="grid__item" >
                <div className="word__container">{}</div>
                <div className="word__container"></div>
                <div className="word__container"></div>
                <div className="word__container"></div>
                <div className="word__container"></div>
                <div className="word__container"></div>
            </li>
            <li className="grid__item" >
                <div className="word__container">{englishWords[1]}</div>
                <div className="word__container">{englishWords[2]}</div>
                <div className="word__container">{englishWords[3]}</div>
                <div className="word__container">{englishWords[4]}</div>
                <div className="word__container">{englishWords[5]}</div>
                <div className="word__container">{englishWords[0]}</div>
            </li>
        </StyledGrid>
    </>
    )
 };
export default QuizDragCorrectAnswer;
//TODO:: what is enum and use it on project
