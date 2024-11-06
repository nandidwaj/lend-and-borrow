import ProfileH from './profileH.jsx'
import './profileL.css'
import pro from './profile.png'
import DocumentL from './documents.jsx'

function Dashboard (){
    return(
        <>
    <ProfileH/>
    <div className="w-[1728px] h-[1117px] border border-gray-300 rounded-lg shadow-lg p-8 flex justify-center items-center bg-white">
      <div>
        <h2 className="text-xl font-semibold mb-4">Card Content</h2>
        <p>This is a card with width 1728px and height 1117px.</p>
      </div>
    </div>
    </>
);
}
export default Dashboard