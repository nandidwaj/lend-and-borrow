import { useState } from 'react';
import './profileH.css'
function ProfileHeader()
{
    const [action,setAction] = useState("Browse Options")
    return(
        <>
        <nav>
        {action==="Profile"?<div></div>:<div class="logo">Profile</div>}
        {action==="Browse Options"?<div></div>:<div class="logo">Browse Options</div>}
         
        <ul class="menu">
        <li  class="menubar" onClick={ShowSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
                <li class="hideOnMobile"><a href="#">Home</a></li>
                <li class="hideOnMobile"><a href="#">Browse options</a></li>
                <li class="hideOnMobile"><a href="http://localhost:5173/profileL#">Profile</a></li>
            </ul>
            <div class="search">
                <form>
                    <input type="text" placeholder='Search....'/>
                    <button type="submit">Go</button>
                </form>
            </div>
            <ul class="sidebar">
            <li onClick={HideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Browse options</a></li>
                <li><a href="#">Wallet</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
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