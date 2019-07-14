
let _ifps = [];

const resources = {
  countries: [
      "Christa Ethio",
      "Niaseguern",
      "Tarly",
      "Wisouthria",
      "Bemeba",
      "Pasiatu",
      "Mocamebritishqueca",
      "Landmo Ablic",
      "North Cona",
      "Ninslands Kingsloki Land",
      "Lizesint",
      "Laua Thuaree",
      "North Andblicnte",
      "Kemo",
      "Koa Tineni",
      "Huzue Thedanew",
      "Heser",
      "Nafa Coand",
      "Blicu",
      "Ngozstan Recai Isles",
      "Neu",
      "Denhaitherncam",
      "Kyrvisdiamador",
      "Voki Georgo",
      "Likitts Inewter",
      "Piaandslandsga",
      "Dofri",
      "Vaand",
      "Jannited Hostantzer",
      "Ncentma Kongco",
      "Auzi Depuerpri",
      "Bopoba",
      "Cabangzamhongreen",
      "Elera",
      "Frenchvo Benaire",
      "Djinited",
      "Blicxi Nilandgua",
      "Iratedand",
      "Nirael",
      "Caperdanna Land",
      "Ofo",
      "Ingo",
      "Neri",
      "Republic of Raso Dantii",
      "Chilandof",
      "Relaos Cobo",
      "Nionbo",
      "Thestatesunia",
      "Wansa",
      "Sulandgin",
      "Dalip",
      "Dianturu",
      "Blicalri",
      "Ruroc Gamipu Republic",
      "Saugy Nitedcao",
      "Loupejitvia",
      "Lanti",
      "Ntserjibu",
      "Ranmasgium",
      "Verdena Bialei",
      "Republic of Ntile",
      "Republic of Uma Pusouthis",
      "Salbardslands",
      "Southern Blichrain Malmamar",
      "Uwe",
      "Ldoba Sansey",
      "Lklandvada",
      "Ana Lands",
      "Mitome",
      "Fala Reso",
      "United Lomin",
      "Statesroe",
      "Ilia",
      "Pore Leland Island",
      "Roonman Dirkeyla",
      "Southern Lilands Chellesslands",
      "Tiacarrseymac",
      "Eastern Fusigal",
      "Ghany",
      "Jamayentone",
      "Pinespamu",
      "Boslandstinevifrance",
      "Capaalthern",
      "Guintarc Rkmencipe",
      "Momaidu Republic",
      "North Folki Triti",
      "South Nguilto Leonery",
      "United Rei",
      "Kicani",
      "Landto Hachislo",
      "Nire",
      "Southva",
      "Aubisbedota",
      "Valandba",
      "Soropeto",
      "Mani Vimo",
      "Newne",
      "Ngala",
      "Argam",
      "Niage Queeeast"
    ],
    cities: [
      "Plirrough",
      "Gammouth",
      "Shetin",
      "Zlowood",
      "Wraccester",
      "Avrolk",
      "Teigh",
      "Dares",
      "Eimver",
      "Atheset",
      "Vrutol",
      "Ufliton",
      "Yoburgh",
      "Trehdale",
      "Zuowood",
      "Gans",
      "Chard",
      "Wey",
      "Aloby",
      "Oitnard",
      "Fenginia",
      "Cruinbury",
      "Uchusey",
      "Shagow",
      "Budgan",
      "Vloni",
      "Frine",
      "Ylesa",
      "Ontgan",
      "Ensnard",
      "Lebridge",
      "Croidford",
      "Shuonmouth",
      "Mibert",
      "Paving",
      "Dreigh",
      "Cesa",
      "Trans",
      "Ilaville",
      "Anepus",
      "Bovine",
      "Crorgan",
      "Yhiaphis",
      "Fiwood",
      "Volrora",
      "Wrolis",
      "Sose",
      "Zrurg",
      "Olntin",
      "Ertonron"
    ],
    persons: [
      "Manal Carter",
      "Lylah Hutchings",
      "Bryce Clarkson",
      "Janet Todd",
      "Danielle Gamble",
      "Destiny Johnston",
      "Ryker Page",
      "Jaeden Churchill",
      "Derry Marks",
      "Carlos Hewitt",
      "Jillian Forster",
      "Nafisa Sawyer",
      "Gage Cross",
      "Betsy Kirkpatrick",
      "Efan Humphries",
      "Buster Rudd",
      "Kamran Young",
      "Eliza Berry",
      "Rebekka Powers",
      "Dollie Parker",
      "Tamar Hughes",
      "Simona Dougherty",
      "Tyrone Howard",
      "Luca Small",
      "Zakary Holland",
      "Esmai Peters",
      "Mia Mack",
      "Nellie Thornton",
      "Natalia Coles",
      "Safah Gross",
      "Khadija Green",
      "Rubie Gill",
      "Morgan Hernandez",
      "Rami Ortiz",
      "Faiza Moore",
      "Maria Huff",
      "Ava-Grace Hardin",
      "Alix Mcclure",
      "Sydney Moss",
      "Kuba Easton",
      "Ritchie Major",
      "Eshal Ridley",
      "Sanya Odling",
      "Caitlyn Stephens",
      "Ethel Shaffer",
      "Nabeel Milne",
      "Tasha Mustafa",
      "Jeanne Randolph",
      "Sharmin Mccarty",
      "Cally Walter",
      "Romeo Bradford",
      "Ellesha Knapp",
      "Beverley Bentley",
      "Jimmie Bowman",
      "Jaheim Barrett",
      "Lorena James",
      "Charlotte Gonzales",
      "Olivier Monaghan",
      "Brendan Hamilton",
      "Paige Dixon",
      "Una Hogg",
      "Nile Redmond",
      "Emmett Delarosa",
      "Huda Donaldson",
      "Caoimhe Weiss",
      "Muna Wells",
      "Abid Garrett",
      "Preston Steele",
      "Bernice Chen",
      "Aj Callahan",
      "Sue Donovan",
      "Gruffydd Lucero",
      "Abdulahi Macfarlane",
      "Carys Fitzpatrick",
      "Keanu Macleod",
      "Melanie Fox",
      "Glyn Hays",
      "Patricia Roberts",
      "Joshua Redfern",
      "Davey Clifford",
      "Joel Talley",
      "Layla-Rose Atherton",
      "Mollie Doherty",
      "Celine Hester",
      "Sylvie Gomez",
      "Reem Stamp",
      "Clarissa Bartlett",
      "Adelle Donald",
      "Corben Broughton",
      "Kirstie Frank",
      "Monica Holding",
      "Harvey Horton",
      "Terence Merrill",
      "Aleah Dickerson",
      "Antoinette Craft",
      "Clarke Chamberlain",
      "Emmeline David",
      "Krzysztof Dalton",
      "Ariella Simmonds",
      "Roshni Mann"
    ],
    parties: [
      "Global Pacifist Party",
      "National Communist Party",
      "Social Immunity Party",
      "Undivided Immunity Party",
      "Eastern Liberation Movement",
      "United Reconciliation Party",
      "National Voter Coalition",
      "Traditional Defiance League",
      "Independent Integrity Party",
      "Northern Voice Party",
      "Rational Amendment League",
      "Patriotic Integrity Party",
      "Rational Patriot Party",
      "Global Monarchist Party",
      "Southern Labor Party",
      "Free Denizen League",
      "Theocratic Coalition",
      "Social Right Party",
      "Monarchist Party",
      "Universal Monarchist League",
      "Unified Resistance Movement",
      "Peaceful Workers Party",
      "Patriotic Coalition Group",
      "Undivided Civil Rights Coalition",
      "Progressive Nature Party",
      "Contemporary Affinity Movement",
      "Revolutionary Administration Coalition",
      "Liberal Civil Rights Group",
      "Constitutional Voter Party",
      "Fanatical Fascist Party",
      "Western Working Class Party",
      "Advanced State Union",
      "Vocal Probation Group",
      "World Solidarity Party",
      "Northern Impartiality League",
      "World Compromise Union",
      "Patriotic Right Coalition",
      "National Justice Party",
      "Liberal Amendment Party",
      "Unified Citizens Union",
      "First Household Coalition",
      "Peaceful Earth Coalition",
      "Contemporary Egalitarianism Movement",
      "Federal Taxpayer Movement",
      "Organized Regulation Party",
      "Patriotic Separatist League",
      "Liberation Group",
      "Vocal Patriot Party",
      "Universal Rehabilitation League",
      "Global Opportunity Union",
      "Social Evaluation Group",
      "Social Welfare Party",
      "Eastern Green League",
      "Peaceful Industry Group",
      "New Socialist Party",
      "Peaceful Formation Party",
      "Free Independence Party",
      "Unified Libertarian League",
      "People's Reformation Party",
      "Independent Probation Group",
      "Peaceful Earth Union",
      "Unconditional Labor Union",
      "Undivided Right Wing Party",
      "Prime Liberation Party",
      "Federal Evolution Party",
      "Global Choice Coalition",
      "Traditional Nationalist Party",
      "Lawful Formation Party",
      "World Unionist Union",
      "Rational Communist League"
    ],
    viruses: [
      "Marsh Intolerance",
      "Swine Scurvy",
      "Wired Hepatitis",
      "Goose Asthma",
      "Desolation Soreness",
      "Withering Cannibalism",
      "Feline Gangrene",
      "Stiffening",
      "Tiring Cough",
      "Dwarf Syphilis",
      "Avian Blight",
      "Hiccup Ache",
      "Impossible Cholera",
      "Violet Blisters",
      "Wired Anxiety",
      "Ghost Tongue",
      "Dwarf Sneeze",
      "Winter Dehydration",
      "Hopeless Allergy",
      "Banshee Heart",
      "Happy Infection",
      "Vein Anthrax",
      "Goblin Syndrome",
      "Goblin Hallucinations",
      "Pale Decay",
      "Sheep Anthrax",
      "Goblin Baldness",
      "Crying Deafness",
      "Numb Bones",
      "Brain Allergy",
      "Trembling Rabies",
      "Hell Sores",
      "Temporary Tongue",
      "Quiet Plague"
    ],
    regions: [
      "Aejiqar",
      "Phassomond",
      "Leadotion",
      "Plaerecia",
      "Chaeyeacion",
      "The Sapphire Nexus",
      "The Imagined Reach",
      "The Dragon Earth",
      "The Hell Province",
      "The Ash Sanctuary",
      "Cearradale",
      "Annialan",
      "Craeletria",
      "Vussesos",
      "Vriowejan",
      "The Boiling Fields",
      "The Void Nation",
      "The White Isles",
      "Eokomel",
      "Coddiopia",
      "Ceccuthra",
      "Yudothas",
      "Plaefeatora",
      "The Lonely Territory",
      "The Hidden Nation",
      "The Ever Ocean",
      "The Dying Lands",
      "The Storm Lands",
      "Seazujan",
      "Efitara",
      "Kleabberene",
      "Haphiabis",
      "Woqeodell",
      "The Ageless Earth",
      "The Perfect Territory",
      "The Sterile Isle",
      "The Solar Dominion",
      "Hechetria",
      "Yioreathra",
      "Riakkudu",
      "Creggetall",
      "Slellithae",
      "The Edge Valley",
      "The Black Province",
      "The Virtual Sanctuary",
      "The Savage Valley",
      "The Ember Lands"
    ],
    agencies: [
      "Plum Decisive Grater",
      "Broken Fuzzy Centaur",
      "Blonde Elemental Phenom",
      "Transcendental Mighty Mafia",
      "Plastic Triple-Dub",
      "Primo Tinsnips",
      "Prehistoric Pantry",
      "Visionary Nimble Gem",
      "Tart Plastic Octomom",
      "Unique Otter",
      "Silky Sharp Brain",
      "Infused Liberties",
      "Fragrant Boogie Sky",
      "Vibrant Absinthe",
      "Melodic Engagement Foccacia",
      "Movement",
      "Epic Carrot",
      "Global 140",
      "Fluffy Primo Pangea",
      "Dynamic Werewolf",
      "Tiny Monsoon",
      "Windy Manta Ray"
    ],
    groups: [
      "Bitter Scene",
      "Crazy Siren",
      "Blurred Code",
      "Overdose",
      "Jackpot",
      "Network",
      "Fuse",
      "Pantheon of Luminance",
      "Analogy of Harmony",
      "King of Storms",
      "Mirror Collapse",
      "Clumsy Dolls",
      "Balanced Nemesis",
      "Infancy",
      "Refuge",
      "Amnesia",
      "Valor",
      "Method of Tonight",
      "Taste of Legend",
      "Foundation of Screams",
      "Blue Orchestra",
      "Life Gossip",
      "New Division",
      "Naught",
      "Urgency",
      "Wish",
      "Armageddon",
      "Joy of Solitude",
      "Boy of Sin",
      "Piece of Strife",
      "Vanished Parade",
      "Jade Souls",
      "Precious Dreamers",
      "Kayo",
      "Chemistry",
      "Strike",
      "Blaze",
      "Mutant of Utopia",
      "Collapse of Space",
      "Figment of One Night",
      "Shallow Aces",
      "Weeping Tales",
      "Dead Phobia",
      "Phonic",
      "Destiny",
      "Spunk",
      "Hustle",
      "Marvel of Defiance",
      "Piece of Woe",
      "Fever of Rejection",
      "Natural Gossip",
      "Velvet Tragedy",
      "Handsome Therapy",
      "Savage",
      "Fraud",
      "Knockout",
      "Mutant",
      "Queen of Digitalism",
      "Feeling of Perfection",
      "Faces of Revolution",
      "Delirious Robots",
      "Mirror Brothers",
      "Surplus",
      "Particle",
      "Utopia",
      "Mystery",
      "Taste of Elegance",
      "Surprise of Grace",
      "Surprise of Utopia"
    ]
};

