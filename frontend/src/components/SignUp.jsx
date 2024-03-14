import React, { useState } from 'react';

function SignUp() {
    const [Step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleNextStep = () => {
        setStep(Step + 1);
    };

    const handlePrevStep = () => {
        setStep(Step - 1);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
    };

    return (
        <div>
            <h5>SignUp</h5>
            <form onSubmit={handleSignUp}>
                {Step === 1 && (
                    <div>
                        <input
                            name='first_name'
                            placeholder='First name'
                            value={formData.first_name}
                            onChange={handleInputChange}
                        />
                        <input
                            name='last_name'
                            placeholder='Last name'
                            value={formData.last_name}
                            onChange={handleInputChange}
                        />
                        <input
                            name='phone_number'
                            placeholder='Phone Number'
                            value={formData.phone_number}
                            onChange={handleInputChange}
                        />
                        <button type='button' onClick={handleNextStep}>Continue</button>
                    </div>
                )}
                {Step === 2 && (
                    <div>
                        <input
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            name='confirm_password'
                            type='password'
                            placeholder='Confirm Password'
                            value={formData.confirm_password}
                            onChange={handleInputChange}
                        />
                        <div>
                            <p>Password must be at least 8 characters long</p>
                        </div>
                        <button type='submit' disabled={loading}>{loading ? 'Please Wait' : 'SignUp'}</button>
                        <button type='button' onClick={handlePrevStep}>Previous</button>
                    </div>
                )}
            </form>
            <p>Already have an account?<a href='#login'>Login</a></p>
        </div>
    );
}

export default SignUp;
