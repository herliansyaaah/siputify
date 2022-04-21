import "./login.css";

const Login = ({ redirectUrl, logo }) => {
	return (
		<div className='container-welcome'>
			<div className='welcome'>
				<img src={logo} alt='Spotify Logo' />
				<h1>&#x1F44B; Hy welcome to Spotify</h1>
				<a href={redirectUrl} className='btn-primary'>
					Login
				</a>
			</div>
		</div>
	);
};

export default Login;