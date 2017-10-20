import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export function capitalizeFirstLetter(string) {
  return (string) ? string.charAt(0).toUpperCase() + string.slice(1) : string;
}