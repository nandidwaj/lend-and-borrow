import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './profileH.css'
function ProfileHeader()
{
    const [action,setAction] = useState("")
    const navigate=useNavigate()
    console.log(action,"action");
    const pagenavigating=(value)=>{
            setAction(value)
            navigate('/dashboard')
    }
    return(
        <>
        <nav>
        <div class="logo">{action}</div>
        <ul class="menu">
        <li  class="menubar" onClick={ShowSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
        <li class="hideOnMobile"><a href="#">Home</a></li>
                <Link to ="/browse" class="hideOnMobile" onClick={() => setAction("Browse Options")}><a href="#">Browse options</a></Link>
                <Link to ="/profileL" class="hideOnMobile" onClick={() => setAction("Profile")}><a href="">Profile</a></Link>
            </ul>
            <div class="search">
                <form>
                    <input type="text" placeholder='Search....'/>
                    <button type="submit">Go</button>
                </form>
            </div>
            <ul class="sidebar">
            <li onClick={HideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li onClick={() => pagenavigating("Dashboard")}> <a href="#">Dashboard</a> </li>
                <li><Link to ="/browse" onClick={() => setAction("Browse Options")}><a href="#">Browse Options</a></Link></li>
                <li><Link to ="/wallet" onClick={() => setAction("Wallet")}><a href="#">Wallet</a></Link></li>    
                <li><Link to ="/profileL" onClick={() => setAction("Profile")}><a href="#">Profile</a></Link></li>
                <li><Link to ="/" onClick={() => setAction("Home")}><a href="#">Logout</a></Link></li>
            </ul>
        </nav>
        </>
    );
}
function ShowSidebar() {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function HideSidebar() {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}
export default ProfileHeader