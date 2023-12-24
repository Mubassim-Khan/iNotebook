import React, { useEffect } from 'react'
import "animate.css"
import TrackVisibility from "react-on-screen"
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

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
      <div className="home--title-card">
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className='home--heading'>Welcome to iNotebook - Your Personal Note Taking App</h2>
              <p className='home-text-center'>
                Are you tired of forgetting important information, ideas, or tasks? iNotebook is here to help you stay organized & keep track of everything that matters to you the most.
              </p>
            </div>
          }
        </TrackVisibility>
      </div>

      {/* Add new note button */}
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <div className="add-note">
              <div className="add-note--txt">
                <p>Add a new note </p>
              </div>
              <div className="add-note--btn mb-4">
                <IconButton >
                  <Link to="/notes">
                    <AddCircleIcon fontSize="large" />
                  </Link>
                </IconButton>
              </div>
            </div>
          </div>
        }
      </TrackVisibility>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
            <h3 className='home--other-headings'>Why Choose <span className='iNotebook'> iNotebook?</span></h3>
            <p className='home-text'>
              iNotebook is more than just a note-taking app; it's your digital companion for capturing thoughts
              on the go. Here's why you'll love using iNotebook:
            </p>

            <ul className='home-text'>
              <li><strong>Simple and Intuitive:</strong> Our user-friendly interface makes it easy for anyone to use, whether you're a student, professional, or creative mind.</li>
              <li><strong>Effortless Organization:</strong> Categorize your notes with tags, making it simple to find and manage your information efficiently.</li>
              <li><strong>Accessible Anytime, Anywhere:</strong> Access your notes from any device with an internet connection, ensuring your information is always at your fingertips.</li>
              <li><strong>Secure and Private:</strong> Your data is encrypted and secure, providing you with peace of mind knowing that your notes are for your eyes only.</li>
            </ul>
          </div>
        }
      </TrackVisibility>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
            <h3 className='home--other-headings'>Getting Started</h3>
            <p className='home-text'>
              Ready to start jotting down your thoughts? Navigate to the <strong> Notes</strong> section or click <strong>+</strong> icon, where you can create a new note,
              edit existing ones, or even delete notes you no longer need. Use the options button (<i className="fa-solid fa-ellipsis"></i>)
              to access additional actions for each note.
            </p>
          </div>
        }
      </TrackVisibility>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
            <h3 className='home--other-headings'>Stay Connected</h3>
            <p className='home-text'>
              We're always working to improve iNotebook based on your feedback. If you have any suggestions, encounter issues,
              or just want to say hello, feel free to reach out to us through our support channels. Your experience matters to us.
            </p>
          </div>
        }
      </TrackVisibility>

      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
            <h3 className='home--other-headings'>Thank You for Choosing <span className='iNotebook'> iNotebook</span></h3>
            <p className='home-text'>
              Thank you for choosing iNotebook as your trusted note-taking companion. Start organizing your thoughts today and
              enjoy the simplicity and power of iNotebook.
            </p>
          </div>
        }
      </TrackVisibility>
    </div>
  )
}
