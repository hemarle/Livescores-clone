export const initialState = {
  FIXTURE: [],
  table: [],
  LIVES: [],
  EPL: [],
  UEFA: [],
  LALIGA: [],
  BUNDESLIGA: [],
  BASKET: [],
};

export const actionTypes = {
  FIXTURE: "FIXTURE",
  TABLE: "TABLE",
  LIVES: "LIVES",
  EPL: "EPL",
  UEFA: "UEFA",
  LALIGA: "LALIGA",
  BUNDESLIGA: "BUNDESLIGA",
  BASKET: "BASKET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FIXTURE:
      return { ...state, FIXTURE: action.FIXTURE };

    case actionTypes.TABLE:
      return { ...state, table: action.table };

    case actionTypes.LIVES:
      return { ...state, LIVES: action.LIVES };

    case actionTypes.EPL:
      return { ...state, EPL: action.EPL };

    case actionTypes.UEFA:
      return { ...state, UEFA: action.UEFA };

    case actionTypes.LALIGA:
      return { ...state, LALIGA: action.LALIGA };

    case actionTypes.BASKET:
      return { ...state, BASKET: action.BASKET };

    case actionTypes.BUNDESLIGA:
      return { ...state, BUNDESLIGA: action.BUNDESLIGA };

    default:
      return state;
  }
};

export default reducer;
