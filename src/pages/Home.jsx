import { useState } from "react";

import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import HStack from "../components/hstack";

function Home() {
    return (
        <div className="App">
            <Navbar
                title={"WebSite"}
                links={[
                    { to: "/", content: "TOP" },
                    { to: "/contact", content: "Contact" }
                ]}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Header image={"https://picsum.photos/1000/300"}>
                bluecode, Lifestyle developer.
            </Header>
            <main>
                <Section title={"最新情報"}>
                    <p>最新情報です</p>
                    <p>おいうぎさおうえｒくぃｇｒｈごいうせがｓぢｆｇｓｆげｔｒぎｌｓｇせ</p>
                    <p>あいうｓｈｆどいすｄふぁ９れぽげｔｒｐらういぇｓｔりおげｐけｈｙｖｗｇｆｊｋｌ</p>
                    <p>そいうｒｄｇふぉうぇｒｊｇｊｗｒと８ういｇｈｇ８えう５６ｊ</p>
                    <p>おいえｒｗｊｇｗりとｇｋｐｌｈｔｋｗｒかｗｔｒｈｐ</p>
                </Section>

                <Section>
                    <HStack justify_content={"space-around"}
                            align_items={"center"}
                    >
                        <img src="https://kinchouen.co.jp/wp-content/uploads/index-menu-01.jpg" alt="緊張えん" style={{ width: 40+"%", height: "auto" }} />
                        <div>
                            <h2 style={{ fontSize: 1.875+"rem" }}>みずまんじゅう</h2>
                            <hr />
                            <a href="https://kinchouen.co.jp/mizumanju/">水まんじゅうについて</a>
                        </div>
                    </HStack>
                </Section>
            </main>

            <Footer
                author={"bluecode"}
            />
        </div>
    );
}

export default Home;