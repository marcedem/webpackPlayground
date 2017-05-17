// import sum from './sum';
// import './image_viewer';

//const sum = require('./sum');
//const total = sum(10, 5);
//console.log(total);

const button = document.createElement('button');

button.innerText = 'Click me';

button.onclick = () => {
    System.import('./image_viewer') // System.import is a special function that is part of ES6 module specs, fetch the module that need to be imported
        .then(module => {
            console.log(module);
            // after module is loaded, load content from our imported file.
            module.default();
        });
};

document.body.appendChild(button);