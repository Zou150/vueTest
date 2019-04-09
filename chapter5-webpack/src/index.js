// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';
// import Icon from './icon.jpg';
// import Data from './data.xml';
import { cube } from './math.js';

function component() {
// var element = document.createElement('div');
// var btn = document.createElement('button');
var element = document.createElement('pre');

// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// element.classList.add('hello');
element.innerHTML = [
  'Hello webpack!',
  '5 cubed is equal to ' + cube(5)
].join('\n\n');

// btn.innerHTML = 'Click me and check the console!';
// btn.onclick = printMe;

// element.appendChild(btn);
// //添加图像
// var myIcon = new Image();
// myIcon.src = Icon;

// element.appendChild(myIcon);

// console.log(Data);

return element;
}

document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }


// function getComponent() {
//   return import( /* webpackChunkName: "lodash" */ 'lodash').then(({
//     default: _
//   }) => {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;

//   }).catch(error => 'An error occurred while loading the component');
// }


// getComponent().then(component => {
//   document.body.appendChild(component);
// })