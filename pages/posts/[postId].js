import { Fragment } from "react";
import Header from "../../components/ui/Header";

export default function BlogDetail({ postData }) {
	return (
		<Fragment>
			<Header />
			<section>
				<div className="container">
					<h4>{postData.title}</h4>
					<p>{postData.body}</p>
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
	const res = await fetch(
		`https://dummyjson.com/posts/${params.postId}`
	);
	const data = await res.json();
	return {
		props: {
			postData: data,
		},
	};
}


