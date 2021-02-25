import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
function update(cache, payload) {
  console.log(payload);
  console.log('running update function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}
export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update: update,
  });
  return (
    <div>
      <button
        disabled={loading}
        onClick={() => {
          if (confirm('Are you sure you want to delete this item?'));
          console.log('delete');
          deleteProduct().catch((err) => alert(err.message));
        }}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
