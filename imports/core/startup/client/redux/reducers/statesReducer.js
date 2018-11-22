import { HIDE_IMG, HIDE_SLIDER, RESET_ROUND } from "../actions/types";

const initailState = {
    step: "chooseSource",
    showLeft: true,
    showRight: true,
    showLeftAdvice: false,
    showRightAdvice: false,
    showQuestion: true,
    showSlider: true,
    selectedImg: null
}

export default function (state = initailState, action) {
    switch (action.type) {
        case HIDE_IMG:
            if (action.payload.side === "left") {
                return {
                    ...state,
                    showLeftAdvice: true,
                    showRight: false,
                    showQuestion: false,
                    step: "chooseAnswer",
                    selectedImg: action.payload.selectedImg
                }
            }
            return {
                ...state,
                showRightAdvice: true,
                showLeft: false,
                showQuestion: false,
                step: "chooseAnswer",
                selectedImg: action.payload.selectedImg
            }
        case HIDE_SLIDER:
            return {
                ...state,
                showSlider: false,
            }
        case RESET_ROUND:
            return initailState
        default:
            return state;
    }
}