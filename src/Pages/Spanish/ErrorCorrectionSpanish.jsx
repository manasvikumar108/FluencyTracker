import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionSpanish = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="/spanishErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionSpanish