import React from "react";
import { motion } from "motion/react";

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
                    { to: "/plans", content: "Service" },
                    { to: "/contact", content: "Contact" }
                ]}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Header image={"https://picsum.photos/1000/300"}>
                Make Gifu great again<br />
                With Web Technology
            </Header>
            <Main>
                <Section title={"最新情報"}>
                    <p>準備中</p>
                </Section>

                <Line />

                <Section title={"料金・プラン"}>
                    <HStack justify_content={"center"}
                            align_items={"center"}
                    >
                        <Card
                            title={"ライト"}
                            link={{ to: "/plans#light", text: "詳細をみる" }}
                        >
                            まずは名刺代わりに<br />
                            コストを抑えたプラン<br />
                            安く始めたい店向け<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>20,500円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>5,850円</h3>
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            <div style={{ textAlign: "left" }}>
                                最大ページ数: 3ページ<br />
                                アニメーションなし<br />
                                シンプルなデザイン<br />
                            </div>
                        </Card>

                        <Card
                            title={"ベーシック"}
                            link={{ to: "/plans#basic", text: "詳細をみる" }}
                        >
                            お店の魅力をしっかり伝える、<br />
                            長良クリエイトの王道プラン<br />
                            今っぽいデザイン<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>25,000円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>8,700円</h3>
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            <div style={{ textAlign: "left" }}>
                                最大ページ数: 3ページ<br />
                                アニメーションあり<br />
                                モダンなUI<br />
                            </div>
                        </Card>

                        <Card
                            title={"プレミアム"}
                            link={{ to: "/plans#premium", text: "詳細をみる" }}
                        >
                            Google Analyticsや特注ページ<br />
                            ビジネスを加速させる<br />
                            最上位プラン<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>47,500円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>16,450円</h3>
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            <div style={{ textAlign: "left" }}>
                                最大ページ数: 5ページ<br />
                                基本3ページ + 2ページ特注無料<br />
                                ベーシックより多機能<br />
                            </div>
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