import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionEnglish = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="/englishErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionEnglish