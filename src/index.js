import { render } from '../runtime/jsx-runtime';
import './styles/main.css';

const Header = (props) => (
	<div>
		<h3 onclick="doSomething()">Mello {props ? props.name : 'world'}</h3>
	</div>
)
function doSomething(){alert("hi")}

const SayHello = (props) => (
	<div>
		<Header name={props.name} />
		<p>text in div</p>
	</div>
)

render(<SayHello name="foo" />, document.getElementById('root'));

//document.getElementById('root').appendChild(<SayHello name="foo" />)