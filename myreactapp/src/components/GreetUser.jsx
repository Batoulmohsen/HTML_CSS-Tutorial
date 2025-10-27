function GreetUser() {
    const greet = (name) => {
        alert(`Hello, ${name}!`);

    };
    return (
        <div id= "greetUserContainer">
            <button id="greetJohnButton" onClick={()=>greet("bunty") }>
                Greet Bunty
            </button>
            <button id="greetPankajButton" onClick={()=>greet("pankaj")}>
                Greet Pankaj
            </button>
        </div>
    )
}
export default GreetUser;
