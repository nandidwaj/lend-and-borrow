import rectangle from '../assets/rectangle 3.png'
import rocket from '../assets/rocket.jpg'
import bulb from '../assets/bulb.jpg'
import third from '../assets/third.jpg'
import backshape from '../assets/backshape.png'
import Header from '../landing/Header.jsx'
import './bw.css'
function Borrowwrite(){
    return(
        <>
        <Header/>
        <div className='Bw'>
            <div id="bw4">
            <img src={rectangle} alt="rectanle" id="bw1"></img>
            <p id="bw2" >For Borrower</p>
            </div>
            <p id="bw3">Borrowers should only request amounts they can realistically repay, avoiding overextending their financial obligations. If there are any changes in financial circumstances or difficulties in making payments, borrowers must communicate promptly with the lending platform to discuss options.Maintain Confidentiality: Borrowers must keep their account credentials and personal information secure, avoiding sharing sensitive details with others.Borrowers should be aware of any additional fees associated with the loan, including late payment fees, and factor these into their financial planning.Borrowers are encouraged to avoid taking out multiple loans simultaneously, as this can lead to financial strain and difficulty in repayment.</p>
            <p id="bw12">If unsure about borrowing or repayment plans,borrowers should consider consulting a financial advisor for guidance.Borrowers must comply with all applicable laws and regulations regarding borrowing in their jurisdiction.</p>
<img src={rocket} alt="rocket" id="bw5"></img>
<img src={bulb} alt="bulb" id="bw6"></img>
<img src={third} alt="third" id="bw7"></img>
<p id="bw8">Borrowers must submit truthful and complete personal and financial information during the application process.</p>
<p id="bw9">Borrowers should thoroughly review and understand the terms of the loan, including interest rates, fees, and repayment schedules, before accepting any offers.</p>
<p id="bw10">Borrowers are expected to make repayments on time according to the agreed schedule to avoid penalties and maintain a good credit rating.</p>
<img src={backshape} alt="back" id="bw11"></img>
</div></>
    )
}
export default Borrowwrite