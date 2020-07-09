var myKey = JSON.parse(myKey);

var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);

//set default nights and people to one

var nights = 1;
var people = 1;
var region = "Wellington";

//establish seconds in day for future date calc

var msecsInADay = 86400000;

// Sets default start and end as today and tomorrow

var start = new Date();
var startMonth = start.getUTCMonth() + 1; //months from 1-12
var startDay = start.getUTCDate();
var startYear = start.getUTCFullYear();

newStartDate = startDay + "/" + startMonth + "/" + startYear;

var end = new Date(start.getTime() + 1 * msecsInADay);
var endMonth = end.getUTCMonth() + 1; //months from 1-12
var endDay = end.getUTCDate();
var endYear = end.getUTCFullYear();

newEndDate = endDay + "/" + endMonth + "/" + endYear;

// // swiper not working with multiple carousels

//     var swiper = new Swiper('.swiper-container', {
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'progressbar',
//         color: 'red',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });

// accommodation object

var accommodation = [

// These 4 objects are the variables given within the project proposal, i have left them here to reference the origional values of each category
// {
// 	name : "Hotel",
// 	description : "lorem vbfdhjsvb fkds vlfkdsn vjkfdhsklf dslvb",
//   	mealOptions : "Breakfast and dinner options available on request, as well as all day buffet, room service 6pm - 12pm.",
// amenities : "Attached bathroom and kitchen",//   	
// location : "an address here fjdksnv",
//   	id : "accHotel",
// 	minPeople : 1,
// 	maxPeople : 2,
// 	cost : 157,
// 	minNights : 1,
// 	maxNights : 5,
// 	image : "images/hotel.jpg",
//   	mealOption : "yes",
//   	meal1 : 20,
//   	meal2 : 35,
// },
// {
// 	name : "Hostel",
// 	description : "lorem vbfdhjsvb fkds vlfkdsn vjkfdhsklf dslvb",
//   	mealOptions : "Free to use kitchen with all facilities",
//   	location : "an address here fjdksnv",
//   	id : "accHostel",
// 	minPeople : 1,
// 	maxPeople : 1,
// 	cost : 30,
// 	minNights : 1,
// 	maxNights : 10,
// 	image : "images/hostel.jpg",
//   	mealOption : "no",
//   	meal1 : 0,
//   	meal2 : 0,
// },
// {
// 	name : "Motel",
// 	description : "lorem vbfdhjsvb fkds vlfkdsn vjkfdhsklf dslvb",
//   	mealOptions : "Diner attached open 24/7",
//   	location : "an address here fjdksnv",
//   	id : "accMotel",
// 	minPeople : 2,
// 	maxPeople : 4,
// 	cost : 90,
// 	minNights : 3,
// 	maxNights : 10,
// 	image : "images/motel.jpg",
//   	mealOption : "no",
//   	meal1 : 0,
//   	meal2 : 0,
// },
// {
// 	name : "House",
// 	description : "lorem vbfdhjsvb fkds vlfkdsn vjkfdhsklf dslvb",
//   	mealOptions : "Breakfast and dinner options available on request",
//   	location : "an address here fjdksnv",
//   	id : "accHouse",
// 	minPeople : 1,
// 	maxPeople : 4,
// 	cost : 240,
// 	minNights : 2,
// 	maxNights : 15,
// 	image : "images/house.jpg",
//   	mealOption : "yes",
//   	meal1 : 10,
//   	meal2 : 18,
// },
{
	name : "QT Hotel",
	description : "Surprise yourself at QT Wellington, a significant fusion of expressive and luxurious art,\
technology and indulgence. Loosely based in the new creative capital of the South, QT\
Wellington is a warm invitation to explore and define one of New Zealand’s most eclectic\
collections of art and character. This is the ideal hub for cultural connoisseurs from\
around the world, framed in designer opulence and showcased at a gallery opening that\
never closed. We’re eager to see what you will bring.",
  	mealOptions : "Breakfast and dinner options available on request, as well as all day buffet, room service 6pm - 12pm.",
  	amenities : "Attached bathroom and kitchen",
  	location : "12 Caroline Street, Mount Victoria, Wellington 6011",
  	region : "Wellington",
  	lat : -41.293726,
  	lng : 174.786313, 
  	id : "accQt",
	minPeople : 1,
	maxPeople : 2,
	cost : 330,
	minNights : 2,
	maxNights : 15,
	imageThumb : "images/hotel/QT/thumbImg.png",
	image1 : "images/hotel/QT/qt1.jpg",
	image2 : "images/hotel/QT/qt2.jpg",
	image3 : "images/hotel/QT/qt3.jpg",
	image4 : "images/hotel/QT/qt4.jpg",
  	mealOption : "yes",
  	meal1 : 30,
  	meal2 : 55,
},
{
	name : "Sofitel",
	description : "Surrounded by lush botanicals and ideally positioned in Wellington's central hub,\
	Sofitel blends the French 'art de Vivre' with the pure beauty of New Zealands capital.\
	The 5-star hotel is ideally located in the heart of the CBD and within walking distance\
	to some of the city's major attractions. With luxuriously appointed rooms and suites,\
	each personal haven offers Sofitel's Signature MyBed, modern bathrooms,\
	sumptuous design and indulgent French bathroom amenities. The hotel also boasts\
	a fully equipped gym, The Green Room bar specialising in local gins, and the\
	renowned restaurant Jardin Grill serving artful and refined gastronomy daily.",
  	mealOptions : "Breakfast and dinner options available on request, as well as all day buffet, room service 6pm - 12pm.",
  	amenities : "Attached bathroom and kitchen",
  	location : "229 The Terrace, Wellington 6011",
  	region : "Wellington",
  	lat : -41.288530,
  	lng : 174.772458, 
  	id : "accSofitel",
	minPeople : 1,
	maxPeople : 4,
	cost : 280,
	minNights : 2,
	maxNights : 10,
	imageThumb : "images/hotel/sofitel/thumbImg.png",
	image1 : "images/hotel/sofitel/sofitel1.jpg",
	image2 : "images/hotel/sofitel/sofitel2.jpg",
	image3 : "images/hotel/sofitel/sofitel3.jpg",
	image4 : "images/hotel/sofitel/sofitel4.jpg",
  	mealOption : "yes",
  	meal1 : 20,
  	meal2 : 35,
},
{
	name : "InterContinental",
	description : "InterContinental Wellington is the most centrally-located and experienced global five-\
	star hotel in New Zealand's capital city. It is the seamless and personal service of the\
	team that makes your Wellington experience truly memorable. Spend time with the\
	award-winning concierge team whose tips and insider knowledge can help you\
	discover Wellington arts, events, shopping, and culinary cultures. Whether you\
	choose a standard room or upgrade to a fully-refurbished Deluxe Guestroom you will\
	always stay connected with state of the art technology. Awake rejuvenated after a\
	tranquil night's sleep from your brand new bed with a personalised wake up service.\
	Treat yourself by selecting a Club InterContinental Guestroom or Suite. These offer\
	access to the world-class newly recreated Club InterContinental Lounge with\
	expansive harbour views which will leave you feeling impressed.",
  	mealOptions : "Breakfast and dinner options available on request, as well as all day buffet, room service 6pm - 12pm.",
  	amenities : "Attached bathroom and kitchen",
  	location : "30 Hutchinson Avenue, New Lynn, Auckland",
  	region : "Auckland",
  	lat : -36.9157888,
  	lng : 174.680803, 
  	id : "accInterContinental",
	minPeople : 1,
	maxPeople : 4,
	cost : 220,
	minNights : 2,
	maxNights : 20,
	imageThumb : "images/hotel/interContinental/thumbImg.png",
	image1 : "images/hotel/interContinental/inter1.jpg",
	image2 : "images/hotel/interContinental/inter2.jpg",
	image3 : "images/hotel/interContinental/inter3.jpg",
	image4 : "images/hotel/interContinental/inter4.jpg",
  	mealOption : "yes",
  	meal1 : 20,
  	meal2 : 35,
},
{
	name : "EdgeWater Hotel",
	description : "Featuring expansive ocean views of Wellington Harbour, Edgewater Lodge provides\
	luxury Bed and Breakfast accommodation for the discerning. Seatoun is a Historic\
	Seaside Village where waterfront houses were originally built as convalescent and\
	holiday homes. Enjoy the relaxing hospitality and fantastic cuisine only moments\
	from the airport and city. Located at Karaka Bay, Seatoun Edgewater Lodge is\
	among the houses and homes of Directors, Producers, cast and crew of Peter\
	Jackson's Lord of the Rings' trilogy, 'King Kong', and now 'The Hobbit'.\
	Architecturally built former the home of Hollywood Oscar wining film Producer, Barrie\
	Osborne, Edgewater has hosted numerous Hollywood celebrities and international\
	stars.",
  	mealOptions : "Breakfast and dinner options available on request, as well as all day buffet, room service 6pm - 12pm.",
  	amenities : "Attached bathroom and kitchen",
  	location : "33-23 Kimberley Road, Epsom, Auckland 1023",
  	region : "Auckland",
  	lat : -36.887151,
  	lng : 174.771022, 
  	id : "accEdgeWater",
	minPeople : 1,
	maxPeople : 8,
	cost : 360,
	minNights : 2,
	maxNights : 12,
	imageThumb : "images/hotel/edgeWater/thumbImg.png",
	image1 : "images/hotel/edgeWater/edge1.jpg",
	image2 : "images/hotel/edgeWater/edge2.jpg",
	image3 : "images/hotel/edgeWater/edge3.jpg",
	image4 : "images/hotel/edgeWater/edge4.jpg",
  	mealOption : "yes",
  	meal1 : 25,
  	meal2 : 40,
},
{
	name : "Kex Hostel",
	description : "KEX. It's the Icelandic word for 'biscuit' and new social hostel in Reykjavik. What's not to love?\
Housed in an old biscuit factory in the heart of Reykjavik, KEX is just steps from all the bars, clubs, and music venues that give this city its legendary reputation. \
It's also a painless distance from late-night munchies and a mind-boggling array of coffee houses, shops, and tourist attractions.\
Of course, you might not even want to venture outside of the hostel with all its features, including a café and bar, lounge are\
a, heated outdoor patio, tourist information desk, laundry room and free Wi-Fi.",
  	mealOptions : "Free to use kitchen with all facilities",
  	amenities : "Attached bathroom and kitchen",
  	location : "103B Kelburn Parade, Kelburn, Wellington 6012",
  	region : "Wellington",
  	lat : -41.291894,
  	lng : 174.764930, 
  	id : "accKex",
	minPeople : 1,
	maxPeople : 1,
	cost : 45,
	minNights : 1,
	maxNights : 25,
	imageThumb : "images/hostels/kex/thumbImg.png",
	image1 : "images/hostels/kex/kex1.jpg",
	image2 : "images/hostels/kex/kex2.jpg",
	image3 : "images/hostels/kex/kex3.jpg",
	image4 : "images/hostels/kex/kex4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Cocomama",
	description : "Cocomama was voted the best in the Netherlands at the 2011 Hoscars and it's not hard to see why-guests hav\
	e said this boutique hostel is 'the opposite to the big corporate hostels that lack character', with clean, newly furnished rooms 'done up to the small detail'.\
	 Hostelworld reviewers tell us the staff 'love their city [and] will give you all the info you nee\
	d on where to go', making this hostel feel 'like a home away from home'. We particularly like the resident cat and the large back garden. ",
  	mealOptions : "Free to use kitchen with all facilities",
  	amenities : "Attached bathroom and kitchen",
  	location : "75 Epuni Street, Aro Valley, Wellington 6021",
  	region : "Wellington",
  	lat : -41.297929,
  	lng : 174.765358, 
  	id : "accCocomama",
	minPeople : 1,
	maxPeople : 1,
	cost : 40,
	minNights : 1,
	maxNights : 12,
	imageThumb : "images/hostels/cocomama/thumbImg.png",
	image1 : "images/hostels/cocomama/cocomama1.jpg",
	image2 : "images/hostels/cocomama/cocomama2.jpg",
	image3 : "images/hostels/cocomama/cocomama3.jpg",
	image4 : "images/hostels/cocomama/cocomama4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Living Lounge",
	description : "If you're looking for a boutique-style hostel, we think the multi-Hoscar-winning L\
	iving Lounge Hostel might be your place. Each of their light and airy rooms has been decorated in a \
	different colourful theme by local artists. Hostelworld guests often note that the staff have proved to \
	be accommodating to early morning arrivals and departures, organising special breakfasts and taxis. Also \
	highly-praised is the hostel's nightly three-course dinner for only â'¬9, including wine. We particularly \
	like that the free breakfast includes pancakes.",
  	mealOptions : "Free to use kitchen with all facilities",
  	amenities : "Attached bathroom and kitchen",
  	location : "25 Balfour Road, Parnell, Auckland 1052",
  	region : "Auckland",
  	lat : -36.849741,
  	lng : 174.784752, 
  	id : "accLiving",
	minPeople : 1,
	maxPeople : 1,
	cost : 20,
	minNights : 1,
	maxNights : 10,
	imageThumb : "images/hostels/livingLounge/thumbImg.png",
	image1 : "images/hostels/livingLounge/living1.jpg",
	image2 : "images/hostels/livingLounge/living2.jpg",
	image3 : "images/hostels/livingLounge/living3.jpg",
	image4 : "images/hostels/livingLounge/living4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Wally Ward Concept Hostel",
	description : "If you're looking for a boutique-style hostel, we think the multi-Hoscar-winning L\
	iving Lounge Hostel might be your place. Each of their light and airy rooms has been decorated in a \
	different colourful theme by local artists. Hostelworld guests often note that the staff have proved to \
	be accommodating to early morning arrivals and departures, organising special breakfasts and taxis. Also \
	highly-praised is the hostel's nightly three-course dinner for only â'¬9, including wine. We particularly \
	like that the free breakfast includes pancakes.",
  	mealOptions : "Free to use kitchen with all facilities",
  	amenities : "Attached bathroom and kitchen",
  	location : "80 Brighton Road, Parnell, Auckland 1052",
  	region : "Auckland",
  	lat : -36.861678,
  	lng : 174.788562, 
  	id : "accWally",
	minPeople : 1,
	maxPeople : 1,
	cost : 45,
	minNights : 1,
	maxNights : 15,
	imageThumb : "images/hostels/wallyward/thumbImg.png",
	image1 : "images/hostels/wallyward/wally1.jpg",
	image2 : "images/hostels/wallyward/wally2.jpg",
	image3 : "images/hostels/wallyward/wally3.jpg",
	image4 : "images/hostels/wallyward/wally4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Contemporary Thai House",
	description : "A contemporary variation on classic Thai themes, this villa \
	maxes out its panoramic views of the Bay of Bengal. A wide open great room \
	is entirely alfresco, with a reflection pond in the center flanked by stepping \
	stones and staircases above. Rest a cool drink on the ledge of your oversized \
	jacuzzi or dip in the 19-meter infinity pool and take it all in. Quiet Kamala Beach is just a 4-mile drive.",
  	mealOptions : "Breakfast and dinner options available on request",
  	amenities : "Attached bathroom and kitchen",
  	location : "14B Byron Street, Miramar, Wellington 6022",
  	region : "Wellington",
  	lat : -41.313559,
  	lng : 174.815805, 
  	id : "accThai",
	minPeople : 1,
	maxPeople : 8,
	cost : 520,
	minNights : 2,
	maxNights : 15,
	imageThumb : "images/houses/contemporaryThai/thumbImg.png",
	image1 : "images/houses/contemporaryThai/thai1.jpg",
	image2 : "images/houses/contemporaryThai/thai2.jpg",
	image3 : "images/houses/contemporaryThai/thai3.jpg",
	image4 : "images/houses/contemporaryThai/thai4.jpg",
  	mealOption : "yes",
  	meal1 : 60,
  	meal2 : 120,
},
{
	name : "Modern Suite",
	description : "Every inch of space glistens at this new designer flat \
	above the shops of Fitzrovia. Chevron parquet floors connect cozy bedrooms \
	to a sunny living room that overlooks a furnished terrace and potted birch \
	and cypress trees. Sip espresso alfresco or mix a drink in the eggshell-white \
	galley kitchen, then hunt down the chic bistros and old-fashioned pubs in the lively central neighborhood below.",
  	mealOptions : "Breakfast and dinner options available on request",
  	amenities : "Attached bathroom and kitchen",
  	location : "Lyall Parade, Lyall Bay, Wellington 6022",
  	region : "Wellington",
  	lat : -41.328319,
  	lng : 174.797054, 
  	id : "accModern",
	minPeople : 1,
	maxPeople : 6,
	cost : 480,
	minNights : 2,
	maxNights : 15,
	imageThumb : "images/houses/modernSuite/thumbImg.png",
	image1 : "images/houses/modernSuite/modern1.jpg",
	image2 : "images/houses/modernSuite/modern2.jpg",
	image3 : "images/houses/modernSuite/modern3.jpg",
	image4 : "images/houses/modernSuite/modern4.jpg",
  	mealOption : "yes",
  	meal1 : 50,
  	meal2 : 90,
},
{
	name : "Main Street Suite",
	description : "An elevator whisks you to this rustic ski \
	residence next to Park Silly Sunday Market. Kick back in \
	the open-plan great room, where mid-century seating, exposed \
	brick and wood, and a sheepskin rug elevate the classic cabin vibe. \
	A sleek gas fireplace, breakfast bar for 4, and furnished balcony offer \
	gathering nooks after a day on the slopes—it's a 2-minute walk to Town Lift on historic Main Street.",
  	mealOptions : "Breakfast and dinner options available on request",
  	amenities : "Attached bathroom and kitchen",
  	location : "7-1 Basin View Lane, Panmure, Auckland 1072",
  	region : "Auckland",
  	lat : -36.899986,
  	lng : 174.854675, 
  	id : "accStreet",
	minPeople : 1,
	maxPeople : 5,
	cost : 390,
	minNights : 2,
	maxNights : 20,
	imageThumb : "images/houses/streetSuiteer/thumbImg.png",
	image1 : "images/houses/streetSuiteer/street1.jpg",
	image2 : "images/houses/streetSuiteer/street2.jpg",
	image3 : "images/houses/streetSuiteer/street3.jpg",
	image4 : "images/houses/streetSuiteer/street4.jpg",
  	mealOption : "yes",
  	meal1 : 50,
  	meal2 : 90,
},
{
	name : "Tropical Brutalist House",
	description : "Palms rise above sun-drenched decks and \
	geometric screens at this designer villa near Coral Garden \
	Beach. Wooden sculptures, midcentury furnishings, and glass \
	walls blend industrial and tropical chic. Lounge by the L-shaped \
	pool, drink in views from a rooftop terrace, and hop on a scooter. \
	In minutes you can explore Grace Bay Beach and spot bottlenose dolphins at Princess Alexandra National Park.",
  	location : "18 De Havilland Drive, Goodwood Heights, Auckland 2105",
  	region : "Auckland",
  	lat : -36.993692,
  	lng : 174.895962, 
  	id : "accTropical",
	minPeople : 1,
	maxPeople : 10,
	cost : 900,
	minNights : 5,
	maxNights : 10,
	imageThumb : "images/houses/tropicalBrute/thumbImg.png",
	image1 : "images/houses/tropicalBrute/tropical1.jpg",
	image2 : "images/houses/tropicalBrute/tropical2.jpg",
	image3 : "images/houses/tropicalBrute/tropical3.jpg",
	image4 : "images/houses/tropicalBrute/tropical4.jpg",
  	mealOption : "yes",
  	meal1 : 120,
  	meal2 : 200,
},
{
	name : "Amigo Motel",
	description : "The Amigo Motor Lodge is a newly-renovated, 60 year-old motel. Modern furnishings\
	meet minimalist design to create a space that is friendly, casual, and (above all)\
	comfortable. The property is complete with a teepee, hot tub, sun room/lounge and\
	now we are renting fully renovated Airstream trailers.",
  	mealOptions : "41 Mornington Road, Brooklyn, Wellington 6021",
  	amenities : "Attached bathroom and kitchen",
  	location : "103 Townsend Road, Miramar, Wellington",
  	region : "Wellington",
  	lat : -41.317688,
  	lng : 174.823171, 
  	id : "accAmigo",
	minPeople : 2,
	maxPeople : 6,
	cost : 100,
	minNights : 2,
	maxNights : 10,
	imageThumb : "images/motel/amigoMotel/thumbImg.png",
	image1 : "images/motel/amigoMotel/amigo1.jpg",
	image2 : "images/motel/amigoMotel/amigo2.jpg",
	image3 : "images/motel/amigoMotel/amigo3.jpg",
	image4 : "images/motel/amigoMotel/amigo4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Pioneer Town",
	description : "These are the moments that comprise our mysterious love affair with the\
	High Desert. Pioneertown is and always has been a gateway to the great\
	California desert. In our 3 years of ownership we’ve spent countless hours\
	pouring over its history, tall tales, and fairy tales.\
	The reality of Pioneertown is evasive and the illusion of the infinite desert is\
	palpable. From what we can piece together this is a one-of-a-kind place\
	worthy of great care and attention. Since we saw you last, we’ve planted\
	groves of native plants, integrated locally designed furniture and created\
	spaces for passing time with friends. The cooler, crisper times are upon us.\
	We live just down Mane Street and we look forward to meeting you.\
	-Mike French &amp; Matt French, November 2018",
  	mealOptions : "Diner attached open 24/7",
  	amenities : "Attached bathroom and kitchen",
  	location : "21 Robertson Street, Owhiro Bay, Wellington 6023",
  	region : "Wellington",
  	lat : -41.343641,
  	lng : 174.762028, 
  	id : "accPioneer",
	minPeople : 2,
	maxPeople : 12,
	cost : 60,
	minNights : 1,
	maxNights : 20,
	imageThumb : "images/motel/pioneerTown/thumbImg.png",
	image1 : "images/motel/pioneerTown/pioneer1.jpg",
	image2 : "images/motel/pioneerTown/pioneer2.jpg",
	image3 : "images/motel/pioneerTown/pioneer3.png",
	image4 : "images/motel/pioneerTown/pioneer4.png",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "Soundview Motel",
	description : "The charming simplicity of Sound View's guest rooms is influenced by classic Modernist, North Fork beachside homes. \
	Every room has waterfront decks and custom craftsmanship.  They are perfectly situated to watch life drift by.\
	Inspiration is more than a feeling; it’s a place on a map. Our Long Island Hotel is home to generations of mariners, navigators, \
	farmers and makers. Discover local farms, restaurants, shops and other area attractions.\
	At Sound View Hotel, take a painting class on the beach, sign up for a pick-your-own farm outing, or just \
	lounge poolside. Discover what our hotel has to offer and come and unplug with us.",
  	mealOptions : "Diner attached open 24/7",
  	amenities : "Attached bathroom and kitchen",
  	location : "20-46 Trelawn Place, Cockle Bay, Auckland 2014",
  	region : "Auckland",
  	lat : -36.905129,
  	lng : 174.941391, 
  	id : "accSound",
	minPeople : 2,
	maxPeople : 6,
	cost : 45,
	minNights : 1,
	maxNights : 10,
	imageThumb : "images/motel/soundView/thumbImg.png",
	image1 : "images/motel/soundView/sound1.jpg",
	image2 : "images/motel/soundView/sound2.jpg",
	image3 : "images/motel/soundView/sound3.jpg",
	image4 : "images/motel/soundView/sound4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
{
	name : "The Astro Motel",
	description : "Described as a “gleaming midcentury masterpiece” \
	by the Press Democrat on its opening day in January 2018, The Astro \
	offers visitors to Sonoma County an affordable, urban, adventurously designed \
	headquarters with 34 rooms and suites. Originally built in 1963, the property was \
	born again when members of the team behind the nearby restaurant The Spinster \
	Sisters acquired it to further develop their overlooked corner of Santa Rosa filled with makers and doers.",
  	mealOptions : "Diner attached open 24/7",
  	amenities : "Attached bathroom and kitchen",
  	location : "6 Morrow Avenue, Bucklands Beach, Auckland 2012",
  	region : "Auckland",
  	lat : -36.860284,
  	lng : 174.901949, 
  	id : "accAstro",
	minPeople : 2,
	maxPeople : 8,
	cost : 30,
	minNights : 1,
	maxNights : 20,
	imageThumb : "images/motel/theAstro/thumbImg.png",
	image1 : "images/motel/theAstro/astro1.jpg",
	image2 : "images/motel/theAstro/astro2.jpg",
	image3 : "images/motel/theAstro/astro3.jpg",
	image4 : "images/motel/theAstro/astro4.jpg",
  	mealOption : "no",
  	meal1 : 0,
  	meal2 : 0,
},
]

// Show and hide about section

	document.getElementById('aboutBtn').addEventListener('click', function(){
	document.getElementById('aboutPopUp').style.display = "block";
	document.getElementById('filtersPopUp').style.display = "none";
});

	document.getElementById('closeAbout').addEventListener('click', function(){
	document.getElementById('aboutPopUp').style.display = "none";
});

// Show and hide filters

	document.getElementById('filtersBtn').addEventListener('click', function(){
	document.getElementById('filtersPopUp').style.display = "block";
	document.getElementById('aboutPopUp').style.display = "none";
});

	document.getElementById('closeFilters').addEventListener('click', function(){
	document.getElementById('filtersPopUp').style.display = "none";
	document.getElementById("stepOneBox").scrollIntoView({ block: 'start',  behavior: 'smooth' });
});

//close map area

	document.getElementById('closeMap').addEventListener('click', function(){
	document.getElementById('mapPopUp').style.display = "none";
});

// Return to top function

	document.getElementById('returnToTopText').addEventListener('click', function(){
	document.getElementById("stepOneBox").scrollIntoView({ block: 'start',  behavior: 'smooth' });
	});

//View options scroll to cards function

	document.getElementById('viewOptions').addEventListener('click', function(){
	document.getElementById("stepOneBox").scrollIntoView({ block: 'start',  behavior: 'smooth' });
	});


for (i = 0; i < accommodation.length; i++) {
	showOptions()
}



function showOptions(){

	document.getElementById('stepOneBox').innerHTML 

	+='<div class="row w-100 mr-0 ml-0" id="'+ accommodation[i].id +'" onclick="infoBoxShow(this.id)">'
	+'<div class="col-8 purpBg optionsBoxOutline">'
			
	+'<div class="row h-100">'

	+'<div class="col w-50 h-100">'
	+'<div class="row align-items-center justify-content-start h-100">'
	+'<div class="col-12">'
	+'<h2 class="text-left hoverText">'+ accommodation[i].name +'</h2>'
	+'</div>'
	+'<div class="col pr-0">'
	+'<h2 class="text-right">$'+ accommodation[i].cost +'</h2>'
	+'</div>'
	+'<div class="col pl-1">'
	+'<p class="text-left" style="font-size: 1rem;">per night</p>'
	+'</div>'
	+'<div class="col pl-1">'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="col w-50 h-100">'
	+'<div class="row align-items-center justify-content-center h-100">'
	+'<div class="row w-100 justify-content-center">'
	+'<div class="col-6">'
	+'<i class="fas fa-utensils iconsMed" id="mealBtn'+ accommodation[i].id +'" onmouseenter="mealFunctionShow(this.id)" onmouseleave="mealFunctionHide(this.id)"\
	 onclick="mealFunctionShow(this.id)" ></i>'
	+'<p class="position-absolute bg-info mt-1 p-1 iconPopUps" onclick="mealFunctionHide(this.id)">'+ accommodation[i].mealOptions +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100 justify-content-center">'
	+'<div class="col-6">'
	+'<i class="fas fa-map-marked-alt iconsMed" id="locationBtn'+ accommodation[i].id +'" onmouseenter="mealFunctionShow(this.id)" onmouseleave="mealFunctionHide(this.id)"\
	onclick="mealFunctionShow(this.id)"></i>'
	+'<p class="position-absolute bg-info mt-1 p-1 iconPopUps" onclick="mealFunctionHide(this.id)" >'+ accommodation[i].location +'</p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'

	+'</div>'
	+'</div>'

	+'<div class="col-4 bg-info optionsBoxOutline">'
	+'<img src="'+ accommodation[i].imageThumb +'" class="img-fluid p-3">'
	+'</div>'

	+'</div>'

	// extra info begins

	+'<div class="col pt-2 extInfoBox" id="extInfoBox'+ accommodation[i].id +'">'
	+'<div class="row w-100 mr-0 ml-0">'
	+'<div class="col-12 purpBg optionsBoxOutline">'
	+'<div class="row align-items-center justify-content-start h-100">'

	+'<div class="col-6">'
	+'<div class="row align-items-center justify-content-start">'
	+'<div class="col-12">'
	+'<p class="text-left p-2 mt-4">'+ accommodation[i].description +'</p>'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="col-6">'
	+'<div class="row align-items-center justify-content-center">'
	+'<div class="col">'
	+'<img src="'+ accommodation[i].image1 +'" class="img-fluid">'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="col-12">'
	+'<div class="row align-items-center justify-content-center">'
	+'<div class="col">'
	+'<h2 class="text-left">Total price: $'+ (accommodation[i].cost * nights) +'</h2>'
	+'</div>'
	+'<div class="col">'
	+'<h2 class="text-center hoverText" onclick="bookingSectionShow()">Book here</h2>'
	+'</div>'
	+'<div class="col">'
	+'<h2 class="text-right hoverText" onclick="infoBoxHide()">X</h2>'
	+'</div>'
	+'</div>'
	+'</div>'

	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'

	// begin booking section 

	+'<div class="col pt-2 bookingSection" id="extbookingSection'+ accommodation[i].id +'">'
	+'<div class="row w-100 mr-0 ml-0">'
	+'<div class="col-12 bg-info optionsBoxOutline">	'

	+'<div class="row align-items-center justify-content-start h-100">'
	+'<div class="col-6">'
	+'<div class="row align-items-center justify-content-center">'
	+'<div class="row w-100">'
	+'<div class="col">'
	+'<h1 class="text-left">'+ accommodation[i].name +'</h1>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100">'
	+'<div class="col pr-0">'
	+'<h1 class="text-right">'+ accommodation[i].cost +'</h1>'
	+'</div>'
	+'<div class="col pl-1 pt-2">'
	+'<p class="text-left" style="font-size: 1rem;">per night</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100">'
	+'<div class="col-2">'
	+'<i class="fas fa-utensils" style="font-size:2rem"></i>'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ accommodation[i].mealOptions +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100"  onclick="mapShow(), clickedMarker()">'
	+'<div class="col-2">'
	+'<i class="fas fa-map-marked-alt" style="font-size:2rem" id="map'+ accommodation[i].id +'"></i>'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ accommodation[i].location +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100">'
	+'<div class="col-2">'
	+'<i class="fas fa-bath" style="font-size:2rem"></i>'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ accommodation[i].amenities +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100">'
	+'<div class="col">'
	+'<p class="text-left" style="font-size: 1rem;">'+ accommodation[i].description +'</p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="col-6">'
	+'<div class="row align-items-center justify-content-center">'
	+'<div class="col mt-4 mb-1">'
	+'<img src="'+ accommodation[i].image1 +'" class="img-fluid p-3">'
	+'<img src="'+ accommodation[i].image2 +'" class="img-fluid p-3">'
	+'<img src="'+ accommodation[i].image3 +'" class="img-fluid p-3">'
	+'<img src="'+ accommodation[i].image4 +'" class="img-fluid p-3">'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="col-6">'
	+'<div class="row align-items-center justify-content-center">'
	+'<div class="row w-100">'
	+'<div class="col">'
	+'<h2 class="text-left">Your Details:</h2>'
	+'</div>'
	+'<div class="row w-100 ml-1">'
	+'<div class="col">'
	+'<p class="text-left">Number of people:</p>'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ people +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100 ml-1">'
	+'<div class="col">'
	+'<p class="text-left">Dates</p>'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ newStartDate +'</p>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100 ml-1">'
	+'<div class="col">'
	+'</div>'
	+'<div class="col">'
	+'<p class="text-left">'+ newEndDate +'</p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'


	+'<div class="col-6">'
	+'<div class="row align-items-start justify-content-start">'
	+'<div class="row w-100">'
	+'<div class="col">'
	+'<h2 class="text-left">Booking options:</h2>'
	+'</div>'
	+'<div class="row w-100 ml-1">'
	+'<div class="col">'
	+'<p class="text-left">Book room</p>'
	+'</div>'
	+'<div class="col">'
	+'<button type="button" class="btn btn-info hoverText">$'+ (accommodation[i].cost * nights) +'</button>'
	+'</div>'
	+'</div>'
	+'<div class="row w-100 ml-1" id="mealOption1'+ accommodation[i].id +'">'
	+'</div>'
	+'<div class="row w-100 ml-1" id="mealOption2'+ accommodation[i].id +'">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'

	+'<div class="row w-100 ml-1">'
	+'<div class="col">'
	+'<h2 class="text-center hoverText" onclick=bookingSectionHide()>Close</h2>'
	+'</div>'
	+'</div>'
	+'</div>'



//If there are meal options print two extra buttons with prices
	var totalCost = (accommodation[i].cost * nights)
	var totalCostMeal1 = ((nights * people) * accommodation[i].meal1)
	var totalCostMeal2 = ((nights * people) * accommodation[i].meal2)

	if (accommodation[i].mealOption === "yes"){
		document.getElementById("mealOption1" + accommodation[i].id).innerHTML
	+='<div class="col" >'
	+'<p class="text-left">Book room & basic meal option</p>'
	+'</div>'
	+'<div class="col">'
	+'<button type="button" class="btn btn-info hoverText">$'+ (totalCost + totalCostMeal1) +'</button>'
	+'</div>'
		document.getElementById("mealOption2" + accommodation[i].id).innerHTML
	+='<div class="col" >'
	+'<p class="text-left">Book room & full meal option</p>'
	+'</div>'
	+'<div class="col">'
	+'<button type="button" class="btn btn-info hoverText">$'+ (totalCost + totalCostMeal2) +'</button>'
	+'</div>'
	}

}


	var idHere = "";
	var idInfo = "placeHolderId";
	var idBook = "placeHolderId";

	function mealFunctionShow (clicked_id) {
	idHere = clicked_id;
	document.getElementById(idHere).nextSibling.style.display = 'block' 
	}

	function mealFunctionHide (clicked_id) {
	idHere = clicked_id;
	document.getElementById(idHere).nextSibling.style.display = 'none' 
	}

	function locationFunctionShow (clicked_id) {
	idHere = clicked_id;
	document.getElementById(idHere).nextSibling.style.display = 'block' 
	}

	function locationFunctionHide (clicked_id) {
	idHere = clicked_id;
	document.getElementById(idHere).nextSibling.style.display = 'none' 
	}

	function infoBoxShow (clicked_id) {
	document.getElementById("extInfoBox" + idInfo).style.display = 'none' 
	document.getElementById("extbookingSection" + idInfo).style.display = 'none' 
	idInfo = clicked_id;
	document.getElementById("extInfoBox" + idInfo).style.display = 'block' 
	document.getElementById("extInfoBox" + idInfo).scrollIntoView({ block: 'end',  behavior: 'smooth' });
	}

	function infoBoxHide () {
	document.getElementById("extInfoBox" + idInfo).style.display = 'none'  
	}

	function bookingSectionShow (clicked_id) {
	document.getElementById("extbookingSection" + idInfo).style.display = 'none' 
	idBook = clicked_id;
	document.getElementById("extbookingSection" + idInfo).style.display = 'block' 
	document.getElementById("extInfoBox" + idInfo).style.display = 'none'
	document.getElementById(idInfo).style.display = 'none'
	document.getElementById("extbookingSection" + idInfo).scrollIntoView({ block: 'start',  behavior: 'smooth' });
	}

	function mapShow (clicked_id) {
	document.getElementById("mapPopUp").style.display = 'block' 
	}

	function bookingSectionHide () {
	document.getElementById("extbookingSection" + idInfo).style.display = 'none'  
	document.getElementById(idInfo).style.display = 'flex'
	document.getElementById(idInfo).scrollIntoView({ block: 'start',  behavior: 'smooth' });
	}





// Filters JS


$("#filterBox").hide();

$("#showFilters").click(function(){
	$("#filterBox").show();
});



$("#endDateBox").hide();

$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  setDate : new Date(),
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

      $("#endDateBox").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

      $("#endDateBox").datepicker( "option", "maxDate", enDate );

      $("#endDateBox").show();
  }
});

