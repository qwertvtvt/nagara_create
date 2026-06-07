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
    { to: "#included", content: "共通内容" },
    { to: "#select", content: "選び方" },
    { to: "#light", content: "ライト" },
    { to: "#basic", content: "ベーシック" },
    { to: "#premium", content: "プレミアム" },
    { to: "#options", content: "オプション" },
    { to: "#notes", content: "注意事項" }
];

const commonDetails = [
    {
        title: "ヒアリングと設計",
        text: "お店の業種・雰囲気・目的を伺い、載せる情報や必要なページを整理します。"
    },
    {
        title: "スマホ対応",
        text: "スマートフォンでも見やすい構成にし、営業時間やアクセスへ辿り着きやすい導線を作ります。"
    },
    {
        title: "公開作業",
        text: "ドメインやサーバー設定を補助し、公開前の表示確認まで行います。"
    },
    {
        title: "TinyCMS",
        text: "お知らせ更新用の軽量システムを、全プランに標準搭載する予定です。"
    }
];

const selectDetails = [
    {
        title: "まずは安く始めたい",
        text: "営業時間、アクセス、お知らせなど、最低限の情報を分かりやすく載せたい場合はライトプランが向いています。"
    },
    {
        title: "お店の雰囲気を伝えたい",
        text: "写真や文章で魅力を伝え、初めてのお客様にも安心して来てもらいたい場合はベーシックプランがおすすめです。"
    },
    {
        title: "問い合わせや分析まで使いたい",
        text: "問い合わせフォーム、アクセス解析、特注ページなどを含めたい場合はプレミアムプランが向いています。"
    },
    {
        title: "迷った場合",
        text: "最初はベーシックを基準に考え、必要な機能やページ数に合わせてライト・プレミアムへ調整します。"
    }
];

const planDetails = [
    {
        id: "light",
        name: "ライト",
        catchCopy: "まずは名刺代わりに、低コストでWebサイトを持ちたい方向け。",
        initial: plans.light.init,
        monthly: plans.light.monthly,
        production: [
            "最大3ページ",
            "トップページ・店舗情報・お知らせページ",
            "アニメーションなしのシンプルな構成",
            "営業時間やアクセスなど、必要最低限の情報を掲載"
        ],
        operation: "公開後は、TinyCMSでお知らせを更新できるようにします。サイト公開維持と軽微な相談対応も月額に含みます。",
        recommend: "カフェ・飲食店・小売店などで、まずは営業時間やアクセスを分かりやすく載せたいお店におすすめです。"
    },
    {
        id: "basic",
        name: "ベーシック",
        catchCopy: "お店の魅力をしっかり伝える、長良クリエイトの標準プラン。",
        initial: plans.basic.init,
        monthly: plans.basic.monthly,
        production: [
            "最大3ページ",
            "トップページ・商品紹介・店舗情報ページ",
            "アニメーションあり",
            "写真や文章を活かしたモダンなUI"
        ],
        operation: "TinyCMSの利用に加えて、軽微な文章修正の相談や表示崩れの確認に対応します。",
        recommend: "写真や文章でお店の雰囲気を伝え、初めてのお客様にも安心して来てもらいたいお店におすすめです。"
    },
    {
        id: "premium",
        name: "プレミアム",
        catchCopy: "より多機能に、分析や特注ページまで含めたい方向け。",
        initial: plans.premium.init,
        monthly: plans.premium.monthly,
        production: [
            "最大5ページ",
            "基本3ページ + 2ページ特注無料",
            "問い合わせフォームなどの動的機能に対応",
            "Google Analyticsなどの分析機能"
        ],
        operation: "TinyCMSの利用に加えて、問い合わせフォームなどの動的機能やアクセス解析の導入を補助します。",
        recommend: "店舗サイトを集客や問い合わせにつなげたいお店、ページ数や機能をしっかり確保したい事業者様におすすめです。"
    }
];

const notesDetails = [
    {
        title: "月額費用について",
        text: "サイト公開維持、TinyCMSの利用、軽微な相談対応を中心にしています。不要な固定人件費を月額に乗せず、小さなお店でも続けやすい価格を目指します。"
    },
    {
        title: "別途見積もりになるもの",
        text: "大幅なデザイン変更、ページ追加、予約機能などのWebアプリ開発、写真撮影や原稿作成の代行は別途相談となります。"
    },
    {
        title: "写真・文章について",
        text: "掲載する写真や文章は、基本的にお客様から提供いただく想定です。必要に応じて、構成や文章の整理は一緒に行います。"
    },
    {
        title: "表示価格について",
        text: "表示価格は目安です。ドメイン名や追加機能によって変わる場合があるため、最終金額は契約前に必ず提示します。"
    }
];

const optionDetails = [
    {
        title: "ページ追加",
        price: "初期費用 5,000円 / 月額 1,500円",
        text: "プランの標準ページ数に加えて、商品紹介やスタッフ紹介などのページを追加できます。"
    },
    {
        title: "Webアプリ開発",
        price: "要相談・見積もり",
        text: "予約機能や管理機能など、通常のホームページ制作を超える内容は個別に見積もります。"
    },
    {
        title: "即日サポート",
        price: "未定",
        text: "サイトにエラーが発生したとき、通常より優先して24時間以内の初期対応を行います。"
    },
    {
        title: "SNS・Google Maps運用",
        price: "未定",
        text: "SNS投稿やGoogle Mapsの店舗情報更新など、Webサイト以外の発信も必要に応じてサポートします。"
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
                <TocLayout
                    items={tocItems}
                    css={{
                        "--toc-gap": "64px"
                    }}
                >
                    <ArticleSection id="overview" eyebrow="Services" title="料金・プラン" titleLevel="h1">
                        <p>長良クリエイトでは、お店の規模や目的に合わせて3つのプランを用意しています。</p>
                        <p>表示価格は目安であり、取得するドメイン名や追加機能によって多少上下します。</p>
                        <p>どのプランでも「作って終わり」ではなく、公開後にお店側でお知らせを更新できる運用まで見据えています。</p>
                    </ArticleSection>

                    <ArticleSection id="included" eyebrow="Included" title="全プラン共通で含まれるもの">
                        <DetailGrid items={commonDetails} />
                    </ArticleSection>

                    <ArticleSection id="select" eyebrow="Select" title="プランの選び方">
                        <p>プランは、ページ数だけでなく「どこまでお店の魅力を伝えたいか」「どこまで運用を楽にしたいか」で選びます。</p>
                        <br />
                        <DetailGrid items={selectDetails} />
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
                                    { title: "制作内容", list: plan.production },
                                    { title: "公開後の運用", text: plan.operation },
                                    { title: "向いているケース", text: plan.recommend }
                                ]}
                            />
                        </ArticleSection>
                    ))}

                    <ArticleSection id="options" eyebrow="Option" title="オプション">
                        <DetailGrid items={optionDetails} />
                    </ArticleSection>

                    <ArticleSection id="notes" eyebrow="Notes" title="ご確認いただきたいこと">
                        <p>
                            Webサイトが完成し、お客様に確認していただいたあと、納品と同時に初期費用と最初の月額費用をいただきます。
                            その後は、月ごとの運用費として月額費用をお支払いいただきます。
                        </p>
                        <br />
                        <DetailGrid items={notesDetails} />
                    </ArticleSection>
                </TocLayout>
            </Main>

            <Footer author={"Nagara Create"} />
        </div>
    );
}

export default Plans;
