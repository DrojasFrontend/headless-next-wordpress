import { ApolloClient, InMemoryCache } from "@apollo/client";

// Eliminamos revalidateTime ya que no lo necesitaremos
export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

// Simplificamos el helper
export async function fetchData(query, variables = {}) {
  try {
    const { data } = await client.query({
      query,
      variables,
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
