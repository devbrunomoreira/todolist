import * as actionType from './actionType'

export const clickButton = value => ({
  type: actionType.CLICK_UPDATE_VALUE,
  newValue: value
});
