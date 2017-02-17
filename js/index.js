nw.Window.get().showDevTools();

const React = require('react');
const ReactDOM = require('react-dom');

let Button = require('react-bootstrap/lib').Button;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<Button bsStyle="primary">Primary</Button>
			</div>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);