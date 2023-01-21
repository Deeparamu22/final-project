

let sareepage = document.getElementById("collection");
let page_content = document.getElementById("page-content");
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let range1 = document.getElementById("rangeOne");
let range2 = document.getElementById("rangeTwo");
let slider = document.querySelector(".slider");
let addtocartarr=[];
let addtoCardFlag=false;
let addtoCardFlag1=true;
var product_name1;
let slidermaxValue = document.getElementById("rangeOne").max;
price1.textContent = "Rs. " + range1.value + ".00";
price2.textContent = "Rs. " + range2.value + ".00";
let k=0;
var amount=0;
if(JSON.parse(localStorage.getItem("addtocart"))!=null)
{
	
	addtocartarr=JSON.parse(localStorage.getItem("addtocart"));
	addtoCardFlag=true;
	addtoCardFlag1=false;
	document.getElementById("notification").textContent=addtocartarr.length;
}
else{
	document.getElementById("notification").textContent=0;
}

//-------------------------product images and details----------------------------

let image_Name = {
	"product_saree": {
		"text": document.getElementById("sareetext").textContent,
		imagetop: "images/slowmotion.jpg",
	},
	"product_westernWear": 
	{
		"text":document.getElementById("Westerntext").textContent,
		imagetop:"images/westerntop.jpg",
	},
	"product_kurti":
	{
		"text": document.getElementById("kurtitext").textContent,
		imagetop:"images/kurtitop.jpeg",
	},
	"product_kidswear":
	{
		"text": document.getElementById("kidstext").textContent,
		imagetop:"images/kidtop.jpg",
	},
	"product_otto":
	{
		"text": "Otto brand Shirts",
		imagetop:"images/ottotop.jpeg",
	},
	"product_dhotis":
	{
		"text":document.getElementById("dhotistext").textContent,
		imagetop:"images/dhotitop.jpg",
	},
	"product_shirts":
	{
		"text":document.getElementById("menstext").textContent,
		imagetop:"images/shrittop.jpeg",
	},
	"product_cheese":
	{
		"text":"Chase Deer Brand",
		imagetop:"images/cheese.jpg",
	},
	"product_biba":
	{
		"text":"biba",
		imagetop:"images/biba.jpg",
	},
	"product_given":
	{
		"text":"givency",
		imagetop:"images/givency.jpg",
	},
	"product_trands":
	{
		"text":"trands",
		imagetop:"images/trands.png",
	},
}	

