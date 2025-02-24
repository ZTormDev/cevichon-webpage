// filepath: /cevichon-webpage/src/components/Footer/Footer.tsx
import React from "react";
import "../styles/components/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Cevichón. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
