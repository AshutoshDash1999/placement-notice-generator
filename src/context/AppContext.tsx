import { createContext, useEffect, useReducer, useContext } from "react";

const initialState = {
  notice_id: "",
  company_name: "",
  about_company: "",
  job_role: "",
  ctc: "",
  // eligibility criteria
  degree_allowed: [],
  branchses_allowed: [],
  max_backlog: "",
  tenth_perc: "",
  twelfth_perc: "",
  diploma_perc: "",
  ug_perc: "",
  pg_perc: "",
  min_gap: "",

  // other details:
  form_link: "",
  form_submission_date: "",
  pick_time: "",
};

const AppContext = createContext(initialState);

const reducers = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
