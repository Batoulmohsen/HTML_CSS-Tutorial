function ClickButton() {
    const handleClick = () => {
        alert ('Button clicked!');

    };
    return(
    <div id="ClickButtonContainer">
        <button id= "ClickButton" onClick={handleClick}> Click Me!</button>
    </div>
    );
}

export default ClickButton;