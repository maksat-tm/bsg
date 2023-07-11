const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "ge"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

/* Home main page */
const homeTexts = {
	"home_page-title": {
		ru: "Black Sea Georgia/главная",
		en: "Black Sea Georgia/home",
		ge: "Black Sea Georgia/მთავარი გვერდი",
	},
	/* header lang */
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	/* hero lang */
	"main-hero-title-1": {
		ru: "BLACK SEA GEORGIA",
		en: "BLACK SEA GEORGIA",
		ge: "BLACK SEA GEORGIA",
	},
	"main-hero-subtitle-1": {
		ru: "СДЕЛАТЬ ЛОГИСТИКУ БОЛЕЕ ПРОСТЫМ",
		en: "MAKE TRANSPORTATION EASY WAY",
		ge: "გაამარტივეთ ტრანსპორტირება",
	},
	"main-hero-title-2": {
		ru: "BLACK SEA GEORGIA",
		en: "BLACK SEA GEORGIA",
		ge: "BLACK SEA GEORGIA",
	},
	"main-hero-subtitle-2": {
		ru: "СДЕЛАТЬ ЛОГИСТИКУ БОЛЕЕ ПРОСТЫМ",
		en: "MAKE TRANSPORTATION EASY WAY",
		ge: "გაამარტივეთ ტრანსპორტირება",
	},
	"main-hero-title-3": {
		ru: "BLACK SEA GEORGIA",
		en: "BLACK SEA GEORGIA",
		ge: "BLACK SEA GEORGIA",
	},
	"main-hero-subtitle-3": {
		ru: "СДЕЛАТЬ ЛОГИСТИКУ БОЛЕЕ ПРОСТЫМ",
		en: "MAKE TRANSPORTATION EASY WAY",
		ge: "გაამარტივეთ ტრანსპორტირება",
	},
	"main-hero-link-1": {
		ru: "Заказать рассчёт",
		en: "Order online",
		ge: "კონტაქტები",
	},
	"main-hero-title-2": {
		ru: "BLACK SEA GEORGIA",
		en: "BLACK SEA GEORGIA",
		ge: "BLACK SEA GEORGIA",
	},
	"main-hero-subtitle-2": {
		ru: "ЛУЧЩЕЕ ЛОГИСТИЧЕСКОЕ РЕШЕНИЕ",
		en: "THE BEST LOGISTICS SOLUTIONS",
		ge: "საუკეთესო ლოგისტიკური გადაწყვეტა",
	},
	"main-hero-link-2": {
		ru: "Заказать рассчёт",
		en: "Order online",
		ge: "კონტაქტები",
	},
	"main-hero-title-3": {
		ru: "BLACK SEA GEORGIA",
		en: "BLACK SEA GEORGIA",
		ge: "BLACK SEA GEORGIA",
	},
	"main-hero-subtitle-3": {
		ru: "БЫСТРАЯ И БЕЗОПАСНАЯ ДОСТАВКА",
		en: "FAST AND SAFE TRACPORTATION",
		ge: "სწრაფი და უსაფრთხო ტრანსპორტირება",
	},
	"main-hero-link-3": {
		ru: "Заказать рассчёт",
		en: "Order online",
		ge: "კონტაქტები",
	},
	/* about lang */
	"about-section-title-1": {
		ru: "О КОМПАНИИ",
		en: "ABOUT COMPANY",
		ge: "კომპანიის შესახებ",
	},
	"about-secrion-subtitle-1": {
		ru: "О НАС",
		en: "ABOUT US",
		ge: "ჩვენს შესახებ",
	},
	"about-text_1": {
		ru: "Наша компания доставляет грузы из Грузии на собственных автовозах перевозим легковые автомобили в Азербайджан, Армения и по СНГ более 8 лет. Мы специализируемся на автомобильных грузоперевозках а также контейнерные и ж/д перевозки грузов в любых направлениях и зарекомендовали себя на логистическом рынке в качестве ответственного международного экспедитора, оказывающего комплексную поддержку клиентов на всех этапах транспортировки грузов.",
		en: "Our company has been delivering goods from Georgia on our own car transporters, we have been transporting cars to Azerbaijan, Armenia and the CIS for more than 10 years. We specialize in road freight transportation, as well as container and railway transportation of goods in any direction and have established ourselves in the logistics market as a responsible international freight forwarder, providing comprehensive customer support at all stages of cargo transportation.",
		ge: "ჩვენი კომპანია ახორციელებს საქონლის მიწოდებას საქართველოდან საკუთარი ავტოტრანსპორტირებით, 10 წელზე მეტია ვახორციელებთ მანქანების გადაზიდვას აზერბაიჯანში, სომხეთსა და დსთ-ში. ჩვენ სპეციალიზირებული ვართ საგზაო ტვირთების გადაზიდვაში, ასევე საქონლის საკონტეინერო და სარკინიგზო გადაზიდვებში ნებისმიერი მიმართულებით და დავიმკვიდრეთ თავი ლოგისტიკურ ბაზარზე, როგორც პასუხისმგებელი საერთაშორისო სატვირთო ექსპედიტორი, რომელიც უზრუნველყოფს მომხმარებლის ყოვლისმომცველ მხარდაჭერას ტვირთის გადაზიდვის ყველა ეტაპზე.",
	},
	"about-section-link-1": {
		ru: "Подробнее",
		en: "Read More",
		ge: "გაიგე მეტი",
	},
	"about-title-2": {
		ru: "МЫ В ЦИФРАХ",
		en: "SOME FACTS",
		ge: "გვერდის შესახებ",
	},
	"about-text_2": {
		ru: "10 лет в сфере логистики",
		en: "10 years in logistics",
		ge: "10 წლები ლოჯისტიკაში",
	},
	"about-text_3": {
		ru: "выполненных работ",
		en: "completed projetcs",
		ge: "დასრულებული სამუშაო",
	},
	"about-text_4": {
		ru: "Довольных клиентов",
		en: "Satisfied customers",
		ge: "კმაყოფილი მომხმარებლები",
	},
	"about-title-3": {
		ru: "ПОЧЕМУ ВЫБИРАЮТ НАС",
		en: "WHY CHOOSE US",
		ge: "გვერდის შესახებ",
	},
	"about-choose-subtitle": {
		ru: "ПОЧЕМУ BS GEORGIA?",
		en: "WHY BS GEORGIA?",
		ge: "რატომ BS GEORGIA?",
	},
	"about-choose-text-1": {
		ru: "Лучшие логистические решения от BS Georgia",
		en: "The best logistics solutions from BS Georgia",
		ge: "საუკეთესო ლოგისტიკური გადაწყვეტილებები BSG-სგან",
	},
	"about-choose-text-2": {
		ru: "У нас низкие цены и ваш груз застрахован",
		en: "We have low prices and your cargo is insured",
		ge: "გვაქვს დაბალი ფასები და თქვენი ტვირთი დაზღვეულია",
	},
	"about-choose-text-3": {
		ru: "Быстрая и безопасная доставка грузов до получателя",
		en: "Fast and safe delivery of goods to the recipient",
		ge: "საქონლის სწრაფი და უსაფრთხო მიწოდება მიმღებამდე",
	},
	"about-choose-text-4": {
		ru: "Наши специалисты  24/7 на связи с клиентами",
		en: "Our specialists are in touch with clients 24/7",
		ge: "ჩვენი სპეციალისტები კონტაქტში არიან კლიენტებთან 24/7",
	},
	"about-title-4": {
		ru: "КАК МЫ РАБОТАЕМ",
		en: "HOW WE ARE WORKING",
		ge: "როგორ ვმუშაობთ",
	},
	"about-title-5": {
		ru: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
		en: "FAQ",
		ge: "FAQ",
	},
	"about-title-6": {
		ru: "КАКИЕ ВИДЫ УСЛУГ ПРЕДОСТАВЛЯЕТ КОМПАНИЯ BS GEORGIA?",
		en: "WHAT SERVICES DOES BS GEORGIA PROVIDE?",
		ge: "რა სერვისებს გთავაზობთ BS GEORGIA?",
	},
	"about-title-7": {
		ru: "КАК ОПЛАТИТЬ УСЛУГИ КОМПАНИИ BS GEORGIA?",
		en: "HOW TO PAY FOR BS GEORGIA SERVICES?",
		ge: "როგორ გადავიხადო BS GEORGIA-ს სერვისები?",
	},
	"about-title-8": {
		ru: "ПОЧЕМУ ВАМ МОЖНО ДОВЕРЯТЬ?",
		en: "WHY CAN YOU TRUST?",
		ge: "რატომ შეგიძლიათ ენდოთ?",
	},
	"about-title-9": {
		ru: "СКОЛЬКО СТОЯТ ГРУЗОПЕРЕВОЗКИ?",
		en: "HOW MUCH DOES THE TRANSPORTATION COST?",
		ge: "რა ღირს მიწოდება?",
	},
	"about-title-10": {
		ru: "КАК ОФОРМИТЬ ЗАЯВКУ НА ПЕРЕВОЗКУ?",
		en: "HOW TO APPLY FOR TRANSPORTATION?",
		ge: "როგორ შევიტანოთ განაცხადი ტრანსპორტირებაზე?",
	},
	"about-text-3": {
		ru: "Наша компания доставляет грузы из Грузии на собственных автовозах перевозим легковые автомобили в Азербайджан, Армения и по СНГ более 8 лет. Мы специализируемся на автомобильных грузоперевозках а также контейнерные и ж/д перевозки грузов в любых направлениях и зарекомендовали себя на логистическом рынке в качестве ответственного международного экспедитора, оказывающего комплексную поддержку клиентов на всех этапах транспортировки грузов.",
		en: "Our company has been delivering goods from Georgia on our own car transporters, we have been transporting cars to Azerbaijan, Armenia and the CIS for more than 10 years. We specialize in road freight transportation, as well as container and railway transportation of goods in any direction and have established ourselves in the logistics market as a responsible international freight forwarder, providing comprehensive customer support at all stages of cargo transportation.",
		ge: "ჩვენი კომპანია ახორციელებს საქონლის მიწოდებას საქართველოდან საკუთარი ავტოტრანსპორტირებით, 10 წელზე მეტია ვახორციელებთ მანქანების გადაზიდვას აზერბაიჯანში, სომხეთსა და დსთ-ში. ჩვენ სპეციალიზირებული ვართ საგზაო ტვირთების გადაზიდვაში, ასევე საქონლის საკონტეინერო და სარკინიგზო გადაზიდვებში ნებისმიერი მიმართულებით და დავიმკვიდრეთ თავი ლოგისტიკურ ბაზარზე, როგორც პასუხისმგებელი საერთაშორისო სატვირთო ექსპედიტორი, რომელიც უზრუნველყოფს მომხმარებლის ყოვლისმომცველ მხარდაჭერას ტვირთის გადაზიდვის ყველა ეტაპზე.",
	},
	"about-text-4": {
		ru: "Оплата перевозки грузов может производиться как при отправлении, так и при получении груза в нашем филиале. Оплата осуществляется в наличной и безналичной формах.",
		en: "Payment for the carriage of goods can be made both upon departure and upon receipt of the goods in our branch. Payment is made in cash and non-cash forms.",
		ge: "საქონლის გადაზიდვის გადახდა შესაძლებელია როგორც გამგზავრებისას, ასევე საქონლის ჩვენს ფილიალში მიღებისას. გადახდა ხდება ნაღდი და უნაღდო ფორმით.",
	},
	"about-text-5": {
		ru: "Оплата перевозки грузов может производиться как при отправлении, так и при получении груза в нашем филиале. Оплата осуществляется в наличной и безналичной формах.",
		en: "Payment for the carriage of goods can be made both upon departure and upon receipt of the goods in our branch. Payment is made in cash and non-cash forms.",
		ge: "საქონლის გადაზიდვის გადახდა შესაძლებელია როგორც გამგზავრებისას, ასევე საქონლის ჩვენს ფილიალში მიღებისას. გადახდა ხდება ნაღდი და უნაღდო ფორმით.",
	},
	"about-text-6": {
		ru: "Стоимость перевозки грузов зависит от вида транспорта, от пункта отправления и назначения, а также от характера груза, его веса и габаритов. Чтобы узнать точную стоимость доставки, обратитесь к нашим менеджерам по телефону +995568231199 + 995 568 23 11 99",
		en: "The cost of transporting goods depends on the type of transport, on the point of departure and destination, as well as on the nature of the cargo, its weight and dimensions. To find out the exact cost of delivery, please contact our managers by phone +995568231199 + 995 568 23 11 99",
		ge: "საქონლის ტრანსპორტირების ღირებულება დამოკიდებულია ტრანსპორტის ტიპზე, გამგზავრებისა და დანიშნულების პუნქტზე, ასევე ტვირთის ბუნებაზე, მის წონასა და ზომებზე. მიწოდების ზუსტი ღირებულების გასარკვევად, გთხოვთ დაუკავშირდეთ ჩვენს მენეჯერებს ტელეფონით +995568231199 + 995 568 23 11 99",
	},
	"about-text-7": {
		ru: "Чтобы оформить заявку на перевозку грузов, вы можете обратиться к специалистам BS GEORGIA по телефону +995 568 23 11 99  +995 577 28 02 88 или воспользоваться формой обратной связи.",
		en: "To apply for the carriage of goods, you can contact the BS GEORGIA specialists by phone +995 568 23 11 99+995 577 28 02 88 or use the feedback form.",
		ge: "ტვირთის გადაზიდვაზე განაცხადის მისაღებად შეგიძლიათ დაუკავშირდეთ BS GEORGIA-ს სპეციალისტებს ტელეფონით +995 568 23 11 99 +995 577 28 02 88 ან გამოიყენეთ გამოხმაურების ფორმა.",
	},
	/* services lang */
	"services-title-1": {
		ru: "НАШИ УСЛУГИ",
		en: "OUR SERVICES",
		ge: "სერვისების",
	},
	"services-subtitle-1": {
		ru: "Авиаперевозка",
		en: "Air freight",
		ge: "საჰაერო მიწოდება",
	},
	"services-card-text_1": {
		ru: "Мы оказываем широкий спектр услуг в области грузовых перевозок кроме автоперевозок и железнодорожных перевозок наша компания отправляет грузы и воздушным транспортом то есть авиаперевозкой если груз нужно отправить очень срочно.",
		en: "We provide a wide range of services in the field of freight transportation, in addition to road transportation and railway transportation, our company sends goods by air transport, that is, air transportation if the goods need to be sent very urgently.",
		ge: "ჩვენ გთავაზობთ მომსახურების ფართო სპექტრს სატვირთო გადაზიდვების სფეროში, გარდა საავტომობილო და სარკინიგზო გადაზიდვებისა, ჩვენი კომპანია ასევე აგზავნის საქონელს საჰაერო გზით, თუ თქვენ გჭირდებათ ძალიან სასწრაფო მიწოდება",
	},
	"services-card-btn-1": {
		ru: "Подробнее",
		en: "Read More",
		ge: "გაიგე მეტი",
	},
	"services-subtitle-2": {
		ru: "Автоперевозки",
		en: "Truck freight",
		ge: "ავტო გადაზიდვა",
	},
	"services-card-text_2": {
		ru: "Мы перевозим грузы из Грузии в страны СНГ и в обратном направоении на собственных автотранспорте компании. Наша компания за 10 лет опыта зарекомендовала себя на логистическом рынке в качестве ответственного международного экспедитора.",
		en: "We transport goods from Georgia to the CIS countries and in the opposite direction on our own vehicles of the company. For 10 years of experience, we have established ourselves as a responsible international freight forwarder.",
		ge: "საქონელს ვაგზავნით საქართველოდან დსთ-ს ქვეყნებში და საპირისპირო მიმართულებით კომპანიის საკუთარი მანქანებით. 10 წლიანი გამოცდილებით, ჩვენ ჩამოვყალიბდით, როგორც პასუხისმგებელი საერთაშორისო სატვირთო ექსპედიტორი.",
	},
	"services-card-btn-2": {
		ru: "Подробнее",
		en: "Read More",
		ge: "გაიგე მეტი",
	},
	"services-subtitle-3": {
		ru: "Ж/Д перевозки",
		en: "Train freight",
		ge: "სარკინიგზო გზით",
	},
	"services-card-text_3": {
		ru: "Помимо авиаперевозок и  грузоперевозки на автотранспорте наша компания отправляем гаритные и не габаритные грузы по ж/д на контейекрах и в специальных вагонах по всем направлениям и в любом обьёме. Мы ценим Ваше время.",
		en: "For 10 years of experience, we specialize not only in air and road cargo transportation, but also container and rail transportation of goods in any direction and in any volume. We also send oversized cargo by rail. We appreciate your time.",
		ge: "გარდა საჰაერო ტრანსპორტირებისა და ტვირთების საავტომობილო ტრანსპორტირებისა, ჩვენი კომპანია აგზავნის დიდი და დიდი ზომის ტვირთებს რკინიგზით კონტეინერებით და სპეციალური ვაგონებით ყველა მიმართულებით.",
	},
	"services-card-btn-3": {
		ru: "Подробнее",
		en: "Read More",
		ge: "გაიგე მეტი",
	},
	"about-work-subtitle-1": {
		ru: "Оставляете заявку",
		en: "Submit your application",
		ge: "დატოვე მოთხოვნა",
	},
	"about-work-subtitle-2": {
		ru: "Заключаем договор",
		en: "We conclude an agreement",
		ge: "ხელშეკრულების დადება",
	},
	"about-work-subtitle-3": {
		ru: "Oплачиваете за перевозку",
		en: "Payment for transportation",
		ge: "გადაიხადეთ ტრანსპორტირება",
	},
	"about-work-subtitle-4": {
		ru: "Отправляем ваш груз",
		en: "We send your cargo",
		ge: "საქონლის გაგზავნა",
	},
	"contact_page-title-2": {
		ru: "СВЯЗАТЬСЯ С НАМИ",
		en: "CONTACT US",
		ge: "დაგვიკავშირდით",
	},
	"contact_page-title-3": {
		ru: "Остались вопросы? Отправьте нам сообшение мы обьязательно свяжемся с Вами",
		en: "Do you have any questions? Send us a message and we will contact you",
		ge: "გაქვთ რაიმე შეკითხვები? გამოგვიგზავნეთ შეტყობინება და ჩვენ დაგიკავშირდებით",
	},
	"contact_page-title-4": {
		ru: "Ваше имя",
		en: "Your name",
		ge: "თქვენი სახელი",
	},
	"contact_page-title-5": {
		ru: "Телефон",
		en: "Your phone",
		ge: "თქვენი ტელეფონის ნომერი",
	},
	"contact_page-title-6": {
		ru: "Ваш email",
		en: "Your email",
		ge: "თქვენი ელ. ფოსტა",
	},
	"contact_page-title-7": {
		ru: "Ваше сообщение",
		en: "Your message",
		ge: "თქვენი შეტყობინება",
	},
	"contact_page-title-8": {
		ru: "Я соглашаюсь с",
		en: "I agree with",
		ge: "ვეთანხმები",
	},
	"contact_page-title-9": {
		ru: "политикой конфедиальности",
		en: "privacy policy",
		ge: "privacy policy",
	},
	"contact_page-title-10": {
		ru: "Отправить",
		en: "Submit",
		ge: "გაგზავნა",
	},
	/* footer lang */
	"links-title-1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
	"links-title-2": {
		ru: "Ссылки",
		en: "Get help",
		ge: "ბმულები",
	},
	"links-title-3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"links-title-4": {
		ru: "Связатся",
		en: "Follow us",
		ge: "მოგვყევი",
	},
	"footer-home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"footer-about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"footer-services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"footer-contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"footer-shipping": {
		ru: "Виды Перевозок",
		en: "Shipping",
		ge: "ტრანსპორტირება",
	},
	"footer-order": {
		ru: "Статус заявки",
		en: "Order status",
		ge: "შეკვეთის სტატუსი",
	},
	"footer-address": {
		ru: "Грузия г.Поти Гегидзе 7",
		en: "Georgia, Poti Gegidze 7",
		ge: "საქართველო, ფოთი გეგიძის 7",
	},
};

