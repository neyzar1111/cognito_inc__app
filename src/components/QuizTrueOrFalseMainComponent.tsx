import React,{useEffect,useState, useRef} from "react";
import StyledTwoBlocksInCenter from "../styles/StyledTwoBlocksInCenter";
import {arrEnglishWords, data} from "../Data/dictionary";


let arrRusMixed: string[] = [];

let russWordsObj = data[0].russian;
let arrEngMixed = arrEnglishWords.concat(arrEnglishWords).sort(() => (Math.random() > .5) ? 1 : -1);
let wrongWords: string[] = [];

for(let i = 0; i < 6; i++){
    wrongWords.push(arrEngMixed[Math.floor(Math.random()* arrEngMixed.length)]);
}
let errMixedEngArr =  arrEngMixed.map((el,i)=>{
    // @ts-ignore
    arrRusMixed.push(russWordsObj[el])
    if(wrongWords.indexOf(el) !== -1){
        return arrEngMixed[Math.floor(Math.random()* arrEngMixed.length)];
    } else{
        return el;
    }
})

let booleanAnswers = errMixedEngArr.map((el,i)=> (el === arrEngMixed[i]))

console.log(errMixedEngArr);
console.log(booleanAnswers);
console.log(arrRusMixed);


function QuizTrueOrFalseMainComponent(){
    const [click, setClick] = useState(0);
    const [timer, setTimer] = useState(60);
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState<boolean>();
    const time: any = useRef(null);
    const clear = () => {
        clearInterval(time.current);
    }

    useEffect(() => {
        time.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);


    useEffect(() => {
        if (timer === 0 || click === booleanAnswers.length) {
            clear()
        }
    }, [timer]);

    function clickTrueFunc (){
        setClick(click + 1)
        setQuestion(question + 1)
        if(booleanAnswers[click] && timer > 0){
            setAnswer(true)
        } else{
            setAnswer(false)
        }
    }
    function clickFalseFunc (){
        setClick(click + 1)
        setQuestion(question + 1)
        if(!booleanAnswers[click] && timer > 0){
            setAnswer(true)
        } else{
            setAnswer(false)
        }

    }

    return(
          <>
              {timer > 0 && click < arrEngMixed.length  ? (
                  <>
                      <StyledTwoBlocksInCenter answer={answer} >
                          <div className="timer">{timer}</div>

                          <li className="grid__item">
                              <div className="">{arrRusMixed[question]}</div>
                          </li>
                          <li className="grid__item">
                              <div>{errMixedEngArr[question]}</div>
                          </li>
                          <li>
                              <button  className="true-btn" onClick={clickTrueFunc}>
                                  True
                              </button>
                          </li>
                          <li>
                              <button className="false-btn" onClick={clickFalseFunc}>
                                  False
                              </button>
                          </li>
                      </StyledTwoBlocksInCenter>
                  </>
              ):(
                  <h1>Good Job!</h1>
              )}
          </>


    )
};
export default QuizTrueOrFalseMainComponent;