import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
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
							Ready to talk?
						</Typography>
						<Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
							Tell us what you need!
						</Typography>
						<Typography variant="body1" gutterBottom>
							If you'd like to book a session or have questions before getting
							started, reach out using the form below or contact Lindsey
							directly by phone or email. All enquiries are confidential.
						</Typography>
						<Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
							<PhoneIcon /> [Phone Number]
						</Stack>
						<Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
							<EmailIcon /> [Email Address]
						</Stack>
						<Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
							<PinDropIcon /> [Address]
						</Stack>
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
