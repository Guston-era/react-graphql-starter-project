import { gql } from '@apollo/client'
export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $age: Float
    $gender: EnumUserGender
    $email: String
    $salaryDecimal: BSONDecimal
  ) {
    userCreate(
      record: {
        name: $name
        age: $age
        gender: $gender
        contacts: {
          email: $email
          phones: ["111-222-333-444", "444-555-666-777"]
        }
        languages: [{ language: "fr", skill: fluent }]
        someMixed: { a: 1, b: 2, c: [1, 2, 3, true, false, { sub: 1 }] }
        salaryDecimal: $salaryDecimal
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
        languages {
          language
          skill
        }
        someMixed
        salaryDecimal
      }
    }
  }
`
