import Navbar from "../components/navbar";
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
                links={[
                    { to: "/", content: "TOP" },
                    { to: "/plans", content: "Service" },
                    { to: "/contact", content: "Contact" }
                ]}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Header>
                作成中
            </Header>
        </div>
    );
}

export default Plans;