import './style.css'
import Header from './Header.jsx'
import la from './images/l&b.png'
function Landing()
{
    return(
        <landing>
            <Header/>      
        <h1 class="sy">Start Your</h1>
        <h1 class="y">Your Journey</h1>
        <button class="lender">Continue as a lender</button>
        <button class="borrower">Continue as a borrower</button>
        <img src={la} />
        <div class="lan">
            <p class="box">We connect people, offering transparent  financial solutions to help individuals achieve their goals.</p>
        </div>
        <div class="la">
            <p class="box">We facilitate personal loans, small business financing, and other types of credit.</p>
        </div>
        </landing>
    )
}
export default Landing