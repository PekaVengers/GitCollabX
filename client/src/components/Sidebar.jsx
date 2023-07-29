import '../styles/Sidebar.css'
import img from '../assets/images/logo.png'
import {BsPersonCircle,BsFillChatLeftDotsFill,BsLink,BsShieldFillCheck} from 'react-icons/bs'
import {HiDocumentText} from 'react-icons/hi'
import {MdOutlineGroups} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'

export default function Sidebar() {
  return (
    <div className="sidenav">
      <div className='divLogo'>
        <img className="logo" src={img} alt="logo"/>
      </div>
      <div className='divLinks'>
        <NavLink className='links' to="/profile"><BsPersonCircle/>PROFILE</NavLink>
        <NavLink className='links' to="/discussion"><BsFillChatLeftDotsFill/>DISCUSSION</NavLink>
        <NavLink className='links' to="/collaborate"><BsLink/>COLLABORATE</NavLink>
        <NavLink className='links' to="/projects"><HiDocumentText/>PROJECTS</NavLink>
        <NavLink className='links' to="/"><MdOutlineGroups/>SKILL BARTERING</NavLink>
        <NavLink className='links' to="/"><BsShieldFillCheck/>BUY PREMIUM</NavLink>
        <LogoutButton />
      </div>
    </div>
  )
}