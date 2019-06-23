// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSusuer = `query GetSusuer($id: ID!) {
  getSusuer(id: $id) {
    id
    joined
    username
    first
    last
    legalid
    approved
  }
}
`;
export const listSusuers = `query ListSusuers(
  $filter: ModelSusuerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSusuers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      joined
      username
      first
      last
      legalid
      approved
    }
    nextToken
  }
}
`;
