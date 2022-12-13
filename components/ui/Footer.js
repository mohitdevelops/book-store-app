import Image from "next/image";
import footerLogo from "../../public/logo.png";
import {
	FaBehance,
	FaDev,
	FaGithub,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import classes from "./ui.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer({ socialLinksData }) {
	const [socialLinks, setSocialLinks] = useState([]);

	useEffect(() => {
		let loadedLinksData = [];
		for (const keys in socialLinksData) {
			console.log(loadedLinksData);
			loadedLinksData.push({
				url: socialLinksData[keys].url,
				icon: socialLinksData[keys].url,
				id: socialLinksData[keys].id,
			});
		}
		return setSocialLinks(loadedLinksData);
	}, []);

	const list = {
		"<FaBehance />": <FaBehance />,
		"<FaDev />": <FaDev />,
		"<FaGithub />": <FaGithub />,
		"<FaInstagram />": <FaInstagram />,
		"<FaTwitter />": <FaTwitter />,
	};

	console.log(list);

	return (
		<footer className={classes.footer}>
			<div className="container">
				<div className={classes.inner}>
					<div className={classes.left}>
						<Image
							src={footerLogo}
							alt="Book Store App"
							className={classes.logo}
						/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius mod tempor incididunt labore mod tempor incididunt ut labore adipiscing.</p>
					</div>
					<div className={classes.right}>
						<h3>Connect with me:</h3>
						<ul className={classes.socialLinks}>
							{socialLinks?.map((el) => {
								return (
									<li key={el.id}>
										<Link target="_blank" href={el.url}>
											{list[el.icon]}
										</Link>
									</li>
								);
							})}							
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
