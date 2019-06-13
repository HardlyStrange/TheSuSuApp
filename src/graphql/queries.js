// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSusuer = `query GetSusuer($id: ID!) {
  getSusuer(id: $id) {
    id
    agree
    joined
    first
    last
    legalid
    confirmed
    nickname
    signedin
    profileid
    profilepic
  }
}
`;
export const listSusuers = `query ListSusuers(
  $filter: ModelsusuerFilterInput
  $limit: Int
  $nextToken: String
) {
  listSusuers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      agree
      joined
      first
      last
      legalid
      confirmed
      nickname
      signedin
      profileid
      profilepic
    }
    nextToken
  }
}
`;
