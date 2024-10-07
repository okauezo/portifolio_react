import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    return (
        <nav className="bg-green-800 w-48 min-h-screen p-4 fixed top-0 left-0 flex flex-col items-start">
            <h2 className="text-white text-2xl font-bold mb-6">Kauê Pires</h2>
            <ul className="space-y-4">
                <li><Link className="text-white hover:text-green-300" to="/">Sobre</Link></li>
                <li><Link className="text-white hover:text-green-300" to="/projects">Projetos</Link></li>
                <li><Link className="text-white hover:text-green-300" to="/contact">Contato</Link></li>
            </ul>
            <button
                onClick={toggleDarkMode}
                className="text-white hover:text-green-300 px-4 py-2 rounded transition bg-green-700 mt-6"
            >
                {darkMode ? 'Claro' : 'Escuro'}
            </button>
        </nav>
    );
};

export default Menu;
