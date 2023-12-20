import React, { useEffect } from 'react'
import { Notes } from './Notes';

export const Home = (props) => {
  // To update Top Loading Bar and change Title of tab 
  const updateProgress = () => {
    props.setProgress(100);
    document.title = "Home - iNotebook";
  }
  useEffect(() => {
    updateProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Notes showAlertMsg={props.showAlertMsg} />
    </div>
  )
}
