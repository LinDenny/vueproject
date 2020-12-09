import tuzi from './assets/imgs/common/tuzi.gif';
import { square } from './utils/index';
import  _ from 'lodash';
import './assets/css/common.css';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello webpack' + square(3);
  element.classList.add('hello');
  var img = document.createElement('img');
  img.src = tuzi;
  element.appendChild(img);
  console.log(_.join(['你', '好'], 'webpack'));
  return element;
}

document.body.appendChild(component());