function generateIfp(country1, country2, country3,
  country4, person1, person2, party1, party2,
  virus1, group1, region1, agency1, agency2, city1, index) {
    let genericIfps = [
      {
        question:
          "Will the " + party1 + " party win the most seats in " + country1 + "’s general election?"
      },
      {
        question:
          "Will the " + party1 + " party win the most seats in " + country1 + "’s election for the Senate?"
      },
      {
        question:
          "Before 8 September 2019, will a new " + country1 + " government receive a vote of confidence from both houses of Parliament?"
      },
      {
        question:
          "Will " + party1 + " and " + party2 + " win most seats in " + country1 + "'s upcoming parliamentary election?"
      },
      {
        question:
          "Will the " + party1 + " party win fewer than 41 seats in " + country1 + "’s election for the Chamber of Deputies on 22 April 2019?"
      },
      {
        question:
          "Will " + country1 + " hold a general election between 21 July and 21 August 2019?"
      },
      {
        question:
          "Will " + country1 + "'s Supreme Leader " + person1 + " experience a significant leadership disruption before 1 July 2019?"
      },
      {
        question:
          "Will " + country1 + "'s President " + person1 + " experience a significant leadership disruption before 1 September 2019?"
      },
      {
        question:
          "Will " + country1 + "'s Prime Minister " + person1 + " experience a significant leadership disruption before 1 September 2019?"
      },
      {
        question:
          "Will " + country1 + " forces take " + region1 + " before 8 September 2019?"
      },
      {
        question:
          "Before 8 September 2019, will " + country1 + " announce that it is ending the blockade of COUNTRY's " + city1 + " port?"
      },
      {
        question:
          "Will " + country1 + "'s referendum to repeal the Eighth Amendment pass?"
      },
      {
        question:
          "Will " + country1 + " announce it is enriching uranium above the 4.0% level before 23 May 2019?"
      },
      {
        question:
          "Will " + country1 + " reapply to join the Communal Union of Nations before 8 September 2019?"
      },
      {
        question:
          "Will " + country1 + " launch a medium, intermediate, or intercontinental range ballistic missile or a satellite between 16 and 23 May 2019?"
      },
      {
        question:
          "Will " + country1 + "’s President announce the selection of a Prime Minister before 23 May 2019?"
      },
      {
        question:
          "Will " + country1 + "'s National assembly elect " + person1 + " as President of the Council of States and the Council of Ministers on 19 April 2019?"
      },
      {
        question:
          "Will any G7 nation engage in an acknowledged national military attack against " + country1 + " before 1 May 2019?"
      },
      {
        question: "Will " + country1 + "’s municipal elections be held on 6 May 2019?"
      },
      {
        question:
          "Will " + country1 + " execute or be targeted in an acknowledged national military attack before 1 August 2019?"
      },
      {
        question:
          "Before 8 July 2019, will " + country1 + ", " + country2 + " or " + country3 + " accuse " + country4 + " of intervening militarily in its territory without permission?"
      },
      {
        question:
          "Between 18 April and 30 June 2019, will " + country1 + " and " + country2 + " announce the start of a joint military operation against " + country3 + " forces?"
      },
      {
        question:
          "Before 8 September 2019, will a new " + country1 + " Council of Ministers receive a vote of confidence?"
      },
      {
        question:
          "Will " + country1 + " execute or be targeted in an acknowledged national military attack before 1 September 2019?"
      },
      {
        question:
          "Before 8 September 2019, will " + country1 + "'s parliament schedule a vote to amend Section 25 of the constitution?"
      },
      {
        question:
          "Will " + agency1 + " record any riot/protest events in " + country1 + " in July 2019?"
      },
      {
        question:
          "Will " + agency1 + " record more than one riot/protest event in " + country1 + " on 19 May 2019?"
      },
      {
        question:
          "Will " + agency1 + " record any civilian fatalities in " + country1 + " in June 2019?"
      },
      {
        question:
          "Will any " + agency1 + " member invoke Article 4 or Article 5 before 8 September 2019?"
      },
      {
        question:
          "Will " + agency1 + " reporters " + person1 + " or " + person2 + " be released before 8 September 2019?"
      },
      {
        question:
          "Will " + agency1 + ", or " + agency2 + " issue a sovereign credit rating for " + country1 + " before 8 September 2019?"
      },
      {
        question:
          "Will the " + agency1 + " declare a Public Health Emergency of International Concern (PHEIC) before 1 September 2019?"
      },
      {
        question:
          "Will " + agency1 + " publish a Food Security Alert with \"famine\" and \"" + country1 + "\" in its headline between 27 April 2019 and 31 July 2019?"
      },
      {
        question:
          "Will the International Security Council adopt a resolution concerning " + country1 + " between 31 May 2019 and 31 August 2019?"
      },
      {
        question:
          "Will there be a heavy fuel oil spill of 1,000 gallons or more in the " + region1 + " between 6 June and 8 September 2019?"
      },
      {
        question:
          "Will the " + group1 + " participate in official peace talks with the governments of " + country1 + " or the " + country2 + " before 8 September 2019?"
      },
      {
        question:
          "Before 8 September 2019, will " + country1 + " tariffs on " + country2 + " soybeans take effect?"
      },
      {
        question:
          "Before 12 July 2019, will " + country1 + " announce a change to its official name?"
      },
      {
        question:
          "Will the Democratic People's Republic of " + country1 + " execute or be targeted in an acknowledged national military attack before 1 August 2019?"
      },
      {
        question:
          "Will the Council of the " + region1 + " Union make an Article 7.1 determination against a member state before 8 September 2019?"
      },
      {
        question:
          "Before 8 September 2018, will negotiators announce the completion of the Regional Comprehensive Economic Partnership (RCEP) free trade agreement?"
      },
      {
        question:
          "Before 1 August 2019, will the " + country1 + " government and the " + group1 + " meet for official negotiations over " + region1 + "?"
      },
      {
        question:
          "Before 8 September 2019, will " + country1 + "'s " + group1 + " rebels sign a peace agreement?"
      },
      {
        question:
          "Before 8 September 2019, will the Council of the " + region1 + " Union adopt a directive on taxation of digital business activities?"
      },
      {
        question:
          "Will either the International Atomic Energy Agency (IAEA) or the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) conduct on-site inspections of a nuclear facility in " + country1 + " before 8 September 2019?"
      },
      {
        question:
          "Will there be a locally-transmitted case of the " + virus1 + " virus in " + country1 + ", " + country2 + ", " + country3 + " or " + country4 + " between 1 June 2019 and 31 August 2019?"
      },
      {
        question:
          "Will there be a locally-transmitted case of the " + virus1 + " virus in " + country1 + " between 1 April 2019 and 31 May 2019?"
      },
      {
        question:
          "Will " + person1 + " meet the head of government from any G7 nation in-person before 15 June 2019?"
      },
      {
        question:
          "Will any " + country1 + "’s national military launch a nuclear weapon at any other country before 1 June 2019?"
      },
      {
        question:
          "Will the International Security Council adopt more than one resolution concerning the Democratic People's Republic of " + country1 + " between 8 March 2019 and 31 May 2019?"
      },
      {
        question:
          "Between 16 and 23 May 2019, will " + group1 + " attack a diplomatic facility in " + region1 + "?"
      },
      {
        question:
          "Before 1 June 2019, will any of the signatories to the " + country1 + " nuclear deal announce they are withdrawing?"
      },
      {
        question:
          "Will a " + group1 + " candidate win a seat in the " + country1 + " Senate or House of Representatives in the upcoming legislative elections?"
      }
    ];
    return genericIfps[index].question;
}

