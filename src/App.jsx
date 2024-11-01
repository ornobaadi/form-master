
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {
  // const handleSignUpSubmit = data => {
  //   console.log('Sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('Update profile', data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile} 
      submitBtnText={'Update'}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
