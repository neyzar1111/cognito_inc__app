import React from "react";
import {data} from "../Data/dictionary";
import SectionWrapper from "../components/SectionWrapper";
import QuizTrueOrFalseMainComponent from "../components/QuizTrueOrFalseMainComponent";


function QuizTrueOrFalse(){
    const words = data[0];
    return(
        <>
            <main>
                <SectionWrapper title="Quiz - true or false">
                    <QuizTrueOrFalseMainComponent/>
                </SectionWrapper>
            </main>
        </>
    )
}
export default QuizTrueOrFalse;
