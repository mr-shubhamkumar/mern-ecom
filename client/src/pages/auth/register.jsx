import CommonForm from '@/components/common/form'
import { registerFormControls } from '@/config'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  username : '',
  email : '',
  password : "",
}
function AuthRegister() {


  function onSubmit(){

  }
  const [formData, setFormData] = useState(initialState)
  return (
  <div className='mx-auto w-full max-w-md space-y-6'>
    <div className="text-center">
      <h1 className='text-3xl font-bold tracking-tighter text-foreground'>Create New Account</h1>
      <p>Already have an Account
        <Link to='/auth/login' className='font-medium ml-2 text-primary hover:underline'>Login</Link>
      </p>
    </div>
    <CommonForm
    fromControls={registerFormControls}
    buttonText={'Sing Up'}
    formData={formData}
    setFormData={setFormData}
    onSubmit={onSubmit}
    />
  </div>
  ) 
}

export default AuthRegister