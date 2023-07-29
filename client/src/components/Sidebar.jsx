import '../styles/Sidebar.css'
import img from '../assets/images/logo.png'
import {BsPersonCircle,BsFillChatLeftDotsFill,BsLink,BsShieldFillCheck} from 'react-icons/bs'
import {HiDocumentText} from 'react-icons/hi'
import {MdOutlineGroups} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <NavLink to="/" className='divLogo'>
        <img className="logo" src={img} alt="logo"/>
      </NavLink>
      <div className='sidebar-nav-links'>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/profile"><BsPersonCircle className="sidebar-nav-icon"/> <span>PROFILE</span></NavLink>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/discussion"><BsFillChatLeftDotsFill className="sidebar-nav-icon"/> <span>DISCUSSION</span></NavLink>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/collaborate"><BsLink className="sidebar-nav-icon"/> <span>COLLABORATE</span></NavLink>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/projects"><HiDocumentText className="sidebar-nav-icon"/> <span>PROJECTS</span></NavLink>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/"><MdOutlineGroups className="sidebar-nav-icon"/> <span>SKILL BARTERING</span></NavLink>
        <NavLink style={({isActive}) => isActive ? ({textDecoration: "none",}) : ({})} className={`sidebar-nav-link`} to="/"><BsShieldFillCheck className="sidebar-nav-icon"/> <span>BUY PREMIUM</span></NavLink>
        <LogoutButton />
      </div>
    </div>
  )
}