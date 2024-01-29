import styled from 'styled-components'

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`

const CalculateButton = styled.button`
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
const StyledInputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 350px;
`
