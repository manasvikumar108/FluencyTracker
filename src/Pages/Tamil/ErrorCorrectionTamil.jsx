import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'

const ErrorCorrectionTamil = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="/tamilErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionTamil