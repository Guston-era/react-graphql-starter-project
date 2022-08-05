import { gql } from '@apollo/client'

export const GET_MANY_USERS = gql`
  query GetManymanyusers($limit: Int) {
    userMany(limit: $limit, sort: _ID_ASC) {
      _id
      name
      age
      languages {
        language
        skill
      }
      contacts {
        email
      }
      gender
      age
      salaryDecimal
    }
  }
`

export const GET_SINGLE_USER = gql`
  query GetSingleuser($id: MongoID!) {
    userById(_id: $id) {
      _id
      name
      languages {
        language
        skill
      }
      contacts {
        email
      }
      gender
      age
      salaryDecimal
    }
  }
`

export const GET_MIXED_TYPE = gql`
  query GetUserMixedType($id: MongoID!) {
    userById(_id: $id) {
      _id
      name
      someMixed
      salaryDecimal
    }
  }
`
