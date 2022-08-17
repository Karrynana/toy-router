export interface Route {
  path: string;
  component: string;
}

export default class Router {
  public readonly routes: Route[] = [];

  public readonly routerView = document.createElement('div');

  constructor(routes: Route[]) {
    this.routes = routes;
    this.push('/');
    this.changeView('/');
    this.starListen();
  }

  public push(path: string) {
    window.location.hash = path;
  }

  private starListen() {
    window.addEventListener('hashchange', () => {
      this.changeView(window.location.hash.slice(1));
    });
  }

  private changeView(path: string) {
    const target =
      this.routes.find((route) => route.path === path) ||
      this.routes.find((route) => route.path === '*');

    if (!target) {
      throw new Error(`Router: No matching route for ${path}`);
    }

    if (target) {
      this.routerView.innerHTML = target.component;
    }
  }
}
