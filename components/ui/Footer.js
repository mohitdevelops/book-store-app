import {
	FaBehance,
	FaDev,
	FaGithub,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";
import classes from "./ui.module.css";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
	const [socialLinks, setSocialLinks] = useState([]);

	useEffect(() => {
		const fetchLinks = async () => {
			const res = await fetch(
				"https://mohitdevelops-d64e5-default-rtdb.asia-southeast1.firebasedatabase.app/accounts.json"
			);
			const data = await res.json();
			let loadedLinksData = [];
			for (const keys in data) {
				loadedLinksData.push({
					url: data[keys].url,
					icon: data[keys].icon,
					id: data[keys].id,
				});
			}
			setSocialLinks(loadedLinksData);
		};
		fetchLinks().catch((err) => console.error(err.message));
	}, []);

	const list = {
		"<FaBehance />": <FaBehance />,
		"<FaDev />": <FaDev />,
		"<FaGithub />": <FaGithub />,
		"<FaInstagram />": <FaInstagram />,
		"<FaTwitter />": <FaTwitter />,
	};

	return (
		<Fragment>
			<div className={classes.footer__wave}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fillOpacity="1"
						d="M0,256L60,240C120,224,240,192,360,197.3C480,203,600,245,720,245.3C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
					></path>
				</svg>
			</div>
			<footer className={classes.footer}>
				<div className="container">
					<div className={classes.inner}>
						<h3>Connect with me:</h3>
						<ul className={classes.socialLinks}>
							{socialLinks?.map((el) => {
								return (
									<li key={el.id}>
										<Link target="_blank" href={el.url}>
											{list[el.icon.toString()]}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</footer>
		</Fragment>
	);
}
