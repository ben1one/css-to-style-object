import '../styles/index.scss';

console.log('webpack starterkit');


const cssToObject = require('css-to-object');



const replaceQuoteInKeys = (a) => a.replace(/"(\w+)"\s*:/g, '$1:');

const run = () =>{
    const style = cssToObject(document.getElementById('textarea').value, {
        camelCase: true,
        numbers: document.getElementById('numbers').checked
        });
        document.getElementById('pre').innerHTML = replaceQuoteInKeys(JSON.stringify(style, null, 2));

};

document.getElementById("textarea").addEventListener("change", function(){
    console.log('textarea changed');
    run();
});
document.getElementById("numbers").addEventListener("change", function(){
    console.log('numbers changed');
    run();
});

run();