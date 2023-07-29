import { useState } from 'react'
import Modal from './components/Modal'
import Content from './components/Content'



function App() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const [openModal, setOpenModal] = useState(false);

  function handleEmailChange(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // setIsButtonDisabled(/\S+@\S+\.\S+/.test(inputValue));

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(emailValue)) {
      setError('Valid email required');
    } else {
      setError('')
    } 
    
    setIsButtonDisabled(regex.test(emailValue));
  
  }
 
  function handleSubmit(e){
    e.preventDefault()
  }


  function handleModal() {
    setOpenModal(!openModal)
  }


  return (
     <main className="container">
  
      <Content  
          email={email} 
          error={error} 
          handleEmailChange={handleEmailChange} 
          handleModal={handleModal} 
          handleSubmit={handleSubmit}
          isButtonDisabled={isButtonDisabled}
       />
      
      { openModal && <Modal handleModal={handleModal} email={email}/> }
     </main>
  )
}

export default App