$("#endDateBox").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
});

$('#endDateBox').change(function(){
    dateDiff();
    results();
});

$('#selectNumber').change(function(){
    results();
});

$('#selectRegion').change(function(){
    results();
});

var start = new Date();
var startMonth = start.getUTCMonth() + 1; //months from 1-12
var startDay = start.getUTCDate();
var startYear = start.getUTCFullYear();

newStartDate = startDay + "/" + startMonth + "/" + startYear;

var end = new Date(start.getTime() + 1 * msecsInADay);
var endMonth = end.getUTCMonth() + 1; //months from 1-12
var endDay = end.getUTCDate();
var endYear = end.getUTCFullYear();

newEndDate = endDay + "/" + endMonth + "/" + endYear;

function dateDiff() {

  	start = $('#startDate').datepicker('getDate');
  	startMonth = start.getUTCMonth() + 1; //months from 1-12
	startDay = start.getUTCDate() + 1;
	startYear = start.getUTCFullYear();

	newStartDate = startDay + "/" + startMonth + "/" + startYear;

  	end = $('#endDateBox').datepicker('getDate');
  	endMonth = end.getUTCMonth() + 1; //months from 1-12
	endDay = end.getUTCDate() + 1;
	endYear = end.getUTCFullYear();

	newEndDate = endDay + "/" + endMonth + "/" + endYear;

  	nights = (end - start)/1000/60/60/24;
  	return;
}

