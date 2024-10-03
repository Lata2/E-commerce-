import { Modal, Button, Input } from 'antd';
import React, { useState } from 'react';
import './LoginPage.css'
function LoginPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);



    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className='MainLoginPage'>

            <div className='LoginModelContainer'>
                <p>Please Enter Email ID or Phone Number</p>
                <Input className='LoginInputBox' placeholder="Email ID or Phone Number" />
                <div >
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">
                        Keep me signed in
                    </label>
                    <p>By continuing you agree to our Terms of Use & Privacy Policy</p>
                    <Button className='ContinueButton'>Continue</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
