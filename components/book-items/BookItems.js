import Image from "next/image";
import Link from "next/link";
import classes from "./book-item.module.css";

export default function FoodItems(props) {
	return (
		<div className={classes.product__item}>
			<Link href={`/products/${props.id}`} className={classes.image_box}>
				<Image
					src={props.imageUrl}
					alt={props.title}
					className={classes.image}	
					fill
				/>
			</Link>
			<span className={classes.desc_box}>
				<h3>{props.title}</h3>
				<p>{props.price}</p>
				<button>Add to cart</button>
			</span>
		</div>
	);
}
