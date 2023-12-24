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
    <div className="container">
      <h2>Welcome to iNotebook - Your Personal Note-Taking App</h2>
      <p>
        Are you tired of forgetting important information, ideas, or tasks? iNotebook is here to help you
        stay organized and keep track of everything that matters to you.
      </p>
      <h3>Why Choose iNotebook?</h3>
      <p>
        iNotebook is more than just a note-taking app; it's your digital companion for capturing thoughts
        on the go. Here's why you'll love using iNotebook:
      </p>
      <ul>
        <li><strong>Simple and Intuitive:</strong> Our user-friendly interface makes it easy for anyone to use, whether you're a student, professional, or creative mind.</li>
        <li><strong>Effortless Organization:</strong> Categorize your notes with tags, making it simple to find and manage your information efficiently.</li>
        <li><strong>Accessible Anytime, Anywhere:</strong> Access your notes from any device with an internet connection, ensuring your information is always at your fingertips.</li>
        <li><strong>Secure and Private:</strong> Your data is encrypted and secure, providing you with peace of mind knowing that your notes are for your eyes only.</li>
      </ul>
      <h3>Getting Started</h3>
      <p>
        Ready to start jotting down your thoughts? Navigate to the "Notes" section, where you can create a new note,
        edit existing ones, or even delete notes you no longer need. Use the options button (<i className="fa-solid fa-ellipsis"></i>)
        to access additional actions for each note.
      </p>
      <h3>Stay Connected</h3>
      <p>
        We're always working to improve iNotebook based on your feedback. If you have any suggestions, encounter issues,
        or just want to say hello, feel free to reach out to us through our support channels. Your experience matters to us.
      </p>
      <h3>Thank You for Choosing iNotebook</h3>
      <p>
        Thank you for choosing iNotebook as your trusted note-taking companion. Start organizing your thoughts today and
        enjoy the simplicity and power of iNotebook.
      </p>
    </div>
  )
}
