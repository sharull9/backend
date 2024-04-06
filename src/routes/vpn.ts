import { Router } from "express";
import { prisma } from "../../prisma/client";
const router = Router();

router.get("/", async (req, res) => {
	const vpn = [
		{
			hostname: "",
			ip: "23.164.240.140",
			ping: "33",
			speed: "",
			country_long: "United States",
			country_short: "US",
			configdata_base64: "",
		},
		{
			hostname: "",
			ip: "23.164.240.140",
			ping: "33",
			speed: "",
			country_long: "United States",
			country_short: "US",
			configdata_base64: "",
		},
		{
			hostname: "",
			ip: "23.164.240.140",
			ping: "33",
			speed: "",
			country_long: "United States",
			country_short: "US",
			configdata_base64: "",
		},
		{
			hostname: "",
			ip: "23.164.240.140",
			ping: "33",
			speed: "",
			country_long: "United States",
			country_short: "US",
			configdata_base64: "",
		},
	];
	return res.status(200).json({ ...vpn });
});

export const vpnRouter = router;
