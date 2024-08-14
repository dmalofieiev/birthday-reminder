import { styled } from "@mui/material/styles";

export const ButtonWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "10px",
});

export const IconButton = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
        backgroundColor: "#e0e0e0",
    },
});
