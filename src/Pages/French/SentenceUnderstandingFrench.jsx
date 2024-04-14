import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingFrench = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="/frenchSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingFrench