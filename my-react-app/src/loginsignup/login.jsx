import styled from 'styled-components'
import './login.css'
import lo from './lo.png'
import go from './google.png'
import fb from './facebook.png'

function Login()
{
    return(
        <div class="back">
            <img src={lo} class="lo"/>
            <p class="p1">Steps into the real</p>
            <p class="p">Finacial freedom.</p>
            <div class="so">
            <button id="btn1">
                <span>Continue with Google</span>
            </button>
            <button id="btn2">Continue with Facebook</button>
            <p class="wel">Welcome Back!</p>
            <p class="user">Username</p>
            <input type="text" class="username"/>
            <p class="pas1">Password</p>
            <input type="password" class="password1"/>
            <input type="radio" class="rem"/>
            <p class="remember">Remember me</p>
            <button class="forgot">Forgot Password?</button>
            <p class="dont">Don't have a account?</p>
            <button class="signup">Signup</button>
            <button class="sign">Sign In</button>
            </div>
        </div>
        
    );
}
export default Login