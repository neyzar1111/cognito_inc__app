import React from 'react';
import './App.css';
import Quizzes from "./pages/Quizzes";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import QuizDragAnAnswer from "./pages/QuizDragAnAnswer";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Router>
            <Routes>
                <Route path='/' element={<Quizzes/>} />
                <Route path='/quizDragAnAnswer' element={<QuizDragAnAnswer/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
