import Main from "../../components/main";
import Section from "../../components/section";
import Navbar from "../../components/navbar";
import DropDown from "../../components/dropdown";
import TocLayout from "../../components/tocLayout";

import nav from "../../data/nav";

function Homepage() {
    const tocItems = [
        { to: "#" }
    ]

    return (
        <div className="App">
            <title>ホームページ制作 - Nagara Create</title>

            <Navbar
                title={"Nagara Create"}
                links={<DropDown lists={nav} />}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Main>
                <TocLayout

                >

                </TocLayout>
            </Main>
        </div>
    );
}

export default Homepage;
