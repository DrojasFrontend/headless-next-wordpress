import { client } from '@/lib/apollo';
import { GET_ALL_POSTS_SLUGS, GET_POST_BY_SLUG } from '@/lib/queries';

// Genera las rutas estáticas
export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_POSTS_SLUGS
  });

  return data.posts.nodes.map((post) => ({
    slug: post.slug,
  }));
}

// Página del post
export default async function PostPage({ params }) {
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: {
      slug: params.slug,
    },
  });

  if (!data.post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <article>
      <h1>{data.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </article>
  );
}