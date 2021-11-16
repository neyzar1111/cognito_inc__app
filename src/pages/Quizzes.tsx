import React from "react";
import  {Link} from "react-router-dom";

function Quizzes(){

    return(
        <>
           <div>
               here should be a lots of quizzes to choose from
           </div>
            <Link to={"/quizDragAnAnswer"}>Play QuizDragAnAnswer</Link>
        </>
    )
};
export default Quizzes;