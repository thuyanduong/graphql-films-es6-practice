import Film from '../models/Film.js'

const FilmType = `#graphql
  type Film {
      film_id: ID!
      title: String!
      language_id: Int!
      description: String
      length: Int
      rating: String
      release_year: Int
      language: Language!
  }
  `

const filmsResolver = {
    Query: {
        films: async (parent, args) => (await Film.getFilms(args.page, args.pageSize)),
        film: async (parent, args) => (await Film.getFilmById(args.id))
    },
}

export {
    FilmType,
    filmsResolver
}