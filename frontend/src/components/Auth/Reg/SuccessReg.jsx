import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RegForm.css'

function SuccessRegistration() {
    const [countdown, setCountDown] = useState(5);
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountDown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);
    
    useEffect(() => {
        if (countdown === 0) {
            navigate('/login');
        }
    }, [countdown, navigate]);

    return (
        <div className='redirect'>
            <div className="logo">Makao</div>
            <p>Account Successfully created. You will be Redirected to the Login page in {countdown} seconds.</p>
            <button className='btn' onClick={() => navigate('/login')}>Login Right Now</button>
        </div>
    )
}

export default SuccessRegistration;
