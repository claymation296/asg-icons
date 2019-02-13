
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import htmlString from './asg-icons.html';

const asgIcons     = document.createElement('div');
asgIcons.innerHTML = htmlString;
asgIcons.setAttribute('style', 'display: none;');
document.head.appendChild(asgIcons);
