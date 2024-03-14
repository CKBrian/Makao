import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Email and Password are both required');
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setError('');
            // Here you would typically handle login success, such as redirecting the user or storing login state
        }, 1000);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {error && <p>{error}</p>}
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                </div>
            </form>
            <p>&copy;2024 Makao. All rights reserved.</p>
        </div>
    );
}

export default Login;
