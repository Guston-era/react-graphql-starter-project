import { useQuery, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Row, Col, Table, Badge, Card, Form, Button } from 'react-bootstrap'
import { CREATE_USER } from '../exportedgql/mutations'
import { GET_MANY_USERS } from '../exportedgql/queries'
import { badgeGender } from '../functions'

const Users = () => {
  // state variables
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [salaryDecimal, setSalaryDecimal] = useState(100000000000000.01)

  //queries
  const { error, loading, data } = useQuery(GET_MANY_USERS, {
    variables: {
      limit: 80,
    },
  })

  //mutatioons
  const [addUserFunc, addUserResult] = useMutation(CREATE_USER, {
    variables: {
      name,
      age: parseFloat(age),
      gender,
      email,
      salaryDecimal: parseFloat(salaryDecimal),
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
        <Row className="p-1">
          <Col md={8} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  Users Table <small>(GET_MANY_USERS query)</small>
                </Card.Title>
              </Card.Header>
              <Card.Body>
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
                        <td>{badgeGender(u.gender)}</td>
                        <td>{u.contacts.email}</td>
                        <td>{u.salaryDecimal}</td>
                        <td>
                          {u.languages.map((l, i) => (
                            //   <li key={i}>{`${l.language} (${l.skill})`}</li>
                            <Badge pill bg="dark" className="m-1" key={i}>
                              {`${l.language} (${l.skill})`}
                            </Badge>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add a User</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="ladyboy">Ladyboy</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicSalary">
                    <Form.Label>Salary Decimal</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Salary Decimal"
                      value={salaryDecimal}
                      onChange={(e) => setSalaryDecimal(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={
                      !name || !age || !salaryDecimal || !gender || !email
                    }
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default Users
