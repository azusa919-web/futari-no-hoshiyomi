// SwissEphemeris は index.html で先に読み込み、window に置く。
// ライブラリ側の名前付き出力には依存せず、Swiss Ephemeris の公式番号をここで固定する。
const Planet={Sun:0,Moon:1,Mercury:2,Venus:3,Mars:4,Jupiter:5,Saturn:6};
const HouseSystem={Placidus:'P'};

const signs=['牡羊座','牡牛座','双子座','蟹座','獅子座','乙女座','天秤座','蠍座','射手座','山羊座','水瓶座','魚座'],planetNames={Sun:'太陽',Moon:'月',Mercury:'水星',Venus:'金星',Mars:'火星',Jupiter:'木星',Saturn:'土星'};

const cities=[['北海道札幌市',43.0618,141.3545],['宮城県仙台市',38.2682,140.8694],['東京都',35.6762,139.6503],['神奈川県横浜市',35.4437,139.638],['愛知県名古屋市',35.1815,136.9066],['京都府京都市',35.0116,135.7681],['大阪府大阪市',34.6937,135.5023],['兵庫県神戸市',34.6901,135.1955],['岡山県岡山市',34.6618,133.935],['広島県広島市',34.3853,132.4553],['島根県松江市',35.4681,133.0484],['島根県出雲市',35.367,132.754],['徳島県徳島市',34.0703,134.5548],['香川県高松市',34.3401,134.0434],['愛媛県松山市',33.8416,132.7659],['高知県高知市',33.5597,133.5311],['福岡県福岡市',33.5904,130.4017],['熊本県熊本市',32.8031,130.7079],['鹿児島県鹿児島市',31.5602,130.5581],['沖縄県那覇市',26.2124,127.6809]];

const prefs=[['青森県',40.8246,140.74],['岩手県',39.7036,141.1527],['秋田県',39.7186,140.1024],['山形県',38.2404,140.3633],['福島県',37.7503,140.4676],['茨城県',36.3418,140.4468],['栃木県',36.5658,139.8836],['群馬県',36.3911,139.0608],['埼玉県',35.8617,139.6455],['千葉県',35.6074,140.1065],['新潟県',37.9026,139.0236],['富山県',36.6953,137.2113],['石川県',36.5947,136.6256],['福井県',36.0652,136.2216],['山梨県',35.6642,138.5684],['長野県',36.6513,138.181],['岐阜県',35.3912,136.7223],['静岡県',34.9769,138.3831],['三重県',34.7303,136.5086],['滋賀県',35.0045,135.8686],['奈良県',34.6851,135.8329],['和歌山県',34.226,135.1675],['鳥取県',35.5011,134.2351],['山口県',34.1859,131.4714],['佐賀県',33.2494,130.2988],['長崎県',32.7503,129.8777],['大分県',33.2382,131.6126],['宮崎県',31.9111,131.4239]];

const needs={牡羊座:'自分の意思を率直に選び、まず動けること',牡牛座:'急かされず、変わらない安心を積み重ねられること',双子座:'言葉と新鮮なやり取りで風通しを保てること',蟹座:'気持ちを守られ、身内のようにくつろげること',獅子座:'好意を見える形で受け取り、誇りを持てること',乙女座:'役に立つ実感と整った日常の気遣いがあること',天秤座:'片方に偏らない対等さと心地よいバランスがあること',蠍座:'表面で終わらず本音を大切に扱えること',射手座:'自由を失わず未来や可能性を広げられること',山羊座:'約束が守られ、現実的な安心を積み上げられること',水瓶座:'自立と独自の感覚を尊重されること',魚座:'言葉にならない気分も急かされず受け止められること'};

const diary={牡羊座:'自分の気持ちに戻り、今日の私が選んだ一歩を気持ちよく見送っている。',牡牛座:'急がなくても大丈夫な空気の中で、いつもの安心をゆっくり味わっている。',双子座:'考えが軽やかに動き、言葉にしたことが自然に景色を変えている。',蟹座:'守りたいものを守りながら、ほっと息をつける居場所がある。',獅子座:'好意を素直に受け取り、私は大切にされていると自然に感じている。',乙女座:'小さなことが整い、自分の役割が誰かの助けになっている。',天秤座:'私の感覚も相手の感覚も雑にされず、心地よく一日が進んでいる。',蠍座:'本音を無理に隠さなくても、深いところで安心している。',射手座:'先の楽しみが見えて、今の私の世界が少し広がっている。',山羊座:'言ったことが形になり、積み上げたものを信頼できている。',水瓶座:'一人の時間も関係も自由に呼吸でき、私らしい距離でつながっている。',魚座:'気持ちを急かさずに過ごし、やわらかく満たされている。'};

const roles={Sun:'自分らしさと人生の軸',Moon:'安心したい気持ちと素の反応',Mercury:'考え方と伝え方',Venus:'好意の示し方と受け取り方',Mars:'行動の仕方・欲求・衝突の火種',Jupiter:'広がり・信じる力',Saturn:'責任・不安・長く育てる力'},houses=[[7,'ふたりの約束','対等な相手との約束、役割、互いを一人の人として尊重する場所。'],[4,'安心の土台','外で頑張る前に帰ってこられる心の居場所、暮らし、休み方の場所。'],[5,'ときめきと表現','恋愛の喜び、遊び心、好意を表す方法を見る場所。'],[8,'深い信頼','本音、共有するもの、簡単には見せない弱さと信頼を見る場所。']];

