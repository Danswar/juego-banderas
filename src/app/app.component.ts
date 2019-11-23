import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.iniciar();
  }

  fin=false;
  dificultad = 6;
  banderas = [];
  ganador : String;
  
  iniciar() {
    for (let i = 0; i < this.dificultad; i++) {
      let countriRandom = this.getRandomCountries();
      this.banderas.push({
        nombre: countriRandom.name,
        url: this.imagenUrl(countriRandom)
      });
    }

    let indiceRandom = Math.trunc(Math.random()*(this.dificultad)) ;
    this.ganador = this.banderas[indiceRandom].nombre
    


  }

  imagenUrl(countrie) {
    let endpoint = "http://assets.thebasetrip.com/api/v2/countries/flags/";
    endpoint += countrie.slug;
    endpoint += ".png";
    return endpoint;
  }

  getRandomCountries() {
    let numberRamdon = Math.floor(Math.random() * this.countries.length);
    return this.countries[numberRamdon];
  }


  manejarClick(event){
    if(event==this.ganador){
      alert("Ganaste")
      this.fin=true;
    }
  }



  countries = [
    {
      alpha2Code: "AF",
      name: "Afghanistan",
      slug: "afghanistan"
    },
    {
      alpha2Code: "AL",
      name: "Albania",
      slug: "albania"
    },
    {
      alpha2Code: "DZ",
      name: "Algeria",
      slug: "algeria"
    },
    {
      alpha2Code: "AS",
      name: "American Samoa",
      slug: "american-samoa"
    },
    {
      alpha2Code: "AD",
      name: "Andorra",
      slug: "andorra"
    },
    {
      alpha2Code: "AO",
      name: "Angola",
      slug: "angola"
    },
    {
      alpha2Code: "AI",
      name: "Anguilla",
      slug: "anguilla"
    },
    {
      alpha2Code: "AG",
      name: "Antigua and Barbuda",
      slug: "antigua-and-barbuda"
    },
    {
      alpha2Code: "AR",
      name: "Argentina",
      slug: "argentina"
    },
    {
      alpha2Code: "AM",
      name: "Armenia",
      slug: "armenia"
    },
    {
      alpha2Code: "AW",
      name: "Aruba",
      slug: "aruba"
    },
    {
      alpha2Code: "AU",
      name: "Australia",
      slug: "australia"
    },
    {
      alpha2Code: "AT",
      name: "Austria",
      slug: "austria"
    },
    {
      alpha2Code: "AZ",
      name: "Azerbaijan",
      slug: "azerbaijan"
    },
    {
      alpha2Code: "BS",
      name: "Bahamas",
      slug: "bahamas"
    },
    {
      alpha2Code: "BH",
      name: "Bahrain",
      slug: "bahrain"
    },
    {
      alpha2Code: "BD",
      name: "Bangladesh",
      slug: "bangladesh"
    },
    {
      alpha2Code: "BB",
      name: "Barbados",
      slug: "barbados"
    },
    {
      alpha2Code: "BY",
      name: "Belarus",
      slug: "belarus"
    },
    {
      alpha2Code: "BE",
      name: "Belgium",
      slug: "belgium"
    },
    {
      alpha2Code: "BZ",
      name: "Belize",
      slug: "belize"
    },
    {
      alpha2Code: "BJ",
      name: "Benin",
      slug: "benin"
    },
    {
      alpha2Code: "BM",
      name: "Bermuda",
      slug: "bermuda"
    },
    {
      alpha2Code: "BT",
      name: "Bhutan",
      slug: "bhutan"
    },
    {
      alpha2Code: "BO",
      name: "Bolivia",
      slug: "bolivia"
    },
    {
      alpha2Code: "BA",
      name: "Bosnia and Herzegovina",
      slug: "bosnia-and-herzegovina"
    },
    {
      alpha2Code: "BW",
      name: "Botswana",
      slug: "botswana"
    },
    {
      alpha2Code: "BR",
      name: "Brazil",
      slug: "brazil"
    },
    {
      alpha2Code: "VG",
      name: "British Virgin Islands",
      slug: "british-virgin-islands"
    },
    {
      alpha2Code: "BN",
      name: "Brunei",
      slug: "brunei"
    },
    {
      alpha2Code: "BG",
      name: "Bulgaria",
      slug: "bulgaria"
    },
    {
      alpha2Code: "BF",
      name: "Burkina Faso",
      slug: "burkina-faso"
    },
    {
      alpha2Code: "BI",
      name: "Burundi",
      slug: "burundi"
    },
    {
      alpha2Code: "KH",
      name: "Cambodia",
      slug: "cambodia"
    },
    {
      alpha2Code: "CM",
      name: "Cameroon",
      slug: "cameroon"
    },
    {
      alpha2Code: "CA",
      name: "Canada",
      slug: "canada"
    },
    {
      alpha2Code: "CV",
      name: "Cape Verde",
      slug: "cape-verde"
    },
    {
      alpha2Code: "BQ",
      name: "Caribbean Netherlands",
      slug: "caribbean-netherlands"
    },
    {
      alpha2Code: "KY",
      name: "Cayman Islands",
      slug: "cayman-islands"
    },
    {
      alpha2Code: "CF",
      name: "Central African Republic",
      slug: "central-african-republic"
    },
    {
      alpha2Code: "TD",
      name: "Chad",
      slug: "chad"
    },
    {
      alpha2Code: "CL",
      name: "Chile",
      slug: "chile"
    },
    {
      alpha2Code: "CN",
      name: "China",
      slug: "china"
    },
    {
      alpha2Code: "CX",
      name: "Christmas Island",
      slug: "christmas-island"
    },
    {
      alpha2Code: "CO",
      name: "Colombia",
      slug: "colombia"
    },
    {
      alpha2Code: "KM",
      name: "Comoros",
      slug: "comoros"
    },
    {
      alpha2Code: "CK",
      name: "Cook Islands",
      slug: "cook-islands"
    },
    {
      alpha2Code: "CR",
      name: "Costa Rica",
      slug: "costa-rica"
    },
    {
      alpha2Code: "HR",
      name: "Croatia",
      slug: "croatia"
    },
    {
      alpha2Code: "CU",
      name: "Cuba",
      slug: "cuba"
    },
    {
      alpha2Code: "CW",
      name: "Curaçao",
      slug: "curacao"
    },
    {
      alpha2Code: "CY",
      name: "Cyprus",
      slug: "cyprus"
    },
    {
      alpha2Code: "CZ",
      name: "Czech Republic",
      slug: "czech-republic"
    },
    {
      alpha2Code: "DK",
      name: "Denmark",
      slug: "denmark"
    },
    {
      alpha2Code: "DJ",
      name: "Djibouti",
      slug: "djibouti"
    },
    {
      alpha2Code: "DM",
      name: "Dominica",
      slug: "dominica"
    },
    {
      alpha2Code: "DO",
      name: "Dominican Republic",
      slug: "dominican-republic"
    },
    {
      alpha2Code: "CD",
      name: "DR Congo",
      slug: "dr-congo"
    },
    {
      alpha2Code: "EC",
      name: "Ecuador",
      slug: "ecuador"
    },
    {
      alpha2Code: "EG",
      name: "Egypt",
      slug: "egypt"
    },
    {
      alpha2Code: "SV",
      name: "El Salvador",
      slug: "el-salvador"
    },
    {
      alpha2Code: "GQ",
      name: "Equatorial Guinea",
      slug: "equatorial-guinea"
    },
    {
      alpha2Code: "ER",
      name: "Eritrea",
      slug: "eritrea"
    },
    {
      alpha2Code: "EE",
      name: "Estonia",
      slug: "estonia"
    },
    {
      alpha2Code: "ET",
      name: "Ethiopia",
      slug: "ethiopia"
    },
    {
      alpha2Code: "FK",
      name: "Falkland Islands",
      slug: "falkland-islands"
    },
    {
      alpha2Code: "FO",
      name: "Faroe Islands",
      slug: "faroe-islands"
    },
    {
      alpha2Code: "FJ",
      name: "Fiji",
      slug: "fiji"
    },
    {
      alpha2Code: "FI",
      name: "Finland",
      slug: "finland"
    },
    {
      alpha2Code: "FR",
      name: "France",
      slug: "france"
    },
    {
      alpha2Code: "GF",
      name: "French Guiana",
      slug: "french-guiana"
    },
    {
      alpha2Code: "PF",
      name: "French Polynesia",
      slug: "french-polynesia"
    },
    {
      alpha2Code: "GA",
      name: "Gabon",
      slug: "gabon"
    },
    {
      alpha2Code: "GM",
      name: "Gambia",
      slug: "gambia"
    },
    {
      alpha2Code: "GE",
      name: "Georgia",
      slug: "georgia"
    },
    {
      alpha2Code: "DE",
      name: "Germany",
      slug: "germany"
    },
    {
      alpha2Code: "GH",
      name: "Ghana",
      slug: "ghana"
    },
    {
      alpha2Code: "GI",
      name: "Gibraltar",
      slug: "gibraltar"
    },
    {
      alpha2Code: "GR",
      name: "Greece",
      slug: "greece"
    },
    {
      alpha2Code: "GL",
      name: "Greenland",
      slug: "greenland"
    },
    {
      alpha2Code: "GD",
      name: "Grenada",
      slug: "grenada"
    },
    {
      alpha2Code: "GP",
      name: "Guadeloupe",
      slug: "guadeloupe"
    },
    {
      alpha2Code: "GU",
      name: "Guam",
      slug: "guam"
    },
    {
      alpha2Code: "GT",
      name: "Guatemala",
      slug: "guatemala"
    },
    {
      alpha2Code: "GN",
      name: "Guinea",
      slug: "guinea"
    },
    {
      alpha2Code: "GW",
      name: "Guinea-Bissau",
      slug: "guinea-bissau"
    },
    {
      alpha2Code: "GY",
      name: "Guyana",
      slug: "guyana"
    },
    {
      alpha2Code: "HT",
      name: "Haiti",
      slug: "haiti"
    },
    {
      alpha2Code: "HN",
      name: "Honduras",
      slug: "honduras"
    },
    {
      alpha2Code: "HK",
      name: "Hong Kong",
      slug: "hong-kong"
    },
    {
      alpha2Code: "HU",
      name: "Hungary",
      slug: "hungary"
    },
    {
      alpha2Code: "IS",
      name: "Iceland",
      slug: "iceland"
    },
    {
      alpha2Code: "IN",
      name: "India",
      slug: "india"
    },
    {
      alpha2Code: "ID",
      name: "Indonesia",
      slug: "indonesia"
    },
    {
      alpha2Code: "IR",
      name: "Iran",
      slug: "iran"
    },
    {
      alpha2Code: "IQ",
      name: "Iraq",
      slug: "iraq"
    },
    {
      alpha2Code: "IE",
      name: "Ireland",
      slug: "ireland"
    },
    {
      alpha2Code: "IL",
      name: "Israel",
      slug: "israel"
    },
    {
      alpha2Code: "IT",
      name: "Italy",
      slug: "italy"
    },
    {
      alpha2Code: "CI",
      name: "Ivory Coast",
      slug: "ivory-coast"
    },
    {
      alpha2Code: "JM",
      name: "Jamaica",
      slug: "jamaica"
    },
    {
      alpha2Code: "JP",
      name: "Japan",
      slug: "japan"
    },
    {
      alpha2Code: "JO",
      name: "Jordan",
      slug: "jordan"
    },
    {
      alpha2Code: "KZ",
      name: "Kazakhstan",
      slug: "kazakhstan"
    },
    {
      alpha2Code: "KE",
      name: "Kenya",
      slug: "kenya"
    },
    {
      alpha2Code: "KI",
      name: "Kiribati",
      slug: "kiribati"
    },
    {
      alpha2Code: "KW",
      name: "Kuwait",
      slug: "kuwait"
    },
    {
      alpha2Code: "KG",
      name: "Kyrgyzstan",
      slug: "kyrgyzstan"
    },
    {
      alpha2Code: "LA",
      name: "Laos",
      slug: "laos"
    },
    {
      alpha2Code: "LV",
      name: "Latvia",
      slug: "latvia"
    },
    {
      alpha2Code: "LB",
      name: "Lebanon",
      slug: "lebanon"
    },
    {
      alpha2Code: "LS",
      name: "Lesotho",
      slug: "lesotho"
    },
    {
      alpha2Code: "LR",
      name: "Liberia",
      slug: "liberia"
    },
    {
      alpha2Code: "LY",
      name: "Libya",
      slug: "libya"
    },
    {
      alpha2Code: "LI",
      name: "Liechtenstein",
      slug: "liechtenstein"
    },
    {
      alpha2Code: "LT",
      name: "Lithuania",
      slug: "lithuania"
    },
    {
      alpha2Code: "LU",
      name: "Luxembourg",
      slug: "luxembourg"
    },
    {
      alpha2Code: "MO",
      name: "Macau",
      slug: "macau"
    },
    {
      alpha2Code: "MK",
      name: "Macedonia",
      slug: "macedonia"
    },
    {
      alpha2Code: "MG",
      name: "Madagascar",
      slug: "madagascar"
    },
    {
      alpha2Code: "MW",
      name: "Malawi",
      slug: "malawi"
    },
    {
      alpha2Code: "MY",
      name: "Malaysia",
      slug: "malaysia"
    },
    {
      alpha2Code: "MV",
      name: "Maldives",
      slug: "maldives"
    },
    {
      alpha2Code: "ML",
      name: "Mali",
      slug: "mali"
    },
    {
      alpha2Code: "MT",
      name: "Malta",
      slug: "malta"
    },
    {
      alpha2Code: "MH",
      name: "Marshall Islands",
      slug: "marshall-islands"
    },
    {
      alpha2Code: "MQ",
      name: "Martinique",
      slug: "martinique"
    },
    {
      alpha2Code: "MR",
      name: "Mauritania",
      slug: "mauritania"
    },
    {
      alpha2Code: "MU",
      name: "Mauritius",
      slug: "mauritius"
    },
    {
      alpha2Code: "YT",
      name: "Mayotte",
      slug: "mayotte"
    },
    {
      alpha2Code: "MX",
      name: "Mexico",
      slug: "mexico"
    },
    {
      alpha2Code: "FM",
      name: "Micronesia",
      slug: "micronesia"
    },
    {
      alpha2Code: "MD",
      name: "Moldova",
      slug: "moldova"
    },
    {
      alpha2Code: "MC",
      name: "Monaco",
      slug: "monaco"
    },
    {
      alpha2Code: "MN",
      name: "Mongolia",
      slug: "mongolia"
    },
    {
      alpha2Code: "ME",
      name: "Montenegro",
      slug: "montenegro"
    },
    {
      alpha2Code: "MS",
      name: "Open Sans",
      slug: "Open Sans"
    },
    {
      alpha2Code: "MA",
      name: "Morocco",
      slug: "morocco"
    },
    {
      alpha2Code: "MZ",
      name: "Mozambique",
      slug: "mozambique"
    },
    {
      alpha2Code: "MM",
      name: "Myanmar",
      slug: "myanmar"
    },
    {
      alpha2Code: "NA",
      name: "Namibia",
      slug: "namibia"
    },
    {
      alpha2Code: "NR",
      name: "Nauru",
      slug: "nauru"
    },
    {
      alpha2Code: "NP",
      name: "Nepal",
      slug: "nepal"
    },
    {
      alpha2Code: "NL",
      name: "Netherlands",
      slug: "netherlands"
    },
    {
      alpha2Code: "NC",
      name: "New Caledonia",
      slug: "new-caledonia"
    },
    {
      alpha2Code: "NZ",
      name: "New Zealand",
      slug: "new-zealand"
    },
    {
      alpha2Code: "NI",
      name: "Nicaragua",
      slug: "nicaragua"
    },
    {
      alpha2Code: "NE",
      name: "Niger",
      slug: "niger"
    },
    {
      alpha2Code: "NG",
      name: "Nigeria",
      slug: "nigeria"
    },
    {
      alpha2Code: "NU",
      name: "Niue",
      slug: "niue"
    },
    {
      alpha2Code: "KP",
      name: "North Korea",
      slug: "north-korea"
    },
    {
      alpha2Code: "MP",
      name: "Northern Mariana Islands",
      slug: "northern-mariana-islands"
    },
    {
      alpha2Code: "NO",
      name: "Norway",
      slug: "norway"
    },
    {
      alpha2Code: "OM",
      name: "Oman",
      slug: "oman"
    },
    {
      alpha2Code: "PK",
      name: "Pakistan",
      slug: "pakistan"
    },
    {
      alpha2Code: "PW",
      name: "Palau",
      slug: "palau"
    },
    {
      alpha2Code: "PS",
      name: "Palestine",
      slug: "palestine"
    },
    {
      alpha2Code: "PA",
      name: "Panama",
      slug: "panama"
    },
    {
      alpha2Code: "PG",
      name: "Papua New Guinea",
      slug: "papua-new-guinea"
    },
    {
      alpha2Code: "PY",
      name: "Paraguay",
      slug: "paraguay"
    },
    {
      alpha2Code: "PE",
      name: "Peru",
      slug: "peru"
    },
    {
      alpha2Code: "PH",
      name: "Philippines",
      slug: "philippines"
    },
    {
      alpha2Code: "PL",
      name: "Poland",
      slug: "poland"
    },
    {
      alpha2Code: "PT",
      name: "Portugal",
      slug: "portugal"
    },
    {
      alpha2Code: "PR",
      name: "Puerto Rico",
      slug: "puerto-rico"
    },
    {
      alpha2Code: "QA",
      name: "Qatar",
      slug: "qatar"
    },
    {
      alpha2Code: "CG",
      name: "Republic of the Congo",
      slug: "republic-of-the-congo"
    },
    {
      alpha2Code: "RE",
      name: "Réunion",
      slug: "reunion"
    },
    {
      alpha2Code: "RO",
      name: "Romania",
      slug: "romania"
    },
    {
      alpha2Code: "RU",
      name: "Russia",
      slug: "russia"
    },
    {
      alpha2Code: "RW",
      name: "Rwanda",
      slug: "rwanda"
    },
    {
      alpha2Code: "BL",
      name: "Saint Barthélemy",
      slug: "saint-barthelemy"
    },
    {
      alpha2Code: "KN",
      name: "Saint Kitts and Nevis",
      slug: "saint-kitts-and-nevis"
    },
    {
      alpha2Code: "LC",
      name: "Saint Lucia",
      slug: "saint-lucia"
    },
    {
      alpha2Code: "MF",
      name: "Saint Martin",
      slug: "saint-martin"
    },
    {
      alpha2Code: "PM",
      name: "Saint Pierre and Miquelon",
      slug: "saint-pierre-and-miquelon"
    },
    {
      alpha2Code: "VC",
      name: "Saint Vincent and the Grenadines",
      slug: "saint-vincent-and-the-grenadines"
    },
    {
      alpha2Code: "WS",
      name: "Samoa",
      slug: "samoa"
    },
    {
      alpha2Code: "SM",
      name: "San Marino",
      slug: "san-marino"
    },
    {
      alpha2Code: "ST",
      name: "São Tomé and Príncipe",
      slug: "sao-tome-and-principe"
    },
    {
      alpha2Code: "SA",
      name: "Saudi Arabia",
      slug: "saudi-arabia"
    },
    {
      alpha2Code: "SN",
      name: "Senegal",
      slug: "senegal"
    },
    {
      alpha2Code: "RS",
      name: "Serbia",
      slug: "serbia"
    },
    {
      alpha2Code: "SC",
      name: "Seychelles",
      slug: "seychelles"
    },
    {
      alpha2Code: "SL",
      name: "Sierra Leone",
      slug: "sierra-leone"
    },
    {
      alpha2Code: "SG",
      name: "Singapore",
      slug: "singapore"
    },
    {
      alpha2Code: "SX",
      name: "Sint Maarten",
      slug: "sint-maarten"
    },
    {
      alpha2Code: "SK",
      name: "Slovakia",
      slug: "slovakia"
    },
    {
      alpha2Code: "SI",
      name: "Slovenia",
      slug: "slovenia"
    },
    {
      alpha2Code: "SB",
      name: "Solomon Islands",
      slug: "solomon-islands"
    },
    {
      alpha2Code: "SO",
      name: "Somalia",
      slug: "somalia"
    },
    {
      alpha2Code: "ZA",
      name: "South Africa",
      slug: "south-africa"
    },
    {
      alpha2Code: "KR",
      name: "South Korea",
      slug: "south-korea"
    },
    {
      alpha2Code: "ES",
      name: "Spain",
      slug: "spain"
    },
    {
      alpha2Code: "LK",
      name: "Sri Lanka",
      slug: "sri-lanka"
    },
    {
      alpha2Code: "SD",
      name: "Sudan",
      slug: "sudan"
    },
    {
      alpha2Code: "SR",
      name: "Suriname",
      slug: "suriname"
    },
    {
      alpha2Code: "SZ",
      name: "Swaziland",
      slug: "swaziland"
    },
    {
      alpha2Code: "SE",
      name: "Sweden",
      slug: "sweden"
    },
    {
      alpha2Code: "CH",
      name: "Switzerland",
      slug: "switzerland"
    },
    {
      alpha2Code: "SY",
      name: "Syria",
      slug: "syria"
    },
    {
      alpha2Code: "TW",
      name: "Taiwan",
      slug: "taiwan"
    },
    {
      alpha2Code: "TJ",
      name: "Tajikistan",
      slug: "tajikistan"
    },
    {
      alpha2Code: "TZ",
      name: "Tanzania",
      slug: "tanzania"
    },
    {
      alpha2Code: "TH",
      name: "Thailand",
      slug: "thailand"
    },
    {
      alpha2Code: "TL",
      name: "Timor-Leste",
      slug: "timor-leste"
    },
    {
      alpha2Code: "TG",
      name: "Togo",
      slug: "togo"
    },
    {
      alpha2Code: "TK",
      name: "Tokelau",
      slug: "tokelau"
    },
    {
      alpha2Code: "TO",
      name: "Tonga",
      slug: "tonga"
    },
    {
      alpha2Code: "TT",
      name: "Trinidad and Tobago",
      slug: "trinidad-and-tobago"
    },
    {
      alpha2Code: "TN",
      name: "Tunisia",
      slug: "tunisia"
    },
    {
      alpha2Code: "TR",
      name: "Turkey",
      slug: "turkey"
    },
    {
      alpha2Code: "TM",
      name: "Turkmenistan",
      slug: "turkmenistan"
    },
    {
      alpha2Code: "TC",
      name: "Turks and Caicos Islands",
      slug: "turks-and-caicos-islands"
    },
    {
      alpha2Code: "TV",
      name: "Tuvalu",
      slug: "tuvalu"
    },
    {
      alpha2Code: "UG",
      name: "Uganda",
      slug: "uganda"
    },
    {
      alpha2Code: "UA",
      name: "Ukraine",
      slug: "ukraine"
    },
    {
      alpha2Code: "AE",
      name: "United Arab Emirates",
      slug: "united-arab-emirates"
    },
    {
      alpha2Code: "GB",
      name: "United Kingdom",
      slug: "united-kingdom"
    },
    {
      alpha2Code: "US",
      name: "United States",
      slug: "united-states"
    },
    {
      alpha2Code: "VI",
      name: "United States Virgin Islands",
      slug: "united-states-virgin-islands"
    },
    {
      alpha2Code: "UY",
      name: "Uruguay",
      slug: "uruguay"
    },
    {
      alpha2Code: "UZ",
      name: "Uzbekistan",
      slug: "uzbekistan"
    },
    {
      alpha2Code: "VU",
      name: "Vanuatu",
      slug: "vanuatu"
    },
    {
      alpha2Code: "VA",
      name: "Vatican City",
      slug: "vatican-city"
    },
    {
      alpha2Code: "VE",
      name: "Venezuela",
      slug: "venezuela"
    },
    {
      alpha2Code: "VN",
      name: "Vietnam",
      slug: "vietnam"
    },
    {
      alpha2Code: "WF",
      name: "Wallis and Futuna",
      slug: "wallis-and-futuna"
    },
    {
      alpha2Code: "EH",
      name: "Western Sahara",
      slug: "western-sahara"
    },
    {
      alpha2Code: "YE",
      name: "Yemen",
      slug: "yemen"
    },
    {
      alpha2Code: "ZM",
      name: "Zambia",
      slug: "zambia"
    },
    {
      alpha2Code: "ZW",
      name: "Zimbabwe",
      slug: "zimbabwe"
    }
  ];
}
