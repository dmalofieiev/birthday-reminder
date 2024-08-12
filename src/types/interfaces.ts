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
  onLogIn: () => void;
}

/**
 * @param {string} type
 * @param {SetStateAction<string | undefined>} setUserData
 * @param {string | undefined} userData
 */
export interface iInputLogin {
  type: string;
  setUserData: Dispatch<SetStateAction<string | undefined>>;
  userData: string | undefined;
}

/**
 * @param {SetStateAction<boolean | undefined>} setOpenSingUpModal
 */
export interface ISingUp {
  openSingUpModal: boolean;
  setOpenSingUpModal: Dispatch<SetStateAction<boolean>>;
}
/**
 * @param {string} name
 * @param {string} surName
 * @param {string} email
 * @param {string} password
 * @param {string} dateOfBirth
 */
export interface IUserData {
  name: string;
  surName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

/**
 * @param {string} email
 * @param {string} password

 */
export interface IUserInput {
  email: string;
  password: string;
}
