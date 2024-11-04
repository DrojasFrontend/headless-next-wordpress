import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
	query GetAllPosts {
		posts(first: 20, where: { status: PUBLISH }) {
			nodes {
				id
				title
				slug
				date
				excerpt
				featuredImage {
					node {
						sourceUrl
						altText
					}
				}
				categories {
					nodes {
						name
						slug
					}
				}
			}
		}
	}
`;

// Query para obtener todos los posts para generateStaticPaths
export const GET_ALL_POSTS_SLUGS = gql`
	query GetAllPostsSlugs {
		posts(first: 100) {
			nodes {
				slug
			}
		}
	}
`;

// Query para obtener un post específico por slug
export const GET_POST_BY_SLUG = gql`
	query GetPostBySlug($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			id
			slug
			title
			content
			date
			featuredImage {
				node {
					sourceUrl
					altText
				}
			}
			categories {
				nodes {
					name
					slug
				}
			}
		}
	}
`;

export const GET_HOME_DATA = gql`
	query GetHomeData {
		pageBy(uri: "/") {
			paginaInicio {
				mostrarHero
				mostrarRefigio
				mostrarHabitaciones
				mostrarExperiencias

				grupoHero {
					titulo
					imagen {
						mediaItemUrl
						altText
						title
					}
				}

				gruporefugio {
					descripcion
					titulo
					targetas {
						detalle
						titulo
						imagen {
							mediaItemUrl
							altText
							title
						}
					}
				}

				grupohabitaciones {
					titulo
					descripcion
					targetas {
						cta {
							url
							title
							target
						}
						titulo
						imagen {
							mediaItemUrl
							altText
							title
						}
						columnas
					}
				}

				grupoexperiencias {
					titulo
					descripcion
					targetas {
						titulo
						subTitulo
						descripcion
						imagen {
							mediaItemUrl
							altText
							title
							mediaDetails {
								height
								width
							}
						}
					}
				}
			}
		}
	}
`;
