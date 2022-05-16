export const dropdownStyle = (open: boolean): Record<string, string> => ({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  minWidth: "135px",
  maxHeight: open ? "15rem" : "0",
  overflow: "hidden",
  backgroundColor: "primary.light",
  padding: open ? "0.5rem 0" : "0",
  borderRadius: "4px",
  boxShadow: "0 0 3px 0 #07101a",
  transition: "0.3s ease",
});
