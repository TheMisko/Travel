import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      naziv
      opis

      cena
      slike
    }
  }
`;
