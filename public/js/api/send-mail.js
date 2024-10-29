import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
	const { to, subject, message } = req.body;
	}

	const transporter = nodemailer.createTransport({
	 service: 'Gmail',
	 auth: {
	 user: process.env.EMAIL_USER,
	 pass: process.env.EMAIL_PASS,
	 },

	});

	try {
	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to,
		subject,
		text: message,
	});
	res.status(200).json({ success: true });

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to send email'});
	}
	else {
	res.setHeader('Allow', ['POST']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}