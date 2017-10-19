import { createBrowserHistory } from 'history';

export default createBrowserHistory({});

export function capitalizeFirstLetter(string) {
  return (string) ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}