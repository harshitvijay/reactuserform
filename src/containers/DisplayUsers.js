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
          <th>Edit Row</th>
          <th>Delete Row</th>
        </tr>
        {props.data.map((user, index) => {
          let temp = ++count
          return (
            <tr key={temp}>
              <td>{temp}</td>
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
