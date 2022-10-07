import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url(https://images5.alphacoders.com/614/614955.png)",
    backgroundSize: "cover",
  },
  pokemonBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    margin: "15px",
    border: "1px solid rgba(0, 0, 0, 0.06)",
    borderRadius: "5px",

    "& > img": {
      width: "200px",
      margin: "10px",
    },

    "& > p": {
      color: "#ff850f",
      fontWeight: "bold",
      letterSpacing: "1.65px",
      textAlign: "center",
    },
  },
});

export default useStyles;
