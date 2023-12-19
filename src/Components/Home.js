import React from 'react'
import { Notes } from './Notes';

export const Home = (props) => {
  return (
    <div>
      <Notes showAlertMsg={props.showAlertMsg} />
    </div>
  )
}
