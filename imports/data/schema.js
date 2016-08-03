export default schema = [`
  type SearchResults {
    name: String,
    registrationRequests: Int
  }
  type Query {
    data: [SearchResults]
  }
  schema {
    query: Query
  }
`];
