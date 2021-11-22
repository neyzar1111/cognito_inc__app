import { StyledGrid } from '../styles';
import React, {useEffect, useState} from "react";
import {data} from "../Data/dictionary";
import  { DragEvent ,useRef} from 'react';
giimport {isNumber} from "util";
// import {workerData} from "worker_threads";

// let objWords = {
//     "1":'я',
//     "2":'ты',
//     "3":'он',
//     "4":'она',
//     "5":"они",
//     "6":"оно"
// }

let arrRussianWords: string[]  = ["я","ты", "он", "она" ,"они", "оно"];

let words = data[0].russian;
let englishWords = Object.keys(words).sort(() => (Math.random() > .5) ? 1 : -1);

const QuizDragCorrectAnswer: React.FC   = () => {
     const [showAnswer, setRightAnswer] = useState(0);

     let ref1 = useRef<HTMLDivElement>(null);
     let ref2 = useRef<HTMLDivElement>(null);
     let ref3 = useRef<HTMLDivElement>(null);
     let ref4 = useRef<HTMLDivElement>(null);
     let ref5 = useRef<HTMLDivElement>(null);
     let ref6 = useRef<HTMLDivElement>(null);

     function allowDrop(ev:DragEvent) {
         ev.preventDefault();
     }
     function drag(ev:DragEvent) {
         ev.dataTransfer.setData("text",ev.currentTarget.id);
     }

     function drop(ev: DragEvent) {
         ev.preventDefault();
         let data = ev.dataTransfer.getData("text");
         // @ts-ignore
         if(document.getElementById(data) && ev.nativeEvent.target.children.length === 0){
             let element: HTMLElement | null = document.getElementById(data);
             // @ts-ignore
             ev!.currentTarget!.appendChild(element);
         }
     }
     function checkResult(){
         let rightAnswer = 0;

         let answers : Array<boolean> = []
         if( ref1.current!.children.length === 1
             && ref1!.current!.children[0].innerHTML === arrEnglishWords[0]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
         if( ref2.current!.children.length === 1
             && ref2!.current!.children[0].innerHTML === arrEnglishWords[1]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
         if( ref3.current!.children.length === 1
             && ref3!.current!.children[0].innerHTML === arrEnglishWords[2]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
         if( ref4.current!.children.length === 1
             && ref4!.current!.children[0].innerHTML === arrEnglishWords[3]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
         if( ref5.current!.children.length === 1
             && ref5!.current!.children[0].innerHTML === arrEnglishWords[4]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
         if( ref6.current!.children.length === 1
             && ref6!.current!.children[0].innerHTML === arrEnglishWords[5]) {
             answers.push(true)
         } else{
             answers.push(false)
         }
        for(let i = 0; i < answers.length; i++){
            if(answers[i]){
                rightAnswer = rightAnswer + 1
            }
        }
         setRightAnswer(rightAnswer)
     }

    return(
        <>
        <StyledGrid>
            <li className="grid__item" >
                <div className="word__container">
                   {words.i}
                </div>
                <div className="word__container">
                    {words.you}
                </div>
                <div className="word__container">
                   {words.he}
                </div>
                <div className="word__container">
                     {words.she}
                </div>
                <div className="word__container">
                   {words.they}
                </div>
                <div className="word__container">
                   {words.it}
                </div>
            </li>
            <li className="grid__item" >
                <div className="word__container word_1_tocCheck" ref={ref1} onDrop={drop} onDragOver={allowDrop}/>
                <div className="word__container word_2_tocCheck" ref={ref2}  onDrop={drop} onDragOver={allowDrop}/>
                <div className="word__container word_3_tocCheck" ref={ref3}  onDrop={drop} onDragOver={allowDrop}/>
                <div className="word__container word_4_tocCheck" ref={ref4}  onDrop={drop} onDragOver={allowDrop}/>
                <div className="word__container word_5_tocCheck" ref={ref5}  onDrop={drop} onDragOver={allowDrop}/>
                <div className="word__container word_6_tocCheck" ref={ref6}  onDrop={drop} onDragOver={allowDrop}/>
            </li>
            <li className="grid__item" >
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_1"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[1]}
                    </div>
                </div>
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_2"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[2]}
                    </div>
                </div>
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_3"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[3]}
                    </div>
                </div>
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_4"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[4]}
                    </div>
                </div>
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_5"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[5]}
                    </div>
                </div>
                <div className="word__container">
                    <div
                        className=" word__draggable"
                        id="drag__word_6"
                        draggable="true"
                        onDragStart={drag}
                    >
                        {englishWords[0]}
                    </div>
                </div>
            </li>
        </StyledGrid>
            <div className="result__container show__result">
                {showAnswer + "/" + englishWords.length }
            </div>
            <button onClick={checkResult}>
                Ready
            </button>
    </>
    )
 }
export default QuizDragCorrectAnswer;
//_________________________________________________

// TODO:: make draggable items drag back
