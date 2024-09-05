import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const currentDateTime = new Date();
  const [count, setCount] = useState({
    hours: currentDateTime.getHours(),
    minutes: currentDateTime.getMinutes(),
    seconds: currentDateTime.getSeconds(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newCurrentDateTime = new Date();
      setCount({
        hours: newCurrentDateTime.getHours(),
        minutes: newCurrentDateTime.getMinutes(),
        seconds: newCurrentDateTime.getSeconds(),
      });
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  const twoNumbers = (number) => {
    return number.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  }
  
  return (
    <div className="App">
      <div className='TitleContainer'>
        <h1>Digital Clock</h1>
      </div>
      
      <div className="DigitalClockContainer">
        <div className='ClockContainer'>
          <div className='HoursContainer'>
            <div className='ClockText'>
              <h1>
              {twoNumbers(count.hours)}:
              </h1>
            </div>
          </div>
          <div className='MinutesContainer'>
            <div className='ClockText'>
              <h1>
              {twoNumbers(count.minutes)}:
              </h1>
            </div>
          </div>
          <div className='SecondsContainer'>
            <div className='ClockText'>
              <h1>
              {twoNumbers(count.seconds)}
              </h1>
            </div>
          </div>
          <div className='AMPMContainer'>
            <div className='ClockText'>
              <h1>
              {count.hours >= 12 ? 'PM' : 'AM'}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='AboutContainer'>
        <h1><span className='madeby'>made by:</span> <span className='link'><a href="https://github.com/coder-samurai" target="_blank">anas (samuraicoder)</a></span></h1>
      </div>
    </div>
  );
}

export default App;