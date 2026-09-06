import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PinDropIcon from "@mui/icons-material/PinDropOutlined";

export default function Contact() {
	return (
		<Box sx={{ backgroundColor: "background.paper" }}>
			<Container sx={{ p: 4 }}>
				<Grid container spacing={4}>
					<Grid size={6}>
						<Typography
							variant="h6"
							sx={{ fontWeight: "bold", color: "primary.main" }}
						>
							Contact Us
						</Typography>
						<Typography variant="h5" sx={{ fontWeight: "600" }}>
							Tell us what you need!
						</Typography>
						<Typography variant="body1">
							Send us a message and we will get back to you as soon as possible.
							We are here to help you with any questions or concerns you may
							have.
						</Typography>
						<Typography>
							<PhoneIcon /> [Phone Number]
						</Typography>
						<Typography>
							<EmailIcon /> [Email Address]
						</Typography>
						<Typography>
							<PinDropIcon /> [Address]
						</Typography>
					</Grid>
					<Grid size={6}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: 2,
								backgroundColor: "background.default",
								p: 4,
								borderRadius: 2,
							}}
						>
							<TextField
								placeholder="Name"
								id="name"
								variant="outlined"
								maxRows={1}
							/>
							<TextField
								placeholder="Email"
								id="email"
								variant="outlined"
								maxRows={1}
							/>
							<TextField
								placeholder="Message"
								id="message"
								variant="outlined"
								multiline
								rows={4}
							/>
							<Button variant="contained" color="primary">
								Send Enquiry
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
