import React from 'react'

import classes from './RenderFields.css'

const RenderFields = ({ input, label, type, meta: { touched, error } }) => (
  <section>
    <label>{label}</label>
    <div>
      <input type={type} { ...input } />
      {touched && ((error && <span className={classes.Error}>{error}</span>))}
    </div>
  </section>
)

export default RenderFields