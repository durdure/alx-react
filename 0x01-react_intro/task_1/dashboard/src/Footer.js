import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div className="Footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(props.isIndex)}</p>
    </div>
  );
}

export default Footer;

function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}
