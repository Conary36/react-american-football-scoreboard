//TODO: STEP 1 - Import the useState hook.
import React, {useState, useRef, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
//import React, { useRef, useEffect} from 'react';


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  
  const touchDown = (e) => {
    console.log(e.target.className);
    if(e.target.className === 'homeButtons_touchdown'){
      setValue(value + 7);
    } else if(e.target.className === 'awayButtons_touchdown'){
      setValue2(value2 + 7);
    }
  };

  const fieldGoal = (e) => {
    console.log(e.target.className);
    if(e.target.className === 'homeButtons_fieldGoal'){
      setValue(value + 3);
    }else if (e.target.className === 'awayButtons_fieldGoal'){
      setValue2(value2 + 3);
    }
  
  };

  const Timer = () => {
      const [seconds, setSeconds] = useState(0);
      const [isActive, setIsActive] = useState(false);

      function toggle() {
        setIsActive(!isActive);
      }

      function reset() {
        setSeconds(0);
        setIsActive(false);
      }

      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
    };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{value}</div>
          </div>
<div className="timer">{Timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{value2}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchDown}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldGoal}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={touchDown}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fieldGoal}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
