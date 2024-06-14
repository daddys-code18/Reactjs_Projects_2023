import "./Button.css"
const Button = (props) => {
    return (
        <button className="primary-btn">
             {props.icons}{props.text}
        </button>
    )
}

export default Button
