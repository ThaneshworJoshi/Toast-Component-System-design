import React from 'react'
import './notification.css';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai'

const iconStyle = { marginRight: '10px' }
const icons = {
    success: <AiOutlineCheckCircle style={iconStyle} />,
    error: <AiOutlineCloseCircle style={iconStyle} />,
    info: <AiOutlineInfoCircle style={iconStyle} />,
    warning: <AiOutlineWarning style={iconStyle} />

}

const Notification = ({ type = 'info', message, onClose }) => {
    return (
        <div className={`notification ${type}`}>
            {/* icon */}
            {icons[type]}
            {message}
            {/* close button */}
            <AiOutlineClose color='white' onClick={onClose} className='closeBtn' />
        </div>
    )
}

export default Notification
