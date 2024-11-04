import { client } from "@/lib/apollo";
import { GET_ALL_POSTS } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";

// Revalidar cada 60 segundos
export const revalidate = 60;

export default async function HomePage() {
	const { data } = await client.query({
		query: GET_ALL_POSTS,
	});

	const posts = data.posts.nodes;

	return (
		<div className="">
			<h1 className="">Blog Posts</h1>
			<div className="">
				{posts.map((post) => (
					<article key={post.id} className="">
						<h2>{post.title}</h2>
						{post.featuredImage?.node && (
							<div className="">
								<Image
									src={post.featuredImage.node.sourceUrl}
									alt={post.featuredImage.node.altText || post.title}
									fill
									className=""
								/>
							</div>
						)}
						<Link href={`/post/${post.slug}`} className="">
							Leer más →
						</Link>
						<div
							className=""
							dangerouslySetInnerHTML={{ __html: post.excerpt }}
						/>
					</article>
				))}
			</div>
		</div>
	);
}
