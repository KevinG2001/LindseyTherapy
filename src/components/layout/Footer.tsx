import {
	Box,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
	return (
		<Box>
			<Container sx={{ p: 4 }}>
				<Grid container spacing={4}>
					{/* Section 1 */}
					<Grid size={4}>
						<Box
							width="100%"
							height="100%"
							component="img"
							alt="HeroImg"
							src="https://placehold.co/600x400"
						></Box>
					</Grid>
					{/* Section 2 */}
					<Grid size={4}>
						<Stack>
							<Typography variant="h6">Contact Us</Typography>
							<Divider sx={{ backgroundColor: "primary.main" }}></Divider>
							<Stack
								sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}
							>
								<PhoneIcon /> [+353 86 318 2315]
							</Stack>
							<Stack
								sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}
							>
								<InstagramIcon /> <FacebookIcon />
							</Stack>
						</Stack>
					</Grid>
					{/* Section 3 */}
					<Grid size={4}>
						<Stack>
							<Typography variant="h6">Visit Us</Typography>
							<Divider sx={{ backgroundColor: "primary.main" }}></Divider>
							<Stack sx={{ alignItems: "left", gap: 1 }}>
								<Typography>
									381, Captains Road, Crumlin, Dublin 12, Ireland D12 WK5A
								</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Divider sx={{ backgroundColor: "primary.main" }}></Divider>
				{/* My Info */}
				<Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
					Website made and managed by Kevin | Privacy Policy | Site Credit
				</Typography>
			</Container>
		</Box>
	);
}
