/**
 * Created by Administrator on 2017/11/25.
 */
//main.js
// const greeter = require('./Greeter.js');
// console.log(222);
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'))
