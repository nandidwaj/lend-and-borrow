import rectangle from '../assets/rectangle 3.png'
import rocket from '../assets/rocket.jpg'
import bulb from '../assets/bulb.jpg'
import third from '../assets/third.jpg'
import backshape from '../assets/backshape.png'
import Header from '../landing/Header.jsx'
import './lw.css'
function Lenderwrite(){
    return(
        <>
        <Header/>
        <div className='lw'>
            <div id="lw4">
            <img src={rectangle} alt="rectanle" id="lw1"></img>
            <p id="lw2" >For Lender</p>
            </div>
            <p id="lw3">Require borrowers to provide valid identification and personal information.Use reliable methods to verify borrower identity to prevent fraud.Conduct thorough credit checks, including credit scores and financial history.Evaluate borrowers’ ability to repay based on income, existing debts, and credit history.Clearly outline all loan terms, including interest rates, repayment schedules, and fees.Ensure borrowers understand the implications of loan agreements before signing.Adhere to local, state, and national lending laws and regulations.Stay updated on consumer protection laws relevant to lending practices.</p>
            <p id="lw12">Report any suspicious activity or fraudulent behavior to the appropriate authorities.Maintain compliance with any reporting requirements set forth by regulatory bodies.Keep detailed records of all transactions, communications, and agreements for compliance and transparency.</p>
<img src={rocket} alt="rocket" id="lw5"></img>
<img src={bulb} alt="bulb" id="lw6"></img>
<img src={third} alt="third" id="lw7"></img>
<p id="lw8">Adhere to ethical lending practices, avoiding predatory tactics and ensuring fair treatment for all borrowers</p>
<p id="lw9">Clearly define interest rates, repayment schedules, late fees, and any other associated costs upfront.</p>
<p id="lw10">Conduct thorough evaluations of borrower creditworthiness using credit scores and financial history.</p>
<img src={backshape} alt="back" id="lw11"></img>
</div>
</>
    )
}
export default Lenderwrite