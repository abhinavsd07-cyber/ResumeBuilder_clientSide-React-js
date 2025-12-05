import { Button, Card, Typography } from '@mui/material'
import { FaFileAlt } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";

import React from 'react'
import { Link } from 'react-router-dom';

const ResumeGenerator = () => {
  return (
    <>
      <Typography variant='h5' sx={{ mt: '65px', mb: '40px', textAlign: 'center', fontWeight: 'bold' }}> Create a job winning resume in minutes</Typography>

      <div className='d-flex justify-content-evenly m-4'>
        <Card variant='outlined' className='w-50 mx-5 shadow'>
          <div className="text-center px-4 py-3 ">
            <FaFileAlt className='text-primary fs-3' />
            <Typography variant='h6'> Add your information</Typography>
            <Typography variant='p'>Add pre written example to each section</Typography>
            <Typography variant='h6' className='m-3'>Step 1</Typography>
          </div>
        </Card>

        <Card variant='outlined' className='w-50 mx-5 shadow'>
          <div className="text-center px-4 py-3 ">
            <LiaFileDownloadSolid className='text-danger fs-2' />
            <Typography variant='h6'>Download your resume</Typography>
            <Typography variant='p'>Download and start applying</Typography>
            <Typography variant='h6' className='m-3'>Step 2</Typography>
          </div>
        </Card>
      </div>
      <div className='text-center m-3'>
        <Link to={'/form'}>
          <Button variant="contained">Let's Start</Button>
        </Link>
      </div>
    </>
  )
}

export default ResumeGenerator