function results(){
	console.log('resultsfired')
	var peopleInput = document.getElementById('selectNumber');
	people = peopleInput.options[peopleInput.selectedIndex].value;
	var regionInput = document.getElementById('selectRegion');
	region = regionInput.options[regionInput.selectedIndex].value;
	document.getElementById('stepOneBox').innerHTML = ""
		for (i = 0; i < accommodation.length; i++) {
		if (((people >= accommodation[i].minPeople) && (people <= accommodation[i].maxPeople)) && 
		((nights >= accommodation[i].minNights) && (nights <= accommodation[i].maxNights)) && 
		(region === accommodation[i].region))
				showOptions ()
}
}

//maaaps

function initMap() {
 
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(accommodation[0].lat, accommodation[0].lng),
    
     styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  });



var infowindow =  new google.maps.InfoWindow({});
var marker, count;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
for (count = 0; count < accommodation.length; count++) {

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(accommodation[count].lat, accommodation[count].lng),
      map: map,
      title: accommodation[count].name,
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(accommodation[count].description);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}

var markerIndex = 0;
var geocoder;

function clickedMarker(){

	console.log(idInfo);

	for (a=0; a<accommodation.length; a++){
		if (idInfo === accommodation[a].id){
			markerIndex = a;
			//this was to be used to fetch co-ordinates but not working as below.
		} else {
			console.log("no match")
		}
	}
// google.maps.Map(document.getElementById('map'), {
// 		center: google.map.setCenter(accommodation[markerIndex].lat, accommodation[markerIndex].lng),
// 	});

 	// google.map.setCenter(accommodation[markerIndex].lat, accommodation[markerIndex].lng)
 
	// marker = new google.maps.Marker({
 //    position: new google.maps.LatLng(accommodation[markerIndex].lat, accommodation[markerIndex].lng),
 //    title: accommodation[markerIndex].name,
 //    });
}

//Tried to have the map center on this new marker but no solution found anywhere online. Even the functions provided in the documentation don't work so unsure how people have made it work.