/* about page */
const aboutTexts = {
	"about_page-title": {
		ru: "Black Sea Georgia/О компании",
		en: "Black Sea Georgia/about",
		ge: "Black Sea Georgia/გვერდის შესახებ",
	},
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"about_page-home-title": {
		ru: "О НАС",
		en: "ABOUT US",
		ge: "ჩვენს შესახებ",
	},
	"about_page-title-1": {
		ru: "О КОМПАНИИ",
		en: "ABOUT COMPANY",
		ge: "ჩვენს შესახებ",
	},
	"about_page-text": {
		ru: "BS Georgia LTD - международная транспортно-логистическая компания, основанная в 2017 году. Мы осуществляем перевозку любых видов грузов, товаров по морю на морских суднах в контейнерах из Америки, Европы и из ОАЭ, а также можем перевезти ваш груз железнодорожным путём в контейнерах и по суще на контейнеровозах, на автоприцепах из Европы и из стран СНГ до территории Грузии на основании соглашённого договора или контракта с клиентами после отправляем ваш груз в любую точку мира быстро, безопасно,  качественно и самое главное в срок. В настоящее время в основном перевозим легковые автомобили на собственных эвакуаторах нашей компании по направлениям Азербайджан, Армения, и в страны Центральной Азии. А также мы оказываем широкий спектр услуг в области грузовых перевозок Воздущным транспортом то есть авиаперевозкой если груз нужно отправить очень срочно, услуги по оформлению документов на таможне, складского хранения и обработки грузов для повышения эффективности и рентабельности вашей цепочки поставок, с услугами по высоким стандартам качества и комплексными решениями, которые помогают нам быстро транспортировать ваши грузы, стремясь обеспечить высокий уровень обслуживания. Мы ценим Ваше время.",
		en: "BS Georgia LTD - international transport and logistics company founded in 2017. We carry out transportation of any types of cargo, goods by sea on sea vessels in containers from America, Europe and from the UAE, and we can also transport your cargo by rail in containers and in fact on container ships, on trailers from Europe and from the CIS countries to the territory of Georgia on the basis of an agreed agreement or a contract with customers, after we send your cargo to anywhere in the world quickly, safely, efficiently and most importantly on time. At present, we mainly transport cars on our own tow trucks of our company to the directions of Azerbaijan, Armenia, and to the countries of Central Asia. We also provide a wide range of services in the field of cargo transportation. Air transport i.e. air transportation if the cargo needs to be sent very urgently, customs clearance documents, warehousing and cargo handling to increase the efficiency and profitability of your supply chain, with services of high quality standards and comprehensive solutions that help us move your shipments quickly while striving to provide a high level of service.",
		ge: "შპს BS Georgia - საერთაშორისო სატრანსპორტო და ლოგისტიკური კომპანია დაარსებული 2017 წელს. ვახორციელებთ ნებისმიერი სახის ტვირთის, ტვირთის გადაზიდვას საზღვაო გემებით კონტეინერებით ამერიკიდან, ევროპიდან და არაბეთის გაერთიანებული საემიროებიდან, ასევე შეგვიძლია თქვენი ტვირთის ტრანსპორტირება რკინიგზით ქ. კონტეინერებზე და ფაქტობრივად საკონტეინერო გემებზე, მისაბმელებზე ევროპიდან და დსთ-ს ქვეყნებიდან საქართველოს ტერიტორიაზე შეთანხმებული ხელშეკრულების ან მომხმარებლებთან ხელშეკრულების საფუძველზე, მას შემდეგ რაც თქვენს ტვირთს მსოფლიოს ნებისმიერ წერტილში გავგზავნით სწრაფად, უსაფრთხოდ, ეფექტურად. და რაც მთავარია დროულად. ამჟამად, მანქანებს ძირითადად ჩვენი კომპანიის საკუთარი ბუქსირებით ვატარებთ აზერბაიჯანის, სომხეთის და შუა აზიის ქვეყნების მიმართულებით. ჩვენ ასევე გთავაზობთ მომსახურების ფართო სპექტრს ტვირთის გადაზიდვის სფეროში. საჰაერო ტრანსპორტი, ანუ საჰაერო ტრანსპორტი, თუ ტვირთის გაგზავნა ძალიან სასწრაფოდ არის საჭირო, განბაჟების დოკუმენტები, სასაწყობო და ტვირთის დამუშავება თქვენი მიწოდების ჯაჭვის ეფექტურობისა და მომგებიანობის გაზრდის მიზნით, მაღალი ხარისხის სტანდარტების მომსახურებით და ყოვლისმომცველი გადაწყვეტილებებით, რომლებიც გვეხმარება თქვენი ტვირთების სწრაფად გადატანაში. მაღალი დონის სერვისის მიწოდების მცდელობისას.",
	},
	"about_page-title-2": {
		ru: "Наша команда",
		en: "Our Team",
		ge: "ჩვენი გუნდი",
	},
	"about-page-card-title-1": {
		ru: "Давид Микадзе",
		en: "Davit Mikadze",
		ge: "დავით მიქაძე",
	},
	"about-page-card-subtitle-1": {
		ru: "Директор",
		en: "Director",
		ge: "დირექტორი",
	},
	"about-page-btn-1": {
		ru: "Связаться",
		en: "Contact",
		ge: "კონტაქტები",
	},
	"about-page-card-title-2": {
		ru: "Инга Куция",
		en: "Inga Kutsia",
		ge: "კონტაქტები",
	},
	"about-page-card-subtitle-2": {
		ru: "Офис-менеджер",
		en: "Office manager",
		ge: "ოფისის მენეჯერი",
	},
	"about-page-btn-2": {
		ru: "Связаться",
		en: "Contact",
		ge: "კონტაქტები",
	},
	"about-page-card-title-3": {
		ru: "Теймураз Цеквава",
		en: "Teimuraz Tsekvava",
		ge: "თეიმურაზ ცეკვავა",
	},
	"about-page-card-subtitle-3": {
		ru: "Экспедитор",
		en: "Expeditor",
		ge: "ექსპედიტორი",
	},
	"about-page-btn-3": {
		ru: "Связаться",
		en: "Contact",
		ge: "კონტაქტები",
	},
	/* footer lang */
	"links-title-1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
	"links-title-2": {
		ru: "Ссылки",
		en: "Get help",
		ge: "ბმულები",
	},
	"links-title-3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"links-title-4": {
		ru: "Связатся",
		en: "Follow us",
		ge: "მოგვყევი",
	},
	"footer-home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"footer-about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"footer-services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"footer-contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"footer-shipping": {
		ru: "Виды Перевозок",
		en: "Shipping",
		ge: "ტრანსპორტირება",
	},
	"footer-order": {
		ru: "Статус заявки",
		en: "Order status",
		ge: "შეკვეთის სტატუსი",
	},
	"footer-address": {
		ru: "Грузия г.Поти Гегидзе 7",
		en: "Georgia, Poti Gegidze 7",
		ge: "საქართველო, ფოთი გეგიძის 7",
	},
};
/* services page */
const servicesTexts = {
	"services_page-title": {
		ru: "Black Sea Georgia/услуги",
		en: "Black Sea Georgia/services",
		ge: "Black Sea Georgia/სერვისების გვერდი",
	},
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"services-home-title": {
		ru: "УСЛУГИ",
		en: "SERVICES",
		ge: "სერვისები",
	},
	"services-page-title-1": {
		ru: "НАШИ УСЛУГИ",
		en: "OUR SERVICES",
		ge: "ჩვენი სერვისები",
	},
	"services-page-subtitle-1": {
		ru: "Авиаперевозка",
		en: "Air freight",
		ge: "ჩვენი სერვისები",
	},
	"services-page-text-1": {
		ru: "Мы оказываем широкий спектр услуг в области грузовых перевозок кроме автоперевозок и Ж/Д перевозок наша коипания отправляет грузы и Воздущным транспортом то есть авиаперевозкой если груз нужно отправить очень срочно. Если Вас интересует наша услуга авиаперевозки можете написать нам или заполнить форму на нашем сайте.Наши пециалисты саяжуться с Вами!",
		en: "We provide a wide range of services in the field of freight transportation, in addition to road transportation and railway transportation, our company sends goods by air transport, that is, air transportation if the goods need to be sent very urgently. If you are interested in our air transportation service, you can write to us or fill out the form on our website. Our specialists will contact you!",
		ge: "ჩვენ გთავაზობთ მომსახურების ფართო სპექტრს სატვირთო გადაზიდვების სფეროში, გარდა საავტომობილო და სარკინიგზო გადაზიდვებისა, ჩვენი კომპანია აგზავნის საქონელს საჰაერო ტრანსპორტით, ანუ საჰაერო ტრანსპორტით, თუ საქონელი ძალიან სასწრაფოდ არის საჭირო. თუ გაინტერესებთ ჩვენი საჰაერო ტრანსპორტის სერვისი, შეგიძლიათ მოგვწეროთ ან შეავსოთ ფორმა ჩვენს ვებ-გვერდზე, ჩვენი სპეციალისტები დაგიკავშირდებიან!",
	},
	"services-page-subtitle-2": {
		ru: "Автоперевозка",
		en: "Truck freight",
		ge: "სატვირთო გადაზიდვები",
	},
	"services-page-text-2": {
		ru: "Мы перевозим грузы из Грузии в страны СНГ и в обратном направоении на собственных автотранспорте компании. За 10 лет опыта мы зарекомендовали себя на логистическом рынке в качестве ответственного международного экспедитора. Наш девиз Сделать переаозку более простым и удобным для наших клиентов. Ваш груз в надёжныз руках что это озночает то есть у нашей компании все грузы застрахованы а это самый главное в грузопереврзке! Если у вас возникла необходимость в доставке груза – свяжитесь с нами и мы организуем работу профессионально и в нужный вам срок!",
		en: "We transport goods from Georgia to the CIS countries and in the opposite direction on our own vehicles of the company. For 10 years of experience, we have established ourselves in the logistics market as a responsible international freight forwarder. Our motto is to make shipping easier and more convenient for our customers. Your cargo is in reliable hands, which means that our company has all cargo insured, and this is the most important thing in cargo transportation! If you have a need for the delivery of goods - contact us and we will organize the work professionally and on time!",
		ge: "საქონელს ვაგზავნით საქართველოდან დსთ-ს ქვეყნებში და საპირისპირო მიმართულებით კომპანიის საკუთარი მანქანებით. 10 წლიანი გამოცდილებით, ჩვენ დავიმკვიდრეთ თავი ლოგისტიკის ბაზარზე, როგორც პასუხისმგებელი საერთაშორისო სატვირთო ექსპედიტორი. ჩვენი დევიზია გავხადოთ ტრანსპორტირება უფრო ადვილი და მოსახერხებელი ჩვენი მომხმარებლებისთვის. თქვენი ტვირთი საიმედო ხელშია, რაც ნიშნავს, რომ ჩვენს კომპანიას აქვს ყველა ტვირთი დაზღვეული და ეს არის ყველაზე მნიშვნელოვანი ტვირთის გადაზიდვაში! თუ თქვენ გაქვთ საქონლის მიწოდების საჭიროება - დაგვიკავშირდით და ჩვენ მოვაწყობთ სამუშაოს პროფესიონალურად და დროულად!",
	},
	"services-page-subtitle-3": {
		ru: "Ж/Д перевозки",
		en: "Train freight",
		ge: "მატარებლის სატვირთო",
	},
	"services-page-text-3": {
		ru: "Мы специализируемся не только на автомобильных грузоперевозках а также контейнерные и ж/д перевозки грузов в любых направлениях и в любом обьёме.А также отправляем не габаритные грузы по Ж/Д. Среди наших постоянных заказчиков – и крупные компании, и представители малого бизнеса. Главный наш гарант – это доверие клиентов, которые однажды обратились в BS GEORGIA, а теперь благодарят нас за работу и повторно обращаются к нам, так как мы доставляем грузы со стабильным качеством и оперативностью по конкурентным рыночным ценам",
		en: "We specialize not only in road cargo transportation, but also in container and railway transportation of goods in any direction and in any volume. We also send oversized cargo by railway. Among our regular customers are both large companies and small businesses. Our main guarantor is the trust of customers who once turned to BS GEORGIA, and now they thank us for the work and turn to us again, as we deliver goods with stable quality and efficiency at competitive market prices",
		ge: "ჩვენ სპეციალიზირებულია არა მხოლოდ საგზაო ტვირთების გადაზიდვაზე, არამედ საკონტეინერო და სარკინიგზო გადაზიდვაზე ნებისმიერი მიმართულებით და ნებისმიერი მოცულობით, ასევე ვაგზავნით დიდი ზომის ტვირთებს რკინიგზით. ჩვენს რეგულარულ მომხმარებლებს შორის არიან როგორც მსხვილი კომპანიები, ასევე მცირე ბიზნესები. ჩვენი მთავარი გარანტი არის მომხმარებლების ნდობა, რომლებიც ოდესღაც მიმართავდნენ BS GEORGIA-ს, ახლა კი მადლობას გვიხდიენ გაწეული სამუშაოსთვის და კვლავ მოგვმართავენ, რადგან ვაწვდით საქონელს სტაბილური ხარისხით და ეფექტურობით კონკურენტულ საბაზრო ფასებში.",
	},
	"services-page-subtitle-4": {
		ru: "Дополнительные услуги",
		en: "Additional services",
		ge: "დამატებითი სერვისები",
	},
	"services-page-text-4": {
		ru: "Мы также оказываем дополнительные услуги нашим клиентам услуги таможенного оформления, складского хранения и обработки грузов для повышения эффективности и рентабельности вашей цепочки поставок, с услугами по высоким стандартам качества и комплексными решениями, которые помогают нам быстро транспортировать ваши товары, стремясь обеспечить высокий уровень обслуживания. Чтобы оформить заявку на перевозку грузов, вы можете обратиться к специалистам BS GEORGIA по телефону + 995 568 23 11 99, + 995 577 28 02 88 или воспользоваться формой заказа.",
		en: "We also provide value-added services to our clients with customs clearance, warehousing and cargo handling services to improve the efficiency and profitability of your supply chain, with high quality services and comprehensive solutions that help us transport your goods quickly while striving to provide a high level of service. To apply for the carriage of goods, you can contact BS GEORGIA specialists by phone + 995 568 23 11 99, + 995 577 28 02 88 or use the order form.",
		ge: "ჩვენ ასევე ვაძლევთ ჩვენს კლიენტებს დამატებული ღირებულების სერვისებს საბაჟო განბაჟების, სასაწყობო და ტვირთის გადამუშავების სერვისებით თქვენი მიწოდების ჯაჭვის ეფექტურობისა და მომგებიანობის გასაუმჯობესებლად, მაღალი ხარისხის მომსახურებითა და ყოვლისმომცველი გადაწყვეტილებებით, რომლებიც დაგვეხმარება თქვენი საქონლის სწრაფად ტრანსპორტირებაში, ხოლო ჩვენ ვცდილობთ უზრუნველვყოთ მაღალი ფასი. მომსახურების დონე. ტვირთის გადაზიდვაზე განაცხადის მისაღებად შეგიძლიათ დაუკავშირდეთ BS GEORGIA-ს სპეციალისტებს ტელეფონით + 995 568 23 11 99, + 995 577 28 02 88 ან გამოიყენოთ შეკვეთის ფორმა.",
	},
	"order-title-1": {
		ru: "ЗАКАЗАТЬ РАССЧЁТ",
		en: "ORDER NOW",
		ge: "შეუკვეთე ახლავე",
	},
	"order-title-2": {
		ru: "Полнота заполнения заявки гарантирует быстрый расчет ставки. Если у нас останутся вопросы, мы свяжемся с вами.",
		en: "The completeness of filling out the application guarantees a quick calculation of the rate. If we have any questions, we will contact you.",
		ge: "განაცხადის შევსების სისრულე გარანტიას იძლევა ტარიფის სწრაფ გაანგარიშებას. ჩვენ დაგიკავშირდებით, თუ რაიმე შეკითხვა გვექნება.",
	},
	"order_page-title-1": {
		ru: "Ваше имя",
		en: "Your name",
		ge: "თქვენი სახელი",
	},
	"order_page-title-2": {
		ru: "Ваш email",
		en: "Your email",
		ge: "თქვენი ელ. ფოსტა",
	},
	"order_page-title-3": {
		ru: "Организация",
		en: "Company",
		ge: "კომპანია",
	},
	"order_page-title-4": {
		ru: "Телефон",
		en: "Your phone",
		ge: "თქვენი ტელეფონის ნომერი",
	},
	"order_page-title-5": {
		ru: "Тип перевозки",
		en: "Type of transportation",
		ge: "ტრანსპორტის ტიპი",
	},
	"order_page-title-6": {
		ru: "Наименование груза",
		en: "Shipping Name",
		ge: "მიწოდების სახელი",
	},
	"order_page-title-7": {
		ru: "Вес груза",
		en: "Cargo weight",
		ge: "ტვირთის წონა",
	},
	"order_page-title-8": {
		ru: "Откуда: [страна/город]",
		en: "From: [country/city]",
		ge: "მდებარეობა: [ქვეყანა/ქალაქი]",
	},
	"order_page-title-9": {
		ru: "Куда: [страна/город]",
		en: "Where: [country/city]",
		ge: "სად: [ქვეყანა/ქალაქი]",
	},
	"order_page-title-10": {
		ru: "Ваше сообщение",
		en: "Your message",
		ge: "თქვენი შეტყობინება",
	},
	"order-page-title-11": {
		ru: "Соглашаюсь с",
		en: "I agree with",
		ge: "ვეთანხმები",
	},
	"order-page-title-12": {
		ru: "политикой конфедиальности",
		en: "privacy policy",
		ge: "privacy policy",
	},
	"order_page-title-13": {
		ru: "Отправить",
		en: "Submit",
		ge: "გაგზავნა",
	},
	/* footer lang */
	"links-title-1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
	"links-title-2": {
		ru: "Ссылки",
		en: "Get help",
		ge: "ბმულები",
	},
	"links-title-3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"links-title-4": {
		ru: "Связатся",
		en: "Follow us",
		ge: "მოგვყევი",
	},
	"footer-home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"footer-about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"footer-services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"footer-contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"footer-shipping": {
		ru: "Виды Перевозок",
		en: "Shipping",
		ge: "ტრანსპორტირება",
	},
	"footer-order": {
		ru: "Статус заявки",
		en: "Order status",
		ge: "შეკვეთის სტატუსი",
	},
	"footer-address": {
		ru: "Грузия г.Поти Гегидзе 7",
		en: "Georgia, Poti Gegidze 7",
		ge: "საქართველო, ფოთი გეგიძის 7",
	},
};

