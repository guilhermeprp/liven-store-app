export const cardTemplateStyle = {
  position: "relative",
  maxWidth: 285,
  width: "100%",
  backgroundColor: "primary.main",
  border: "1px solid",
  borderColor: "primary.light",
  "&:hover > .add-to-cart": {
    opacity: 1,
  },
};

export const cardActionAreaStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  height: "100%",
};

export const cardMediaWrapperStyle = {
  width: "100%",
  height: "284px",
  backgroundColor: "text.primary",
  p: 2,
  border: "1rem solid",
  borderColor: "primary.main",
  borderRadius: "22px",
};

export const cardMediaStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "contain",
};

export const addToCartButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: 10,
  width: "80%",
  backgroundColor: "secondary.dark",
  opacity: 0,
  fontWeight: "600",
  color: "primary.contrastText",
  transition: "0.3s",
  transform: "translate(-50%, -50%)",
  "&:hover": {
    backgroundColor: "secondary.main",
  },
};
