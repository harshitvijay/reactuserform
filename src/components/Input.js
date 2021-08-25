import React from 'react'

const Input = (props) => {
  return (
    <div>
      <input
        className='field'
        type={props.data.type}
        placeholder={props.data.placeholder}
        name={props.data.name}
        onChange={props.data.onChange}
        value={props.data.value}
      />
      <span className='error'>{props.data.error}</span>
    </div>
  )
}

export default Input
