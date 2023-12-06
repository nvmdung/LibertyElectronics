import { useState } from "react";
import '../css/Register.css';
import { Link } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,24}$/;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if (!USER_REGEX.test(username)) {
            setError('Not valid username');
            setShowModal(true);
            return;
        }

        if (!PWD_REGEX.test(password)) {
            setError('Invalid password');
            setShowModal(true);
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setShowModal(true);
            return;
        }
        
        // Dữ liệu hợp lệ, lưu vào Local Storage
        const user = {
            username,
            password
        };

        localStorage.setItem('registeredUser', JSON.stringify(user));
        setRegistered(true);
    };

    return (
        <div className="devregister">
            <div className="register-container">
                {registered ? (
                    <p><Link to="/login">Go to login</Link> Success register!</p>
                ) : (
                    <form onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button type="submit">Register</button>
                        {showModal && <div className="modal">Error: {error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;