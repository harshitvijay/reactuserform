import React from 'react'

const DisplayUsers = (props) => {
  let count = 0
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
        </tr>
        {props.data.map((user) => {
          return (
            <tr>
              <td>{++count}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.date}</td>
              <td>{user.education}</td>
              <td>{user.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default DisplayUsers
