import React from "react";
import StyledTwoBlocksInCenter from "../styles/StyledTwoBlocksInCenter";
import {data, arrEnglishWords,arrRussianWords} from "../Data/dictionary";

let russWordsObj = data[0].russian;
let engWordsArr = Object.keys(russWordsObj);
const words = data[0];
console.log(russWordsObj)


function QuizTrueOrFalseMainComponent(){
    let answers :boolean[] = [];
    let randomWordsEng :Array<string> = engWordsArr.sort(() => (Math.random() > .5) ? 1 : -1);
    let longerRandomWordsEng :Array<string> = randomWordsEng.concat(randomWordsEng);
    let russWordsLikeLongerRandomWordsEng:string[] = [];
    let randomNums: number[] = [];
    let falseRandomWords: string[] =[];
    for(let i = 0; i < longerRandomWordsEng.length /2; i++){
        randomNums.push(Math.floor(Math.random() *  longerRandomWordsEng.length));
    }
    for(let i = 0 ; i < engWordsArr.length; i++){
        falseRandomWords.push(engWordsArr[Math.floor(Math.random() *  engWordsArr.length)]);
    }
    // @ts-ignore
    randomNums = randomNums.sort((a,b)=> (a - b));

    let copyOfRandomWords = [...longerRandomWordsEng];

    for(let i = 0; i < longerRandomWordsEng.length; i++) {
        // @ts-ignore
        russWordsLikeLongerRandomWordsEng.push(russWordsObj[longerRandomWordsEng[i]]);
            if(i === Math.floor(Math.random() *  longerRandomWordsEng.length) && i < longerRandomWordsEng.length/2){
                longerRandomWordsEng[i] = falseRandomWords.pop() as string;
            }
    }
    longerRandomWordsEng.map((el, i)=>{
        // @ts-ignore
        russWordsLikeLongerRandomWordsEng.push(russWordsObj[longerRandomWordsEng[i]]);
        if(i === Math.floor(Math.random() *  longerRandomWordsEng.length) && i < longerRandomWordsEng.length/2){
            longerRandomWordsEng[i] = falseRandomWords.pop() as string;
            console.log("yeaa")
        }
    })
    for(let i = 0; i< 10; i++){
        console.log(i)
        for(let k = 0; k < 3; k++){
            console.log("k",k)
        }
    }

    console.log(russWordsLikeLongerRandomWordsEng)
    console.log(longerRandomWordsEng)
    console.log(copyOfRandomWords)
    console.log(falseRandomWords)
    console.log(randomNums)









    // for(let i = 0; i < evenWordsLength*2; i++){
    //     // @ts-ignore
    //     if(randomWordsRuss[i]=== russWordsObj[randomWordsEng[i]]){
    //         console.log(true)
    //         answers.push(true);
    //     }
    //     else{
    //         console.log(false)
    //         answers.push(false);
    //     }
    // }






    return(
        <>
            <StyledTwoBlocksInCenter>
                <li className="grid__item" >
                    <div className="">Russian Word</div>
                </li>
                <li className="grid__item" >
                    <div>English Word</div>
                </li>
               <li>
                   <button>
                       True
                   </button>
               </li>
                <li>
                    <button>
                        False
                    </button>
                </li>

            </StyledTwoBlocksInCenter>
        </>
    )
}
export default QuizTrueOrFalseMainComponent;