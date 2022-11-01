import { createContext, useReducer, useContext, type Dispatch } from 'react';

type InitialStateType = {
  notice_id: string;
  company_name: string;
  about_company: string;
  job_role: string;
  ctc: string;
  // eligibility criteria
  degree_allowed: string[];
  branchses_allowed: string[];
  max_backlog: string;
  tenth_perc: string;
  twelfth_perc: string;
  diploma_perc: string;
  ug_perc: string;
  pg_perc: string;
  min_gap: string;

  // other details:
  form_link: string;
  form_submission_date: string;
  pick_time: string;
};

const initialState = {
  notice_id: 'PA-123',
  company_name: '',
  about_company: '',
  job_role: '',
  ctc: '',
  // eligibility criteria
  degree_allowed: [],
  branchses_allowed: [],
  max_backlog: '',
  tenth_perc: '',
  twelfth_perc: '',
  diploma_perc: '',
  ug_perc: '',
  pg_perc: '',
  min_gap: '',

  // other details:
  form_link: '',
  form_submission_date: '',
  pick_time: '',
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function changeInput(payload: any) {
  return {
    type: 'CHANGE_INPUT',
    payload,
  };
}

export function addDegree(payload: any) {
  return {
    type: 'PUSH_DEGREE',
    payload,
  };
}

const reducers = (state: any, action: any) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        ...action.payload,
      };
    case 'PUSH_DEGREE':
      return {
        ...state,
        degree_allowed: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider: React.FC<React.ReactNode> = ({
  children,
}: any) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
