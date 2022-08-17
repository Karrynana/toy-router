import Router from '../lib/Router';

const router = new Router([
  { path: '/', component: '<h1>Home</h1>' },
  { path: '/about', component: '<h1>About</h1>' },
  { path: '*', component: '<h1>Not Found</h1>' },
]);

const navWithElementA = document.createElement('nav');
navWithElementA.innerHTML = `
  <a href="#/">Home</a>
  <a href="#/about">About</a>
`;

const homeButton = document.createElement('button');
homeButton.innerHTML = 'Home';
homeButton.addEventListener('click', () => {
  router.push('/');
});
const aboutButton = document.createElement('button');
aboutButton.innerHTML = 'About';
aboutButton.addEventListener('click', () => {
  router.push('/about');
});

const navWithElementButton = document.createElement('nav');
navWithElementButton.appendChild(homeButton);
navWithElementButton.appendChild(aboutButton);

const app = document.querySelector('#app')!;
app.appendChild(navWithElementA);
app.appendChild(navWithElementButton);
app.appendChild(router.routerView);
