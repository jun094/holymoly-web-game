import React, { useReducer, createContext, useContext } from "react";

const initialScore = {
  count: 0,
  score: 0,
};

function scoreReducer(state, action) {
  switch (action.type) {
    case "COUNTUP":
      return {
        ...state,
        count: state.count + 1,
      };
    case "PLUSE":
      return {
        ...state,
        score: state.score + 1,
      };
    case "RESET":
      return {
        ...state,
        score: 0,
        count: 0,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ScoreStateContext = createContext();
const ScoreDispatchContext = createContext();

export function ScoreProvider({ children }) {
  const [state, dispatch] = useReducer(scoreReducer, initialScore);

  return (
    <ScoreStateContext.Provider value={state}>
      <ScoreDispatchContext.Provider value={dispatch}>
        {children}
      </ScoreDispatchContext.Provider>
    </ScoreStateContext.Provider>
  );
}

export function useScoreState() {
  const context = useContext(ScoreStateContext);

  if (!context) {
    throw new Error("useScoreState error :(");
  }
  return context;
}

export function useScoreDispatch() {
  const context = useContext(ScoreDispatchContext);
  if (!context) {
    throw new Error("useScoreDispatch error :(");
  }
  return context;
}
