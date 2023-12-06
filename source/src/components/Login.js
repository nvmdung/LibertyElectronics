
import { Link } from 'react-router-dom';
import '../css/Login.css';
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Lấy thông tin từ Local Storage
        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

        // Kiểm tra xem thông tin nhập vào có trùng khớp với Local Storage không
        if (storedUser && username === storedUser.username && password === storedUser.password) {
            setError('');
            alert('Đăng nhập thành công!');
            // Thực hiện hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng trang
        } else {
            setError('Tên người dùng hoặc mật khẩu không đúng.');
        }
    };

    return (
        <div className='logindev'>
            <div className="login-container">
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Đăng nhập</button>
                    {error && <p>{error}</p>}
                </form>
                <div>Dont have account? <Link to="/register">Register</Link></div>
            </div>
        </div>
    );
}

export default Login;