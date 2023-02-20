import loaded from "@loadable/component";

//reducing the bundle size by spliting the code size

export const Header = loaded(() => import("../LandingPage/Header/Header"));
export const Homescreen = loaded(() => import("../HomeScreen"));
export const Signup = loaded(() => import("../Auth/Signup"));
export const SignIn = loaded(() => import("../Auth/SignIn"));
export const ForgetPass = loaded(() => import("../Auth/ForgetPass"));
export const ResetPass = loaded(() => import("../Auth/ResetPass"));
export const AfterRegister = loaded(() => import("../Auth/AfterRegister"));
