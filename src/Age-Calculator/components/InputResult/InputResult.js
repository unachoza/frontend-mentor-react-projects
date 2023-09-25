import "./InputResult.css"

const InputResult = ({ result, label }) => {
    return (
        <div className="input-result">
            <div className="day-result">{result === "" ? "--" : result}</div>
            {label}
        </div >
    )
}

export default InputResult