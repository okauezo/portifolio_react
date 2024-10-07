import React from 'react';

const Footer = () => (
    <footer className="bg-green-800 text-white text-center p-6 mt-8 flex flex-col items-center">
        <p>© 2024 Kauê Pires</p>
        <div className="mt-2 flex gap-4">
            <a href="https://github.com/KAUE_GITHUB" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
            </a>
            <a href="https://linkedin.com/in/KAUE_LINKEDIN" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
            </a>
            <a href="https://linkedin.com/in/KAUE_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
            </a>
        </div>
    </footer>
);

export default Footer;
