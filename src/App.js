import './App.css';
import { useState } from 'react';
import FormInput from './Age-Calculator/components/FormInput/FormInput';
import InputResult from './Age-Calculator/components/InputResult/InputResult';

const App = () => {
  const [dayInput, setInputDay] = useState('');
  const [monthInput, setInputMonth] = useState('');
  const [yearInput, setInputYear] = useState('');
  const [dayResult, setResultDay] = useState('');
  const [monthResult, setResultMonth] = useState('');
  const [yearResult, setResultYear] = useState('');
  const [error, setError] = useState('');

  const errorMessages = {
    empty: "This field is required",
    day: "Must be a valid day",
    month: "Must be a valid month",
    year: "Must be in the past"
  }

  //add functions
  const checkDayInput = (dayInput) => {
    if (dayInput === "") return
    const regExDays = /\b(0?[1-9]|[12][0-9]|3[01])\b/g
    let error = regExDays.test(dayInput)
    const currentDay = new Date().getDate()
    let diff = currentDay - dayInput
    setResultDay(diff)
  }
  const checkMonthInput = monthInput => {
    const regExMonth = /\b(0?[1-9]|1[012])\b/g
    let error = regExMonth.test(monthInput)
    const currentMonth = new Date().getMonth() + 1
    const diff = currentMonth - monthInput
    setResultMonth(diff)
  }
  const checkYearInput = yearInput => {
    const currentYear = new Date().getFullYear()
    if (yearInput > currentYear) {
      console.log(yearInput, currentYear, 'that is the future')
      return setError(errorMessages.year)
    }
    const diff = currentYear - yearInput
    setResultYear(diff)
  }

  const validateFormInputs = (input) => {
    //if input is valid use input value
    //if input is invalid change styling to red
    // add error message
    console.log('valid')
  }
  const submitForm = (e) => {
    e.preventDefault()
    checkDayInput(dayInput)
    checkMonthInput(monthInput)
    checkYearInput(yearInput)
  }


  const calAge = (values) => {
    // const today = new Date()
    // const getDayDifference = (today, input) => difference
    // const getMonthDifference = (today, input) => difference
    // const getYearDifference = (today, input) => difference
    //substract input values from todays date

  }

  return (
    <div className="App">
      <body>
        <div class="container">
          <form className='parent'>
            <div className='div1'>
              <FormInput
                id="day"
                name="day"
                placeholder="DD"
                value={dayInput}
                onChange={e => setInputDay(e.target.value)}
                onFocus={() => checkDayInput(dayInput)}
                error
              />
            </div>
            <div className='div2'>
              <FormInput
                id="month"
                name="month"
                placeholder="MM"
                value={monthInput}
                onChange={e => setInputMonth(e.target.value)}
                onFocus={() => checkDayInput(monthInput)}
                error
              />
            </div>
            <div className='div3'>
              <FormInput
                id="year"
                name="year"
                placeholder="YYYY"
                value={yearInput}
                onChange={e => setInputYear(e.target.value)}
                onFocus={() => checkYearInput(yearInput)}
                error
              />
            </div>
            <div className='div4'>
              <button onClick={(e) => submitForm(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 44">
                  <g fill="none" stroke="#FFF" stroke-width="2.2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                  </g>
                </svg>
              </button>
            </div>
          </form>
          <hr />
          <div class="results-container">
            <InputResult result={yearResult} label="year" />
            <InputResult result={monthResult} label="month" />
            <InputResult result={dayResult} label="day" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
