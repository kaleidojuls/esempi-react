const PersonalisedText = ({ personalizzata, children }) => {
    const innerText = personalizzata ? children + personalizzata : children;
    return <p>{innerText}</p>
}

export default PersonalisedText;