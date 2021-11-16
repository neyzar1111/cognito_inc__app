import React from "react";
import GridTemplate from "../components/QuizDragCorrectAnswer";
import {data} from "../Data/dictionary";
import SectionWrapper from "../components/SectionWrapper";
import QuizDragCorrectAnswer from "../components/QuizDragCorrectAnswer";

function QuizDragAnAnswer(){
    const words = data[0];
    return(
        <>
            <main>
                <SectionWrapper title="Quiz - drag the correct answer">
                    <QuizDragCorrectAnswer/>
                </SectionWrapper>
            </main>
        </>
    )
}
export default QuizDragAnAnswer;

