import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import Footer from "../../components/ui/Footer";
import Header from "../../components/ui/Header";
import classes from "./posts.module.css";

export default function BlogList({ blogsList }) {
	const [loadedList, setLoadedList] = useState(8);
	const [showBtn, setShowBtn] = useState(true);

	const loadedBlogList = blogsList.posts.slice(0, loadedList);

	const loadMoreHandler = () => {
		setLoadedList(loadedList + 8);
		if (loadedBlogList.length >= blogsList.posts.length) {
			setShowBtn(false);
			return;
		}
	};

	return (
		<Fragment>
			<Head>
				<title>Blogs - Book Store</title>
			</Head>
			<Header />
			<section>
				<div className="container">
					<div className="title_wrap text-center">
						<span>Latest news</span>
						<h2>Our Blogs</h2>
					</div>
					<div className={classes.blog__list}>
						{loadedBlogList.map((el) => {
							return (
								<div className={classes.blog__item} key={el.id}>
									<Link href={`/posts/${el.id}`} passHref>
										<h4>
											<span>{el.id}.</span> {el.title}
										</h4>
									</Link>
								</div>
							);
						})}
					</div>
					<div className={classes.loadMore}>
						{showBtn ? (
							<button onClick={loadMoreHandler}>Load more</button>
						) : null}
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	);
}

export async function getStaticProps() {
	const res = await fetch(process.env.BLOG_POST_API);
	const data = await res.json();
	return {
		props: {
			blogsList: data,
		},
	};
}
