import React, { ReactElement } from "react"
import { ReactComponent as Logo } from "../assets/img/logo.svg"
import { ReactComponent as LogoTitle } from "../assets/img/logo-title.svg"
import { useToggle } from "../hooks/useToggle"

const Header = (): ReactElement => {
  const [isOpenSignIn, showSignIn, hideSignIn] = useToggle()
  const [isOpenSignUp, showSignUp, hideSignUp] = useToggle()

  return (
    <header className="header">
      <a className="logo" href="/#">
        <Logo width={32} height={32} />
        <LogoTitle width={57} height={18} />
      </a>
      <div className="auth">
        <button className="auth__sign-up-btn" onClick={showSignUp}>
          LOG IN
        </button>
        <button className="auth__sign-in-btn" onClick={showSignIn}>
          SIGN IN
        </button>
      </div>
      <div className="modal-wrapper">
        <div className="modal"></div>
      </div>
    </header>
  )
}

export default Header
