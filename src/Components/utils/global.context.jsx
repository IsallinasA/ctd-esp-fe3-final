import React, { createContext, useMemo, useReducer, useEffect } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

const dentists = [
  {
    id: 14,
    name: "Dr. John Doe",
    username: "@johndoe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    website: "www.johndoe.com",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    username: "@janesmith",
    email: "janesmith@example.com",
    phone: "234-567-8901",
    website: "www.janesmith.com",
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    username: "@emilyjohnson",
    email: "emilyjohnson@example.com",
    phone: "345-678-9012",
    website: "www.emilyjohnson.com",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    username: "@michaelbrown",
    email: "michaelbrown@example.com",
    phone: "456-789-0123",
    website: "www.michaelbrown.com",
  },
  {
    id: 11,
    name: "Dr. Sarah Davis",
    username: "@sarahdavis",
    email: "sarahdavis@example.com",
    phone: "567-890-1234",
    website: "www.sarahdavis.com",
  },
  {
    id: 6,
    name: "Dr. David Wilson",
    username: "@davidwilson",
    email: "davidwilson@example.com",
    phone: "678-901-2345",
    website: "www.davidwilson.com",
  },
];

const lightTheme = {
  "--bg-color": "#e0f7fa", // Light Cyan
  "--font-color": "#006064", // Dark Cyan
  "--blue-color": "#0288d1", // Light Blue
  "--blue-hover-color": "#03a9f4", // Sky Blue
  "--button-bg-color": "#0288d1", // Light Blue
  "--button-hover-bg-color": "#03a9f4", // Sky Blue
};

const darkTheme = {
  "--bg-color": "#006064", // Dark Teal
  "--font-color": "#e0f7fa", // Light Cyan
  "--blue-color": "#e0f7fa", // Light Blue
  "--blue-hover-color": "#03a9f4", // Sky Blue
  "--button-bg-color": "#e0f7fa", // Light Blue
  "--button-hover-bg-color": "#b3c6c8", // Sky Blue
};

const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.keys(theme).forEach((key) => {
    root.style.setProperty(key, theme[key]);
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      applyTheme(newTheme === "light" ? lightTheme : darkTheme);
      return {
        ...state,
        theme: newTheme,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    theme: "light",
    data: dentists,
  });

  useEffect(() => {
    applyTheme(lightTheme);
  }, []);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const value = useMemo(() => ({ state, toggleTheme }), [state]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
