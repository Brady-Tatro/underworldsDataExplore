import NewGame from "../CreateGameScreen";
import createDataContext from "./createDataContext";

const gameReducer = (state, action) => {
    switch(action.type){
        case "new_game":
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: createTitle(action.payload.playerWB, action.payload.opponentWB),
                result: finalResult(action.payload.playerGlory, action.payload.opponentGlory),
                finalScore: `${action.payload.playerGlory} : ${action.payload.opponentGlory}`
            }]
        default:
            return state;
    }
}

const newGame = dispatch => {
    return(playerWB, opponentWB, playerGlory, opponentGlory, callback) => {
        dispatch({type: 'new_game', payload: {playerWB, opponentWB, playerGlory, opponentGlory}})
        callback()
    }
}

const createTitle = (playerWB, opponentWB) => {
  let finalTitle = `${playerWB} vs ${opponentWB}`
  return finalTitle
}

const finalResult = (playerGlory, opponentGlory) => {
  let finalResult = parseInt(playerGlory) > parseInt(opponentGlory) ? "You won" : "Opponent Won"
  return finalResult
}


export const { Context, Provider } = createDataContext(
    gameReducer,
    { newGame },
    []
)