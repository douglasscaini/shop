import { styled } from "..";

export const SuccessContainer = styled("main", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    height: 656,

    h1: {
        fontSize: "$2xl",
        color: "$gray100",
    },

    p: {
        fontSize: "$xl",
        color: "$gray300",
        lineHeight: 1.4,
        maxWidth: 560,
        textAlign: "center",
        marginTop: "2rem",
    },

    a: {
        fontSize: "$lg",
        fontWeight: "bold",
        color: "$green500",
        marginTop: "5rem",
        display: "block",
        textDecoration: "none",

        "&:hover": {
            color: "$green300",
        },
    },
});

export const ImageContainer = styled("div", {
    width: "100%",
    maxWidth: 130,
    height: 145,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: "0.25rem",
    marginTop: "4rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        objectFit: "cover",
    },
});