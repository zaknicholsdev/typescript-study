// DOM
const bool = (b) => b;
const myBool = bool(false);
const greeter = (person) => {
    return `Hello ${person}!`;
};
const greet = greeter('Zak');
document.body.textContent = greet;
;
const sayHello = ({ firstName, lastName }) => `Hello ${firstName} ${lastName}`;
sayHello({ firstName: 'Jack', lastName: 'William' });
const app = document.createElement("div");
app.setAttribute('id', 'app');
const p = document.createElement('p');
p.setAttribute('class', 'woo');
app?.appendChild(p);
p.textContent = 'Hello world!';
document.body.appendChild(app);
const test = document.getElementById('app');
console.log('test', test);
const q = document.querySelector('.woo');
console.log(q);
