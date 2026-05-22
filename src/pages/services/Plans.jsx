import Navbar from "../../components/navbar";
import { NavLink } from "react-router-dom";
import Section from "../../components/section";
import Main from "../../components/main";

function Plans() {
    return (
        <div className="App">
            <Navbar
                title={"Nagara Create"}
                center={
                    <>
                        <a href="#features">特徴</a>
                        <a href="#plans">プラン</a>
                        <a href="#order">制作の流れ</a>
                        <a href="#support">サポート</a>
                    </>
                }
                links={
                    <>
                        <NavLink to="/">TOP</NavLink>
                        <NavLink to="/services/plans">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </>
                }
                css={{
                    backgroundColor: "black"
                }}
            />

            <Main>
                <Section title="プラン">

                </Section>
            </Main>
        </div>
    );
}

export default Plans;
