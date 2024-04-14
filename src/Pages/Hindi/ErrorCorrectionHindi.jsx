import React from 'react'
import ErrorCorrection from '../../Components/ErrorCorrection/ErrorCorrection'
import Navbar from '../../Components/Navbar/Navbar'


const ErrorCorrectionHindi = () => {
  return (
    <>
      <Navbar/>
      <ErrorCorrection ecApi="/hindiErrorCorrection" />
    </>
  )
}

export default ErrorCorrectionHindi