const $=x=>document.getElementById(x);
let swe,sweReady;
cities.concat(prefs).forEach(([n])=>$('places').insertAdjacentHTML('beforeend',`<option value="${n}">`));
const norm=n=>(n+360)%360,sign=n=>signs[Math.floor(norm(n)/30)];
function lookup(v){const key=s=>s.replace(/[\s　都道府県]/g,'');const q=key(v);
return cities.concat(prefs).find(p=>q.includes(key(p[0]))||key(p[0]).includes(q))}function house(l,c){for(let i=1;
i<13;
i++)if(norm(l-c[i])<norm(c[i===12?1:i+1]-c[i]))return i;
return 12}async function engine(){if(!sweReady){if(!window.SwissEphemeris)throw Error('天体計算の準備が完了していません。');swe=new window.SwissEphemeris();
sweReady=swe.init()}await sweReady;return swe}
async function chart(id){const dt=$(id+'Date').value,tm=$(id+'Time').value,loc=lookup($(id+'Place').value);
if(!dt)throw Error('二人分の生年月日を入れてくれ。');
if(!loc)throw Error('出生地は候補の市区町村か都道府県を入れてくれ。');
const [y,m,d]=dt.split('-').map(Number),[h,min]=(tm||'12:00').split(':').map(Number),e=await engine(),jd=e.dateToJulianDay(new Date(Date.UTC(y,m-1,d,h-9,min))),points={};
Object.keys(planetNames).forEach(k=>{const lon=e.calculatePosition(jd,Planet[k]).longitude;
points[k]={lon,sign:sign(lon)}});
if(!tm)return{points,loc,time:false};
const data=e.calculateHouses(jd,loc[1],loc[2],HouseSystem.Placidus);
Object.values(points).forEach(p=>p.house=house(p.lon,data.cusps));
return{points,loc,time:true,cusps:data.cusps,asc:data.ascendant}}
function room(n,title,why,a,b,an,bn){if(!a.time||!b.time)return `<article class="room"><p class="number">第${n}ハウス</p><h2>${title}</h2><p>${why}</p><div class="source"><strong>出生時刻が必要な読み</strong><p>ハウスは出生時刻で決まる。二人分の時刻が分かると、この部屋を開けます。</p></div></article>`;
const as=sign(a.cusps[n]),bs=sign(b.cusps[n]),planetText=(x,name)=>{const r=Object.entries(x.points).filter(([,p])=>p.house===n);
return r.length?r.map(([k,p])=>`<div class="planet"><strong>${name}さんの${planetNames[k]}（${p.sign}）</strong><p>${planetNames[k]}は${roles[k]}を表す。この部屋では、${p.sign}らしく「${needs[p.sign]}」を通して、このテーマが日常に現れやすい。</p></div>`).join(''):`<p>${name}さんは主要天体の在住なし。この部屋は入口の${name===an?as:bs}から読む。</p>`};
return `<article class="room"><p class="number">第${n}ハウス</p><h2>${title}</h2><p>${why}</p><div class="source"><strong>二人の入口を読む</strong><p>${an}さんは${as}からこの部屋へ入る。${needs[as]}が、${title}で大事な条件になりやすい。</p><p>${bn}さんは${bs}からこの部屋へ入る。${needs[bs]}が、大事な条件になりやすい。</p></div><div class="reading"><h3>この部屋にいる天体</h3>${planetText(a,an)}${planetText(b,bn)}<h3>運哲でこの部屋を育てるなら</h3><p>相手に望みを言って叶えてもらうためではなく、自分の中で「なんだったら最高？」を先に育てる。${an}さんの未来日記は「${diary[as]}」 ${bn}さんの未来日記は「${diary[bs]}」</p><h3>今の実感</h3><div class="choices">${['まだあり得ると感じにくい','もしかしたらあるかも','もう当たり前に感じる'].map(x=>`<label class="choice"><input type="radio" name="h${n}" value="${x}">${x}</label>`).join('')}</div></div></article>`}
function render(a,b,an,bn){$('resultPage').innerHTML=`<section class="result-head"><header class="brand"><b>✦ FUTARI</b><small>ふたりの星読み</small></header><p class="eyebrow">ふたりの出生図</p><h1>${an}さんと${bn}さんの<br>関係の景色。</h1><p class="lead">優劣ではなく、二人それぞれの星が望む景色を読みます。</p><div class="card"><strong>計算した配置</strong><br>${an}さん：太陽 ${a.points.Sun.sign}／月 ${a.points.Moon.sign}${a.time?`／ASC ${sign(a.asc)}`:'（出生時刻不明）'}<br>${bn}さん：太陽 ${b.points.Sun.sign}／月 ${b.points.Moon.sign}${b.time?`／ASC ${sign(b.asc)}`:'（出生時刻不明）'}<br><small>出生地は ${a.loc[0]}・${b.loc[0]} の自治体中心座標で計算。</small></div></section>${houses.map(x=>room(...x,a,b,an,bn)).join('')}<footer class="footer">占星術を自己理解のヒントとして扱う試作です。医療・法律・人生の決定を保証するものではありません。</footer>`;
$('formPage').classList.add('hidden');
$('resultPage').classList.remove('hidden');
window.scrollTo({top:0,behavior:'smooth'})}
$('birthForm').addEventListener('submit',async e=>{e.preventDefault();
$('formMessage').textContent='';
const b=$('submitButton');
b.disabled=true;
b.textContent='出生図を計算しています…';
try{const[a,c]=await Promise.all([chart('your'),chart('partner')]);
render(a,c,$('yourName').value.trim()||'あなた',$('partnerName').value.trim()||'パートナー')}catch(x){$('formMessage').textContent=x.message||'入力を確認してくれ。'}finally{b.disabled=false;
b.textContent='ふたりの星をひらく　→'}});

