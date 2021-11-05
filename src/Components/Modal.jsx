import React from 'react'
import './Modal.css'

const Modal = () => {
    return ( 
        <div>
            <div className="modal is-open"> 
            <div className="modal-container">
                <button className="modal-close">X</button>

            </div>
        </div>
        </div>
     );
}
 
export default Modal;