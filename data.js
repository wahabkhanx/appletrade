/* AppleTrade.ae device catalogue — UAE, checked against Apple UAE lineup on 04 Oct 2026.
   base values are AppleTrade.ae internal USED-device starting estimates, intentionally below new-retail pricing.
*/
const CATALOG={
iphone:{label:"iPhone",icon:"📱",models:[
{id:"duo",name:"iPhone Duo",badge:"PRE-ORDER",display:"5.4-inch outer / 7.6-inch inner",chip:"A20 Pro",colors:["Night Sky","Star White"],storage:["256GB","512GB","1TB","2TB"],base:6200,retail:8499},
{id:"18pro",name:"iPhone 18 Pro",badge:"NEW",display:"6.3-inch",chip:"A20 Pro",colors:["Black","Silver","Glacier","Burgundy"],storage:["256GB","512GB","1TB","2TB"],base:3900,retail:5099},
{id:"18promax",name:"iPhone 18 Pro Max",badge:"NEW",display:"6.9-inch",chip:"A20 Pro",colors:["Black","Silver","Glacier","Burgundy"],storage:["256GB","512GB","1TB","2TB"],base:4300,retail:5499},
{id:"air",name:"iPhone Air",badge:"NEW",display:"6.5-inch",chip:"A19 Pro",colors:["Space Black","Cloud White","Light Gold","Sky Blue"],storage:["256GB","512GB","1TB"],base:3000,retail:4699},
{id:"17promax",name:"iPhone 17 Pro Max",badge:"PRO",display:"6.9-inch",chip:"A19 Pro",colors:["Deep Blue","Cosmic Orange","Silver"],storage:["256GB","512GB","1TB","2TB"],base:3500,retail:5099},
{id:"17pro",name:"iPhone 17 Pro",badge:"PRO",display:"6.3-inch",chip:"A19 Pro",colors:["Deep Blue","Cosmic Orange","Silver"],storage:["256GB","512GB","1TB"],base:3200,retail:4699},
{id:"17",name:"iPhone 17",badge:"NEW",display:"6.3-inch",chip:"A19",colors:["Black","White","Mist Blue","Sage","Lavender"],storage:["256GB","512GB"],base:2450,retail:3799},
{id:"17e",name:"iPhone 17e",badge:"e",display:"6.1-inch",chip:"A19",colors:["Black","White","Soft Pink"],storage:["256GB","512GB"],base:1900,retail:2999},
{id:"16promax",name:"iPhone 16 Pro Max",display:"6.9-inch",chip:"A18 Pro",colors:["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"],storage:["256GB","512GB","1TB"],base:2450,retail:5099},
{id:"16pro",name:"iPhone 16 Pro",display:"6.3-inch",chip:"A18 Pro",colors:["Black Titanium","White Titanium","Natural Titanium","Desert Titanium"],storage:["128GB","256GB","512GB","1TB"],base:2150,retail:4699},
{id:"16plus",name:"iPhone 16 Plus",display:"6.7-inch",chip:"A18",colors:["Black","White","Pink","Teal","Ultramarine"],storage:["128GB","256GB","512GB"],base:1750,retail:3799},
{id:"16",name:"iPhone 16",display:"6.1-inch",chip:"A18",colors:["Black","White","Pink","Teal","Ultramarine"],storage:["128GB","256GB","512GB"],base:1650,retail:3399},
{id:"16e",name:"iPhone 16e",badge:"e",display:"6.1-inch",chip:"A18",colors:["Black","White"],storage:["128GB","256GB","512GB"],base:1350,retail:2599},
{id:"15promax",name:"iPhone 15 Pro Max",display:"6.7-inch",chip:"A17 Pro",colors:["Black Titanium","White Titanium","Blue Titanium","Natural Titanium"],storage:["256GB","512GB","1TB"],base:1900,retail:5199},
{id:"15pro",name:"iPhone 15 Pro",display:"6.1-inch",chip:"A17 Pro",colors:["Black Titanium","White Titanium","Blue Titanium","Natural Titanium"],storage:["128GB","256GB","512GB","1TB"],base:1650,retail:4699},
{id:"15plus",name:"iPhone 15 Plus",display:"6.7-inch",chip:"A16 Bionic",colors:["Black","Green","Yellow","Pink","Blue"],storage:["128GB","256GB","512GB"],base:1300,retail:3799},
{id:"15",name:"iPhone 15",display:"6.1-inch",chip:"A16 Bionic",colors:["Black","Green","Yellow","Pink","Blue"],storage:["128GB","256GB","512GB"],base:1150,retail:3399},
{id:"14promax",name:"iPhone 14 Pro Max",display:"6.7-inch",chip:"A16 Bionic",colors:["Space Black","Silver","Gold","Deep Purple"],storage:["128GB","256GB","512GB","1TB"],base:1500,retail:4699},
{id:"14pro",name:"iPhone 14 Pro",display:"6.1-inch",chip:"A16 Bionic",colors:["Space Black","Silver","Gold","Deep Purple"],storage:["128GB","256GB","512GB","1TB"],base:1300,retail:4299},
{id:"14plus",name:"iPhone 14 Plus",display:"6.7-inch",chip:"A15 Bionic",colors:["Midnight","Purple","Starlight","Product Red","Blue","Yellow"],storage:["128GB","256GB","512GB"],base:1050,retail:3299},
{id:"14",name:"iPhone 14",display:"6.1-inch",chip:"A15 Bionic",colors:["Midnight","Purple","Starlight","Product Red","Blue","Yellow"],storage:["128GB","256GB","512GB"],base:900,retail:2999},
{id:"13promax",name:"iPhone 13 Pro Max",display:"6.7-inch",chip:"A15 Bionic",colors:["Graphite","Gold","Silver","Sierra Blue","Alpine Green"],storage:["128GB","256GB","512GB","1TB"],base:1150},
{id:"13pro",name:"iPhone 13 Pro",display:"6.1-inch",chip:"A15 Bionic",colors:["Graphite","Gold","Silver","Sierra Blue","Alpine Green"],storage:["128GB","256GB","512GB","1TB"],base:1000},
{id:"13",name:"iPhone 13",display:"6.1-inch",chip:"A15 Bionic",colors:["Midnight","Starlight","Product Red","Blue","Pink","Green"],storage:["128GB","256GB","512GB"],base:800},
{id:"13mini",name:"iPhone 13 mini",display:"5.4-inch",chip:"A15 Bionic",colors:["Midnight","Starlight","Product Red","Blue","Pink","Green"],storage:["128GB","256GB","512GB"],base:650},
{id:"se3",name:"iPhone SE (3rd generation)",badge:"SE",display:"4.7-inch",chip:"A15 Bionic",colors:["Midnight","Starlight","Product Red"],storage:["64GB","128GB","256GB"],base:500},
{id:"12promax",name:"iPhone 12 Pro Max",display:"6.7-inch",chip:"A14 Bionic",colors:["Graphite","Silver","Gold","Pacific Blue"],storage:["128GB","256GB","512GB"],base:900},
{id:"12pro",name:"iPhone 12 Pro",display:"6.1-inch",chip:"A14 Bionic",colors:["Graphite","Silver","Gold","Pacific Blue"],storage:["128GB","256GB","512GB"],base:750},
{id:"12",name:"iPhone 12",display:"6.1-inch",chip:"A14 Bionic",colors:["Black","White","Product Red","Green","Blue","Purple"],storage:["64GB","128GB","256GB"],base:600},
{id:"12mini",name:"iPhone 12 mini",display:"5.4-inch",chip:"A14 Bionic",colors:["Black","White","Product Red","Green","Blue","Purple"],storage:["64GB","128GB","256GB"],base:500},
{id:"11promax",name:"iPhone 11 Pro Max",display:"6.5-inch",chip:"A13 Bionic",colors:["Midnight Green","Silver","Space Gray","Gold"],storage:["64GB","256GB","512GB"],base:700},
{id:"11pro",name:"iPhone 11 Pro",display:"5.8-inch",chip:"A13 Bionic",colors:["Midnight Green","Silver","Space Gray","Gold"],storage:["64GB","256GB","512GB"],base:600},
{id:"11",name:"iPhone 11",display:"6.1-inch",chip:"A13 Bionic",colors:["Black","Green","Yellow","Purple","Product Red","White"],storage:["64GB","128GB","256GB"],base:450}
]},
ipad:{label:"iPad",icon:"📟",models:[
{id:"pro11m5",name:"iPad Pro 11-inch M5",display:"11-inch",chip:"M5",colors:["Silver","Space Black"],storage:["256GB","512GB","1TB","2TB"],base:2900},
{id:"pro13m5",name:"iPad Pro 13-inch M5",display:"13-inch",chip:"M5",colors:["Silver","Space Black"],storage:["256GB","512GB","1TB","2TB"],base:3700},
{id:"air11m3",name:"iPad Air 11-inch M3",display:"11-inch",chip:"M3",colors:["Blue","Purple","Starlight","Space Gray"],storage:["128GB","256GB","512GB","1TB"],base:1900},
{id:"air13m3",name:"iPad Air 13-inch M3",display:"13-inch",chip:"M3",colors:["Blue","Purple","Starlight","Space Gray"],storage:["128GB","256GB","512GB","1TB"],base:2400},
{id:"a16",name:"iPad 11-inch (A16)",display:"11-inch",chip:"A16",colors:["Silver","Blue","Pink","Yellow"],storage:["128GB","256GB","512GB"],base:1450}]
},
macbook:{label:"MacBook",icon:"💻",models:[
{id:"pro14m5",name:'MacBook Pro 14" M5',display:"14-inch",chip:"M5",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:5100},
{id:"pro14m5pro",name:'MacBook Pro 14" M5 Pro',display:"14-inch",chip:"M5 Pro",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["24GB","36GB","48GB","64GB"],base:6800},
{id:"pro16m5pro",name:'MacBook Pro 16" M5 Pro',display:"16-inch",chip:"M5 Pro",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["24GB","48GB","64GB"],base:7900},
{id:"air13m5",name:'MacBook Air 13" M5',display:"13.6-inch",chip:"M5",colors:["Sky Blue","Silver","Starlight","Midnight"],storage:["512GB","1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:3000},
{id:"air15m5",name:'MacBook Air 15" M5',display:"15.3-inch",chip:"M5",colors:["Sky Blue","Silver","Starlight","Midnight"],storage:["512GB","1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:3400}]
},
watch:{label:"Apple Watch",icon:"⌚",models:[
{id:"ultra3",name:"Apple Watch Ultra 3",display:"49mm",chip:"S10",colors:["Natural Titanium","Black Titanium"],storage:["GPS + Cellular"],base:1600},
{id:"series11al",name:"Apple Watch Series 11 Aluminum",display:"42mm / 46mm",chip:"S10",colors:["Rose Gold","Silver","Space Gray","Jet Black"],storage:["GPS","GPS + Cellular"],base:900},
{id:"series11ti",name:"Apple Watch Series 11 Titanium",display:"42mm / 46mm",chip:"S10",colors:["Gold Titanium","Natural Titanium","Slate Titanium"],storage:["GPS + Cellular"],base:1250},
{id:"se3",name:"Apple Watch SE 3",display:"40mm / 44mm",chip:"S10",colors:["Midnight","Starlight"],storage:["GPS","GPS + Cellular"],base:650}]
}
};
const CONDITIONS=[
{id:"a+",name:"A+ — Like New",factor:1,desc:"No meaningful marks; fully functional."},
{id:"a",name:"A — Excellent",factor:.88,desc:"Light cosmetic wear; all functions work."},
{id:"b",name:"B — Good",factor:.72,desc:"Visible wear but usable."},
{id:"c",name:"C — Damaged",factor:.45,desc:"Cracks, dents or a defect."}];
function allModels(){return Object.entries(CATALOG).flatMap(([category,d])=>d.models.map(m=>({...m,category})))}
