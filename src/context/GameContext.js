import NewGame from "../CreateGameScreen";
import createDataContext from "./createDataContext";

const gameReducer = (state, action) => {
    switch(action.type){
        case "new_game":
          console.log(action.payload)
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.content,
                result: action.payload.content,
                finalScore: action.payload.finalScore
            }]
        default:
            return state;
    }
}

const newGame = dispatch => {
    return(title, result, finalScore, callback) => {
        dispatch({type: 'new_game', payload: {title, result, finalScore}})
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    gameReducer,
    { newGame },
    []
)