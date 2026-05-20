import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import HStack from "../components/hstack";
import Line from "../components/line";
import Main from "../components/main";
import Card from "../components/card";

function Plans() {
    return (
        <div className="App">
            <Navbar
                title={"Nagara Create"}
                center={
                    <>
                        <a href="#about">概要</a>
                        <a href="#features">特徴</a>
                        <a href="#plans">プラン</a>
                        <a href="#order">申し込みの流れ</a>
                        <a href="#support">サポート</a>
                    </>
                }
                links={
                    <>
                        <NavLink to="/">TOP</NavLink>
                        <NavLink to="/plans">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </>
                }
                css={{
                    backgroundColor: "black"
                }}
            />

            
        </div>
    );
}

export default Plans;