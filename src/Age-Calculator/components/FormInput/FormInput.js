import "./FormInput.css"

const FormInput = ({ id, name, placeholder, value, onChange, onFocus, error }) => {
    return (
        <div className="text-input">
            <label for={name}>{name.toUpperCase()}</label>
            <input
                id={id}
                className={error.length > 1 ? "error" : ""}
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            // onFocus={onFocus}
            />
            <div className={error.length > 1 ? "error-message" : "no-error"}>{error}</div>
            <div className="no-error">anything</div>
        </div>
    )
}

export default FormInput