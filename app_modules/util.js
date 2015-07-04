
module.exports.add = function (v1, v2) {
    return v1 + v2;  
};
module.exports.minus = function (v1, v2) {
    return v1 - v2;  
};

module.exports.testdata = function (moduleApp) {
    moduleApp.get('/createCust', function(req, res){
        console.log("createCust get!!");
    
    	var custList = [
					{name:"西田 謙多郎",namekana:"ニシダ ケンタロウ",yuubin:"785-0209",addr:"高知県高岡郡津野町西谷乙1-7-13",addrSub:"",tel:"088-073-7655",email:"kentarou_nishida@ffuucmtxzn.qxdp.wv"},
					{name:"森脇 千鶴",namekana:"モリワキ チヅル",yuubin:"919-1131",addr:"福井県三方郡美浜町木野3-16-5",addrSub:"木野メゾン307",tel:"077-083-2153",email:"chizuru1221@cxzej.kmeep.pru"},
					{name:"杉原 春江",namekana:"スギハラ ハルエ",yuubin:"787-0006",addr:"高知県四万十市麻生3-11",addrSub:"",tel:"088-158-5542",email:"harue35337@jgssjpax.mb.mj"},
					{name:"古山 莉央",namekana:"フルヤマ リオ",yuubin:"327-0005",addr:"栃木県佐野市七軒町3-7-8",addrSub:"",tel:"028-516-9426",email:"rio53338@dbhkzzmoq.sdhc.qo"},
					{name:"横田 里桜",namekana:"ヨコタ リオ",yuubin:"635-0815",addr:"奈良県北葛城郡広陵町古寺2-18-20",addrSub:"ロイヤル古寺202",tel:"074-121-0632",email:"oyokota@mdrmkhtaw.vg"},
					{name:"久保田 岩雄",namekana:"クボタ イワオ",yuubin:"989-6831",addr:"宮城県大崎市鳴子温泉柳木1-8-18",addrSub:"",tel:"022-209-2821",email:"Iwao_Kubota@uuvskq.rrro.zm"},
					{name:"小久保 忠三",namekana:"コクボ チュウゾウ",yuubin:"018-3322",addr:"秋田県北秋田市住吉町2-12-9",addrSub:"",tel:"018-205-398",email:"chuuzou29077@kioygiwe.qewzg.jj"},
					{name:"川西 蒼",namekana:"カワニシ アオイ",yuubin:"854-0041",addr:"長崎県諫早市船越町2-2-8",addrSub:"",tel:"095-698-6001",email:"aoi8325@sbpzock.uhy"},
					{name:"岩城 祐一郎",namekana:"イワキ ユウイチロウ",yuubin:"847-0113",addr:"佐賀県唐津市佐志中里1-11",addrSub:"コーポ佐志中里219",tel:"091-597-2211",email:"uiwaki@nrxs.vwu"},
					{name:"栗山 賢司",namekana:"クリヤマ ケンジ",yuubin:"950-0126",addr:"新潟県新潟市江南区東本町4-15-9",addrSub:"",tel:"025-424-6285",email:"kenji4175@ajlscxo.go"},
					{name:"日下部 実咲",namekana:"クサカベ ミサキ",yuubin:"797-0046",addr:"愛媛県西予市宇和町上松葉3-6-10",addrSub:"",tel:"089-422-3455",email:"misaki97283@gvpc.hu"},
					{name:"横溝 美玲",namekana:"ヨコミゾ ミレイ",yuubin:"584-0077",addr:"大阪府富田林市新青葉丘町2-14",addrSub:"",tel:"065-019-2322",email:"mirei791@spafxqf.cp"},
					{name:"中山 瑞穂",namekana:"ナカヤマ ミズホ",yuubin:"999-4224",addr:"山形県尾花沢市新町1-17-19",addrSub:"",tel:"023-301-5067",email:"Mizuho_Nakayama@ktfcxwvs.rjet.kfr"},
					{name:"筒井 恵美子",namekana:"ツツイ エミコ",yuubin:"923-0805",addr:"石川県小松市御宮町2-13-7",addrSub:"",tel:"076-983-2682",email:"emiko3710@skopesx.kl"},
					{name:"飛田 琴音",namekana:"トビタ コトネ",yuubin:"753-0056",addr:"山口県山口市湯田温泉1-13-17",addrSub:"",tel:"083-831-7362",email:"kotone054@mhqgzn.emcft.af"},
					{name:"伊藤 美姫",namekana:"イトウ ミキ",yuubin:"982-0824",addr:"宮城県仙台市太白区芦の口2-16-8",addrSub:"",tel:"022-547-5857",email:"miki131@mihnlsxbz.sk"},
					{name:"市村 凛",namekana:"イチムラ リン",yuubin:"779-3405",addr:"徳島県吉野川市山川町御饌免1-1-17",addrSub:"",tel:"0889213554",email:"nichimura@aiht.nle"},
					{name:"山田 菜帆",namekana:"ヤマダ ナホ",yuubin:"853-0504",addr:"長崎県五島市玉之浦町丹奈1-20-18",addrSub:"プラザ玉之浦町丹奈311",tel:"095-677-3038",email:"naho28311@qiucriqjr.zk"},
					{name:"松島 健治",namekana:"マツシマ ケンジ",yuubin:"747-0045",addr:"山口県防府市高倉1-5-16",addrSub:"高倉シーサイド415",tel:"082-071-2982",email:"kenji572@pwliliti.mh"},
					{name:"日比野 信二",namekana:"ヒビノ シンジ",yuubin:"932-0844",addr:"富山県小矢部市北一1-16-6",addrSub:"",tel:"076-313-5497",email:"Shinji_Hibino@izetigldg.euv.eo"},
					{name:"長尾 太一",namekana:"ナガオ タイチ",yuubin:"641-0013",addr:"和歌山県和歌山市内原3-17-10",addrSub:"",tel:"073-221-5448",email:"qet=xh=vsdtaichi89442@fmntzovc.ld"},
					{name:"大林 美穂子",namekana:"オオバヤシ ミホコ",yuubin:"594-1141",addr:"大阪府和泉市春木町4-6-6",addrSub:"タウン春木町205",tel:"062-461-3657",email:"mihoko_oobayashi@ghivbl.wr"},
					{name:"長野 健",namekana:"ナガノ タケシ",yuubin:"929-1204",addr:"石川県かほく市箕打1-7-17",addrSub:"",tel:"076-385-3622",email:"takeshi57254@pgjcarwdz.twv"},
					{name:"畑 邦久",namekana:"ハタケ クニヒサ",yuubin:"573-0027",addr:"大阪府枚方市大垣内町4-14",addrSub:"",tel:"066-058-0826",email:"Kunihisa_Hatake@zrse.sf"},
					{name:"長谷川 初太郎",namekana:"ハセガワ ハツタロウ",yuubin:"018-5701",addr:"秋田県大館市比内町扇田3-2",addrSub:"",tel:"018-794-5126",email:"uhasegawa@dolk.gt"},
					{name:"柴田 武裕",namekana:"シバタ タケヒロ",yuubin:"010-0002",addr:"秋田県秋田市東通仲町3-6-7",addrSub:"",tel:"018-024-4466",email:"Takehiro_Shibata@pyaexkzcs.vyc"},
					{name:"松村 真帆",namekana:"マツムラ マホ",yuubin:"370-0613",addr:"群馬県邑楽郡邑楽町狸塚2-13-3",addrSub:"",tel:"027-410-6748",email:"mahomatsumura@nohr.fi"},
					{name:"白石 怜",namekana:"シライシ レイ",yuubin:"510-0885",addr:"三重県四日市市日永2-17-6",addrSub:"",tel:"059-649-9202",email:"rei133@pnwrtep.rae"},
					{name:"高井 安雄",namekana:"タカイ ヤスオ",yuubin:"305-0847",addr:"茨城県つくば市陣場3-17-5",addrSub:"",tel:"029-807-9410",email:"yasuo139@uwgehtr.jku"},
					{name:"松川 伸浩",namekana:"マツカワ ノブヒロ",yuubin:"750-0251",addr:"山口県下関市植田2-8",addrSub:"",tel:"083-130-1362",email:"nobuhiro767@qxecdhctdf.gpx"},
					{name:"富山 昌枝",namekana:"トミヤマ マサエ",yuubin:"779-3502",addr:"徳島県吉野川市美郷東3-13",addrSub:"",tel:"088-804-8789",email:"masaetomiyama@pvebqrcy.xxl"},
					{name:"山村 哲男",namekana:"ヤマムラ テツオ",yuubin:"930-0002",addr:"富山県富山市新富町4-13",addrSub:"",tel:"076-262-8059",email:"tetsuoyamamura@imuxujnd.er"},
					{name:"花田 克哉",namekana:"ハナダ カツヤ",yuubin:"714-0053",addr:"岡山県笠岡市カブト西町2-6-12",addrSub:"",tel:"086-024-0845",email:"jdijovkatsuya8974@hnwphz.vcvsj.zh"},
					{name:"丹野 雫",namekana:"タンノ シズク",yuubin:"039-0121",addr:"青森県三戸郡三戸町豊川3-5-19",addrSub:"豊川グリーン206",tel:"017-747-4312",email:"shizuku448@asfber.ao"},
					{name:"本村 亜依",namekana:"ホンムラ アイ",yuubin:"997-0403",addr:"山形県鶴岡市越中山2-15",addrSub:"越中山パレス214",tel:"023-464-8250",email:"ihonmura@xaunlyu.cki"},
					{name:"柳沢 紗和",namekana:"ヤナギサワ サワ",yuubin:"893-0034",addr:"鹿児島県鹿屋市名貫町1-4-9",addrSub:"",tel:"099-139-7330",email:"sawayanagisawa@xwkbqlk.ffd"},
					{name:"坂田 有里",namekana:"サカタ ユリ",yuubin:"755-0025",addr:"山口県宇部市野中2-2-5",addrSub:"",tel:"083-742-1107",email:"yuri635@bqlcp.xwn"},
					{name:"手塚 文夫",namekana:"テヅカ フミオ",yuubin:"519-3618",addr:"三重県尾鷲市栄町2-12-2",addrSub:"",tel:"059-719-7261",email:"fumio7416@krvjujkby.lfl"},
					{name:"牧野 裕一",namekana:"マキノ ユウイチ",yuubin:"602-8374",addr:"京都府京都市上京区一条通御前３丁目西入3-8-17",addrSub:"プラチナ414",tel:"077-959-0317",email:"yuuichi613@qpwr.aoi"},
					{name:"田村 結花",namekana:"タムラ ユイカ",yuubin:"992-0343",addr:"山形県東置賜郡高畠町根岸3-14-14",addrSub:"",tel:"023-359-3940",email:"yuikatamura@umjb.llo.fd"},
					
		];
		
		__.each(custList, function (cust) {
        	res.send(cust);
		});
        res.send("OK");
		
    
    
    });
};
