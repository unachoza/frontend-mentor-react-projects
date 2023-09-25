import "./FormInput.css"

const FormInput = ({ id, name, placeholder, value, onChange, error }) => {
    return (
        <div className="text-input">
            <label for={name}>{name.toUpperCase()}</label>
            <input
                id={id}
                className={id}
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {/* <div className={error ? "error-message" : "no-error"}>anything</div> */}
            <div className="no-error">anything</div>
        </div>
    )
}

export default FormInput