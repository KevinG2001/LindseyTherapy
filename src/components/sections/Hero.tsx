import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
	return (
		<Box id="hero" sx={{ backgroundColor: "background.paper", py: 8 }}>
			<Container>
				<Typography
					variant="h5"
					component="h2"
					gutterBottom
					color="primary"
					sx={{ fontWeight: "600" }}
				>
					In-Person Therapy in Dublin 12
				</Typography>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
					sx={{ fontWeight: "600" }}
				>
					A space to be heard, close to home
				</Typography>
				<Typography variant="body1" component="h2" gutterBottom>
					Lindsey offers in-person therapy in Dublin 12, supporting adults
					through stress, anxiety, depression, and life's harder moments.
					Sessions are one-to-one, confidential, and paced around what you need.
				</Typography>
				<Button variant="contained" color="primary" href={"#contact"}>
					Get In Touch!
				</Button>
			</Container>
		</Box>
	);
}
