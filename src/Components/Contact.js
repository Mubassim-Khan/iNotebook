import React, { useEffect } from 'react'
import { SocialCard } from './SocialCard';
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Contact = (props) => {
  const updateProgress = () => {
    props.setProgress(100);
    document.title = "DotCom | Contact Us";
  }

  useEffect(() => {
    updateProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container mt-1'>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2 className='contact--heading'>Contact Us</h2>
            <p className='page-text-above'>
              We would love to hear your feedback! If you have any suggestions or encounter issues, please
              reach out to us through our support channels.
            </p>
          </div>
        }
      </TrackVisibility>
      <SocialCard />
    </div>
  )
}
