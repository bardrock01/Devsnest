const helloWorld = () => {
    return React.createElement("h1", {}, 'HELLO World');

}
ReactDOM.render(React.createElement(helloWorld), document.getElementById('root'));