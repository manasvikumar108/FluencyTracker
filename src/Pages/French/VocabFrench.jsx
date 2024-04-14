import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Vocab from '../../Components/Vocab/Vocab'
import Footer from '../../Components/Footer/Footer'

const VocabFrench = () => {
  return (
    <>
      <Navbar/>
      <Vocab vApi="/frenchVocab" />
    </>
  )
}

export default VocabFrench