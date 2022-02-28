/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProductJ = /* GraphQL */ `
  mutation CreateProductJ(
    $input: CreateProductJInput!
    $condition: ModelProductJConditionInput
  ) {
    createProductJ(input: $input, condition: $condition) {
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
export const updateProductJ = /* GraphQL */ `
  mutation UpdateProductJ(
    $input: UpdateProductJInput!
    $condition: ModelProductJConditionInput
  ) {
    updateProductJ(input: $input, condition: $condition) {
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
export const deleteProductJ = /* GraphQL */ `
  mutation DeleteProductJ(
    $input: DeleteProductJInput!
    $condition: ModelProductJConditionInput
  ) {
    deleteProductJ(input: $input, condition: $condition) {
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
