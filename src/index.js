import './styles/main.css';
import { createElement } from './library'

const Header = (props) => (
	<div>
		<h3>Mello {props ? props.name : 'world'}</h3>
	</div>
)


const SayHello = (props) => (
	<div>
		<Header name="test"/>
		<p>I hope you're having a good day</p>
	</div>
)

/* <Component /> === Component() */
document.getElementById('root').appendChild(<SayHello name="foo" />)