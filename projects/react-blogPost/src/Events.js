const Events = () => {

    function handleClick() {
        console.log("Button-1 Clicked");
    }

    function greetWithName(name) {
        console.log("Hello, "+name);  //it will print the values by itself since the parameters are passed inside the function
    };

    function wrapperFunction() {
        greetWithName("Shivi Agarwal");
    };

    function handleClickWithEvent(event, name) {
        console.log(event);
        console.log("Hello, ", name);
    }

    function handleClickWithEventAndName(event) {
        console.log(event);
        handleClickWithEvent(event, "Shivi Agarwal");
    };

    return ( 
        <section>
            <h2>This is a section</h2>
            {/* <button onClick={greetWithName("Shivi Agarwal")}>button-1</button> */}
            <br />
            <button onClick={wrapperFunction} className="wrap">Wrapper Button </button>
            <button onClick={handleClickWithEvent} className="wrap">Event button </button>
            <button onClick={handleClickWithEventAndName} className="wrap">Event name </button>
        </section>
     );
}
 
export default Events;