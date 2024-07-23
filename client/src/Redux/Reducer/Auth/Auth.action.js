import axios from "axios";

// Redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./Auth.type";

// redux actions
import { getMySelf, clearUser } from "../User/user.action";

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST", 
            url: `http://localhost:4000/auth/signin`,
            data: {credentials: userData}
        });

        getMySelf();

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
    
        return dispatch({ type: SIGN_IN, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};
export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("zomatoUser", JSON.stringify({ token }));

        getMySelf();
    
        return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signOut = (token) => async (dispatch) => {
    try {
        localStorage.removeItem("zomatoUser");

        clearUser();
        window.location.href = "http://localhost:3000/delivery";
    
        return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST", 
            url: `http://localhost:4000/auth/signup`,
            data: {credentials: userData}
        });

        getMySelf();

        localStorage.setItem("zomatoUser", JSON.stringify({ token: User.data.token }));
    
        return dispatch({ type: SIGN_UP, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

