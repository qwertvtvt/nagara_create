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
                            link={{ to: "/plans#light", text: "詳細をみる" }}
                        >
                            最安プラン
                        </Card>

                        <Card
                            title={"ベーシック"}
                            link={{ to: "/plans#basic", text: "詳細をみる" }}
                        >
                            おすすめ
                        </Card>

                        <Card
                            title={"プレミアム"}
                            link={{ to: "/plans#premium", text: "詳細をみる" }}
                        >
                            本格的
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