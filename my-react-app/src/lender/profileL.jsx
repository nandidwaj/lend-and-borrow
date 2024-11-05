import ProfileH from './profileH.jsx'
import './profileL.css'
import pro from './profile.png'
import DocumentL from './documents.jsx'
const Data ={
    name:'Sharveswar',
    LenderID :'9627268',
    phonenum :'+91 9966295439',
    email:'sharveswar56@gmail.com'
}
function ProfileL()
{
    return(
        <>
        <ProfileH/>
        <div class="profile">
            <img src={pro} class="pro"/>
            <h4 class="name">{Data.name}</h4>
            <p class="lid">Lender ID</p>
            <p class="id">{Data.LenderID}</p>
            <p class="phone">Phone Number</p>
            <p class="pid">{Data.phonenum}</p>
            <p class="emai">Email ID</p>
            <p class="eid">{Data.email}</p>
            <div class="kyc">
                <ul>
                    <li class="lis1"><a href="http://localhost:5173/profileL#">KYC</a></li>
                    <li class="lis2"><a href="http://localhost:5173/documentL#">DOCUMENTS</a></li>
                </ul>
            </div>
            <form>
            <div className="form-container">
            <ul>
                <li class="details">KYC DETAILS</li>
                <li class="father">Father's Name(as on PAN)</li>
                <li><input type="text" class="fa"/></li>
                <li class="pan">PAN</li>
                <li><input type="text" class="pa"/></li>
                <li class="gender">Gender</li>
                <select class="ge">
                    <option value="male">Male</option>
                    <option value="female">Female</option>   
                    <option value="other">Other</option>
                </select>
                <li class="dob">Date of Birth</li>
                <li><input type="text" class="do"/></li>
                <li class="add">Address Details</li>
                <li class="pa1">Permanent Address Street 1</li>
                <li><input type="text" class="p1"/></li>
                <li class="city">City</li>
                <li><input type="text" class="ci"/></li>
                <li class="nd">Nominee Details</li>
                <li class="nname">Nominee Name</li>
                <li><input type="text" class="nn"/></li>
                <li class="nphone">Nominee Phone Number</li>
                <li><input type="number" class="np"/></li>
                <li class="bank">Bank Account Details</li>
                <li class="bname">Bank Name</li>
                <li><input type="text" class="bn"/></li>
                <li class="anum">Account Number</li>
                <li><input type="number" class="an"/></li>
                <li class="brna">Branch Name</li>
                <li><input type="text" class="br"/></li>
                <li class="ed">Employment Details</li>
                <li class="etype">Employment Type</li>
                <select class="et">
                    <option>Salaried</option>
                    <option>Self Employed</option>   
                    <option>Other</option>
                </select>
            </ul>
            </div>
            <div className="form-container">
            <ul>
            <li class="pa2">Permanent Address Street 2</li>
            <li><input type="text" class="p2"/></li>
            <li class="pin">PIN</li>
            <li><input type="number" class="pi"/></li>
            <li class="nrelation">Nominee Relation</li>
            <li><input type="text" class="nr"/></li>
            <li class="atype">Account Type</li>
            <li><input type="text" class="at"/></li>
            <li class="ifsc">IFSC Code</li>
            <li><input type="text" class="if"/></li>
            <li class="aname">Account Holder Name</li>
            <li><input type="text" class="aa"/></li>
            <li class="moni">Monthly Income</li>
            <li><input type="text" class="mo"/></li>
            <li><button type="submit" class="sub">SUBMIT</button></li>
            </ul>
            </div>
            </form>
        </div>
      
        </>
    );
}
export default ProfileL