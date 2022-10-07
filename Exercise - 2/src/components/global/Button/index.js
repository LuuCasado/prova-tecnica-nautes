import React from "react";

import useStyles from "./styles";

const Button = ({ children, onClick, isDisabled = false }) => {
  const classes = useStyles();

  return (
    <button className={classes.primary} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
