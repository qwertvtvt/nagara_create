import Navbar from "../../components/navbar";
import DropDown from "../../components/dropdown";
import Main from "../../components/main";
import Footer from "../../components/footer";
import TocLayout from "../../components/tocLayout";
import ArticleSection from "../../components/articleSection";
import PriceBox from "../../components/priceBox";
import DetailGrid from "../../components/detailGrid";

import nav from "../../data/nav";
import plans from "../../data/plans";

const formatPrice = (price) => `${price.toLocaleString()}円`;

const tocItems = [
    { to: "#overview", content: "概要" },
    { to: "#light", content: "ライト" },
    { to: "#basic", content: "ベーシック" },
    { to: "#premium", content: "プレミアム" },
    { to: "#options", content: "オプション" },
    { to: "#pay", content: "お支払い" }
];

const planDetails = [
    {
        id: "light",
        name: "ライト",
        catchCopy: "まずは名刺代わりに、低コストでWebサイトを持ちたい方向け。",
        initial: plans.light.init,
        monthly: plans.light.monthly,
        points: [
            "最大3ページ",
            "アニメーションなし",
            "シンプルなデザイン",
            "必要最低限の店舗情報を掲載"
        ],
        recommend: "カフェ・飲食店・小売店などで、まずは営業時間やアクセスを分かりやすく載せたいお店におすすめです。"
    },
    {
        id: "basic",
        name: "ベーシック",
        catchCopy: "お店の魅力をしっかり伝える、長良クリエイトの標準プラン。",
        initial: plans.basic.init,
        monthly: plans.basic.monthly,
        points: [
            "最大3ページ",
            "アニメーションあり",
            "モダンなUI",
            "商品・サービス紹介を含めた構成"
        ],
        recommend: "写真や文章でお店の雰囲気を伝え、初めてのお客様にも安心して来てもらいたいお店におすすめです。"
    },
    {
        id: "premium",
        name: "プレミアム",
        catchCopy: "より多機能に、分析や特注ページまで含めたい方向け。",
        initial: plans.premium.init,
        monthly: plans.premium.monthly,
        points: [
            "最大5ページ",
            "基本3ページ + 2ページ特注無料",
            "Google Analyticsなどの分析機能",
            "問い合わせフォームなどの動的機能に対応"
        ],
        recommend: "店舗サイトを集客や問い合わせにつなげたいお店、ページ数や機能をしっかり確保したい事業者様におすすめです。"
    }
];

function Plans() {
    return (
        <div className="App">
            <Navbar
                title={"Nagara Create"}
                links={<DropDown lists={nav} />}
                css={{
                    backgroundColor: "black"
                }}
            />

            <Main>
                <TocLayout items={tocItems}>
                    <ArticleSection id="overview" eyebrow="Services" title="料金・プラン" titleLevel="h1">
                        <p>長良クリエイトでは、お店の規模や目的に合わせて3つのプランを用意しています。</p>
                        <p>表示価格は目安であり、取得するドメイン名や追加機能によって多少上下します。</p>
                    </ArticleSection>

                    {planDetails.map((plan) => (
                        <ArticleSection
                            id={plan.id}
                            eyebrow="Plan"
                            title={plan.name}
                            description={plan.catchCopy}
                            key={plan.id}
                            aside={
                                <PriceBox
                                    items={[
                                        { label: "初期費用", value: formatPrice(plan.initial) },
                                        { label: "月額", value: formatPrice(plan.monthly) }
                                    ]}
                                />
                            }
                        >
                            <DetailGrid
                                items={[
                                    { title: "含まれる内容", list: plan.points },
                                    { title: "おすすめのケース", text: plan.recommend }
                                ]}
                            />
                        </ArticleSection>
                    ))}

                    <ArticleSection id="options" eyebrow="Option" title="オプション">
                        <DetailGrid
                            items={[
                                {
                                    title: "ページ追加",
                                    text: "初期費用 5,000円 / 月額 1,500円を目安に、ページを追加できます。"
                                },
                                {
                                    title: "Webアプリ開発",
                                    text: "予約機能や管理機能など、通常のホームページ制作を超える内容は個別に見積もります。"
                                }
                            ]}
                        />
                    </ArticleSection>

                    <ArticleSection id="pay" eyebrow="Payment" title="お支払いについて">
                            <p>
                                Webサイトが完成し、お客様に確認していただいたあと、納品と同時に初期費用と最初の月額費用をいただきます。
                                その後は、月ごとの運用費として月額費用をお支払いいただきます。
                            </p>
                            <p>
                                正式な金額やお支払い方法は、ヒアリング後のお見積り・契約時にご案内します。
                            </p>
                    </ArticleSection>
                </TocLayout>
            </Main>

            <Footer author={"Nagara Create"} />
        </div>
    );
}

export default Plans;
