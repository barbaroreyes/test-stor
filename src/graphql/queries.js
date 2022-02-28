/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProductJ = /* GraphQL */ `
  query GetProductJ($id: ID!) {
    getProductJ(id: $id) {
      id
      name
      description
      image
      price
      quantity
      category
      createdAt
      updatedAt
    }
  }
`;
export const listProductJS = /* GraphQL */ `
  query ListProductJS(
    $filter: ModelProductJFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductJS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        price
        quantity
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
