import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StLink = styled(Link)`
  color: white;
  activecolor: #800000;
`
const Omake4 = () => (
  <Layout title="運営感想 - 動画に関するルールについて">
    <Seo title="運営感想 - 動画に関するルールについて" />
    <StLink to="/omake">←運営感想トップに戻る</StLink>
    <p></p>
    <p>後から気付いた、考えてみれば当たり前のことですが、ルールを気にしすぎることに価値はありません。ルールの境界に必ずしも面白さが眠っているわけではない、そして面白さに関わらないルールに踏み入ろうとする人はいない、よってそのようなルールを突き詰める必要もない。ここにあるものの多くはそのようなつまらない部分の掘り下げです。真に受けないように。ならなんで書くのかと言えば、こういうの考えるのが楽しいからです。</p>
    <menu>
      <h3 style={{padding: `.5rem 0 .2rem`, marginBottom: `.2rem`}}>目次</h3>
      <p><StLink to="#cases">実際のケース</StLink></p>
      <p><StLink to="#software">使用ソフトについて</StLink></p>
      <p><StLink to="#others">その他</StLink></p>
    </menu>
    <h2 class="anchor" id="cases">実際のケース</h2>
    <p>まずは実際にあったケースで先に書いといたほうが良さそうなのを書きます。どの動画の話？と思った方はエントリーした全員の動画をチェックしてみて下さい。</p>
    <p><ul><li>犬の鳴き声</li></ul></p>
    <p>こちらは事前に問い合わせもいただいた上でOKした、完全にセーフなケースです。仮にアウトなケースがあるとしたら、質問箱あたりで答えた気もしますが、鳴き声をたくさん用意して、犬に通しで漫才させるとか。あとは…</p>
    <p><ul><li>ガブリアス</li></ul></p>
    <p>想定外でした。何がって、「人の声から発せられた声として、人の声でない音声を使用する」というケースがです。ポケモンの鳴き声というのをどう分類するのかという点も。凄い頑張って自力で合成したのかもしれないし（それはそれで別の問題が生じる）。などなど今考えると色々な意味で微妙なラインにありますが、面白かったし大会期間中に疑問を抱き損ねたので結果としては完全にセーフです。今後は知らん</p>
    <p><ul><li>遅刻について</li></ul></p>
    <p>これ！先にまたまた比較させてもらうと、ＶＭ－１では投稿期間に間に合わず参加権を得られなくとも、一定期間内の投稿ならマイリストに入るようになっています。一方読ム-１では過去のケースも今回も、遅刻で参加権喪失＝マイリストにも入らない、という扱いです。投票での利便性を考えても入れないのは妥当な扱いかと思うのですが、間違いなく再生数等に結構な影響があるので、勿体ないな～とも感じてしまっています。何か良い案思いついたらやってみて</p>
    <h2 class="anchor" id="software">使用ソフトについて</h2>
    <p>ここからはあったりなかったりする話です。多くは～2021年10月ごろの運営初期段階で考えていた内容ですのでご了承ください。Q&A形式でどうぞ</p>
    <p><ul><li>「キャラクターHボイスシリーズ」や「淫語ロイドシリーズ」は使用可能ですか？</li></ul></p>
    <p>
      いきなり何言ってんだ？？？と思われたかもしれませんが、ちゃんと理由があるんです。まず、<a class="external" target="_blank" rel="noreferrer" title="出展作品についてのルール" href="https://yomu1.netlify.app/rule/#%E5%87%BA%E5%B1%95%E4%BD%9C%E5%93%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB">初回大会のルール表記</a>では前者に属する阿久女イクが、「ある種の音声素材や定められた単語だけを組み合わせるソフト」として名指し（例）で除外されています。しかし、どうやらこれらのソフトには、単語だけでなく、五十音を1モーラずつ網羅した素材もあるようなのです（使われている動画から予想）。波形接続も立派な音声合成であること、そして先ほどの除外理由を鑑みると、「1モーラの素材のみなら可」、とするのが適切なレギュレーションではないでしょうか？<br />
      はい、どうでもいいですね。それに線引きについて突き詰めすぎると大会の意義自体に疑問が生じるので、ほどほどにしておきましょう。それとは別に、1モーラなら本当にOKなのか？という問題もあるんですが、それは後に回します。
    </p>
    <p><ul><li>ライセンス上問題のあるソフトを使用しても大丈夫ですか？</li></ul></p>
    <p>駄目…とは言えなくて…というのも、私自身が過去に大会で吉田くんを使っているんですよね。使用素材等を明らかにすることを運営から推奨している以上後ろ暗いですが、黙認か、明記するなら「権利的な問題を失格事由とすることはない（ニコニコ運営削除等があればアウト）」のような感じになると思います。そうなるとReadSpeakerデモ音声等も黙認することになりますが…</p>
    <p><ul><li>Seiren Voiceは使用可能ですか？</li></ul></p>
    <p>
      これですよこれ。ピッチ・ボリュームやラベル情報から音声を合成するSeiren Voiceは、声質変換と読み上げの中間のような存在で分類に困るところですが、個人的には抑揚や緩急が大事な漫才という性質上、（生声からの変換は）除外でいいのではないかと思います。<br />
      ちなみに補足すると、Seiren Voiceと呼ばれるものは今年のリリース以前、2020年からJVSコーパスの音声に変換できるデモとして公開されていました。二次利用は不可だったはずですが、告知動画で言及するつもりで忘れていました。
    </p>
    <p><ul><li>自分でソフトを作って/自分の声でモデルを作って使用することは可能ですか？</li></ul></p>
    <p>
      「自分でソフトを作って」に至ってはド具体例が出てしまったし、「自分の声で」もどんどん簡単になっていっている現状、敢えて問う必要もないでしょう。ただ、当時想定していたのはもうちょっと穿ったケースでした。要は、ソフトも声も自前、となると、「ソフト」の定義次第では、生声との区別が完全に無くなってしまうという懸念があるのです。<br />
      具体的には…ここで先述の話題に戻るんですけど、声って表記上1文字でもその気になればいくらでも自由な表現ができるので、使いたい1モーラ分の表現をありったけ詰め込んだwav、を並べるソフトを作って「合成音声ソフトです」とした場合。いや、もちろんそんな人はいなくて、これはむしろルールにこだわると無駄な想定を迫られるという例ですね。<br />
      でも…今書いていて気付いたけど、CoeFontやMYCOEIROINKのあの懐の深さを考えると、「特定の動画/台詞で使うための口調を収録してモデルを作る」って、そんな回りくどいことをしなくても可能なのでは？合成音声の未来が恐ろしい…。<br />
      いずれにせよレギュレーション上で厳しく取り締まるものでは無いと思います。あーでも、自作ソフトは何らかの形で公開すること、ぐらいの基準は後出しで用意しておいてもいいかも？
    </p>
    <p>こんなところでしょうか。思ってたより少なかった。<br />増え放題の個人製ソフトを除いても、ここらであまり知られていない音声合成システムというのは結構多く、手近なところでAmazon, Google, Microsoftのクラウドサービスがある他、よく知るあのIT企業も音声サービスを提供していたり。多くは法人向けですが個人で利用できるものも。もちろん言語を広げればさらに増えます。ここは合成音声を無節操に愛でる界隈ではないので、知られていなくて当然なのですが。かく言う私も調べるだけで碌に使えてはいませんが、調べるだけでも結構面白いのでよければどうぞ。</p>
    <h2 class="anchor" id="others">その他</h2>
    <p><ul><li>「笑い声」について</li></ul></p>
    <p>「『笑い声』ならOK」ではダメなのは確かです。「効果音としての、大勢による笑い声」ぐらいが妥当なのでしょうが、それでもバリエーションはあるし、逆に「えーっ」とかの汎用的リアクションを入れても良さそうに思えてくる。なんなら普通の笑い声だけでも、見当外れな場所で使うなど表現の余地があるし。そんなところまで制限する必要もないとは思いますが。味気ないけど、公式で素材を指定すれば安心ですね。いっそ「合成音声による笑い声」を（素材化可な音声で）作って配布、なら問題ない？ただ、合成音声であろうと素材化したものは素材としての性質が強いので、指定が必要なことには変わりないでしょう。<br />繰り返しますが、徹底的に穿った内容なので真に受ける必要はありません。良識に訴え個別に相談、で十分。<br />喧噪？誰も使わんでしょ…<br />改めて初回のルールを見ると「その言葉がはっきりと聞き取れるような物」は不可とありますが、上記と同様、これをあえて明記するのが有効とは考えにくいですね。（あれ！？「はじめに」で書いたことと矛盾してる！つまりどっちでもいいってことか）</p>
    <p>ここからしばらく無茶振りシリーズです。</p>
    <p><ul><li>「言葉がはっきりと聞き取れる」とアウトなら、例えば口にガムテープを貼って唸るのはセーフですか？</li></ul></p>
    <p>はい、こんなことを言われないように一律アウトにすべきですね。（言われない）<br />話は逸れますが、生声と合成音声で絡むやつ結構好きです。ニコニコでは「生声+VOICEROID」タグが定着していますね（共演の形態は様々ですが）。そこにしか生まれないものもあると思うと、合成音声のみという制限すらもったいない気もしてきます。もちろん読ム-１とは別にやるとして、漫才となるとそもそも参加者の存在が疑わしいレベルなので机上の空論ですが。</p>
    <p><ul><li>合成音声ソフトを使うように、とありますが、音声は使わないでソフトの画面だけ出すのはアリですか？</li></ul></p>
    <p>こんなことを言われないように（言われない）「合成音声を使用する」という表記にしました。でもどうせ優勝できないだろうしイロモノとして認めてもよかったかも。（いない）</p>
    <p><ul><li>じゃあ一瞬だけ音声を使えば後はサイレントでも大丈夫ですか？</li></ul></p>
    <p>線引きも難しいしアリでいいかもしれないですね。</p>
    <p><ul><li>ゲームの映像を使うのはアリですか？</li></ul></p>
    <p>これ強いて禁止にする理由がないと思うんですよね。ゲーム内の声が（たとえ合成音声でも）入ったらもちろんアウト、というのが妥当なところではないでしょうか。自作ゲーム内の自作音声ならやっぱりセーフになるけど。</p>
    <p><ul><li>合成音声に声質変換を使用しても大丈夫ですか？</li></ul></p>
    <p>元が合成音声ならいいんじゃないでしょうか。</p>
    <p><ul><li>1分ぴったりにして投稿したはずが、0:59と表示されています。どうすればいいですか？</li></ul></p>
    <p>ちゃんと検証はできていないんですけど、ニコニコの動画時間は切り捨てなのはいいとして、ピッタリでも-1秒で表示されることがあるとかないとか。なので、5:00ぴったりはちょっと越えても大丈夫なんですよね。あとは動画一覧とプレーヤーで時間表示が変わったり。編集画面や他のプレーヤー等で確認が取れれば許容してよいでしょう。<br />
    そういえば、投稿後に（原則ルール上の）不備があったとしても投稿期間内なら再投稿可能、のつもりでした。（動画修正機能は時刻が残らない都合上無しとした方がよさそう）</p>
    <p><ul><li>「他イベントとの同時参加禁止」、必要？</li></ul></p>
    <p>「一応」残してありますが、いらないですよね。したい人もいなさそうですが、こっそり消しておくか応相談という形にしてよさそう。</p>
    <p><ul><li>複数作品投稿について</li></ul></p>
    <p>意外にも需要は0ではない。基本的に投稿者に不利になりやすい（票が分散されるため）ので認めましたが、無制限だと参加者の負担が予測しにくくなって良くないですね。変に本数制限をしても、複数投稿する参加者自体が多かったら意味ないし。「どうしても心配なら」、エントリー時点で本数の希望を言わせてもいいかも。（予定より少なくなってもペナルティはない）</p>
    <p><ul><li>複数チームへの参加について</li></ul></p>
    <p>手伝いのような形で複数チームに関わることがあるんじゃないか？さらに関与の関係が輪になったりしたら投票権はどうすれば？とか考えてたけど利害関係を解決できそうになかったので複数参加は一律禁止（あるいはいずれの責任者にもならない）にすることにしました。（もちろんそんな人はいなかった）</p>
    <StLink to="/omake">←運営感想トップに戻る</StLink>
  </Layout>
)

export default Omake4