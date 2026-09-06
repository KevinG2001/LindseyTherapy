import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
	return (
		<Box>
			<Container sx={{ p: 4 }}>
				<Grid container spacing={4}>
					<Grid size={6}>
						<Box
							width="100%"
							height="100%"
							component="img"
							alt="HeroImg"
							src="https://placehold.co/600x400"
						></Box>
					</Grid>
					<Grid size={6}>
						<Typography
							variant="h6"
							sx={{ fontWeight: "bold", color: "primary.main" }}
						>
							About Us
						</Typography>
						<Typography variant="h5">People you can reach!</Typography>
						<Typography variant="body1">
							We are a team of dedicated professionals committed to providing
							high-quality therapy services.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
