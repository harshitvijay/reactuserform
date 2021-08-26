import React from 'react'

const LabelRadio = (props) => {
  return (
    <label className='field'>
      <input
        type={props.data.type}
        value={props.data.value}
        onChange={props.data.onChange}
        name={props.data.name}
      />
      {props.data.label}
    </label>
  )
}

export default LabelRadio
