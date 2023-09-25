import './App.css';
import FormInput from './Age-Calculator/components/FormInput/FormInput';
import InputResult from './Age-Calculator/components/InputResult/InputResult';
import SubmitButton from './Age-Calculator/assets/icon-arrow.svg'

const App = () => {

  const errorMessages = {
    empty: "This field is required",
    day: "Must be a valid day",
    month: "Must be a valid month",
    year: "Must be in the past"
  }
  //add functions

  const validateFormInputs = (input) => {
    //if input is valid use input value
    //if input is invalid change styling to red
    // add error message
    console.log('valid')
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
                id="day" name="day" placeholder="DD" value="" onChange="" error
              />
            </div>
            <div className='div2'>
              <FormInput
                id="month" name="month" placeholder="MM" value="" onChange="" error
              />
            </div>
            <div className='div3'>
              <FormInput
                id="year" name="year" placeholder="YYYY" value="" onChange="" error
              />
            </div>
            <div className='div4'>
              <button>
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
            <InputResult label="year" />
            <InputResult label="month" />
            <InputResult label="day" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
