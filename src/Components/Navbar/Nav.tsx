import React from 'react'
import '../../App.css'
import * as data from './links.json'
import logo from '../../Asset/Image/logo.png'
import { NavBar } from '../../styles'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type Link = {
  label: string
  href: string
}

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="links-container">
      {links.map((link: Link) => (
        <div key={link.href} className="link">
          <a href={link.href}>{link.label}</a>
        </div>
      ))}
    </div>
  )
}

const Nav: React.FC<{}> = () => {
  return (
    <NavBar>
      <div className="logo-container">
        <a href="https://wolt.com/en">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <Links links={links} />
    </NavBar>
  )
}

export default Nav
