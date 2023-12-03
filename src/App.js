import './App.css';
import * as React from 'react'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import MainPage from "./pages/MainPage.js"
import StatisticsPage from "./pages/StatisticsPage"
import SessionPage from "./pages/SessionPage"
import ExerciseSearchPage from "./pages/ExerciseSearchPage.js"
import ExerciseStatisticsPage from "./pages/ExerciseStatisticsPage.js"

function App() {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/exerciseStatistics" element={<ExerciseStatisticsPage />} />
          <Route path="/session/true" element={<SessionPage editting={true} />} />
          <Route path="/session/false" element={<SessionPage editting={false} />} />
          <Route path="/exerciseSearch" element={<ExerciseSearchPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
