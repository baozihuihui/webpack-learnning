// ./src/heading.js

import './index.css';

export default () => {

    const element = document.createElement('h2')
  
    element.textContent = 'Hello webpack'
  
    element.addEventListener('click', () => alert('Hello webpack'))

    console.log('App statrs running~')
  
    return element
  
  }
  