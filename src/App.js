import React from 'react'
import CardSlider from './CardSlider'

const words = [
  {
    id: 1,
    word: "Paraphase",
    answer: "to describe someghing using different expressions"
  },{
    id: 2,
    word: "Illicit",
    answer: "illegal"
  },{
    id: 3,
    word: "Underdog",
    answer: "loser"
  },
]

function App() {
  return (
    <div className="App">
      <CardSlider words={words} />
    </div>
  );
}

export default App;
