const Button = (promps) => {
    return <button type="button" onClick={() => alert(`io sono il button ${promps.label}`)}>{promps.label}</button>
}

export default Button;

