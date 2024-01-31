import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Tooltip = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 6px 0px;
  font-size: 14px;
  color: #333;
  display: none;

  &.open {
    display: block;
  }
`

export const InfoIcon = styled.button`
  position: absolute;
  top: 9px;
  right: 15px;
  background-color: var(--body_background);
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  color: #123048;

  &:hover {
    background-color: #f5f5f5;
  }
`

export const StyledH3 = styled.h3`
  text-align: center;
  color: var(--body_color);
  margin: 20px 0;
`

export const InputIcon = styled(FontAwesomeIcon)`
  margin-top: 7px;
  padding-left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`

export const LogoContainer = styled.div`
  margin-left: 80px;
`

export const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const LogoImage = styled.img`
  height: 2.5rem;
  width: 4rem;
`

export const LinksContainer = styled.div`
  margin-right: 20px;
  display: flex;
  width: 300px;
  justify-content: space-evenly;
`

export const LinkButton = styled.div`
  a {
    text-decoration: none;
    color: rgb(14, 34, 14);

    &:hover {
      color: rgba(14, 34, 14, 0.8);
    }
  }
`

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 350px;
`

export const CalculatorWrapper = styled.div`
  width: 400px;
  height: 450px;
  margin: 5px auto 0;
  border-radius: 16px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-color: var(--body_form);
  transition: height 0.3s ease-in-out;

  &.expanded {
    height: 600px;
  }
`
export const InputField = styled.input`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
  width: 160px;
  padding: 12px;
  border: 1px solid #083457;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`
export const InputFieldDate = styled.input`
  padding: 12px;
  border: 1px solid #083457;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 15px;
  width: 200px;
`
export const InputError = styled.div`
  height: 16px;
  font-size: 14px;
  color: red;
  margin-top: -8px;
`

export const InputLabel = styled.label`
  margin-top: 8.5px;
  left: 10px;
  margin-right: 4px;
  width: 135px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`

export const CalculateButton = styled.button`
  display: block;
  margin: 0 auto;
  transform: translate(-0%, -0%);
  padding: 5px 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  letter-spacing: 2px;
  font-family: 20px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #666;
    border: 1px solid #999;
  }

  &::before,
  &:hover::before,
  &::after,
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    background: var(--button_hover);
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: bottom right;
    transform: scale(0);
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scale(1);
  }

  &::after {
    background: transparent;
    border: 2px solid var(--button_border);
    box-sizing: border-box;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: top left;
    transform: scale(1);
  }

  &:hover::after {
    transform-origin: bottom right;
    transform: scale(0);
  }
`

export const FeeContainer = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border: 1px solid #123048;
  border-radius: 8px;
  box-shadow: rgba(17, 12, 46, 0.1) 0px 3px 6px 0px;
  text-align: center;
  position: relative;
  width: 320px;
  background-color: var(--body_background);
  color: var(body_color);
`
export const FeeText = styled.p`
  font-size: 16px;
  color: var(body_color);
`

export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #555;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
