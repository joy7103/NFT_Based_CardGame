import React from 'react'
import styles from '../styles'

const regex = /^[A-Za-z0-9]+$/

const CustomInput = ({label,placeholder,value,
handleValueChange}) => {
  return (
    <div>
        <label htmlFor='name' className={styles.label}>{label}
        </label><br/><br/>
        <input
            type='text'
            placeholder={placeholder}
            value = {value}
            onChange={(e) => {
                if(e.target.value === '' || regex.test(e.target.
                value)) handleValueChange(e.target.value);
            }}
            className={styles.input}
        />
        
    </div>
  )
}

export default CustomInput