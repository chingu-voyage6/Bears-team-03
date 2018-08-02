import React from 'react';
import  moment  from 'moment';

class Day extends React.Component{
    render(){
      const now = moment().format('MMMM Do YYYY')
      return (
        <span>{now}</span>
      )
    }
}

export default Day;