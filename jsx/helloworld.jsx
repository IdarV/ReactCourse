

var MyComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <MyComponent text="Hello World">
            This is a hello.
        </MyComponent>
        <MyComponent text="How are you?">
            This is a how are you.
        </MyComponent>
        <MyComponent text="Goodbye">
            This is a goodbye.
        </MyComponent>
    </div>,
    document.getElementById('app')
);