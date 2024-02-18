import { ReactNode } from "react"

export type USERLIST =   {
    email:  string,
    password:  string,
    token: string,
    flag: number
}

export type LoginProps = {
    isOpen: boolean
  }

  export type SinginProps = {
    isOpen: boolean
  }


  export type UserUsingProviderProps = {
    children: ReactNode
  }
  