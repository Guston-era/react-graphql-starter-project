import { useQuery } from '@apollo/client'
import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { GET_MANY_USERS } from '../exportedgql/queries'

const Users = () => {
  const { error, loading, data } = useQuery(GET_MANY_USERS, {
    variables: {
      limit: 80,
    },
  })

  return (
    <div>
      {error && (
        <div className="alert alert-danger">
          An error occurred while fetching your data
        </div>
      )}
      {loading && (
        <div className="alert alert-info" align="center">
          Sit back we loading you data
        </div>
      )}
      {data && (
        <Row className="p-3">
          <Col md={8}>
            <h4>
              Users Table <small>(GET_MANY_USERS query)</small>
            </h4>
            <Table hover striped bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Languages</th>
                </tr>
              </thead>
              <tbody>
                {data.userMany.map((u, i) => (
                  <tr key={u._id}>
                    <td style={{ color: 'blue' }}>{u.name}</td>
                    <td>{u.age}</td>
                    <td>{u.gender}</td>
                    <td>{u.contacts.email}</td>
                    <td>{u.salaryDecimal}</td>
                    <td>
                      <ul>
                        {u.languages.map((l, i) => (
                          <li key={i}>{`${l.language} (${l.skill})`}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4}></Col>
        </Row>
      )}
    </div>
  )
}

export default Users
