import { Fragment } from "react";
import Header from "../components/ui/Header";
import Image from "next/image";
import about_thumb from "../public/about_thumb.png";
import classes from "./home.module.css";
import Link from "next/link";
import Slider from "react-slick";
import Footer from "../components/ui/Footer";

export default function Home({ fetchedData, fetchedSocialLinks }) {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
	};
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
			<section className={classes.home_products_wrap}>
				<div className="container">
					<div className="title_wrap text-center">
						<span>Books on trend</span>
						<h2>New arrivals</h2>
					</div>
					<Slider {...settings}>
						{fetchedData.books
							.map((el) => {
								return (
									<div className={classes.home_products} key={el.isbn13}>
										<div className={classes.inner}>
											<img src={el.image} alt={el.title} />
											<h3>{el.title}</h3>
										</div>
									</div>
								);
							})
							.slice(0, 5)}
					</Slider>
					<div className="text-center">
						<Link href="/products" className="primary__btn">
							View All
						</Link>
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
			<Footer socialLinksData={fetchedSocialLinks}/>
		</Fragment>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://api.itbook.store/1.0/new");
	const data = await response.json();
	const socialLinksRes = await fetch(
		"https://mohitdevelops-d64e5-default-rtdb.asia-southeast1.firebasedatabase.app/accounts.json"
	);
	const socialLinksData = await socialLinksRes.json();
	return {
		props: {
			fetchedData: data,
			fetchedSocialLinks: socialLinksData,
		},
	};
}

// https://api.itbook.store/1.0/new
