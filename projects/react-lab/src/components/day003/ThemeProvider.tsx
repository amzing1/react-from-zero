import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeContextValue = { theme: "light" | "dark"; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
  };
};

export { useTheme };

export default ThemeProvider;
