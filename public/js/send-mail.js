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
	 type: 'OAuth2',
	 clientId: '478240378195-59n27i6flr3ajr7hnhm09p745kglhqro.apps.googleusercontent.com',
	 clientSecret: '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',
	 refreshToken: '1//04u9o399K1yQMCgYIARAAGAQSNwF-L9IrYP_B0s2gJec96rX0UqnDTUGju7rqIAfmg6UlWOe9WhY00sVr34UwqzAJIABQO71rLa0'
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