/* contact page */
const contactTexts = {
	"contact_page-title": {
		ru: "Black Sea Georgia/контакты",
		en: "Black Sea Georgia/сontacts",
		ge: "Black Sea Georgia/კონტაქტების გვერდი",
	},
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"contact_page-home-title": {
		ru: "КОНТАКТЫ",
		en: "CONTACTS",
		ge: "კონტაქტები",
	},
	"contact_page-title-1": {
		ru: "НАШИ КОНТАКТЫ",
		en: "OUR CONTACTS",
		ge: "ჩვენი კონტაქტები",
	},
	"contact_page-title-2": {
		ru: "СВЯЗАТЬСЯ С НАМИ",
		en: "CONTACT US",
		ge: "დაგვიკავშირდით",
	},
	"contact_page-title-3": {
		ru: "Остались вопросы? Отправьте нам сообшение мы обьязательно свяжемся с Вами",
		en: "Do you have any questions? Send us a message and we will contact you",
		ge: "გაქვთ რაიმე შეკითხვები? გამოგვიგზავნეთ შეტყობინება და ჩვენ დაგიკავშირდებით",
	},
	"contact_page-title-4": {
		ru: "Ваше имя",
		en: "Your name",
		ge: "თქვენი სახელი",
	},
	"contact_page-title-5": {
		ru: "Телефон",
		en: "Your phone",
		ge: "თქვენი ტელეფონის ნომერი",
	},
	"contact_page-title-6": {
		ru: "Ваш email",
		en: "Your email",
		ge: "თქვენი ელ. ფოსტა",
	},
	"contact_page-title-7": {
		ru: "Ваше сообщение",
		en: "Your message",
		ge: "თქვენი შეტყობინება",
	},
	"contact_page-title-8": {
		ru: "Я соглашаюсь с",
		en: "I agree with",
		ge: "ვეთანხმები",
	},
	"contact_page-title-9": {
		ru: "политикой конфедиальности",
		en: "privacy policy",
		ge: "privacy policy",
	},
	"contact_page-title-10": {
		ru: "Отправить",
		en: "Submit",
		ge: "გაგზავნა",
	},
	/* footer lang */
	"links-title-1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
	"links-title-2": {
		ru: "Ссылки",
		en: "Get help",
		ge: "ბმულები",
	},
	"links-title-3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"links-title-4": {
		ru: "Связатся",
		en: "Follow us",
		ge: "მოგვყევი",
	},
	"footer-home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"footer-about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"footer-services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"footer-contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"footer-shipping": {
		ru: "Виды Перевозок",
		en: "Shipping",
		ge: "ტრანსპორტირება",
	},
	"footer-order": {
		ru: "Статус заявки",
		en: "Order status",
		ge: "შეკვეთის სტატუსი",
	},
	"footer-address": {
		ru: "Грузия г.Поти Гегидзе 7",
		en: "Georgia, Poti Gegidze 7",
		ge: "საქართველო, ფოთი გეგიძის 7",
	},
};

