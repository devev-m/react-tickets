import { SET_CHECKBOX, SET_CURRENCY } from './constants';

export function setCurrency(currency) {
  return { type: SET_CURRENCY, payload: currency };
}

export function setCheckbox(checkbox) {
  return { type: SET_CHECKBOX, payload: checkbox };
}
