import { HIDE_IMG, HIDE_SLIDER, RESET_ROUND } from "./types";

export const hideImage = (imgChoice) => dispatch => {
    
  dispatch({
      type: HIDE_IMG,
      payload: imgChoice
  })
}
export const hideSlider = () => dispatch => {
    
  dispatch({
      type: HIDE_SLIDER,
  })
}
export const resetRound = () => dispatch => {
    
  dispatch({
      type: RESET_ROUND
  })
}