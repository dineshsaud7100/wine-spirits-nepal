import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AgeVerification from "@/components/common/AgeVerification";
import HomePage from "@/components/home/HomePage";
export default function Home() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(AgeVerification, {}),
            /*#__PURE__*/ _jsx(Navbar, {}),
            /*#__PURE__*/ _jsx(HomePage, {}),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
}
