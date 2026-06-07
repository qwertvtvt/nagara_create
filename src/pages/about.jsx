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
import ArticleSection from "../components/articleSection";
import TocLayout from "../components/tocLayout";
import Table from "../components/table";

import nav from "../data/nav";

const tocItems = [
    { to: "#about", content: "概要" },
    { to: "#history", content: "沿革" }
];

const aboutItems = [
    { title: "組織名", content: "長良クリエイト" },
    { title: "設立", content: "2026年 4月30日" },
    { title: "代表者", content: "督永瑞樹" },
    { title: "事業内容", content: "Web制作" },
    { title: "従業員数", content: "4名 (開発部門: 3名 営業部門: 1名)" }
];

const historyItems = [
    { title: "2026年 4月中旬", content: "督永が発案" },
    { title: "2026年 4月30日", content: "Discordでバーチャルオフィスを作って組織設立" }
];

const HStackCSS = {
    padding: "20px"
}

function About() {
    return (
        <div className="App">
            <title>組織概要 - Nagara Create</title>
            <Navbar
                title={"Nagara Create"}
                links={
                    <DropDown lists={nav} />
                }
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
                    <ArticleSection
                        id={"about"}
                        eyebrow={"ABOUT"}
                        title={"組織概要"}
                    >
                        <Table
                            items={aboutItems}
                        />

                        <Section title={"長良クリエイトとは"} id="">
                            <Line color={"#c5c5c5"} css={{ width: "90%", margin: "auto" }} />
                            <div style={{ textAlign: "left", padding: "20px", width: "85%", margin: "auto" }}>
                                <p>長良クリエイトとは、岐阜の商業高校生を中心としたWeb制作・地域活性化チームです。</p>
                                <p>岐阜には素敵なお店がたくさんあります。しかし、それらの多くはホームページを持っておらず、</p>
                                <p>情報が少なくてたどり着くのが大変なことがあります。</p>
                                <p>「素晴らしい商品やサービスやこだわりがあるのに、ネット上に情報が少なくて人が来ない」</p>
                                <p>そんな地元の個人営業の店舗様をWebのテクノロジーでサポートしたいという思いから、私達の活動が始まりました。</p>
                                <p>見栄えがいいだけでなく、お店の経営に寄り添い、必要な機能だけを「ちょうどいい価格」で提供します。</p>
                                <p>美しい岐阜の街並み、観光、そして小さなお店の賑わいを、</p>
                                <p>デジタルを通じて少しずつ盛り上げることが、私達のミッションです。</p>
                            </div>
                            <Line color={"#c5c5c5"} css={{ width: "90%", margin: "auto" }} />
                        </Section>
                    </ArticleSection>

                    <ArticleSection
                        id={"history"}
                        eyebrow={"HISTORY"}
                        title={"沿革"}
                    >
                        <Table
                            items={historyItems}
                        />
                    </ArticleSection>
                </TocLayout>
            </Main>
        </div>
    );
}

export default About;

/*

・高校生
・

*/