let country1 = "";
let country2 = "";
let country3 = "";
let country4 = "";
let person1 = "";
let person2 = "";
let party1 = "";
let party2 = "";
let virus1 = "";
let group1 = "";
let region1 = "";
let agency1 = "";
let agency2 = "";
let city1 = "";

let genericIfps = [
  {
    question:
      "Will the " + party1 + " party win the most seats in " + country1 + "’s general election?"
  },
  {
    question:
      "Will the " + party1 + " party win the most seats in " + country1 + "’s election for the Senate?"
  },
  {
    question:
      "Before 8 September 2019, will a new " + country1 + " government receive a vote of confidence from both houses of Parliament?"
  },
  {
    question:
      "Will " + party1 + " and " + party2 + " win most seats in " + country1 + "'s upcoming parliamentary election?"
  },
  {
    question:
      "Will the " + party1 + " party win fewer than 41 seats in " + country1 + "’s election for the Chamber of Deputies on 22 April 2019?"
  },
  {
    question:
      "Will " + country1 + " hold a general election between 21 July and 21 August 2019?"
  },
  {
    question:
      "Will " + country1 + "'s Supreme Leader PERSON experience a significant leadership disruption before 1 July 2019?"
  },
  {
    question:
      "Will " + country1 + "'s President PERSON experience a significant leadership disruption before 1 September 2019?"
  },
  {
    question:
      "Will " + country1 + "'s Prime Minister " + person1 + " experience a significant leadership disruption before 1 September 2019?"
  },
  {
    question:
      "Will " + country1 + " forces take " + region1 + " before 8 September 2019?"
  },
  {
    question:
      "Before 8 September 2019, will " + country1 + " announce that it is ending the blockade of COUNTRY's " + city1 + " port?"
  },
  {
    question:
      "Will " + country1 + "'s referendum to repeal the Eighth Amendment pass?"
  },
  {
    question:
      "Will " + country1 + " announce it is enriching uranium above the 4.0% level before 23 May 2019?"
  },
  {
    question:
      "Will " + country1 + " reapply to join the Communal Union of Nations before 8 September 2019?"
  },
  {
    question:
      "Will " + country1 + " launch a medium, intermediate, or intercontinental range ballistic missile or a satellite between 16 and 23 May 2019?"
  },
  {
    question:
      "Will " + country1 + "’s President announce the selection of a Prime Minister before 23 May 2019?"
  },
  {
    question:
      "Will " + country1 + "'s National assembly elect " + person1 + " as President of the Council of States and the Council of Ministers on 19 April 2019?"
  },
  {
    question:
      "Will any G7 nation engage in an acknowledged national military attack against " + country1 + " before 1 May 2019?"
  },
  {
    question: "Will " + country1 + "’s municipal elections be held on 6 May 2019?"
  },
  {
    question:
      "Will " + country1 + " execute or be targeted in an acknowledged national military attack before 1 August 2019?"
  },
  {
    question:
      "Before 8 July 2019, will " + country1 + ", " + country2 + " or " + country3 + " accuse " + country4 + " of intervening militarily in its territory without permission?"
  },
  {
    question:
      "Between 18 April and 30 June 2019, will " + country1 + " and " + country2 + " announce the start of a joint military operation against " + country3 + " forces?"
  },
  {
    question:
      "Before 8 September 2019, will a new " + country1 + " Council of Ministers receive a vote of confidence?"
  },
  {
    question:
      "Will " + country1 + " execute or be targeted in an acknowledged national military attack before 1 September 2019?"
  },
  {
    question:
      "Before 8 September 2019, will " + country1 + "'s parliament schedule a vote to amend Section 25 of the constitution?"
  },
  {
    question:
      "Will " + agency1 + " record any riot/protest events in " + country1 + " in July 2019?"
  },
  {
    question:
      "Will " + agency1 + " record more than one riot/protest event in " + country1 + " on 19 May 2019?"
  },
  {
    question:
      "Will " + agency1 + " record any civilian fatalities in " + country1 + " in June 2019?"
  },
  {
    question:
      "Will any " + agency1 + " member invoke Article 4 or Article 5 before 8 September 2019?"
  },
  {
    question:
      "Will " + agency1 + " reporters " + person1 + " or " + person2 + " be released before 8 September 2019?"
  },
  {
    question:
      "Will " + agency1 + ", or " + agency2 + " issue a sovereign credit rating for " + country1 + " before 8 September 2019?"
  },
  {
    question:
      "Will the " + agency1 + " declare a Public Health Emergency of International Concern (PHEIC) before 1 September 2019?"
  },
  {
    question:
      "Will " + agency1 + " publish a Food Security Alert with \"famine\" and \"" + country1 + "\" in its headline between 27 April 2019 and 31 July 2019?"
  },
  {
    question:
      "Will the International Security Council adopt a resolution concerning " + country1 + " between 31 May 2019 and 31 August 2019?"
  },
  {
    question:
      "Will there be a heavy fuel oil spill of 1,000 gallons or more in the " + region1 + " between 6 June and 8 September 2019?"
  },
  {
    question:
      "Will the " + group1 + " participate in official peace talks with the governments of " + country1 + " or the " + country2 + " before 8 September 2019?"
  },
  {
    question:
      "Before 8 September 2019, will " + country1 + " tariffs on " + country2 + " soybeans take effect?"
  },
  {
    question:
      "Before 12 July 2019, will " + country1 + " announce a change to its official name?"
  },
  {
    question:
      "Will the Democratic People's Republic of " + country1 + " execute or be targeted in an acknowledged national military attack before 1 August 2019?"
  },
  {
    question:
      "Will the Council of the " + region1 + " Union make an Article 7.1 determination against a member state before 8 September 2019?"
  },
  {
    question:
      "Before 8 September 2018, will negotiators announce the completion of the Regional Comprehensive Economic Partnership (RCEP) free trade agreement?"
  },
  {
    question:
      "Before 1 August 2019, will the " + country1 + " government and the " + group1 + " meet for official negotiations over " + region1 + "?"
  },
  {
    question:
      "Before 8 September 2019, will " + country1 + "'s " + group1 + " rebels sign a peace agreement?"
  },
  {
    question:
      "Before 8 September 2019, will the Council of the " + region1 + " Union adopt a directive on taxation of digital business activities?"
  },
  {
    question:
      "Will either the International Atomic Energy Agency (IAEA) or the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) conduct on-site inspections of a nuclear facility in " + country1 + " before 8 September 2019?"
  },
  {
    question:
      "Will there be a locally-transmitted case of the " + virus1 + " virus in " + country1 + ", " + country2 + ", " + country3 + " or " + country4 + " between 1 June 2019 and 31 August 2019?"
  },
  {
    question:
      "Will there be a locally-transmitted case of the " + virus1 + " virus in " + country1 + " between 1 April 2019 and 31 May 2019?"
  },
  {
    question:
      "Will " + person1 + " meet the head of government from any G7 nation in-person before 15 June 2019?"
  },
  {
    question:
      "Will any " + country1 + "’s national military launch a nuclear weapon at any other country before 1 June 2019?"
  },
  {
    question:
      "Will the International Security Council adopt more than one resolution concerning the Democratic People's Republic of " + country1 + " between 8 March 2019 and 31 May 2019?"
  },
  {
    question:
      "Between 16 and 23 May 2019, will " + group1 + " attack a diplomatic facility in " + region1 + "?"
  },
  {
    question:
      "Before 1 June 2019, will any of the signatories to the " + country1 + " nuclear deal announce they are withdrawing?"
  },
  {
    question:
      "Will a " + group1 + " candidate win a seat in the " + country1 + " Senate or House of Representatives in the upcoming legislative elections?"
  }
];

for (let i = 0; i < (genericIfps.length * 3); i++) {
  let persons = _.shuffle(resources.persons);
  let parties = _.shuffle(resources.parties);
  let viruses = _.shuffle(resources.viruses);
  let groups = _.shuffle(resources.groups);
  let regions = _.shuffle(resources.regions);
  let countries = _.shuffle(resources.countries);
  let agencies = _.shuffle(resources.agencies);
  let cities = _.shuffle(resources.cities);

  country1 = countries[0];
  country2 = countries[1];
  country3 = countries[2];
  country4 = countries[3];
  person1 = persons[0];
  person2 = persons[1];
  party1 = parties[0];
  party2 = parties[1];
  virus1 = viruses[0];
  group1 = groups[0];
  region1 = regions[0];
  agency1 = agencies[0];
  agency2 = agencies[1];
  city1 = cities[0];

  let clonedifp = { question : generateIfp(country1, country2, country3,
    country4, person1, person2, party1, party2,
    virus1, group1, region1, agency1, agency2, city1, i % genericIfps.length)
  };

  _ifps.push(clonedifp);
}
export const generatedIfps = _ifps;
