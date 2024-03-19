import React, { useState } from 'react';
import axiosInstance from '../../../axios';
import './RegForm.css';
import House from '../../../assets/Images/house.jpg';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccess(null);

        try {
            const res = await axiosInstance.post('/users/register/', formData);

            if (res.status === 201) {
                setSuccess('Account Created Successfully.');
                navigate('/redirect');
            }
        } catch (error) {
            setError('Failed to create Account.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <div className='full'>
            <div className='side-img'>
                <img src={House} alt='Login side image' />
            </div>
            <div className='reg-container'>
                <p className='logo' onClick={() => navigate('/')}>Makao</p>
                <form onSubmit={handleSignUp} className='reg-form'>
                    <h6 className='signup-title'>Sign Up</h6>
                    {step === 1 &&
                        <div>
                            <input
                                type="text"
                                name='first_name'
                                placeholder='First Name'
                                value={formData.first_name}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='last_name'
                                placeholder='Last Name'
                                value={formData.last_name}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <button className="submit-btn" onClick={handleNext}>Continue</button>
                            <p className='disclaimer'>Already Have an account? <a href='/login'>Login</a></p>
                        </div>
                    }
                    {step === 2 &&
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                value={formData.email}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='phone_number'
                                placeholder='+254700 000000'
                                value={formData.phone_number}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <button className="submit-btn" onClick={handleNext}>Continue</button>
                            <button className='prev-btn' onClick={handlePrev}>Previous</button>
                        </div>
                    }
                    {step === 3 &&
                        <div>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                name='password'
                                placeholder='Confirm Password'
                                value={formData.confirm_password}
                                className="input-field"
                                onChange={handleInputChange}
                            />
                            <button className="submit-btn" type='submit' disabled={submitting}>{submitting ? "Setting things up..." : 'Finish'}</button>
                            <button className='prev-btn' onClick={handlePrev} disabled={submitting}>Previous</button>
                        </div>
                    }
                </form>
                {error && <p className='error-msg'>{error}</p>}
            </div>
        </div>
    );
}

export default RegistrationForm;
