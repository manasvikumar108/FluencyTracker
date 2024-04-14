import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionJapanese = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="/japaneseErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionJapanese