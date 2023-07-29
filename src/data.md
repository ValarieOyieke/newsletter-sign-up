 const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const[openModal, setOpenModal] = useState(false)
  
  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);
  
    // Email validation logic
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  }
  
  function handleSubmit(){
    e.preventDefault()
  }

  function handleModal() {
    setOpenModal(!openModal)
  }

  return (
     <main className="container">
  
        <section className="content">
            <div>
                <picture>
                    <source srcset="/illustration-sign-up-desktop.svg" media="(min-width: 768px)" />
                    <source srcset="/illustration-sign-up-mobile.svg"  media="(max-width: 768px)" /> 
                    <img class="desktop-img" src="/illustration-sign-up-desktop.svg" alt="a newsletter illustration" />
            </picture>
            </div>

            <div className="mainContent">
                <h1> Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              
              <input
                  type="email"
                  placeholder="email@company.com"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={emailError ? 'invalid' : ''}
                 
              />
              {emailError && <div className="error">{emailError}</div>}
              <button className="subscribe-btn" onClick={handleModal}>Subscribe to monthly newsletter</button>
         </form>

            </div>
        </section>

      { openModal && <Modal handleModal={handleModal}/> }
     </main>