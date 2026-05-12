import { useState } from "react";

import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";

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
                <section className="content">
                    <h2 className="text-3xl">最新情報</h2>
                </section>
            </main>

            <Footer
                author={"bluecode"}
            />
        </div>
    );
}

export default Home;