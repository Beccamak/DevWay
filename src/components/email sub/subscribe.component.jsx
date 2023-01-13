import './subscribe.component.css';
import Button from '../button/button.component';
import { useState } from 'react';

const EmailInput = () => {
    const [value, setValue] = useState("")
    return(
        <div className='email-stn'>
            <input className='email-input' value={value} onChange={(event) => setValue(event.target.value)} placeholder="Enter your email"/>
            <Button children="subscribe" />
            </div>
    )
}

export default EmailInput;