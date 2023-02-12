import "./Button.css";
import { ButtonThemeContext } from "../../App";
import { useContext } from "react";

const Button = ({ children, btnOnClick }) => {
    const defaultInnerText = children ? children : "Bottone Default";

    const theme = useContext(ButtonThemeContext);
    let themeClass = "btn-primary";

    if (theme === "dark") {
        themeClass = "btn-dark";
    } else if (theme === "light") {
        themeClass = "btn-light";
    }

    const defaultClasses = `myButton btn btn-default ${themeClass}`;

    return <button onClick={btnOnClick} className={defaultClasses}>{defaultInnerText}</button>;
}

export default Button;