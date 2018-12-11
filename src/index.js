import _ from 'lodash';
import {hoge} from './hoge';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', hoge()], ' ');
  return element;
}

document.body.appendChild(component());