import React, { useEffect } from 'react'

export const About = (props) => {
  // To update Top Loading Bar and change Title of tab 
  const updateProgress = () => {
    props.setProgress(100);
    document.title = "About - iNotebook";
  }
  useEffect(() => {
    updateProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container mt-3'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur similique repellat exercitationem dignissimos harum placeat nobis, minus corrupti quaerat quam perspiciatis distinctio! Inventore illum sint eius iusto, commodi dicta maiores.
    </div>
  )
}
