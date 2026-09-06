import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const pages = ["Home", "About", "Contact"];

function Navbar() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Lindsey Psycho Therapy
				</Typography>
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					{pages.map((page) => (
						<Typography key={page} variant="button" sx={{ mx: 2 }}>
							{page}
						</Typography>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
