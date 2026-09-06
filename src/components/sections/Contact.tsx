import {
	Alert,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import PhoneIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PinDropIcon from "@mui/icons-material/PinDropOutlined";
import { useRef, useState } from "react";

export default function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;

		setStatus("sending");

		Promise.all([
			emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			),
			emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			),
		])
			.then(() => {
				setStatus("success");
				formRef.current?.reset();
			})
			.catch(() => {
				setStatus("error");
			});
	};

	return (
		<Box id="contact" sx={{ backgroundColor: "background.paper" }}>
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
							<PhoneIcon /> +353 87 123 4567
						</Stack>
						<Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
							<EmailIcon /> lindsey@lindseyburkepsychotherapy.com
						</Stack>
						<Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
							<PinDropIcon /> Somewhere in Dublin
						</Stack>
					</Grid>
					<Grid size={6}>
						<Box
							component="form"
							ref={formRef}
							onSubmit={handleSubmit}
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
								name="name"
								variant="outlined"
								maxRows={1}
								required
							/>
							<TextField
								placeholder="Email"
								id="email"
								name="email"
								type="email"
								variant="outlined"
								maxRows={1}
								required
							/>
							<TextField
								placeholder="Phone Number"
								id="phone"
								name="phone"
								type="tel"
								variant="outlined"
								maxRows={1}
							/>
							<TextField
								placeholder="Message"
								id="message"
								name="message"
								variant="outlined"
								multiline
								rows={4}
								required
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								disabled={status === "sending"}
							>
								{status === "sending" ? "Sending..." : "Send Enquiry"}
							</Button>

							{status === "success" && (
								<Alert severity="success">Message sent — thank you!</Alert>
							)}
							{status === "error" && (
								<Alert severity="error">
									Something went wrong. Please try again.
								</Alert>
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
