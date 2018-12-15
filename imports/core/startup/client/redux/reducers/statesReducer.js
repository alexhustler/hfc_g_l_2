import { HIDE_IMG, HIDE_SLIDER, RESET_ROUND } from "../actions/types";

const initailState = {
    step: "chooseSource",
    showLeft: true,
    showRight: true,
    showLeftAdvice: false,
    showRightAdvice: false,
    showQuestion: true,
    submitted: false,
    roundIndex: 0,
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
                    selectedImg: action.payload.selectedImg,
                    roundIndex: action.payload.roundIndex
                }
            }
            return {
                ...state,
                showRightAdvice: true,
                showLeft: false,
                showQuestion: false,
                step: "chooseAnswer",
                selectedImg: action.payload.selectedImg,
                roundIndex: action.payload.roundIndex
            }
        // case HIDE_SLIDER:
        //     return {
        //         ...state,
        //         submitted: true,
        //     }
        case RESET_ROUND:
            return initailState
        default:
            return state;
    }
}