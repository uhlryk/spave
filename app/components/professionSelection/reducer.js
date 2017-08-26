import {
  FETCH_PROFESSIONS, NEXT_PROFESSION, PREVIOUS_PROFESSION
} from "./actions";

export default function professions(state = { professions: [], current: 0}, { type, payload }) {
  switch (type) {
    case FETCH_PROFESSIONS:
      return {
        ...state,
        professions: payload.list
      };
    case NEXT_PROFESSION:
      return {
        ...state,
        current: state.current + 1
      };
    case PREVIOUS_PROFESSION:
      return {
        ...state,
        current: state.current - 1
      };
    default:
      return state;
  }
}
