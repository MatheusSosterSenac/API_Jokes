import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Verificar se o token é válido
const isValidToken = (token) => {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
};

// Pegar a role do usuário
const getRole = (token) => {
    const decoded = jwtDecode(token);
    console.log("batata2", decoded)
    return decoded.role;
};

// Exportar o context = react context
export const AuthContext = createContext();

// Exportar o provider
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storageToken = localStorage.getItem("token");
        if (storageToken && isValidToken(storageToken)) {
            setToken(storageToken);
            setRole(getRole(storageToken));
        } else {
            setToken(null);
            setRole(null);
            localStorage.removeItem("token");
        }
        setLoading(false); // Define loading como false após verificar o token
    }, []);

    const login = (newToken) => {
        setToken(newToken);
        setRole(getRole(newToken));
        localStorage.setItem("token", newToken);
    };

    const logout = () => {
        setToken(null);
        setRole(null);
        localStorage.removeItem("token");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ token, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
