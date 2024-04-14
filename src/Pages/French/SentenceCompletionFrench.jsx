import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionFrench = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="/frenchSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionFrench