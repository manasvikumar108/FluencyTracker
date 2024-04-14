import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Vocab from '../../Components/Vocab/Vocab'

const VocabEnglish = () => {
  return (
    <>
      <Navbar/>
      <Vocab vApi="/englishVocab" />
    </>
  )
}

export default VocabEnglish