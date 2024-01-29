import styled from 'styled-components'
export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 350px;
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
