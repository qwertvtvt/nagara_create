import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
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
                center={
                    <>
                        <a href="#news">最新情報</a>
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

            <Header image={"https://yamachizu.jp/wp-content/uploads/2025/04/15-13-scaled.jpg"}>
                <span className="top_brand">Nagara Create</span>
                <br />
                <span className="top_copy">長良をWebでクリエイトするんや</span>
            </Header>

            <Main>
                <Section title={"最新情報"}>
                    <p>準備中</p>
                </Section>

                <Line />

                <Section title={"長良クリエイトとは"} id="about">
                    <p>しらね (作成中)</p>
                </Section>

                <Line />

                <Section title={"選ぶ理由"}>
                    <p>なんだろ (作成中)</p>
                </Section>

                <Line />

                <Section title={"料金・プラン"} id="features">
                    <h3 style={{ fontSize: "1.3rem" }}>取得するドメイン名によって多少上下します</h3>
                    <p>あくまで目安です　詳細は見積から</p>
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
