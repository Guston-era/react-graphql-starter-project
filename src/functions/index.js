import { Badge } from 'react-bootstrap'
export const badgeGender = (gender) => {
  if (gender === 'male') {
    return <Badge bg="warning">Male</Badge>
  } else if (gender === 'female') {
    return <Badge bg="info">Female</Badge>
  } else {
    return <Badge bg="secondary">{gender}</Badge>
  }
}
