import { createAction } from "@reduxjs/toolkit";

export const registerPending = createAction("auth/registerPending");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const loginPending = createAction("auth/loginPending");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logoutPending = createAction("auth/logoutPending");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");
