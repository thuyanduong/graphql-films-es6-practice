import { makeExecutableSchema } from '@graphql-tools/schema'
import { FilmType, filmsResolver } from './films.js'
import { LanguageType, languagesResolver } from './languages.js'
import { CategoryType, categoriesResolver } from './category.js'

const QueryType = `#graphql
  type Query {
    films (page: Int, pageSize: Int): [Film]
    film (id: ID): Film
    languages: [Language]
    language (id: ID): Language
    categories: [Category]
    category (id: ID): Category
  }
  `

const schema = makeExecutableSchema({
  typeDefs: [QueryType, FilmType, LanguageType, CategoryType],
  resolvers: [filmsResolver, languagesResolver, categoriesResolver]
})

export default schema