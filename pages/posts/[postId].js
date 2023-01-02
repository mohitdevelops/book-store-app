import Image from "next/image";
import blogcover from "../../public/blog-cover.jpg";
import { Fragment } from "react";
import Header from "../../components/ui/Header";
import classes from "./posts.module.css";
import Head from "next/head";

export default function BlogDetail({ postData }) {
	return (
		<Fragment>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Header />
			<section>
				<div className="container">
					<div className={classes.blog__wrap}>
						<Image
							src={blogcover}
							alt="Book Store Blogs"
							className={classes.image}							
						/>
						<h4>{postData.title}</h4>
						<p>{postData.body}</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export async function getStaticPaths() {
	const res = await fetch("https://dummyjson.com/posts");
	const data = await res.json();

	const paths = data.posts.map((el) => {
		return {
			params: {
				postId: `${el.id}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
	const data = await res.json();
	return {
		props: {
			postData: data,
		},
	};
}
