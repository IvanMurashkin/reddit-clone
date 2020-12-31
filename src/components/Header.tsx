import React, { ReactElement } from "react"
import { ReactComponent as Logo } from "../assets/img/logo.svg"
import { ReactComponent as LogoTitle } from "../assets/img/logo-title.svg"
import { useToggle } from "../hooks/useToggle"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { LoginState } from "../store/auth/types"
import * as Yup from "yup"

const initialValue: LoginState = {
  userName: "",
  password: "",
}

const Header = (): ReactElement => {
  const [isOpenSignIn, showSignIn, hideSignIn] = useToggle()
  const [isOpenSignUp, showSignUp, hideSignUp] = useToggle()

  const handleSubmit = (): void => {}

  return (
    <header className="header">
      <a className="logo" href="/#">
        <Logo width={32} height={32} />
        <LogoTitle width={57} height={18} />
      </a>
      <div className="auth">
        <button className="auth__btn" onClick={showSignUp}>
          LOG IN
        </button>
        <button className="auth__btn" onClick={showSignIn}>
          SIGN IN
        </button>
      </div>
      {(isOpenSignIn || isOpenSignUp) && (
        <div className="modal-wrapper">
          <div className="modal">
            <Formik
              initialValues={initialValue}
              validationSchema={Yup.object({
                userName: Yup.string()
                  .max(15, "Должно быть не более 15 символов")
                  .required("Обязательное поле"),
                password: Yup.string()
                  .min(8, "Должно быть не менее 8 символов")
                  .required("Обязательное поле"),
              })}
              onSubmit={handleSubmit}
            >
              <Form>
                <label htmlFor="userName">Имя пользователя</label>
                <Field name="userName" type="text" />
                <ErrorMessage name="userName" className="error" />
                <label htmlFor="userName">Пароль</label>
                <Field name="password" type="text" />
                <ErrorMessage name="password" className="error" />
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
