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
    <div className='container mt-1'>
      <h2 className='about--heading'>About iNotebook</h2>
      <p className='about-text-center'>
        {/* Welcome to iNotebook, a simple note-taking app to help you organize your thoughts and ideas. */}
        iNotebook is your personalized note taking app, where you can store your notes over cloud & can access them anywhere, anytime.
      </p>
      <h3 className='about--other-headings'>Features</h3>
      <ul className='about-text'>
        <li>Create, edit, and delete notes</li>
        <li>Organize notes with tags</li>
        <li>User-friendly interface</li>
      </ul>
      <h3 className='about--other-headings'>Getting Started</h3>
      <p className='about-text'>
        To get started, navigate to the "Notes" section, where you can add, edit, and delete your notes.
        Use the options button (<i className="fa-solid fa-ellipsis"></i>) to access additional features.
      </p>
    </div>
  )
}
