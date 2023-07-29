const Modal = ({email, handleModal}) => {
    return (
    <div className="modal-background">
        <div className="modal-container">
            <img src="/icon-success.svg"/>
            <h1> Thanks for subscribing! </h1>
            <p>A confirmation email has been sent to <span className="user-email">{email}</span>. 
               Open it and click the button inside to confirm your subscription.</p>
            <button className="dismiss-btn" onClick={handleModal}> Dismiss message</button>
        </div>
        </div> 
     );
}
 
export default Modal;