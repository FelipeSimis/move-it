import Router from 'next/router';
import NProgress from 'nprogress';

let timer: NodeJS.Timeout;
let state: string;
let activeRequests = 0;

const delay = 400;

function load() {
  if (state === 'loading') {
    return;
  }

  state = 'loading';

  timer = setTimeout(() => {
    NProgress.start();
  }, delay);
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = 'stop';

  clearTimeout(timer);
  NProgress.done();
}

Router.events.on('routeChangeStart', load);
Router.events.on('routeChangeComplete', stop);
Router.events.on('routeChangeError', stop);

const originalFetch = window.fetch;

window.fetch = async (...args) => {
  if (activeRequests === 0) {
    load();
  }

  activeRequests += 1;

  try {
    const response = await originalFetch(...args);

    return response;
  } catch (error) {
    return Promise.reject(error);
  } finally {
    activeRequests -= 1;

    if (activeRequests === 0) {
      stop();
    }
  }
};

const TopProgressBar = (): null => null;

export default TopProgressBar;
