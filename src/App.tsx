import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme.ts";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Hero from "./components/sections/Hero.js";
import About from "./components/sections/About.js";
import Contact from "./components/sections/Contact.js";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Hero />
			<About />
			<Contact />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
