import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Header from './Header.jsx';
import Todo from './Todo.jsx';
import Footer from './Footer.jsx'
import st from './App.css';

const style = {
	width: 400,
	marginTop: 50,
    margin: '20 auto',
    textAlign: 'center',
    display: 'inline-block',
};

const mainStyle = {
    margin: '20 auto',
    textAlign: 'center',
	position: 'center'
};

export default class App extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<main style={mainStyle}>
				<Paper style={style} zDepth={5}>
					<Header title ="React TODO"/>

					<sectin className="todo-list">
						<Todo title="Сломать олега" completed={false}/>
					</sectin>

					<Footer textSize={40}/>
				</Paper>
			</main>

		)
	}

}
