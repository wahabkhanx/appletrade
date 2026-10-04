
const CATALOG={
iphone:{label:"iPhone",icon:"📱",models:[
{id:"18pro",name:"iPhone 18 Pro",display:"6.3-inch",chip:"A20 Pro",colors:["Black","Silver","Glacier","Burgundy"],storage:["256GB","512GB","1TB","2TB"],base:4300},
{id:"18promax",name:"iPhone 18 Pro Max",display:"6.9-inch",chip:"A20 Pro",colors:["Black","Silver","Glacier","Burgundy"],storage:["256GB","512GB","1TB","2TB"],base:4700},
{id:"air",name:"iPhone Air",display:"6.5-inch",chip:"A19 Pro",colors:["Sky Blue","Cloud White","Space Black","Light Gold"],storage:["256GB","512GB","1TB"],base:3700},
{id:"17",name:"iPhone 17",display:"6.3-inch",chip:"A19",colors:["Black","White","Mist Blue","Sage","Lavender"],storage:["256GB","512GB"],base:3000},
{id:"17e",name:"iPhone 17e",display:"6.1-inch",chip:"A19",colors:["Black","White","Soft Pink"],storage:["256GB","512GB"],base:2350},
{id:"16",name:"iPhone 16",display:"6.1-inch",chip:"A18",colors:["Black","White","Pink","Teal","Ultramarine"],storage:["128GB","256GB","512GB"],base:2200},
{id:"15",name:"iPhone 15",display:"6.1-inch",chip:"A16 Bionic",colors:["Black","Green","Yellow","Pink","Blue"],storage:["128GB","256GB","512GB"],base:1750}]},
ipad:{label:"iPad",icon:"📟",models:[
{id:"pro11m5",name:"iPad Pro 11-inch M5",display:"11-inch",chip:"M5",colors:["Silver","Space Black"],storage:["256GB","512GB","1TB","2TB"],base:2900},
{id:"pro13m5",name:"iPad Pro 13-inch M5",display:"13-inch",chip:"M5",colors:["Silver","Space Black"],storage:["256GB","512GB","1TB","2TB"],base:3700},
{id:"air11m3",name:"iPad Air 11-inch M3",display:"11-inch",chip:"M3",colors:["Blue","Purple","Starlight","Space Gray"],storage:["128GB","256GB","512GB","1TB"],base:1900},
{id:"air13m3",name:"iPad Air 13-inch M3",display:"13-inch",chip:"M3",colors:["Blue","Purple","Starlight","Space Gray"],storage:["128GB","256GB","512GB","1TB"],base:2400},
{id:"a16",name:"iPad 11-inch (A16)",display:"11-inch",chip:"A16",colors:["Silver","Blue","Pink","Yellow"],storage:["128GB","256GB","512GB"],base:1450}]},
macbook:{label:"MacBook",icon:"💻",models:[
{id:"pro14m5",name:'MacBook Pro 14" M5',display:"14-inch",chip:"M5",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:5100},
{id:"pro14m5pro",name:'MacBook Pro 14" M5 Pro',display:"14-inch",chip:"M5 Pro",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["24GB","36GB","48GB","64GB"],base:6800},
{id:"pro16m5pro",name:'MacBook Pro 16" M5 Pro',display:"16-inch",chip:"M5 Pro",colors:["Space Black","Silver"],storage:["1TB","2TB","4TB"],memory:["24GB","48GB","64GB"],base:7900},
{id:"air13m5",name:'MacBook Air 13" M5',display:"13.6-inch",chip:"M5",colors:["Sky Blue","Silver","Starlight","Midnight"],storage:["512GB","1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:3000},
{id:"air15m5",name:'MacBook Air 15" M5',display:"15.3-inch",chip:"M5",colors:["Sky Blue","Silver","Starlight","Midnight"],storage:["512GB","1TB","2TB","4TB"],memory:["16GB","24GB","32GB"],base:3400}]},
watch:{label:"Apple Watch",icon:"⌚",models:[
{id:"ultra3",name:"Apple Watch Ultra 3",display:"49mm",chip:"S10",colors:["Natural Titanium","Black Titanium"],storage:["GPS + Cellular"],base:1600},
{id:"series11al",name:"Apple Watch Series 11 Aluminum",display:"42mm / 46mm",chip:"S10",colors:["Rose Gold","Silver","Space Gray","Jet Black"],storage:["GPS","GPS + Cellular"],base:900},
{id:"series11ti",name:"Apple Watch Series 11 Titanium",display:"42mm / 46mm",chip:"S10",colors:["Gold Titanium","Natural Titanium","Slate Titanium"],storage:["GPS + Cellular"],base:1250},
{id:"se3",name:"Apple Watch SE 3",display:"40mm / 44mm",chip:"S10",colors:["Midnight","Starlight"],storage:["GPS","GPS + Cellular"],base:650}]}
};
const CONDITIONS=[
{id:"a+",name:"A+ — Like New",factor:1,desc:"No meaningful marks; fully functional."},
{id:"a",name:"A — Excellent",factor:.88,desc:"Light cosmetic wear; all functions work."},
{id:"b",name:"B — Good",factor:.72,desc:"Visible wear but usable."},
{id:"c",name:"C — Damaged",factor:.45,desc:"Cracks, dents or a defect."}];
function allModels(){return Object.entries(CATALOG).flatMap(([category,d])=>d.models.map(m=>({...m,category})))}
