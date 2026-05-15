import { useState } from "react";

import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Section from "../components/section";
import HStack from "../components/hstack";
import Line from "../components/line";
import Main from "../components/main";
import Card from "../components/card";

function Home() {
    return (
        <div className="App">
            <Navbar
                title={"Nagara Create"}
                links={[
                    { to: "/", content: "TOP" },
                    { to: "/contact", content: "Contact" }
                ]}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Header image={"https://picsum.photos/1000/300"}>
                We will make America great again
            </Header>
            <Main>
                <Section title={"最新情報"}>
                    <p>準備中</p>
                </Section>

                <Line />

                <Section title={"プラン"}>
                    <HStack justify_content={"center"}
                            align_items={"center"}
                    >
                        <Card
                            title={"ライト"}
                            link={{ to: "https://kinchouen.co.jp/mizumanju/", text: "詳細をみる" }}
                        >
                            
                        </Card>

                        <Card
                            title={"ベーシック"}
                            link={{ to: "https://kinchouen.co.jp/mizumanju/", text: "詳細をみる" }}
                        >
                            
                        </Card>

                        <Card
                            title={"プレミアム"}
                            link={{ to: "https://kinchouen.co.jp/mizumanju/", text: "詳細をみる" }}
                        >
                            
                        </Card>
                    </HStack>
                </Section>
            </Main>

            <Footer
                author={"Nagara Create"}
            />
        </div>
    );
}

export default Home;