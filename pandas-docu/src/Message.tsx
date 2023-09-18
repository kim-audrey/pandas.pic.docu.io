function Message(){

    // JSX: Javascript XML
    const name = "";

    // in the {}, you can put anything that returns something for us to use, like strings or a func!
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>HelloWorld</h1>;
}

export default Message;