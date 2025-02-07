function greet(name) {
        return 'Hello ' + name;
}
    console.log(greet('JavaScript'));

const greet = function(name) {
    return 'Hello ' + name;
};
console.log(greet('MERN'));

const greet = (name) => {
    return 'Hello ' + name;
}
console.log(greet('React'));
console.log(greet('Node.js'));

(function() {
    console.log('Hello FSD');
})();
    
const greetfun = (name) => {

    console.log('Hello ' + name); 
}
function processname(callback) {
    const name="FSD";
    callback(name);
}
processname(greetfun);
