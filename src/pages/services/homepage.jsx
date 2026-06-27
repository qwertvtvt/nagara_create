import { NavLink } from "react-router-dom";
import Main from "../../components/main";
import Section from "../../components/section";
import Navbar from "../../components/navbar";
import DropDown from "../../components/dropdown";
import TocLayout from "../../components/tocLayout";
import ArticleSection from "../../components/articleSection";
import HStack from "../../components/hstack";
import Card from "../../components/card";
import Line from "../../components/line";

import nav from "../../data/nav";
import plans from "../../data/plans";

function Homepage() {
    const tocItems = [
        { to: "#overview", content: "概要" },
        { to: "#plans", content: "プラン" },
        { to: "#order", content: "制作の流れ" },
        { to: "#service", content: "サービス" }
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
                    items={tocItems}
                    css={{
                        "--toc-gap": "64px"
                    }}
                >
                    <ArticleSection id="overview" eyebrow="About" title="概要" titleLevel="h1">
                        <p>長良クリエイトは、お客様に寄り添ったホームページを制作します</p>
                        <p>ここでは、私達のサービスである「ホームページ制作」について紹介します</p>
                    </ArticleSection>

                    <ArticleSection id="plans" eyebrow="Plans" title="プラン">
                        <p>お客様とのヒアリングを通して、最適なプランをご提案いたします</p>
                        <br />
                        <HStack justify_content={"center"}
                            align_items={"stretch"}
                        >
                            <Card
                                title={"ライト"}
                                link={{ to: "/services/plans#light", text: "詳細をみる" }}
                                titleCss={{ justifyContent: "center", fontSize: "1.8rem" }}
                                css={{ textAlign: "center" }}
                            >
                                まずは名刺代わりに<br />
                                コストを抑えたプラン<br />
                                安く始めたい店向け<br />
                                <br />
                                <Line color={"#c5c5c5"} />
                                <br />
                                初期費用
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.light.init.toLocaleString()}円</h3>
                                <br />
                                月額
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.light.monthly.toLocaleString()}円</h3>
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
                                link={{ to: "/services/plans#basic", text: "詳細をみる" }}
                                titleCss={{ justifyContent: "center", fontSize: "1.8rem" }}
                                css={{ textAlign: "center" }}
                            >
                                お店の魅力をしっかり伝える、<br />
                                長良クリエイトの王道プラン<br />
                                今っぽいデザイン<br />
                                <br />
                                <Line color={"#c5c5c5"} />
                                <br />
                                初期費用
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.basic.init.toLocaleString()}円</h3>
                                <br />
                                月額
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.basic.monthly.toLocaleString()}円</h3>
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
                                link={{ to: "/services/plans#premium", text: "詳細をみる" }}
                                titleCss={{ justifyContent: "center", fontSize: "1.8rem" }}
                                css={{ textAlign: "center" }}
                            >
                                Google Analyticsや特注ページ<br />
                                ビジネスを加速させる<br />
                                最上位プラン<br />
                                <br />
                                <Line color={"#c5c5c5"} />
                                <br />
                                初期費用
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.premium.init.toLocaleString()}円</h3>
                                <br />
                                月額
                                <h3 style={{ fontSize: "1.5em", color: "black" }}>{plans.premium.monthly.toLocaleString()}円</h3>
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
                    </ArticleSection>

                    <ArticleSection id="order" eyebrow="order" title="制作の流れ">
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
                        </Card>
                    </ArticleSection>
                </TocLayout>
            </Main>
        </div>
    );
}

export default Homepage;
