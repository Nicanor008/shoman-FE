import { createContext } from "react";

export type IUserRoles = "USER" | "MENTOR" | "MENTEE" | "ADMIN";

export type UserActions = "SIGNIN_USER" | "UPDATE_USER" | "SIGNOUT_USER";

export interface IUserActions {
  type: UserActions;
  payload?: IUserState;
}

export interface IUser {
  id?: string;
  username?: string;
  email?: string;
  role?: IUserRoles;
}

export interface IUserState {
  authenticated: boolean;
  token: string;
  user: IUser;
}

export interface IUserProps {
  state: IUserState;
  dispatch(type: IUserActions, payload?: IUser): void;
}

declare function UserReducer(state: IUserState, action: IUserActions): IUserState;

declare const UserContext = createContext<Partial<IUserProps>>({});

declare function UserContextProvider({ children }): JSX.Element;
