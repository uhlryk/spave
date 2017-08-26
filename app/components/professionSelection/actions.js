export const FETCH_PROFESSIONS = "professions.fetch";
export const NEXT_PROFESSION = "professions.next";
export const PREVIOUS_PROFESSION = "professions.previous";

export const fetchProfessions = professions => (dispatch, getState) => dispatch({
  type: FETCH_PROFESSIONS,
  payload: {
    list: professions
  }
});

export const nextProfession = () => (dispatch, getState) => dispatch({
  type: NEXT_PROFESSION
});

export const previousProfession = () => (dispatch, getState) => dispatch({
  type: PREVIOUS_PROFESSION
});
