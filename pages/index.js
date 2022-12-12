import { Fragment } from "react";
import Header from "../components/ui/Header";
import Image from "next/image";
import about_thumb from "../public/about_thumb.png";
import classes from "./home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<Fragment>
			<Header />
			<section className={classes.banner__wrap}>
				<div className="container">
					<div className={classes.banner__text}>
						<span>50% discount on early purchase</span>
						<h1>Your World of Words</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius mod
							tempor incididunt labore mod tempor incididunt ut labore
							adipiscing.
						</p>
					</div>
				</div>
			</section>
			<section className={classes.intro__wrap}>
				<div className={`container ${classes.wrapper}`}>
					<div className={classes.image}>
						<Image src={about_thumb} alt="Food Delivery" />
					</div>
					<div className={classes.content}>
						<div className="title_wrap">
							<span>action & adventure collection</span>
							<h2>Best books</h2>
						</div>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages
						</p>
						<Link href="/about" className="primary__btn">
							Know more
						</Link>
					</div>
				</div>
			</section>			
		</Fragment>
	);
}


// https://api.itbook.store/1.0/new
