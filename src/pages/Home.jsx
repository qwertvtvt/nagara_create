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

import plans from "../data/plans";
import nav from "../data/nav";

function Home() {
    const featureCardTitleOneLineCss = {
        height: "5rem",
        alignItems: "center"
    };

    const featureCardTitleTwoLineCss = {
        height: "7.5rem",
        alignItems: "flex-start"
    };

    return (
        <div className="App">
            <Navbar
                title={"Nagara Create"}
                links={
                    <DropDown lists={nav} />
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
                    <Line color={"#c5c5c5"} css={{ width: "80%", margin: "auto" }} />
                    <div style={{ textAlign: "left", padding: "20px", width: "70%", margin: "auto" }}>
                        <p>長良クリエイトとは、岐阜の商業高校生を中心としたWeb制作・地域活性化チームです。</p>
                        <p>岐阜には素敵なお店がたくさんあります。しかし、それらの多くはホームページを持っておらず、</p>
                        <p>情報が少なくてたどり着くのが大変なことがあります。</p>
                        <p>「素晴らしい商品やサービスやこだわりがあるのに、ネット上に情報が少なくて人が来ない」</p>
                        <p>そんな地元の個人営業の店舗様をWebのテクノロジーでサポートしたいという思いから、私達の活動が始まりました。</p>
                        <p>見栄えがいいだけでなく、お店の経営に寄り添い、必要な機能だけを「ちょうどいい価格」で提供します。</p>
                        <p>美しい岐阜の街並み、観光、そして小さなお店の賑わいを、</p>
                        <p>デジタルを通じて少しずつ盛り上げることが、私達のミッションです。</p>
                    </div>
                    <Line color={"#c5c5c5"} css={{ width: "80%", margin: "auto" }} />
                </Section>

                <Line />

                <Section title={"選ぶ理由"} id="features">
                    <HStack css={{ width: "80%", margin: "auto" }}>
                        <Card title="地域密着・対面サポート" css={{ width: "50%", textAlign: "left" }} titleCss={featureCardTitleOneLineCss}>
                            <p>私達は全員岐阜に暮らしています。メールや電話だけのやり取りだけでなく、</p>
                            <p>実際にお店の足を運び、お顔を合わせて丁寧にお話を伺います</p>
                            <p>連絡も取りやすく、お店のリアルな魅力が伝わるWebサイトを提案できます</p>
                        </Card>

                        <Card title="圧倒的安さ" css={{ width: "50%", textAlign: "left" }} titleCss={featureCardTitleOneLineCss}>
                            <p>大手制作会社なら数十万円かかるホームページ制作を、</p>
                            <p>初期費用2万円台からという圧倒的な価格破壊で提供します</p>
                            <p>学生チームだからこそできる最小限な原価構造により、「無理なく始められる」価格を構築しました</p>
                        </Card>
                    </HStack>
                    <br />
                    <HStack css={{ width: "80%", margin: "auto" }}>
                        <Card title="確かな技術力" css={{ width: "50%", textAlign: "left" }} titleCss={featureCardTitleTwoLineCss}>
                            <p>ほとんどのメンバーが情報技術の国家資格である「基本情報技術者」を取得しています</p>
                            <p>「学生だから趣味レベルなのでは」という心配はいりません。</p>
                            <p>国に認められた確かな技術力と、最新のフロントエンド技術を用いて、</p>
                            <p>安全で美しいWebサイトを構築します</p>
                        </Card>

                        <Card title='独自の軽量システム『TinyCMS』' css={{ width: "50%", textAlign: "left" }} titleCss={featureCardTitleTwoLineCss}>
                            <p>難しいPCの知識は一切不要です。</p>
                            <p>TinyCMSによってお知らせページの更新が非常に簡単にできるようになります。</p>
                            <p>お店のお知らせや定休日の案内を、スマートフォンから "ちょっとしたSNS" に書き込むような、</p>
                            <p>シンプルな操作だけで、いつでも即座にサイトを更新できる、</p>
                            <p>独自開発の超軽量システム『TinyCMS』を全プランで標準搭載しています。</p>
                        </Card>
                    </HStack>
                </Section>

                <Line />

                <Section title={"料金・プラン"} id="plans">
                    <h3 style={{ fontSize: "1.3rem" }}>取得するドメイン名によって多少上下します</h3>
                    <p>あくまで目安です　詳細は見積から</p>
                    <br />
                    <HStack justify_content={"center"}
                            align_items={"stretch"}
                    >
                        <Card
                            title={"ライト"}
                            link={{ to: "/services/plans#light", text: "詳細をみる" }}
                        >
                            まずは名刺代わりに<br />
                            コストを抑えたプラン<br />
                            安く始めたい店向け<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>{plans.light.init.toLocaleString()}円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>{plans.light.monthly.toLocaleString()}円</h3>
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
                        >
                            お店の魅力をしっかり伝える、<br />
                            長良クリエイトの王道プラン<br />
                            今っぽいデザイン<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>{plans.basic.init.toLocaleString()}円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>{plans.basic.monthly.toLocaleString()}円</h3>
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
                        >
                            Google Analyticsや特注ページ<br />
                            ビジネスを加速させる<br />
                            最上位プラン<br />
                            <br />
                            <Line color={"#c5c5c5"} />
                            <br />
                            初期費用
                            <h3 style={{ fontSize: "1.5em" }}>{plans.premium.init.toLocaleString()}円</h3>
                            <br />
                            月額
                            <h3 style={{ fontSize: "1.5em" }}>{plans.premium.monthly.toLocaleString()}円</h3>
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
                        <p className="keiyaku"><NavLink to="/services/plans#pay">お支払方法についてはこちらをご覧ください</NavLink></p>
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
