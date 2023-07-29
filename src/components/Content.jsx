import img from '/icon-list.svg'


const Content = ({ email, error, handleEmailChange, handleModal, handleSubmit, isButtonDisabled }) =>{

   

    return (  
        <section className="content">
            <picture >
                <source srcset="/illustration-sign-up-desktop.svg" media="(min-width: 768px)" />
                <source srcset="/illustration-sign-up-mobile.svg"  media="(max-width: 768px)" /> 
                <img class="desktop-img" src="/illustration-sign-up-desktop.svg" alt="a newsletter illustration" />
            </picture>
    

        <div className="mainContent">
            <h1 className="title"> Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="update-list">
              <div className="list">
               <img src={img}/>
               <p>Product discovery and building what matters</p>
               </div>

               <div className="list">
                <img src={img}/>
                <p>Measuring to ensure updates are a success</p>
                </div>

                <div className="list">
                <img src={img}/>
                <p>And much more!</p>
                </div>
            </div >

            <form onSubmit={handleSubmit}>
            
             <label>Email address</label>
             {error && <div className="error">{error}</div>}
            
          {/* <label htmlFor="email">Email address</label> */}
          
          <input
              type="email"
              placeholder="email@company.com"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={error ? 'invalid' : ''}
          />
           {/* {error && <div className="error">{error}</div>} */}
          <button className="subscribe-btn" onClick={handleModal} disabled={!isButtonDisabled}>Subscribe to monthly newsletter</button>
     </form>

        </div>
    </section>
    );
    }
 
export default Content;
