import { gql } from '@apollo/client'
export const CREATE_USER = gql`
  mutation createUser($name: String!, $age: Float) {
    userCreate(
      record: {
        name: $name
        age: $age
        gender: ladyboy
        contacts: {
          email: "mail@example.com"
          phones: ["111-222-333-444", "444-555-666-777"]
        }
        someMixed: { a: 1, b: 2, c: [1, 2, 3, true, false, { sub: 1 }] }
        salaryDecimal: "33333333333333333.33333333333333333"
      }
    ) {
      recordId
      record {
        name
        age
        gender
        contacts {
          email
          phones
        }
        someMixed
        salaryDecimal
      }
    }
  }
`