/* order page */
const orderTexts = {
	"order_page-title": {
		ru: "Black Sea Georgia/заказать рассчёт",
		en: "Black Sea Georgia/order",
		ge: "Black Sea Georgia/შეკვეთის გაანგარიშება",
	},
	"home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"order-page-home-title": {
		ru: "ЗАКАЗАТЬ РАССЧЁТ",
		en: "ORDER NOW",
		ge: "შეუკვეთე ახლავე",
	},
	"order-title-1": {
		ru: "ЗАКАЗАТЬ РАССЧЁТ",
		en: "ORDER NOW",
		ge: "შეუკვეთე ახლავე",
	},
	"order-title-2": {
		ru: "Полнота заполнения заявки гарантирует быстрый расчет ставки. Если у нас останутся вопросы, мы свяжемся с вами.",
		en: "The completeness of filling out the application guarantees a quick calculation of the rate. If we have any questions, we will contact you.",
		ge: "განაცხადის შევსების სისრულე გარანტიას იძლევა ტარიფის სწრაფ გაანგარიშებას. ჩვენ დაგიკავშირდებით, თუ რაიმე შეკითხვა გვექნება.",
	},
	"order_page-title-1": {
		ru: "Ваше имя",
		en: "Your name",
		ge: "თქვენი სახელი",
	},
	"order_page-title-2": {
		ru: "Ваш email",
		en: "Your email",
		ge: "თქვენი ელ. ფოსტა",
	},
	"order_page-title-3": {
		ru: "Организация",
		en: "Company",
		ge: "კომპანია",
	},
	"order_page-title-4": {
		ru: "Телефон",
		en: "Your phone",
		ge: "თქვენი ტელეფონის ნომერი",
	},
	"order_page-title-5": {
		ru: "Тип перевозки",
		en: "Type of transportation",
		ge: "ტრანსპორტის ტიპი",
	},
	"order_page-title-6": {
		ru: "Наименование груза",
		en: "Shipping Name",
		ge: "მიწოდების სახელი",
	},
	"order_page-title-7": {
		ru: "Вес груза",
		en: "Cargo weight",
		ge: "ტვირთის წონა",
	},
	"order_page-title-8": {
		ru: "Откуда: [страна/город]",
		en: "From: [country/city]",
		ge: "მდებარეობა: [ქვეყანა/ქალაქი]",
	},
	"order_page-title-9": {
		ru: "Куда: [страна/город]",
		en: "Where: [country/city]",
		ge: "სად: [ქვეყანა/ქალაქი]",
	},
	"order_page-title-10": {
		ru: "Ваше сообщение",
		en: "Your message",
		ge: "თქვენი შეტყობინება",
	},
	"order-page-title-11": {
		ru: "Соглашаюсь с",
		en: "I agree with",
		ge: "ვეთანხმები",
	},
	"order-page-title-12": {
		ru: "политикой конфедиальности",
		en: "privacy policy",
		ge: "privacy policy",
	},
	"order_page-title-13": {
		ru: "Отправить",
		en: "Submit",
		ge: "გაგზავნა",
	},
	/* footer lang */
	"links-title-1": {
		ru: "Навигация",
		en: "Company",
		ge: "ნავიგაცია",
	},
	"links-title-2": {
		ru: "Ссылки",
		en: "Get help",
		ge: "ბმულები",
	},
	"links-title-3": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"links-title-4": {
		ru: "Связатся",
		en: "Follow us",
		ge: "მოგვყევი",
	},
	"footer-home": {
		ru: "Главная",
		en: "Home",
		ge: "მთავარი",
	},
	"footer-about": {
		ru: "О Нас",
		en: "About",
		ge: "ჩვენს შესახებ",
	},
	"footer-services": {
		ru: "Услуги",
		en: "Services",
		ge: "სერვისები",
	},
	"footer-contacts": {
		ru: "Контакты",
		en: "Contacts",
		ge: "კონტაქტები",
	},
	"footer-shipping": {
		ru: "Виды Перевозок",
		en: "Shipping",
		ge: "ტრანსპორტირება",
	},
	"footer-order": {
		ru: "Статус заявки",
		en: "Order status",
		ge: "შეკვეთის სტატუსი",
	},
	"footer-address": {
		ru: "Грузия г.Поти Гегидзе 7",
		en: "Georgia, Poti Gegidze 7",
		ge: "საქართველო, ფოთი გეგიძის 7",
	},
};
// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		case "/pages/about.html":
			currentTexts = aboutTexts;
			break;
		case "/pages/services.html":
			currentTexts = servicesTexts;
			break;	
		case "/pages/contact.html":
		   currentTexts = contactTexts;
			break;
		case "/pages/order.html":
			currentTexts = orderTexts;
			break;	
		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
			break;
		case "ge":
			document
				.querySelector('[data-btn="ge"]')
				.classList.add("header__btn_active");
			break;

		default:
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

//console.log("navigator.language", checkBrowserLang());

