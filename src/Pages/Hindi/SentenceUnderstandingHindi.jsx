import React from 'react'
import SentenceUnderstanding from '../../Components/SentenceUnderstanding/SentenceUnderstanding'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceUnderstandingHindi = () => {
  return (
    <>
      <Navbar/>
      <SentenceUnderstanding suApi="/hindiSentenceUnderstanding" />
    </>
  )
}

export default SentenceUnderstandingHindi