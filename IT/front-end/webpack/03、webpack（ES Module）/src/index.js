// import avatar from './avatar.jpg';
// import styles from './index.scss';
// import CreateAvatar from './createAvatar';
// import './style.css';

// var img = new Image();
// img.src = avatar;
// img.classList.add(styles.avatar);

// var root = document.getElementById('root');
// root.append(img);

// CreateAvatar();

// console.log('hello world 12212321312');

// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function () {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }

// import counter from './counter';
// import number from './number';

// counter();
// number();

// if (module.hot) {
// 	module.hot.accept('./number', () => {
// 		document.body.removeChild(document.getElementById('number'));
// 		number();
// 	});
// }


// const arr = [
// 	new Promise(() => {}),
// 	new Promise(() => {}),
// ];

// arr.map(item => {
// 	console.log(item);
// });

// import React, { Component } from 'react';
// import ReactDom	from 'react-dom';

// class App extends Component {
// 	render() {
// 		return <div>Hello World</div>
// 	}
// }

// ReactDom.render(<App />, document.getElementById('root'));

import { add } from './math';

add(1, 2);