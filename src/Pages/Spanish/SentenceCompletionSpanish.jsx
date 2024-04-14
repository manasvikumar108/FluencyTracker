import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionSpanish = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="/spanishSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionSpanish