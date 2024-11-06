import rectangle from '../assets/Rectangle 3.png'
import rocket from '../assets/rocket.jpg'
import bulb from '../assets/bulb.jpg'
import third from '../assets/third.jpg'
import backshape from '../assets/backshape.png'
import Header from '../landing/Header.jsx'
import './aw.css'
function Aboutwrite(){
    return(
      <>
      <Header/>
        <div className='aw'>
            <div id="aw4">
            <img src={rectangle} alt="rectanle" id="aw1"></img>
            <p id="aw2" >WHO WE ARE</p>
            </div>
            <p id="aw3">A money lending and borrowing website serves as a digital platform that connects lenders and borrowers, facilitating financial transactions in a streamlined and efficient manner. These platforms typically offer a range of loan options, from personal loans to business financing, often with competitive interest rates and flexible repayment terms. Users can easily apply for loans online, providing necessary documentation and credit information for quick assessment. Lenders benefit from the ability to diversify their investment portfolios, while borrowers gain access to essential funds without the traditional hassles of bank loans. Additionally, many platforms incorporate user-friendly interfaces, advanced security measures, and customer support to enhance the overall experience, making it easier for individuals and businesses to meet their financial needs.</p>
            <p id="aw12">If unsure about borrowing or repayment plans,borrowers should consider consulting a financial advisor for guidance.Borrowers must comply with all applicable laws and regulations regarding borrowing in their jurisdiction.</p>
<img src={rocket} alt="rocket" id="aw5"></img>
<img src={bulb} alt="bulb" id="aw6"></img>
<img src={third} alt="third" id="aw7"></img>
<p id="aw13" >OUR TARGET</p>
<p id="aw14" >OUR IDEA</p>
<p id="aw15" >OUR RESOLUTION</p>
<p id="aw8">An intuitive platform that simplifies the loan application process for borrowers and lenders alike.</p>
<p id="aw9">Create a platform that connects individual lenders directly with borrowers, fostering community-based lending</p>
<p id="aw10">Ensure clear communication regarding loan terms, fees, and repayment schedules to build trust with users.</p>
<img src={backshape} alt="back" id="aw11"></img>
</div>
</>
    )
}
export default Aboutwrite