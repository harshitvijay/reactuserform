import React from 'react'

const LabelSelect = (props) => {
  return (
    <div>
      <label className='field'>
        {props.data.label}
        <select
          name={props.data.name}
          value={props.data.value}
          onChange={props.data.onChange}
        >
          {props.data.optionMap.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default LabelSelect
