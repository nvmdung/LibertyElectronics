import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Register.css';
import { Link } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const USER_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,24}$/;

    const handleRegister = (e) => {
        e.preventDefault();

        if (!USER_REGEX.test(username)) {
            setError('Username must have at least one uppercase letter, one lowercase letter and one number. Minimum length is 8 characters');
            setShowModal(true);
            return;
        }

        if (!PWD_REGEX.test(password)) {
            setError('Password must have at least one uppercase letter, one lowercase letter, one number and one special character. Minimum length is 8 characters');
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
            <div className="registertext">Register</div>
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
                        <div>Already have an account? <Link to="/login">Log in</Link></div>

                        {/* Modal */}
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Error</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{error}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Ok
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </form>              
                )}
               
            </div>
        </div>
    );
}

export default Register;