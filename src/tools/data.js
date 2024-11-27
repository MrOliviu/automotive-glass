export const WebsiteInformation = {
	phone: "+7 (911) 240-88-55",
	tel: "tel:+7(911)240-88-55",
	whatsapp: "https://api.whatsapp.com/send?phone=79112408855",
	vkLink: "",
	instagramLink: "",
	telegramLink: "https://t.me/+79112408855",
	youtubeLink: "",
	yandexMapLink: "https://yandex.com/maps/2/saint-petersburg/search/%D0%A3%D0%BB%D0%B8%D1%86%D0%B0%20%D0%91%D1%83%D0%B4%D0%B0%D0%BF%D0%B5%D1%88%D1%82%D1%81%D0%BA%D0%B0%D1%8F%2076/?ll=30.394015%2C59.843928&sctx=ZAAAAAgAEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJyVht%2Fl%2FfWkARBg39E1xuQ0AiBgABAgMEBSgKOABAkE5IAGoCcnWdAc3MzD2gAQCoAQC9ARryf8XCAQwAAAAAAAAAAAAAAACCAibQo9C70LjRhtCwINCR0YPQtNCw0L%2FQtdGI0YLRgdC60LDRjyA3NooCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=33.230231%2C57.906156&sspn=33.545836%2C9.816086&z=17.57",
	address: "Улица Будапештская 76",
	workTime: "Ежедневно 10:00 - 21:00",
	cars: GetCars(),
	prices: GetPrices()
};

function GetPrices() {
	return {
		standard: "2 500",
		business: "5 000",
		premium: "8 000",
		changeWindshield: "2 200",
		changeBackWindow: "1 500",
		changeSideWindow: "1 000",
		fixChip: "400",
		fixCrack: "30",
		stopCrack: "400",
		polishHeadlights: "500",
		polishWindow: "1 500",
		polishBody: "7 000",
		foilHeadlights: "4 000",
		tintWindshield: "2 000",
		tintFrontSides: "2 000",
		tintBackSidesAndBack: "4 500",
		TintNoWindshield: "6 500",
	}
}

