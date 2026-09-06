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
							About Lindsey
						</Typography>
						<Typography variant="h5" sx={{ fontWeight: "600" }}>
							A calm, confidential space to work through what's on your mind
						</Typography>
						<Typography variant="body1">
							Lindsey is a qualified, accredited psychotherapist based in Dublin
							12, working with individuals on issues like anxiety, low mood,
							stress, and relationship difficulties. Her approach is warm and
							person-centred — sessions are led by what matters most to you, at
							a pace that feels right. Each session is typically held in person
							and gives you dedicated time and space, without judgment.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
