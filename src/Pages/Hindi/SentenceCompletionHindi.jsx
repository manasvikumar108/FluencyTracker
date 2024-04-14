import React from 'react'
import SentenceCompletion from '../../Components/SentenceCompletion/SentenceCompletion'
import Navbar from '../../Components/Navbar/Navbar'

const SentenceCompletionHindi = () => {
  return (
    <>
      <Navbar/>
      <SentenceCompletion scApi="/hindiSentenceCompletion" />
    </>
  )
}

export default SentenceCompletionHindi