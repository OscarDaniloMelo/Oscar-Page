import React from 'react'
import ReactDOM from 'react-dom'
import '../Components/Styles/Modal.css'

function Modal (props){
    if (!props.isOpen) {
        return null
    }
    return ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal_container">
                    <button onClick={props.onClose} className="Modal_close-button">
                        X
                    </button>
                    {props.children}{/*nos ayudará a diferenciar en un futuro de que es este modal*/}
                </div>
            </div>, 
            document.getElementById('modal')
        )
}

export default Modal