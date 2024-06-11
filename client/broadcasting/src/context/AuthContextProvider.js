import { useReducer, useEffect, createContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Define the authReducer function
export default function authReducer  (state, action)  {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

// Define the AuthContextProvider component
export function AuthContextProvider ({ children })  {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  // Check local storage for a user and log in if found
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
