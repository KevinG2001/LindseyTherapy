import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		background: { default: "#faf6ef" },
		primary: { main: "#2f5d4f" },
		text: { primary: "#3a3128" },
	},
	typography: {
		fontFamily: "'Work Sans', system-ui, sans-serif",
		h1: { fontFamily: "'Lora', serif", fontWeight: 600 },
		h2: { fontFamily: "'Lora', serif", fontWeight: 600 },
	},
});

export default theme;
