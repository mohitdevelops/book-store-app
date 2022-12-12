import Link from "next/link";
import { Fragment, useState } from "react";
import Header from "../../components/ui/Header";
import classes from "./posts.module.css";

export default function BlogList({ blogsList }) {
	const [loadedList, setLoadedList] = useState(8);

	const loadMoreHandler = () => {
		setLoadedList(loadedList + 4);
	};

	const loadedBlogList = blogsList.slice(0, loadedList);

	return (
		<Fragment>
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
						<button onClick={loadMoreHandler}>Load more</button>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	return {
		props: {
			blogsList: data,
		},
	};
}
