import './App.css';
import { useState } from 'react';
import { Observable } from 'rxjs';
import DisplayStopWatch from './component/display/DisplayStopWatch';
import ButtonStopWatch from './component/btn/ButtonStopWatch';

function App() {

  let [time, setTime] = useState({s:55, m:59, h:12});
  let [interval, setIntervall] = useState();
  let [status, setStatus] = useState(0); 

  const start = () => {
    setStatus(1);
    const stream$ = new Observable( observer => {
      observer.next(starting);
      setIntervall(setInterval( () => { observer.next(starting) }, 1000));
    });

    stream$.subscribe(
      () => starting()
    )
  };

  const stop = () => {
    clearInterval(interval);
    setTime({s: 0, m:0, h:0});
    setStatus(0);
  };

  const reset = () => {
    clearInterval(interval);
    setTime({s: 0, m:0, h:0});
    resetVariables();
    start();
  };

  const wait = () => {
    clearInterval(interval);
    setStatus(2);
  };

  const next = () => {
    start();
  };

  const starting = () => {
    time.s++;
    if(time.m === 60) {
      time.h++;
      time.m = 0;
    }
    if(time.s === 60) {
      time.m++;
      time.s = 0;
    }
    setTime({s: time.s, m: time.m, h: time.h});
  };

  const resetVariables = () => {
    if(time.s > 0){
      time.s = -1;
    }
    if(time.m > 0){
      time.m = 0;
    }
    if(time.h > 0){
      time.h = 0;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <DisplayStopWatch time = {time} />
        <ButtonStopWatch start = { start } stop = { stop } reset = { reset }
                         status = { status } wait = { wait } next = { next } />
      </header>
    </div>
  );
}

export default App;
