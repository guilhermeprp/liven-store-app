export const cartDropStyles = (open: boolean): Record<string, string> => ({
  ...(open
    ? {
        maxWidth: "550px",
        maxHeight: "70vh",
        padding: "1rem",
        overflow: "hidden",
      }
    : { maxWidth: "0", maxHeight: "0", overflow: "hidden" }),
  position: "absolute",
  top: "calc(100% - 5px)",
  right: "1.2vw",
  borderRadius: "0.3rem",
  backgroundColor: "primary.main",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.4)",
  transition: "0.6s",
});

export const finishOrderButtonStyle = {
  width: "100%",
  height: "3rem",
  marginTop: "1rem",
  backgroundColor: "secondary.dark",
  borderRadius: "0.3rem",
  boxShadow: "5px 3px 10px 0px rgba(0,0,0,0.3)",
  color: "primary.contrastText",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "secondary.main",
  },
};
