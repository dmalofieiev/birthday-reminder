import { Dispatch, SetStateAction } from "react";


/**
 * @param {string} login
 * @param {string} password
 */
export interface Auth {
  login: string;
  password: string;
}



export interface IButtonProps {
  onSave: () => void
}

/**
 * @param {string} type
 * @param {SetStateAction<string | undefined>} setUserData
 * @param {string | undefined} userData
 */
export interface iInputLogin {
  type: string;
  setUserData: Dispatch<SetStateAction<string | undefined>>
  userData: string | undefined;
}