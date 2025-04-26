import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    theme: 'light',
    toggleTheme: () => {
    }
});

export default function GlobalState({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'light');
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });
    const [loading, setLoading] = useState(false);

    const toggleTheme = () => {
        setTheme(t => (t === 'light' ? 'dark' : 'light'));
    };
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <GlobalContext.Provider value={{ theme, toggleTheme, newProduct, setNewProduct, loading, setLoading, }}>
            {children}
        </GlobalContext.Provider>
    );
}
