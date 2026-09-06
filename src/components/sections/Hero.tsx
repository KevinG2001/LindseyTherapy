import { Box, Button, Container, Typography } from "@mui/material";

export default function Hero() {
	return (
		<Box sx={{ backgroundColor: "background.paper", py: 8 }}>
			<Container>
				<Typography
					variant="h5"
					component="h2"
					gutterBottom
					color="primary"
					sx={{ fontWeight: "600" }}
				>
					Therapy in Dublin!
				</Typography>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
					sx={{ fontWeight: "600" }}
				>
					Local Therapy here in D12
				</Typography>
				<Typography variant="body1" component="h2" gutterBottom>
					Based in Dublin 12, I offer a range of therapy services to support
					your mental health and well-being. Whether you're dealing with stress,
					anxiety, depression, or other challenges, I'm here to help you
					navigate through them.
				</Typography>
				<Button variant="contained" color="primary">
					Get In Touch!
				</Button>
			</Container>
		</Box>
	);
}
