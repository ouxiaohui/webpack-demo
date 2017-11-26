/**
 * Created by Administrator on 2017/11/25.
 */
// Greeter.js
// var config = require('./config.json');

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };

import config from './config.json';
import React, {Component} from 'react';

class Greeter extends Component{
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}
export default Greeter

