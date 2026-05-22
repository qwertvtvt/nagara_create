import Navbar from "../components/navbar";
import { NavLink } from "react-router-dom";
import DropDown from "../components/dropdown";
import Hero from "../components/hero";
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
                links={
                    <DropDown
                        lists={[
                            {
                                title: "TOP",
                                links: [
                                    { to: "/#top", content: "トップ" },
                                    { to: "/#news", content: "最新情報" },
                                    { to: "/#about", content: "長良クリエイトとは" },
                                    { to: "/#features", content: "選ぶ理由" },
                                    { to: "/#plans", content: "プラン" },
                                    { to: "/#order", content: "制作の流れ" },
                                ]
                            },
                            {
                                title: "組織概要",
                                links: [
                                    { to: "/about", content: "概要" }
                                ]
                            },
                            {
                                title: "サービス",
                                links: [
                                    { to: "/service/homepage", content: "ホームページ制作" },
                                    { to: "/plans", content: "プラン" },
                                    { to: "/works", content: "実績" }
                                ]
                            },
                            {
                                title: "製品",
                                links: [
                                    { to: "/products/cms", content: "TinyCMS" }
                                ]
                            }
                        ]}
                    />
                }
                css={{
                    backgroundColor: "black"
                }}
            />

            <Hero image={"https://yamachizu.jp/wp-content/uploads/2025/04/15-13-scaled.jpg"} id="top">
                <span className="top_brand">Nagara Create</span>
                <br />
                <span className="top_copy">キャッチコピー</span>
            </Hero>

            <Main>
                <Section title={"最新情報"} id="news">
                    <p>準備中</p>
                </Section>

                <Line />

                <Section title={"長良クリエイトとは"} id="about">
                    <p>しらね (作成中)</p>
                </Section>

                <Line />

                <Section title={"選ぶ理由"} id="features">
                    <p>なんだろ (作成中)</p>
                </Section>

                <Line />

                <Section title={"料金・プラン"} id="plans">
                    <h3 style={{ fontSize: "1.3rem" }}>取得するドメイン名によって多少上下します</h3>
                    <p>あくまで目安です　詳細は見積から</p>
                    <br />
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

                <Line />

                <Section title={"契約・制作の流れ"} id="order">
                    <Card
                        title="① お問い合わせ"
                        css={{
                            margin: "auto",
                            width: "80%",
                            textAlign: "left"
                        }}
                    >
                        <Line color={"#c5c5c5"} />
                        <br />
                        <p className="keiyaku"><NavLink to="/contact">問い合わせフォーム</NavLink>よりご連絡いただき、</p>
                        <p className="keiyaku">お客様の情報や制作したいWebサイトの概要をお伝えしていただきます</p><br />
                        <p className="keiyaku">ご連絡いただいたあと、詳しい要望を直接伺います</p>
                    </Card>
                    <br />
                    <Card
                        title="② お見積り・契約"
                        css={{
                            margin: "auto",
                            width: "80%",
                            textAlign: "left"
                        }}
                    >
                        <Line color={"#c5c5c5"} />
                        <br />
                        <p className="keiyaku">伺った要望からサイトの規模を見積もり、適した<a href="#plans">プラン</a>を提案いたします</p>
                        <p className="keiyaku">合意を得たのち、契約書を発行いたします</p>
                    </Card>
                    <br />
                    <Card
                        title="③ 制作開始"
                        css={{
                            margin: "auto",
                            width: "80%",
                            textAlign: "left"
                        }}
                    >
                        <Line color={"#c5c5c5"} />
                        <br />
                        <p className="keiyaku">お客様のご要望やプランをもとに、Webサイトの制作を開始します</p>
                    </Card>
                    <br />
                    <Card
                        title="④ 納品・運用"
                        css={{
                            margin: "auto",
                            width: "80%",
                            textAlign: "left"
                        }}
                    >
                        <Line color={"#c5c5c5"} />
                        <br />
                        <p className="keiyaku">Webサイトが完成次第、お客様の同意を得てから納品、インターネット上で公開します</p>
                        <p className="keiyaku">納品と同時に初期費用と最初の月額をいただきます</p>
                        <p className="keiyaku"><NavLink to="/plans#pay">お支払方法についてはこちらをご覧ください</NavLink></p>
                    </Card>
                </Section>
            </Main>

            <Footer
                author={"Nagara Create"}
            />
        </div>
    );
}

export default Home;
