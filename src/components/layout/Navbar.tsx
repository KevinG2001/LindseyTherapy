import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = ["Home", "About", "Contact"];

function Navbar() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};
	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Lindsey Psycho Therapy
				</Typography>
				{/* Desktop */}
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					{pages.map((page) => (
						<Button
							key={page}
							href={`#${page.toLowerCase()}`}
							sx={{ color: "white" }}
						>
							{page}
						</Button>
					))}
				</Box>
				{/* Mobile */}
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ display: { xs: "block", md: "none" } }}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={handleDrawerClose}
				slotProps={{
					paper: {
						sx: { backgroundColor: "background.default" },
					},
				}}
			>
				<Box sx={{ width: 250 }} role="presentation">
					<Stack sx={{ flexDirection: "column" }}>
						{pages.map((page) => (
							<Button
								key={page}
								href={`#${page.toLowerCase()}`}
								sx={{ color: "green" }}
								onClick={handleDrawerClose}
							>
								{page}
							</Button>
						))}
					</Stack>
				</Box>
			</Drawer>
		</AppBar>
	);
}

export default Navbar;
