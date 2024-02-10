const FormElement = ({ id, label, type, value, handleChange, min }) => {
    if (type === "submit") {
        return (
            <>
                <input type={type} />
            </>
        )
    } else {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} value={value} onChange={handleChange} min={min} />
            </>
        )
    }
}

export default FormElement