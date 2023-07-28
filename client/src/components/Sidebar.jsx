import '../styles/Sidebar.css'
import img from '../assets/images/logo.png'
import {BsPersonCircle,BsFillChatLeftDotsFill,BsLink,BsShieldFillCheck} from 'react-icons/bs'
import {HiDocumentText,HiOutlineLogout} from 'react-icons/hi'
import {MdOutlineGroups} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className="sidenav">
      <div className='divLogo'>
        <img className="logo" src={img} alt="logo"/>
      </div>
      <div className='divLinks'>
        <a className='links' href="#"><BsPersonCircle/>PROFILE</a>
        <a className='links' href="#"><BsFillChatLeftDotsFill/>DISCUSSION</a>
        <a className='links' href="#"><BsLink/>COLLABORATE</a>
        <a className='links' href="#"><HiDocumentText/>PROJECTS</a>
        <a className='links' href="#"><MdOutlineGroups/>SKILL BARTERING</a>
        <a className='links' href="#"><BsShieldFillCheck/>BUY PREMIUM</a>
        <a className='links' href="#"><HiOutlineLogout/>LOGOUT</a>
      </div>
    </div>
  )
}