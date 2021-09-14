import React from 'react'
import store from '../redux/store'
const DisplayUsers = (props) => {
  const users = store.getState().users.users
  const newUsers = users.map((user) => Object.assign({}, user))
  return (
    <div className='displayData'>
      <h2 id='display-heading'>Display Data</h2>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>DOB</th>
          <th>Education</th>
          <th>Gender</th>
          <th>Edit Row</th>
          <th>Delete Row</th>
        </tr>
        {newUsers.map((user, index) => {
          return (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>{user.education}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => props.editRow(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => props.deleteRow(index)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default DisplayUsers