export function GetCars() {
	const details = [
		{
			"car": "ACURA",
			"models": [
				{
					"model": "MDX",
					"modelList": [
						"MDX 01-06",
						"MDX 06-14",
						"MDX 14-"
					]
				},
				{
					"model": "RDX",
					"modelList": [
						"RDX 06-12",
						"RDX 12-18"
					]
				},
				{
					"model": "RL",
					"modelList": [
						"RL 96-04",
						"RL 04-05"
					]
				},
				{
					"model": "TSX",
					"modelList": [
						"TSX 04-08 Sedan"
					]
				},
				{
					"model": "ZDX",
					"modelList": [
						"ZDX 10-13"
					]
				}
			]
		},
		{
			"car": "ALFA ROMEO",
			"models": [
				{
					"model": "145",
					"modelList": [
						"145 94-00"
					]
				},
				{
					"model": "146",
					"modelList": [
						"146 95-00"
					]
				},
				{
					"model": "147",
					"modelList": [
						"147 00-10"
					]
				},
				{
					"model": "155",
					"modelList": [
						"155 92-97"
					]
				},
				{
					"model": "156",
					"modelList": [
						"156 97-06"
					]
				},
				{
					"model": "159",
					"modelList": [
						"159 05-12"
					]
				},
				{
					"model": "164",
					"modelList": [
						"164 88-98"
					]
				},
				{
					"model": "166",
					"modelList": [
						"166 98-07"
					]
				},
				{
					"model": "33",
					"modelList": [
						"33 83-89",
						"33 90-95"
					]
				},
				{
					"model": "75",
					"modelList": [
						"75 86-93"
					]
				},
				{
					"model": "BRERA",
					"modelList": [
						"BRERA 06-10"
					]
				},
				{
					"model": "GIULIETTA",
					"modelList": [
						"GIULIETTA 10-"
					]
				},
				{
					"model": "GT",
					"modelList": [
						"GT 04-10"
					]
				},
				{
					"model": "MITO",
					"modelList": [
						"MITO 08-12"
					]
				},
				{
					"model": "STELVIO",
					"modelList": [
						"STELVIO 17-"
					]
				}
			]
		},
		{
			"car": "ASTON MARTIN",
			"models": [
				{
					"model": "DB11",
					"modelList": [
						"DB11 16- coupe",
						"DB11 18- cabrio"
					]
				},
				{
					"model": "DB7",
					"modelList": [
						"DB7 94-04"
					]
				},
				{
					"model": "DB9",
					"modelList": [
						"DB9 04-16"
					]
				},
				{
					"model": "DBS",
					"modelList": [
						"DBS 07-12",
						"DBS 12-"
					]
				},
				{
					"model": "RAPID",
					"modelList": [
						"RAPID 10-"
					]
				},
				{
					"model": "VANQUISH",
					"modelList": [
						"VANQUISH 01-07",
						"VANQUISH 12-18"
					]
				},
				{
					"model": "VANTAGE",
					"modelList": [
						"VANTAGE 05-17 coupe",
						"VANTAGE 07-17 cabrio",
						"VANTAGE 18-"
					]
				}
			]
		},
		{
			"car": "AUDI",
			"models": [
				{
					"model": "100",
					"modelList": [
						"100 76-82 c2",
						"100 83-91 c3",
						"100 91-97 c4"
					]
				},
				{
					"model": "200",
					"modelList": [
						"200 83-91 c3"
					]
				},
				{
					"model": "80",
					"modelList": [
						"80 79-86",
						"80 80-88 coupe",
						"80 86-95",
						"80 89-95 coupe",
						"80 91-00 cabrio"
					]
				},
				{
					"model": "90",
					"modelList": [
						"90 86-95"
					]
				},
				{
					"model": "A1",
					"modelList": [
						"A1 09-19"
					]
				},
				{
					"model": "A2",
					"modelList": [
						"A2 00-05"
					]
				},
				{
					"model": "A3",
					"modelList": [
						"A3 96-03",
						"A3 03-12",
						"A3 08-12 cabrio",
						"A3 12-20 3d/5d",
						"A3 12-20 4d",
						"A3 13-16 cabrio",
						"A3 20- (8Y) "
					]
				},
				{
					"model": "A4",
					"modelList": [
						"A4 94-01",
						"A4 01-08",
						"A4 02-09 cabrio",
						"A4 08-16",
						"A4 16-"
					]
				},
				{
					"model": "A5",
					"modelList": [
						"A5 07-16",
						"A5 09-16 cabrio",
						"A5 16-",
						"A5 16- cabrio"
					]
				},
				{
					"model": "A6",
					"modelList": [
						"A6 91-97",
						"A6 97-04 est",
						"A6 97-04 sedan",
						"A6 99-04 двигатель V8",
						"A6 04-11",
						"A6 11-18",
						"A6 18-"
					]
				},
				{
					"model": "A6 ALLROAD",
					"modelList": [
						"A6 97-04 allroad",
						"A6 04-11 allroad"
					]
				},
				{
					"model": "A7",
					"modelList": [
						"A7 10-17",
						"A7 18-"
					]
				},
				{
					"model": "A8",
					"modelList": [
						"A8 94-99",
						"A8 99-02",
						"A8 02-10",
						"A8 10-17",
						"A8 17-"
					]
				},
				{
					"model": "E-TRON",
					"modelList": [
						"E-TRON 18-"
					]
				},
				{
					"model": "Q2",
					"modelList": [
						"Q2 16-"
					]
				},
				{
					"model": "Q3",
					"modelList": [
						"Q3 11-18",
						"Q3 18-"
					]
				},
				{
					"model": "Q3 Sportback",
					"modelList": [
						"Q3 19 Sportback"
					]
				},
				{
					"model": "Q4",
					"modelList": [
						"Q4 E-Tron 21- "
					]
				},
				{
					"model": "Q5",
					"modelList": [
						"Q5 08-17",
						"Q5 17-"
					]
				},
				{
					"model": "Q7",
					"modelList": [
						"Q7 06-15",
						"Q7 15-"
					]
				},
				{
					"model": "Q8",
					"modelList": [
						"Q8 18-"
					]
				},
				{
					"model": "R8",
					"modelList": [
						"R8 07-15",
						"R8 15-"
					]
				},
				{
					"model": "RS4",
					"modelList": [
						"RS4 99-01",
						"RS4 06-08",
						"RS4 12-15",
						"RS4 18-"
					]
				},
				{
					"model": "RS5",
					"modelList": [
						"RS5 07-16",
						"RS5 09-16 cabrio",
						"RS5 16-",
						"RS5 16- cabrio"
					]
				},
				{
					"model": "RS6",
					"modelList": [
						"RS6 99-04",
						"RS6 04-11",
						"RS6 13-18"
					]
				},
				{
					"model": "RS7",
					"modelList": [
						"RS7 10-17",
						"RS7 18-"
					]
				},
				{
					"model": "S3",
					"modelList": [
						"S3 96-03",
						"S3 03-12",
						"S3 12-"
					]
				},
				{
					"model": "S4",
					"modelList": [
						"S4 94-01",
						"S4 01-08",
						"S4 02-09 cabrio",
						"S4 09-16",
						"S4 17-"
					]
				},
				{
					"model": "S5",
					"modelList": [
						"S5 07-16",
						"S5 09-16 cabrio",
						"S5 16-",
						"S5 16- cabrio"
					]
				},
				{
					"model": "S6",
					"modelList": [
						"S6 99-04 4d двигатель V8",
						"S6 99-04 est",
						"S6 04-11",
						"S6 11-18"
					]
				},
				{
					"model": "S7",
					"modelList": [
						"S7 12-17"
					]
				},
				{
					"model": "S8",
					"modelList": [
						"S8 94-99",
						"S8 99-02",
						"S8 02-10"
					]
				},
				{
					"model": "TT",
					"modelList": [
						"TT 98-06",
						"TT 06-15 coupe",
						"TT 07-15 cabrio/roadster",
						"TT 15- cabrio/roadster",
						"TT 15- coupe"
					]
				}
			]
		},
		{
			"car": "AURUS",
			"models": [
				{
					"model": "SENAT",
					"modelList": [
						"SENAT 18-"
					]
				}
			]
		},
		{
			"car": "AUSTIN",
			"models": [
				{
					"model": "MAESTRO",
					"modelList": [
						"MAESTRO 82-94"
					]
				},
				{
					"model": "MINI METRO",
					"modelList": [
						"MINI METRO 80-90"
					]
				},
				{
					"model": "MONTEGO",
					"modelList": [
						"MONTEGO 83-94"
					]
				}
			]
		},
		{
			"car": "BAW",
			"models": [
				{
					"model": "FENIX",
					"modelList": [
						"FENIX 1044 06-11",
						"FENIX 1065 06-11",
						"FENIX 33460 06-11",
						"FENIX 33462 11-"
					]
				},
				{
					"model": "STREET 2245",
					"modelList": [
						"STREET 2245 10-"
					]
				},
				{
					"model": "TONIC 33463",
					"modelList": [
						"TONIC 33463 10-"
					]
				}
			]
		},
		{
			"car": "BENTLEY",
			"models": [
				{
					"model": "BENTAYGA",
					"modelList": [
						"BENTAYGA 15-"
					]
				},
				{
					"model": "CONTINENTAL",
					"modelList": [
						"CONTINENTAL 05-13"
					]
				},
				{
					"model": "CONTINENTAL GT",
					"modelList": [
						"CONTINENTAL GT 03-11 coupe",
						"CONTINENTAL GT 06-11 cabrio",
						"CONTINENTAL GT 11-18",
						"CONTINENTAL GT 18-"
					]
				},
				{
					"model": "FLYING SPUR",
					"modelList": [
						"FLYING SPUR 13-19",
						"FLYING SPUR 19-"
					]
				},
				{
					"model": "MULSANNE",
					"modelList": [
						"MULSANNE II 10-20"
					]
				}
			]
		},
		{
			"car": "BMW",
			"models": [
				{
					"model": "1 series",
					"modelList": [
						"E81 / E82 / E87 / E88 04-11",
						"F20 / F21 11-",
						"F52 17-",
						"F40 19-"
					]
				},
				{
					"model": "2 series",
					"modelList": [
						"F22 / F23 14-21",
						"F45 / F46 14-21",
						"F44 19- (GranCoupe)",
						"G42 21- (Coupe)",
						"U06 21- (Active Touer)"
					]
				},
				{
					"model": "3 series",
					"modelList": [
						"E21 75-83",
						"E30 83-91",
						"E30 M3 87-93",
						"E36 90-01",
						"E36 91-99 coupe/cabrio",
						"E46 98-05",
						"E46 99-06 coupe/cabrio",
						"E46 01-06 3d compact",
						"E90 / E91 05-12",
						"E92 06-13",
						"E93 06-13",
						"F30 / F31 12-",
						"F34 GT 13-",
						"G20 18-"
					]
				},
				{
					"model": "4 series",
					"modelList": [
						"F32 / F36 13-",
						"F33 14- cabrio",
						"G22 20- CPE/CAB",
						"G26 21- GranCoupe"
					]
				},
				{
					"model": "5 series",
					"modelList": [
						"E12 / E28 72-88",
						"E34 88-96",
						"E39 95-03",
						"E60 / E61 03-10",
						"F07 GT 09-17",
						"F10 / F11 10-17",
						"G30 / G31 17-"
					]
				},
				{
					"model": "6 series",
					"modelList": [
						"E24 76-89",
						"E63 / E64 04-11",
						"F06 / F12 / F13 11-18",
						"G32 GT 17-"
					]
				},
				{
					"model": "7 series",
					"modelList": [
						"E23 77-86",
						"E32 86-94",
						"E38 94-01",
						"E65 / E66 01-08",
						"F01 08-15",
						"G11 / G12 15-",
						"G70 22-"
					]
				},
				{
					"model": "8 series",
					"modelList": [
						"E31 89-99",
						"G14 18- cabrio",
						"G15 18- coupe"
					]
				},
				{
					"model": "E12",
					"modelList": [
						"E12 72-81 (5 series)"
					]
				},
				{
					"model": "E21",
					"modelList": [
						"E21 75-83 (3 series)"
					]
				},
				{
					"model": "E23",
					"modelList": [
						"E23 77-86 (7 series)"
					]
				},
				{
					"model": "E24",
					"modelList": [
						"E24 76-89 (6 series)"
					]
				},
				{
					"model": "E28",
					"modelList": [
						"E28 81-88 (5 series)"
					]
				},
				{
					"model": "E30",
					"modelList": [
						"E30 83-91 (3 series)",
						"E30 M3 87-93 (3 series)"
					]
				},
				{
					"model": "E31",
					"modelList": [
						"E31 89-99 (8 series)"
					]
				},
				{
					"model": "E32",
					"modelList": [
						"E32 86-94 (7 series)"
					]
				},
				{
					"model": "E34",
					"modelList": [
						"E34 88-96 (5 series)"
					]
				},
				{
					"model": "E36",
					"modelList": [
						"E36 90-01 (3 series)",
						"E36 91-99 (3 series) coupe/cabrio"
					]
				},
				{
					"model": "E38",
					"modelList": [
						"E38 94-01 (7 series)"
					]
				},
				{
					"model": "E39",
					"modelList": [
						"E39 95-03 (5 series)"
					]
				},
				{
					"model": "E46",
					"modelList": [
						"E46 98-05 (3 series)",
						"E46 99-06 (3 series) coupe/cabrio",
						"E46 01-06 (3 series) 3d compact"
					]
				},
				{
					"model": "E53",
					"modelList": [
						"E53 00-06 (X5)"
					]
				},
				{
					"model": "E60",
					"modelList": [
						"E60 03-10 (5 series)"
					]
				},
				{
					"model": "E61",
					"modelList": [
						"E61 03-10 (5 series)"
					]
				},
				{
					"model": "E63",
					"modelList": [
						"E63 04-11 (6 series)"
					]
				},
				{
					"model": "E64",
					"modelList": [
						"E64 04-11 (6 series)"
					]
				},
				{
					"model": "E65",
					"modelList": [
						"E65 01-08 (7 series)"
					]
				},
				{
					"model": "E66",
					"modelList": [
						"E66 01-08 (7 series)"
					]
				},
				{
					"model": "E67",
					"modelList": [
						"E67 01-08 (7 series)"
					]
				},
				{
					"model": "E68",
					"modelList": [
						"E68 01-08 (7 series)"
					]
				},
				{
					"model": "E70",
					"modelList": [
						"E70 06-13 (X5)"
					]
				},
				{
					"model": "E71",
					"modelList": [
						"E71 08-14 (X6)"
					]
				},
				{
					"model": "E72",
					"modelList": [
						"E72 08-14 (X6)"
					]
				},
				{
					"model": "E81",
					"modelList": [
						"E81 07-12 (1 series)"
					]
				},
				{
					"model": "E82",
					"modelList": [
						"E82 07-13 (1 series)"
					]
				},
				{
					"model": "E83",
					"modelList": [
						"E83 03-10 (X3)"
					]
				},
				{
					"model": "E84",
					"modelList": [
						"E84 10-15 (X1)"
					]
				},
				{
					"model": "E85",
					"modelList": [
						"E85 03-09 (Z4)"
					]
				},
				{
					"model": "E86",
					"modelList": [
						"E86 06-09 (Z4)"
					]
				},
				{
					"model": "E87",
					"modelList": [
						"E87 04-11 (1 series)"
					]
				},
				{
					"model": "E88",
					"modelList": [
						"E88 07-13 (1 series)"
					]
				},
				{
					"model": "E89",
					"modelList": [
						"E89 09-16 (Z4)"
					]
				},
				{
					"model": "E90",
					"modelList": [
						"E90 05-12 (3 series)"
					]
				},
				{
					"model": "E91",
					"modelList": [
						"E91 05-12 (3 series)"
					]
				},
				{
					"model": "E92",
					"modelList": [
						"E92 06-13 (3 series)"
					]
				},
				{
					"model": "E93",
					"modelList": [
						"E93 06-13 (3 series)"
					]
				},
				{
					"model": "U06",
					"modelList": [
						"U06 21- (2 series)"
					]
				},
				{
					"model": "U11",
					"modelList": [
						"U11 22- (X1)"
					]
				},
				{
					"model": "F01",
					"modelList": [
						"F01 08-15 (7 series)"
					]
				},
				{
					"model": "F02",
					"modelList": [
						"F02 08-15 (7 series)"
					]
				},
				{
					"model": "F03",
					"modelList": [
						"F03 08-15 (7 series)"
					]
				},
				{
					"model": "F04",
					"modelList": [
						"F04 08-15 (7 series)"
					]
				},
				{
					"model": "F06",
					"modelList": [
						"F06 11-18 (6 series)"
					]
				},
				{
					"model": "F07",
					"modelList": [
						"F07 GT 09-17 (5 series)"
					]
				},
				{
					"model": "F10",
					"modelList": [
						"F10 10-17 (5 series)"
					]
				},
				{
					"model": "F11",
					"modelList": [
						"F11 10-17 (5 series)"
					]
				},
				{
					"model": "F12",
					"modelList": [
						"F12 11-18 (6 series)"
					]
				},
				{
					"model": "F13",
					"modelList": [
						"F13 11-18 (6 series)"
					]
				},
				{
					"model": "F15",
					"modelList": [
						"F15 14-18 (X5)"
					]
				},
				{
					"model": "F16",
					"modelList": [
						"F16 14-19 (X6)"
					]
				},
				{
					"model": "F20",
					"modelList": [
						"F20 11- (1 series)"
					]
				},
				{
					"model": "F21",
					"modelList": [
						"F21 11- (1 series)"
					]
				},
				{
					"model": "F22",
					"modelList": [
						"F22 14- (2 series)"
					]
				},
				{
					"model": "F23",
					"modelList": [
						"F23 14- (2 series)"
					]
				},
				{
					"model": "F25",
					"modelList": [
						"F25 10-17 (X3)"
					]
				},
				{
					"model": "F26",
					"modelList": [
						"F26 15- (X4)"
					]
				},
				{
					"model": "F30",
					"modelList": [
						"F30 12- (3 series)"
					]
				},
				{
					"model": "F31",
					"modelList": [
						"F31 12- (3 series)"
					]
				},
				{
					"model": "F32",
					"modelList": [
						"F32 13- (4 series)"
					]
				},
				{
					"model": "F33",
					"modelList": [
						"F33 14- (4 series)"
					]
				},
				{
					"model": "F34",
					"modelList": [
						"F34 GT 13- (3 series)"
					]
				},
				{
					"model": "F36",
					"modelList": [
						"F36 13- (4 series)"
					]
				},
				{
					"model": "F39",
					"modelList": [
						"F39 18- (X2)"
					]
				},
				{
					"model": "F40",
					"modelList": [
						"F40 19-"
					]
				},
				{
					"model": "F44",
					"modelList": [
						"F44 19- (2 series)"
					]
				},
				{
					"model": "F45",
					"modelList": [
						"F45 14- (2 series)"
					]
				},
				{
					"model": "F46",
					"modelList": [
						"F46 14- (2 series)"
					]
				},
				{
					"model": "F48",
					"modelList": [
						"F48 15- (X1)"
					]
				},
				{
					"model": "F52",
					"modelList": [
						"F52 17- (1 series)"
					]
				},
				{
					"model": "F54",
					"modelList": [
						"F54 15- (Mini Clubman)"
					]
				},
				{
					"model": "F56",
					"modelList": [
						"F56 14- (Mini)"
					]
				},
				{
					"model": "F60",
					"modelList": [
						"F60 17- (Countryman)"
					]
				},
				{
					"model": "F90",
					"modelList": [
						"F90 17- (M5)"
					]
				},
				{
					"model": "G01",
					"modelList": [
						"G01 18- (X3)"
					]
				},
				{
					"model": "G02",
					"modelList": [
						"G02 18- (X4)"
					]
				},
				{
					"model": "G05",
					"modelList": [
						"G05 18- (X5)"
					]
				},
				{
					"model": "G06",
					"modelList": [
						"G06 19- (X6)"
					]
				},
				{
					"model": "G07",
					"modelList": [
						"G07 18- (X7)"
					]
				},
				{
					"model": "G11",
					"modelList": [
						"G11 15- (7 series)"
					]
				},
				{
					"model": "G12",
					"modelList": [
						"G12 15- (7 series)"
					]
				},
				{
					"model": "G14",
					"modelList": [
						"G14 18- (8 series)"
					]
				},
				{
					"model": "G15",
					"modelList": [
						"G15 18- (8 series)"
					]
				},
				{
					"model": "G20",
					"modelList": [
						"G20 18- (3 series)"
					]
				},
				{
					"model": "G22",
					"modelList": [
						"G22 20- (4 series) (coupe/cab)"
					]
				},
				{
					"model": "G26",
					"modelList": [
						"G26 21- (4 series) (GranCoupe)"
					]
				},
				{
					"model": "G29",
					"modelList": [
						"G29 18- (Z4)"
					]
				},
				{
					"model": "G30",
					"modelList": [
						"G30 17- (5 series)"
					]
				},
				{
					"model": "G31",
					"modelList": [
						"G31 17- (5 series)"
					]
				},
				{
					"model": "G32",
					"modelList": [
						"G32 GT 17- (6 series)"
					]
				},
				{
					"model": "G42",
					"modelList": [
						"G42 21- (2 series)"
					]
				},
				{
					"model": "G70",
					"modelList": [
						"G70 22- (7 series)"
					]
				},
				{
					"model": "I3",
					"modelList": [
						"I3 13-"
					]
				},
				{
					"model": "I8",
					"modelList": [
						"I8 14-"
					]
				},
				{
					"model": "X1",
					"modelList": [
						"X1 10-15 (E84)",
						"X1 15- (F48)",
						"X1 22- (U11)"
					]
				},
				{
					"model": "X2",
					"modelList": [
						"X2 18- (F39)"
					]
				},
				{
					"model": "X3",
					"modelList": [
						"X3 03-10 (E83)",
						"X3 10-17 (F25)",
						"X3 18- (G01)"
					]
				},
				{
					"model": "X4",
					"modelList": [
						"X4 15-18 (F26)",
						"X4 18- (G02)"
					]
				},
				{
					"model": "X5",
					"modelList": [
						"X5 00-06 (E53)",
						"X5 06-13 (E70)",
						"X5 14-18 (F15)",
						"X5 18- (G05)"
					]
				},
				{
					"model": "X6",
					"modelList": [
						"X6 08-14 (E71/E72)",
						"X6 14-19 (F16)",
						"X6 19- (G06)"
					]
				},
				{
					"model": "X7",
					"modelList": [
						"X7 18- (G07)"
					]
				},
				{
					"model": "iX",
					"modelList": [
						"iX 21- SUV"
					]
				},
				{
					"model": "Z3",
					"modelList": [
						"Z3 96-02 (E36 / E37)",
						"Z3 96-02 (E36 / E38)"
					]
				},
				{
					"model": "Z4",
					"modelList": [
						"Z4 03-09 (E85) cabrio",
						"Z4 06-09 (E86) coupe",
						"Z4 09-16 (E89)",
						"Z4 18- (G29)"
					]
				}
			]
		},
		{
			"car": "BRILLIANCE",
			"models": [
				{
					"model": "M2",
					"modelList": [
						"M2 07-10"
					]
				}
			]
		},
		{
			"car": "BUICK",
			"models": [
				{
					"model": "ENCORE",
					"modelList": [
						"ENCORE 12-"
					]
				},
				{
					"model": "LE SABRE",
					"modelList": [
						"LE SABRE 77-85",
						"LE SABRE 86-91",
						"LE SABRE 92-99",
						"LE SABRE 00-05"
					]
				},
				{
					"model": "REGAL",
					"modelList": [
						"REGAL 09-13"
					]
				},
				{
					"model": "VERANO",
					"modelList": [
						"VERANO I 11-16",
						"VERANO II 15-"
					]
				}
			]
		},
		{
			"car": "BYD",
			"models": [
				{
					"model": "F3",
					"modelList": [
						"F3 05-"
					]
				},
				{
					"model": "FLYER",
					"modelList": [
						"FLYER 05-08"
					]
				}
			]
		},
		{
			"car": "CADILLAC",
			"models": [
				{
					"model": "BLS",
					"modelList": [
						"BLS 05-12"
					]
				},
				{
					"model": "CT6",
					"modelList": [
						"CT6 16-"
					]
				},
				{
					"model": "CTS",
					"modelList": [
						"CTS 02-07",
						"CTS 07-14",
						"CTS 14-19"
					]
				},
				{
					"model": "DEVILLE",
					"modelList": [
						"DEVILLE 94-99"
					]
				},
				{
					"model": "ELDORADO",
					"modelList": [
						"ELDORADO 92-02",
						"ELDORADO 96- COUPE"
					]
				},
				{
					"model": "ESCALADE",
					"modelList": [
						"ESCALADE 99-00",
						"ESCALADE 02-06",
						"ESCALADE 07-14",
						"ESCALADE 14-20",
						"ESCALADE 20-"
					]
				},
				{
					"model": "SEVILLE",
					"modelList": [
						"SEVILLE 92-97",
						"SEVILLE 98-03"
					]
				},
				{
					"model": "SRX",
					"modelList": [
						"SRX 05-10",
						"SRX 10-16"
					]
				},
				{
					"model": "STS",
					"modelList": [
						"STS 05-11"
					]
				},
				{
					"model": "XLR",
					"modelList": [
						"XLR 04-09"
					]
				},
				{
					"model": "XT4",
					"modelList": [
						"XT4 18-"
					]
				},
				{
					"model": "XT5",
					"modelList": [
						"XT5 16-"
					]
				},
				{
					"model": "XT6",
					"modelList": [
						"XT6 19-"
					]
				},
				{
					"model": "XTS",
					"modelList": [
						"XTS 12-"
					]
				}
			]
		},
		{
			"car": "CATERPILLAR",
			"models": [
				{
					"model": "TLB",
					"modelList": [
						"428D/432D/438D/442D 1997-",
						"428E/432E/434E/444E 2006-",
						"428F2/432F2 2017-"
					]
				},
				{
					"model": "серия M300D",
					"modelList": [
						"M313D/M316D/M322D/M325D/M330D"
					]
				}
			]
		},
		{
			"car": "CHANGAN",
			"models": [
				{
					"model": "CS75",
					"modelList": [
						"CS75 15-",
						"CS75 PLUS 20-"
					]
				},
				{
					"model": "CS35",
					"modelList": [
						"CS35 12-17",
						"CS35 17-",
						"CS35 PLUS 18-"
					]
				}
			]
		},
		{
			"car": "CHERY",
			"models": [
				{
					"model": "AMULET (A15)",
					"modelList": [
						"AMULET 03-07"
					]
				},
				{
					"model": "B13",
					"modelList": [
						"B13 06-08"
					]
				},
				{
					"model": "B14",
					"modelList": [
						"B14 06-14"
					]
				},
				{
					"model": "BONUS (A13)",
					"modelList": [
						"BONUS 09-14"
					]
				},
				{
					"model": "BONUS 3 (A19)",
					"modelList": [
						"BONUS 3 14-"
					]
				},
				{
					"model": "CROSSEASTAR (B14) V5",
					"modelList": [
						"CROSSEASTAR 06-14"
					]
				},
				{
					"model": "EASTAR (B11)",
					"modelList": [
						"EASTAR 03-11"
					]
				},
				{
					"model": "EXEED",
					"modelList": [
						"EXEED TXL 21-"
					]
				},
				{
					"model": "FORA (A21) A5",
					"modelList": [
						"FORA 06-14"
					]
				},
				{
					"model": "INDIS (S18D)",
					"modelList": [
						"INDIS 11-"
					]
				},
				{
					"model": "KIMO (A1 / S12)",
					"modelList": [
						"KIMO 07-13"
					]
				},
				{
					"model": "M11 (A3)",
					"modelList": [
						"M11 08-14"
					]
				},
				{
					"model": "ORIENTAL SON (B11)",
					"modelList": [
						"ORIENTAL SON 03-11"
					]
				},
				{
					"model": "QQ3 (S11) SWEET",
					"modelList": [
						"QQ3 SWEET 03-13"
					]
				},
				{
					"model": "QQ6 (S21)",
					"modelList": [
						"QQ6 06-10"
					]
				},
				{
					"model": "TIGGO",
					"modelList": [
						"TIGGO 05-13 T11",
						"TIGGO 13-16 T11 FL",
						"TIGGO 2 17-",
						"TIGGO 3 17-",
						"TIGGO 4 17- н.в.",
						"TIGGO 5 13-",
						"TIGGO 7 16-20",
						"TIGGO 7 Pro 20- ",
						"TIGGO 8 18- "
					]
				},
				{
					"model": "VERY (A13)",
					"modelList": [
						"VERY 09-14"
					]
				}
			]
		},
		{
			"car": "CHEVROLET",
			"models": [
				{
					"model": "ASTRO",
					"modelList": [
						"ASTRO 85-05"
					]
				},
				{
					"model": "AVALANCHE",
					"modelList": [
						"AVALANCHE 00-06",
						"AVALANCHE 07-13"
					]
				},
				{
					"model": "AVEO",
					"modelList": [
						"AVEO 02-06 4d",
						"AVEO 02-08 5d",
						"AVEO 06-11 4d",
						"AVEO 08-11 5d",
						"AVEO 11-"
					]
				},
				{
					"model": "BOLT",
					"modelList": [
						"BOLT 16-"
					]
				},
				{
					"model": "BLAZER",
					"modelList": [
						"BLAZER 73-91 (170х61)",
						"BLAZER 83-94 (147х68) s/t10",
						"BLAZER 95-05"
					]
				},
				{
					"model": "CAMARO",
					"modelList": [
						"CAMARO 82-92 III",
						"CAMARO 92-02 IV",
						"CAMARO 09-15 V",
						"CAMARO 16- VI"
					]
				},
				{
					"model": "CAPRICE",
					"modelList": [
						"CAPRICE 77-90",
						"CAPRICE 90-96",
						"CAPRICE 99-06",
						"CAPRICE 06-17"
					]
				},
				{
					"model": "CAPTIVA",
					"modelList": [
						"CAPTIVA 07-15"
					]
				},
				{
					"model": "CHEVY VAN",
					"modelList": [
						"CHEVY VAN 81-95",
						"CHEVY VAN 95-14"
					]
				},
				{
					"model": "COBALT",
					"modelList": [
						"COBALT 06-10"
					]
				},
				{
					"model": "CORVETTE",
					"modelList": [
						"CORVETTE 86-96 (168x93)",
						"CORVETTE 97-04 (163x91)",
						"CORVETTE 97-04 (178x64)",
						"CORVETTE 05-13",
						"CORVETTE 14-"
					]
				},
				{
					"model": "CRUZE",
					"modelList": [
						"CRUZE 09-15",
						"CRUZE 15-"
					]
				},
				{
					"model": "EQUINOX",
					"modelList": [
						"EQUINOX I 03-09",
						"EQUINOX II 09-16",
						"EQUINOX III 17- "
					]
				},
				{
					"model": "EPICA",
					"modelList": [
						"EPICA 06-12"
					]
				},
				{
					"model": "EVANDA",
					"modelList": [
						"EVANDA 02-06"
					]
				},
				{
					"model": "EXPRESS",
					"modelList": [
						"EXPRESS 95-14",
						"EXPRESS 19-"
					]
				},
				{
					"model": "HHR",
					"modelList": [
						"HHR 05-11"
					]
				},
				{
					"model": "IMPALA",
					"modelList": [
						"IMPALA 99-06"
					]
				},
				{
					"model": "LACETTI",
					"modelList": [
						"LACETTI 03-13"
					]
				},
				{
					"model": "LANOS",
					"modelList": [
						"LANOS 97-09"
					]
				},
				{
					"model": "LUMINA",
					"modelList": [
						"LUMINA 89-94",
						"LUMINA 90-94 coupe",
						"LUMINA 90-96 minivan",
						"LUMINA 95-01"
					]
				},
				{
					"model": "MALIBU",
					"modelList": [
						"MALIBU 97-05 (V)",
						"MALIBU 04-08 (VI)",
						"MALIBU 08-12 (VII)",
						"MALIBU 12-16 (VIII)",
						"MALIBU 16- (IX)"
					]
				},
				{
					"model": "MONTE CARLO",
					"modelList": [
						"MONTE CARLO 99-07"
					]
				},
				{
					"model": "NIVA",
					"modelList": [
						"NIVA 02-"
					]
				},
				{
					"model": "ORLANDO",
					"modelList": [
						"ORLANDO 11-18"
					]
				},
				{
					"model": "REZZO",
					"modelList": [
						"REZZO 01-08"
					]
				},
				{
					"model": "SILVERADO",
					"modelList": [
						"SILVERADO 01-06",
						"SILVERADO 07-13",
						"SILVERADO 14-"
					]
				},
				{
					"model": "SPARK",
					"modelList": [
						"SPARK 05-10",
						"SPARK 10-15"
					]
				},
				{
					"model": "SUBURBAN",
					"modelList": [
						"SUBURBAN 95-00",
						"SUBURBAN 00-07",
						"SUBURBAN 07-14",
						"SUBURBAN 15-"
					]
				},
				{
					"model": "TAHOE",
					"modelList": [
						"TAHOE 95-99",
						"TAHOE 00-07",
						"TAHOE 07-14",
						"TAHOE 15-20",
						"TAHOE 20-"
					]
				},
				{
					"model": "TRACKER",
					"modelList": [
						"TRACKER 99-07",
						"TRACKER 13-"
					]
				},
				{
					"model": "TRAILBLAZER",
					"modelList": [
						"TRAILBLAZER 02-09",
						"TRAILBLAZER 12-"
					]
				},
				{
					"model": "TRANS SPORT",
					"modelList": [
						"TRANS SPORT 97-05"
					]
				},
				{
					"model": "TRAVERS",
					"modelList": [
						"TRAVERS 08-17",
						"TRAVERS 17-"
					]
				},
				{
					"model": "UPLANDER",
					"modelList": [
						"UPLANDER 04-08"
					]
				},
				{
					"model": "VAN",
					"modelList": [
						"VAN 81-95",
						"VAN 95-14"
					]
				},
				{
					"model": "VENTURE",
					"modelList": [
						"VENTURE 97-01"
					]
				},
				{
					"model": "VIVA",
					"modelList": [
						"VIVA 04-08"
					]
				},
				{
					"model": "VOLT",
					"modelList": [
						"VOLT 10-15",
						"VOLT 16-19"
					]
				}
			]
		},
		{
			"car": "CHRYSLER",
			"models": [
				{
					"model": "300C",
					"modelList": [
						"300C 05-10",
						"300C 11-"
					]
				},
				{
					"model": "300M",
					"modelList": [
						"300M 99-04"
					]
				},
				{
					"model": "CIRRUS",
					"modelList": [
						"CIRRUS 95-00"
					]
				},
				{
					"model": "CONCORDE",
					"modelList": [
						"CONCORDE 93-97",
						"CONCORDE 98-04"
					]
				},
				{
					"model": "CROSSFIRE",
					"modelList": [
						"CROSSFIRE 03-07"
					]
				},
				{
					"model": "LEBARON",
					"modelList": [
						"LEBARON 85-89 hatcback (148x74)",
						"LEBARON 85-89 sedan (147x73)",
						"LEBARON 88-95 coupe",
						"LEBARON 90-94",
						"LEBARON 93-96 cabrio"
					]
				},
				{
					"model": "NEON",
					"modelList": [
						"NEON 95-99",
						"NEON 00-05"
					]
				},
				{
					"model": "PACIFICA",
					"modelList": [
						"PACIFICA 04-08",
						"PACIFICA 17-"
					]
				},
				{
					"model": "PICK UP",
					"modelList": [
						"PICK UP 95-99"
					]
				},
				{
					"model": "PT CRUISER",
					"modelList": [
						"PT CRUISER 00-10",
						"PT CRUISER 04-10 cabrio"
					]
				},
				{
					"model": "SEBRING",
					"modelList": [
						"SEBRING 95-00",
						"SEBRING 01-06",
						"SEBRING 01-06 coupe",
						"SEBRING 07-10"
					]
				},
				{
					"model": "TOWN & COUNTRY",
					"modelList": [
						"TOWN & COUNTRY 91-95",
						"TOWN & COUNTRY 95-07",
						"TOWN & COUNTRY 08-16"
					]
				},
				{
					"model": "VOYAGER",
					"modelList": [
						"VOYAGER 84-95",
						"VOYAGER 95-01",
						"VOYAGER 01-07",
						"VOYAGER 08-16"
					]
				}
			]
		},
		{
			"car": "CITROEN",
			"models": [
				{
					"model": "AX",
					"modelList": [
						"AX 86-97"
					]
				},
				{
					"model": "BERLINGO",
					"modelList": [
						"BERLINGO 96-08",
						"BERLINGO II 07- н.в",
						"BERLINGO III 18-"
					]
				},
				{
					"model": "BX",
					"modelList": [
						"BX 83-94"
					]
				},
				{
					"model": "C1",
					"modelList": [
						"C1 05-14",
						"C1 14-"
					]
				},
				{
					"model": "C15",
					"modelList": [
						"C15 87-05"
					]
				},
				{
					"model": "C2",
					"modelList": [
						"C2 03-09"
					]
				},
				{
					"model": "C25",
					"modelList": [
						"C25 81-93"
					]
				},
				{
					"model": "C3",
					"modelList": [
						"C3 02-09",
						"C3 09-16",
						"C3 16-"
					]
				},
				{
					"model": "C3 AIRCROSS",
					"modelList": [
						"C3 AIRCROSS 17-"
					]
				},
				{
					"model": "C3 PICASSO",
					"modelList": [
						"C3 PICASSO 09-17"
					]
				},
				{
					"model": "C3 PLURIEL",
					"modelList": [
						"C3 PLURIEL 03-10"
					]
				},
				{
					"model": "C35",
					"modelList": [
						"C35 74-86"
					]
				},
				{
					"model": "C4",
					"modelList": [
						"C4 04-10",
						"C4 10-18 hatchback",
						"C4 13-18 sedan европ сборка (115x144)",
						"C4 13-18 sedan росс сборка (112x144)"
					]
				},
				{
					"model": "C4 AIRCROSS",
					"modelList": [
						"C4 AIRCROSS 12-18"
					]
				},
				{
					"model": "C4 CACTUS",
					"modelList": [
						"C4 CACTUS 14-"
					]
				},
				{
					"model": "C4 GRAND PICASSO",
					"modelList": [
						"C4 GRAND PICASSO 06-13",
						"C4 GRAND PICASSO 13-"
					]
				},
				{
					"model": "C4 PICASSO",
					"modelList": [
						"C4 PICASSO 07-12",
						"C4 PICASSO 13-"
					]
				},
				{
					"model": "C5",
					"modelList": [
						"C5 00-08",
						"C5 08-17"
					]
				},
				{
					"model": "C5 AIRCROSS",
					"modelList": [
						"C5 AIRCROSS 17-"
					]
				},
				{
					"model": "C6",
					"modelList": [
						"C6 06-12"
					]
				},
				{
					"model": "C8",
					"modelList": [
						"C8 02-14"
					]
				},
				{
					"model": "C-CROSSER",
					"modelList": [
						"C-CROSSER 07-13"
					]
				},
				{
					"model": "C-ELYSEE",
					"modelList": [
						"C-ELYSEE 12-"
					]
				},
				{
					"model": "DS3",
					"modelList": [
						"DS3 10-16"
					]
				},
				{
					"model": "DS4",
					"modelList": [
						"DS4 11-18"
					]
				},
				{
					"model": "DS5",
					"modelList": [
						"DS5 12-15"
					]
				},
				{
					"model": "DS7",
					"modelList": [
						"DS7 17-"
					]
				},
				{
					"model": "EVASION",
					"modelList": [
						"EVASION 94-02"
					]
				},
				{
					"model": "JUMPER",
					"modelList": [
						"JUMPER 94-06",
						"JUMPER 06-"
					]
				},
				{
					"model": "JUMPY",
					"modelList": [
						"JUMPY 94-06",
						"JUMPY 06-16",
						"JUMPY 16-"
					]
				},
				{
					"model": "NEMO",
					"modelList": [
						"NEMO 07-17"
					]
				},
				{
					"model": "SAXO",
					"modelList": [
						"SAXO 96-04"
					]
				},
				{
					"model": "VISA",
					"modelList": [
						"VISA 78-89"
					]
				},
				{
					"model": "XANTIA",
					"modelList": [
						"XANTIA 95-01"
					]
				},
				{
					"model": "XM",
					"modelList": [
						"XM 89-00"
					]
				},
				{
					"model": "XSARA",
					"modelList": [
						"XSARA 97-04"
					]
				},
				{
					"model": "XSARA PICASSO",
					"modelList": [
						"XSARA PICASSO 99-11"
					]
				},
				{
					"model": "ZX",
					"modelList": [
						"ZX 91-97"
					]
				}
			]
		},
		{
			"car": "DACIA",
			"models": [
				{
					"model": "DUSTER",
					"modelList": [
						"DUSTER 09-",
						"DUSTER 2 18-"
					]
				},
				{
					"model": "LOGAN",
					"modelList": [
						"LOGAN 05-12",
						"LOGAN 12-"
					]
				},
				{
					"model": "SANDERO",
					"modelList": [
						"SANDERO 07-12",
						"SANDERO 12-"
					]
				}
			]
		},
		{
			"car": "DAEWOO",
			"models": [
				{
					"model": "CIELO",
					"modelList": [
						"CIELO 94-08"
					]
				},
				{
					"model": "DAMAS",
					"modelList": [
						"DAMAS 95-05"
					]
				},
				{
					"model": "ESPERO",
					"modelList": [
						"ESPERO 93-00"
					]
				},
				{
					"model": "KALOS",
					"modelList": [
						"KALOS 02-05"
					]
				},
				{
					"model": "LANOS",
					"modelList": [
						"LANOS 97-09"
					]
				},
				{
					"model": "LEGANZA",
					"modelList": [
						"LEGANZA 97-02"
					]
				},
				{
					"model": "MAGNUS",
					"modelList": [
						"MAGNUS 02-06"
					]
				},
				{
					"model": "MATIZ",
					"modelList": [
						"MATIZ 98-"
					]
				},
				{
					"model": "NEXIA",
					"modelList": [
						"NEXIA 94-16"
					]
				},
				{
					"model": "NUBIRA",
					"modelList": [
						"NUBIRA 97-03",
						"NUBIRA 03-07"
					]
				},
				{
					"model": "RACER",
					"modelList": [
						"RACER 84-94"
					]
				},
				{
					"model": "TACUMA",
					"modelList": [
						"TACUMA 01-08"
					]
				},
				{
					"model": "TICO",
					"modelList": [
						"TICO 96-01"
					]
				}
			]
		},
		{
			"car": "DAEWOO TRUCK",
			"models": [
				{
					"model": "NOVUS",
					"modelList": [
						"NOVUS 97-"
					]
				}
			]
		},
		{
			"car": "DAF",
			"models": [
				{
					"model": "400",
					"modelList": [
						"400 83-97",
						"400 97-06 CONVOY"
					]
				},
				{
					"model": "45/55",
					"modelList": [
						"45/55 84-01"
					]
				},
				{
					"model": "CF65/75/85",
					"modelList": [
						"CF65/75/85 92-"
					]
				},
				{
					"model": "F1200/1600/2200/2500/3300",
					"modelList": [
						"F1200/1600/2200/2500/3300 73-94"
					]
				},
				{
					"model": "F2800/3600",
					"modelList": [
						"F2800/3600 73-94"
					]
				},
				{
					"model": "F500/700/900/1100/1300/1500",
					"modelList": [
						"F500/700/900/1100/1300/1500 76-87"
					]
				},
				{
					"model": "F600/800/1000",
					"modelList": [
						"F600/800/1000 89-02 (в клей)",
						"F600/800/1000 89-02 (в резинку)"
					]
				},
				{
					"model": "F65/75/85",
					"modelList": [
						"F65/75/85 93-02 (в клей)"
					]
				},
				{
					"model": "F95",
					"modelList": [
						"F95 87-05 (в резинку)"
					]
				},
				{
					"model": "LF45/55",
					"modelList": [
						"LF45/55 01-"
					]
				},
				{
					"model": "XF105",
					"modelList": [
						"XF105 06-"
					]
				},
				{
					"model": "XF95",
					"modelList": [
						"XF95 98-05 (в резинку)"
					]
				}
			]
		},
		{
			"car": "DAIHATSU",
			"models": [
				{
					"model": "APPLAUSE",
					"modelList": [
						"APPLAUSE 89-00"
					]
				},
				{
					"model": "ATRAI",
					"modelList": [
						"ATRAI 86-93"
					]
				},
				{
					"model": "CHARADE",
					"modelList": [
						"CHARADE 83-87 (G11)",
						"CHARADE 87-93 (G100)",
						"CHARADE 93-99 (G200)",
						"CHARADE 98-02",
						"CHARADE 03-07",
						"CHARADE 07-11",
						"CHARADE 11-13"
					]
				},
				{
					"model": "CUORE",
					"modelList": [
						"CUORE 95-98",
						"CUORE 98-02",
						"CUORE 02-06",
						"CUORE 06-18"
					]
				},
				{
					"model": "FEROZA",
					"modelList": [
						"FEROZA 89-97"
					]
				},
				{
					"model": "GRAND MOVE",
					"modelList": [
						"GRAND MOVE 97-02"
					]
				},
				{
					"model": "HI-JET",
					"modelList": [
						"HI-JET 86-93"
					]
				},
				{
					"model": "MATERIA",
					"modelList": [
						"MATERIA 05-16"
					]
				},
				{
					"model": "MIRA",
					"modelList": [
						"MIRA 95-98 (L500)",
						"MIRA 98-02 (L700)",
						"MIRA 02-06 (L250/260)",
						"MIRA 06-18 (L275/285)"
					]
				},
				{
					"model": "MOVE",
					"modelList": [
						"MOVE 97-99",
						"MOVE 99-09"
					]
				},
				{
					"model": "ROCKY",
					"modelList": [
						"ROCKY 84-90",
						"ROCKY 90-97 coupe"
					]
				},
				{
					"model": "SIRION",
					"modelList": [
						"SIRION 98-05",
						"SIRION 05-13"
					]
				},
				{
					"model": "TERIOS",
					"modelList": [
						"TERIOS 97-05",
						"TERIOS 06-17",
						"TERIOS 17-"
					]
				},
				{
					"model": "TREVIS",
					"modelList": [
						"TREVIS 99-04",
						"TREVIS 04-09"
					]
				},
				{
					"model": "YRV",
					"modelList": [
						"YRV 00-06"
					]
				}
			]
		},
		{
			"car": "DATSUN",
			"models": [
				{
					"model": "mi-DO",
					"modelList": [
						"mi-DO 15-"
					]
				},
				{
					"model": "on-DO",
					"modelList": [
						"on-DO 14-"
					]
				}
			]
		},
		{
			"car": "DODGE",
			"models": [
				{
					"model": "AVENGER",
					"modelList": [
						"AVENGER 08-14"
					]
				},
				{
					"model": "CALIBER",
					"modelList": [
						"CALIBER 07-13"
					]
				},
				{
					"model": "CARAVAN",
					"modelList": [
						"CARAVAN 91-95",
						"CARAVAN 96-07",
						"CARAVAN 08-"
					]
				},
				{
					"model": "CHALLENGER",
					"modelList": [
						"CHALLENGER 08-"
					]
				},
				{
					"model": "DAKOTA",
					"modelList": [
						"DAKOTA 05-11"
					]
				},
				{
					"model": "DURANGO",
					"modelList": [
						"DURANGO 98-03",
						"DURANGO 04-09",
						"DURANGO 10-20"
					]
				},
				{
					"model": "INTREPID",
					"modelList": [
						"INTREPID 93-97",
						"INTREPID 98-04"
					]
				},
				{
					"model": "JOURNEY",
					"modelList": [
						"JOURNEY 08-"
					]
				},
				{
					"model": "NEON",
					"modelList": [
						"NEON 95-99",
						"NEON 00-05"
					]
				},
				{
					"model": "NITRO",
					"modelList": [
						"NITRO 07-11"
					]
				},
				{
					"model": "RAM",
					"modelList": [
						"RAM 81-93",
						"RAM 94-01 (178х83)",
						"RAM 94-02 (185х66)",
						"RAM 02-09",
						"RAM 08-18",
						"RAM 18-"
					]
				},
				{
					"model": "STEALTH",
					"modelList": [
						"STEALTH 91-96"
					]
				},
				{
					"model": "STRATUS",
					"modelList": [
						"STRATUS 95-00",
						"STRATUS 01-06",
						"STRATUS 01-06 coupe"
					]
				}
			]
		},
		{
			"car": "DONGFENG",
			"models": [
				{
					"model": "AX7",
					"modelList": [
						"AX7 15-19"
					]
				},
				{
					"model": "H30 CROSS",
					"modelList": [
						"H30 CROSS 13-"
					]
				},
				{
					"model": "S30",
					"modelList": [
						"S30 10-16"
					]
				}
			]
		},
		{
			"car": "DONGFENG TRUCK",
			"models": [
				{
					"model": "3251",
					"modelList": [
						"3251"
					]
				}
			]
		},
		{
			"car": "FAW",
			"models": [
				{
					"model": "1041",
					"modelList": [
						"1041 01-"
					]
				},
				{
					"model": "BESTURN B50",
					"modelList": [
						"BESTURN B50 08-11"
					]
				},
				{
					"model": "BESTURN X80",
					"modelList": [
						"BESTURN X80 14-19"
					]
				},
				{
					"model": "VITA",
					"modelList": [
						"VITA 07-10"
					]
				}
			]
		},
		{
			"car": "FERRARI",
			"models": [
				{
					"model": "CALIFORNIA",
					"modelList": [
						"CALIFORNIA 08-17"
					]
				},
				{
					"model": "F12",
					"modelList": [
						"BERLINETTA 12-17"
					]
				},
				{
					"model": "599",
					"modelList": [
						"599 06-12"
					]
				}
			]
		},
		{
			"car": "FIAT",
			"models": [
				{
					"model": "126",
					"modelList": [
						"126 73-00"
					]
				},
				{
					"model": "127",
					"modelList": [
						"127 71-83"
					]
				},
				{
					"model": "128",
					"modelList": [
						"128 70-81",
						"128 72-81 coupe/hbk"
					]
				},
				{
					"model": "133",
					"modelList": [
						"133 74-82"
					]
				},
				{
					"model": "500",
					"modelList": [
						"500 07-",
						"500 09-15 cabrio"
					]
				},
				{
					"model": "500C",
					"modelList": [
						"500 09-15"
					]
				},
				{
					"model": "500L",
					"modelList": [
						"500L 12-"
					]
				},
				{
					"model": "500X",
					"modelList": [
						"500X 15-"
					]
				},
				{
					"model": "ALBEA",
					"modelList": [
						"ALBEA 03-12"
					]
				},
				{
					"model": "BARCHETTA",
					"modelList": [
						"BARCHETTA 95-05"
					]
				},
				{
					"model": "BRAVA",
					"modelList": [
						"BRAVA 95-01"
					]
				},
				{
					"model": "BRAVO",
					"modelList": [
						"BRAVO 95-01",
						"BRAVO 07-14"
					]
				},
				{
					"model": "CINQUECENTO",
					"modelList": [
						"CINQUECENTO 92-98"
					]
				},
				{
					"model": "COUPE",
					"modelList": [
						"COUPE 94-00 (175)"
					]
				},
				{
					"model": "CROMA",
					"modelList": [
						"CROMA 86-95",
						"CROMA 05-10"
					]
				},
				{
					"model": "DAILY",
					"modelList": [
						"DAILY 78-98",
						"DAILY 99-14",
						"DAILY 14-"
					]
				},
				{
					"model": "DOBLO",
					"modelList": [
						"DOBLO 01-10",
						"DOBLO 10- Eur",
						"DOBLO 10-14 Rus"
					]
				},
				{
					"model": "DUCATO",
					"modelList": [
						"DUCATO 82-94",
						"DUCATO 94-06",
						"DUCATO 06-",
						"DUCATO 08-11 сборка Елабуга"
					]
				},
				{
					"model": "FIORINO",
					"modelList": [
						"FIORINO 71-02",
						"FIORINO 08-"
					]
				},
				{
					"model": "FREEMONT",
					"modelList": [
						"FREEMONT 08-"
					]
				},
				{
					"model": "GRANDE PUNTO",
					"modelList": [
						"GRANDE PUNTO 05-09"
					]
				},
				{
					"model": "IDEA",
					"modelList": [
						"IDEA 04-16"
					]
				},
				{
					"model": "LARGE",
					"modelList": [
						"LARGE 05-10"
					]
				},
				{
					"model": "LINEA",
					"modelList": [
						"LINEA 07-12"
					]
				},
				{
					"model": "MAREA",
					"modelList": [
						"MAREA 95-03"
					]
				},
				{
					"model": "MARENGO",
					"modelList": [
						"MARENGO 96-03"
					]
				},
				{
					"model": "MULTIPLA",
					"modelList": [
						"MULTIPLA 98-04"
					]
				},
				{
					"model": "PALIO",
					"modelList": [
						"PALIO 96-07",
						"PALIO WEEKEND 96-02"
					]
				},
				{
					"model": "PANDA",
					"modelList": [
						"PANDA 80-03",
						"PANDA 03-11",
						"PANDA 12-"
					]
				},
				{
					"model": "PUNTO",
					"modelList": [
						"PUNTO I 93-99",
						"PUNTO I 93-99 cabrio",
						"PUNTO II 99-10",
						"PUNTO III 05-18"
					]
				},
				{
					"model": "REGATA",
					"modelList": [
						"REGATA 78-90"
					]
				},
				{
					"model": "RITMO",
					"modelList": [
						"RITMO 78-90"
					]
				},
				{
					"model": "SCUDIO",
					"modelList": [
						"SCUDIO 94-02"
					]
				},
				{
					"model": "SCUDO",
					"modelList": [
						"SCUDO 96-02",
						"SCUDO 06-16"
					]
				},
				{
					"model": "SEDICI",
					"modelList": [
						"SEDICI 06-13"
					]
				},
				{
					"model": "SEICENTO",
					"modelList": [
						"SEICENTO 97-05"
					]
				},
				{
					"model": "SIENA",
					"modelList": [
						"SIENA 96-07"
					]
				},
				{
					"model": "STILO",
					"modelList": [
						"STILO 01-07 3d",
						"STILO 01-07 5d"
					]
				},
				{
					"model": "TEMPRA",
					"modelList": [
						"TEMPRA 88-95"
					]
				},
				{
					"model": "TIPO",
					"modelList": [
						"TIPO 88-95"
					]
				},
				{
					"model": "ULYSSE",
					"modelList": [
						"ULYSSE 94-02",
						"ULYSSE 02-11"
					]
				},
				{
					"model": "UNO",
					"modelList": [
						"UNO 83-88",
						"UNO 88-02"
					]
				}
			]
		},
		{
			"car": "FORD",
			"models": [
				{
					"model": "AEROSTAR",
					"modelList": [
						"AEROSTAR 86-97"
					]
				},
				{
					"model": "CARGO",
					"modelList": [
						"CARGO 81-93",
						"CARGO 06- (208x84)"
					]
				},
				{
					"model": "C-MAX",
					"modelList": [
						"C-MAX 03-10",
						"C-MAX 10-"
					]
				},
				{
					"model": "CONTOUR",
					"modelList": [
						"CONTOUR 95-99"
					]
				},
				{
					"model": "COUGAR",
					"modelList": [
						"COUGAR 99-02"
					]
				},
				{
					"model": "ECONOLINE",
					"modelList": [
						"ECONOLINE 92-96",
						"ECONOLINE 97-09",
						"ECONOLINE 09-14"
					]
				},
				{
					"model": "ECOSPORT",
					"modelList": [
						"ECOSPORT 14-"
					]
				},
				{
					"model": "EDGE",
					"modelList": [
						"EDGE 07-14",
						"EDGE 15-"
					]
				},
				{
					"model": "ESCAPE",
					"modelList": [
						"ESCAPE 00-08",
						"ESCAPE 08-12",
						"ESCAPE 12-"
					]
				},
				{
					"model": "ESCORT",
					"modelList": [
						"ESCORT 80-90",
						"ESCORT 90-00",
						"ESCORT 97-02 usa"
					]
				},
				{
					"model": "EXCURSION",
					"modelList": [
						"EXCURSION 00-06"
					]
				},
				{
					"model": "EXPEDITION",
					"modelList": [
						"EXPEDITION 97-03",
						"EXPEDITION 03-06",
						"EXPEDITION 07-17",
						"EXPEDITION 18-"
					]
				},
				{
					"model": "EXPLORER",
					"modelList": [
						"EXPLORER 90-01 (I/II)",
						"EXPLORER 02-10 (III/IV)",
						"EXPLORER 10-19 (V)",
						"EXPLORER 19- (VI)"
					]
				},
				{
					"model": "F series",
					"modelList": [
						"F series 87-98",
						"F series XI 03-08",
						"F series XII 08-14",
						"F series XIII 14-20",
						"F series XIV 20- "
					]
				},
				{
					"model": "FIESTA",
					"modelList": [
						"FIESTA 76-81",
						"FIESTA 81-88",
						"FIESTA 89-95",
						"FIESTA 95-02",
						"FIESTA 02-08",
						"FIESTA 08-17",
						"FIESTA 17-"
					]
				},
				{
					"model": "FOCUS",
					"modelList": [
						"FOCUS I 98-05",
						"FOCUS I 99-07 usa",
						"FOCUS II 04-11",
						"FOCUS III 10-18",
						"FOCUS IV 18-"
					]
				},
				{
					"model": "FUSION",
					"modelList": [
						"FUSION 02-12",
						"FUSION 02-12 usa",
						"FUSION 13- usa"
					]
				},
				{
					"model": "GALAXY",
					"modelList": [
						"GALAXY 95-06",
						"GALAXY 06-15",
						"GALAXY 15-"
					]
				},
				{
					"model": "GRANADA",
					"modelList": [
						"GRANADA 82-85",
						"GRANADA 85-92"
					]
				},
				{
					"model": "KA",
					"modelList": [
						"KA 96-08",
						"KA 08-14",
						"KA 14-"
					]
				},
				{
					"model": "KUGA",
					"modelList": [
						"KUGA 08-12",
						"KUGA 13-"
					]
				},
				{
					"model": "MAVERICK",
					"modelList": [
						"MAVERICK 93-00",
						"MAVERICK 00-06"
					]
				},
				{
					"model": "MONDEO",
					"modelList": [
						"MONDEO 93-99",
						"MONDEO 00-07 III",
						"MONDEO 07-15 IV",
						"MONDEO 15- V"
					]
				},
				{
					"model": "MUSTANG",
					"modelList": [
						"MUSTANG 79-93",
						"MUSTANG 94-04",
						"MUSTANG 05-14",
						"MUSTANG 15-"
					]
				},
				{
					"model": "ORION",
					"modelList": [
						"ORION 80-90",
						"ORION 90-01"
					]
				},
				{
					"model": "PROBE",
					"modelList": [
						"PROBE 88-92",
						"PROBE 93-97"
					]
				},
				{
					"model": "PUMA",
					"modelList": [
						"PUMA 97-01"
					]
				},
				{
					"model": "RANGER",
					"modelList": [
						"RANGER 99-06",
						"RANGER 99-06 круглые углы (1490х660)",
						"RANGER 07-11",
						"RANGER 12-"
					]
				},
				{
					"model": "SCORPIO",
					"modelList": [
						"SCORPIO 85-98"
					]
				},
				{
					"model": "SIERRA",
					"modelList": [
						"SIERRA 82-86",
						"SIERRA 87-93"
					]
				},
				{
					"model": "S-MAX",
					"modelList": [
						"S-MAX 06-15",
						"S-MAX 15-"
					]
				},
				{
					"model": "STREET KA",
					"modelList": [
						"STREET KA 02-08"
					]
				},
				{
					"model": "TAUNUS",
					"modelList": [
						"TAUNUS 70-79 ",
						"TAUNUS 71-76 coupe",
						"TAUNUS 80-83"
					]
				},
				{
					"model": "TAURUS",
					"modelList": [
						"TAURUS 86-95",
						"TAURUS 96-07",
						"TAURUS 08-09",
						"TAURUS 10-16",
						"TAURUS 16-"
					]
				},
				{
					"model": "TOURNEO CONNECT",
					"modelList": [
						"TOURNEO CONNECT 02-12",
						"TOURNEO CONNECT 13-"
					]
				},
				{
					"model": "TOURNEO COURIER",
					"modelList": [
						"TOURNEO COURIER 14-"
					]
				},
				{
					"model": "TOURNEO CUSTOM",
					"modelList": [
						"TOURNEO CUSTOM 13-"
					]
				},
				{
					"model": "TRANSIT",
					"modelList": [
						"TRANSIT 66-86",
						"TRANSIT 86-00",
						"TRANSIT 00-13",
						"TRANSIT 13-",
						"TRANSIT 13- высокий"
					]
				},
				{
					"model": "TRANSIT CONNECT",
					"modelList": [
						"TRANSIT CONNECT 02-12",
						"TRANSIT CONNECT 13-"
					]
				},
				{
					"model": "TRANSIT COURIER",
					"modelList": [
						"TRANSIT COURIER 14-"
					]
				},
				{
					"model": "TRANSIT CUSTOM",
					"modelList": [
						"TRANSIT CUSTOM 13-"
					]
				}
			]
		},
		{
			"car": "FOTON",
			"models": [
				{
					"model": "1039",
					"modelList": [
						"1039 07- (166x82)"
					]
				},
				{
					"model": "1069 / 1089",
					"modelList": [
						"1069 / 1089 00- (187x83)"
					]
				},
				{
					"model": "1099 / 1138",
					"modelList": [
						"1099 / 1138 06- (199x86)"
					]
				},
				{
					"model": "3251 / 3253 / 3313",
					"modelList": [
						"3251 / 3253 / 3313 07- (230x86)"
					]
				},
				{
					"model": "3252",
					"modelList": [
						"3252 00- (229x86)"
					]
				},
				{
					"model": "AUMAN",
					"modelList": [
						"BJ 3253"
					]
				}
			]
		},
		{
			"car": "FREIGHTLINER",
			"models": [
				{
					"model": "ARGOSY",
					"modelList": [
						"ARGOSY 99-09"
					]
				},
				{
					"model": "BUSINESS",
					"modelList": [
						"BUSINESS 02- (190x78)"
					]
				},
				{
					"model": "CENTURY",
					"modelList": [
						"CENTURY 97-04 (104x75)"
					]
				},
				{
					"model": "COLUMBIA",
					"modelList": [
						"COLUMBIA 97-04 (104x75)"
					]
				},
				{
					"model": "FLC",
					"modelList": [
						"FLC 97-04 (104x75)"
					]
				},
				{
					"model": "FLD",
					"modelList": [
						"FLD 87-04 (72x45)"
					]
				}
			]
		},
		{
			"car": "GAC",
			"models": [
				{
					"model": "GS8",
					"modelList": [
						"GS8 16-"
					]
				}
			]
		},
		{
			"car": "GEELY",
			"models": [
				{
					"model": "ATLAS",
					"modelList": [
						"ATLAS 18-",
						"ATLAS PRO 21-"
					]
				},
				{
					"model": "COOLRAY",
					"modelList": [
						"COOLRAY 19-"
					]
				},
				{
					"model": "EMGRAND 7",
					"modelList": [
						"EMGRAND 7 16-"
					]
				},
				{
					"model": "EMGRAND EC7",
					"modelList": [
						"EMGRAND EC7 08-16"
					]
				},
				{
					"model": "EMGRAND EC8",
					"modelList": [
						"EMGRAND EC8 11-15"
					]
				},
				{
					"model": "EMGRAND FE",
					"modelList": [
						"EMGRAND FE-1 09-17"
					]
				},
				{
					"model": "EMGRAND X7 / GX7 / SX7",
					"modelList": [
						"EMGRAND X7 / GX7 / SX7 12- "
					]
				},
				{
					"model": "GC6",
					"modelList": [
						"GC6 14-18"
					]
				},
				{
					"model": "KING KONG",
					"modelList": [
						"KING KONG 06-16"
					]
				},
				{
					"model": "MK",
					"modelList": [
						"MK 06-18"
					]
				},
				{
					"model": "MK CROSS",
					"modelList": [
						"MK CROSS 10-18"
					]
				},
				{
					"model": "OTAKA",
					"modelList": [
						"OTAKA 07-16"
					]
				},
				{
					"model": "VISION",
					"modelList": [
						"VISION 06-11",
						"VISION 14-16",
						"VISION 18-"
					]
				},
				{
					"model": "TUGELLA",
					"modelList": [
						"TUGELLA 20-"
					]
				}
			]
		},
		{
			"car": "GENESIS",
			"models": [
				{
					"model": "G90",
					"modelList": [
						"G90 16-"
					]
				},
				{
					"model": "G80",
					"modelList": [
						"G80 17-"
					]
				},
				{
					"model": "G70",
					"modelList": [
						"G70 18-"
					]
				},
				{
					"model": "GV60",
					"modelList": [
						"GV60 21-"
					]
				},
				{
					"model": "GV70",
					"modelList": [
						"GV70 21-"
					]
				},
				{
					"model": "GV80",
					"modelList": [
						"GV80 20-"
					]
				}
			]
		},
		{
			"car": "GMC",
			"models": [
				{
					"model": "ENVOY",
					"modelList": [
						"ENVOY 02-07"
					]
				},
				{
					"model": "SIERRA",
					"modelList": [
						"SIERRA 07-14"
					]
				},
				{
					"model": "YUKON",
					"modelList": [
						"YUKON 07-15"
					]
				}
			]
		},
		{
			"car": "GREAT WALL",
			"models": [
				{
					"model": "DEER",
					"modelList": [
						"DEER 06-09"
					]
				},
				{
					"model": "HAVAL",
					"modelList": [
						"H6 14-20",
						"H8 13-",
						"H2 14-",
						"H9 15-",
						"H6 17- (II)"
					]
				},
				{
					"model": "HOVER",
					"modelList": [
						"HOVER 05-10",
						"HOVER H3 10-16",
						"HOVER H5 10-",
						"HOVER M2 10-14",
						"HOVER H6 11-",
						"HOVER M3 11-",
						"HOVER M4 12-"
					]
				},
				{
					"model": "PEGASUS",
					"modelList": [
						"PEGASUS 03-08"
					]
				},
				{
					"model": "SAFE",
					"modelList": [
						"SAFE 04-10"
					]
				},
				{
					"model": "SAILOR",
					"modelList": [
						"SAILOR 03-10"
					]
				},
				{
					"model": "WINGLE",
					"modelList": [
						"WINGLE 3 06-12",
						"WINGLE 5 10-",
						"WINGLE 6 14-"
					]
				}
			]
		},
		{
			"car": "HAFEI",
			"models": [
				{
					"model": "BRIO",
					"modelList": [
						"BRIO 02-10"
					]
				}
			]
		},
		{
			"car": "HAIMA",
			"models": [
				{
					"model": "HAIMA 3",
					"modelList": [
						"HAIMA 3 11-13 "
					]
				}
			]
		},
		{
			"car": "HAVAL",
			"models": [
				{
					"model": "F7",
					"modelList": [
						"F7 19-",
						"F7x 19-"
					]
				},
				{
					"model": "H2",
					"modelList": [
						"H2 14-"
					]
				},
				{
					"model": "H5",
					"modelList": [
						"H5 20-21"
					]
				},
				{
					"model": "H6",
					"modelList": [
						"H6 14-20 "
					]
				},
				{
					"model": "H8",
					"modelList": [
						"H8 13-"
					]
				},
				{
					"model": "H9",
					"modelList": [
						"H9 15-"
					]
				},
				{
					"model": "JOLION",
					"modelList": [
						"JOLION 21-"
					]
				}
			]
		},
		{
			"car": "HIGER",
			"models": [
				{
					"model": "6109",
					"modelList": [
						"6109"
					]
				},
				{
					"model": "6128",
					"modelList": [
						"6128"
					]
				},
				{
					"model": "6129",
					"modelList": [
						"6129"
					]
				}
			]
		},
		{
			"car": "HINO",
			"models": [
				{
					"model": "300",
					"modelList": [
						"300 00-11 euro 3 широкая низкая кабина (184x76)",
						"300 11- euro 4 узкая кабина (154x75)",
						"300 11- euro 4 широкая высокая кабина (в клей) (186x85)"
					]
				},
				{
					"model": "500",
					"modelList": [
						"500 89-02 стандартная кабина (195x86)",
						"500 89-02 широкая кабина (212x86)",
						"500 11- стандартная кабина (192x84)",
						"500 11- широкая кабина (211x85)"
					]
				},
				{
					"model": "600",
					"modelList": [
						"600 13- (153x74)"
					]
				},
				{
					"model": "700",
					"modelList": [
						"700 03- (223x85)"
					]
				},
				{
					"model": "DUTRO",
					"modelList": [
						"DUTRO 00- узкая кабина (154x75)",
						"DUTRO 00- широкая высокая кабина (в клей) (186x85)",
						"DUTRO 00- широкая низкая кабина (184x77)"
					]
				},
				{
					"model": "PROFIA DOLPHIN",
					"modelList": [
						"PROFIA DOLPHIN 92-03 (224x87)",
						"PROFIA DOLPHIN 03- (223x85)"
					]
				},
				{
					"model": "RANGER",
					"modelList": [
						"RANGER 89-02 стандартная кабина (195x86)",
						"RANGER 89-02 широкая кабина (212x86)",
						"RANGER 02- стандартная кабина (192x84)",
						"RANGER 02- широкая кабина (211x85)"
					]
				}
			]
		},
		{
			"car": "HONDA",
			"models": [
				{
					"model": "ACCORD",
					"modelList": [
						"ACCORD 82-84 (II)",
						"ACCORD 84-86 (II)",
						"ACCORD 84-86 (III)",
						"ACCORD 86-90 (III)",
						"ACCORD 86-90 3d AERODECK (III)",
						"ACCORD 89-93 est AERODECK (IV)",
						"ACCORD 90-93 (IV)",
						"ACCORD 92-94 coupe (IV)",
						"ACCORD 93-98 (V)",
						"ACCORD 94-98 coupe (V)",
						"ACCORD 94-98 est AERODECK (V)",
						"ACCORD 98-03 (VI)",
						"ACCORD 98-03 coupe (VI)",
						"ACCORD 03-08 (VII)",
						"ACCORD 03-08 coupe (VII)",
						"ACCORD 03-08 usa (VII)",
						"ACCORD 08-12 (VIII)",
						"ACCORD 08-12 coupe (VIII)",
						"ACCORD 13-18 (IX)",
						"ACCORD 13-18 coupe (IX)",
						"ACCORD 4D 13-18 USA ",
						"ACCORD 18- (X)"
					]
				},
				{
					"model": "CITY",
					"modelList": [
						"CITY 03-08",
						"CITY 08-13",
						"CITY 14-"
					]
				},
				{
					"model": "CIVIC",
					"modelList": [
						"CIVIC 72-79 4d (I)",
						"CIVIC 80-84 4d (II)",
						"CIVIC 80-84 5d (II)",
						"CIVIC 84-87 4d (III)",
						"CIVIC 84-88 3d (III)",
						"CIVIC 84-88 5d (III)",
						"CIVIC 84-88 coupe (III)",
						"CIVIC 88-91 5d (IV)",
						"CIVIC 88-92 3d (IV)",
						"CIVIC 88-92 4d (IV)",
						"CIVIC 88-92 coupe (IV)",
						"CIVIC 92-96 3d (V)",
						"CIVIC 92-96 4d (V)",
						"CIVIC 94-01 5d (VI)",
						"CIVIC 94-96 coupe (V)",
						"CIVIC 96-01 3d (VI)",
						"CIVIC 96-01 4d (VI)",
						"CIVIC 01-05 3d (VII)",
						"CIVIC 01-05 5d (VII)",
						"CIVIC 01-05 coupe (VII)",
						"CIVIC 01-06 4d (VII)",
						"CIVIC 05-11 3d/5d (VIII)",
						"CIVIC 06-11 coupe (VIII)",
						"CIVIC 06-13 4d (VIII)",
						"CIVIC 12-17 5d (IX)",
						"CIVIC 13-17 4d (IX)",
						"CIVIC 16- (X)"
					]
				},
				{
					"model": "CONCERTO",
					"modelList": [
						"CONCERTO 90-94"
					]
				},
				{
					"model": "CROSSTOUR",
					"modelList": [
						"CROSSTOUR 10-15"
					]
				},
				{
					"model": "CR-V",
					"modelList": [
						"CR-V 97-02",
						"CR-V 02-06",
						"CR-V 07-11",
						"CR-V 12-17",
						"CR-V 17-"
					]
				},
				{
					"model": "CRX",
					"modelList": [
						"CRX 84-88",
						"CRX 92-98"
					]
				},
				{
					"model": "DOMANI",
					"modelList": [
						"DOMANI 97-01 правый руль"
					]
				},
				{
					"model": "ELEMENT",
					"modelList": [
						"ELEMENT 03-11"
					]
				},
				{
					"model": "ELYSION",
					"modelList": [
						"ELYSION 04-13"
					]
				},
				{
					"model": "FIT",
					"modelList": [
						"FIT 02-07",
						"FIT 07-13",
						"FIT 14-"
					]
				},
				{
					"model": "FREED",
					"modelList": [
						"FREED 08-16",
						"FREED 16-"
					]
				},
				{
					"model": "FR-V",
					"modelList": [
						"FR-V 04-09"
					]
				},
				{
					"model": "HR-V",
					"modelList": [
						"HR-V 99-06",
						"HR-V 13- (I)",
						"HR-V 21- (II)"
					]
				},
				{
					"model": "INSIGHT",
					"modelList": [
						"INSIGHT 99-06",
						"INSIGHT 09-14",
						"INSIGHT 18-"
					]
				},
				{
					"model": "INTEGRA",
					"modelList": [
						"INTEGRA 85-89",
						"INTEGRA 89-93",
						"INTEGRA 93-01",
						"INTEGRA 98-01 coupe",
						"INTEGRA 02-06 coupe"
					]
				},
				{
					"model": "JAZZ",
					"modelList": [
						"JAZZ 84-87",
						"JAZZ 02-08",
						"JAZZ 08-15",
						"JAZZ 15-20",
						"JAZZ 20-"
					]
				},
				{
					"model": "LEGEND",
					"modelList": [
						"LEGEND 86-90",
						"LEGEND 96-06",
						"LEGEND 06-12"
					]
				},
				{
					"model": "LOGO",
					"modelList": [
						"LOGO 96-01"
					]
				},
				{
					"model": "ODYSSEY",
					"modelList": [
						"ODYSSEY 95-98",
						"ODYSSEY 99-04",
						"ODYSSEY 04-08",
						"ODYSSEY 08-13",
						"ODYSSEY 13-"
					]
				},
				{
					"model": "ORTHIA",
					"modelList": [
						"ORTHIA 96-01 правый руль"
					]
				},
				{
					"model": "PARTNER",
					"modelList": [
						"PARTNER 96-01 правый руль"
					]
				},
				{
					"model": "PILOT",
					"modelList": [
						"PILOT 02-08",
						"PILOT 08-15",
						"PILOT 15-22",
						"PILOT 22-"
					]
				},
				{
					"model": "PRELUDE",
					"modelList": [
						"PRELUDE 83-87",
						"PRELUDE 88-92",
						"PRELUDE 92-96",
						"PRELUDE 96-01"
					]
				},
				{
					"model": "RIDGLINE",
					"modelList": [
						"RIDGELINE 06-14",
						"RIDGELINE 17-"
					]
				},
				{
					"model": "S2000",
					"modelList": [
						"S2000 99-09"
					]
				},
				{
					"model": "SHUTTLE",
					"modelList": [
						"SHUTTLE 95-01"
					]
				},
				{
					"model": "S-MX",
					"modelList": [
						"S-MX 96-02"
					]
				},
				{
					"model": "STEPWGN",
					"modelList": [
						"STEPWGN 96-01",
						"STEPWGN 01-05",
						"STEPWGN 05-09",
						"STEPWGN 09-16",
						"STEPWGN 17-"
					]
				},
				{
					"model": "STREAM",
					"modelList": [
						"STREAM 01-06",
						"STREAM 01-06 правый руль",
						"STREAM 06-14 правый руль"
					]
				},
				{
					"model": "TORNEO",
					"modelList": [
						"TORNEO 98-02"
					]
				}
			]
		},
		{
			"car": "HUMMER",
			"models": [
				{
					"model": "H2",
					"modelList": [
						"H2 02-10"
					]
				},
				{
					"model": "H3",
					"modelList": [
						"H3 06-10"
					]
				}
			]
		},
		{
			"car": "HYUNDAI",
			"models": [
				{
					"model": "ACCENT",
					"modelList": [
						"ACCENT 94-99",
						"ACCENT 00-06",
						"ACCENT 01-11 сборка ТагАЗ",
						"ACCENT 06-11",
						"ACCENT 11-17",
						"ACCENT 17-"
					]
				},
				{
					"model": "ATOS",
					"modelList": [
						"ATOS 98-00"
					]
				},
				{
					"model": "ATOS PRIME",
					"modelList": [
						"ATOS PRIME 00-04"
					]
				},
				{
					"model": "AVANTE",
					"modelList": [
						"AVANTE 00-06",
						"AVANTE 07-10",
						"AVANTE 11-15",
						"AVANTE 16-"
					]
				},
				{
					"model": "BAYON",
					"modelList": [
						"BAYON 21-"
					]
				},
				{
					"model": "COUNTY",
					"modelList": [
						"COUNTY 99- корейская борка (196x90)",
						"COUNTY 06- российская сборка (193x87)",
						"COUNTY II 11- (255x133)"
					]
				},
				{
					"model": "COUPE",
					"modelList": [
						"COUPE 90-96",
						"COUPE 96-01",
						"COUPE 02-09"
					]
				},
				{
					"model": "CRETA",
					"modelList": [
						"CRETA 16-21",
						"CRETA 21-"
					]
				},
				{
					"model": "ELANTRA",
					"modelList": [
						"ELANTRA 95-99",
						"ELANTRA 00-06 (XD)",
						"ELANTRA 06-11 (HD)",
						"ELANTRA 06-11 сборка ТагАЗ",
						"ELANTRA 11-16 (MD)",
						"ELANTRA 16-20 (AD)",
						"ELANTRA 20- (CN7)"
					]
				},
				{
					"model": "EQUUS",
					"modelList": [
						"EQUUS 09-16",
						"EQUUS 16-21"
					]
				},
				{
					"model": "EXCEL",
					"modelList": [
						"EXCEL 85-90",
						"EXCEL 90-95"
					]
				},
				{
					"model": "GALLOPER",
					"modelList": [
						"GALLOPER 98-03"
					]
				},
				{
					"model": "GENESIS",
					"modelList": [
						"GENESIS 09-14 Coupe",
						"GENESIS 11-14",
						"GENESIS 14-",
						"GENESIS G90 16-",
						"GENESIS G80 17-",
						"GENESIS G70 18-",
						"GENESIS GV80 20-"
					]
				},
				{
					"model": "GETZ",
					"modelList": [
						"GETZ 02-11"
					]
				},
				{
					"model": "GRACE",
					"modelList": [
						"GRACE 93-98"
					]
				},
				{
					"model": "GRAND SANTA FE",
					"modelList": [
						"GRAND SANTA FE 12-18"
					]
				},
				{
					"model": "GRANDEUR",
					"modelList": [
						"GRANDEUR 05-11",
						"GRANDEUR 11-17",
						"GRANDEUR 18-"
					]
				},
				{
					"model": "H1",
					"modelList": [
						"H1 97-07",
						"H1 07-"
					]
				},
				{
					"model": "H100",
					"modelList": [
						"H100 94-98"
					]
				},
				{
					"model": "H200",
					"modelList": [
						"H200 97-07"
					]
				},
				{
					"model": "H350",
					"modelList": [
						"H350 15-"
					]
				},
				{
					"model": "H350-H600",
					"modelList": [
						"H350-H600 95-15"
					]
				},
				{
					"model": "I10",
					"modelList": [
						"I10 08-13",
						"I10 13-19",
						"I10 19-"
					]
				},
				{
					"model": "I20",
					"modelList": [
						"I20 09-14",
						"I20 15-20",
						"I20 15-18 coupe",
						"I20 20-"
					]
				},
				{
					"model": "I30",
					"modelList": [
						"I30 07-12",
						"I30 13-17",
						"I30 17-",
						"I30 17- fastback"
					]
				},
				{
					"model": "I40",
					"modelList": [
						"I40 11-19"
					]
				},
				{
					"model": "I45",
					"modelList": [
						"I45 10-14"
					]
				},
				{
					"model": "IX20",
					"modelList": [
						"IX20 10-",
						"IX25 14-"
					]
				},
				{
					"model": "IX35",
					"modelList": [
						"IX35 09-15"
					]
				},
				{
					"model": "IX55",
					"modelList": [
						"IX55 09-13"
					]
				},
				{
					"model": "KONA",
					"modelList": [
						"KONA 17-"
					]
				},
				{
					"model": "LANTRA",
					"modelList": [
						"LANTRA 91-95",
						"LANTRA 95-99"
					]
				},
				{
					"model": "MATRIX",
					"modelList": [
						"MATRIX 01-10"
					]
				},
				{
					"model": "PALISADE",
					"modelList": [
						"PALISADE 18-"
					]
				},
				{
					"model": "PONY",
					"modelList": [
						"PONY 85-90",
						"PONY 90-95"
					]
				},
				{
					"model": "PORTER",
					"modelList": [
						"PORTER 96- (146x69)",
						"PORTER II 04- (145x81)"
					]
				},
				{
					"model": "SANTA FE",
					"modelList": [
						"SANTA FE 01-06",
						"SANTA FE 06-11",
						"SANTA FE 07-11 (classic) сборка ТагАЗ",
						"SANTA FE 12-18",
						"SANTA FE 18-"
					]
				},
				{
					"model": "SOLARIS",
					"modelList": [
						"SOLARIS 10-17",
						"SOLARIS 17-"
					]
				},
				{
					"model": "SONATA",
					"modelList": [
						"SONATA 88-93",
						"SONATA 93-98",
						"SONATA 98-12",
						"SONATA 04-11 сборка ТагАЗ",
						"SONATA 05-11 (NF)",
						"SONATA 10-14 (YF)",
						"SONATA 15-19 (LF)",
						"SONATA 20- (DN8)"
					]
				},
				{
					"model": "STAREX",
					"modelList": [
						"STAREX 97-07",
						"STAREX 07-"
					]
				},
				{
					"model": "TERRACAN",
					"modelList": [
						"TERRACAN 01-06"
					]
				},
				{
					"model": "TIBURONE",
					"modelList": [
						"TIBURONE 96-01",
						"TIBURONE 02-09"
					]
				},
				{
					"model": "TRAJET",
					"modelList": [
						"TRAJET 00-09"
					]
				},
				{
					"model": "TUCSON",
					"modelList": [
						"TUCSON 04-10",
						"TUCSON 10-15",
						"TUCSON 15-",
						"TUCSON 21-"
					]
				},
				{
					"model": "TUSCANI",
					"modelList": [
						"TUSCANI 02-09"
					]
				},
				{
					"model": "VELOSTER",
					"modelList": [
						"VELOSTER 12-17",
						"VELOSTER 18-"
					]
				},
				{
					"model": "VERNA",
					"modelList": [
						"VERNA 00-05",
						"VERNA 06-10",
						"VERNA 10-17"
					]
				},
				{
					"model": "XG",
					"modelList": [
						"XG 00-05"
					]
				}
			]
		},
		{
			"car": "HYUNDAI BUS",
			"models": [
				{
					"model": "AERO EXPRESS",
					"modelList": [
						"AERO EXPRESS 05-"
					]
				},
				{
					"model": "UNIVERSE XPRESS",
					"modelList": [
						"UNIVERSE XPRESS 08-11"
					]
				}
			]
		},
		{
			"car": "HYUNDAI TRUCK",
			"models": [
				{
					"model": "HD120",
					"modelList": [
						"HD120 99- узкая кабина (199x83)",
						"HD120 99- широкая кабина (231x83)"
					]
				},
				{
					"model": "HD170/250",
					"modelList": [
						"HD170/250 99-09 (231x83)"
					]
				},
				{
					"model": "HD260/270/370/450/500",
					"modelList": [
						"HD260/270/370/450/500 99-09 (231x83)",
						"HD260/270/370/450/500 09-"
					]
				},
				{
					"model": "HD65/72/75/78",
					"modelList": [
						"HD65/72/75/78 99- стандартная кабина (178x75)",
						"HD65/72/75/78 99- узкая кабина (154x75)"
					]
				},
				{
					"model": "MIGHTY",
					"modelList": [
						"MIGHTY 99-",
						"MIGHTY 19-"
					]
				},
				{
					"model": "XCIENT",
					"modelList": [
						"XCIENT 13-"
					]
				},
				{
					"model": "TRAGO",
					"modelList": [
						"TRAGO Xcient 13-"
					]
				}
			]
		},
		{
			"car": "INFINITI",
			"models": [
				{
					"model": "EX",
					"modelList": [
						"EX 07-14"
					]
				},
				{
					"model": "ESQ",
					"modelList": [
						"ESQ 14-"
					]
				},
				{
					"model": "FX",
					"modelList": [
						"FX 03-08",
						"FX 08-14"
					]
				},
				{
					"model": "G25",
					"modelList": [
						"G25 10-14"
					]
				},
				{
					"model": "G35",
					"modelList": [
						"G35 03-07",
						"G35 03-07 coupe",
						"G35 07-14"
					]
				},
				{
					"model": "G37",
					"modelList": [
						"G37 08-14 coupe/cabrio"
					]
				},
				{
					"model": "JX",
					"modelList": [
						"JX 12-14 (L50)"
					]
				},
				{
					"model": "M",
					"modelList": [
						"M 06-10",
						"M 10-14"
					]
				},
				{
					"model": "Q30",
					"modelList": [
						"Q30 15-"
					]
				},
				{
					"model": "Q45",
					"modelList": [
						"Q45 90-96",
						"Q45 97-01",
						"Q45 01-06"
					]
				},
				{
					"model": "Q50",
					"modelList": [
						"Q50 13-"
					]
				},
				{
					"model": "Q60",
					"modelList": [
						"Q60 14-"
					]
				},
				{
					"model": "Q70",
					"modelList": [
						"Q70 14-19"
					]
				},
				{
					"model": "QX4",
					"modelList": [
						"QX4 97-04"
					]
				},
				{
					"model": "QX50",
					"modelList": [
						"QX50 13-17",
						"QX50 17-"
					]
				},
				{
					"model": "QX56",
					"modelList": [
						"QX56 04-10",
						"QX56 10-14"
					]
				},
				{
					"model": "QX60",
					"modelList": [
						"QX60 13-20",
						"QX60 21-"
					]
				},
				{
					"model": "QX70",
					"modelList": [
						"QX70 13-17"
					]
				},
				{
					"model": "QX80",
					"modelList": [
						"QX80 14-",
						"QX80 19-"
					]
				}
			]
		},
		{
			"car": "INTERNATIONAL",
			"models": [
				{
					"model": "9200",
					"modelList": [
						"9200 00-"
					]
				},
				{
					"model": "9400",
					"modelList": [
						"9400 00-"
					]
				},
				{
					"model": "9800",
					"modelList": [
						"9800 00-"
					]
				},
				{
					"model": "PROSTAR",
					"modelList": [
						"ProStar Premium 07-"
					]
				},
				{
					"model": "NAVISTAR",
					"modelList": [
						"3200 CONVENTIONAL 07-08"
					]
				}
			]
		},
		{
			"car": "IRAN KHODRO",
			"models": [
				{
					"model": "SAMAND",
					"modelList": [
						"SAMAND 06-"
					]
				}
			]
		},
		{
			"car": "ISUZU",
			"models": [
				{
					"model": "ASCENDER",
					"modelList": [
						"ASCENDER 03-09"
					]
				},
				{
					"model": "AXIOM",
					"modelList": [
						"AXIOM 02-04"
					]
				},
				{
					"model": "D-MAX",
					"modelList": [
						"D-MAX 03-11",
						"D-MAX 12-"
					]
				},
				{
					"model": "GEMINI",
					"modelList": [
						"GEMINI 85-89"
					]
				},
				{
					"model": "RODEO",
					"modelList": [
						"RODEO 98-03",
						"RODEO 03-11",
						"RODEO 12-"
					]
				},
				{
					"model": "TROOPER",
					"modelList": [
						"TROOPER 82-92",
						"TROOPER 92-05"
					]
				}
			]
		},
		{
			"car": "ISUZU TRUCK",
			"models": [
				{
					"model": "CYZ",
					"modelList": [
						"CYZ 51 "
					]
				},
				{
					"model": "ELF",
					"modelList": [
						"ELF 93-06 высокая кабина (154х79)",
						"ELF 93-06 стандартная кабина (154х75)",
						"ELF 93-06 широкая кабина (184х79)",
						"ELF 06- узкая кабина (164х79)",
						"ELF 06- широкая кабина (187х80)"
					]
				},
				{
					"model": "FORWARD",
					"modelList": [
						"FORWARD 08- стандартная кабина (195х80)",
						"FORWARD 08- широкая кабина (215х80)"
					]
				},
				{
					"model": "FRV",
					"modelList": [
						"FRV 06- (215х80)"
					]
				},
				{
					"model": "FSR",
					"modelList": [
						"FSR 16- (195х80)"
					]
				},
				{
					"model": "NKR",
					"modelList": [
						"NKR55 93-06 высокая кабина (154х79)",
						"NKR66 93-06 стандартная кабина (154х75)"
					]
				},
				{
					"model": "NLP",
					"modelList": [
						"NLP 06- высокая кабина (164х79)"
					]
				},
				{
					"model": "NLR",
					"modelList": [
						"NLR85 06- (164х79)"
					]
				},
				{
					"model": "NMR",
					"modelList": [
						"NMR85 08- (187х80)"
					]
				},
				{
					"model": "NNR",
					"modelList": [
						"NNR 08- (187х80)"
					]
				},
				{
					"model": "NPR",
					"modelList": [
						"NPR94 96-10 (184х79)",
						"NPR75 11- (187х80)"
					]
				},
				{
					"model": "NPS",
					"modelList": [
						"NPS 08- (187х80)"
					]
				},
				{
					"model": "NQR",
					"modelList": [
						"NQR71 / NQR75 93-12 (184х79)",
						"NQR90 13- (187х80)"
					]
				},
				{
					"model": "NRR",
					"modelList": [
						"NRR 06- высокая кабина (164х79)"
					]
				}
			]
		},
		{
			"car": "IVECO",
			"models": [
				{
					"model": "DAILY",
					"modelList": [
						"DAILY 79-99",
						"DAILY 00-14",
						"DAILY 14-"
					]
				},
				{
					"model": "EUROCARGO",
					"modelList": [
						"EUROCARGO 91-02",
						"EUROCARGO 03-"
					]
				},
				{
					"model": "EUROSTAR",
					"modelList": [
						"EUROSTAR 92-06",
						"EUROSTAR 92- широкая кабина"
					]
				},
				{
					"model": "EUROTECH",
					"modelList": [
						"EUROTECH 92-02"
					]
				},
				{
					"model": "EUROTRAKKER",
					"modelList": [
						"EUROTRAKKER 96-04"
					]
				},
				{
					"model": "NEMAN",
					"modelList": [
						"NEMAN 420211-11 (2160x1455)"
					]
				},
				{
					"model": "STRALIS",
					"modelList": [
						"STRALIS 02- узкая кабина",
						"STRALIS 02- широкая кабина"
					]
				},
				{
					"model": "UralAZ (6329)",
					"modelList": [
						"6329 03- "
					]
				}
			]
		},
		{
			"car": "JAC",
			"models": [
				{
					"model": "J7",
					"modelList": [
						"J7 20-"
					]
				},
				{
					"model": "REIN",
					"modelList": [
						"REIN 07-13"
					]
				},
				{
					"model": "S3",
					"modelList": [
						"S3 14-"
					]
				},
				{
					"model": "S5",
					"modelList": [
						"S5 13-19"
					]
				},
				{
					"model": "T6",
					"modelList": [
						"T6 15-"
					]
				},
				{
					"model": "T8",
					"modelList": [
						"T8 15-"
					]
				}
			]
		},
		{
			"car": "JAGUAR",
			"models": [
				{
					"model": "E-PACE",
					"modelList": [
						"E-PACE 18-"
					]
				},
				{
					"model": "F-PACE",
					"modelList": [
						"F-PACE 16-"
					]
				},
				{
					"model": "F-TYPE",
					"modelList": [
						"F-TYPE 13-17 cabrio",
						"F-TYPE 13-17 coupe"
					]
				},
				{
					"model": "I-PACE",
					"modelList": [
						"I-PACE 18-"
					]
				},
				{
					"model": "S-TYPE",
					"modelList": [
						"S-TYPE 98-09"
					]
				},
				{
					"model": "XE",
					"modelList": [
						"XE 15-"
					]
				},
				{
					"model": "XF",
					"modelList": [
						"XF 08-15",
						"XF 15-"
					]
				},
				{
					"model": "XJ",
					"modelList": [
						"XJ 86-93",
						"XJ 93-03",
						"XJ 03-10",
						"XJ 10-"
					]
				},
				{
					"model": "XJS",
					"modelList": [
						"XJS 75-91 coupe"
					]
				},
				{
					"model": "XK",
					"modelList": [
						"XK 96-06",
						"XK 06-14"
					]
				},
				{
					"model": "X-TYPE",
					"modelList": [
						"X-TYPE 01-10"
					]
				}
			]
		},
		{
			"car": "JCB",
			"models": [
				{
					"model": "3CX Project 12-1",
					"modelList": [
						"3CX/4CX/4C -1999"
					]
				},
				{
					"model": "3CX Project 12-2",
					"modelList": [
						"3CX/4CX/4T 1997-2002"
					]
				},
				{
					"model": "3CX",
					"modelList": [
						"3CX 05-",
						"3CX 17- (INDIA)"
					]
				},
				{
					"model": "5CX",
					"modelList": [
						"5CX"
					]
				},
				{
					"model": "JS",
					"modelList": [
						"JS 2003-2012",
						"JS 2010-"
					]
				},
				{
					"model": "LOADAL",
					"modelList": [
						"540-140"
					]
				},
				{
					"model": "VIBROMAX",
					"modelList": [
						"VM-132"
					]
				}
			]
		},
		{
			"car": "JEEP",
			"models": [
				{
					"model": "CHEROKEE",
					"modelList": [
						"CHEROKEE 74-83",
						"CHEROKEE 84-00",
						"CHEROKEE 01-08",
						"CHEROKEE 08-14",
						"CHEROKEE 14- (KL)"
					]
				},
				{
					"model": "COMMANDER",
					"modelList": [
						"COMMANDER 06-10"
					]
				},
				{
					"model": "COMPASS",
					"modelList": [
						"COMPASS 07-16",
						"COMPASS 17-"
					]
				},
				{
					"model": "GRAND CHEROKEE",
					"modelList": [
						"GRAND CHEROKEE 93-99",
						"GRAND CHEROKEE 99-04",
						"GRAND CHEROKEE 05-10",
						"GRAND CHEROKEE 11-20",
						"GRAND CHEROKEE 21-"
					]
				},
				{
					"model": "LIBERTY",
					"modelList": [
						"LIBERTY 02-07",
						"LIBERTY 08-12",
						"LIBERTY 08-12 редкий вариант"
					]
				},
				{
					"model": "PATRIOT LIBERTY",
					"modelList": [
						"PATRIOT LIBERTY 07-16"
					]
				},
				{
					"model": "RENEGADE",
					"modelList": [
						"RENEGADE 14-"
					]
				},
				{
					"model": "WRANGLER",
					"modelList": [
						"WRANGLER 92-97",
						"WRANGLER 97-06",
						"WRANGLER 07-18",
						"WRANGLER 18-"
					]
				}
			]
		},
		{
			"car": "KENWORTH",
			"models": [
				{
					"model": "T2000",
					"modelList": [
						"T2000 97-08"
					]
				},
				{
					"model": "T800",
					"modelList": [
						"T800 97-08"
					]
				}
			]
		},
		{
			"car": "KIA",
			"models": [
				{
					"model": "BESTA",
					"modelList": [
						"BESTA 93-96"
					]
				},
				{
					"model": "BONGO",
					"modelList": [
						"BONGO 96-07 pregio minibus (151x84)",
						"BONGO 04- k-series pick-up/minivan (145x81) "
					]
				},
				{
					"model": "CARENS",
					"modelList": [
						"CARENS 99-02",
						"CARENS 02-06",
						"CARENS 06-11",
						"CARENS 12-19"
					]
				},
				{
					"model": "CARNIVAL",
					"modelList": [
						"CARNIVAL 98-06",
						"CARNIVAL 06-14",
						"CARNIVAL 14-20",
						"CARNIVAL 20-"
					]
				},
				{
					"model": "CEED",
					"modelList": [
						"CEED 06-12",
						"CEED 06-12 3d",
						"CEED 12-18",
						"CEED 12-18 3d",
						"CEED 18-",
						"CEED 18- 3d"
					]
				},
				{
					"model": "CERATO",
					"modelList": [
						"CERATO 04-09",
						"CERATO 09-13",
						"CERATO 09-13 coupe",
						"CERATO 13-18",
						"CERATO 13-18 coupe",
						"CERATO 18-"
					]
				},
				{
					"model": "CLARUS",
					"modelList": [
						"CLARUS 96-01"
					]
				},
				{
					"model": "CREDOS",
					"modelList": [
						"CREDOS 96-01"
					]
				},
				{
					"model": "FORTE",
					"modelList": [
						"FORTE 09-13",
						"FORTE 09-13 coupe",
						"FORTE 13-18",
						"FORTE 13-18 coupe"
					]
				},
				{
					"model": "FRONTIER",
					"modelList": [
						"FRONTIER 04- K-series"
					]
				},
				{
					"model": "JOYCE",
					"modelList": [
						"JOYCE 01-03"
					]
				},
				{
					"model": "K5",
					"modelList": [
						"K5 20-"
					]
				},
				{
					"model": "K900",
					"modelList": [
						"K900 14-18",
						"K900 19-"
					]
				},
				{
					"model": "MAGENTIS",
					"modelList": [
						"MAGENTIS 01-05",
						"MAGENTIS 06-10"
					]
				},
				{
					"model": "MENTOR",
					"modelList": [
						"MENTOR 93-98"
					]
				},
				{
					"model": "MOHAVE",
					"modelList": [
						"MOHAVE 08-18"
					]
				},
				{
					"model": "OPIRUS",
					"modelList": [
						"OPIRUS 03-11"
					]
				},
				{
					"model": "OPTIMA",
					"modelList": [
						"OPTIMA 06-11",
						"OPTIMA 12-16",
						"OPTIMA 16-",
						"OPTIMA 20- (DL3)"
					]
				},
				{
					"model": "PICANTO",
					"modelList": [
						"PICANTO 04-11",
						"PICANTO 11-17",
						"PICANTO 17-"
					]
				},
				{
					"model": "PREGIO",
					"modelList": [
						"PREGIO 96-07"
					]
				},
				{
					"model": "PRIDE",
					"modelList": [
						"PRIDE 93-04",
						"PRIDE 05-11",
						"PRIDE 11-17"
					]
				},
				{
					"model": "PRO-CEED",
					"modelList": [
						"PRO-CEED 06-11",
						"PRO-CEED 12-18",
						"PRO-CEED 18-"
					]
				},
				{
					"model": "QUORIS",
					"modelList": [
						"QUORIS 13-18",
						"QUORIS 19-"
					]
				},
				{
					"model": "RETONA",
					"modelList": [
						"RETONA 00-03"
					]
				},
				{
					"model": "RIO",
					"modelList": [
						"RIO 00-05",
						"RIO 05-11",
						"RIO 11-17 корейская сборка",
						"RIO 11-17 российская сборка",
						"RIO 17- корейская сборка",
						"RIO 17- российская сборка"
					]
				},
				{
					"model": "SEDONA",
					"modelList": [
						"SEDONA 99-06",
						"SEDONA 06-14"
					]
				},
				{
					"model": "SELTOS",
					"modelList": [
						"SELTOS 19-"
					]
				},
				{
					"model": "SEPHIA",
					"modelList": [
						"SEPHIA 93-98",
						"SEPHIA 98-04"
					]
				},
				{
					"model": "SHUMA",
					"modelList": [
						"SHUMA 98-04"
					]
				},
				{
					"model": "SORENTO",
					"modelList": [
						"SORENTO I 02-09",
						"SORENTO II 09-",
						"SORENTO III PRIME 15-",
						"SORENTO 20-"
					]
				},
				{
					"model": "SOUL",
					"modelList": [
						"SOUL 09-13",
						"SOUL 14-",
						"SOUL 19-"
					]
				},
				{
					"model": "SPECTRA",
					"modelList": [
						"SPECTRA 00-11"
					]
				},
				{
					"model": "SPORTAGE",
					"modelList": [
						"SPORTAGE 94-05",
						"SPORTAGE 04-10",
						"SPORTAGE 10-16",
						"SPORTAGE IV 16- ",
						"SPORTAGE V 21-"
					]
				},
				{
					"model": "STINGER",
					"modelList": [
						"STINGER 18-"
					]
				},
				{
					"model": "STONIC",
					"modelList": [
						"STONIC 17-"
					]
				},
				{
					"model": "VENGA",
					"modelList": [
						"VENGA 09-17"
					]
				}
			]
		},
		{
			"car": "LADA",
			"models": [
				{
					"model": "4х4",
					"modelList": [
						"4х4 06-"
					]
				},
				{
					"model": "GRANTA",
					"modelList": [
						"GRANTA 11-"
					]
				},
				{
					"model": "KALINA",
					"modelList": [
						"KALINA 05-13",
						"KALINA 13-"
					]
				},
				{
					"model": "LARGUS",
					"modelList": [
						"LARGUS 12-"
					]
				},
				{
					"model": "PRIORA",
					"modelList": [
						"PRIORA 05-",
						"PRIORA 09- coupe"
					]
				},
				{
					"model": "VESTA",
					"modelList": [
						"VESTA 15-"
					]
				},
				{
					"model": "XRAY",
					"modelList": [
						"XRAY 15-"
					]
				}
			]
		},
		{
			"car": "LAMBORGHINI",
			"models": [
				{
					"model": "AVENTADOR",
					"modelList": [
						"AVENTADOR 12-"
					]
				},
				{
					"model": "DIABLO",
					"modelList": [
						"DIABLO 98-01"
					]
				},
				{
					"model": "GALLARDO",
					"modelList": [
						"GALLARDO 03-13"
					]
				},
				{
					"model": "HURACAN",
					"modelList": [
						"HURACAN 15-"
					]
				},
				{
					"model": "MURCIELAGO",
					"modelList": [
						"MURCIELAGO 01-10"
					]
				},
				{
					"model": "URUS",
					"modelList": [
						"URUS 18-"
					]
				}
			]
		},
		{
			"car": "LANCIA",
			"models": [
				{
					"model": "DEDRA",
					"modelList": [
						"DEDRA 90-99"
					]
				},
				{
					"model": "DELTA",
					"modelList": [
						"DELTA 93-99",
						"DELTA 09-14"
					]
				},
				{
					"model": "DZETA",
					"modelList": [
						"DZETA 94-02"
					]
				},
				{
					"model": "KAPPA",
					"modelList": [
						"KAPPA 94-00",
						"KAPPA 97-00 coupe"
					]
				},
				{
					"model": "LYBRA",
					"modelList": [
						"LYBRA 98-05"
					]
				},
				{
					"model": "MUSA",
					"modelList": [
						"MUSA 04-12"
					]
				},
				{
					"model": "THEMA",
					"modelList": [
						"THEMA 85-94",
						"THEMA 11-14 SD"
					]
				},
				{
					"model": "THESIS",
					"modelList": [
						"THESIS 01-09"
					]
				},
				{
					"model": "Y10",
					"modelList": [
						"Y10 85-95"
					]
				},
				{
					"model": "YPSILON",
					"modelList": [
						"YPSILON 96-03",
						"YPSILON 03-11",
						"YPSILON 11-"
					]
				}
			]
		},
		{
			"car": "LAND ROVER",
			"models": [
				{
					"model": "DEFENDER",
					"modelList": [
						"DEFENDER 83-16",
						"DEFENDER 19-"
					]
				},
				{
					"model": "DISCOVERY",
					"modelList": [
						"DISCOVERY 89-94",
						"DISCOVERY 94-98",
						"DISCOVERY 98-04",
						"DISCOVERY 04-09 III",
						"DISCOVERY 09-16 IV",
						"DISCOVERY 17-"
					]
				},
				{
					"model": "DISCOVERY SPORT",
					"modelList": [
						"DISCOVERY SPORT 15-"
					]
				},
				{
					"model": "EVOQUE",
					"modelList": [
						"EVOQUE 11-18 3d",
						"EVOQUE 11-18 5d",
						"EVOQUE 18-"
					]
				},
				{
					"model": "FREELANDER",
					"modelList": [
						"FREELANDER 97-06",
						"FREELANDER 06-14"
					]
				},
				{
					"model": "RANGE ROVER",
					"modelList": [
						"RANGE ROVER 70-94",
						"RANGE ROVER 94-02",
						"RANGE ROVER 02-12",
						"RANGE ROVER 12- (IV)",
						"RANGE ROVER 21- (V)"
					]
				},
				{
					"model": "RANGE ROVER SPORT",
					"modelList": [
						"RANGE ROVER SPORT 05-13",
						"RANGE ROVER SPORT 13-",
						"RANGE ROVER SPORT 22-"
					]
				},
				{
					"model": "RANGE ROVER VELAR",
					"modelList": [
						"RANGE ROVER VELAR 17-"
					]
				}
			]
		},
		{
			"car": "LDV",
			"models": [
				{
					"model": "MAXUS",
					"modelList": [
						"MAXUS 04-10"
					]
				}
			]
		},
		{
			"car": "LEXUS",
			"models": [
				{
					"model": "CT",
					"modelList": [
						"CT 11-"
					]
				},
				{
					"model": "ES",
					"modelList": [
						"ES 89-91",
						"ES 91-97",
						"ES 97-01",
						"ES 01-06",
						"ES 06-12",
						"ES 12-18",
						"ES 18-"
					]
				},
				{
					"model": "GS",
					"modelList": [
						"GS 93-97",
						"GS 93-97 правый руль",
						"GS 98-00",
						"GS 98-00 правый руль",
						"GS 00-05",
						"GS 00-05 правый руль",
						"GS 05-11",
						"GS 12-"
					]
				},
				{
					"model": "GX",
					"modelList": [
						"GX 03-09",
						"GX 09-"
					]
				},
				{
					"model": "HS",
					"modelList": [
						"HS 09-17"
					]
				},
				{
					"model": "IS",
					"modelList": [
						"IS 99-05",
						"IS 05-13",
						"IS 09-13 cabrio",
						"IS 13-"
					]
				},
				{
					"model": "LC",
					"modelList": [
						"LC 17-"
					]
				},
				{
					"model": "LS",
					"modelList": [
						"LS 90-94",
						"LS 94-00",
						"LS 00-06",
						"LS 00-06 правый руль",
						"LS 07-12",
						"LS 12-17",
						"LS 18-"
					]
				},
				{
					"model": "LX",
					"modelList": [
						"LX 96-97",
						"LX 98-07",
						"LX 07-21",
						"LX 21-"
					]
				},
				{
					"model": "NX",
					"modelList": [
						"NX 14-"
					]
				},
				{
					"model": "UX",
					"modelList": [
						"UX 18-"
					]
				},
				{
					"model": "RX",
					"modelList": [
						"RX 99-03",
						"RX 99-03 правый руль",
						"RX 03-08",
						"RX 03-08 правый руль",
						"RX 09-15",
						"RX 15-"
					]
				},
				{
					"model": "SC",
					"modelList": [
						"SC 01-10"
					]
				}
			]
		},
		{
			"car": "LIFAN",
			"models": [
				{
					"model": "BREEZ 520",
					"modelList": [
						"BREEZ 520 06-14"
					]
				},
				{
					"model": "CEBRIUM 720",
					"modelList": [
						"CEBRIUM 720 14-15"
					]
				},
				{
					"model": "CELLIYA 530",
					"modelList": [
						"CELLIAY 530 14-"
					]
				},
				{
					"model": "MYWAY",
					"modelList": [
						"MYWAY 16-"
					]
				},
				{
					"model": "SMILY",
					"modelList": [
						"SMILY 320 09-"
					]
				},
				{
					"model": "SOLANO",
					"modelList": [
						"SOLANO 620/630 08-16",
						"SOLANO 650 16-"
					]
				},
				{
					"model": "X50",
					"modelList": [
						"X50 15-"
					]
				},
				{
					"model": "X60",
					"modelList": [
						"X60 11-"
					]
				},
				{
					"model": "X70",
					"modelList": [
						"X70 17-"
					]
				}
			]
		},
		{
			"car": "LINKOLN",
			"models": [
				{
					"model": "CONTINENTAL",
					"modelList": [
						"CONTINENTAL 88-94",
						"CONTINENTAL 95-97",
						"CONTINENTAL 98-02",
						"CONTINENTAL 17-"
					]
				},
				{
					"model": "MKX",
					"modelList": [
						"MKX 07-15",
						"MKX 16-18"
					]
				},
				{
					"model": "NAUTILUS",
					"modelList": [
						"NAUTILUS 19-"
					]
				},
				{
					"model": "NAVIGATOR",
					"modelList": [
						"NAVIGATOR 98-02",
						"NAVIGATOR 03-06",
						"NAVIGATOR 07-17",
						"NAVIGATOR 18-"
					]
				},
				{
					"model": "TOWN CAR",
					"modelList": [
						"TOWN CAR 90-97",
						"TOWN CAR 98-11"
					]
				}
			]
		},
		{
			"car": "MAN",
			"models": [
				{
					"model": "F2000",
					"modelList": [
						"F2000 86-03 широкая кабина",
						"F2000 86-95 узкая кабина"
					]
				},
				{
					"model": "F7",
					"modelList": [
						"F7 71-87"
					]
				},
				{
					"model": "F90",
					"modelList": [
						"F90 86-03 широкая кабина",
						"F90 86-95 узкая кабина"
					]
				},
				{
					"model": "L/M2000",
					"modelList": [
						"L/M2000 93-97",
						"L/M2000 97-11"
					]
				},
				{
					"model": "TGA",
					"modelList": [
						"TGA 00- узкая низкая кабина",
						"TGA 00- широкая высокая кабина",
						"TGA 00- широкая низкая кабина"
					]
				},
				{
					"model": "TGE",
					"modelList": [
						"TGE 17-"
					]
				},
				{
					"model": "TGL",
					"modelList": [
						"TGL 00-"
					]
				},
				{
					"model": "TGM",
					"modelList": [
						"TGM 00-"
					]
				},
				{
					"model": "TGS",
					"modelList": [
						"TGS 09-"
					]
				},
				{
					"model": "TGX",
					"modelList": [
						"TGX 07-"
					]
				}
			]
		},
		{
			"car": "MASERATI",
			"models": [
				{
					"model": "3200 GT",
					"modelList": [
						"3200 GT 98-02"
					]
				},
				{
					"model": "GHIBLI",
					"modelList": [
						"GHIBLI 13-"
					]
				},
				{
					"model": "GRANTURISMO",
					"modelList": [
						"GRANTURISMO 07-"
					]
				},
				{
					"model": "LEVANTE",
					"modelList": [
						"LEVANTE 16-"
					]
				},
				{
					"model": "QUATTROPORTE",
					"modelList": [
						"QUATTROPORTE 94-01",
						"QUATTROPORTE 03-13",
						"QUATTROPORTE 13-"
					]
				}
			]
		},
		{
			"car": "MAZDA",
			"models": [
				{
					"model": "121",
					"modelList": [
						"121 86-91",
						"121 91-95",
						"121 95-02"
					]
				},
				{
					"model": "2",
					"modelList": [
						"2 03-08",
						"2 07-15",
						"2 15-",
						"2 22- Hybrid"
					]
				},
				{
					"model": "3",
					"modelList": [
						"3 03-08",
						"3 08-12",
						"3 13-19",
						"3 19- Sedan"
					]
				},
				{
					"model": "323",
					"modelList": [
						"323 80-85 bd",
						"323 85-89 bf",
						"323 89-94 bg 3d",
						"323 89-94 bg 4d",
						"323 89-94 bg 5d",
						"323 94-98 ba 3/4d",
						"323 94-98 ba 5d",
						"323 98-03 bj "
					]
				},
				{
					"model": "5",
					"modelList": [
						"5 05-15"
					]
				},
				{
					"model": "6",
					"modelList": [
						"6 02-07",
						"6 07-11",
						"6 12-"
					]
				},
				{
					"model": "626",
					"modelList": [
						"626 83-88 gc coupe/hbk",
						"626 83-88 gc sed",
						"626 88-92 gd coupe/hbk",
						"626 88-92 gd sed/est",
						"626 92-97 ge 4d",
						"626 92-97 ge 5d",
						"626 92-97 ge coupe",
						"626 97-02 gf est",
						"626 97-02 gf sed/hbk"
					]
				},
				{
					"model": "929",
					"modelList": [
						"929 81-87",
						"929 87-91"
					]
				},
				{
					"model": "B series",
					"modelList": [
						"B 85-98",
						"B 98-06",
						"B 98-06 круглые углы (1490х660)"
					]
				},
				{
					"model": "BIANTE",
					"modelList": [
						"BIANTE 08-18"
					]
				},
				{
					"model": "BONGO",
					"modelList": [
						"BONGO 83-99 (Minivan)",
						"BONGO 99-18 (Minivan)"
					]
				},
				{
					"model": "BT50",
					"modelList": [
						"BT50 06-11",
						"BT50 11-"
					]
				},
				{
					"model": "CX-3",
					"modelList": [
						"CX-3 15-"
					]
				},
				{
					"model": "CX-30",
					"modelList": [
						"CX-30 19-"
					]
				},
				{
					"model": "CX-5",
					"modelList": [
						"CX-5 12-17",
						"CX-5 17-"
					]
				},
				{
					"model": "CX-7",
					"modelList": [
						"CX-7 07-12"
					]
				},
				{
					"model": "CX-9",
					"modelList": [
						"CX-9 07-16",
						"CX-9 16-"
					]
				},
				{
					"model": "DEMIO",
					"modelList": [
						"DEMIO 96-02 правый руль",
						"DEMIO 02-07 правый руль",
						"DEMIO 07-15 правый руль"
					]
				},
				{
					"model": "E series",
					"modelList": [
						"E 84-00",
						"E 00-02"
					]
				},
				{
					"model": "MPV",
					"modelList": [
						"MPV 89-99",
						"MPV 00-06",
						"MPV 07-16"
					]
				},
				{
					"model": "MX3",
					"modelList": [
						"MX3 91-00"
					]
				},
				{
					"model": "MX30",
					"modelList": [
						"MX30 20-"
					]
				},
				{
					"model": "MX5",
					"modelList": [
						"MX5 90-05",
						"MX5 05-15",
						"MX5 15-"
					]
				},
				{
					"model": "MX6",
					"modelList": [
						"MX6 92-97"
					]
				},
				{
					"model": "PREMACY",
					"modelList": [
						"PREMACY 99-05",
						"PREMACY 06-10",
						"PREMACY 10-"
					]
				},
				{
					"model": "RX7",
					"modelList": [
						"RX7 92-99"
					]
				},
				{
					"model": "RX8",
					"modelList": [
						"RX8 03-10"
					]
				},
				{
					"model": "TITAN",
					"modelList": [
						"TITAN W640 03-10"
					]
				},
				{
					"model": "TRIBUTE",
					"modelList": [
						"TRIBUTE 01-06",
						"TRIBUTE 07-11 (USA)"
					]
				},
				{
					"model": "XEDOS 6",
					"modelList": [
						"XEDOS 6 92-01"
					]
				},
				{
					"model": "XEDOS 9",
					"modelList": [
						"XEDOS 9 93-03"
					]
				}
			]
		},
		{
			"car": "MERCEDES",
			"models": [
				{
					"model": "1617-2632",
					"modelList": [
						"1617-2632 74-82 (199x80)"
					]
				},
				{
					"model": "1638-2638",
					"modelList": [
						"1638-2638 81-98 (216x81)"
					]
				},
				{
					"model": "207-410 почтовик",
					"modelList": [
						"207-410 77-95 почтовик (169x76)"
					]
				},
				{
					"model": "A class",
					"modelList": [
						"A W168 97-04",
						"A W169 04-12",
						"A W176 12-18",
						"A W177 18-"
					]
				},
				{
					"model": "B class",
					"modelList": [
						"B W245 04-11",
						"B W246 11-18"
					]
				},
				{
					"model": "C class",
					"modelList": [
						"C W202 93-00",
						"C W203 00-07",
						"C W203 00-10 coupe",
						"C W204 07-14",
						"C W207 09-16 cabrio",
						"C W207 09-16 coupe",
						"C W204 11-14 coupe",
						"C W205 14-",
						"C W205 16- coupe",
						"C W206 21-"
					]
				},
				{
					"model": "CL class",
					"modelList": [
						"CL W215 99-06",
						"CL W216 06-13"
					]
				},
				{
					"model": "CLA class",
					"modelList": [
						"CLA 13-"
					]
				},
				{
					"model": "CLK class",
					"modelList": [
						"CLK W208 97-02",
						"CLK W209 02-09"
					]
				},
				{
					"model": "CLS class",
					"modelList": [
						"CLS W219 04-10",
						"CLS W218 11-18",
						"CLS C257 18-"
					]
				},
				{
					"model": "E class",
					"modelList": [
						"E W210 95-01",
						"E W211 02-09",
						"E W211 02-09 стеклянная крыша",
						"E W207 09-16 cabrio",
						"E W207 09-16 coupe",
						"E W212 09-16",
						"E W213 16-",
						"E W213 17- cabrio"
					]
				},
				{
					"model": "G class",
					"modelList": [
						"G 80-18",
						"G 18-"
					]
				},
				{
					"model": "GELANDEWAGEN",
					"modelList": [
						"GELANDEWAGEN 80-18",
						"GELANDEWAGEN 18-"
					]
				},
				{
					"model": "GL class",
					"modelList": [
						"GL W164 06-11",
						"GL W166 11-15"
					]
				},
				{
					"model": "GLA class",
					"modelList": [
						"GLA 13-20",
						"GLA 20-"
					]
				},
				{
					"model": "GLB class",
					"modelList": [
						"GLB 19- (X247)"
					]
				},
				{
					"model": "GLC class",
					"modelList": [
						"GLC 15-22 (X253)",
						"GLC 16- (C253 CPE) ",
						"GLC 22- (X254)"
					]
				},
				{
					"model": "GLE class",
					"modelList": [
						"GLE 15-19",
						"GLE 15-19 coupe",
						"GLE 19- ",
						"GLE 19- coupe"
					]
				},
				{
					"model": "GLK class",
					"modelList": [
						"GLK 08-15"
					]
				},
				{
					"model": "GLS class",
					"modelList": [
						"GLS 15-",
						"GLS 20-"
					]
				},
				{
					"model": "L309-L613",
					"modelList": [
						"309-L613 80-85 (219x78)"
					]
				},
				{
					"model": "L406-L608",
					"modelList": [
						"L406-L608 65-86 высокий (188x79)",
						"L406-L608 65-86 низкий (188x67)"
					]
				},
				{
					"model": "M class",
					"modelList": [
						"M W163 98-05",
						"M W164 05-11",
						"M W166 11-15"
					]
				},
				{
					"model": "MB100",
					"modelList": [
						"MB100 81-96 (162x73)"
					]
				},
				{
					"model": "R class",
					"modelList": [
						"R W251 06-13"
					]
				},
				{
					"model": "S class",
					"modelList": [
						"S W140 91-97",
						"S W140 92-99 coupe",
						"S W220 98-05",
						"S W221 05-12",
						"S W222 13-",
						"S W222 15-21 Coupe/Cabriolet",
						"S W223 20-"
					]
				},
				{
					"model": "SL class",
					"modelList": [
						"SL 89-01",
						"SL 01-12",
						"SL 12-"
					]
				},
				{
					"model": "SLK class",
					"modelList": [
						"SLK W170 96-04",
						"SLK W171 04-11",
						"SLK W172 11-"
					]
				},
				{
					"model": "SLS class",
					"modelList": [
						"SLS 10-14"
					]
				},
				{
					"model": "SPRINTER",
					"modelList": [
						"SPRINTER 94-05 высокая кабина (167x92)",
						"SPRINTER 94-05 низкая кабина (167x89)",
						"SPRINTER 06-18",
						"SPRINTER CLASSIC 13- российская сборка",
						"SPRINTER 18-"
					]
				},
				{
					"model": "VANEO",
					"modelList": [
						"VANEO 02-06"
					]
				},
				{
					"model": "VARIO",
					"modelList": [
						"VARIO 508, 608, 813, 814, 1114 83-97 (189x76)",
						"VARIO 507, 609, 709, 811, 814 T2 86-13 (188x95)"
					]
				},
				{
					"model": "VIANO",
					"modelList": [
						"VIANO 95-03",
						"VIANO 03-14",
						"VIANO 14-"
					]
				},
				{
					"model": "VITO",
					"modelList": [
						"VITO 95-03",
						"VITO 03-14",
						"VITO 14-"
					]
				},
				{
					"model": "W123",
					"modelList": [
						"W123 76-85",
						"W123 76-86 coupe"
					]
				},
				{
					"model": "W124",
					"modelList": [
						"W124 85-96",
						"W124 86-95 coupe"
					]
				},
				{
					"model": "W126",
					"modelList": [
						"W126 80-91",
						"W126 80-91 правый руль",
						"W126 81-93 coupe"
					]
				},
				{
					"model": "W129",
					"modelList": [
						"W129 89-01"
					]
				},
				{
					"model": "W140",
					"modelList": [
						"W140 91-97",
						"W140 91-99 coupe"
					]
				},
				{
					"model": "W163",
					"modelList": [
						"W163 98-05"
					]
				},
				{
					"model": "W164",
					"modelList": [
						"W164 05-11"
					]
				},
				{
					"model": "W166",
					"modelList": [
						"W166 11-15"
					]
				},
				{
					"model": "W167",
					"modelList": [
						"W167 19-"
					]
				},
				{
					"model": "W168",
					"modelList": [
						"W168 97-04"
					]
				},
				{
					"model": "W169",
					"modelList": [
						"W169 04-12"
					]
				},
				{
					"model": "W170",
					"modelList": [
						"W170 96-04"
					]
				},
				{
					"model": "W171",
					"modelList": [
						"W171 04-11"
					]
				},
				{
					"model": "W172",
					"modelList": [
						"W172 11-"
					]
				},
				{
					"model": "W176",
					"modelList": [
						"W176 12-"
					]
				},
				{
					"model": "W177",
					"modelList": [
						"W177 18-"
					]
				},
				{
					"model": "W201",
					"modelList": [
						"W201 83-85",
						"W201 85-93 плавающая щетка"
					]
				},
				{
					"model": "W202",
					"modelList": [
						"W202 93-00"
					]
				},
				{
					"model": "W203",
					"modelList": [
						"W203 00-07",
						"W203 00-10 coupe"
					]
				},
				{
					"model": "W204",
					"modelList": [
						"W204 07-14",
						"W204 11-14 coupe"
					]
				},
				{
					"model": "W205",
					"modelList": [
						"W205 14-",
						"W205 16- coupe"
					]
				},
				{
					"model": "W206",
					"modelList": [
						"W206 21-"
					]
				},
				{
					"model": "W207",
					"modelList": [
						"W207 09-16 cabrio",
						"W207 09-16 coupe"
					]
				},
				{
					"model": "W208",
					"modelList": [
						"W208 97-02"
					]
				},
				{
					"model": "W209",
					"modelList": [
						"W209 02-09"
					]
				},
				{
					"model": "W210",
					"modelList": [
						"W210 95-01"
					]
				},
				{
					"model": "W211",
					"modelList": [
						"W211 02-09",
						"W211 02-09 стеклянная крыша"
					]
				},
				{
					"model": "W212",
					"modelList": [
						"W212 09-16"
					]
				},
				{
					"model": "W213",
					"modelList": [
						"W213 16-",
						"W213 17- cabrio"
					]
				},
				{
					"model": "W215",
					"modelList": [
						"W215 99-06"
					]
				},
				{
					"model": "W216",
					"modelList": [
						"W216 06-13"
					]
				},
				{
					"model": "W218",
					"modelList": [
						"W218 11-18"
					]
				},
				{
					"model": "W219",
					"modelList": [
						"W219 04-10"
					]
				},
				{
					"model": "W220",
					"modelList": [
						"W220 98-05"
					]
				},
				{
					"model": "W221",
					"modelList": [
						"W221 05-12"
					]
				},
				{
					"model": "W222",
					"modelList": [
						"W222 13-",
						"S W222 15-21 Coupe/Cabriolet"
					]
				},
				{
					"model": "W223",
					"modelList": [
						"W223 20-"
					]
				},
				{
					"model": "W230",
					"modelList": [
						"W230 01-12"
					]
				},
				{
					"model": "W231",
					"modelList": [
						"W231 12-"
					]
				},
				{
					"model": "W245",
					"modelList": [
						"W245 04-11"
					]
				},
				{
					"model": "W246",
					"modelList": [
						"W246 11-"
					]
				},
				{
					"model": "W251",
					"modelList": [
						"W251 06-13"
					]
				},
				{
					"model": "W447",
					"modelList": [
						"W447 14-"
					]
				},
				{
					"model": "W638",
					"modelList": [
						"W638 95-03"
					]
				},
				{
					"model": "W639",
					"modelList": [
						"W639 03-14"
					]
				},
				{
					"model": "X247",
					"modelList": [
						"X247 19- (GLB)"
					]
				},
				{
					"model": "X class",
					"modelList": [
						"X class 17-"
					]
				}
			]
		},
		{
			"car": "MERCEDES TRUCKS",
			"models": [
				{
					"model": "ACTROS",
					"modelList": [
						"ACTROS 96-12",
						"ACTROS 960.820 11- (209x89)",
						"ACTROS 960.840 11- (231x89)"
					]
				},
				{
					"model": "ATEGO",
					"modelList": [
						"ATEGO 98-"
					]
				},
				{
					"model": "AXOR",
					"modelList": [
						"AXOR 98-"
					]
				}
			]
		},
		{
			"car": "MINI",
			"models": [
				{
					"model": "CLUBMAN",
					"modelList": [
						"CLUBMAN 07-15 (R55)",
						"CLUBMAN 15- (F54)"
					]
				},
				{
					"model": "COOPER",
					"modelList": [
						"COOPER 00-06 (R50/52/53)",
						"COOPER 07-13 (R56)",
						"COOPER 14- (F55/56)"
					]
				},
				{
					"model": "COUNTRYMAN",
					"modelList": [
						"COUNTRYMAN 10-17 (R60)",
						"COUNTRYMAN 17- (F60)"
					]
				},
				{
					"model": "COUPE",
					"modelList": [
						"COUPE 11-15 (R58)"
					]
				},
				{
					"model": "PACEMAN",
					"modelList": [
						"PACEMAN 13-16 (R61)"
					]
				},
				{
					"model": "ROADSTER",
					"modelList": [
						"ROADSTER 12-15 (R59)"
					]
				}
			]
		},
		{
			"car": "MITSUBISHI",
			"models": [
				{
					"model": "3000 GT",
					"modelList": [
						"3000 GT 90-00"
					]
				},
				{
					"model": "AIRTREK",
					"modelList": [
						"AIRTREK 01-07 правый руль"
					]
				},
				{
					"model": "ASX",
					"modelList": [
						"ASX 10-"
					]
				},
				{
					"model": "ATTRAGE",
					"modelList": [
						"ATTRAGE 15-"
					]
				},
				{
					"model": "CANTER",
					"modelList": [
						"CANTER fe300 85-92 (150x69)",
						"CANTER fe400 85-92 широкая кабина (180x74)",
						"CANTER fe500 92-02 стандартная кабина (154x72)",
						"CANTER fe510 92-02 высокая кабина (154х76)",
						"CANTER fe600 92-02 широкая кабина (184х75)",
						"CANTER fe700 01-12 стандартная кабина (152x68)",
						"CANTER fe710 01-12 высокая кабина (153x74)",
						"CANTER fe800 01-12 (182x74)"
					]
				},
				{
					"model": "CANTER российская сборка",
					"modelList": [
						"CANTER 10- FUSO (182x74)"
					]
				},
				{
					"model": "CARISMA",
					"modelList": [
						"CARISMA 95-03"
					]
				},
				{
					"model": "COLT",
					"modelList": [
						"COLT 84-88",
						"COLT 88-92",
						"COLT 92-95",
						"COLT 95-04",
						"COLT 04-09 5d",
						"COLT 05-12 3d"
					]
				},
				{
					"model": "DELICA",
					"modelList": [
						"DELICA 95-07"
					]
				},
				{
					"model": "ECLIPSE",
					"modelList": [
						"ECLIPSE 89-95",
						"ECLIPSE 96-99",
						"ECLIPSE 00-06 COUPE",
						"ECLIPSE 06-11 COUPE"
					]
				},
				{
					"model": "ECLIPSE CROSS",
					"modelList": [
						"ECLIPSE CROSS 18-"
					]
				},
				{
					"model": "FUSO CANTER",
					"modelList": [
						"FUSO CANTER 10- (182x74)"
					]
				},
				{
					"model": "GALANT",
					"modelList": [
						"GALANT 84-88",
						"GALANT 88-92 4d",
						"GALANT 88-92 5d",
						"GALANT 93-96",
						"GALANT 97-06",
						"GALANT 99-03 usa",
						"GALANT 03-12 (IX) SEDAN",
						"GALANT 04-12 usa"
					]
				},
				{
					"model": "GRANDIS",
					"modelList": [
						"GRANDIS 04-12"
					]
				},
				{
					"model": "L200",
					"modelList": [
						"L200 87-96",
						"L200 96-06",
						"L200 06-15",
						"L200 15-"
					]
				},
				{
					"model": "L300",
					"modelList": [
						"L300 80-86",
						"L300 87-97"
					]
				},
				{
					"model": "L400",
					"modelList": [
						"L400 95-07"
					]
				},
				{
					"model": "LANCER",
					"modelList": [
						"LANCER 84-88",
						"LANCER 88-92",
						"LANCER 92-02 est",
						"LANCER 92-95",
						"LANCER 96-02",
						"LANCER 03-07",
						"LANCER 07-17",
						"LANCER 17-"
					]
				},
				{
					"model": "MIRAGE",
					"modelList": [
						"MIRAGE 84-88",
						"MIRAGE 92-95",
						"MIRAGE 96-00",
						"MIRAGE 13-"
					]
				},
				{
					"model": "MONTERO",
					"modelList": [
						"MONTERO 83-91",
						"MONTERO 91-00",
						"MONTERO 00-06",
						"MONTERO 06-"
					]
				},
				{
					"model": "MONTERO SPORT",
					"modelList": [
						"MONTERO SPORT 97-08"
					]
				},
				{
					"model": "OUTLANDER",
					"modelList": [
						"OUTLANDER 03-07",
						"OUTLANDER 07-12",
						"OUTLANDER 13- н.в.",
						"OUTLANDER 21-"
					]
				},
				{
					"model": "PAJERO",
					"modelList": [
						"PAJERO 83-91",
						"PAJERO 91-00",
						"PAJERO 00-"
					]
				},
				{
					"model": "PAJERO JUNIOR",
					"modelList": [
						"PAJERO JUNIOR 95-98"
					]
				},
				{
					"model": "PAJERO PININ",
					"modelList": [
						"PAJERO PININ 99-05"
					]
				},
				{
					"model": "PAJERO SPORT",
					"modelList": [
						"PAJERO SPORT 97-08",
						"PAJERO SPORT 08-16",
						"PAJERO SPORT 16-"
					]
				},
				{
					"model": "RVR",
					"modelList": [
						"RVR 91-97 правый руль",
						"RVR 98-04 правый руль"
					]
				},
				{
					"model": "SHOGUN",
					"modelList": [
						"SHOGUN 83-91",
						"SHOGUN 91-00"
					]
				},
				{
					"model": "SIGMA",
					"modelList": [
						"SIGMA 84-88",
						"SIGMA 91-95"
					]
				},
				{
					"model": "SPACE GEAR",
					"modelList": [
						"SPACE GEAR 95-07"
					]
				},
				{
					"model": "SPACE RUNNER",
					"modelList": [
						"SPACE RUNNER 91-99",
						"SPACE RUNNER 00-03"
					]
				},
				{
					"model": "SPACE STAR",
					"modelList": [
						"SPACE STAR 98-05",
						"SPACE STAR 13-"
					]
				},
				{
					"model": "SPACE WAGON",
					"modelList": [
						"SPACE WAGON 83-90",
						"SPACE WAGON 91-98",
						"SPACE WAGON 99-05"
					]
				}
			]
		},
		{
			"car": "NAVECO TRUCK",
			"models": [
				{
					"model": "C300",
					"modelList": [
						"C300 13- (1755мм х 800мм)"
					]
				}
			]
		},
		{
			"car": "NISSAN",
			"models": [
				{
					"model": "100 NX",
					"modelList": [
						"100 NX 91-95"
					]
				},
				{
					"model": "200 SX",
					"modelList": [
						"200 SX 85-89",
						"200 SX 89-94",
						"200 SX 94-01"
					]
				},
				{
					"model": "300 ZX",
					"modelList": [
						"300 ZX 84-90",
						"300 ZX 90-94"
					]
				},
				{
					"model": "350 Z",
					"modelList": [
						"350 Z 03-09"
					]
				},
				{
					"model": "370 Z",
					"modelList": [
						"370 Z 09-"
					]
				},
				{
					"model": "AD",
					"modelList": [
						"AD 90-98 (y10/n14) правый руль",
						"AD 99-06 (y11) правый руль",
						"AD 06- (y12) правый руль"
					]
				},
				{
					"model": "ALMERA",
					"modelList": [
						"ALMERA 95-00",
						"ALMERA 00-01 японская сборка",
						"ALMERA 00-06 (n16)",
						"ALMERA CLASSIC 06-13",
						"ALMERA 12- иностранная сборка",
						"ALMERA 12- российская сборка"
					]
				},
				{
					"model": "ALMERA TINO",
					"modelList": [
						"ALMERA TINO 00-06"
					]
				},
				{
					"model": "ALTIMA",
					"modelList": [
						"ALTIMA 93-97",
						"ALTIMA 98-01",
						"ALTIMA 02-06",
						"ALTIMA 07-13",
						"ALTIMA 13-18"
					]
				},
				{
					"model": "ARMADA",
					"modelList": [
						"ARMADA 04-10"
					]
				},
				{
					"model": "AVENIR",
					"modelList": [
						"AVENIR 90-97 правый руль",
						"AVENIR 98-05 правый руль"
					]
				},
				{
					"model": "AXXESS",
					"modelList": [
						"AXXESS 89-95 правый руль"
					]
				},
				{
					"model": "BASSARA",
					"modelList": [
						"BASSARA 99-03 правый руль"
					]
				},
				{
					"model": "BLUEBIRD",
					"modelList": [
						"BLUEBIRD 80-84",
						"BLUEBIRD 84-86",
						"BLUEBIRD 86-90",
						"BLUEBIRD 91-97 (U13) правый руль",
						"BLUEBIRD 95-98 (U14) правый руль"
					]
				},
				{
					"model": "CABSTAR",
					"modelList": [
						"CABSTAR 82-93",
						"CABSTAR 93-07",
						"CABSTAR 07-"
					]
				},
				{
					"model": "CEFIRO",
					"modelList": [
						"CEFIRO 88-94 (A31)",
						"CEFIRO 88-94 (A31) правый руль",
						"CEFIRO 94-98 (A32)",
						"CEFIRO 98-03 (A33)",
						"CEFIRO 03-08 (J31)"
					]
				},
				{
					"model": "CHERRY",
					"modelList": [
						"CHERRY 82-88"
					]
				},
				{
					"model": "CONDOR",
					"modelList": [
						"CONDOR 83-93"
					]
				},
				{
					"model": "CUBE",
					"modelList": [
						"CUBE 98-02",
						"CUBE 02-08",
						"CUBE 08-12"
					]
				},
				{
					"model": "ELGRAND",
					"modelList": [
						"ELGRAND 97-02 (E50)",
						"ELGRAND 02-10 (E51)",
						"ELGRAND 10-20 (E52)"
					]
				},
				{
					"model": "FUGA",
					"modelList": [
						"FUGA 04-09",
						"FUGA 09-"
					]
				},
				{
					"model": "GT-R",
					"modelList": [
						"GT-R I 07-11"
					]
				},
				{
					"model": "INTERSTAR",
					"modelList": [
						"INTERSTAR 97-10",
						"INTERSTAR 10-"
					]
				},
				{
					"model": "JUKE",
					"modelList": [
						"JUKE 10-19",
						"JUKE 20- "
					]
				},
				{
					"model": "LAFESTA",
					"modelList": [
						"LAFESTA 04-12 прав.руль",
						"LAFESTA 11-18 прав.руль"
					]
				},
				{
					"model": "LAUREL",
					"modelList": [
						"LAUREL 85-89 левый руль"
					]
				},
				{
					"model": "LEAF",
					"modelList": [
						"LEAF 10-17 (ZE0)",
						"LEAF 17- (ZE1)"
					]
				},
				{
					"model": "MAXIMA",
					"modelList": [
						"MAXIMA 89-95",
						"MAXIMA 95-00 (A32)",
						"MAXIMA 00-06 (A33)"
					]
				},
				{
					"model": "MICRA",
					"modelList": [
						"MICRA 83-92",
						"MICRA 92-02",
						"MICRA 03-10",
						"MICRA 05-08 cabrio",
						"MICRA 11-17",
						"MICRA 17-"
					]
				},
				{
					"model": "MURANO",
					"modelList": [
						"MURANO 03-08",
						"MURANO 08-15",
						"MURANO 15-"
					]
				},
				{
					"model": "NAVARA",
					"modelList": [
						"NAVARA 86-93",
						"NAVARA 05-15",
						"NAVARA 14-"
					]
				},
				{
					"model": "NOTE",
					"modelList": [
						"NOTE 06-12",
						"NOTE 13-20",
						"NOTE 20-"
					]
				},
				{
					"model": "NP300",
					"modelList": [
						"NP300 08-15",
						"NP300 15-"
					]
				},
				{
					"model": "NV200",
					"modelList": [
						"NV200 09-"
					]
				},
				{
					"model": "NV400",
					"modelList": [
						"NV400 11-"
					]
				},
				{
					"model": "PATHFINDER",
					"modelList": [
						"PATHFINDER 97-05",
						"PATHFINDER 05-14",
						"PATHFINDER 12-20",
						"PATHFINDER 21-"
					]
				},
				{
					"model": "PATROL",
					"modelList": [
						"PATROL 80-98",
						"PATROL 98-10 (Y61)",
						"PATROL 10- (Y62)"
					]
				},
				{
					"model": "PIXO",
					"modelList": [
						"PIXO 09-"
					]
				},
				{
					"model": "PRAIRIE",
					"modelList": [
						"PRAIRIE 82-88",
						"PRAIRIE 88-98 (M11)",
						"PRAIRIE 98-04 (M12)"
					]
				},
				{
					"model": "PRIMASTAR",
					"modelList": [
						"PRIMASTAR 01-14"
					]
				},
				{
					"model": "PRIMERA",
					"modelList": [
						"PRIMERA 90-96",
						"PRIMERA 90-97 est",
						"PRIMERA 96-01",
						"PRIMERA 02-07"
					]
				},
				{
					"model": "PULSAR",
					"modelList": [
						"PULSAR 82-88"
					]
				},
				{
					"model": "RNESSA",
					"modelList": [
						"RNESSA 97-01"
					]
				},
				{
					"model": "QASHQAI",
					"modelList": [
						"QASHQAI 06-13",
						"QASHQAI 14-",
						"QASHQAI III 21-"
					]
				},
				{
					"model": "QUEST",
					"modelList": [
						"QUEST 10-18"
					]
				},
				{
					"model": "SENTRA",
					"modelList": [
						"SENTRA 13-"
					]
				},
				{
					"model": "SERENA",
					"modelList": [
						"SERENA 92-01 c23",
						"SERENA 99-05 c24",
						"SERENA 05-10 c25",
						"SERENA 10-16 c26",
						"SERENA 16- c27"
					]
				},
				{
					"model": "SKYLINE",
					"modelList": [
						"R32 89-94",
						"R34 98-02"
					]
				},
				{
					"model": "STANZA",
					"modelList": [
						"STANZA 81-86",
						"STANZA 81-86 3d",
						"STANZA 86-90 (t12)",
						"STANZA 89-92 (u12)"
					]
				},
				{
					"model": "SUNNY",
					"modelList": [
						"SUNNY 77-81",
						"SUNNY 77-81 coupe",
						"SUNNY 81-85 (b11)",
						"SUNNY 81-85 (b11) coupe",
						"SUNNY 86-91 (b12)",
						"SUNNY 86-91 (b12) coupe ",
						"SUNNY 86-91 (n13)",
						"SUNNY 91-95 (b13)",
						"SUNNY 91-95 (b13) coupe",
						"SUNNY 91-95 (b13) coupe правый руль",
						"SUNNY 91-95 (n14)",
						"SUNNY 91-99 (y10) est",
						"SUNNY 95-98 (b14) правый руль",
						"SUNNY 98-05 (b15) правый руль",
						"SUNNY 00-06 (n16) правый руль"
					]
				},
				{
					"model": "TEANA",
					"modelList": [
						"TEANA 04-08",
						"TEANA 08-14",
						"TEANA 14-20"
					]
				},
				{
					"model": "TERRANO",
					"modelList": [
						"TERRANO 86-93",
						"TERRANO 93-04",
						"TERRANO 14-"
					]
				},
				{
					"model": "TIIDA",
					"modelList": [
						"TIIDA 07-14",
						"TIIDA 15-"
					]
				},
				{
					"model": "TITAN",
					"modelList": [
						"TITAN 04-10"
					]
				},
				{
					"model": "URVAN",
					"modelList": [
						"URVAN 87-97"
					]
				},
				{
					"model": "VANETTE",
					"modelList": [
						"VANETTE 82-87 c20/121/220",
						"VANETTE 84-95 c22",
						"VANETTE 92-01",
						"VANETTE 01-10",
						"VANETTE 11-16",
						"VANETTE 16-"
					]
				},
				{
					"model": "WINDROAD",
					"modelList": [
						"WINDROAD 90-98 (y10/n14) правый руль",
						"WINDROAD 99-05 (y11) правый руль",
						"WINDROAD 05-18 (y12) правый руль"
					]
				},
				{
					"model": "X-TERRA",
					"modelList": [
						"X-TERRA 00-05",
						"X-TERRA 05-15"
					]
				},
				{
					"model": "X-TRAIL",
					"modelList": [
						"X-TRAIL 01-07",
						"X-TRAIL 07-13",
						"X-TRAIL 14-"
					]
				}
			]
		},
		{
			"car": "OPEL",
			"models": [
				{
					"model": "AGILA",
					"modelList": [
						"AGILA 00-08",
						"AGILA 08-15"
					]
				},
				{
					"model": "AMPERA",
					"modelList": [
						"AMPERA 12-16"
					]
				},
				{
					"model": "ANTARA",
					"modelList": [
						"ANTARA 07-15"
					]
				},
				{
					"model": "ASCONA",
					"modelList": [
						"ASCONA 82-88"
					]
				},
				{
					"model": "ASTRA",
					"modelList": [
						"ASTRA F 91-98",
						"ASTRA F 95-01 cabrio",
						"ASTRA G 98-04",
						"ASTRA G 00-05 coupe",
						"ASTRA H 04-09",
						"ASTRA H 05-11 GTC 3d",
						"ASTRA J 10-15",
						"ASTRA J 11-15 GTC 3d",
						"ASTRA K 15-"
					]
				},
				{
					"model": "ASTRA TWIN-TOP",
					"modelList": [
						"ASTRA TWIN-TOP 06-10"
					]
				},
				{
					"model": "CALIBRA",
					"modelList": [
						"CALIBRA 90-98"
					]
				},
				{
					"model": "CARLTON",
					"modelList": [
						"CARLTON 77-83",
						"CARLTON 83-86"
					]
				},
				{
					"model": "COMBO",
					"modelList": [
						"COMBO 93-00",
						"COMBO 01-11",
						"COMBO 12-17",
						"COMBO 18-"
					]
				},
				{
					"model": "COMMODOR",
					"modelList": [
						"COMMODOR 77-82"
					]
				},
				{
					"model": "CORSA",
					"modelList": [
						"CORSA A 82-93",
						"CORSA B 93-00",
						"CORSA C 00-06",
						"CORSA D 06-14",
						"CORSA E 14-"
					]
				},
				{
					"model": "CROSSLAND X",
					"modelList": [
						"CROSSLAND X 17-"
					]
				},
				{
					"model": "FRONTERA",
					"modelList": [
						"FRONTERA A 91-98",
						"FRONTERA B 98-05"
					]
				},
				{
					"model": "GRANDLAND X",
					"modelList": [
						"GRANDLAND X 17-"
					]
				},
				{
					"model": "INSIGNIA",
					"modelList": [
						"INSIGNIA 08-17",
						"INSIGNIA 17-"
					]
				},
				{
					"model": "KADETT",
					"modelList": [
						"KADETT 79-84 D",
						"KADETT 84-91 E"
					]
				},
				{
					"model": "KARL",
					"modelList": [
						"KARL 15-"
					]
				},
				{
					"model": "MERIVA",
					"modelList": [
						"MERIVA 03-10",
						"MERIVA 10-17"
					]
				},
				{
					"model": "MOKKA",
					"modelList": [
						"MOKKA 12-19",
						"MOKKA 21-"
					]
				},
				{
					"model": "MONTEREY",
					"modelList": [
						"MONTEREY 92-05"
					]
				},
				{
					"model": "MOVANO",
					"modelList": [
						"MOVANO 97-10",
						"MOVANO 10-20",
						"MOVANO 21-"
					]
				},
				{
					"model": "OMEGA",
					"modelList": [
						"OMEGA 86-94 A",
						"OMEGA 94-03 B"
					]
				},
				{
					"model": "RECORD",
					"modelList": [
						"RECORD 72-77",
						"RECORD 77-82"
					]
				},
				{
					"model": "SENATOR",
					"modelList": [
						"SENATOR 77-82",
						"SENATOR 82-86",
						"SENATOR 86-94"
					]
				},
				{
					"model": "SIGNUM",
					"modelList": [
						"SIGNUM 03-08"
					]
				},
				{
					"model": "SINTRA",
					"modelList": [
						"SINTRA 97-01"
					]
				},
				{
					"model": "TIGRA",
					"modelList": [
						"TIGRA 94-04",
						"TIGRA 04-09"
					]
				},
				{
					"model": "VECTRA",
					"modelList": [
						"VECTRA A 88-95",
						"VECTRA B 95-02",
						"VECTRA C 02-08"
					]
				},
				{
					"model": "VIVARO",
					"modelList": [
						"VIVARO 01-14",
						"VIVARO 14-18",
						"VIVARO 19-"
					]
				},
				{
					"model": "ZAFIRA",
					"modelList": [
						"ZAFIRA A 98-05",
						"ZAFIRA B 05-11",
						"ZAFIRA B 11-14 российская сборка",
						"ZAFIRA C 11-"
					]
				}
			]
		},
		{
			"car": "PEUGEOT",
			"models": [
				{
					"model": "1007",
					"modelList": [
						"1007 05-09"
					]
				},
				{
					"model": "106",
					"modelList": [
						"106 91-99"
					]
				},
				{
					"model": "107",
					"modelList": [
						"107 05-14"
					]
				},
				{
					"model": "108",
					"modelList": [
						"108 14-"
					]
				},
				{
					"model": "2008",
					"modelList": [
						"2008 12-19",
						"2008 19-"
					]
				},
				{
					"model": "205",
					"modelList": [
						"205 82-98"
					]
				},
				{
					"model": "206",
					"modelList": [
						"206 98-12"
					]
				},
				{
					"model": "206 CC",
					"modelList": [
						"206 CC 00-07 cabrio",
						"206 CC 00-07 coupe"
					]
				},
				{
					"model": "207",
					"modelList": [
						"207 06-12"
					]
				},
				{
					"model": "207 CC",
					"modelList": [
						"207 CC 07-13 cabrio"
					]
				},
				{
					"model": "208",
					"modelList": [
						"208 12-19",
						"208 19-"
					]
				},
				{
					"model": "3008",
					"modelList": [
						"3008 09-16",
						"3008 16-"
					]
				},
				{
					"model": "301",
					"modelList": [
						"301 12-"
					]
				},
				{
					"model": "305",
					"modelList": [
						"305 78-87"
					]
				},
				{
					"model": "306",
					"modelList": [
						"306 92-01",
						"306 92-01 cabrio"
					]
				},
				{
					"model": "307",
					"modelList": [
						"307 01-08"
					]
				},
				{
					"model": "307 CC",
					"modelList": [
						"307 CC 03-09 coupe/cabrio"
					]
				},
				{
					"model": "308",
					"modelList": [
						"308 07-15",
						"308 13-21",
						"308 21-"
					]
				},
				{
					"model": "308 CC",
					"modelList": [
						"308 CC 08-15 cabrio"
					]
				},
				{
					"model": "309",
					"modelList": [
						"309 85-93"
					]
				},
				{
					"model": "4007",
					"modelList": [
						"4007 07-13"
					]
				},
				{
					"model": "4008",
					"modelList": [
						"4008 12-"
					]
				},
				{
					"model": "405",
					"modelList": [
						"405 87-95"
					]
				},
				{
					"model": "406",
					"modelList": [
						"406 95-04",
						"406 97-04 coupe"
					]
				},
				{
					"model": "407",
					"modelList": [
						"407 04-11",
						"407 05-10 coupe"
					]
				},
				{
					"model": "408",
					"modelList": [
						"408 12-"
					]
				},
				{
					"model": "5008",
					"modelList": [
						"5008 09-16",
						"5008 17-"
					]
				},
				{
					"model": "505",
					"modelList": [
						"505 79-86"
					]
				},
				{
					"model": "508",
					"modelList": [
						"508 11-18",
						"508 18-"
					]
				},
				{
					"model": "605",
					"modelList": [
						"605 75-85",
						"605 89-00"
					]
				},
				{
					"model": "607",
					"modelList": [
						"607 00-20"
					]
				},
				{
					"model": "806",
					"modelList": [
						"806 94-00"
					]
				},
				{
					"model": "807",
					"modelList": [
						"807 02-12"
					]
				},
				{
					"model": "BIPPER",
					"modelList": [
						"BIPPER 07-17"
					]
				},
				{
					"model": "BOXER",
					"modelList": [
						"BOXER 94-05",
						"BOXER 06-"
					]
				},
				{
					"model": "EXPERT",
					"modelList": [
						"EXPERT 96-02",
						"EXPERT 06-16",
						"EXPERT 16-"
					]
				},
				{
					"model": "J5",
					"modelList": [
						"J5 82-94"
					]
				},
				{
					"model": "PARTNER",
					"modelList": [
						"PARTNER 96-08",
						"PARTNER 08-18",
						"PARTNER 18-"
					]
				},
				{
					"model": "RCZ",
					"modelList": [
						"RCZ 10-"
					]
				},
				{
					"model": "TRAVELLER",
					"modelList": [
						"TRAVELLER 17-"
					]
				}
			]
		},
		{
			"car": "PLYMOUTH",
			"models": [
				{
					"model": "NEON",
					"modelList": [
						"NEON 95-99"
					]
				}
			]
		},
		{
			"car": "PONTIAC",
			"models": [
				{
					"model": "MONTANA",
					"modelList": [
						"MONTANA 98-02"
					]
				},
				{
					"model": "TRANS SPORT",
					"modelList": [
						"TRANS SPORT 90-96",
						"TRANS SPORT 97-01"
					]
				},
				{
					"model": "VIBE",
					"modelList": [
						"VIBE 03-08",
						"VIBE 08-10"
					]
				}
			]
		},
		{
			"car": "PORSCHE",
			"models": [
				{
					"model": "911",
					"modelList": [
						"911 64-89",
						"911 89-93",
						"911 94-97",
						"911 97-04",
						"911 04-11",
						"911 12-16 cabrio",
						"911 12-16 coupe",
						"911 16- cabrio",
						"911 16- coupe"
					]
				},
				{
					"model": "912",
					"modelList": [
						"912 64-89"
					]
				},
				{
					"model": "918",
					"modelList": [
						"918 13-15"
					]
				},
				{
					"model": "924",
					"modelList": [
						"924 76-87",
						"924 87-88"
					]
				},
				{
					"model": "928",
					"modelList": [
						"928 77-98"
					]
				},
				{
					"model": "944",
					"modelList": [
						"944 82-86",
						"944 87-91 coupe",
						"944 87-91 cabrio"
					]
				},
				{
					"model": "958",
					"modelList": [
						"958 10-17"
					]
				},
				{
					"model": "964",
					"modelList": [
						"964 89-93"
					]
				},
				{
					"model": "968",
					"modelList": [
						"968 91-95"
					]
				},
				{
					"model": "981",
					"modelList": [
						"981 12-16"
					]
				},
				{
					"model": "982",
					"modelList": [
						"982 16-"
					]
				},
				{
					"model": "986",
					"modelList": [
						"986 96-04"
					]
				},
				{
					"model": "987",
					"modelList": [
						"987 04-12"
					]
				},
				{
					"model": "991",
					"modelList": [
						"991 12-16 cabrio",
						"991 12-16 coupe"
					]
				},
				{
					"model": "993",
					"modelList": [
						"993 94-97"
					]
				},
				{
					"model": "996",
					"modelList": [
						"996 97-04"
					]
				},
				{
					"model": "997",
					"modelList": [
						"997 04-11"
					]
				},
				{
					"model": "BOXTER",
					"modelList": [
						"BOXTER 96-04 (986)",
						"BOXTER 04-12 (987)",
						"BOXTER 12-16 (981)",
						"BOXTER 16- (982)"
					]
				},
				{
					"model": "CARRERA",
					"modelList": [
						"CARRERA 64-89",
						"CARRERA 04-07"
					]
				},
				{
					"model": "CAYENNE",
					"modelList": [
						"CAYENNE 02-09",
						"CAYENNE 10-17",
						"CAYENNE 18-",
						"CAYENNE CPE 19-"
					]
				},
				{
					"model": "CAYMAN",
					"modelList": [
						"CAYMAN 96-04 (986)",
						"CAYMAN 04-12 (987)",
						"CAYMAN 13-"
					]
				},
				{
					"model": "MACAN",
					"modelList": [
						"MACAN 14-"
					]
				},
				{
					"model": "PANAMERA",
					"modelList": [
						"PANAMERA 09-16",
						"PANAMERA 16-"
					]
				}
			]
		},
		{
			"car": "RENAULT",
			"models": [
				{
					"model": "ALASKAN",
					"modelList": [
						"ALASKAN 17-"
					]
				},
				{
					"model": "ARKANA",
					"modelList": [
						"ARKANA 19-"
					]
				},
				{
					"model": "CAPTUR",
					"modelList": [
						"CAPTUR 13- европейская сборка",
						"CAPTUR 19-"
					]
				},
				{
					"model": "CHAMADE",
					"modelList": [
						"CHAMADE 88-00"
					]
				},
				{
					"model": "CLIO",
					"modelList": [
						"CLIO 90-98",
						"CLIO 98-05",
						"CLIO 05-12",
						"CLIO 12-19",
						"CLIO 19-"
					]
				},
				{
					"model": "DOKKER",
					"modelList": [
						"DOKKER 12-"
					]
				},
				{
					"model": "DUSTER",
					"modelList": [
						"DUSTER 10-",
						"DUSTER II 18-"
					]
				},
				{
					"model": "ESPACE",
					"modelList": [
						"ESPACE 84-91",
						"ESPACE 91-96",
						"ESPACE 96-02",
						"ESPACE 02-14",
						"ESPACE 15-"
					]
				},
				{
					"model": "FLUENCE",
					"modelList": [
						"FLUENCE 10-"
					]
				},
				{
					"model": "KADJAR",
					"modelList": [
						"KADJAR 15-"
					]
				},
				{
					"model": "KANGOO",
					"modelList": [
						"KANGOO 97-07",
						"KANGOO 07-21",
						"KANGOO 21-"
					]
				},
				{
					"model": "KAPTUR",
					"modelList": [
						"KAPTUR 16- российская сборка"
					]
				},
				{
					"model": "KOLEOS",
					"modelList": [
						"KOLEOS 08-16",
						"KOLEOS 16-"
					]
				},
				{
					"model": "LAGUNA",
					"modelList": [
						"LAGUNA 93-00",
						"LAGUNA 00-07",
						"LAGUNA 07-15",
						"LAGUNA 08-15 coupe"
					]
				},
				{
					"model": "LATITUDE",
					"modelList": [
						"LATITUDE 10-"
					]
				},
				{
					"model": "LOGAN",
					"modelList": [
						"LOGAN I 05-15",
						"LOGAN II 13-"
					]
				},
				{
					"model": "MASCOTT",
					"modelList": [
						"MASCOTT 97-10"
					]
				},
				{
					"model": "MASTER",
					"modelList": [
						"MASTER 80-97",
						"MASTER 97-10",
						"MASTER 10-"
					]
				},
				{
					"model": "MEGANE",
					"modelList": [
						"MEGANE I 95-02",
						"MEGANE I 95-03 coupe",
						"MEGANE II 02-08",
						"MEGANE II 03-08 coupe/cabrio",
						"MEGANE III 08-15 coupe",
						"MEGANE III 08-16",
						"MEGANE III 10-15 cabrio",
						"MEGANE IV 16-"
					]
				},
				{
					"model": "MEGANE SCENIC",
					"modelList": [
						"MEGANE SCENIC I 96-03",
						"MEGANE SCENIC II 03-09",
						"MEGANE SCENIC III 09-16",
						"MEGANE SCENIC IV 16-"
					]
				},
				{
					"model": "MODUS",
					"modelList": [
						"MODUS 04-12"
					]
				},
				{
					"model": "NEVADA",
					"modelList": [
						"NEVADA 86-96"
					]
				},
				{
					"model": "R11",
					"modelList": [
						"R11 82-89"
					]
				},
				{
					"model": "R19",
					"modelList": [
						"R19 88-00",
						"R19 88-96 cabrio"
					]
				},
				{
					"model": "R21",
					"modelList": [
						"R21 86-96"
					]
				},
				{
					"model": "R25",
					"modelList": [
						"R25 84-93"
					]
				},
				{
					"model": "R4",
					"modelList": [
						"R4 61-80"
					]
				},
				{
					"model": "R5",
					"modelList": [
						"R5 71-85",
						"R5 85-90"
					]
				},
				{
					"model": "R9",
					"modelList": [
						"R9 82-89"
					]
				},
				{
					"model": "SAFRANE",
					"modelList": [
						"SAFRANE 92-02"
					]
				},
				{
					"model": "SANDERO",
					"modelList": [
						"SANDERO 07-13",
						"SANDERO 14-"
					]
				},
				{
					"model": "SYMBOL",
					"modelList": [
						"SYMBOL 98-08",
						"SYMBOL 08-12"
					]
				},
				{
					"model": "TALISMAN",
					"modelList": [
						"TALISMAN 15-"
					]
				},
				{
					"model": "THALIA",
					"modelList": [
						"THALIA 03-08",
						"THALIA 08-13"
					]
				},
				{
					"model": "TRAFFIC",
					"modelList": [
						"TRAFFIC 81-00",
						"TRAFFIC 01-14",
						"TRAFFIC 14-"
					]
				},
				{
					"model": "TWINGO",
					"modelList": [
						"TWINGO 93-07",
						"TWINGO 07-14",
						"TWINGO 14-"
					]
				},
				{
					"model": "VEL SATIS",
					"modelList": [
						"VEL SATIS 01-09"
					]
				}
			]
		},
		{
			"car": "RENAULT TRUCKS",
			"models": [
				{
					"model": "C TRUCK",
					"modelList": [
						"C TRUCK 14-"
					]
				},
				{
					"model": "D TRUCK",
					"modelList": [
						"D TRUCK 14-"
					]
				},
				{
					"model": "K TRUCK",
					"modelList": [
						"K TRUCK 14-"
					]
				},
				{
					"model": "MAGNUM",
					"modelList": [
						"MAGNUM 91-14"
					]
				},
				{
					"model": "MAJOR",
					"modelList": [
						"MAJOR 80-96"
					]
				},
				{
					"model": "MAXITY",
					"modelList": [
						"MAXITY 07-"
					]
				},
				{
					"model": "MIDLUM",
					"modelList": [
						"MIDLUM 99-"
					]
				},
				{
					"model": "PREMIUM",
					"modelList": [
						"PREMIUM 96-"
					]
				},
				{
					"model": "T TRUCK",
					"modelList": [
						"T TRUCK 14-"
					]
				}
			]
		},
		{
			"car": "ROVER",
			"models": [
				{
					"model": "200",
					"modelList": [
						"200 84-89",
						"200 89-95",
						"200 95-99"
					]
				},
				{
					"model": "25",
					"modelList": [
						"25 00-05"
					]
				},
				{
					"model": "400",
					"modelList": [
						"400 89-95",
						"400 95-00"
					]
				},
				{
					"model": "416",
					"modelList": [
						"416 90-95"
					]
				},
				{
					"model": "45",
					"modelList": [
						"45 99-05"
					]
				},
				{
					"model": "600",
					"modelList": [
						"600 93-98"
					]
				},
				{
					"model": "75",
					"modelList": [
						"75 98-05"
					]
				},
				{
					"model": "800",
					"modelList": [
						"800 86-91",
						"800 91-98"
					]
				},
				{
					"model": "CITYROVER",
					"modelList": [
						"CITYROVER 03-05"
					]
				},
				{
					"model": "MAESTRO",
					"modelList": [
						"MAESTRO 82-94"
					]
				},
				{
					"model": "MG",
					"modelList": [
						"MG F SPORTS 95-99"
					]
				}
			]
		},
		{
			"car": "SAAB",
			"models": [
				{
					"model": "900",
					"modelList": [
						"900 78-93",
						"900 94-02",
						"900 94-02 cabrio"
					]
				},
				{
					"model": "9000",
					"modelList": [
						"9000 85-98"
					]
				},
				{
					"model": "9-3",
					"modelList": [
						"9-3 94-02",
						"9-3 02-12",
						"9-3 03-12 cabrio"
					]
				},
				{
					"model": "9-5",
					"modelList": [
						"9-5 97-09",
						"9-5 10-12"
					]
				},
				{
					"model": "9-7x",
					"modelList": [
						"9-7x 05-09"
					]
				}
			]
		},
		{
			"car": "SATURN",
			"models": [
				{
					"model": "VUE",
					"modelList": [
						"VUE 02-07",
						"VUE 07-09"
					]
				}
			]
		},
		{
			"car": "SCANIA",
			"models": [
				{
					"model": "3 series",
					"modelList": [
						"3 series 79-94"
					]
				},
				{
					"model": "4 series",
					"modelList": [
						"4 series 95-07"
					]
				},
				{
					"model": "5 (P / R / G) series",
					"modelList": [
						"5 (P / R / G) series 04-18 (230x87)"
					]
				},
				{
					"model": "6 (P / R / G / S / L) series",
					"modelList": [
						"6 (P / R / G / S / L) series 16- (238x90)"
					]
				}
			]
		},
		{
			"car": "SCION",
			"models": [
				{
					"model": "XA",
					"modelList": [
						"XA 04-06"
					]
				},
				{
					"model": "XB",
					"modelList": [
						"XB 04-06",
						"XB 04-06 правый руль",
						"XB 07-15"
					]
				},
				{
					"model": "XD",
					"modelList": [
						"XD 07-14"
					]
				}
			]
		},
		{
			"car": "SEAT",
			"models": [
				{
					"model": "ALHAMBRA",
					"modelList": [
						"ALHAMBRA 95-10",
						"ALHAMBRA 10-"
					]
				},
				{
					"model": "ALTEA",
					"modelList": [
						"ALTEA 04-13"
					]
				},
				{
					"model": "ARONA",
					"modelList": [
						"ARONA 17-"
					]
				},
				{
					"model": "AROSA",
					"modelList": [
						"AROSA 97-04"
					]
				},
				{
					"model": "CORDOBA",
					"modelList": [
						"CORDOBA 93-00",
						"CORDOBA 00-04",
						"CORDOBA 03-08 sed"
					]
				},
				{
					"model": "EXEO",
					"modelList": [
						"EXEO 08-13"
					]
				},
				{
					"model": "IBIZA",
					"modelList": [
						"IBIZA 85-93",
						"IBIZA 93-99",
						"IBIZA 99-02",
						"IBIZA 02-08",
						"IBIZA 08-17",
						"IBIZA 17-"
					]
				},
				{
					"model": "INCA",
					"modelList": [
						"INCA 96-99"
					]
				},
				{
					"model": "LEON",
					"modelList": [
						"LEON 99-05",
						"LEON 05-12",
						"LEON 12-20",
						"LEON 20-"
					]
				},
				{
					"model": "MARBELLA",
					"modelList": [
						"MARBELLA 80-03"
					]
				},
				{
					"model": "TOLEDO",
					"modelList": [
						"TOLEDO 91-98",
						"TOLEDO 98-04",
						"TOLEDO 04-09",
						"TOLEDO 12-18"
					]
				}
			]
		},
		{
			"car": "SKODA",
			"models": [
				{
					"model": "FABIA",
					"modelList": [
						"FABIA 99-07",
						"FABIA 07-14",
						"FABIA 14-"
					]
				},
				{
					"model": "FAVORIT",
					"modelList": [
						"FAVORIT 89-95"
					]
				},
				{
					"model": "FELICIA",
					"modelList": [
						"FELICIA 95-01"
					]
				},
				{
					"model": "FORMAN",
					"modelList": [
						"FORMAN 89-95"
					]
				},
				{
					"model": "KODIAQ",
					"modelList": [
						"KODIAQ 17-"
					]
				},
				{
					"model": "KOROQ",
					"modelList": [
						"KOROQ 17-"
					]
				},
				{
					"model": "OCTAVIA",
					"modelList": [
						"OCTAVIA 97-04",
						"OCTAVIA 04-10 TOUR",
						"OCTAVIA 04-13 A5",
						"OCTAVIA 13- A7",
						"OCTAVIA IV 20- "
					]
				},
				{
					"model": "PRAKTIK",
					"modelList": [
						"PRAKTIK 06-15"
					]
				},
				{
					"model": "RAPID",
					"modelList": [
						"RAPID 84-88",
						"RAPID 88-90",
						"RAPID 12-19",
						"RAPID 20- Liftback"
					]
				},
				{
					"model": "ROOMSTER",
					"modelList": [
						"ROOMSTER 06-15"
					]
				},
				{
					"model": "SUPERB",
					"modelList": [
						"SUPERB 02-08",
						"SUPERB 08-15",
						"SUPERB 15-"
					]
				},
				{
					"model": "YETI",
					"modelList": [
						"YETI 09-18"
					]
				}
			]
		},
		{
			"car": "SMART",
			"models": [
				{
					"model": "FORFOUR",
					"modelList": [
						"FORFOUR 04-09",
						"FORFOUR 14-"
					]
				},
				{
					"model": "FORTWO",
					"modelList": [
						"FORTWO 07-14",
						"FORTWO 14-"
					]
				},
				{
					"model": "ROADSTER",
					"modelList": [
						"ROADSTER 03-05"
					]
				},
				{
					"model": "SMART",
					"modelList": [
						"SMART 98-06"
					]
				}
			]
		},
		{
			"car": "SSANG YONG",
			"models": [
				{
					"model": "ACTYON",
					"modelList": [
						"ACTYON 06-09",
						"ACTYON 10-"
					]
				},
				{
					"model": "ISTANA",
					"modelList": [
						"ISTANA 95-03"
					]
				},
				{
					"model": "KORANDO",
					"modelList": [
						"KORANDO 88-96",
						"KORANDO 97-06",
						"KORANDO 10-"
					]
				},
				{
					"model": "KYRON",
					"modelList": [
						"KYRON 05-15"
					]
				},
				{
					"model": "MUSSO",
					"modelList": [
						"MUSSO 95-06",
						"MUSSO 18-"
					]
				},
				{
					"model": "NEW ACTYON",
					"modelList": [
						"NEW ACTYON 10-"
					]
				},
				{
					"model": "REXTON",
					"modelList": [
						"REXTON 02-17",
						"REXTON 18-"
					]
				},
				{
					"model": "RODIUS",
					"modelList": [
						"RODIUS 05-13",
						"RODIUS 13-"
					]
				},
				{
					"model": "STAVIC",
					"modelList": [
						"STAVIC 13-"
					]
				},
				{
					"model": "TIVOLI",
					"modelList": [
						"TIVOLI 15-"
					]
				},
				{
					"model": "XLV",
					"modelList": [
						"XLV 15-"
					]
				}
			]
		},
		{
			"car": "SUBARU",
			"models": [
				{
					"model": "FORESTER",
					"modelList": [
						"FORESTER 97-02",
						"FORESTER 02-07",
						"FORESTER 08-12",
						"FORESTER 13-18",
						"FORESTER 19-"
					]
				},
				{
					"model": "IMPREZA",
					"modelList": [
						"IMPREZA 93-99",
						"IMPREZA 00-07",
						"IMPREZA 00-07 est wagon",
						"IMPREZA 07-11",
						"IMPREZA 12-17",
						"IMPREZA 17-"
					]
				},
				{
					"model": "JUSTY",
					"modelList": [
						"JUSTY 84-99",
						"JUSTY 89-95",
						"JUSTY 96-03 3d",
						"JUSTY 96-03 5d",
						"JUSTY 03-06",
						"JUSTY 07-10",
						"JUSTY 16-"
					]
				},
				{
					"model": "LEGACY",
					"modelList": [
						"LEGACY 90-94",
						"LEGACY 94-98",
						"LEGACY 99-03",
						"LEGACY 03-09",
						"LEGACY 09-15",
						"LEGACY 15-"
					]
				},
				{
					"model": "LEONE",
					"modelList": [
						"LEONE 79-84",
						"LEONE 79-84 2d hardtop",
						"LEONE 84-93",
						"LEONE 86-90 coupe"
					]
				},
				{
					"model": "OUTBACK",
					"modelList": [
						"OUTBACK 90-94",
						"OUTBACK 94-98",
						"OUTBACK 99-03",
						"OUTBACK 03-09",
						"OUTBACK 09-15",
						"OUTBACK 15-21",
						"OUTBACK 20-н.в. (VI)"
					]
				},
				{
					"model": "TRIBECA",
					"modelList": [
						"TRIBECA 05-14"
					]
				},
				{
					"model": "XV",
					"modelList": [
						"XV 12-17",
						"XV 17-"
					]
				}
			]
		},
		{
			"car": "SUZUKI",
			"models": [
				{
					"model": "ACROSS",
					"modelList": [
						"ACROSS 20-"
					]
				},
				{
					"model": "ALTO",
					"modelList": [
						"ALTO 86-94",
						"ALTO 95-02",
						"ALTO 02-08",
						"ALTO 09-14"
					]
				},
				{
					"model": "BALENO",
					"modelList": [
						"BALENO 95-02"
					]
				},
				{
					"model": "CARRY",
					"modelList": [
						"CARRY 86-91"
					]
				},
				{
					"model": "ESCUDO",
					"modelList": [
						"ESCUDO 05-17"
					]
				},
				{
					"model": "GRAND VITARA",
					"modelList": [
						"GRAND VITARA 98-05",
						"GRAND VITARA 05-15"
					]
				},
				{
					"model": "IGNIS",
					"modelList": [
						"IGNIS 00-03",
						"IGNIS 03-06",
						"IGNIS 17-"
					]
				},
				{
					"model": "JIMNY",
					"modelList": [
						"JIMNY 81-98",
						"JIMNY 98-18",
						"JIMNY 18-"
					]
				},
				{
					"model": "KIZASHI",
					"modelList": [
						"KIZASHI 10-14"
					]
				},
				{
					"model": "LIANA",
					"modelList": [
						"LIANA 01-08"
					]
				},
				{
					"model": "MARUTTI",
					"modelList": [
						"MARUTTI 86-94"
					]
				},
				{
					"model": "SAMURAI",
					"modelList": [
						"SAMURAI 81-03"
					]
				},
				{
					"model": "SOLIO",
					"modelList": [
						"SOLIO 11-15",
						"SOLIO 15-20",
						"SOLIO 20-"
					]
				},
				{
					"model": "SPLASH",
					"modelList": [
						"SPLASH 08-15"
					]
				},
				{
					"model": "SWACE",
					"modelList": [
						"SWACE 20-"
					]
				},
				{
					"model": "SWIFT",
					"modelList": [
						"SWIFT 83-86",
						"SWIFT 86-89",
						"SWIFT 89-04 3d",
						"SWIFT 89-04 4/5d",
						"SWIFT 04-10",
						"SWIFT 10-17",
						"SWIFT 17-"
					]
				},
				{
					"model": "SX4",
					"modelList": [
						"SX4 06-13",
						"SX4 13-22"
					]
				},
				{
					"model": "VITARA",
					"modelList": [
						"VITARA 88-99",
						"VITARA 15-"
					]
				},
				{
					"model": "WAGON R",
					"modelList": [
						"WAGON R 97-00",
						"WAGON R 00-08"
					]
				},
				{
					"model": "X90",
					"modelList": [
						"X90 95-00"
					]
				},
				{
					"model": "XL7",
					"modelList": [
						"XL7 07-09"
					]
				}
			]
		},
		{
			"car": "TAGAZ",
			"models": [
				{
					"model": "C10",
					"modelList": [
						"C10 11-16"
					]
				},
				{
					"model": "C190",
					"modelList": [
						"C190 11-13"
					]
				},
				{
					"model": "ROAD PARTNER",
					"modelList": [
						"ROAD PARTNER 07-11"
					]
				},
				{
					"model": "TAGER",
					"modelList": [
						"TAGER 07-13"
					]
				},
				{
					"model": "VEGA",
					"modelList": [
						"VEGA 09-10"
					]
				}
			]
		},
		{
			"car": "TESLA",
			"models": [
				{
					"model": "CYBERTRUCK",
					"modelList": [
						"CYBERTRUCK 21-"
					]
				},
				{
					"model": "MODEL 3",
					"modelList": [
						"MODEL 3 17-"
					]
				},
				{
					"model": "MODEL S",
					"modelList": [
						"MODEL S 12-"
					]
				},
				{
					"model": "MODEL X",
					"modelList": [
						"MODEL X 16-"
					]
				},
				{
					"model": "MODEL Y",
					"modelList": [
						"MODEL Y 20- "
					]
				},
				{
					"model": "ROADSTER",
					"modelList": [
						"ROADSTER 08-12",
						"ROADSTER 20-"
					]
				},
				{
					"model": "SEMI",
					"modelList": [
						"SEMI 21-"
					]
				}
			]
		},
		{
			"car": "TEREX TLB",
			"models": [
				{
					"model": "TLB",
					"modelList": [
						"815/820/860",
						"840/850/890"
					]
				}
			]
		},
		{
			"car": "TOYOTA",
			"models": [
				{
					"model": "4-RUNNER",
					"modelList": [
						"4-RUNNER 89-95",
						"4-RUNNER 95-02",
						"4-RUNNER 03-09 not usa",
						"4-RUNNER 03-09 usa",
						"4-RUNNER 09- usa"
					]
				},
				{
					"model": "ALLION",
					"modelList": [
						"ALLION 01-07",
						"ALLION 07-21"
					]
				},
				{
					"model": "ALPHARD",
					"modelList": [
						"ALPHARD 02-08",
						"ALPHARD 08-15",
						"ALPHARD 15-"
					]
				},
				{
					"model": "AURION",
					"modelList": [
						"AURION 06-12"
					]
				},
				{
					"model": "AURIS",
					"modelList": [
						"AURIS 07-11",
						"AURIS 12-18",
						"AURIS 18-"
					]
				},
				{
					"model": "AVALON",
					"modelList": [
						"AVALON 95-00",
						"AVALON 00-05",
						"AVALON 05-12",
						"AVALON 12-18",
						"AVALON 18-"
					]
				},
				{
					"model": "AVENSIS",
					"modelList": [
						"AVENSIS 97-03",
						"AVENSIS 03-08",
						"AVENSIS 08-18"
					]
				},
				{
					"model": "AVENSIS VERSO",
					"modelList": [
						"AVENSIS VERSO 01-09",
						"AVENSIS VERSO 01-09 правый руль"
					]
				},
				{
					"model": "AYGO",
					"modelList": [
						"AYGO 05-14",
						"AYGO 14-"
					]
				},
				{
					"model": "BB",
					"modelList": [
						"BB 00-05",
						"BB 00-05 правый руль",
						"BB 05-16"
					]
				},
				{
					"model": "BELTA",
					"modelList": [
						"BELTA 05-12"
					]
				},
				{
					"model": "CALDINA",
					"modelList": [
						"CALDINA 97-02 T190 правый руль",
						"CALDINA 97-02 T210 правый руль",
						"CALDINA 02-07"
					]
				},
				{
					"model": "CAMRY",
					"modelList": [
						"CAMRY 83-87",
						"CAMRY 87-91",
						"CAMRY 90-94 правый руль",
						"CAMRY 91-96",
						"CAMRY 94-98 правый руль",
						"CAMRY 96-01",
						"CAMRY 01-05 правый руль",
						"CAMRY 01-07 (e30)",
						"CAMRY 07-11 (e40)",
						"CAMRY 11-17 (e50)",
						"CAMRY 18- (e70)"
					]
				},
				{
					"model": "CAMRY GRACIA",
					"modelList": [
						"CAMRY GRACIA 96-01 правый руль"
					]
				},
				{
					"model": "CARINA",
					"modelList": [
						"CARINA 88-92",
						"CARINA 92-96 правый руль",
						"CARINA E 92-98",
						"CARINA 96-01 правый руль"
					]
				},
				{
					"model": "CELICA",
					"modelList": [
						"CELICA 81-86",
						"CELICA 86-89",
						"CELICA 89-94",
						"CELICA 94-99",
						"CELICA 99-06"
					]
				},
				{
					"model": "CERES",
					"modelList": [
						"CERES 92-98"
					]
				},
				{
					"model": "C-HR",
					"modelList": [
						"C-HR 17-"
					]
				},
				{
					"model": "COROLLA",
					"modelList": [
						"COROLLA 83-87",
						"COROLLA 83-87 coupe",
						"COROLLA 83-87 liftback",
						"COROLLA 87-92",
						"COROLLA 87-92 liftback/est",
						"COROLLA 92-97",
						"COROLLA 92-97 liftback",
						"COROLLA 97-02",
						"COROLLA IX 02-07",
						"COROLLA X 06-12",
						"COROLLA XI 13-19",
						"COROLLA XI 13-19 правый руль",
						"COROLLA XII 18-"
					]
				},
				{
					"model": "COROLLA VERSO",
					"modelList": [
						"COROLLA VERSO 02-04",
						"COROLLA VERSO 04-09"
					]
				},
				{
					"model": "CORONA",
					"modelList": [
						"CORONA 88-92 (t170/180)",
						"CORONA 92-96 (t190/t200)",
						"CORONA 96-01 (t210)"
					]
				},
				{
					"model": "CROWN",
					"modelList": [
						"CROWN 95-08 S150"
					]
				},
				{
					"model": "CRESSIDA",
					"modelList": [
						"CRESSIDA 84-88 (x70)",
						"CRESSIDA 88-92 (x80)"
					]
				},
				{
					"model": "DUET",
					"modelList": [
						"DUET 98-05"
					]
				},
				{
					"model": "DYNA",
					"modelList": [
						"DYNA 84-95 (153x69)",
						"DYNA 84-95 широкая кабина (183x70)",
						"DYNA 96-01 (152x68)",
						"DYNA 00-11 ru90/yu61/201w (154x75)",
						"DYNA 00-11 широкая кабина (ru95/ru86/221w) (184x77)",
						"DYNA 11- (162x76)"
					]
				},
				{
					"model": "ECHO",
					"modelList": [
						"ECHO 99-05"
					]
				},
				{
					"model": "ESTIMA",
					"modelList": [
						"ESTIMA 90-99 (xr10/xr20)",
						"ESTIMA 00-05 левый руль (xr30/xr40)",
						"ESTIMA 00-05 правый руль (xr30/xr40)",
						"ESTIMA 06- правый руль (xr50)"
					]
				},
				{
					"model": "FJ CRUISER",
					"modelList": [
						"FJ CRUISER 07-14"
					]
				},
				{
					"model": "FORTUNER",
					"modelList": [
						"FORTUNER 04-15",
						"FORTUNER 15-"
					]
				},
				{
					"model": "GAIA",
					"modelList": [
						"GAIA 98-04 правый руль"
					]
				},
				{
					"model": "HARRIER",
					"modelList": [
						"HARRIER 97-03 правый руль (xu10)",
						"HARRIER 03-13 правый руль (xu30)",
						"HARRIER 13- правый руль (xu60)"
					]
				},
				{
					"model": "HI-ACE",
					"modelList": [
						"HI-ACE 67-77",
						"HI-ACE 77-82",
						"HI-ACE 83-89",
						"HI-ACE 89-04 lh10/rh100 в резинку",
						"HI-ACE 95-04 lxh12 вклеивается",
						"HI-ACE 04-18 lh202 высокая и узкая кабина",
						"HI-ACE 04-18 широкая кабина",
						"HI-ACE 19- (H300)"
					]
				},
				{
					"model": "HIGHLANDER",
					"modelList": [
						"HIGHLANDER 01-07",
						"HIGHLANDER 07-14",
						"HIGHLANDER 14-",
						"HIGHLANDER 20-"
					]
				},
				{
					"model": "HI-LUX",
					"modelList": [
						"HI-LUX 83-89 ln/rn 50/55",
						"HI-LUX 89-97 surf n120/130",
						"HI-LUX 89-97 ln/yn 85/105",
						"HI-LUX 97-05",
						"HI-LUX 05-15",
						"HI-LUX 15-"
					]
				},
				{
					"model": "IQ",
					"modelList": [
						"IQ 09-11"
					]
				},
				{
					"model": "IST",
					"modelList": [
						"IST 02-07",
						"IST 07-16"
					]
				},
				{
					"model": "KLUGER",
					"modelList": [
						"KLUGER 00-07",
						"KLUGER 07-13",
						"KLUGER 14-20"
					]
				},
				{
					"model": "LAND CRUISER",
					"modelList": [
						"LAND CRUISER 60 81-88",
						"LAND CRUISER 80 90-98",
						"LAND CRUISER 100 98-03",
						"LAND CRUISER 200 07-21",
						"LAND CRUISER 300 21-"
					]
				},
				{
					"model": "LAND CRUISER PRADO",
					"modelList": [
						"LAND CRUISER PRADO 70 85-00 softtop",
						"LAND CRUISER PRADO 70/95 85- hardtop",
						"LAND CRUISER PRADO 90 96-03",
						"LAND CRUISER PRADO 120 03-09",
						"LAND CRUISER PRADO 150 09-"
					]
				},
				{
					"model": "LITE-ACE",
					"modelList": [
						"LITE-ACE 79-86",
						"LITE-ACE 86-92",
						"LITE-ACE 92-96",
						"LITE-ACE 96-07"
					]
				},
				{
					"model": "MARK II",
					"modelList": [
						"MARK II 84-88 (x70)",
						"MARK II 88-92 (x80)",
						"MARK II 92-96 правый руль (x90)",
						"MARK II 96-02 hardtop правый руль (x100)",
						"MARK II 96-02 sedan левый руль (x100)",
						"MARK II 00-07 правый руль (x110/x115)"
					]
				},
				{
					"model": "MARK X",
					"modelList": [
						"MARK X 04-09",
						"MARK X ZiO 07-13",
						"MARK X 09-"
					]
				},
				{
					"model": "MATRIX",
					"modelList": [
						"MATRIX 03-08",
						"MATRIX 09-14"
					]
				},
				{
					"model": "MR2",
					"modelList": [
						"MR2 84-07",
						"MR2 90-00 coupe",
						"MR2 00-07 coupe"
					]
				},
				{
					"model": "NOAH",
					"modelList": [
						"NOAH 01-07",
						"NOAH 07-13 (R70)",
						"NOAH 14-21 (R80)",
						"NOAH 22- (R90)"
					]
				},
				{
					"model": "PASSO",
					"modelList": [
						"PASSO 05-10"
					]
				},
				{
					"model": "PICNIC",
					"modelList": [
						"PICNIC 96-01",
						"PICNIC 01-04",
						"PICNIC 01-04 правый руль"
					]
				},
				{
					"model": "PORTE",
					"modelList": [
						"PORTE 04-12",
						"PORTE 12-20"
					]
				},
				{
					"model": "PREVIA",
					"modelList": [
						"PREVIA 90-99 (xr10/xr20)",
						"PREVIA 00-05 левый руль (xr30/xr40)",
						"PREVIA 00-05 правый руль (xr30/xr40)",
						"PREVIA 06- правый руль (xr50)",
						"PREVIA 06- левый руль руль (xr50)"
					]
				},
				{
					"model": "PROBOX",
					"modelList": [
						"PROBOX 02-"
					]
				},
				{
					"model": "PRIUS",
					"modelList": [
						"PRIUS 00-03",
						"PRIUS 03-09",
						"PRIUS 09-15",
						"GRAND PRIUS 11- (левый руль)",
						"PRIUS 16-"
					]
				},
				{
					"model": "RACTIS",
					"modelList": [
						"RACTIS 05-10",
						"RACTIS 11-16"
					]
				},
				{
					"model": "RAUM",
					"modelList": [
						"RAUM 97-03",
						"RAUM 03-11"
					]
				},
				{
					"model": "RAV-4",
					"modelList": [
						"RAV-4 94-00",
						"RAV-4 00-06",
						"RAV-4 06-12",
						"RAV-4 13-18",
						"RAV-4 18-"
					]
				},
				{
					"model": "SEQUOIA",
					"modelList": [
						"SEQUOIA 01-07",
						"SEQUOIA II 08- н.в",
						"SEQUOIA III 22-"
					]
				},
				{
					"model": "SOLARA",
					"modelList": [
						"SOLARA 03-09 COUPE (XV30)"
					]
				},
				{
					"model": "SIENNA",
					"modelList": [
						"SIENNA 97-02",
						"SIENNA 02-09",
						"SIENNA 10-"
					]
				},
				{
					"model": "STARLET",
					"modelList": [
						"STARLET 84-90",
						"STARLET 90-96",
						"STARLET 96-99"
					]
				},
				{
					"model": "SUPRA",
					"modelList": [
						"SUPRA 86-93",
						"SUPRA 93-02",
						"SUPRA 19-"
					]
				},
				{
					"model": "TOWN-ACE",
					"modelList": [
						"TOWN-ACE 92-96 правый руль",
						"TOWN-ACE 96-07 правый руль"
					]
				},
				{
					"model": "TUNDRA",
					"modelList": [
						"TUNDRA 00-06",
						"TUNDRA 07-21",
						"TUNDRA 21-"
					]
				},
				{
					"model": "URBAN CRUISER",
					"modelList": [
						"URBAN CRUISER 09-16"
					]
				},
				{
					"model": "VENZA",
					"modelList": [
						"VENZA 08-17 железная крыша",
						"VENZA 08-17 стеклянная крыша"
					]
				},
				{
					"model": "VERSO",
					"modelList": [
						"VERSO 09-18"
					]
				},
				{
					"model": "VERSO S",
					"modelList": [
						"VERSO S 11-16"
					]
				},
				{
					"model": "VOXY",
					"modelList": [
						"VOXY 01-07",
						"VOXY 07-13 (R70)",
						"VOXY 14- (R80)"
					]
				},
				{
					"model": "VITZ",
					"modelList": [
						"VITZ 99-05",
						"VITZ 05-11",
						"VITZ 12-"
					]
				},
				{
					"model": "WISH",
					"modelList": [
						"WISH 03-09 правый руль",
						"WISH 09-17 правый руль"
					]
				},
				{
					"model": "YARIS",
					"modelList": [
						"YARIS 99-05",
						"YARIS 06-10",
						"YARIS III 11-20",
						"YARIS IV 20-"
					]
				},
				{
					"model": "YARIS CROSS",
					"modelList": [
						"YARIS CROSS 21-"
					]
				},
				{
					"model": "YARIS VERSO",
					"modelList": [
						"YARIS VERSO 99-06"
					]
				}
			]
		},
		{
			"car": "VOLKSWAGEN",
			"models": [
				{
					"model": "AMAROK",
					"modelList": [
						"AMAROK 10-"
					]
				},
				{
					"model": "ARTEON",
					"modelList": [
						"ARTEON 17-"
					]
				},
				{
					"model": "ATLAS",
					"modelList": [
						"ATLAS 19- Cross Sport"
					]
				},
				{
					"model": "BEETLE",
					"modelList": [
						"NEW BEETLE 97-11",
						"NEW BEETLE 98-13 cabrio",
						"BEETLE 11-",
						"BEETLE 13- cabrio"
					]
				},
				{
					"model": "BORA",
					"modelList": [
						"BORA 97-05"
					]
				},
				{
					"model": "CADDY",
					"modelList": [
						"CADDY 82-94",
						"CADDY 95-03",
						"CADDY 95-03 pick-up",
						"CADDY 04-15",
						"CADDY 15-20",
						"CADDY 21-"
					]
				},
				{
					"model": "CARAVELLE",
					"modelList": [
						"CARAVELLE 90-03",
						"CARAVELLE 03-15",
						"CARAVELLE 16-"
					]
				},
				{
					"model": "CHICO",
					"modelList": [
						"CHICO 97-04"
					]
				},
				{
					"model": "CORRADO",
					"modelList": [
						"CORRADO 88-95"
					]
				},
				{
					"model": "CRAFTER",
					"modelList": [
						"CRAFTER 06-17",
						"CRAFTER 17-"
					]
				},
				{
					"model": "FOX",
					"modelList": [
						"FOX 05-11"
					]
				},
				{
					"model": "GOL",
					"modelList": [
						"GOL I 80-94",
						"GOL II 94-13",
						"GOL III 08-"
					]
				},
				{
					"model": "GOLF",
					"modelList": [
						"GOLF I 74-83",
						"GOLF II 83-91",
						"GOLF III 91-99",
						"GOLF III 93-97 cabrio",
						"GOLF IV 97-03",
						"GOLF IV 97-06 variant",
						"GOLF V 03-08",
						"GOLF V PLUS 05-14",
						"GOLF V 07-11 variant",
						"GOLF VI 08-12",
						"GOLF VI 11- cabrio",
						"GOLF VII 13-",
						"GOLF VIII 21-"
					]
				},
				{
					"model": "JETTA",
					"modelList": [
						"JETTA 74-83",
						"JETTA 83-91",
						"JETTA 92-98",
						"JETTA 99-05",
						"JETTA 05-11",
						"JETTA 11-18",
						"JETTA 18-"
					]
				},
				{
					"model": "LT",
					"modelList": [
						"LT 75-96",
						"LT 96-06 высокий",
						"LT 96-06 низкий"
					]
				},
				{
					"model": "LUPO",
					"modelList": [
						"LUPO 97-04"
					]
				},
				{
					"model": "MULTIVAN",
					"modelList": [
						"MULTIVAN 90-03",
						"MULTIVAN 03-15",
						"MULTIVAN 16- (T6)",
						"MULTIVAN 21- (T7)"
					]
				},
				{
					"model": "NEW BEETLE",
					"modelList": [
						"NEW BEETLE 97-11",
						"NEW BEETLE 98-13 cabrio",
						"BEETLE 11-",
						"BEETLE 13- cabrio"
					]
				},
				{
					"model": "PASSAT",
					"modelList": [
						"PASSAT 80-87",
						"PASSAT 87-96 b3/b4",
						"PASSAT 96-05 b5",
						"PASSAT 05-14 b6/b7",
						"PASSAT 14- b8"
					]
				},
				{
					"model": "PASSAT СС",
					"modelList": [
						"PASSAT CC 08-17"
					]
				},
				{
					"model": "PHAETON",
					"modelList": [
						"PHAETON 02-16"
					]
				},
				{
					"model": "POINTER",
					"modelList": [
						"POINTER 03-06"
					]
				},
				{
					"model": "POLO",
					"modelList": [
						"POLO 81-94",
						"POLO 94-99 3d/5d",
						"POLO CLASSIC 95-99",
						"POLO CLASSIC 99-02",
						"POLO VARIANT 97-99",
						"POLO VARIANT 99-02",
						"POLO 00-01 3d/5d",
						"POLO 02-09",
						"POLO 09-17",
						"POLO 10- российская сборка",
						"POLO 18- 5d HB",
						"POLO 20- 5d Liftback "
					]
				},
				{
					"model": "SANTANA",
					"modelList": [
						"SANTANA 80-87"
					]
				},
				{
					"model": "SCIROCCO",
					"modelList": [
						"SCIROCCO 81-92",
						"SCIROCCO 08-15"
					]
				},
				{
					"model": "SHARAN",
					"modelList": [
						"SHARAN 95-10",
						"SHARAN 10-"
					]
				},
				{
					"model": "TAIGO",
					"modelList": [
						"TAIGO 21-"
					]
				},
				{
					"model": "TAOS",
					"modelList": [
						"TAOS 20-"
					]
				},
				{
					"model": "T ROC",
					"modelList": [
						"T ROC 17-"
					]
				},
				{
					"model": "TERAMONT",
					"modelList": [
						"TERAMONT 18-"
					]
				},
				{
					"model": "TIGUAN",
					"modelList": [
						"TIGUAN 07-16",
						"TIGUAN 16-"
					]
				},
				{
					"model": "TOUAREG",
					"modelList": [
						"TOUAREG 02-10",
						"TOUAREG 10-18",
						"TOUAREG 18-"
					]
				},
				{
					"model": "TOURAN",
					"modelList": [
						"TOURAN 03-15",
						"TOURAN 15-"
					]
				},
				{
					"model": "TRANSPORTER",
					"modelList": [
						"TRANSPORTER T3 79-91",
						"TRANSPORTER T4 90-03",
						"TRANSPORTER T5 03-15",
						"TRANSPORTER T6 16-"
					]
				},
				{
					"model": "UP",
					"modelList": [
						"UP 11-"
					]
				},
				{
					"model": "VENTO",
					"modelList": [
						"VENTO 91-97"
					]
				}
			]
		},
		{
			"car": "VOLVO",
			"models": [
				{
					"model": "200 series",
					"modelList": [
						"200 серия 74-94"
					]
				},
				{
					"model": "300 series",
					"modelList": [
						"300 серия 76-91"
					]
				},
				{
					"model": "440",
					"modelList": [
						"440 89-96"
					]
				},
				{
					"model": "460",
					"modelList": [
						"460 89-96"
					]
				},
				{
					"model": "480",
					"modelList": [
						"480 86-95 coupe"
					]
				},
				{
					"model": "740",
					"modelList": [
						"740 84-92"
					]
				},
				{
					"model": "760",
					"modelList": [
						"760 82-90"
					]
				},
				{
					"model": "850",
					"modelList": [
						"850 92-97"
					]
				},
				{
					"model": "940",
					"modelList": [
						"940 90-98"
					]
				},
				{
					"model": "960",
					"modelList": [
						"960 90-98"
					]
				},
				{
					"model": "C30",
					"modelList": [
						"C30 07-13"
					]
				},
				{
					"model": "C70",
					"modelList": [
						"C70 96-06",
						"C70 06-13"
					]
				},
				{
					"model": "S40",
					"modelList": [
						"S40 96-03",
						"S40 03-12"
					]
				},
				{
					"model": "S60",
					"modelList": [
						"S60 00-09",
						"S60 10-18",
						"S60 18-"
					]
				},
				{
					"model": "S70",
					"modelList": [
						"S70 97-00"
					]
				},
				{
					"model": "S80",
					"modelList": [
						"S80 98-06",
						"S80 06-16"
					]
				},
				{
					"model": "S90",
					"modelList": [
						"S90 87-99",
						"S90 16-"
					]
				},
				{
					"model": "V40",
					"modelList": [
						"V40 96-04",
						"V40 12-"
					]
				},
				{
					"model": "V50",
					"modelList": [
						"V50 03-12"
					]
				},
				{
					"model": "V60",
					"modelList": [
						"V60 10-18",
						"V60 18-"
					]
				},
				{
					"model": "V70",
					"modelList": [
						"V70 97-00",
						"V70 00-07",
						"V70 07-16"
					]
				},
				{
					"model": "V90",
					"modelList": [
						"V90 87-99",
						"V90 17-"
					]
				},
				{
					"model": "XC40",
					"modelList": [
						"XC40 17-"
					]
				},
				{
					"model": "XC60",
					"modelList": [
						"XC60 08-17",
						"XC60 17-"
					]
				},
				{
					"model": "XC70",
					"modelList": [
						"XC70 00-07",
						"XC70 07-16"
					]
				},
				{
					"model": "XC90",
					"modelList": [
						"XC90 02-15",
						"XC90 15-"
					]
				}
			]
		},
		{
			"car": "VOLVO TRUCKS",
			"models": [
				{
					"model": "F",
					"modelList": [
						"F10 / F12 / F16 77-84",
						"F7 79-92",
						"F10 / F12 / F16 84-93"
					]
				},
				{
					"model": "FE",
					"modelList": [
						"FE 07-"
					]
				},
				{
					"model": "FH",
					"modelList": [
						"FH12 / FH16 93-",
						"FH 13-"
					]
				},
				{
					"model": "FL",
					"modelList": [
						"FL4 / FL6 86-05",
						"FL7 / FL10 / FL12 86-92",
						"FL 07-"
					]
				},
				{
					"model": "FM",
					"modelList": [
						"FM 93-"
					]
				},
				{
					"model": "FS",
					"modelList": [
						"FS 86-05"
					]
				},
				{
					"model": "VNL",
					"modelList": [
						"VNL 97-"
					]
				}
			]
		},
		{
			"car": "VOLVO спецтехника",
			"models": [
				{
					"model": "B серия EC",
					"modelList": [
						"ЕС145/200ser/300ser/460ser 2001-2015 (гусеничный)"
					]
				},
				{
					"model": "L120",
					"modelList": [
						"L120C",
						"L120F"
					]
				},
				{
					"model": "TLB",
					"modelList": [
						"BL61/BL71 2003-2012",
						"BL61/BL71 2012-"
					]
				}
			]
		},
		{
			"car": "VORTEX",
			"models": [
				{
					"model": "ESTINA",
					"modelList": [
						"ESTINA 08-13"
					]
				},
				{
					"model": "TINGO",
					"modelList": [
						"TINGO 10-13"
					]
				}
			]
		},
		{
			"car": "ZOTYE",
			"models": [
				{
					"model": "T600",
					"modelList": [
						"T600 13-"
					]
				}
			]
		},
		{
			"car": "ZX",
			"models": [
				{
					"model": "LANDMARK",
					"modelList": [
						"LANDMARK 05-11"
					]
				}
			]
		},
		{
			"car": "ВАЗ",
			"models": [
				{
					"model": "1111 ОКА",
					"modelList": [
						"1111 ОКА 87-08"
					]
				},
				{
					"model": "1117 КАЛИНА",
					"modelList": [
						"1117 КАЛИНА 04-13"
					]
				},
				{
					"model": "1118 КАЛИНА",
					"modelList": [
						"1118 КАЛИНА 04-11"
					]
				},
				{
					"model": "1119 КАЛИНА",
					"modelList": [
						"1119 КАЛИНА 04-13"
					]
				},
				{
					"model": "2101",
					"modelList": [
						"2101 70-88"
					]
				},
				{
					"model": "2102",
					"modelList": [
						"2102 71-86"
					]
				},
				{
					"model": "2103",
					"modelList": [
						"2103 72-84"
					]
				},
				{
					"model": "2104",
					"modelList": [
						"2104 84-12"
					]
				},
				{
					"model": "2105",
					"modelList": [
						"2105 79-10"
					]
				},
				{
					"model": "2106",
					"modelList": [
						"2106 76-06"
					]
				},
				{
					"model": "2107",
					"modelList": [
						"2107 82-12"
					]
				},
				{
					"model": "2108",
					"modelList": [
						"2108 84-03"
					]
				},
				{
					"model": "2109",
					"modelList": [
						"2109 87-04"
					]
				},
				{
					"model": "2110",
					"modelList": [
						"2110 95-07"
					]
				},
				{
					"model": "2111",
					"modelList": [
						"2111 98-08"
					]
				},
				{
					"model": "2112",
					"modelList": [
						"2112 99-08"
					]
				},
				{
					"model": "2113",
					"modelList": [
						"2113 04-13"
					]
				},
				{
					"model": "2114",
					"modelList": [
						"2114 03-13"
					]
				},
				{
					"model": "2115",
					"modelList": [
						"2115 97-12"
					]
				},
				{
					"model": "2120 НАДЕЖДА",
					"modelList": [
						"2120 НАДЕЖДА 98-06"
					]
				},
				{
					"model": "2121 НИВА",
					"modelList": [
						"2121 НИВА 77-"
					]
				},
				{
					"model": "2123 НИВА",
					"modelList": [
						"2123 НИВА 98-02"
					]
				},
				{
					"model": "2131",
					"modelList": [
						"2131 93-06"
					]
				},
				{
					"model": "2170 ПРИОРА",
					"modelList": [
						"2170 ПРИОРА 08-18"
					]
				},
				{
					"model": "2171 ПРИОРА",
					"modelList": [
						"2171 ПРИОРА 08-18"
					]
				},
				{
					"model": "2172 ПРИОРА",
					"modelList": [
						"2172 ПРИОРА 08-18"
					]
				},
				{
					"model": "21728 ПРИОРА",
					"modelList": [
						"21728 ПРИОРА 10-15"
					]
				},
				{
					"model": "2190 ГРАНТА",
					"modelList": [
						"2190 ГРАНТА 11-"
					]
				},
				{
					"model": "2191 ГРАНТА",
					"modelList": [
						"2191 ГРАНТА 13-"
					]
				},
				{
					"model": "2192 КАЛИНА NEW",
					"modelList": [
						"2192 КАЛИНА NEW 13-"
					]
				},
				{
					"model": "2194 КАЛИНА NEW",
					"modelList": [
						"2194 КАЛИНА NEW 13-"
					]
				},
				{
					"model": "CHEVROLET NIVA",
					"modelList": [
						"CHEVROLET NIVA 02-"
					]
				}
			]
		},
		{
			"car": "ГАЗ",
			"models": [
				{
					"model": "2217",
					"modelList": [
						"2217 98-"
					]
				},
				{
					"model": "24",
					"modelList": [
						"24 85-93"
					]
				},
				{
					"model": "2402",
					"modelList": [
						"2402 72-87"
					]
				},
				{
					"model": "2410",
					"modelList": [
						"2410 85-93"
					]
				},
				{
					"model": "2705",
					"modelList": [
						"2705 94-"
					]
				},
				{
					"model": "3102",
					"modelList": [
						"3102 81-09"
					]
				},
				{
					"model": "3221",
					"modelList": [
						"3221 94-"
					]
				},
				{
					"model": "3302",
					"modelList": [
						"3302 94-"
					]
				},
				{
					"model": "3307",
					"modelList": [
						"3307 89-"
					]
				},
				{
					"model": "3310",
					"modelList": [
						"3310 05-15 (ВАЛДАЙ)"
					]
				},
				{
					"model": "4301",
					"modelList": [
						"4301 84-96"
					]
				},
				{
					"model": "52 / 53",
					"modelList": [
						"52 / 53 64-93"
					]
				},
				{
					"model": "66",
					"modelList": [
						"66 64-99"
					]
				},
				{
					"model": "VOLGA SIBER",
					"modelList": [
						"VOLGA SIBER 08-12"
					]
				},
				{
					"model": "БАРГУЗИН",
					"modelList": [
						"БАРГУЗИН 98-"
					]
				},
				{
					"model": "ВАЛДАЙ",
					"modelList": [
						"ВАЛДАЙ 05-15 (3310)",
						"ВАЛДАЙ 20- \"NEXT\" (С49/С4A)"
					]
				},
				{
					"model": "ВОЛГА",
					"modelList": [
						"ВОЛГА 72-09"
					]
				},
				{
					"model": "ГАЗЕЛЬ",
					"modelList": [
						"ГАЗЕЛЬ 94-"
					]
				},
				{
					"model": "ГАЗЕЛЬ NEXT",
					"modelList": [
						"ГАЗЕЛЬ NEXT 13-",
						"ГАЗЕЛЬ NEXT BUS 14- (1786х1224)",
						"ГАЗЕЛЬ NEXT Cityline 20-"
					]
				},
				{
					"model": "ГАЗОН NEXT",
					"modelList": [
						"ГАЗОН NEXT 13-"
					]
				},
				{
					"model": "СОБОЛЬ",
					"modelList": [
						"СОБОЛЬ 98-"
					]
				}
			]
		},
		{
			"car": "ЗАЗ",
			"models": [
				{
					"model": "1102 ТАВРИЯ",
					"modelList": [
						"1102 ТАВРИЯ 88-07"
					]
				},
				{
					"model": "965 ЗАПОРОЖЕЦ",
					"modelList": [
						"965 ЗАПОРОЖЕЦ 60-69"
					]
				},
				{
					"model": "CHANCE",
					"modelList": [
						"CHANCE 09-"
					]
				},
				{
					"model": "SENS",
					"modelList": [
						"SENS 07-09"
					]
				}
			]
		},
		{
			"car": "ЗИЛ",
			"models": [
				{
					"model": "130",
					"modelList": [
						"130 62-12"
					]
				},
				{
					"model": "131",
					"modelList": [
						"131 66-02"
					]
				},
				{
					"model": "4331",
					"modelList": [
						"4331 86-03"
					]
				}
			]
		},
		{
			"car": "ИЖАВТО",
			"models": [
				{
					"model": "2126 ОРБИТА / ОДА / ФАБУЛА",
					"modelList": [
						"2126 ОРБИТА / ОДА / ФАБУЛА 01-05"
					]
				}
			]
		},
		{
			"car": "КАВЗ",
			"models": [
				{
					"model": "4230 / 4235 / 4238",
					"modelList": [
						"4230 / 4235 / 4238 01-"
					]
				}
			]
		},
		{
			"car": "КАМАЗ",
			"models": [
				{
					"model": "4308",
					"modelList": [
						"4308 из половинок",
						"4308 цельное"
					]
				},
				{
					"model": "4310",
					"modelList": [
						"4310 из половинок",
						"4310 цельное"
					]
				},
				{
					"model": "43105",
					"modelList": [
						"43105 из половинок",
						"43105 цельное"
					]
				},
				{
					"model": "43114",
					"modelList": [
						"43114 из половинок",
						"43114 цельное"
					]
				},
				{
					"model": "43118",
					"modelList": [
						"43118 из половинок",
						"43118 цельное"
					]
				},
				{
					"model": "43253",
					"modelList": [
						"43253 из половинок",
						"43253 цельное"
					]
				},
				{
					"model": "43255",
					"modelList": [
						"43255 из половинок",
						"43255 цельное"
					]
				},
				{
					"model": "4326",
					"modelList": [
						"4326 из половинок",
						"4326 цельное"
					]
				},
				{
					"model": "4355",
					"modelList": [
						"4355 из половинок",
						"4355 цельное"
					]
				},
				{
					"model": "44108",
					"modelList": [
						"44108 из половинок",
						"44108 цельное"
					]
				},
				{
					"model": "45141",
					"modelList": [
						"45141 из половинок",
						"45141 цельное"
					]
				},
				{
					"model": "45142",
					"modelList": [
						"45142 из половинок",
						"45142 цельное"
					]
				},
				{
					"model": "45143",
					"modelList": [
						"45143 из половинок",
						"45143 цельное"
					]
				},
				{
					"model": "4910",
					"modelList": [
						"4910 из половинок",
						"4910 цельное"
					]
				},
				{
					"model": "4911",
					"modelList": [
						"4911 из половинок",
						"4911 цельное"
					]
				},
				{
					"model": "4925",
					"modelList": [
						"4925 из половинок",
						"4925 цельное"
					]
				},
				{
					"model": "5320",
					"modelList": [
						"5320 из половинок",
						"5320 цельное"
					]
				},
				{
					"model": "53202",
					"modelList": [
						"53202 из половинок",
						"53202 цельное"
					]
				},
				{
					"model": "53205",
					"modelList": [
						"53205 из половинок",
						"53205 цельное"
					]
				},
				{
					"model": "53208",
					"modelList": [
						"53208 из половинок",
						"53208 цельное"
					]
				},
				{
					"model": "53212",
					"modelList": [
						"53212 из половинок",
						"53212 цельное"
					]
				},
				{
					"model": "53213",
					"modelList": [
						"53213 из половинок",
						"53213 цельное"
					]
				},
				{
					"model": "53215",
					"modelList": [
						"53215 из половинок",
						"53215 цельное"
					]
				},
				{
					"model": "53228",
					"modelList": [
						"53228 из половинок",
						"53228 цельное"
					]
				},
				{
					"model": "53229",
					"modelList": [
						"53229 из половинок",
						"53229 цельное"
					]
				},
				{
					"model": "5325",
					"modelList": [
						"5325 из половинок",
						"5325 цельное"
					]
				},
				{
					"model": "5350",
					"modelList": [
						"5350 из половинок",
						"5350 цельное"
					]
				},
				{
					"model": "53605",
					"modelList": [
						"53605 из половинок",
						"53605 цельное"
					]
				},
				{
					"model": "5410",
					"modelList": [
						"5410 из половинок",
						"5410 цельное"
					]
				},
				{
					"model": "54115",
					"modelList": [
						"54115 из половинок",
						"54115 цельное"
					]
				},
				{
					"model": "5460",
					"modelList": [
						"5460 из половинок",
						"5460 цельное"
					]
				},
				{
					"model": "5490",
					"modelList": [
						"5490 из половинок",
						"5490 цельное",
						"5490 13-"
					]
				},
				{
					"model": "54901",
					"modelList": [
						"54901 17- "
					]
				},
				{
					"model": "5511",
					"modelList": [
						"5511 из половинок",
						"5511 цельное"
					]
				},
				{
					"model": "55111",
					"modelList": [
						"55111 из половинок",
						"55111 цельное"
					]
				},
				{
					"model": "6350",
					"modelList": [
						"6350 из половинок",
						"6350 цельное"
					]
				},
				{
					"model": "6460",
					"modelList": [
						"6460 из половинок",
						"6460 цельное"
					]
				},
				{
					"model": "65111",
					"modelList": [
						"65111 из половинок",
						"65111 цельное"
					]
				},
				{
					"model": "65115",
					"modelList": [
						"65115 из половинок",
						"65115 цельное"
					]
				},
				{
					"model": "65116",
					"modelList": [
						"65116 из половинок",
						"65116 цельное"
					]
				},
				{
					"model": "65117",
					"modelList": [
						"65117 из половинок",
						"65117 цельное"
					]
				},
				{
					"model": "6520",
					"modelList": [
						"6520 из половинок",
						"6520 цельное"
					]
				},
				{
					"model": "65201",
					"modelList": [
						"65201 из половинок",
						"65201 цельное"
					]
				},
				{
					"model": "65206",
					"modelList": [
						"65206 15-"
					]
				},
				{
					"model": "65207",
					"modelList": [
						"65207 15-"
					]
				},
				{
					"model": "6522",
					"modelList": [
						"6522 из половинок",
						"6522 цельное"
					]
				},
				{
					"model": "65225",
					"modelList": [
						"65225 из половинок",
						"65225 цельное"
					]
				},
				{
					"model": "65226",
					"modelList": [
						"65226 из половинок",
						"65226 цельное"
					]
				},
				{
					"model": "6540",
					"modelList": [
						"6540 из половинок",
						"6540 цельное"
					]
				},
				{
					"model": "6580",
					"modelList": [
						"6580 15-"
					]
				},
				{
					"model": "65801",
					"modelList": [
						"65801 15-"
					]
				},
				{
					"model": "65802",
					"modelList": [
						"65802 15-"
					]
				},
				{
					"model": "65806",
					"modelList": [
						"65806 15-"
					]
				}
			]
		},
		{
			"car": "КРАЗ",
			"models": [
				{
					"model": "250",
					"modelList": [
						"250 78-93 (801x435)"
					]
				},
				{
					"model": "260",
					"modelList": [
						"260 79-93 (900x597)"
					]
				}
			]
		},
		{
			"car": "ЛИАЗ",
			"models": [
				{
					"model": "4292",
					"modelList": [
						"4292 15-"
					]
				},
				{
					"model": "5251 ВОЯЖ",
					"modelList": [
						"5251 ВОЯЖ 14-"
					]
				},
				{
					"model": "5256",
					"modelList": [
						"5256 86- (1227x1019)",
						"5256 М 86- (1331x1231)",
						"5256 ТУРИСТ 86- (1531x1218)"
					]
				},
				{
					"model": "5291 КРУИЗ",
					"modelList": [
						"5291 КРУИЗ 14-"
					]
				},
				{
					"model": "5292",
					"modelList": [
						"5292 04-"
					]
				},
				{
					"model": "5293",
					"modelList": [
						"5293 06-"
					]
				},
				{
					"model": "6212",
					"modelList": [
						"6212 02- (1227x1019)",
						"6212 М 02- (1331x1231)",
						"6212 ТУРИСТ 02- (1531x1218)"
					]
				},
				{
					"model": "6213",
					"modelList": [
						"6213 07-"
					]
				},
				{
					"model": "6228 ВОЯЖ L",
					"modelList": [
						"6228 ВОЯЖ L 14-"
					]
				}
			]
		},
		{
			"car": "МАЗ",
			"models": [
				{
					"model": "103",
					"modelList": [
						"103 96-"
					]
				},
				{
					"model": "105",
					"modelList": [
						"105 97-14"
					]
				},
				{
					"model": "203",
					"modelList": [
						"203 06-"
					]
				},
				{
					"model": "206",
					"modelList": [
						"206 09-"
					]
				},
				{
					"model": "241",
					"modelList": [
						"241 12-"
					]
				},
				{
					"model": "256",
					"modelList": [
						"256 05-14"
					]
				},
				{
					"model": "500",
					"modelList": [
						"500 63-77 (930x600)"
					]
				},
				{
					"model": "5336 СУПЕР",
					"modelList": [
						"5336 СУПЕР 90- (2030x765)"
					]
				},
				{
					"model": "5551",
					"modelList": [
						"5511 85- (761x982)"
					]
				},
				{
					"model": "6430 ЕВРО",
					"modelList": [
						"6430 ЕВРО 97- (2204x800)"
					]
				}
			]
		},
		{
			"car": "МОСКВИЧ",
			"models": [
				{
					"model": "2141",
					"modelList": [
						"2141 86-02"
					]
				},
				{
					"model": "408",
					"modelList": [
						"408 64-75"
					]
				},
				{
					"model": "412",
					"modelList": [
						"412 67-03"
					]
				}
			]
		},
		{
			"car": "НЕФАЗ",
			"models": [
				{
					"model": "5299",
					"modelList": [
						"5299 00-",
						"5299 06- модернизированный",
						"5299 07- модернизированный, межгородской"
					]
				}
			]
		},
		{
			"car": "ПАЗ",
			"models": [
				{
					"model": "2256 ВЕКТОР 3",
					"modelList": [
						"2256 ВЕКТОР 3 15-"
					]
				},
				{
					"model": "3201",
					"modelList": [
						"3201 72-82"
					]
				},
				{
					"model": "3203",
					"modelList": [
						"3203 06-"
					]
				},
				{
					"model": "3204",
					"modelList": [
						"3204 06-"
					]
				},
				{
					"model": "320405-04 ВЕКТОР NEXT",
					"modelList": [
						"320405-04 ВЕКТОР NEXT 17-"
					]
				},
				{
					"model": "3205",
					"modelList": [
						"3205 89-"
					]
				},
				{
					"model": "3206",
					"modelList": [
						"3206 95-00"
					]
				},
				{
					"model": "3237",
					"modelList": [
						"3237 02-14"
					]
				},
				{
					"model": "4230 АВРОРА",
					"modelList": [
						"4230 АВРОРА 01-08"
					]
				},
				{
					"model": "4234",
					"modelList": [
						"4234 02-"
					]
				},
				{
					"model": "672",
					"modelList": [
						"672 67-89"
					]
				}
			]
		},
		{
			"car": "УАЗ",
			"models": [
				{
					"model": "3151",
					"modelList": [
						"3151 85-03"
					]
				},
				{
					"model": "315195 ХАНТЕР",
					"modelList": [
						"315195 ХАНТЕР 03-"
					]
				},
				{
					"model": "3160",
					"modelList": [
						"3160 97-02"
					]
				},
				{
					"model": "3162 СИМБИР",
					"modelList": [
						"3162 СИМБИР 00-05"
					]
				},
				{
					"model": "3163 ПАТРИОТ",
					"modelList": [
						"3163 ПАТРИОТ 05-14",
						"3163 ПАТРИОТ 14-"
					]
				},
				{
					"model": "452",
					"modelList": [
						"452 66-85"
					]
				},
				{
					"model": "469",
					"modelList": [
						"469 72-85"
					]
				}
			]
		},
		{
			"car": "УРАЛ",
			"models": [
				{
					"model": "375",
					"modelList": [
						"375 61-92"
					]
				},
				{
					"model": "4320",
					"modelList": [
						"4320 77-"
					]
				},
				{
					"model": "6370",
					"modelList": [
						"6370 12-"
					]
				},
				{
					"model": "NEXT",
					"modelList": [
						"NEXT 15-"
					]
				}
			]
		}
	];
	return details;
}
