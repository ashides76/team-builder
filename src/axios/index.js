import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamsList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Adam',
    email: 'adam@adam.com',
    role: 'Software Engineer',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamsList })
  },
  post(url, { name, email, role }) {
    const newTeam = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeam })
  }
}
