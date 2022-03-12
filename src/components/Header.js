import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
    textAlign: "center",
    padding: 10,
  };

  return (
    <div className="header" style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </div>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.9)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
