import { Fragment } from "react";
import Header from "../components/ui/Header";
import classes from "./ui.module.css";
import Image from "next/image";
import about_thumb from "../public/about_thumb.png";
import Link from "next/link";
import Footer from "../components/ui/Footer";

export default function About() {
	return (
		<Fragment>
			<Header />
			<section className={classes.intro__wrap}>
				<div className="container">
					<div className="title_wrap text-center">
						<span>Book Store</span>
						<h2>About us</h2>
					</div>
					<div className={classes.wrapper}>						
						<div className={classes.content}>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
								corrupti. Aperiam at adipisci quia. Facilis iure laboriosam ut
								quia rerum molestias deserunt. Totam saepe earum necessitatibus
								quaerat ipsam molestias voluptates repudiandae doloribus magni?
								Sed quibusdam maxime nemo nostrum, culpa, sint officia
								distinctio tempore qui eos incidunt nam quae consequuntur modi
								quam voluptas, asperiores est! Similique asperiores, facilis
								consequatur, doloribus aliquid aperiam esse saepe libero
								excepturi non omnis minima nesciunt perferendis quas, nam nulla
								ipsum voluptatibus corrupti? Enim facilis officiis cupiditate!
							</p>
                            <p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
								doloribus totam similique, asperiores, tempore quod cum illo vel
								placeat omnis nulla, quam expedita dolorum aliquam! Id
								quibusdam, veritatis dolores fugiat quas, quam, corrupti
								suscipit modi neque esse explicabo dicta voluptates harum
								voluptatum quidem magni velit eum excepturi! Reiciendis iste
								consequatur deserunt perferendis dignissimos, deleniti accusamus
								quibusdam, cupiditate ut numquam debitis harum eum, voluptates
								non fuga at quia laudantium quae. Corrupti perspiciatis
								dignissimos cumque repellendus! Totam dignissimos itaque quas
								sequi qui quibusdam rem magnam! Ipsam, obcaecati. Dicta in at
								dolorem vel illo ullam, nostrum eius ea, natus dolorum alias.
								Cumque aperiam quo consequuntur fugiat sit ratione quibusdam
								rerum laborum esse soluta quam similique, impedit eveniet nemo
								libero facilis pariatur, earum fugit placeat dolore dicta
								officiis, voluptate dolorem et. Quidem molestias corporis est
								illum molestiae quia debitis eligendi at, harum vel inventore.
								Fugiat neque obcaecati, fugit explicabo optio deserunt modi
								deleniti non iste quia minima dolores enim voluptatem expedita
								mollitia. Magni odit doloremque quis quam alias. Molestiae a
								tempora quis. Explicabo repellat ea, libero doloremque
								architecto delectus nesciunt vero eos, ducimus sit maxime
								perspiciatis magnam accusantium? Facere nemo temporibus sapiente
								vero atque omnis, saepe blanditiis quod, consectetur esse aut,
								eum ullam hic!
							</p>
						</div>
					</div>
				</div>
			</section>
            <Footer />
		</Fragment>
	);
}
