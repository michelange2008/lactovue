import gql from "graphql-tag";

export const ELEVEUR_QUERY = gql`
  query EleveurQuery($id: ID!) {
    eleveur(id: $id) {
      id
      address_1
      address_2
      cp
      commune
      tel
      lat
      long
      installation
      user {
        id
        name
        email
      }
    }
  }
`