let product_saree = {
	saree1: {
		"details": ["Embroidered Silk Saree", "Grey", "Vaamsi", "Free Size", "Rs: 250/-"],
		"img": ["images/saree011.webp", "images/saree01.webp", "images/saree012.jpg", "images/saree013.webp"],
		"ratings": 4.4,
		"discount": "30%",
	},
	saree2: {
		"img": ["images/saree02.jpg", "images/saree021.jpg", "images/saree022.jpg", "images/saree023.jpg"],
		"details": ["Mysore Silk Ethnic Motifs Saree", "Grey", "Satrani", "Free Size", "Rs: 280/-"],
		"ratings": 3.4,
		"discount": "30%",
	},
	saree3: {
		"img": ["images/saree03.webp", "images/saree031.jpg", "images/saree032.webp", "images/saree033.jpg"],
		"details": ["Floral Embroidered Georgette Saree", "Purple", "Fabviva", "Free Size", "Rs: 270/-"],
		"ratings": 4.9,
		"discount": "30%",
	},
	saree4: {
		"img": ["images/saree04.webp", "images/saree041.webp", "images/saree042.webp", "images/saree043.webp"],
		"details": ["Embroidered Georgette Saree", "Green", "Mimosa ", "Free Size", "Rs: 370/-"],
		"ratings": 4.8,
		"discount": "50%",
	},
	saree5: {
		"img": ["images/saree05.jpg", "images/saree051.jpg", "images/saree052.webp", "images/saree053.jpg"],
		"details": ["Embellished Georgette Saree", "Black", "Fabviva", "Free Size", "Rs: 470/-"],
		"ratings": 4.2,
		"discount": "40%",
	},
	saree6: {
		"img": ["images/saree06.webp", "images/saree061.webp", "images/saree062.webp", "images/saree063.webp", ],
		"details": ["Lace Border Saree with Blouse Piece", "Maroon", "Mimosa ", "Free Size", "Rs: 570/-"],
		"ratings": 3.4,
		"discount": "10%",
	},
	saree7: {
		"img": ["images/saree07.jpg", "images/saree071.jpg", "images/saree072.jpg", "images/saree073.jpg"],
		"details": ["Floral Pattern Saree with Contrast Border", "White", "Silk Land", "Free Size", "Rs: 910/-"],
		"ratings": 4.2,
		"discount": "40%",
	},
	saree8: {
		"img": ["images/saree08.webp", "images/saree081.webp", "images/saree082.jpg", "images/saree083.jpg"],
		"details": ["Embellished Georgette Saree", "Green", "Mimosa", "Free Size", "Rs: 510/-"],
		"ratings": 2.4,
		"discount": "10%",
	},
	saree9: {
		"img": ["images/saree9.webp", "images/saree91.webp", "images/saree092.jpg", "images/saree93.webp", ],
		"details": ["Ombre Effect Saree with Blouse Piece", "red", "Free Size", "Vaamsi", "Rs: 610/-"],
		"ratings": 5.0,
		"discount": "50%",
	},
	saree10: {
		"img": ["images/saree10.webp", "images/saree101.webp", "images/saree102.jpg", "images/saree103.jpg"],
		"details": ["Striped Saree with Blouse Piece", "pink", "Silk Land", "Free Size", "Rs: 710/-"],
		"ratings": 1.9,
		"discount": "40%",
	},
	saree11: {
		"img": ["images/saree11.webp", "images/saree111.webp", "images/saree112.jpg", "images/saree113.jpg", ],
		"details": ["Embroidered Organza Silk Saree with Tassels", "Black", "Silk Land", "Free Size", "Rs: 810/-"],
		"ratings": 4.9,
		"discount": "30%",
	},
	saree12: {
		"img": ["images/saree12.webp", "images/saree121.jpg", "images/saree122.webp", "images/saree123.jpg", ],
		"details": ["Embroidered Silk Saree", "Orange", "Shopvilla", "Free Size", "Rs: 920/-"],
		"ratings": 3.9,
		"discount": "20%",
	},
	saree13: {
		"img": ["images/saree13.webp", "images/saree131.webp", "images/saree132.webp", "images/saree133.webp"],
		"details": ["Floral Print Saree with Embellished Border", "Teal", "Silk Land", "Free Size", "Rs: 820/-"],
		"ratings": 3.8,
		"discount": "10%",
	},
	saree14: {
		"img": ["images/saree14.jpg", "images/saree141.jpg", "images/saree142.jpg", "images/saree143.webp"],
		"details": ["Embellished Traditional Saree with Blouse Piece", "White", "Silk Land", "Free Size", "Rs: 720/-"],
		"ratings": 4.8,
		"discount": "20%",
	},
	saree15: {
		"img": ["images/saree15.jpg", "images/saree152.webp", "images/saree151.jpg", "images/saree153.jpg"],
		"details": ["Vichitra Silk Embroidered Sarees with Blouse Piece", "yellow", "Silk Land", "Free Size", "Rs: 620/-"],
		"ratings": 4.7,
		"discount": "30%",
	},
	saree16: {
		"img": ["images/saree16.webp", "images/saree161.webp", "images/saree162.webp", "images/saree163.webp"],
		"details": ["Embellished Crepe Saree", "Maroon", "Shopvilla", "Free Size", "Rs: 320/-"],
		"ratings": 3.7,
		"discount": "40%",
	},
	saree17: {
		"img": ["images/saree17.webp", "images/saree171.jpg", "images/saree172.webp", "images/saree173.webp"],
		"details": ["Embellished Silk Saree", "Maroon", "Vaamsi", "Free Size", "Rs: 420/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	saree18: {
		"img": ["images/saree18.webp", "images/saree181.jpg", "images/saree182.webp", "images/saree183.jpg"],
		"details": ["Micro Print Georgette Saree", "yellow", "Satrani", "Free Size", "Rs: 520/-"],
		"ratings": 4.6,
		"discount": "50%",
	},
	saree19: {
		"img": ["images/saree19.jpg", "images/saree191.webp", "images/saree192.webp", "images/saree193.jpg"],
		"details": ["Soft Silk Kanjeevaram Traditional Saree", "red", "Fabviva", "Free Size", "Rs: 980/-"],
		"ratings": 3.6,
		"discount": "40%",
	},
	saree20: {
		"img": ["images/saree20.webp", "images/saree202.webp", "images/saree203.webp", "images/saree201.webp", ],
		"details": ["Ombre-Dyed Saree with Tassels", "Purple", "Shopvilla", "Free Size", "Rs: 880/-"],
		"ratings": 2.6,
		"discount": "30%",
	},
	saree21: {
		"img": ["images/saree21.jpg", "images/saree211.jpg", "images/saree212.webp", "images/saree213.jpg", ],
		"details": ["Printed Saree with Blouse Piece", "Purple", "Satrani", "Free Size", "Rs: 780/-"],
		"ratings": 4.5,
		"discount": "20%",
	},
	saree22: {
		"img": ["images/saree22.webp", "images/saree221.webp", "images/saree222.jpg", "images/saree223.webp", ],
		"details": ["Embellished Chiffon Saree with Blouse Piece", "pink", "Saree Mall", "Free Size", "Rs: 680/-"],
		"ratings": 3.5,
		"discount": "10%",
	},
	saree23: {
		"img": ["images/saree23.webp", "images/saree231.webp", "images/saree232.webp", "images/saree233.jpg", ],
		"details": ["Floral Print Saree", "DarkSalmon", "Luxvani", "Free Size", "Rs: 580/-"],
		"ratings": 2.5,
		"discount": "40%",
	},
	saree24: {
		"img": ["images/saree24.webp", "images/saree241.webp", "images/saree242.webp", "images/saree243.jpg", ],
		"details": ["Sequined Embellished Saree with Blouse Piece", "Teal", "Luxvani", "Free Size", "Rs: 480/-"],
		"ratings": 4.4,
		"discount": "40%",
	},
	saree25: {
		"img": ["images/saree25.webp", "images/saree251.webp", "images/saree252.webp", "images/saree253.webp", ],
		"details": ["Embellished Saree with Embroidered Border", "pink", "Vichitra silk", "Free Size", "Rs: 450/-"],
		"ratings": 3.4,
		"discount": "40%",
	},
	saree26: {
		"img": ["images/saree26.webp", "images/saree261.webp", "images/saree262.webp", "images/saree263.jpg"],
		"details": ["Sandal designer saree", "Black", "Readymart", "Free Size", "Rs: 550/-"],
		"ratings": 2.4,
		"discount": "50%",
	},
	saree27: {
		"img": ["images/saree27.webp", "images/saree271.webp", "images/saree272.jpg", "images/saree273.webp"],
		"details": ["Pink chiffon saree", "Black", "Big Fashion", "Free Size", "Rs: 650/-"],
		"ratings": 4.3,
		"discount": "50%",
	},
	saree28: {
		"img": ["images/saree28.jpg", "images/saree281.webp", "images/saree282.webp", "images/saree283.jpg"],
		"details": ["Floral Print Chiffon Saree", "red", "Big Fashion", "Free Size", "Rs: 950/-"],
		"ratings": 3.3,
		"discount": "50%",
	},
	saree29: {
		"img": ["images/saree29.webp", "images/saree291.webp", "images/saree292.webp", "images/saree293.webp"],
		"details": ["Embellished with Mirror Border Saree", "Black", "Readymart", "Free Size", "Rs: 850/-"],
		"ratings": 2.3,
		"discount": "10%",
	},
	saree30: {
		"img": ["images/saree30.webp", "images/saree301.webp", "images/saree302.webp", "images/saree303.jpg", ],
		"details": ["Micro Print Georgette Saree", "Navy", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
}

let product_westernWear={
	westernWear1:{
		"img":["images/westernwear1.webp", "images/westernwear01.webp", "images/westernwear02.webp", "images/westernwear03.webp"],
		"details": ["Striped Top with Tie-Up Neckline", "Green", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear2:{
		"img":["images/westernwear2.jpg", "images/westernwear021.webp", "images/westernwear022.webp", "images/westernwear023.webp"],
		"details": ["Fitted Crop Wrap Top", "Red", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear3:{
		"img":["images/westernwear3.webp", "images/westernwear031.webp", "images/westernwear032.webp", "images/westernwear033.webp"],
		"details": ["Striped Top with Waist Tie-Up", "White", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear4:{
		"img":["images/westernwear4.webp", "images/westernwear041.webp", "images/westernwear042.webp", "images/westernwear043.webp"],
		"details": ["Graphic Print Straight Kurta", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	westernWear5:{
		"img":["images/westernwear5.webp", "images/westernwear51.webp", "images/westernwear52.jpg", "images/westernwear53.webp"],
		"details": ["Printed Round-Neck Tunic", "Maroon", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 4.7,
		"discount": "40%",
	},
	westernWear6:{
		"img":["images/westernwear6.webp", "images/westernwear61.webp", "images/westernwear62.webp", "images/westernwear63.webp"],
		"details": ["Striped Ruffle-Neck Top", "Blue", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear7:{
		"img":["images/westernwear7.webp", "images/westernwear71.jpg", "images/westernwear72.webp", "images/westernwear73.webp"],
		"details": ["Floral Print 3/4th Sleeves Top", "Maroon", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear8:{
		"img":["images/westernwear8.webp", "images/westernwear81.webp", "images/westernwear82.webp", "images/westernwear83.webp"],
		"details": ["Striped Ruffle-Neck Top", "Blue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear9:{
		"img":["images/westernwear9.webp", "images/westernwear91.jpg", "images/westernwear92.webp", "images/westernwear93.jpg"],
		"details": ["Geometric Print Round-Neck Top", "Pink", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear10:{
		"img":["images/westernwear10.jpg", "images/westernwear101.jpg", "images/westernwear102.jpg", "images/westernwear0103.webp"],
		"details": ["Geometric Top", "Pink", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear11:{
		"img":["images/westernwear11.webp", "images/westernwear111.webp", "images/westernwear112.webp", "images/westernwear113.webp"],
		"details": ["Floral Print Round-Neck Top", "White", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear12:{
		"img":["images/westernwear12.webp", "images/westernwear121.webp", "images/westernwear122.webp", "images/westernwear123.webp"],
		"details": ["Embroidered Round-Neck Top", "White", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear13:{
		"img":["images/westernwear13.webp", "images/westernwear131.jpg", "images/westernwear132.jpg", "images/westernwear133.jpg"],
		"details": ["Embroidered Round-Neck Tunic", "Pink", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear14:{
		"img":["images/westernwear14.jpg", "images/westernwear141.jpg", "images/westernwear142.jpg", "images/westernwear143.webp"],
		"details": ["Floral Print High-Neckline Top", "Yellow", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear15:{
		"img":["images/westernwear15.webp", "images/westernwear151.webp", "images/westernwear152.webp", "images/westernwear153.webp"],
		"details": ["Polka-Dot Print Top with Patch Pocket", "Brown", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear16:{
		"img":["images/westernwear16.webp", "images/westernwear161.webp", "images/westernwear162.webp", "images/westernwear033.webp"],
		"details": ["Floral Print Round-Neck Top", "Pink", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear17:{
		"img":["images/westernwear17.webp", "images/westernwear171.webp", "images/westernwear172.webp", "images/westernwear173.webp"],
		"details": ["Striped Top with Ruffled Neck", "Pink", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear18:{
		"img":["images/westernwear18.jpg", "images/westernwear181.webp", "images/westernwear182.webp", "images/westernwear183.jpg"],
		"details": ["Embroidered Top with Tie-Up", "White", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear19:{
		"img":["images/westernwear19.webp", "images/westernwear191.webp", "images/westernwear192.webp", "images/westernwear193.webp"],
		"details": ["Floral Round Neck Regular Top", "Maroon", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear20:{
		"img":["images/westernwear20.jpg", "images/westernwear201.jpg", "images/westernwear201.webp", "images/westernwear203.webp"],
		"details": ["Striped Top with Tie-Up", "Pink", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear21:{
		"img":["images/westernwear21.webp", "images/westernwear211.webp", "images/westernwear212.jpg", "images/westernwear213.webp"],
		"details": ["Round-Neck Top with Bell Sleeves", "DarkTurquoise", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear22:{
		"img":["images/westernwear22.webp", "images/westernwear221.jpg", "images/westernwear222.webp", "images/westernwear222.jpg"],
		"details": ["Striped Ruffle-Neck Top", "Blue", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear23:{
		"img":["images/westernwear23.webp", "images/westernwear231.webp", "images/westernwear232.jpg", "images/westernwear233.webp"],
		"details": ["Floral Print Mandarin Collar Top", "DarkSalmon", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear24:{
		"img":["images/westernwear24.webp", "images/westernwear241.webp", "images/westernwear242.webp", "images/westernwear243.webp"],
		"details": ["Typographic Print Hooded T-shirt", "Yellow", "Super Pink", "Free Size", "Rs: 400/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear25:{
		"img":["images/westernwear25.webp", "images/westernwear251.webp", "images/westernwear252.webp", "images/westernwear253.webp"],
		"details": ["Checked Round-Neck Top", "DarkOliveGreen", "Biba", "Free Size", "Rs: 499/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear26:{
		"img":["images/westernwear26.webp", "images/westernwear261.webp", "images/westernwear262.webp", "images/westernwear263.webp"],
		"details": ["Floral Print Top with Tie-Up", "White", "Luxvani", "Free Size", "Rs: 630/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear27:{
		"img":["images/westernwear27.webp", "images/westernwear271.webp", "images/westernwear272.jpg", "images/westernwear272.webp"],
		"details": ["Striped Ruffle-Neck Top", "Blue", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	westernWear28:{
		"img":["images/westernwear28.jpg", "images/westernwear281.jpg", "images/westernwear282.jpg", "images/westernwear283.jpg"],
		"details": ["Floral Top", "Pink", "Viscose", "Free Size", "Rs: 576/-"],
		"ratings": 2.7,
		"discount": "30%",
	},
	westernWear29:{
		"img":["images/westernwear29.jpg", "images/westernwear291.webp", "images/westernwear292.webp", "images/westernwear293.webp"],
		"details": ["Floral Print Top with Tie-Up", "LightSkyBlue", "Super Pink", "Free Size", "Rs: 245/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	westernWear30:{
		"img":["images/westernwear30.webp", "images/westernwear301.webp", "images/westernwear32.webp", "images/westernwear33.webp"],
		"details": ["Embroidered Boat-Neck Top", "Black", "Viscose", "Free Size", "Rs: 507/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
}

let product_kurti={
	kurti:{
		"img":["images/kurti1.jpg", "images/kurti011.jpg", "images/kurti012.jpg", "images/kurti013.jpg"],
		"details": ["Striped Straight Kurta with Embroidery", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti2:{
		"img":["images/kurti2.webp", "images/kurti021.webp", "images/kurti022.webp", "images/kurti023.webp"],
		"details": ["Floral Print Anarkali Kurta with Butterfly Sleeves", "Green", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti3:{
		"img":["images/kurti3.webp", "images/kurti031.webp", "images/kurti032.webp", "images/kurti033.webp"],
		"details": ["Geometric Print Flared Kurta", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	kurti4:{
		"img":["images/kurti04.webp", "images/kurti041.webp", "images/kurti042.webp", "images/kurti043.webp"],
		"details": ["Printed Straight Kurta", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	kurti5:{
		"img":["images/kurti5.jpg", "images/kurti51.webp", "images/kurti53.jpg", "images/kurti52.webp"],
		"details": ["Paisley Print Straight Kurta with Band Collar", "Coral", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 4.7,
		"discount": "40%",
	},
	kurti6:{
		"img":["images/kurti6.webp", "images/kurti61.webp", "images/kurti62.webp", "images/kurti63.jpg"],
		"details": ["Printed Flared Kurta with Mandarin Collar", "Maroon", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	kurti7:{
		"img":["images/kurti7.webp", "images/kurti71.webp", "images/kurti72.webp", "images/kurti73.webp"],
		"details": ["Floral Print 3/4th Sleeves Top", "Grey", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	kurti8:{
		"img":["images/kurti8.webp", "images/kurti81.webp", "images/kurti82.jpg", "images/kurti8.webp"],
		"details": ["Floral Print Straight Kurta with Mandarin Collar", "Grey", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	kurti9:{
		"img":["images/kurti9.jpg", "images/kurti91.jpg", "images/kurti92.jpg", "images/kurti93.jpg"],
		"details": ["Floral Flared Kurta", "Green", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	kurti10:{
		"img":["images/kurti10.jpg", "images/kurti101.webp", "images/kurti102.webp", "images/kurti103.webp"],
		"details": ["Floral Embroidered Flared Kurta", "Pink", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti11:{
		"img":["images/kurti11.webp", "images/kurti111.webp", "images/kurti112.jpg", "images/kurti111.webp"],
		"details": ["Printed Flared Kurta", "Yellow", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti12:{
		"img":["images/kurti12.jpg", "images/kurti121.jpg", "images/kurti122.jpg", "images/kurti123.jpg"],
		"details": ["Embroidered Round-Neck Flared Kurta", "Black", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti13:{
		"img":["images/kurti13.webp", "images/kurti131.webp", "images/kurti132.webp", "images/kurti133.webp"],
		"details": ["Striped Straight Kurta with Collar-Neck", "Navy", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti14:{
		"img":["images/kurti14.webp", "images/kurti41.webp", "images/kurti142.webp", "images/kurti143.jpg"],
		"details": ["Embellished 3/4th Sleeves Kurta", "white", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti15:{
		"img":["images/kurti15.webp", "images/kurti151.webp", "images/kurti152.webp", "images/kurti153.webp"],
		"details": ["Embellished Anarkali Kurta", "Olive", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti16:{
		"img":["images/kurti16.webp", "images/kurti161.webp", "images/kurti162.webp", "images/kurti163.jpg"],
		"details": ["Floral Print Straight Kurta with Insert Pocket", "LightBlue", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti17:{
		"img":["images/kurti17.webp", "images/kurti171.webp", "images/kurti172.webp", "images/kurti173.webp"],
		"details": ["Geometric Print A-line Kurta", "Black", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti18:{
		"img":["images/kurti18.webp", "images/kurti181.webp", "images/kurti182.webp", "images/kurti183.jpg"],
		"details": ["Printed Button-Down A-line Kurta", "Blue", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti19:{
		"img":["images/kurti19.jpg", "images/kurti191.webp", "images/kurti192.jpg", "images/kurti193.jpg"],
		"details": ["Floral Round Neck Regular Top", "Grey", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti20:{
		"img":["images/kurti20.webp", "images/kurti201.webp", "images/kurti201.webp", "images/kurti203.webp"],
		"details": ["Striped Straight Kurta", "Yellow", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti21:{
		"img":["images/kurti21.webp", "images/kurti211.webp", "images/kurti212.webp", "images/kurti213.webp"],
		"details": ["Floral Print Round-Neck Flared Kurta", "Blue", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti22:{
		"img":["images/kurti22.webp", "images/kurti221.webp", "images/kurti222.webp", "images/kurti223.webp"],
		"details": ["Floral Print A-line Kurta", "Purple", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti23:{
		"img":["images/kurti23.jpg", "images/kurti231.webp", "images/kurti232.webp", "images/kurti233.jpg"],
		"details": ["Floral Print V-neck Angrakha Kurta", "LightBlue", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti24:{
		"img":["images/kurti24.jpg", "images/kurti241.webp", "images/kurti242.webp", "images/kurti243.jpg"],
		"details": ["Printed Round-Neck Straight Kurta", "Pink", "Super Pink", "Free Size", "Rs: 400/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti25:{
		"img":["images/kurti25.jpg", "images/kurti251.jpg", "images/kurti252.jpg", "images/kurti253.jpg"],
		"details": ["Floral Flared Kurta", "Maroon", "Biba", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti26:{
		"img":["images/kurti26.webp", "images/kurti261.webp", "images/kurti262.webp", "images/kurti263.webp"],
		"details": ["Floral Print Flared Kurta", "Navy", "Luxvani", "Free Size", "Rs: 630/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti27:{
		"img":["images/kurti27.webp", "images/kurti271.webp", "images/kurti272.webp", "images/westernwear272.webp"],
		"details": ["Floral Print Straight Winter Kurta", "Pink", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	kurti28:{
		"img":["images/kurti28.webp", "images/kurti281.webp", "images/kurti282.webp", "images/kurti283.webp"],
		"details": ["Embellished Straight Kurta", "Pink", "Viscose", "Free Size", "Rs: 576/-"],
		"ratings": 2.7,
		"discount": "30%",
	},
	kurti29:{
		"img":["images/kurti29.jpg", "images/kurti291.webp", "images/kurti292.webp", "images/kurti293.webp"],
		"details": ["Floral Print Top with Tie-Up", "LightSkyBlue", "Super Pink", "Free Size", "Rs: 245/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	kurti30:{
		"img":["images/kurti30.jpg", "images/kurti301.jpg", "images/kurti302.jpg", "images/kurti303.jpg"],
		"details": ["Floral Anarkali Kurta", "Green", "Viscose", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
}

let product_kidswear={
	kidswear1:{
		"img":["images/kid1.webp", "images/kid01.webp", "images/kid02.webp", "images/kid03.webp"],
		"details": ["Embroidered Jumpsuit", "Blue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	kidswear2:{
		"img":["images/kid2.jpg", "images/kid021.webp", "images/kid022.webp", "images/kid023.webp"],
		"details": ["Embellished Fit & Flare Dress", "DarkRed", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	kidswear3:{
		"img":["images/kid3.jpg", "images/kid031.jpg", "images/kid032.jpg", "images/kid033.jpg"],
		"details": ["Floral Lehenga Choli with Dupatta Set", "Blue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	kidswear4:{
		"img":["images/kid4.jpg", "images/kid41.jpg", "images/kid42.webp", "images/kid43.jpg"],
		"details": ["Floral Print Lehenga Choli with Dupatta", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
	kidswear5:{
		"img":["images/kid5.webp", "images/kid51.webp", "images/kid53.jpg", "images/kid52.webp"],
		"details": ["A-line Dress with Rosette Accent", "DarkSalmon", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 5.0,
		"discount": "40%",
	},
	kidswear6:{
		"img":["images/kid6.webp", "images/kid61.webp", "images/kid62.webp", "images/kid63.webp"],
		"details": ["Sequin Embroidered Fit & Flare frock", "Green", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 4.0,
		"discount": "40%",
	},
	kidswear7:{
		"img":["images/kid7.webp", "images/kid71.webp", "images/kid72.webp", "images/kid73.webp"],
		"details": ["Embellished Fit & Flare Frock", "Pink", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.0,
		"discount": "30%",
	},
	kidswear8:{
		"img":["images/kid8.webp", "images/kid81.webp", "images/kid82.webp", "images/kid83.webp"],
		"details": ["Fit & Flare Dress with Embellishments", "Maroon", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.0,
		"discount": "20%",
	},
	kidswear9:{
		"img":["images/kid9.webp", "images/kid91.webp", "images/kid92.webp", "images/kid93.webp"],
		"details": ["Bow Accent Fit and Flare Dress", "Navy", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.0,
		"discount": "10%",
	},
	kidswear10:{
		"img":["images/kid10.webp", "images/kid101.webp", "images/kid102.webp", "images/kid103.webp"],
		"details": ["Embellished Fit & Flare Dress", "DarkSalmon", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.5,
		"discount": "10%",
	},
	kidswear11:{
		"img":["images/kid11.webp", "images/kid111.webp", "images/kid112.webp", "images/kid113.webp"],
		"details": ["Embellished Fit and Flare Dress", "Red", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 3.5,
		"discount": "20%",
	},
	kidswear12:{
		"img":["images/kid12.webp", "images/kid121.webp", "images/kid122.webp", "images/kid123.webp"],
		"details": ["Micro Print Round-Neck Shift Dress", "Navy", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 4.5,
		"discount": "30%",
	},
	kidswear13:{
		"img":["images/kid13.webp", "images/kid131.webp", "images/kid132.webp", "images/kid133.webp"],
		"details": ["Typographic Print Tracksuit Set", "Grey", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.3,
		"discount": "40%",
	},
	kidswear14:{
		"img":["images/kid14.webp", "images/kid141.webp", "images/kid142.webp", "images/kid143.jpg"],
		"details": ["Solid Kurta Pyjama Set", "Blue", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 3.3,
		"discount": "50%",
	},
	kidswear15:{
		"img":["images/kid15.webp", "images/kid151.webp", "images/kid152.webp", "images/kid153.jpg"],
		"details": ["Solid Kurta Dhoti Set", "Green", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 4.3,
		"discount": "50%",
	},
	kidswear16:{
		"img":["images/kid16.webp", "images/kid161.webp", "images/kid162.webp", "images/kid163.jpg"],
		"details": ["Striped T-shirt with Jeans Set", "Blue", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.2,
		"discount": "40%",
	},
	kidswear17:{
		"img":["images/kid17.avif", "images/kid171.webp", "images/kid172.webp", "images/kid173.webp"],
		"details": ["Colourblock T-shirt & Shorts Set", "Blue", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 3.2,
		"discount": "30%",
	},
	kidswear18:{
		"img":["images/kid18.webp", "images/kid181.webp", "images/kid182.webp", "images/kid183.webp"],
		"details": ["Graphic Pants & T-shirt Set", "Red", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
	kidswear19:{
		"img":["images/kid19.webp", "images/kid191.jpg", "images/kid192.webp", "images/kid193.webp"],
		"details": ["Typographic Print Slim Fit T-shirt", "Blue", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	kidswear20:{
		"img":["images/kid20.webp", "images/kid201.webp", "images/kid202.webp", "images/kid203.jpg"],
		"details": ["Zip-Front Hooded Bomber Jacket", "Maroon", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	kidswear21:{
		"img":["images/kid21.webp", "images/kid211.webp", "images/kid212.webp", "images/kid213.webp"],
		"details": ["4-piece Cotton Suit Set", "Blue", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 3.7,
		"discount": "20%",
	},
	kidswear22:{
		"img":["images/kid22.webp", "images/kid221.webp", "images/kid222.webp", "images/kid223.webp"],
		"details": ["Checked Shirt & Shorts with Hat", "Green", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	kidswear23:{
		"img":["images/kid23.webp", "images/kid231.webp", "images/kid232.webp", "images/kid233.webp"],
		"details": ["Graphic Print Lounge Pant and T-shirt Set", "Blue", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	kidswear24:{
		"img":["images/kid24.jpg", "images/kid241.jpg", "images/kid242.jpg", "images/kid243.jpg"],
		"details": ["Crew-Neck T-shirt with Contrast Stripes", "Blue", "Super Pink", "Free Size", "Rs: 400/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
}

let product_otto={
	otto1:{
		"img":["images/otto1.webp", "images/otto11.webp", "images/otto12.webp", "images/otto1.webp"],
		"details": ["OTTO - Multi Shades Checkered Casual Shirt. Trim Fit - FX15172_1", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	otto2:{
		"img":["images/otto2.webp", "images/otto21.webp", "images/otto2.webp", "images/otto21.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "Maroon", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	otto3:{
		"img":["images/otto3.webp", "images/otto31.webp", "images/otto32.webp", "images/otto3.webp"],
		"details": ["OTTO - Sky Blue Formal Blazer. Regular Fit - BLFL2444_SKYBLUE", "LightSkyBlue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	otto4:{
		"img":["images/otto4.webp", "images/otto41.webp", "images/otto4.webp", "images/otto41.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOMA34622_1", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
	otto5:{
		"img":["images/otto5.webp", "images/otto51.webp", "images/otto5.webp", "images/otto51.webp"],
		"details": ["OTTO - Navy Blue Printed Casual Kurtha. Trim Fit - FX15171_1", "Navy", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 5.0,
		"discount": "40%",
	},
	otto6:{
		"img":["images/otto6.webp", "images/otto61.webp", "images/otto62.webp", "images/otto63.webp"],
		"details": ["OTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_12", "Grey", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 4.0,
		"discount": "40%",
	},
	otto7:{
		"img":["images/otto7.webp", "images/otto71.webp", "images/otto72.webp", "images/otto73.webp"],
		"details": ["EOTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_14", "Maroon", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.0,
		"discount": "30%",
	},
	otto8:{
		"img":["images/otto8.webp", "images/otto81.webp", "images/otto82.webp", "images/otto83.webp"],
		"details": ["OTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_12", "Blue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.0,
		"discount": "20%",
	},
	otto9:{
		"img":["images/otto9.webp", "images/otto91.webp", "images/otto92.webp", "images/otto93.webp"],
		"details": ["OTTO - Pale Peach Plain Formal Shirt. Relax Fit - BIPASA_6", "Coral", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.0,
		"discount": "10%",
	},
	otto10:{
		"img":["images/otto10.webp", "images/otto101.webp", "images/otto102.webp", "images/otto103.webp"],
		"details": ["OTTO - Wine Polo Collar T Shirt - NESTON_WINE MILL", "Maroon", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.5,
		"discount": "10%",
	},
	otto11:{
		"img":["images/otto011.webp", "images/otto111.webp", "images/otto112.webp", "images/otto113.webp"],
		"details": ["Slim Fit Cotton Shirt", "Pink", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 3.5,
		"discount": "20%",
	},
	otto12:{
		"img":["images/otto012.webp", "images/otto121.jpg", "images/otto122.webp", "images/otto012.webp"],
		"details": ["OTTO - Multi Shades Checkered Casual Shirt. Trim Fit - FX15172_1", "Blue", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 4.5,
		"discount": "30%",
	},
	otto13:{
		"img":["images/otto13.jpg", "images/otto131.webp", "images/otto13.jpg", "images/otto131.webp"],
		"details": ["Striped Polo T-shirt", "Navy", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.3,
		"discount": "40%",
	},
	otto14:{
		"img":["images/otto14.webp", "images/otto141.jpg", "images/otto142.jpg", "images/otto14.webp"],
		"details": ["Micro Print Shirt with Patch Pocket", "Pink", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 3.3,
		"discount": "50%",
	},
	otto15:{
		"img":["images/otto15.webp", "images/otto151.webp", "images/otto152.webp", "images/otto153.webp"],
		"details": ["Crew-Neck T-shirt with Contrast Stripes", "Blue", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 4.3,
		"discount": "50%",
	},
	otto16:{
		"img":["images/otto16.webp", "images/otto161.webp", "images/otto162.webp", "images/otto163.jpg"],
		"details": ["Slim Fit Cotton Shirt", "Pink", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.2,
		"discount": "40%",
	},
	otto17:{
		"img":["images/otto17.webp", "images/otto171.webp", "images/otto172.jpg", "images/otto17.webp"],
		"details": ["Solid T-shirt with Mandarin Collar", "Coral", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 3.2,
		"discount": "30%",
	},
	otto18:{
		"img":["images/otto18.webp", "images/otto181.webp", "images/otto182.webp", "images/otto183.webp"],
		"details": ["OTTO - Blue With White Polo T Shirt - EO34313_1 ", "Red", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
	otto19:{
		"img":["images/otto19.webp", "images/otto191.webp", "images/otto192.webp", "images/otto193.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34248_1", "Green", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	otto20:{
		"img":["images/otto20.webp", "images/otto201.webp", "images/otto202.webp", "images/otto203.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34261_1", "Blue", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	otto21:{
		"img":["images/otto22.jpg", "images/otto221.jpg", "images/otto222.jpg", "images/otto223.jpg"],
		"details": ["OTTO - Navy With Black Checkered Shirt. Relax Fit - OFJSE5_1", "Blue", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 3.7,
		"discount": "20%",
	},
}

let product_dhotis={
	doti1:{
		"img":["images/dhoti01.webp", "images/dhoti02.webp", "images/dhoti03.webp", "images/dhoti04.avif"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC4", "Green", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	doti2:{
		"img":["images/dhoti021.webp", "images/dhoti022.webp", "images/dhoti023.webp", "images/dhoti024.webp"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC10", " Pink", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	doti3:{
		"img":["images/dhoti31.webp", "images/dhoti32.jpg", "images/dhoti33.jpg", "images/dhoti34.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC2", "Orange", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	doti4:{
		"img":["images/dhoti41.jpg", "images/dhoti42.jpg", "images/dhoti43.jpg", "images/dhoti44.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC5", "Blue", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
	doti5:{
		"img":["images/dhoti51.jpg", "images/dhoti52.jpg", "images/dhoti53.jpg", "images/dhoti54.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC8", "Maroon", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 5.0,
		"discount": "40%",
	},
	doti6:{
		"img":["images/dhoti61.jpg", "images/dhoti62.jpg", "images/dhoti63.jpg", "images/dhoti64.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC1", "DarkOrange", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 4.0,
		"discount": "40%",
	},
	doti7:{
		"img":["images/dhoti71.jpg", "images/dhoti72.jpg", "images/dhoti73.jpg", "images/dhoti74.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC3", "Blue", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.0,
		"discount": "30%",
	},
	doti8:{
		"img":["images/dhoti81.jpg", "images/dhoti82.jpg", "images/dhoti83.jpg", "images/dhoti84.jpg"],
		"details": ["Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC1", "Green", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.0,
		"discount": "20%",
	},
	doti9:{
		"img":["images/dhoti9.jpg", "images/dhoti91.jpg", "images/dhoti92.jpg", "images/dhoti93.jpg"],
		"details": ["Mens Formal White Shirt with 3/4 Gold Jari Paras Dhoti Combo", "White", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.0,
		"discount": "10%",
	},
	doti10:{
		"img":["images/dhoti10.jpg", "images/dhoti101.jpg", "images/dhoti102.jpg", "images/dhoti103.jpg"],
		"details": ["Mens Readymade Double Dhoti White with Silver Jari Border 11498", "White", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.5,
		"discount": "10%",
	},
	doti11:{
		"img":["images/dhoti11.jpg", "images/dhoti111.jpg", "images/dhoti112.jpg", "images/dhoti113.jpg"],
		"details": ["Mens Readymade Double Dhoti White with Silver Jari Border 11499", "White", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 3.5,
		"discount": "20%",
	},
	doti12:{
		"img":["images/dhoti12.jpg", "images/dhoti121.jpg", "images/dhoti122.jpg", "images/dhoti123.jpg"],
		"details": ["Silk Look Fancy Colour Full Sleeves Orange Shirt & Jari Dhoti Combo", "Orange", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 4.5,
		"discount": "30%",
	},
	doti13:{
		"img":["images/dhoti13.jpg", "images/dhoti131.jpg", "images/dhoti132.jpg", "images/dhoti133.jpg"],
		"details": ["Silk Look Fancy Full Sleeves Green Shirt with Jari Dhoti Combo SP29", "Green", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.3,
		"discount": "40%",
	},
	doti14:{
		"img":["images/dhoti14.jpg", "images/dhoti141.jpg", "images/dhoti142.jpg", "images/dhoti143.jpg"],
		"details": ["Mens Matching Jari Border Dhoti & Shirt Set Half C Berry VB6", "Red", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 3.3,
		"discount": "50%",
	},
	doti15:{
		"img":["images/dhoti15.jpg", "images/dhoti151.jpg", "images/dhoti152.jpg", "images/dhoti153.jpg"],
		"details": ["Silk Look Fancy Colour Full Sleeves Green Shirt with Jari Dhoti Combo", "Green", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 4.3,
		"discount": "50%",
	},
	doti16:{
		"img":["images/dhoti16.jpg", "images/dhoti161.jpg", "images/dhoti162.jpg", "images/dhoti163.jpg"],
		"details": ["Mens Readymade Adjustable Dhoti with Matching Shirt Half Yellow C3", "Yellow", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.2,
		"discount": "40%",
	},
	doti17:{
		"img":["images/dhoti17.jpg", "images/dhoti171.jpg", "images/dhoti172.jpg", "images/dhoti173.jpg"],
		"details": ["Mens Readymade Adjustable Dhoti with Matching Shirt Half Blue C80", "Blue", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 3.2,
		"discount": "30%",
	},
	doti18:{
		"img":["images/dhoti18.jpg", "images/dhoti181.jpg", "images/dhoti182.jpg", "images/dhoti183.jpg"],
		"details": ["Mens Matching Jari Border Dhoti & Shirt Set Full Hibiscus VB1", "Red", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
	doti19:{
		"img":["images/dhoti19.jpg", "images/dhoti191.jpg", "images/dhoti192.jpg", "images/dhoti193.jpg"],
		"details": ["Mens Readymade Adjustable Dhoti with Matching Shirt Half Maroon C81", "Maroon", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	doti20:{
		"img":["images/dhoti20.jpg", "images/dhoti201.jpg", "images/dhoti202.jpg", "images/dhoti203.jpg"],
		"details": ["Mens Readymade Adjustable Dhoti with Matching Shirt Half Pink C34", "Pink", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	doti21:{
		"img":["images/dhoti21.jpg", "images/dhoti211.jpg", "images/dhoti212.jpg", "images/dhoti213.jpg"],
		"details": ["Like Father Like Son Combo Set Yellow", "Yellow", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 3.7,
		"discount": "20%",
	},
	doti22:{
		"img":["images/dhoti22.jpg", "images/dhoti221.jpg", "images/dhoti222.jpg", "images/dhoti223.jpg"],
		"details": ["Silk Look Fancy Half Sleeves Blue Shirt with Jari Dhoti Combo SP9", "Blue", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	doti23:{
		"img":["images/dhoti23.jpg", "images/dhoti231.jpg", "imGreenages/dhoti232.jpg", "images/dhoti233.jpg"],
		"details": ["Mens Readymade Adjustable Dhoti with Matching Shirt Half Green C36", "Green", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	doti24:{
		"img":["images/dhoti24.jpg", "images/dhoti241.jpg", "images/dhoti242.jpg", "images/dhoti243.jpg"],
		"details": ["Silk Look Fancy Colour Half Sleeves White Shirt with Jari Dhoti Combo", "White", "Super Pink", "Free Size", "Rs: 400/-"],
		"ratings": 1.7,
		"discount": "50%",
	},

}

let product_shirts={
shirt30:{
		"img":["images/shirt30.webp", "images/shirt301.webp", "images/shirt302.jpg", "images/shirt303.webp"],
		"details": ["Crew-Neck T-shirt with Contrast Stripes", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	shirt29:{
		"img":["images/shirt29.jpg", "images/shirt291.jpg", "images/shirt29.jpg", "images/shirt291.jpg"],
		"details": ["Geometric Print Hooded T-shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	shirt28:{
		"img":["images/shirt28.jpg", "images/shirt281.webp", "images/shirt282.webp", "images/shirt283.webp"],
		"details": ["Geometric Print Hooded T-shirt", "Green", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt22:{
		"img":["images/shirt112.webp", "images/shirt11.webp", "images/shirt113.jpg", "images/shirt11.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt23:{
		"img":["images/shirt211.webp", "images/shirt212.webp", "images/shirt211.webp", "images/shirt212.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt24:{
		"img":["images/shirt22.webp", "images/shirt221.webp", "images/shirt222.webp", "images/shirt223.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt25:{
		"img":["images/shirt23.webp", "images/shirt231.webp", "images/shirt232.webp", "images/shirt233.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	shirt26:{
		"img":["images/shirt24.jpg", "images/shirt241.jpg", "images/shirt242.webp", "images/shirt243.jpg"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt1:{
		"img":["images/otto1.webp", "images/otto11.webp", "images/otto12.webp", "images/otto1.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
shirt2:{
		"img":["images/otto2.webp", "images/otto21.webp", "images/otto2.webp", "images/otto21.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "maroon", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
shirt3:{
		"img":["images/otto3.webp", "images/otto31.webp", "images/otto32.webp", "images/otto3.webp"],
		"details": ["OTTO - Sky Blue Formal Blazer. Regular Fit - BLFL2444_SKYBLUE", "Blue", " Otto", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
shirt4:{
		"img":["images/otto4.webp", "images/otto41.webp", "images/otto4.webp", "images/otto41.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOMA34622_1", "Grey", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
shirt5:{
		"img":["images/otto5.webp", "images/otto51.webp", "images/otto5.webp", "images/otto51.webp"],
		"details": ["OTTO - Navy Blue Printed Casual Kurtha. Trim Fit - FX15171_1", "Navy", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 5.0,
		"discount": "40%",
	},
shirt6:{
		"img":["images/otto6.webp", "images/otto61.webp", "images/otto62.webp", "images/otto63.webp"],
		"details": ["OTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_12", "Grey", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 4.0,
		"discount": "40%",
	},
shirt7:{
		"img":["images/otto7.webp", "images/otto71.webp", "images/otto72.webp", "images/otto73.webp"],
		"details": ["EOTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_14", "maroon", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.0,
		"discount": "30%",
	},
shirt8:{
		"img":["images/otto8.webp", "images/otto81.webp", "images/otto82.webp", "images/otto83.webp"],
		"details": ["OTTO - D Grey Plain Formal Shirt. Relax Fit - BIPASA_12", "Blue", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.0,
		"discount": "20%",
	},
shirt9:{
		"img":["images/otto9.webp", "images/otto91.webp", "images/otto92.webp", "images/otto93.webp"],
		"details": ["OTTO - Pale Peach Plain Formal Shirt. Relax Fit - BIPASA_6", "Coral", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.0,
		"discount": "10%",
	},
shirt10:{
		"img":["images/otto10.webp", "images/otto101.webp", "images/otto102.webp", "images/otto103.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "DarkSalmon", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.5,
		"discount": "10%",
	},
shirt11:{
		"img":["images/otto011.webp", "images/otto111.webp", "images/otto112.webp", "images/otto113.webp"],
		"details": ["Slim Fit Cotton Shirt", "Pink", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 3.5,
		"discount": "20%",
	},
shirt12:{
		"img":["images/otto012.webp", "images/otto121.jpg", "images/otto122.webp", "images/otto012.webp"],
		"details": ["OTTO - Multi Shades Checkered Casual Shirt. Trim Fit - FX15172_1", "Blue", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 4.5,
		"discount": "30%",
	},
shirt13:{
		"img":["images/otto13.jpg", "images/otto131.webp", "images/otto13.jpg", "images/otto131.webp"],
		"details": ["Colour-Blocked Polo T-shirt", "Green", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.3,
		"discount": "40%",
	},
shirt14:{
		"img":["images/otto14.webp", "images/otto141.jpg", "images/otto142.jpg", "images/otto14.webp"],
		"details": ["Micro Print Shirt with Patch Pocket", "Pink", "Super Pink", "Free Size", "Rs: 349/-"],
		"ratings": 3.3,
		"discount": "50%",
	},
shirt15:{
		"img":["images/otto15.webp", "images/otto151.webp", "images/otto152.webp", "images/otto153.webp"],
		"details": ["Crew-Neck T-shirt with Contrast Stripes", "Blue", "Global Desi", "Free Size", "Rs: 150/-"],
		"ratings": 4.3,
		"discount": "50%",
	},
shirt16:{
		"img":["images/otto16.webp", "images/otto161.webp", "images/otto162.webp", "images/otto163.jpg"],
		"details": ["Slim Fit Cotton Shirt", "Pink", "Luxvani", "Free Size", "Rs: 625/-"],
		"ratings": 2.2,
		"discount": "40%",
	},
shirt17:{
		"img":["images/otto17.webp", "images/otto171.webp", "images/otto172.jpg", "images/otto17.webp"],
		"details": ["Solid T-shirt with Mandarin Collar", "Coral", "Global Desi", "Free Size", "Rs: 399/-"],
		"ratings": 3.2,
		"discount": "30%",
	},
shirt18:{
		"img":["images/otto18.webp", "images/otto181.webp", "images/otto182.webp", "images/otto183.webp"],
		"details": ["OTTO - Blue With White Polo T Shirt - EO34313_1 ", "Blue", "Super Pink", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
shirt19:{
		"img":["images/otto19.webp", "images/otto191.webp", "images/otto192.webp", "images/otto193.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34248_1", "Green", "Luxvani", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
shirt20:{
		"img":["images/otto20.webp", "images/otto201.webp", "images/otto202.webp", "images/otto203.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34261_1", "Blue", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
shirt21:{
		"img":["images/otto22.jpg", "images/otto221.jpg", "images/otto222.jpg", "images/otto223.jpg"],
		"details": ["4-piece Cotton Suit Set", "Blue", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 3.7,
		"discount": "20%",
	},
	
}
let product_cheese={
	cheese30:{
		"img":["images/shirt30.webp", "images/shirt301.webp", "images/shirt302.jpg", "images/shirt303.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese29:{
		"img":["images/shirt29.jpg", "images/shirt291.jpg", "images/shirt29.jpg", "images/shirt291.jpg"],
		"details": ["Geometric Print Hooded T-shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese28:{
		"img":["images/shirt28.jpg", "images/shirt281.webp", "images/shirt282.webp", "images/shirt283.webp"],
		"details": ["Geometric Print Hooded T-shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese22:{
		"img":["images/shirt112.webp", "images/shirt11.webp", "images/shirt113.jpg", "images/shirt11.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese23:{
		"img":["images/shirt211.webp", "images/shirt212.webp", "images/shirt211.webp", "images/shirt212.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese24:{
		"img":["images/shirt22.webp", "images/shirt221.webp", "images/shirt222.webp", "images/shirt223.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese25:{
		"img":["images/shirt23.webp", "images/shirt231.webp", "images/shirt232.webp", "images/shirt233.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " chase Deer", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	cheese2:{
		"img":["images/otto2.webp", "images/otto21.webp", "images/otto2.webp", "images/otto21.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "Maroon", "chase Deer", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	cheese4:{
		"img":["images/otto4.webp", "images/otto41.webp", "images/otto4.webp", "images/otto41.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOMA34622_1", "Grey", " chase Deer", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
	cheese13:{
		"img":["images/otto18.webp", "images/otto181.webp", "images/otto182.webp", "images/otto183.webp"],
		"details": ["OTTO - Blue With White Polo T Shirt - EO34313_1 ", "Blue", "chase Deer", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
	cheese10:{
		"img":["images/otto10.webp", "images/otto101.webp", "images/otto102.webp", "images/otto103.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "DarkSalmon", "chase Deer", "Free Size", "Rs: 800/-"],
		"ratings": 2.5,
		"discount": "10%",
	},
	cheese12:{
		"img":["images/otto012.webp", "images/otto121.jpg", "images/otto122.webp", "images/otto012.webp"],
		"details": ["OTTO - Multi Shades Checkered Casual Shirt. Trim Fit - FX15172_1", "Blue", "chase Deer", "Free Size", "Rs: 180/-"],
		"ratings": 4.5,
		"discount": "30%",
	},
	cheese13:{
		"img":["images/otto13.jpg", "images/otto131.webp", "images/otto13.jpg", "images/otto131.webp"],
		"details": ["Striped Polo T-shirt", "Navy", "chase Deer", "Free Size", "Rs: 750/-"],
		"ratings": 2.3,
		"discount": "40%",
	},
	cheese17:{
		"img":["images/otto17.webp", "images/otto171.webp", "images/otto172.jpg", "images/otto17.webp"],
		"details": ["Solid T-shirt with Mandarin Collar", "Coral", "chase Deer", "Free Size", "Rs: 399/-"],
		"ratings": 3.2,
		"discount": "30%",
	},
	cheese18:{
		"img":["images/otto18.webp", "images/otto181.webp", "images/otto182.webp", "images/otto183.webp"],
		"details": ["OTTO - Blue With White Polo T Shirt - EO34313_1 ", "Blue", "chase Deer", "Free Size", "Rs: 435/-"],
		"ratings": 4.2,
		"discount": "20%",
	},
	cheese19:{
		"img":["images/otto19.webp", "images/otto191.webp", "images/otto192.webp", "images/otto193.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34248_1", "Green", "chase Deer", "Free Size", "Rs: 500/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	cheese5:{
		"img":["images/otto20.webp", "images/otto201.webp", "images/otto202.webp", "images/otto203.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - EO34261_1", "Blue", "chase Deer", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
}
let product_biba={
	biba1:{
		"img":["images/kurti1.jpg", "images/kurti011.jpg", "images/kurti012.jpg", "images/kurti013.jpg"],
		"details": ["Striped Straight Kurta with Embroidery", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba2:{
		"img":["images/kurti2.webp", "images/kurti021.webp", "images/kurti022.webp", "images/kurti023.webp"],
		"details": ["Floral Print Anarkali Kurta with Butterfly Sleeves", "Green", "Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba3:{
		"img":["images/kurti3.webp", "images/kurti031.webp", "images/kurti032.webp", "images/kurti033.webp"],
		"details": ["Geometric Print Flared Kurta", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	biba4:{
		"img":["images/westernwear27.webp", "images/westernwear271.webp", "images/westernwear272.jpg", "images/westernwear272.webp"],
		"details": ["Striped Ruffle-Neck Top", "Blue", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba5:{
		"img":["images/westernwear28.jpg", "images/westernwear281.jpg", "images/westernwear282.jpg", "images/westernwear283.jpg"],
		"details": ["Floral Top", "Pink", "Viscose", "Free Size", "Rs: 576/-"],
		"ratings": 2.7,
		"discount": "30%",
	},
	biba6:{
		"img":["images/westernwear29.jpg", "images/westernwear291.webp", "images/westernwear292.webp", "images/westernwear293.webp"],
		"details": ["Floral Print Top with Tie-Up", "LightSkyBlue", "Super Pink", "Free Size", "Rs: 245/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	biba7:{
		"img":["images/westernwear30.webp", "images/westernwear301.webp", "images/westernwear32.webp", "images/westernwear33.webp"],
		"details": ["Embroidered Boat-Neck Top", "Black", "Viscose", "Free Size", "Rs: 507/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	biba8:{
		"img":["images/westernwear10.jpg", "images/westernwear101.jpg", "images/westernwear102.jpg", "images/westernwear0103.webp"],
		"details": ["Geometric Top", "Pink", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba9:{
		"img":["images/westernwear11.webp", "images/westernwear111.webp", "images/westernwear112.webp", "images/westernwear113.webp"],
		"details": ["Floral Print Round-Neck Top", "White", " Kazo", "Free Size", "Rs: 388/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba10:{
		"img":["images/westernwear12.webp", "images/westernwear121.webp", "images/westernwear122.webp", "images/westernwear123.webp"],
		"details": ["Embroidered Round-Neck Top", "White", "Super Pink", "Free Size", "Rs: 180/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba11:{
		"img":["images/kurti7.webp", "images/kurti71.webp", "images/kurti72.webp", "images/kurti73.webp"],
		"details": ["Floral Print 3/4th Sleeves Top", "Grey", " Kazo", "Free Size", "Rs: 615/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	biba12:{
		"img":["images/kurti8.webp", "images/kurti81.webp", "images/kurti82.jpg", "images/kurti8.webp"],
		"details": ["Floral Print Straight Kurta with Mandarin Collar", "Grey", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	biba13:{
		"img":["images/kurti9.jpg", "images/kurti91.jpg", "images/kurti92.jpg", "images/kurti93.jpg"],
		"details": ["Floral Flared Kurta", "Green", " Kazo", "Free Size", "Rs: 349/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	biba20:{
		"img":["images/kurti20.webp", "images/kurti201.webp", "images/kurti201.webp", "images/kurti203.webp"],
		"details": ["Striped Straight Kurta", "Yellow", "Global Desi", "Free Size", "Rs: 495/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba21:{
		"img":["images/kurti21.webp", "images/kurti211.webp", "images/kurti212.webp", "images/kurti213.webp"],
		"details": ["Floral Print Round-Neck Flared Kurta", "Blue", "Super Pink", "Free Size", "Rs: 250/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba22:{
		"img":["images/kurti22.webp", "images/kurti221.webp", "images/kurti222.webp", "images/kurti223.webp"],
		"details": ["Floral Print A-line Kurta", "Purple", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba23:{
		"img":["images/kurti23.jpg", "images/kurti231.webp", "images/kurti232.webp", "images/kurti233.jpg"],
		"details": ["Floral Print V-neck Angrakha Kurta", "LightBlue", "Luxvani", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba24:{
		"img":["images/kurti24.jpg", "images/kurti241.webp", "images/kurti242.webp", "images/kurti243.jpg"],
		"details": ["Printed Round-Neck Straight Kurta", "Pink", "Super Pink", "Free Size", "Rs: 400/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba25:{
		"img":["images/kurti25.jpg", "images/kurti251.jpg", "images/kurti252.jpg", "images/kurti253.jpg"],
		"details": ["Floral Flared Kurta", "Maroon", "Biba", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba26:{
		"img":["images/kurti26.webp", "images/kurti261.webp", "images/kurti262.webp", "images/kurti263.webp"],
		"details": ["Floral Print Flared Kurta", "Navy", "Luxvani", "Free Size", "Rs: 630/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba27:{
		"img":["images/kurti27.webp", "images/kurti271.webp", "images/kurti272.webp", "images/westernwear272.webp"],
		"details": ["Floral Print Straight Winter Kurta", "Pink", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	biba28:{
		"img":["images/kurti28.webp", "images/kurti281.webp", "images/kurti282.webp", "images/kurti283.webp"],
		"details": ["Embellished Straight Kurta", "Pink", "Viscose", "Free Size", "Rs: 576/-"],
		"ratings": 2.7,
		"discount": "30%",
	},
	biba29:{
		"img":["images/kurti29.jpg", "images/kurti291.webp", "images/kurti292.webp", "images/kurti293.webp"],
		"details": ["Floral Print Top with Tie-Up", "LightSkyBlue", "Super Pink", "Free Size", "Rs: 245/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	biba30:{
		"img":["images/kurti30.jpg", "images/kurti301.jpg", "images/kurti302.jpg", "images/kurti303.jpg"],
		"details": ["Floral Anarkali Kurta", "Green", "Viscose", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
}
let product_given={
	given1:{
		"img":["images/give1.jpg", "images/give01.jpg", "images/give02.webp", "images/give03.webp"],
		"details": ["GIVENCHY Archetype slim fit t-shirt", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "60%",
	},
	given2:{
		"img":["images/give2.webp", "images/give21.webp", "images/give22.webp", "images/give23.webp"],
		"details": ["GIVENCHY Archetype slim fit t-shirt", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	given3:{
		"img":["images/give3.webp", "images/give31.webp", "images/give32.jpg", "images/give33.jpg"],
		"details": ["GIVENCHY Archetype slim fit t-shirt", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 4.7,
		"discount": "60%",
	},
	given4:{
		"img":["images/given4.webp", "images/given41.webp", "images/given42.webp", "images/given43.webp"],
		"details": ["GIVENCHY Archetype slim fit t-shirt", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.1,
		"discount": "60%",
	},
	given5:{
		"img":["images/given5.webp", "images/given51.webp", "images/given52.webp", "images/given53.webp"],
		"details": ["GIVENCHY Archetype slim fit t-shirt", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.1,
		"discount": "60%",
	},
	given6:{
		"img":["images/given6.webp", "images/given61.webp", "images/given62.webp", "images/given63.webp"],
		"details": ["GIVENCHY 4G jogger jacket in nylon", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 4.1,
		"discount": "60%",
	},
	given7:{
		"img":["images/given7.webp", "images/given71.webp", "images/given72.webp", "images/given73.webp"],
		"details": ["GIVENCHY 4G jogger jacket in nylon", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 3.2,
		"discount": "60%",
	},
	given8:{
		"img":["images/given8.webp", "images/given81.webp", "images/given82.webp", "images/given83.webp"],
		"details": ["Oversized shirt in 4G checked flannel", "Pink", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 4.2,
		"discount": "60%",
	},
	given9:{
		"img":["images/otto2.webp", "images/otto21.webp", "images/otto2.webp", "images/otto21.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOSA34725_1", "Maroon", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 3.7,
		"discount": "30%",
	},
	given10:{
		"img":["images/otto3.webp", "images/otto31.webp", "images/otto32.webp", "images/otto3.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOMA34622_1", "Brown", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	given11:{
		"img":["images/otto4.webp", "images/otto41.webp", "images/otto4.webp", "images/otto41.webp"],
		"details": ["OTTO - Multi Shades Polo T Shirt - FOMA34622_1", "Grey", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 1.7,
		"discount": "50%",
	},
	given12:{
		"img":["images/otto5.webp", "images/otto51.webp", "images/otto5.webp", "images/otto51.webp"],
		"details": ["OTTO - Navy Blue Printed Casual Kurtha. Trim Fit - FX15171_1", "Navy", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 5.0,
		"discount": "40%",
	},
}
let product_trands={
	trands1:{
		"img":["images/westernwear1.webp", "images/westernwear01.webp", "images/westernwear02.webp", "images/westernwear03.webp"],
		"details": ["Striped Top with Tie-Up Neckline", "Green", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands2:{
		"img":["images/westernwear2.jpg", "images/westernwear021.webp", "images/westernwear022.webp", "images/westernwear023.webp"],
		"details": ["Fitted Crop Wrap Top", "Red", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands3:{
		"img":["images/westernwear3.webp", "images/westernwear031.webp", "images/westernwear032.webp", "images/westernwear033.webp"],
		"details": ["Striped Top with Waist Tie-Up", "White", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands4:{
		"img":["images/kurti1.jpg", "images/kurti011.jpg", "images/kurti012.jpg", "images/kurti013.jpg"],
		"details": ["Striped Straight Kurta with Embroidery", "Red", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands5:{
		"img":["images/kurti27.webp", "images/kurti271.webp", "images/kurti272.webp", "images/westernwear272.webp"],
		"details": ["Floral Print Straight Winter Kurta", "Pink", "Biba", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands6:{
		"img":["images/kurti28.webp", "images/kurti281.webp", "images/kurti282.webp", "images/kurti283.webp"],
		"details": ["Embellished Straight Kurta", "Pink", "Viscose", "Free Size", "Rs: 576/-"],
		"ratings": 2.7,
		"discount": "30%",
	},
	trands7:{
		"img":["images/kurti29.jpg", "images/kurti291.webp", "images/kurti292.webp", "images/kurti293.webp"],
		"details": ["Floral Print Top with Tie-Up", "LightSkyBlue", "Super Pink", "Free Size", "Rs: 245/-"],
		"ratings": 2.7,
		"discount": "20%",
	},
	trands8:{
		"img":["images/kurti30.jpg", "images/kurti301.jpg", "images/kurti302.jpg", "images/kurti303.jpg"],
		"details": ["Floral Anarkali Kurta", "Green", "Viscose", "Free Size", "Rs: 800/-"],
		"ratings": 2.7,
		"discount": "10%",
	},
	trands9:{
		"img":["images/kurti2.webp", "images/kurti021.webp", "images/kurti022.webp", "images/kurti023.webp"],
		"details": ["Floral Print Anarkali Kurta with Butterfly Sleeves", "Green", "Luxvani", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "60%",
	},
	trands10:{
		"img":["images/shirt28.jpg", "images/shirt281.webp", "images/shirt282.webp", "images/shirt283.webp"],
		"details": ["Geometric Print Hooded T-shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	trands11:{
		"img":["images/shirt112.webp", "images/shirt11.webp", "images/shirt113.jpg", "images/shirt11.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	trands12:{
		"img":["images/shirt211.webp", "images/shirt212.webp", "images/shirt211.webp", "images/shirt212.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	trands13:{
		"img":["images/shirt22.webp", "images/shirt221.webp", "images/shirt222.webp", "images/shirt223.webp"],
		"details": ["Multi Shades Checkered Casual Shirt", "Blue", " Faballey", "Free Size", "Rs:  1795/-"],
		"ratings": 4.7,
		"discount": "20%",
	},
	trands14:{
		"img":["images/kurti3.webp", "images/kurti031.webp", "images/kurti032.webp", "images/kurti033.webp"],
		"details": ["Geometric Print Flared Kurta", "Black", " Faballey", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	trands15:{
		"img":["images/kurti04.webp", "images/kurti041.webp", "images/kurti042.webp", "images/kurti043.webp"],
		"details": ["Printed Straight Kurta", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	trands16:{
		"img":["images/kurti5.jpg", "images/kurti51.webp", "images/kurti53.jpg", "images/kurti52.webp"],
		"details": ["Paisley Print Straight Kurta with Band Collar", "Coral", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 4.7,
		"discount": "40%",
	},
	trands17:{
		"img":["images/kurti6.webp", "images/kurti61.webp", "images/kurti62.webp", "images/kurti63.jpg"],
		"details": ["Printed Flared Kurta with Mandarin Collar", "Maroon", " Faballey", "Free Size", "Rs: 399/-"],
		"ratings": 2.7,
		"discount": "40%",
	},
	trands18:{
		"img":["images/westernwear4.webp", "images/westernwear041.webp", "images/westernwear042.webp", "images/westernwear043.webp"],
		"details": ["Graphic Print Straight Kurta", "Pink", " Kazo", "Free Size", "Rs: 750/-"],
		"ratings": 2.7,
		"discount": "50%",
	},
	trands19:{
		"img":["images/westernwear5.webp", "images/westernwear51.webp", "images/westernwear52.jpg", "images/westernwear53.webp"],
		"details": ["Printed Round-Neck Tunic", "Maroon", "Luxvani", "Free Size", "Rs: 495/-"],
		"ratings": 4.7,
		"discount": "40%",
	},
}

//------------------------sidebar------------------------------------------

function openNav() {
	document.getElementById("mySidenav").style.width = "390px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
//-----------------------profile-------------------------------------------

var signin_but = document.querySelector("#sign-in-btn");
var signup_but = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
signup_but.setAttribute("onclick", "animation()");
var username = document.getElementById("username");
var password = document.getElementById("password");
var username1 = document.getElementById("username1");
var password1 = document.getElementById("password1");
var allowAccess = "";
localStorage.setItem("signin", allowAccess);

function animation() {
	container.classList.add("signup_mode");
	container.style.opacity="1";
	document.getElementById("popUpDiv").style.display="none";
}
signin_but.addEventListener('click', () => {
	container.classList.remove("signup_mode");
});

function signup() {
	if((addtoCardFlag==true)&&(addtoCardFlag1==false))
	{
		addtocartnextPage();
	}
	else if ((addtoCardFlag1==true)&&(addtoCardFlag==true)) {
		BuyItNow(document.getElementById('number').value,document.getElementById('rate').textContent);
	} 
	var input = username.value;
	var t = password.value;
	localStorage.setItem(input, t);
}

function signin() {
	var ans = localStorage.getItem(username1.value);
	if((ans == password1.value)&&(addtoCardFlag==true)&&(addtoCardFlag1==false))
	{
	addtocartnextPage();
	}
	else if ((ans == password1.value)&&(addtoCardFlag1==true)&&(addtoCardFlag==true)) {
		BuyItNow(document.getElementById('number').value,document.getElementById('rate').textContent);
	} 
	else {
		document.getElementById("popUpDiv").textContent="INVALID USERNAME OR PASSWORD"
		document.getElementById("popUpDiv").style.display="block";
		document.getElementById("popUpDiv").setAttribute("onclick","animation()")
		document.querySelector(".container").style.opacity="0.2";
	}
}

function profile() {
	if(product_name1==undefined||product_name1=="")
	{
		addtoCardFlag=true;
		addtoCardFlag1=false;
	}
	else{
		addtoCardFlag=true;
		addtoCardFlag1=true;
	}
	page_content.style.display = "none";
	document.getElementById("username1").value="";
	document.getElementById("password1").value="";
	document.getElementById("collection").style.display = "none";
	document.getElementById("homepage1").style.display = "none";
	document.querySelector(".container").style.display = "block";
	document.querySelector(".container").style.opacity="1";
	document.getElementById("addtoCardPage").style.display="none";
	document.getElementById("wishlistPage").style.display = "none";
	document.getElementById("addToCard").style.display = "none";
}

// -------------------------homepage---------------------------------

function homefun() {
	amount=0;
	if(flag1==true){
		document.getElementById("notification").style.display="block";
		let arr5=JSON.parse(localStorage.getItem("addtocart"));
		document.getElementById("notification").textContent=arr5.length;
	}
	else{
		document.getElementById("notification").style.display="none";
	}
	document.getElementById("addtoCardPage").style.display="none";
	document.getElementById("popUpDiv").style.display="none";
	document.getElementById("collection").style.display = "none";
	document.querySelector(".container").style.display = "none";
	document.getElementById("homepage1").style.display = "block";
	page_content.style.display = "none";
	document.getElementById("addToCard").style.display = "none";
	document.getElementById("wishlistPage").style.display = "none";
}

//---------------------------homepage slide divs------------------------

let dotparent = document.querySelector(".slide");
let images = document.querySelector("#images");
let dotchild = dotparent.children[0];
dotchild.classList.add("dotfill");
let x = -1920;
function imgmove(num) {
	images.style.transform = "translateX(" + x * num + "px)";
	let dotchild = dotparent.children[num];
	dotchild.classList.add("dotfill");
	slideshow(num);
}

function slideshow(num) {
	for (let i = 0; i < dotparent.childElementCount; i++) {
		dotparent.children[i].className = "dot";
	}
	dotparent.children[num].className = "dotfill";
}



//-----------------------------------------------------------------------


var topmenus=document.querySelectorAll(".topmenus");
var mensCollection=document.querySelectorAll(".mensCollection");
topmenus[1].addEventListener("mouseover",(event)=>{
	mensCollection[0].style.display="block";
})
topmenus[1].addEventListener("mouseout",(event)=>{
	mensCollection[0].style.display="none";
})
topmenus[2].addEventListener("mouseover",(event)=>{
	mensCollection[1].style.display="block";
})
topmenus[2].addEventListener("mouseout",(event)=>{
	mensCollection[1].style.display="none";
})
var searchicon=document.getElementById("searchicon");
var search=document.getElementById("search");
searchicon.addEventListener("click", function() {
	document.querySelector(".searchbarBelowDiv").style.display="grid";
  });
  search.addEventListener("click", function() {
	document.querySelector(".searchbarBelowDiv").style.display="grid";
  });

//---------------------------collection page-------------------------------

let saree;
var topImageName;
function collection(product) {
	document.getElementById("addtoCardPage").style.display="none";
	document.getElementById("popUpDiv").style.display="none";
	document.querySelector(".searchbarBelowDiv").style.display="none";
	range1.value=10;
	range2.value=1000;
	 price1.textContent="Rs. 100.00";
	 price2.textContent="Rs. 1000.00";
	 product_name1="";
	if(product=="Sarees")
	{
		saree=product_saree;
		topImageName="product_saree";
	}
	else if(product=="Western")
	{
	
		saree=product_westernWear;
		topImageName="product_westernWear";
	}
	else if(product=="Kurti")
	{
		saree=product_kurti;
		topImageName="product_kurti";
	}
	else if(product=="kids")
	{
		saree=product_kidswear;
		topImageName="product_kidswear";
	}
	else if(product=="otto")
	{
		saree=product_otto;
		topImageName="product_otto";
	}
	else if(product=="dhotis")
	{
		saree=product_dhotis;
		topImageName="product_dhotis";
	}
	else if(product=="mens")
	{
		saree=product_shirts;
		topImageName="product_shirts";
	}
	else if(product=="cheese")
	{
		saree=product_cheese;
		topImageName="product_cheese";
	}
	else if(product=="biba")
	{
		saree=product_biba;
		topImageName="product_biba";
	}
	else if(product=="given")
	{
		saree=product_given;
		topImageName="product_given";
	}
	else if(product=="trands")
	{
		saree=product_trands;
		topImageName="product_trands";
	}
	document.querySelector(".container").style.display = "none";
	page_content.style.display = "none";
	document.getElementById("collection").style.display = "block";
	document.getElementById("homepage1").style.display = "none";
	document.getElementById("slowmotion").setAttribute("src",image_Name[topImageName].imagetop)
	// document.getElementById("imagename").textContent=image_Name[topImageName].text;
	let material = document.querySelector(".material");
	material.innerHTML = "";
	for (let i = 0; i < Object.keys(saree).length; i++) {
		let sareedetails = document.createElement("p");
		sareedetails.setAttribute("class", "sareedetails")
		sareedetails.textContent = Object.values(saree)[i].details[0];
		let rate = document.createElement("p");
		rate.setAttribute("class", "rate");
		rate.textContent = Object.values(saree)[i].details[4];
		let anchor = document.createElement("a");
		anchor.setAttribute("href", "#");
		let wishlistName = document.createElement("p");
		wishlistName.textContent = "Wislist";
		wishlistName.style.display = "inline-block";
		let img = document.createElement("img");
		img.setAttribute("onclick", "page_contentfun(this,saree)");
		img.setAttribute("id", Object.keys(saree)[i]);
		img.setAttribute("src", Object.values(saree)[i].img[0]);
		img.className = "sareeimages";
		let heartDiv = document.createElement("div");
		heartDiv.setAttribute("class", "heartDiv");
		let heart = document.createElement("i");
		heart.setAttribute("onclick", "wishlistAdd(this)");
		heart.setAttribute("class", "fa-regular fa-heart");
		let imgDiv = document.createElement("div");
		imgDiv.setAttribute("class", "imageDiv");
		imgDiv.setAttribute("onmouseout", "hover(this)");
		imgDiv.setAttribute("onmouseover", "hoverstop(this)");
		let wishlistdiv = document.createElement("div");
		wishlistdiv.setAttribute("class", "wishlistdiv");		
		heartDiv.appendChild(heart);
		material.appendChild(imgDiv);
		imgDiv.appendChild(anchor);
		anchor.appendChild(img);
		imgDiv.appendChild(wishlistdiv);
		wishlistdiv.appendChild(heartDiv);
		wishlistdiv.appendChild(wishlistName);
		imgDiv.appendChild(sareedetails);
		imgDiv.appendChild(rate);
	}
	let arr = localStorage.getItem("wishlist");
	if(arr!=null)
	{
		arr = arr.split(",");
		arr = [...new Set(arr)];
		let arr1;
		if(saree==product_saree)
		{
			arr1 = arr.filter(word => word[1]=="a")
		}
		else if(saree==product_westernWear)
		{
			arr1 = arr.filter(word => word[1]=="e")
		}
		else if(saree==product_kurti)
		{
			arr1 = arr.filter(word => word[1]=="u")
		}
		else if(saree==product_kidswear)
		{
			arr1 = arr.filter(word => word[1]=="i")
		}
		else if(saree==product_otto)
		{
			arr1 = arr.filter(word => word[1]=="t")
		}
		else if(saree==product_dhotis)
		{
			arr1 = arr.filter(word => word[1]=="o")
		}
		else if(saree==product_shirts)
		{
			arr1 = arr.filter(word => word[1]=="h")
		}
		else if(saree==product_cheese)
		{
			arr1 = arr.filter(word => word[0]=="c")
		}
		else if(saree==product_biba)
		{
			arr1 = arr.filter(word => word[0]=="b")
		}
		else if(saree==product_given)
		{
			arr1 = arr.filter(word => word[0]=="g")
		}
		else if(saree==product_trands)
		{
			arr1 = arr.filter(word => word[0]=="t")
		}
		for (let j = 0; j < arr1.length; j++) {
			document.getElementById(arr1[j]).parentNode.nextSibling.firstChild.firstChild.className = "fa-solid fa-heart";
			document.getElementById(arr1[j]).parentNode.nextSibling.firstChild.firstChild.setAttribute("onclick", "wishlistRemove(this)");
		}
	}
	let colorDiv = document.getElementsByClassName("colorDiv");
	for (var i = 0; i < colorDiv.length; i++) {
		colorDiv[i].textContent = "";
	}
	colorsContainerCreate(saree);
	brandsContainerCreate();
}

//---------------------------------color container create function-----------------------------
let brandsArr = [];
let colorArr =[];
let discountArr=["10%","20%","30%","40%","50%"];
function colorsContainerCreate(saree)
{
	let colorsContainer = document.querySelector(".colorsContainer");
	colorsContainer.innerHTML="";
	let colorText = document.querySelector(".firstFilter");
	colorText.appendChild(colorsContainer);
	let arr1 = [];
	for (let i = 0; i < Object.keys(saree).length; i++) {
		arr1.push(Object.values(saree)[i].details[1]);
		brandsArr.push(Object.values(saree)[i].details[2]);
	}
	colorArr= [...new Set(arr1)];
	for (let j = 0; j < colorArr.length; j++) {
		let colorDiv = document.createElement("div");
		let colorName = document.createElement("p");
		colorName.setAttribute("class", "colorName");
		colorName.textContent = colorArr[j];
		colorDiv.setAttribute("class", "colorDiv");
		colorDiv.setAttribute("id", colorArr[j]);
		colorDiv.setAttribute("onclick", "displayTick(this)");
		colorDiv.style.backgroundColor = colorArr[j];
		colorsContainer.appendChild(colorDiv);
		colorsContainer.appendChild(colorName);
	}
}

function colorShow(x) {
	x.className = "fa-solid fa-angle-up";
	x.setAttribute("onclick", "colorHidden(this)");
	$(".colorsContainer").slideDown("slow");
	let colorDiv = document.querySelector(".colorsContainer");
	colorDiv.style.display = "block";
}

function colorHidden(y) {
	y.className = "fa-solid fa-angle-down";
	y.setAttribute("onclick", "colorShow(this)");
	$(".colorsContainer").slideUp("slow");
	let colorDiv = document.querySelector(".colorsContainer");
	colorDiv.style.display = "block";
}

//---------------------brands container create function------------------------------------

let brandsArray=[];
function brandsContainerCreate()
{
	brandsArray= [...new Set(brandsArr)];
	let brandsDiv = document.querySelector(".brandsContainer");
	brandsDiv.innerHTML="";
	for (let k = 0; k < brandsArray.length; k++) {
		let checkbox = document.createElement("div");
		checkbox.setAttribute("class", "colorDiv");
		checkbox.setAttribute("onclick", "displayTick(this)")
		let brandsName = document.createElement("p");
		brandsName.setAttribute("class", "brandsName");
		checkbox.setAttribute("id", brandsArray[k]); 
		brandsName.textContent = brandsArray[k];
		brandsDiv.appendChild(checkbox);
		brandsDiv.appendChild(brandsName);
	}
}

function brands(u) {
	u.className = "fa-solid fa-angle-up";
	let brandsDiv=document.querySelector(".brandsContainer");
	$(".brandsContainer").slideDown("slow");
	u.setAttribute("onclick", "brandsRemove(this)");
	brandsDiv.style.display = "block";
}

function brandsRemove(v) {
	v.className = "fa-solid fa-angle-down";
	v.setAttribute("onclick", "brands(this)");
	$(".brandsContainer").slideUp("slow");
	let brandsDiv=document.querySelector(".brandsContainer");
	brandsDiv.style.display = "block";
}

//--------------------pricefilter create-------------------------------------------

function minvalue() {
	if ((Number(range2.value) - Number(range1.value)) <= 0) {
		range1.value = range2.value;
	}
	price1.textContent = "Rs. " + range1.value + ".00";
	filter("price");
}

function maxvalue() {
	if ((Number(range2.value) - Number(range1.value)) <= 0) {
		range2.value = range1.value;
	}
	price2.textContent = "Rs. " + range2.value + ".00";
	filter("price");
}

function rateShow(z) {
	z.className = "fa-solid fa-angle-up";
	$(".range-slider").slideToggle("slow");
	z.setAttribute("onclick", "rateHidden(this)");
	document.querySelector(".range-slider").style.display = "block";
}

function rateHidden(a) {
	a.className = "fa-solid fa-angle-down";
	$(".range-slider").slideToggle("slow");
	a.setAttribute("onclick", "rateShow(this)");
	document.querySelector(".range-slider").style.display = "block";
}

//-------------------------------discount container show and hide---------------------------
let DiscountDiv = document.querySelector(".DiscountContainer");
function Discount(t) {
	t.className = "fa-solid fa-angle-up";
	t.setAttribute("onclick", "DiscountRemove(this)");
	$(".DiscountContainer").slideDown("slow");
	DiscountDiv.style.display = "block";
}

function DiscountRemove(v) {
	v.className = "fa-solid fa-angle-down";
	$(".DiscountContainer").slideUp("slow");
	v.setAttribute("onclick", "Discount(this)");
	DiscountDiv.style.display = "block";
}
//---------------------------tick show and hide in side bar----------------------------
function displayTick(s) {
	s.textContent = "✓";
	s.setAttribute("onclick", "removeTick(this)");
	filter(s);
}

function removeTick(q) {
	q.textContent = "";
	q.setAttribute("onclick", "displayTick(this)");
	filter1(q);
}

//-------------------------------------filter-------------------------------------------

let colorFilter = [];
let discountFilter=[];
let brandsFilter=[];
let filterArray=[];
let price11 = range1;
let price22 = range2;
function filter(s) {
	let searchArray=[];
	let priceArray=[];
	for (let i = 0; i < Number(Object.keys(saree).length); i++) {
		if(s=="price")
		{
			if((Number(Object.values(saree)[i].details[4].match(/\d/g).join(""))>price11.value)&&(Number(Object.values(saree)[i].details[4].match(/\d/g).join(""))<price22.value))
		{
			priceArray.unshift(Object.keys(saree)[i]);
			filterArray=priceArray.concat(filterArray);
		}
		}
		else{
		if(Object.values(saree)[i].details[0]==document.getElementById("search").value)
		{
			searchArray.push(Object.keys(saree)[i]);
			filterArray=searchArray;
		}
		
		 else if (Object.values(saree)[i].details[1] == s.id) {
			
			colorFilter.unshift(Object.keys(saree)[i]);
	
			filterArray=colorFilter.concat(discountFilter).concat(searchArray).concat(brandsFilter);
		} 
		 else if (Object.values(saree)[i].discount == s.id) {
			discountFilter.unshift(Object.keys(saree)[i]);
	
			filterArray=discountFilter.concat(colorFilter).concat(brandsFilter).concat(searchArray);
		} 
		else if (Object.values(saree)[i].details[2] == s.id) {

			brandsFilter.unshift(Object.keys(saree)[i]);
			filterArray=brandsFilter.concat(discountFilter).concat(searchArray).concat(colorFilter);
		} 
		
	}
}
	createElement();
}




function filter1(u) {
	let colorFilter1 = [];
	let discountFilter1=[];
	let brandsFilter1=[];
	for (let i = 0; i < Number(Object.keys(saree).length); i++) {
		if (Object.values(saree)[i].details[1] == u.id) {
			colorFilter1.unshift(Object.keys(saree)[i]);
		} else if (Object.values(saree)[i].discount == u.id) {
			discountFilter1.unshift(Object.keys(saree)[i]);
		} else if (Object.values(saree)[i].details[2] == u.id) {
			brandsFilter1.unshift(Object.keys(saree)[i]);
		}
		// if((Number(Object.values(saree)[i].details[4].match(/\d/g).join(""))>price11.value)&&(Number(Object.values(saree)[i].details[4].match(/\d/g).join(""))<price22.value))
		// {
		// 	priceArray.unshift(Object.keys(saree)[i]);
		// }
	}
	if(colorArr.includes(u.id))
	{
		for (let j = 0; j < colorFilter.length; j++) {
			for (let k = 0; k < colorFilter1.length; k++) {
				if (colorFilter[j] == colorFilter1[k]) {
					colorFilter.splice(colorFilter.indexOf(colorFilter[j]), 1);
				}
			}
		}
	}
	
	else if(brandsArr.includes(u.id))
	{
		for (let j = 0; j < brandsFilter.length; j++) {
			for (let k = 0; k < brandsFilter1.length; k++) {
				if (brandsFilter[j] == brandsFilter1[k]) {
					brandsFilter.splice(brandsFilter.indexOf(brandsFilter[j]), 1);
				}
			}
		}
	}
	else if(discountArr.includes(u.id))
	{
		for (let j = 0; j < discountFilter.length; j++) {
			for (let k = 0; k < discountFilter1.length; k++) {
				if (discountFilter[j] == discountFilter1[k]) {
					discountFilter.splice(discountFilter.indexOf(discountFilter[j]), 1);
				}
			}
		}
	}
	filterArray=colorFilter.concat(discountFilter).concat(brandsFilter);
	createElement();
}

function createElement() {
	let filterArray2 = [...new Set(filterArray)];
	if (filterArray2.length == 0) {
		collection(saree);
	} else {
		document.querySelector(".material").innerHTML = "";
		for (let j = 0; j <filterArray2.length; j++) {
			let sareedetails = document.createElement("p");
			let rate = document.createElement("p");
			let anchor = document.createElement("a");
			anchor.setAttribute("href", "#");
			let wishlistName = document.createElement("p");
			let img = document.createElement("img");
			let heartDiv = document.createElement("div");
			let heart = document.createElement("i");
			let imgDiv = document.createElement("div");
			let wishlistdiv = document.createElement("div");
			wishlistdiv.setAttribute("class", "wishlistdiv");
			wishlistName.textContent = "Wislist";
			wishlistName.style.display = "inline-block";
			rate.setAttribute("class", "rate");
			rate.textContent = saree[filterArray2[j]].details[4];
			sareedetails.setAttribute("class", "sareedetails")
			heartDiv.setAttribute("class", "heartDiv");
			heart.setAttribute("onclick", "wishlistAdd(this)")
			heart.setAttribute("class", "fa-regular fa-heart");
			imgDiv.setAttribute("class", "imageDiv");
			imgDiv.setAttribute("onmouseout", "hover(this)");
			imgDiv.setAttribute("onmouseover", "hoverstop(this)");
			img.setAttribute("onclick", "page_contentfun(this,saree)");
			img.setAttribute("id", filterArray2[j]);
			heartDiv.appendChild(heart);
			img.setAttribute("src", saree[filterArray2[j]].img[0]);
			sareedetails.textContent = saree[filterArray2[j]].details[0];
			img.className = "sareeimages";
			let material = document.querySelector(".material");
			material.appendChild(imgDiv);
			imgDiv.appendChild(anchor);
			anchor.appendChild(img);
			imgDiv.appendChild(wishlistdiv);
			wishlistdiv.appendChild(heartDiv);
			wishlistdiv.appendChild(wishlistName);
			imgDiv.appendChild(sareedetails);
			imgDiv.appendChild(rate);
		}
		let arr = localStorage.getItem("wishlist");
		if(arr!=null)
		{
			arr = arr.split(",");
		}
		arr = [...new Set(arr)];
		for (let k = 0; k < arr.length; k++) {
			if (filterArray2.includes(arr[k])) {
				document.getElementById(arr[k]).parentNode.nextSibling.firstChild.firstChild.className = "fa-solid fa-heart";
				document.getElementById(arr[k]).parentNode.nextSibling.firstChild.firstChild.setAttribute("onclick", "wishlistRemove(this)");
			}
		}
	}
}

//-------------------------------hover and hoverstop function--------------------------------------
function hover(y) {
	x = y.firstChild.firstChild.id;
	document.getElementById(x).setAttribute("src", saree[x].img[0]);
	let wishlist = document.getElementById(x).parentNode.nextSibling;
	wishlist.style.display = "none";
}

function hoverstop(y) {
	x = y.firstChild.firstChild.id;
	document.getElementById(x).setAttribute("src", saree[x].img[1]);
	let wishlist = document.getElementById(x).parentNode.nextSibling;
	wishlist.style.position = "sticky";
	wishlist.style.display = "block";
}

function hover1(y) {
	x = y.firstChild.nextSibling.id;
	y.firstChild.nextSibling.setAttribute("src", saree[x].img[0]);
}

function hoverstop1(y) {
	x = y.firstChild.nextSibling.id;
	if(x.slice(0, 2)=="sa")
	{
		saree=product_saree;
	}
	else if(x.slice(0, 2)=="we")
	{
		saree=product_westernWear;
	}
	else if(x.slice(0, 2)=="gi")
	{
		saree=product_given;
	}
	else if(x.slice(0, 2)=="tr")
	{
		saree=product_trands;
	}
	else if(x.slice(0, 2)=="ch")
	{
		saree=product_cheese;
	}
	else if(x.slice(0, 2)=="do")
	{
		saree=product_dhotis;
	}
	else if(x.slice(0, 2)=="ku")
	{
		saree=product_kurti;
	}
	else if(x.slice(0, 2)=="ki")
	{
		saree=product_kidswear;
	}
	else if(x.slice(0, 2)=="sh")
	{
		saree=product_shirts;
	}
	else if(x.slice(0, 2)=="bi")
	{
		saree=product_biba;
	}
	else if(x.slice(0, 2)=="ch")
	{
		saree=product_cheese;
	}
	console.log(x);
	y.firstChild.nextSibling.setAttribute("src", saree[x].img[1]);
}

//--------------------------------------pagecontent----------------------------------
let subimagesContainer = document.querySelector(".sub_images");
let mainimage = document.createElement("img");
document.querySelector(".main_image").appendChild(mainimage);
for (let i = 0; i < 4; i++) {
	let subimagesDiv = document.createElement("div");
	// let heartDiv = document.createElement("div");
	subimagesDiv.setAttribute("class", "subimagesDiv");
	let subImages = document.createElement("img");
	subImages.setAttribute("class", "subImages");
	// heartDiv.setAttribute("class", "heartDiv");
	subImages.setAttribute("onclick", "mainimageChangefun(this)");
	subimagesDiv.appendChild(subImages);
	subimagesContainer.appendChild(subimagesDiv);
}
let product_name;
function page_contentfun(x,saree) {
	amount=0;
	product_name=x.id;
	document.getElementById("wishlistPage").style.display = "none";
	page_content.style.display = "flex";
  	let arr=[];
	let y = x.id;
	let arr1=[];

	let wishlistarray = localStorage.getItem("wishlist");
	if(wishlistarray!=null)
	{
		wishlistarray = wishlistarray.split(",");
	}
	wishlistarray = [...new Set(wishlistarray)];
	if(saree==product_saree){
		wishlistarray=wishlistarray.filter(word => word[0]=="s");
		topImageName="product_saree";
  	if((localStorage.getItem("recentViews"))==null){
		arr = ["saree4", "saree5", "saree13", "saree17", "saree3","saree30"];
		localStorage.setItem("recentViews", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["saree4", "saree5", "saree13", "saree17", "saree3","saree30"];
		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews").split(","))];
	}
}
else if(saree==product_westernWear)
{
	wishlistarray=wishlistarray.filter(word => word[0]=="w");
	topImageName="product_westernWear";
	if((localStorage.getItem("recentViews1"))==null){
		arr = ["westernWear4", "westernWear5", "westernWear13", "westernWear17", "westernWear3","westernWear30"];
		localStorage.setItem("recentViews1", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews1").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews1");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["westernWear4", "westernWear5", "westernWear13", "westernWear17", "westernWear3","westernWear30"];
		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews1", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews1").split(","))];
	}
}
else if(saree==product_kurti)
{
	// wishlistarray=wishlistarray.filter(word => word[0]=="k");
	topImageName="product_kurti";
	if((localStorage.getItem("recentViews2"))==null){
		arr = ["kurti4", "kurti5", "kurti13", "kurti17", "kurti3","kurti30"];
		localStorage.setItem("recentViews2", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews2").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews2");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["kurti4", "kurti5", "kurti13", "kurti17", "kurti3","kurti30"];		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews2", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews2").split(","))];
	}
}
else if(saree==product_kidswear)
{
	// wishlistarray=wishlistarray.filter(word => word[0]=="k");
	topImageName="product_kidswear";

	if((localStorage.getItem("recentViews3"))==null){
		arr = ["kidswear4", "kidswear5", "kidswear13", "kidswear17", "kidswear3","kidswear30"];
		localStorage.setItem("recentViews3", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews3").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews3");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["kidswear4", "kidswear5", "kidswear13", "kidswear17", "kidswear3","kidswear3"];		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews3", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews3").split(","))];
	}
}

else if(saree==product_otto)
{
	wishlistarray=wishlistarray.filter(word => word[0]=="o");
	topImageName="product_otto";
	if((localStorage.getItem("recentViews4"))==null){
		arr = ["otto4", "otto5", "otto13", "otto17", "otto3","otto23"];
		localStorage.setItem("recentViews4", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews3").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews4");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["otto4", "otto5", "otto13", "otto17", "otto3","otto3"];		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews4", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews4").split(","))];
	}
}
else if(saree==product_dhotis)
{
	// wishlistarray=wishlistarray.filter(word => word[0]=="o");
	topImageName="product_dhotis";
	if((localStorage.getItem("recentViews11"))==null){
		arr = ["doti4", "doti5", "doti13", "doti17", "doti3","doti23"];
		localStorage.setItem("recentViews11", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews11").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews11");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["doti4", "doti5", "doti13", "doti17", "doti3","doti3"];		}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews11", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews11").split(","))];
	}
}

else if(saree==product_shirts)
{
	topImageName="product_shirts";
	if((localStorage.getItem("recentViews5"))==null){
		arr = ["shirt4", "shirt5", "shirt13", "shirt17", "shirt3","shirt23"];
		localStorage.setItem("recentViews5", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews5").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews5");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["shirt4", "shirt5", "shirt13", "shirt17", "shirt3","shirt23"];	}
		else{
			arr.unshift(y);
		}
		localStorage.setItem("recentViews5", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews5").split(","))];
	}
}
else if(saree==product_cheese)
{
	topImageName="product_cheese";
	if((localStorage.getItem("recentViews6"))==null){
		arr = ["cheese30", "cheese29", "cheese28", "cheese22", "cheese23","cheese24"];
		localStorage.setItem("recentViews6", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews6").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews6");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["cheese30", "cheese29", "cheese28", "cheese22", "cheese23","cheese24"];	}
		else{
			arr.unshift(y);
		}
		
		localStorage.setItem("recentViews6", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews6").split(","))];
	}
}
else if(saree==product_biba)
{
	topImageName="product_biba";
	if((localStorage.getItem("recentViews7"))==null){
		arr = ["biba30", "biba29", "biba28", "biba22", "biba23","biba24"];
		localStorage.setItem("recentViews7", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews7").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews7");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr = ["biba30", "biba29", "biba28", "biba22", "biba23","biba24"];	}
		else{
			arr.unshift(y);
		}
		
		localStorage.setItem("recentViews7", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews7").split(","))];
	}
}
else if(saree==product_given)
{
	topImageName="product_given";
	if((localStorage.getItem("recentViews8"))==null){
		arr = ["given3", "given2", "given8", "given12", "given3","given4","given1"];
		localStorage.setItem("recentViews8", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews8").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews8");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr =  ["given3", "given2", "given8", "given12", "given3","given4","given1"];
		}
		else{
			arr.unshift(y);
		}
		
		localStorage.setItem("recentViews8", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews8").split(","))];
	}
}
else if(saree==product_trands)
{
	topImageName="product_trands";
	if((localStorage.getItem("recentViews9"))==null){
		arr = ["trands3", "trands2", "trands8", "trands12", "trands3","trands4","trands1"];
		localStorage.setItem("recentViews9", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews9").split(","))];
	}
	else{
		arr = localStorage.getItem("recentViews9");
		arr = arr.split(",");
		if(arr.length<5)
		{
			arr =  ["trands3", "trands2", "trands8", "trands12", "trands3","trands4","trands1"];
		}
		else{
			arr.unshift(y);
		}
		
		localStorage.setItem("recentViews9", arr);
		arr1 = [...new Set(localStorage.getItem("recentViews9").split(","))];
	}
}
	mainimage.setAttribute("src", saree[y].img[0]);
	mainimage.setAttribute("id", saree[y].img[0]);
	document.getElementById("collection").style.display = "none";
	let sareeName = document.getElementById("sareeName");
	let productName = document.getElementById("productName");
	let brandsName = document.getElementById("brandsName");
	let colorName = document.getElementById("colorName");
	let rate = document.getElementById("rate");
	let size = document.getElementById("Size");
	let imageDiv1 = document.querySelectorAll(".imageDiv1");
	for (let j = 1; j <=imageDiv1.length; j++) {
		imageDiv1[j-1].firstChild.nextSibling.setAttribute("onclick", "page_contentfun(this,saree)");
		imageDiv1[j-1].firstChild.nextSibling.setAttribute("id", arr1[j]);
		imageDiv1[j-1].firstChild.nextSibling.setAttribute("src", saree[arr1[j]].img[0]);
		imageDiv1[j-1].childNodes[3].textContent = saree[arr1[j]].details[0];
		imageDiv1[j-1].childNodes[5].textContent = saree[arr1[j]].details[4];
	}
	document.querySelector(".pageName").setAttribute("onclick","collection('"+image_Name[topImageName].text.split(' ')[0].toString()+"')");
	document.querySelector(".pageName").textContent="/"+image_Name[topImageName].text;
	let totalRating = document.getElementById("ratingNumber");
	totalRating.textContent = saree[y].ratings;
	brandsName.textContent = "Brands Name: " + saree[y].details[2];
	productName.textContent = "Name: " + saree[y].details[0];
	colorName.textContent = "Color: " + saree[y].details[1];
	sareeName.textContent = saree[y].details[0];
	rate.textContent = "Rate: " + saree[y].details[4];
	size.textContent = "Size: " + saree[y].details[3]
	page_content.style.display = "block";
	let Divlength = document.getElementsByClassName("subImages")
	for (let i = 0; i < Divlength.length; i++) {
		Divlength[i].setAttribute("src", saree[y].img[i]);
	}
	blurimage();
	// // for (let k = 0; k <wishlistarray.length-1; k++) {
	// // 	if (saree[wishlistarray[k]].img[0] == mainimage.id)
	// // 	 {
	// // 		document.getElementById("main_imageHeart").firstChild.nextSibling.className="fa-solid fa-heart";
	// // 		document.getElementById("main_imageHeart").firstChild.nextSibling.setAttribute("onclick","wishlistRemove(this)");
	// // 		break;
	// // 	}
	// // 	else{
	// // 		document.getElementById("main_imageHeart").firstChild.nextSibling.className="fa-regular fa-heart";
	// // 		document.getElementById("main_imageHeart").firstChild.nextSibling.setAttribute("onclick","wishlistAdd(this)");
	// // 		break;
	// // 	}
	// }
}

function blurimage() {
	let sub = document.querySelectorAll(".subimagesDiv");
	for (let j = 0; j < sub.length; j++) {
		if (sub[j].firstChild.src.match(mainimage.src)) {
			sub[j].firstChild.classList.add("mainpageChange");
		} else {
			sub[j].firstChild.classList.remove("mainpageChange");
		}
	}
}
let sub = document.querySelectorAll(".subimagesDiv")

function mainimageChangefun(y) {
	$(".main_image").toggle({width:'0px'});
	mainimage.src = y.src;
	blurimage();
	$(".main_image").toggle({width:'100%'});
}

function writeReview() {
	document.getElementById("reviewclick").style = "display:none";
	document.getElementById("writeReviewdiv").style = "display:block";
}

function cancelreview() {
	document.getElementById("reviewclick").style = "display:block";
	document.getElementById("writeReviewdiv").style = "display:none";
}

//-----------------------wishlist add and remove------------------------

function wishlistAdd(y) {
	let arr = localStorage.getItem("wishlist");
	if(arr!=null){
		arr = arr.split(",");
		arr = [...new Set(arr)];
		arr.unshift(y.parentNode.parentNode.previousElementSibling.firstChild.id);
		localStorage.setItem("wishlist", arr);
	}
	else{
		var arr1=[];
		arr1.unshift(y.parentNode.parentNode.previousElementSibling.firstChild.id);
		localStorage.setItem("wishlist", arr1);
	}
	y.className = "fa-solid fa-heart";
	y.setAttribute("onclick", "wishlistRemove(this)");
}

function wishlistRemove(y) {
	let arr = localStorage.getItem("wishlist");
	arr = arr.split(",");
	arr = [...new Set(arr)];
	arr.splice(arr.indexOf(y.parentNode.parentNode.previousElementSibling.firstChild.id), 1);
	localStorage.setItem("wishlist", arr);
	y.className = "fa-regular fa-heart";
	y.setAttribute("onclick", "wishlistAdd(this)")
}

function Wishlist() {
	document.getElementById("wishlistDiv").innerHTML = "";
	document.getElementById("collection").style.display = "none";
	document.querySelector(".container").style.display = "none";
	document.getElementById("homepage1").style.display = "none";
	page_content.style.display = "none";
	document.getElementById("addToCard").style.display = "none";
	document.getElementById("wishlistPage").style.display = "block";
	let arr = localStorage.getItem("wishlist");
	if(arr!=null)
	{
		arr = arr.split(",");
		arr = [...new Set(arr)];
	}
	if (arr=="") {
		document.getElementById("NoWishList").style.display = "block";
	} else {
		for (let i = 0; i < arr.length-1; i++) {
			document.getElementById("NoWishList").style.display = "none";
			let anchor = document.createElement("a");
			anchor.setAttribute("href", "#");
			let wishListMaterialDiv = document.createElement("div");
			wishListMaterialDiv.setAttribute("class", "wishListMaterialDiv");
			document.getElementById("wishlistDiv").appendChild(wishListMaterialDiv);
			let wishListMaterialImage = document.createElement("img");
			let sareedetails = document.createElement("p");
			let rate = document.createElement("p");
			rate.setAttribute("class", "rate");
			sareedetails.setAttribute("class", "sareedetails");
			if(arr[i].slice(0, 2)=="sa")
			{
				saree=product_saree;
			}
			else if(arr[i].slice(0, 2)=="we")
			{
				saree=product_westernWear;
			}
			else if(arr[i].slice(0, 2)=="ku")
			{
				saree=product_kurti;
			}
			else if(arr[i].slice(0, 2)=="ki")
			{
				saree=product_kidswear;
			}
			else if(arr[i].slice(0, 2)=="do")
			{
				saree=product_dhotis;
			}
			else if(arr[i].slice(0, 2)=="sh")
			{
				saree=product_shirts;
			}
			else if(arr[i].slice(0, 2)=="ot")
			{
				saree=product_otto;
			}
			else if(arr[i].slice(0, 2)=="ch")
			{
				saree=product_cheese;
			}
			else if(arr[i].slice(0, 2)=="bi")
			{
				saree=product_biba;
			}
			else if(arr[i].slice(0, 2)=="gi")
			{
				saree=product_given;
			}
			else if(arr[i].slice(0, 2)=="tr")
			{
				saree=product_trands;
			}
			sareedetails.textContent = saree[arr[i]].details[0];
			rate.textContent = saree[arr[i]].details[4];
			wishListMaterialImage.setAttribute("src", saree[arr[i]].img[0]);
			wishListMaterialImage.setAttribute("id", arr[i]);
			wishListMaterialImage.setAttribute("onclick", "page_contentfun(this,saree)");
			wishListMaterialDiv.setAttribute("onmouseout", "hover1(this)");
			wishListMaterialDiv.setAttribute("onmouseover", "hoverstop1(this)");
			wishListMaterialDiv.appendChild(anchor);
			wishListMaterialDiv.appendChild(wishListMaterialImage);
			wishListMaterialDiv.appendChild(sareedetails);
			wishListMaterialDiv.appendChild(rate);
		}
	}
}

// ----------------------------star color fill---------------------------------------

let flag = false;

function colorfill(y) {
	for (let i = 0; i <= Number(y.id); i++) {
		document.getElementById(i).className = ("fa-solid fa-star reviewstars");
	}
	flag = false;
}
BuyItNow
function colorRemove(y) {
	if (flag == false) {
		for (let i = 0; i <= Number(y.id); i++) {
			document.getElementById(i).className = ("fa-regular fa-star reviewstars");
		}
	}
}

function clickRating(y) {
	flag = true;
	for (let i = 0; i <= Number(y); i++) {
		document.getElementById(i).className = ("fa-solid fa-star reviewstars");
	}
}


let itemcount = document.getElementById("number");
let count = 1;

function addItem() {
	count++;
	itemcount.value = count;
}

function minusItem() {
	if (count == 1) {
		count = 1;
	} else {
		count--;
	}
	itemcount.value = count;
}
// ----------------------------Buy it now---------------------------------------
let qty=1;
function BuyItNow(x, y) {
	addtoCardFlag1=false;
	document.getElementById("CustomerName").value="";
	document.getElementById("CustomerAddress").value="";
	document.getElementById("cartDiv").style.display="none";
	document.getElementById("addtoCardPage").style.display="flex";
	document.getElementById("addToCard").style.opacity="1";
	if(y=="")
	{
		document.getElementById("popUpDiv").style.display="block";
		document.getElementById("popUpDiv").setAttribute("onclick","homefun()")
		document.querySelector(".container").style.opacity="0.2";
		document.getElementById("popUpDiv").textContent="ENJOY YOUR PURCHASE"
	}
	else{
	document.querySelector(".container").style.opacity="1";
	document.getElementById("totalPrice").textContent = "      ₹ " + x * Number(y.match(/\d/g).join(""));
	document.getElementById("orderTotal").textContent = "      ₹ " + x * Number(y.match(/\d/g).join(""));
	page_content.style.display = "none";
	document.getElementById("addToCard").style.display = "flex";
	document.querySelector(".container").style.display = "none";
	document.getElementById("ProductDetails").style.display="none";
	document.getElementById("address-Details").style.display="block";
	document.getElementById("deliverAddress").textContent="Deliver to this Address";
	document.getElementById("deliverAddress").setAttribute("onclick","DeliverAddress()");
	}
	document.getElementById("emptyCard").style.display="none";
	qty=x;
}
function BuyItNow1()
{
	product_name1=product_name;
	profile();
}
var flag1=false;
function DeliverAddress()
{
	flag1=true;
	var date = new Date();
	date.setDate(date.getDate() + 5);
	var arr=date.toString().split(" ");
	arr.length=3;
	document.getElementById("DeliveryDate").textContent="Estimated Delivery by "+arr.join(" ");
	document.getElementById("productDetailImage").setAttribute("src",saree[product_name].img[0]);
	document.getElementById("address-Details").style.display="none";
	document.getElementById("ProductDetails").style.display="grid";
	document.getElementById("deliverAddress").textContent="PLACE ORDER";
	document.getElementById("deliverAddress").setAttribute("onclick","placeOrder()");
	document.getElementById("productDetails1").textContent=saree[product_name].details[0];
	document.getElementById("rate1").textContent=saree[product_name].details[4];
	document.getElementById("Qty").textContent="Qty: "+qty;
	document.getElementById("personName").textContent=document.getElementById("CustomerName").value;
	document.getElementById("personAddress").textContent=document.getElementById("CustomerAddress").value;
	document.getElementById("emptyCard").style.display="none";
}
let arr5=[];
var flag2=true;
if(localStorage.getItem("addtocart")!=null)
	{
		flag1=true;
		flag2=false;
		document.getElementById("notification").style.display="block";
	}
function addToCart()
{
	amount=0;
	addtoCardFlag=true;
	document.getElementById("wishlistPage").style.display="none";
	document.querySelector(".cartImageDiv").innerHTML="";
	document.getElementById("addtoCardPage").style.display="block";
	document.getElementById("addToCard").style.opacity="1";
	arr5=JSON.parse(localStorage.getItem("addtocart"));
	arr5=[...new Set(arr5)];
	document.getElementById("ItemNo").textContent="Item "+arr5.length;
	for(let i=0; i<arr5.length; i++){
	addToCart1(i,Object.values(arr5[i])[0],Object.values(arr5[i])[1],Object.values(arr5[i])[2],Object.values(arr5[i])[3])
	}
	if(flag1==false||arr5.length==0)
	{
		document.getElementById("emptyCard").style.display="flex";
	}
	else if((flag1==true)&&(flag2==true)){
		addToCart1(saree[product_name].img[0],document.getElementById("number").value,saree[product_name].details[4]);
		document.getElementById("emptyCard").style.display="none";
		document.getElementById("addToCard").style.display = "flex";
		document.getElementById("cartDiv").style.display="flex";
	}
	else if((flag1==true)&&(flag2==false)){
		document.getElementById("emptyCard").style.display="none";
		document.getElementById("addToCard").style.display = "flex";
		document.getElementById("cartDiv").style.display="flex";
	}
	document.getElementById("addToCard").style.opacity="1";
	document.getElementById("ProductDetails").style.display="none";
	document.getElementById("address-Details").style.display="none";
	document.getElementById("homepage1").style.display = "none";
	document.getElementById("notification").style.display="none";
	page_content.style.display = "none";
	document.getElementById("collection").style.display = "none";
}
function placeOrder()
{
	flag1=false;
	document.getElementById("popUpDiv").style.display="block";
	document.getElementById("popUpDiv").textContent="Order Placed";
	document.getElementById("addToCard").style.opacity="0.2";
}
function addToCart1(o,x,y,u,t)
{
	var cartDiv=document.getElementById("cartDiv");
	var cartImageDiv=document.querySelector(".cartImageDiv");
	amount+=u * Number(t.match(/\d/g).join(""));
	document.getElementById("totalPrice").textContent= "      ₹ " + amount;
	document.getElementById("orderTotal").textContent= "      ₹ " + amount;
	cartDiv.style.display="grid";
	var cartListDiv=document.createElement("div");
	cartListDiv.setAttribute("class","cardListDiv");
	var cartListImageDiv=document.createElement("div");
	cartListImageDiv.setAttribute("class","cartListImageDiv");
	var productname=document.createElement("p");
	productname.setAttribute("class","productName");
	productname.textContent=x;
	var SizeQtyDiv=document.createElement("div");
	SizeQtyDiv.setAttribute("class","SizeQtyDiv");
	var QtyDiv=document.createElement("p");
	var editRemove=document.createElement("div");
	editRemove.setAttribute("class","editRemove");
	QtyDiv.setAttribute('class',"QtyDiv");
	QtyDiv.textContent="Qty: "+u;
	var pricediv=document.createElement("p");
	pricediv.setAttribute("class","pricediv");
	pricediv.textContent=t;
	var cartListImage=document.createElement("img");
	var removeDiv=document.createElement("div");
	removeDiv.setAttribute("class","removeDiv");
	removeDiv.setAttribute("onclick","removeDivfun(this,"+o+")");
	removeDiv.textContent="X REMOVE";
	cartListImage.setAttribute("src",y);
	cartListTextDiv=document.createElement("div");
	cartListTextDiv.setAttribute("class","cartListTextDiv");
	cartImageDiv.appendChild(cartListDiv);
	cartListImageDiv.appendChild(cartListImage);
	cartListDiv.appendChild(cartListImageDiv);
	cartListDiv.appendChild(cartListTextDiv);
	cartListDiv.appendChild(removeDiv);
	cartListTextDiv.appendChild(productname);
	cartListTextDiv.appendChild(SizeQtyDiv);
	SizeQtyDiv.appendChild(QtyDiv);
	cartListTextDiv.appendChild(pricediv);
	cartListTextDiv.appendChild(removeDiv);
}

function removeDivfun(element,noOfelement)
{
	arr5=JSON.parse(localStorage.getItem("addtocart"));
	console.log(arr5[1]);
	amount=0;
	console.log(element);
	console.log(noOfelement-1);
	element.parentElement.parentElement.remove();
	arr5.splice(noOfelement,1);
	console.log(arr5);
	localStorage.setItem("addtocart",JSON.stringify(arr5));
	arr5=JSON.parse(localStorage.getItem("addtocart"));
	console.log(arr5.length);
	console.log(arr5);
	for(var i=0; i<arr5.length; i++)
	{
		amount+=arr5[i].qty * Number(arr5[i].rate.match(/\d/g).join(""))
	}
	document.getElementById("totalPrice").textContent= "      ₹ " + amount;
	document.getElementById("orderTotal").textContent= "      ₹ " + amount;
	document.getElementById("ItemNo").textContent="Item "+arr5.length;
	if(arr5.length==0)
	{
		document.getElementById("emptyCard").style.display="flex";
		document.getElementById("addToCard").style.display="none";
	}
}
function addToCart11()
{
	flag1=true;
	flag2=false;
	document.querySelector(".cartImageDiv").innerHTML="";
	let addtocart={
		name:saree[product_name].details[0],
		img:saree[product_name].img[0],
		qty:document.getElementById("number").value,
		rate:saree[product_name].details[4],
	}
	if(localStorage.getItem("addtocart")!=null)
	{
		flag1=true;
		arr5=JSON.parse(localStorage.getItem("addtocart"));
	}
	arr5.unshift(addtocart);
	localStorage.setItem("addtocart",JSON.stringify(arr5));
	arr5=[...new Set(arr5)];
	console.log(arr5);
	for(let i=0; i<arr5.length; i++)
	{
	addToCart1(i,Object.values(arr5[i])[0],Object.values(arr5[i])[1],Object.values(arr5[i])[2],Object.values(arr5[i])[3])
	}
	document.getElementById("notification").style.display="block";
	document.getElementById("notification").textContent=arr5.length;
}

// ----------------------------search bar function ----------------------------

let names=[];
let input=document.getElementById("search");
for(let i of Object.keys(product_saree))
{
	names.push(product_saree[i].details[0]);
}
for(let i of Object.keys(product_kurti))
{
	names.push(product_kurti[i].details[0]);
}
for(let i of Object.keys(product_westernWear))
{
	names.push(product_westernWear[i].details[0]);
}
for(let i of Object.keys(product_shirts))
{
	names.push(product_shirts[i].details[0]);
}
for(let i of Object.keys(product_kidswear))
{
	names.push(product_kidswear[i].details[0]);
}
for(let i of Object.keys(product_dhotis))
{
	names.push(product_dhotis[i].details[0]);
}
let names1=names.sort();

input.addEventListener("keyup",(e)=>{
	document.querySelector(".searchbarBelowDiv").style.display="none";
	document.querySelector(".searchbarBelowDiv1").style.display="block";
	removeElement();
	for(let i of names1)
	{
		if(i.toLowerCase().startsWith(input.value.toLowerCase())&&input.value!="")
		{
			let listItem=document.createElement("li");
			listItem.classList.add("list-items");
			listItem.style.cursor="pointer";
			listItem.setAttribute("onclick","displaynames('"+i+"')");
			let word="<b>"+ i.substring(0,input.value.length)+"</b>";
			word+=i.substring(input.value.length);
			listItem.innerHTML=word;
			document.querySelector(".searchbarBelowDiv1").appendChild(listItem);
		}
	}
});
function displaynames(value1)
{
	input.value=value1;
	for(var i of Object.keys(product_saree))
	{
		if(product_saree[i].details[0]==value1)
		{
			collection('Sarees');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
	for(var i of Object.keys(product_kurti))
	{
		if(product_kurti[i].details[0]==value1)
		{
			collection('Kurti');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
	for(var i of Object.keys(product_westernWear))
	{
		
		if(product_westernWear[i].details[0]==value1)
		{
			collection('Western');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
	for(var i of Object.keys(product_shirts))
	{
		
		if(product_shirts[i].details[0]==value1)
		{
			collection('mens');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
	for(var i of Object.keys(product_dhotis))
	{
		
		if(product_dhotis[i].details[0]==value1)
		{
			collection('dhotis');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
	for(var i of Object.keys(product_kidswear))
	{
		
		if(product_kidswear[i].details[0]==value1)
		{
			collection('kids');
			filter("fdd");
			document.querySelector(".searchbarBelowDiv1").style.display="none";
			break;
		}
	}
}
function removeElement()
{
	let items=document.querySelectorAll(".list-items");
	items.forEach((item) => {
		item.remove();
	});
}
function addtocartnextPage()
{
	document.getElementById("addtoCardPage").style.display="block";
	document.querySelector(".container").style.display="none";
	document.getElementById("addToCard").style.display="flex";
	document.getElementById("cartDiv").style.display="none";
	document.getElementById("address-Details").style.display="block";
	document.getElementById("deliverAddress").setAttribute("onclick","lastAddtocard()");	
}
function lastAddtocard()
{
	var date = new Date();
	date.setDate(date.getDate() + 5);
	var arr=date.toString().split(" ");
	arr.length=3;
	
	document.getElementById("addToCard").style.display="flex";
	document.getElementById("addtoCardPage").style.display="block";
	document.getElementById("cartDiv").style.display="block";
	document.getElementById("address-Details").style.display="none";
	document.querySelector(".cartHeading").style.display="block"; 
	document.querySelector(".cartHeading").firstChild.textContent="Product Details"; 
	document.getElementById("ItemNo").textContent="Estimated Delivery by "+arr.join(" ");
	var removediv=document.querySelectorAll(".removeDiv");
	for(var i=0; i<removediv.length; i++)
	{
		removediv[i].remove();
	}
	document.getElementById("deliverAddress").setAttribute("onclick","placeOrder()");
	localStorage.removeItem("addtocart");

	// console.log(document.querySelector(".cartImageDiv"));
	// document.getElementById("finalproductDetails").appendchild(document.querySelector(".cartImageDiv"));
}