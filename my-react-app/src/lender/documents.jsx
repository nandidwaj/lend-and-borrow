import ProfileH from './profileH.jsx'
import './documents.css'
import pro from './profile.png'
function DocumentsL()
{
    return(
        <>
        <ProfileH/>
        <div class="docu">
        <img src={pro} class="pro"/>
            <h4 class="name">Sharveswar</h4>
            <p class="lid">Lender ID</p>
            <p class="id">9627268</p>
            <p class="phone">Phone Number</p>
            <p class="pid">+91 9966295439</p>
            <p class="emai">Email ID</p>
            <p class="eid">sharveswar56@gmail.com</p>
            <div class="kyc">
                <ul>
                    <li class="lis1"><a href="http://localhost:5173/profileL#">KYC</a></li>
                    <li class="lis2"><a href="http://localhost:5173/documentL#">DOCUMENTS</a></li>
                </ul>
            </div>
            <ul>
                <li class="ud">Upload Documents</li>
                <li class="a">PAN:</li>
                <li><input type="file" class="p3"/></li>
                <li class="bpass">Bank Passbook:</li>
                <li><input type="file" class="bp"/></li>
                <li class="aadhar">Aadhar Proof:</li>
                <li><input type="file" class="ap"/></li>
            </ul>
        </div>
        </>
    );
}
export default DocumentsL