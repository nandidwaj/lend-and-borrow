import './signup.css'
import lo from './lo.png'
import go from './google.png'
import fb from './facebook.png'

function Signup()
{
    return(
        <div class="back">
            <img src={lo} class="lo"/>
            <p class="p1">Steps into the real</p>
            <p class="p">Finacial freedom.</p>
            <div class="so">
            <button id="btn1">
                <span>Sign up with Google</span>
            </button>
            <button id="btn2">Sign up with Facebook</button>
            <p class="wel">Create Account</p>
            <p class="user">Username</p>
            <input type="text" class="username"/>
            <p class="email">Email</p>
            <input type="email" class="em"/>
            <p class="pas">Password</p>
            <input type="password" class="password"/>
            <button class="sign">Create Account</button>
            </div>
        </div>
    );
}
export default Signup