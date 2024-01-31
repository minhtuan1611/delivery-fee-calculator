import React from 'react'
import * as data from './links.json'
import logo from '../../Asset/Image/logo.png'
import {
  NavBar,
  LogoContainer,
  LogoLink,
  LogoImage,
  LinksContainer,
  LinkButton,
} from '../../styles'

const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links

type Link = {
  label: string
  href: string
}

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <LinksContainer className="links-container">
      {links.map((link: Link) => (
        <LinkButton key={link.href} className="link">
          <a href={link.href}>{link.label}</a>
        </LinkButton>
      ))}
    </LinksContainer>
  )
}

const Nav: React.FC<{}> = () => {
  return (
    <NavBar>
      <LogoContainer>
        <LogoLink href="https://wolt.com/en">
          <LogoImage src={logo} alt="Logo" />
        </LogoLink>
      </LogoContainer>
      <Links links={links} />
    </NavBar>
  )
}

export default Nav
