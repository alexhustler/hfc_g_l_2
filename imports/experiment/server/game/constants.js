// Configuration options
import { generatedIfps } from "./ifpsGenerator";
export const roundCount = 53;
export const willHappenCount = Math.round(0.5 * roundCount);
export const globalInaccurateCount = Math.round(0.25 * roundCount);
export const localInaccurateCount = Math.round(0.35 * roundCount);


// Game data
export const data = {
  sources: [
    {
      name: "Carson Valley Times",
      handle: "cvalleytimes"
    },
    {
      name: "Visalia Times-Delta",
      handle: "vtdnews"
    },
    {
      name: "Alexandria Echo Press",
      handle: "echopress"
    },
    {
      name: "Effingham Daily News",
      handle: "ednmain"
    },
    {
      name: "Meridian Star",
      handle: "meridianstar"
    },
    {
      name: "Lake Gazette",
      handle: "LakeGazette"
    },
    {
      name: "Rogersville Review",
      handle: "RogReview"
    },
    {
      name: "Aurora News-Register",
      handle: "NewsregisterANR"
    },
    {
      name: "Scottsbluff Star-Herald",
      handle: "sbstarherald"
    },
    {
      name: "Lewiston Tribune",
      handle: "LewistonTribune"
    },
    {
      name: "Grants Pass Daily Courier",
      handle: "DailyCourier"
    },
    {
      name: "Bossier Press-Tribune",
      handle: "BossierPress"
    },
    {
      name: "Farmington Daily Times",
      handle: "TheDailyTimes"
    },
    {
      name: "Midland Reporter-Telegram",
      handle: "mwtnews"
    },
    {
      name: "Salina Journal",
      handle: "salinajournal"
    },
    {
      name: "Holton Recorder",
      handle: "HoltonRecorder"
    },
    {
      name: "Murray Ledger and Times",
      handle: "MurrayLedger"
    },
    {
      name: "Daily Ardmoreite",
      handle: "Ardmoreite"
    },
    {
      name: "Lumberton Robesonian",
      handle: "The_Robesonian"
    },
    {
      name: "Bainbridge Post-Searchlight",
      handle: "postsearchlight"
    },
    {
      name: "Riley Countian",
      handle: "rileycountian"
    }
  ],
  ifps : generatedIfps,
  // ifps : [
  //   {
  //     question:
  //       "Will ACLED record any civilian fatalities in Sri Lanka in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Violence escalates in Sri Lanka, following tensions between Buddhist and Muslim communities."
  //       },
  //       {
  //         text:
  //           "In 2017, there was only one month (July) that had civilian fatalities. In 2018, there have been civilian fatalities almost every month."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "New report shows that the declared state of emergency after communal violence in March has dramatically decreased civilian deaths."
  //       },
  //       {
  //         text:
  //           "Buddhist leaders apologize for what they say has been “a shameful act” and promise reconciliation is near."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will any NATO member invoke Article 4 or Article 5 before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "NATO analyst reports concerns regarding increased violence in the Middle East and suggests the possibility of Article 4 or 5 being invoked soon."
  //       },
  //       {
  //         text:
  //           "NATO: Whistleblower close to Erdogan suggests the possibility that Turkey will again invoke Art. 4."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The possibility of invoking Art. 5 for any NATO member is quickly dismissed by EU Commission spokesperson."
  //       },
  //       {
  //         text:
  //           "Although recent concerns have been raised regarding Middle Eastern players invoking NATO Art. 4 and Art. 5, experts say this process will likely take several months."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Reuters reporters Wa Lone or Kyaw Soe Oo be released before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Government says negotiations for the release of Reuters reporters Wa Lone and Kyaw Soe Oo are progressing steadily and suggest optimism."
  //       },
  //       {
  //         text:
  //           "Legal expert says that the evidence against reporters Wa Lone and Kyaw Soe Oo is weak and there is a good chance that they will soon be released."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Reuters reporters incarceration: Myanmar rejected a recent motion to drop case despite international pressure calling for the release of the journalists. Myanmar has not been swayed by global condemnation when it comes to other human rights violations."
  //       },
  //       {
  //         text:
  //           "Reuters raises concerns regarding the incarceration of reporters Wa Lone and Kyaw Soe Oo, saying that government is not doing enough."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will a new Italian government receive a vote of confidence from both houses of Parliament?",
  //     pro: [
  //       {
  //         text:
  //           "Newly appointed Prime Minister Giuseppe Conte says is optimistic regarding the vote of confidence from both houses of Parliament."
  //       },
  //       {
  //         text:
  //           " Italian populist parties are gaining more and more consensus in Italy. The vote of confidence is expected to arrive before the end of the summer break."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The government formed by populist parties Five Star Movement and Northern League continues to fight, increasing the uncertainty of an already unstable country."
  //       },
  //       {
  //         text:
  //           "Markets suffer as uncertainty arises around the vote of confidence from the Italian Parliament for the newly formed government."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will South Sudan's President Salva Kiir Mayardit experience a significant leadership disruption before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "President Kiir Mayardit admits leadership failure. South Sudan seems on the verge of economic collapse."
  //       },
  //       {
  //         text:
  //           "South Sudan: Pressure increases on President Mayardit, following the recent accusations of being an obstacle for peace."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Mayardit has ruled out the possibility of abdicating power. Mayardit has clearly implied that he values his own continued leadership more than he values the establishment of peace."
  //       },
  //       {
  //         text:
  //           "Notwithstanding the dire economic and political situation, South Sudan President Kiir Mayardit seems to tighten his grip on the country."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will any country’s national military launch a nuclear weapon at any other country before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The Science and Security Board moves Doomsday Clock to 2 minutes before midnight, suggesting a measurable increased risk in global nuclear disaster."
  //       },
  //       {
  //         text:
  //           "According to agency RAND, artificial Intelligence is a big threat to nuclear deterrence. The information they provide to countries could be wrong and could convince them to take drastic steps."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The chances of nuclear confrontation has significantly decreased, following the historical US-North Korea nuclear summit, experts say."
  //       },
  //       {
  //         text:
  //           "Peter Kuznick, director at the Nuclear Studies Institute: 'Any large scale use of nuclear weapons will be just as suicidal for the nation that strikes first as for the nation under attack. The majority of world leaders know this and would not take the risk.'"
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the PML-N party win 172 seats or more in Pakistan’s general election?",
  //     pro: [
  //       {
  //         text:
  //           "PML-N party has helped infrastructure investments and as they have been ruling it is easier for them to continue ruling. Furthermore, notwithstanding the corruption scandals, they are still the most popular political party. Opposition parties PTI and PPP, which only gained 15% of the seats the previous time, are unlikely to challenge PML-N."
  //       },
  //       {
  //         text:
  //           "PML-N has been successful in building core constituencies like the trading and religious classes with other linkages to the Establishment that prevented more overt and debilitating personal and party reversals. The PML-N almost appears unbeatable with 2018 seeming a mere milestone-formality, not a destination."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "With plans underway to use bandwagon strategies in place, the voters are veering away from the PML-N party and weakening the party."
  //       },
  //       {
  //         text:
  //           "PML-N is currently in power, but it seems that multiple instances of corruption and misuse of power have been made public that may hurt their chances. In the last election they won 166 seats. The polls currently show a slightly decreasing trend in confidence for PML-N."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will Yemen's Houthi rebels sign a peace agreement?",
  //     pro: [
  //       {
  //         text:
  //           "The UN’s new Yemen envoy says all sides desire a political solution. Previous attempts to sign a peace treaty suggest a strong will of all parties, including the Houthis rebels, to end the conflict."
  //       },
  //       {
  //         text:
  //           "Houthi rebels have been open in the past to peace negotiations. Experts believe that the conditions are there for a successful agreement."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The Saudi media has said that peace negotiations are useless unless they lead to complete disarmament of the Houthis. Chances of a peace agreement are thin."
  //       },
  //       {
  //         text:
  //           "Tensions are still high. Recent events point away from resolution. Problems persists as Saudi and UAE clash in Yemen. Houthi rebels are not getting what they want out of the current proposed peace deals."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will S&P, Moody's, or Fitch issue a sovereign credit rating for Iran before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "'Sanctions relief will grant Iran access to an estimated 150 billion dollars in frozen foreign assets. We project the resulting implementation of investment plans, as well as a recovery in oil production, to contribute to higher GDP growth of 5%' Atsi Sheth, Associate Managing Director at Moody’s."
  //       },
  //       {
  //         text:
  //           "Iran initiated talks with Moody’s and Fitch to reinstate sovereign credit rating after sanctions were lifted. A sovereign credit rating for Iran by credit rating agencies is in the works and should come no later than 2019."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Iran started discussions to get its first credit rating in 2016 but there has been no clear progress to indicate that any of the three major credit rating agencies will make a decision anytime soon."
  //       },
  //       {
  //         text:
  //           "The ratings outfits have become much more cautious, and Iran has become much more risky to predict anything about. They won’t be moving on this any time soon."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "'Before 8 September 2018, will Chinese tariffs on U.S. soybeans take effect?",
  //     pro: [
  //       {
  //         text:
  //           "Latest reports suggest China will not back down from trade war and tariffs on US soybeans are expected to increase."
  //       },
  //       {
  //         text:
  //           "US-China trade war is expected to escalate during the following months, experts say. China now threatens to buy soybeans from Brazil."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "US-China trade war: After months of escalation, both parties are ready to start finding a solution that will benefit both."
  //       },
  //       {
  //         text:
  //           "Although China’s recent trade war threats, any policy that will increase US soybeans tariffs will damage China and is thus unlikely to be implemented."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will the Council of the European Union adopt a directive on taxation of digital business activities?",
  //     pro: [
  //       {
  //         text:
  //           "Respondents to a public consultation poll show that an overwhelming majority (82%) of EU respondents in the consultation agreed there was a need to reform current international rules for the taxation of the digital economy."
  //       },
  //       {
  //         text:
  //           "After the recent fine issued to Google, EU now wants to tax digital business. As the General Data Protection Regulation (GDPR) shows, tech firms are willing to comply in order to access the EU market."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "EU “digital business tax”: many of the smaller nations already oppose the current plan. For example, Ireland could suffer a loss of €160 million in tax revenue. Other nations think there needs to be a more global solution to digital taxes."
  //       },
  //       {
  //         text:
  //           "Although the talks of a EU directive on digital business taxation, internal disagreement and external opposition together with procedural complications make this extremely unlikely."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will South Africa's parliament schedule a vote to amend Section 25 of the constitution?",
  //     pro: [
  //       {
  //         text:
  //           "The South African Committee is engaging in a public participation process.  The committee will very soon file a report to the National Assembly. So far, the tides seem to strongly favor amending Section 25."
  //       },
  //       {
  //         text:
  //           "In February, the National Assembly gave the go-ahead for Section 25 of the Constitution to be amended to give effect to government policy of expropriating land without compensation."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "South African banks against amending Section 25: Allowing the government to just take land and not compensate in any way would cause a lot of uncomfortable landowners to be unwilling to invest in their land."
  //       },
  //       {
  //         text:
  //           "South Africa: notwithstanding political and public support for amending Section 25 of the Constitution, this process is delicate and a long period of consultations is likely to take place."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 1 August 2018, will the Moroccan government and the Polisario Front meet for official negotiations over Western Sahara?",
  //     pro: [
  //       {
  //         text:
  //           "Moroccan government has been asking the UN to assist in addressing the Polisario Front fighters. Polisario Front has met with other groups in the past, suggesting that negotiations are now a real possibility."
  //       },
  //       {
  //         text:
  //           "The Western Sahara is viewed as the last colony in Africa. New momentum for self-determination referendums is likely to create diplomatic goodwill for renewed meetings."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Western Sahara: The diplomatic climate is getting cold and cloudy. Despite UN attention, the Moroccan government is becoming more hostile to any warming of relations."
  //       },
  //       {
  //         text:
  //           "The negotiations over Western Sahara have been ongoing for a number of years and been unsuccessful, effectively reaching a stalemate that will hardly resolve soon."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Ireland's referendum to repeal the Eighth Amendment pass?",
  //     pro: [
  //       {
  //         text:
  //           "Irish referendum: diminished Catholic Church's power and increased women rights both suggest that the 8th Amendment is likely to be repealed."
  //       },
  //       {
  //         text:
  //           "Ireland is likely to repeal 8th Amendment, polls suggest. The campaign for women’s rights has gained momentum and increased international attention."
  //       }
  //     ],
//       against: [
//         {
//           text:
//             "Notwithstanding campaigners success, Ireland remains a country with a strong Catholic majority and a repeal remains unlikely."
//         },
//         {
//           text:
//             "Latest polls suggest that the support for the repeal has recently slowed down."
//         }
//       ]
//     },
//     {
//       question:
//         "Will the Philippines' President Rodrigo Duterte experience a significant leadership disruption before 1 July 2018?",
//       pro: [
//         {
//           text:
//             "Philippine President Rodrigo Duterte is skating on thin ice following his charges of crimes against humanity and his multiple shocking statements."
//         },
//         {
//           text:
//             "International pressure is mounting on Rodrigo Duterte. Some say his days as President are close to an end."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Even though Rodrigo Duterte is very controversial, it is unlikely he will have a significant leadership disruption soon. His government is the most popular in decades."
//         },
//         {
//           text:
//             "Philippines President Duterte seems to have support among the population. The economy appears to be growing, which keeps people happy."
//         }
//       ]
//     },
//     {
//       question:
//         "'Before 8 September 2018, will Poland, Estonia, Latvia, or Lithuania accuse Russia of intervening militarily in its territory without permission?",
//       pro: [
//         {
//           text:
//             "Tensions between Eastern Europe countries and Russia do not seem to wind down. Analysts say accusations of military intervention are likely to follow."
//         },
//         {
//           text:
//             "Polish diplomat harshly criticizes Russian actions and threatens to follow with formal accusations."
//         }
//       ],
//       against: [
//         {
//           text:
//             "After the spy poisoning case and the US election meddling, Russia’s interests are in keeping Eastern Europe countries happy."
//         },
//         {
//           text:
//             "RAND report suggest that East European countries are unlikely to start formal accusations to Russia, afraid of Russian repercussions."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Afghanistan's President Ashraf Ghani experience a significant leadership disruption before 1 September 2018?",
//       pro: [
//         {
//           text:
//             "The political turmoil of Afghanistan is expected to increase in the following months due to revived Taliban terrorism. The next months will be Asraf Ghani's biggest challenge."
//         },
//         {
//           text:
//             "Poll suggest a steady decrease of support for Afghanistan's President Ashraf Ghani."
//         }
//       ],
//       against: [
//         {
//           text:
//             "In a recent interview, Ashraf Ghani seems confident to consolidate his power after NATO troops will totally withdraw in the next few years."
//         },
//         {
//           text:
//             "Afghanistan: In the last years, the region has seen increased political stability that is expected to continue in the following months."
//         }
//       ]
//     },
//     {
//       question:
//         "Will ACLED record any riot/protest events in Gambia in July 2018?",
//       pro: [
//         {
//           text:
//             "Local environmentalists and other activists have been rallying more urgently for the closure of the Julakay sand mining operation in Faraba Banta, citing severe damage to the surrounding land."
//         },
//         {
//           text:
//             "Environmental activists are dissatisfied with the speed of change following the ousting of dictator Yahya Jammeh, in recent months organizing protests against the Bakoteh dumpsite, the demolition of a wildlife preserve, and the dumping of waste into coastal waters."
//         }
//       ],
//       against: [
//         {
//           text:
//             "National polls indicate increasing optimism and approval of the government after the autocratic leader Yahya Jammeh was defeated in elections in 2016."
//         },
//         {
//           text:
//             "A diverse group of international donors, including the European Union, African Development Bank, the World Bank, and the Islamic Development Bank, have pledged 1.45 billion euros to Gambia over three years to strengthen the economy and the country’s democratic institutions."
//         }
//       ]
//     },
//     {
//       question: "Will Turkish forces take Manbij before 8 September 2018?",
//       pro: [
//         {
//           text:
//             "The Turkish army announced that, in cooperation with US soldiers, they have begun to patrol the outskirts of the city of Manbij."
//         },
//         {
//           text:
//             "With a plan for the Kurdish YPG militia to withdraw from Manbij, there are no longer any substantial roadblocks to Turkish forces occupying the city in the near future."
//         }
//       ],
//       against: [
//         {
//           text:
//             "With Kobane and Tal Abyad still under the control of Kurdish forces, the Turkish Armed Forces will likely focus on these two cities rather than Manbij in the coming months."
//         },
//         {
//           text:
//             "Turkish Foreign Minister Mevlut Cavusoglu, after meeting with US Secretary of State Mike Pompeo, suggested that their joint roadmap to retake Manbij may take up to six months to complete."
//         }
//       ]
//     },
//     {
//       question:
//         "Will a Loya Jirga convene in Afghanistan before 8 September 2018?",
//       pro: [
//         {
//           text:
//             "The NATO-led Resolute Support Mission in Afghanistan reaffirmed its support of the Afghanistan’s national security, encouraging the formation of a Loya Jirga to negotiate peace with the Taliban."
//         },
//         {
//           text:
//             "The Associated Press reports that a Loya Jirga may convene in the coming weeks to declare a fatwa against suicide bombings."
//         }
//       ],
//       against: [
//         {
//           text:
//             "A recent spate of suicide bombings targeting top religious leaders in Afghanistan may prevent a Loya Jirga from convening this summer."
//         },
//         {
//           text:
//             "Trying to increase their influence in Afghanistan, ISIS has vowed to attack any Loya Jirga that occurs within the next two months."
//         }
//       ]
//     },
//     {
//       question:
//         "Will FEWS NET publish a Food Security Alert with 'famine' and 'Ethiopia' in its headline between 1 July 2018 and 31 July 2018?",
//       pro: [
//         {
//           text:
//             "Large regions of Ethiopia has experienced droughts for the past three years."
//         },
//         {
//           text:
//             "Conflict along the border of the Somali and Oromo regions of Ethiopia has displaced 1 million people."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The Urban Productive Safety Net Project, launched in Ethiopia in 2017, has already ensured food security for 400,000 of the poorest urban residents in the country, supplementing the 10m rural citizens covered by the flagship rural safety net programme."
//         },
//         {
//           text:
//             "In March 2018, the World Bank pledged $300m in the next five years towards food security in Ethiopia."
//         }
//       ]
//     },
//     {
//       question:
//         "Will FEWS NET publish a Food Security Alert with 'famine' and 'Yemen' in its headline between 1 July 2018 and 31 July 2018?",
//       pro: [
//         {
//           text:
//             "Mohsin Siddiqui, a leading Oxfam director, warns that “Yemen is already the world’s worst humanitarian crisis and is steadily slipping towards famine.”"
//         },
//         {
//           text:
//             "Saudi and Emirati troops recently attacked the port city of Hodeida, where the majority of Yemen’s food and aid shipments are delivered to feed the 8 million Yemenis on the brink of famine."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Several governments and aid organizations have dramatically increased the amount of aid delivered to Yemen, including the UAE, the Red Crescent, and KSRelief."
//         },
//         {
//           text:
//             "Prominent aid organizations are drawing international attention to attacks on Yemeni port cities important for the delivery of food aid, putting pressure on the Saudis and Emiratis to cease their military operations to protect aid delivery."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Zimbabwe hold a general election between 21 July and 21 August 2018?",
//       pro: [
//         {
//           text:
//             "Priscilla Chigumba, the chairperson of the Zimbabwe Electoral Commission, insists that “nothing stops the election” from happening on July 30."
//         },
//         {
//           text:
//             "The European Union announced its plans to oversee the Zimbabwe election this summer in order to ensure a free and fair election."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Zimbabwean opposition parties seek a delay in elections because the ruling government failed to give a copy of the voter rolls to all candidates."
//         },
//         {
//           text:
//             "Elections in doubt as opposition parties in Zimbabwe threaten to boycott upcoming elections due to unfair practices by the ruling party."
//         }
//       ]
//     },
//     {
//       question:
//         "Will ACLED record any civilian fatalities in Ghana in July 2018?",
//       pro: [
//         {
//           text:
//             "There were 14 civilian fatalities from May 2017 to April 2018 in Ghana, averaging to 1,16 civilian fatalities per month. This trend has been consistent in the last two years, since the New Patriotic Party (NPP) took office."
//         },
//         {
//           text:
//             "Violence against civilians in Ghana has increased in recent years, with a slightly higher number of casualties over the summer months."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Although attacks by al-Qaeda militants have occurred in several West African cities, Ghana has seen very little civilian violence in the past months and it looks like that trend will continue into the summer 2018."
//         },
//         {
//           text:
//             "Data shows violence against civilians in Ghana tends to cluster around elections. Next major election will not take place until 2020."
//         }
//       ]
//     },
//     {
//       question:
//         "Before 12 July 2018, will Macedonia announce a change to its official name?",
//       pro: [
//         {
//           text:
//             "Greek prime minister Alexis Tsipras says Macedonia has to change its name. He is confident to settle name dispute by early July."
//         },
//         {
//           text:
//             "The Greek public are overwhelmingly in favor of a change of name to Macedonia, with mass demonstrations over 100,000 strong organized across the country."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The foreign ministers of Greece and Macedonia met in the lakeside resort of Ohrid but remain far from an agreement about the conditions of a name change to the latter country."
//         },
//         {
//           text:
//             "Macedonia (FYROM) is reluctant to agree to Greece’s demands of changing FYROM’s constitution, stalling talks regarding Macedonia’s name change."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Venezuela's President Nicolás Maduro experience a significant leadership disruption before 1 July 2018?",
//       pro: [
//         {
//           text:
//             "The International Criminal Court has announced a preliminary examination into human rights abuses by the Venezuelan government, putting pressure on its president to resign."
//         },
//         {
//           text:
//             "After years of hyperinflation, falling oil production, and shortages, polls indicate that Venezuela’s population is becoming increasingly impatient with the ruling party."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Maduro authorized the release of dozens of political activists, in a show of goodwill aimed at reuniting a fractured population."
//         },
//         {
//           text:
//             "UN analysts fear that Venezuela’s upcoming election will not be fair, reporting that political opponents have been muzzled and election posts filled with allies, setting the stage for an easy win for incumbent Nicolás Maduro."
//         }
//       ]
//     },
//     {
//       question:
//         "Before 8 September 2018, will negotiators announce the completion of the Regional Comprehensive Economic Partnership (RCEP) free trade agreement?",
//       pro: [
//         {
//           text:
//             "Sources in the Indian government agree “there is a pressure to conclude the RCEP negotiations at the earliest.”"
//         },
//         {
//           text:
//             "Trade ministers of 16 countries are set to meet on July 1 in Tokyo to accelerate progress on the RCEP trade pact."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Completion of the RCEP agreement in doubt as India remains wary of effect that lower duties for China will have on its trade deficit."
//         },
//         {
//           text:
//             "Indonesia trade minister Enggartiasto Lukita estimates that progress in negotiations has reached 80% and is confident that an agreement will be reached with all countries in spring 2019."
//         }
//       ]
//     },
//     {
//       question:
//         "Will there be a locally-transmitted case of the Zika virus in Singapore between 1 July 2018 and 31 August 2018?",
//       pro: [
//         {
//           text:
//             "Zika on the rise in SouthEast Asia. Data shows cases of the Zika virus being locally transmitted for many previous months; a trend that is expected to continue."
//         },
//         {
//           text:
//             "Although the Zika epidemics is now under control, the chances of locally transmitted contagions still remain high in the Singapore region, particularly during summer months."
//         }
//       ],
//       against: [
//         {
//           text:
//             "New vaccines against Zika are expected to be widely available in South East Asia in the next month."
//         },
//         {
//           text:
//             "According to the official government, there are no currently active clusters of Zika in Singapore. Travel restrictions over disease concerns have been lifted in the region."
//         }
//       ]
//     },
//     {
//       question:
//         "Before 8 September 2018, will Saudi Arabia announce that it is ending the blockade of Yemen's Hudaydah port?",
//       pro: [
//         {
//           text:
//             "The recent Saudi Arabia opening for humanitarian aids to enter Yemen rises hopes of ending the blockade. Activists now think that a resolution of the Yemeni crisis is close."
//         },
//         {
//           text:
//             "Increased media attention together with international pressure make experts believe that the days of the Saudi Arabia blockade of Yemen’s Hudaydah port are close to an end."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Saudi Arabia seems to have every intention in continuing the blockade against Yemen."
//         },
//         {
//           text:
//             "Media attention has once more been brought to the Yemeni crisis. The three years blockade imposed by Saudi Arabia have intensified over the last couple months, worrying many international observers."
//         }
//       ]
//     },
//     {
//       question:
//         "Will the Council of the European Union make an Article 7.1 determination against a member state before 8 September 2018?",
//       pro: [
//         {
//           text:
//             "The EU Council is being pressured to officially sanctioning (through Article 7.1) several member states, including the UK and Czech Republic, to enforce cooperation among member states."
//         },
//         {
//           text:
//             "Several EU members are afraid that more states will try to follow the example set by Czech Republic and Poland, refusing to accept refugees. Article 7.1 is a likely to be an effective deterrent that can be quickly invoked."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Poland only needs six dissenting votes in order to avoid an Article 7.1 determination. Romania and Malta, former Eastern Bloc countries, might dissent fearing damaging historical alliances with Poland."
//         },
//         {
//           text:
//             "EU Council is likely to make Article 7.1 determination against a member state, but this will likely take a long time due to bureaucratic complications."
//         }
//       ]
//     },
//     {
//       question:
//         "'Will Saudi Arabia execute or be targeted in an acknowledged national military attack before 1 August 2018?",
//       pro: [
//         {
//           text:
//             "Increased tensions between Saudi Arabia against Iran and Houthi rebels suggests that violence is expected to increase over the summer 2018."
//         },
//         {
//           text:
//             "After the US nuclear deal withdrawal, the risk of Iran trying to strengthen its influence in the region through military action, has increased. Saudi Arabia might be its primary target."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Although tension is high between Saudi Arabia and Iran and Houthi, violence in the region will likely occur through unofficial military actions."
//         },
//         {
//           text:
//             "Middle East observers think that acknowledged national military attacks involving Saudi Arabia are unlikely, given that they are likely to trigger a war that could escalate out of proportion."
//         }
//       ]
//     },
//     {
//       question:
//         "Will any G7 nation engage in an acknowledged national military attack against Syria before 1 August 2018?",
//       pro: [
//         {
//           text:
//             "According to the recent claims made by the POTUS, a national military attack against Syria is likely to occur soon."
//         },
//         {
//           text:
//             "Increasing violence against Syrian civilians by the Assad regime is likely to induce G7 nations to attack Syria as done in the past, political commentators say."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Russians or Syrians will try some diplomatic gambit to defuse tensions in Syria. POTUS has made clear that US does not want to remain committed in Syria."
//         },
//         {
//           text:
//             "Despite tough rhetoric, military attacks against Syria are unlikely as the stakes would be too high. Russia has signalled that it considers any missile attack against Assad as an attack on an ally and might retaliate."
//         }
//       ]
//     },
//     {
//       question:
//         "Will ACLED record any riot/protest events in Gabon in July 2018?",
//       pro: [
//         {
//           text:
//             "After the recent political elections, Gabon is suffering increasing internal tensions."
//         },
//         {
//           text:
//             "ACLED recorded 12 different riots in Gabon in the last 365 days, equally distributed across the year. Chances are that this trend will continue after the controversial elections held last April."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Gabon: Although the period previous the elections was dominated by instability, the newly formed government is expected to bring a wave of reforms that will stabilize internal unrest."
//         },
//         {
//           text:
//             "Despite generalized discontent with the government, Gabon has not seen out-of-norm violence. Any form of protest is expected to use non-violent means (e.g. strikes)."
//         }
//       ]
//     },
//     {
//       question:
//         "Will the UN Security Council adopt a resolution concerning Myanmar between 31 June 2018 and 31 August 2018?",
//       pro: [
//         {
//           text:
//             "The Myanmar crisis is worsening. UN Security Council is expected to act soon."
//         },
//         {
//           text:
//             "A letter signed by 12 Nobel Peace Prize winners pushes the UN to adopt a quick resolution concerning the Myanmar crisis."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The UN has been extremely slow to react to the Myanmar crisis. Nothing so far has let observers believe in a change of actions."
//         },
//         {
//           text:
//             "While the UN has acknowledged the problems in Myanmar, continuing from the violence last fall, little has been done this year."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Honduras President Juan Orlando Hernández experience a significant leadership disruption before 31 August 2018?",
//       pro: [
//         {
//           text:
//             "An international commission’s corruption case of several officials in President Hernández’s government has led to a collapse of the public’s trust in the governing party, the latest national polls indicate."
//         },
//         {
//           text:
//             "Suspicions regarding the legitimacy of Hernández’s re-election persist as several European countries call for an investigation into the violent quelling of protests following the election by government security forces."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Following U.S. Vice-President Mike Pence’s meeting with, and public show of support for, President Hernández, the Honduran leader’s position appears to more secure than in previous months."
//         },
//         {
//           text:
//             "Efforts by President Hernández’s cabinet to modernize Honduras’ infrastructure through strategic partnerships with tech giants Amazon (AMZN) and Google (GOOG) have increased optimism that the country’s economy will soon improve."
//         }
//       ]
//     },
//     {
//       question:
//         "Will there be a heavy fuel oil spill of 1,000 gallons or more in the Arctic between 6 June and 8 September 2018?",
//       pro: [
//         {
//           text:
//             "With the reduction of sea ice, Arctic trader routes for the transport of heavy fuel oil become available, resulting in an increased risk of Arctic oil spill."
//         },
//         {
//           text:
//             "Russian oil companies spill more than 30 million barrels on land each year.  This poor record is bound to apply to the Arctic as new trade routes become available."
//         }
//       ],
//       against: [
//         {
//           text:
//             "A recent report by EnvironmentWatchers show that new environmental policies reduced the risk of oil spills."
//         },
//         {
//           text:
//             "The IMO has embarked on a body of work aimed at mitigating the risks of fuel oil accidents. This could reduce the short term risk of oil spills in the near future."
//         }
//       ]
//     },
//     {
//       question:
//         "Will the WHO declare a Public Health Emergency of International Concern (PHEIC) before 1 September 2018?",
//       pro: [
//         {
//           text:
//             "European health analysts warn that, despite only a few cases in Congo, the highly virulent Ebola virus can spread rapidly in just a few weeks, possibly necessitating a PHEIC declaration."
//         },
//         {
//           text:
//             "In addition to the five cases of Ebola in the Congo last month, the WHO has now reported two cases in Uganda, citing fears of a potential widespread outbreak this summer."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The meeting of the WHO Emergency Committee is satisfied that a PHEIC is not currently necessary in the Congo, convincing many that the Ebola outbreak there will not spread significantly."
//         },
//         {
//           text:
//             "The Congolese health office reports no new cases of Ebola in the past two weeks."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Armenia's Prime Minister Nikol Pashinyan experience a significant leadership disruption before 1 September 2018?",
//       pro: [
//         {
//           text:
//             "Journalists are investigating the dark past of recently elected Armenian leader Nikol Pashinyan. What will emerge can potentially shake the leadership of the popular leader."
//         },
//         {
//           text:
//             "Although popular, Nikol Pashinyan is experiencing strong opposition from his own party and previous exponents of the government."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Nikol Pashinyan recent popularity stems from the protests he led to remove Serzh Sarksyan from office as Prime Minister. With Pashinyan enjoying huge public support, Armenia has secured long term political stability."
//         },
//         {
//           text:
//             "Recent opinion polls clearly show that Nikol Pashinyan is experiencing unprecedented political support."
//         }
//       ]
//     },
//     {
//       question:
//         "Will either the International Atomic Energy Agency (IAEA) or the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) conduct on-site inspections of a nuclear facility in North Korea before 8 September 2018?",
//       pro: [
//         {
//           text:
//             "North Korea is highly motivated in collaborating with the US. Any requests by IAEA or CTBTO to conduct on-site inspections is likely to be approved."
//         },
//         {
//           text:
//             "POTUS recently tweeted about the new agreement with North Korea, which would allow international agencies to lead on-site inspections."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Kim Jong-un is backing off from US-North Korea agreement on nuclear inspections."
//         },
//         {
//           text:
//             "The time scale for international on-site inspections in North Korean nuclear facilities is likely to be extremely long."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Ukraine's Prime Minister Volodymyr Groysman experience a significant leadership disruption before 1 September 2018?",
//       pro: [
//         {
//           text:
//             "Volodymyr Groysman’s party has seen its popularity sharply declining in the last 3 years."
//         },
//         {
//           text:
//             "Corruption scandal hits Volodymyr Groysman. If confirmed, these accusations will soon likely force him to step down."
//         }
//       ],
//       against: [
//         {
//           text:
//             "In the last 5 years, Ukraine Prime Minister Volodymyr Groysman managed to stabilize his position after the 2013 riots."
//         },
//         {
//           text:
//             "Volodymyr Groysman is on the rise. New polls suggest increasing popularity of the Ukraine Prime Minister."
//         }
//       ]
//     },
//     {
//       question:
//         "Will there be a locally-transmitted case of the Zika virus in Ukraine, Russia, Georgia or Armenia between 1 June 2018 and 31 August 2018?",
//       pro: [
//         {
//           text:
//             "Following the discovery of Zika-carrying mosquitoes in Turkey in early 2018, a new study by German researchers predicts that the virus could spread to neighboring countries, including Georgia, Armenia, and Iran, by the end of the summer."
//         },
//         {
//           text:
//             "With millions of tourists descending on Russia for the 2018 World Cup, there is a high risk of Zika transmission this summer, WHO analysts warn."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The health ministers of both Russian and Ukraine have both declared that there is no risk of the Zika virus spreading to either of those countries."
//         },
//         {
//           text:
//             "Despite the growing range of the Zika virus, Korean researchers estimate that it will take several more years before it reaches Eastern Europe, including Georgia, Ukraine, and Romania."
//         }
//       ]
//     },
//     {
//       question:
//         "Before 8 September 2018, will a new Iraqi Council of Ministers receive a vote of confidence?",
//       pro: [
//         {
//           text:
//             "Notwithstanding the recent corruption scandals, a vote of confidence to the Iraqi Council of Ministers is very much likely, analysts say."
//         },
//         {
//           text:
//             "The recent vote recount will allow Iraqi Council of Ministers to strengthen its position, thus justifying a vote of confidence."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Allegations of voter fraud along with the fear of turmoil surrounding the parliamentary vote make the vote of confidence in Iraqi Council of Ministers unlikely."
//         },
//         {
//           text:
//             "Haidar al-Abadi, current Iraqi Prime Minister, has cautioned that continued request for recounts will most likely lead to political instability."
//         }
//       ]
//     },
//     {
//       question:
//         "Will ACLED record any riot/protest events in Cameroon in July 2018?",
//       pro: [
//         {
//           text:
//             "Increasing tensions between the Cameroonian government and the minority Anglophone community has become increasingly violent, threatening to accelerate into armed conflict this summer, said a senior analyst at the International Crisis Group."
//         },
//         {
//           text:
//             "In the past eight months, over 100 rioters have been killed by security forces in Cameroon, likely leading to more riots and protests this summer, a new UN report states."
//         }
//       ],
//       against: [
//         {
//           text:
//             "The Catholic Church has expressed its willingness to mediate peace talks between the Cameroon government and the secessionist faction, possibly leading to a decrease in riots in the foreseeable future."
//         },
//         {
//           text:
//             "Several secessionist leaders have been arrested by Cameroonian security forces in the past week, leading many in the government to believe that the secessionists’ ability to organize protests and riots will diminish substantially."
//         }
//       ]
//     },
//     {
//       question:
//         "Will China execute or be targeted in an acknowledged national military attack before 1 September 2018?",
//       pro: [
//         {
//           text:
//             "Vietnam increases its artillery in the South China Sea. China might soon retaliate."
//         },
//         {
//           text:
//             "Tensions escalate in the South China Sea. International watchers worry about direct conflicts involving China."
//         }
//       ],
//       against: [
//         {
//           text:
//             "International Peace agencies are working night and day to diffuse tensions concerning the South China Sea. An international peace agreement with China is expected in the coming weeks."
//         },
//         {
//           text:
//             "With relations in Asia being worked on diplomatically among the US and Korea, China cannot afford to become an aggressor among the newly founded sense of peace among these two nations."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Israel execute or be targeted in an acknowledged national military attack before 1 August 2018?",
//       pro: [
//         {
//           text:
//             "Israel building of new settlements in occupied regions, is escalating an already tense climate."
//         },
//         {
//           text:
//             "Wikileaks publishes documents suggesting that Israel and Iran are planning for a direct attack in Syria that will take place in the near future."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Violence in Israel has very rarely been in the form of an acknowledged military action. Violence in the region is expected to continue in unofficial ways."
//         },
//         {
//           text:
//             "Israel is unlikely to start military actions, now that the presence of Russia in the Middle East is growing."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Zimbabwe re-join the Commonwealth of Nations before 1 January 2019?",
//       pro: [
//         {
//           text:
//             "A Commonwealth Assessment Mission completed a five-day trip to Zimbabwe, where it was reported that major progress has been made. According to anonymous sources, the mission is recommending accelerated re-admission for Zimbabwe as early as summer 2018."
//         },
//         {
//           text:
//             "Zimbabwe’s invitation of international election observers to monitor their upcoming presidential elections may pave the way for Zimbabwe’s rapid readmission to the Commonwealth by boosting trust among other Commonwealth nations."
//         }
//       ],
//       against: [
//         {
//           text:
//             "While other Commonwealth nations have expressed hope that Zimbabwe will rejoin the group, UN analysts expect that the earliest that Zimbabwe can fulfill all of the necessary requirements is by mid-2019."
//         },
//         {
//           text:
//             "Anonymous sources indicate that there are some within the Commonwealth Secretariat that are unconvinced that the upcoming Zimbabwe elections will be fair and caution against rushing the country’s readmission, possibly until the next elections in two years."
//         }
//       ]
//     },
//     {
//       question:
//         "Will Pakistan execute or be targeted in an acknowledged national military attack before 1 August 2018?",
//       pro: [
//         {
//           text:
//             "There has been an increase in cross border attacks between India and Pakistan. Ceasefire violations have intensified in Uri sector for the first time in 15 years. More than 1,000 villagers are fleeing their homes to escape the violence."
//         },
//         {
//           text:
//             "Tensions between India and Pakistan intensified after an attack on an army base in Sunjuwan area in Jammu city.  Following the attack, Indian defence minister, Nirmala Sitharaman, warned Pakistan “it will pay for its misadventure”."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Although Pakistan is experiencing a lot of tensions, violence will likely continue to be from terrorist groups, insurgents and civilians rather than national military forces."
//         },
//         {
//           text:
//             "The high chances of Indian retaliation suggest that a potential acknowledged national military action by Pakistan is highly unlikely."
//         }
//       ]
//     },
//     {
//       question:
//         "Will the Afghan Taliban participate in official peace talks with the governments of Afghanistan or the United States before 8 September 2018?",
//       pro: [
//         {
//           text:
//             "In a recent tweet, POTUS says he is willing to initiate talks with Afghan Taliban to reach an agreement before the end of the summer."
//         },
//         {
//           text:
//             "New diplomatic talks make experts believe that peace negotiations with Afghan Taliban groups are likely to take place in August."
//         }
//       ],
//       against: [
//         {
//           text:
//             "Afghanistan: The chance of peace talks with the Taliban before September 2018 is slim. Taliban said that talks are useless until foreign invading forces leave Afghanistan."
//         },
//         {
//           text:
//             "POTUS has exacerbated the dialogue with the Taliban, making peace talks ever more complicated."
//         }
//       ]
//     }
//   ]
};

// export const data = {
//   sources: [
//     {
//       name: "Carson Valley Times",
//       handle: "cvalleytimes"
//     },
//     {
//       name: "Visalia Times-Delta",
//       handle: "vtdnews"
//     },
//     {
//       name: "Alexandria Echo Press",
//       handle: "echopress"
//     },
//     {
//       name: "Effingham Daily News",
//       handle: "ednmain"
//     },
//     {
//       name: "Meridian Star",
//       handle: "meridianstar"
//     },
//     {
//       name: "Lake Gazette",
//       handle: "LakeGazette"
//     },
//     {
//       name: "Rogersville Review",
//       handle: "RogReview"
//     },
//     {
//       name: "Aurora News-Register",
//       handle: "NewsregisterANR"
//     },
//     {
//       name: "Scottsbluff Star-Herald",
//       handle: "sbstarherald"
//     },
//     {
//       name: "Lewiston Tribune",
//       handle: "LewistonTribune"
//     },
//     {
//       name: "Grants Pass Daily Courier",
//       handle: "DailyCourier"
//     },
//     {
//       name: "Bossier Press-Tribune",
//       handle: "BossierPress"
//     },
//     {
//       name: "Farmington Daily Times",
//       handle: "TheDailyTimes"
//     },
//     {
//       name: "Midland Reporter-Telegram",
//       handle: "mwtnews"
//     },
//     {
//       name: "Salina Journal",
//       handle: "salinajournal"
//     },
//     {
//       name: "Holton Recorder",
//       handle: "HoltonRecorder"
//     },
//     {
//       name: "Murray Ledger and Times",
//       handle: "MurrayLedger"
//     },
//     {
//       name: "Daily Ardmoreite",
//       handle: "Ardmoreite"
//     },
//     {
//       name: "Lumberton Robesonian",
//       handle: "The_Robesonian"
//     },
//     {
//       name: "Bainbridge Post-Searchlight",
//       handle: "postsearchlight"
//     },
//     {
//       name: "Riley Countian",
//       handle: "rileycountian"
//     }
//   ],
  // ifps: [
  //   {
  //     question:
  //       "Will ACLED record any civilian fatalities in Sri Lanka in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Violence escalates in Sri Lanka, following tensions between Buddhist and Muslim communities."
  //       },
  //       {
  //         text:
  //           "In 2017, there was only one month (July) that had civilian fatalities. In 2018, there have been civilian fatalities almost every month."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "New report shows that the declared state of emergency after communal violence in March has dramatically decreased civilian deaths."
  //       },
  //       {
  //         text:
  //           "Buddhist leaders apologize for what they say has been “a shameful act” and promise reconciliation is near."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will any NATO member invoke Article 4 or Article 5 before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "NATO analyst reports concerns regarding increased violence in the Middle East and suggests the possibility of Article 4 or 5 being invoked soon."
  //       },
  //       {
  //         text:
  //           "NATO: Whistleblower close to Erdogan suggests the possibility that Turkey will again invoke Art. 4."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The possibility of invoking Art. 5 for any NATO member is quickly dismissed by EU Commission spokesperson."
  //       },
  //       {
  //         text:
  //           "Although recent concerns have been raised regarding Middle Eastern players invoking NATO Art. 4 and Art. 5, experts say this process will likely take several months."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Reuters reporters Wa Lone or Kyaw Soe Oo be released before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Government says negotiations for the release of Reuters reporters Wa Lone and Kyaw Soe Oo are progressing steadily and suggest optimism."
  //       },
  //       {
  //         text:
  //           "Legal expert says that the evidence against reporters Wa Lone and Kyaw Soe Oo is weak and there is a good chance that they will soon be released."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Reuters reporters incarceration: Myanmar rejected a recent motion to drop case despite international pressure calling for the release of the journalists. Myanmar has not been swayed by global condemnation when it comes to other human rights violations."
  //       },
  //       {
  //         text:
  //           "Reuters raises concerns regarding the incarceration of reporters Wa Lone and Kyaw Soe Oo, saying that government is not doing enough."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will a new Italian government receive a vote of confidence from both houses of Parliament?",
  //     pro: [
  //       {
  //         text:
  //           "Newly appointed Prime Minister Giuseppe Conte says is optimistic regarding the vote of confidence from both houses of Parliament."
  //       },
  //       {
  //         text:
  //           " Italian populist parties are gaining more and more consensus in Italy. The vote of confidence is expected to arrive before the end of the summer break."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The government formed by populist parties Five Star Movement and Northern League continues to fight, increasing the uncertainty of an already unstable country."
  //       },
  //       {
  //         text:
  //           "Markets suffer as uncertainty arises around the vote of confidence from the Italian Parliament for the newly formed government."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will South Sudan's President Salva Kiir Mayardit experience a significant leadership disruption before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "President Kiir Mayardit admits leadership failure. South Sudan seems on the verge of economic collapse."
  //       },
  //       {
  //         text:
  //           "South Sudan: Pressure increases on President Mayardit, following the recent accusations of being an obstacle for peace."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Mayardit has ruled out the possibility of abdicating power. Mayardit has clearly implied that he values his own continued leadership more than he values the establishment of peace."
  //       },
  //       {
  //         text:
  //           "Notwithstanding the dire economic and political situation, South Sudan President Kiir Mayardit seems to tighten his grip on the country."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will any country’s national military launch a nuclear weapon at any other country before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The Science and Security Board moves Doomsday Clock to 2 minutes before midnight, suggesting a measurable increased risk in global nuclear disaster."
  //       },
  //       {
  //         text:
  //           "According to agency RAND, artificial Intelligence is a big threat to nuclear deterrence. The information they provide to countries could be wrong and could convince them to take drastic steps."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The chances of nuclear confrontation has significantly decreased, following the historical US-North Korea nuclear summit, experts say."
  //       },
  //       {
  //         text:
  //           "Peter Kuznick, director at the Nuclear Studies Institute: 'Any large scale use of nuclear weapons will be just as suicidal for the nation that strikes first as for the nation under attack. The majority of world leaders know this and would not take the risk.'"
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the PML-N party win 172 seats or more in Pakistan’s general election?",
  //     pro: [
  //       {
  //         text:
  //           "PML-N party has helped infrastructure investments and as they have been ruling it is easier for them to continue ruling. Furthermore, notwithstanding the corruption scandals, they are still the most popular political party. Opposition parties PTI and PPP, which only gained 15% of the seats the previous time, are unlikely to challenge PML-N."
  //       },
  //       {
  //         text:
  //           "PML-N has been successful in building core constituencies like the trading and religious classes with other linkages to the Establishment that prevented more overt and debilitating personal and party reversals. The PML-N almost appears unbeatable with 2018 seeming a mere milestone-formality, not a destination."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "With plans underway to use bandwagon strategies in place, the voters are veering away from the PML-N party and weakening the party."
  //       },
  //       {
  //         text:
  //           "PML-N is currently in power, but it seems that multiple instances of corruption and misuse of power have been made public that may hurt their chances. In the last election they won 166 seats. The polls currently show a slightly decreasing trend in confidence for PML-N."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will Yemen's Houthi rebels sign a peace agreement?",
  //     pro: [
  //       {
  //         text:
  //           "The UN’s new Yemen envoy says all sides desire a political solution. Previous attempts to sign a peace treaty suggest a strong will of all parties, including the Houthis rebels, to end the conflict."
  //       },
  //       {
  //         text:
  //           "Houthi rebels have been open in the past to peace negotiations. Experts believe that the conditions are there for a successful agreement."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The Saudi media has said that peace negotiations are useless unless they lead to complete disarmament of the Houthis. Chances of a peace agreement are thin."
  //       },
  //       {
  //         text:
  //           "Tensions are still high. Recent events point away from resolution. Problems persists as Saudi and UAE clash in Yemen. Houthi rebels are not getting what they want out of the current proposed peace deals."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will S&P, Moody's, or Fitch issue a sovereign credit rating for Iran before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "'Sanctions relief will grant Iran access to an estimated 150 billion dollars in frozen foreign assets. We project the resulting implementation of investment plans, as well as a recovery in oil production, to contribute to higher GDP growth of 5%' Atsi Sheth, Associate Managing Director at Moody’s."
  //       },
  //       {
  //         text:
  //           "Iran initiated talks with Moody’s and Fitch to reinstate sovereign credit rating after sanctions were lifted. A sovereign credit rating for Iran by credit rating agencies is in the works and should come no later than 2019."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Iran started discussions to get its first credit rating in 2016 but there has been no clear progress to indicate that any of the three major credit rating agencies will make a decision anytime soon."
  //       },
  //       {
  //         text:
  //           "The ratings outfits have become much more cautious, and Iran has become much more risky to predict anything about. They won’t be moving on this any time soon."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "'Before 8 September 2018, will Chinese tariffs on U.S. soybeans take effect?",
  //     pro: [
  //       {
  //         text:
  //           "Latest reports suggest China will not back down from trade war and tariffs on US soybeans are expected to increase."
  //       },
  //       {
  //         text:
  //           "US-China trade war is expected to escalate during the following months, experts say. China now threatens to buy soybeans from Brazil."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "US-China trade war: After months of escalation, both parties are ready to start finding a solution that will benefit both."
  //       },
  //       {
  //         text:
  //           "Although China’s recent trade war threats, any policy that will increase US soybeans tariffs will damage China and is thus unlikely to be implemented."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will the Council of the European Union adopt a directive on taxation of digital business activities?",
  //     pro: [
  //       {
  //         text:
  //           "Respondents to a public consultation poll show that an overwhelming majority (82%) of EU respondents in the consultation agreed there was a need to reform current international rules for the taxation of the digital economy."
  //       },
  //       {
  //         text:
  //           "After the recent fine issued to Google, EU now wants to tax digital business. As the General Data Protection Regulation (GDPR) shows, tech firms are willing to comply in order to access the EU market."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "EU “digital business tax”: many of the smaller nations already oppose the current plan. For example, Ireland could suffer a loss of €160 million in tax revenue. Other nations think there needs to be a more global solution to digital taxes."
  //       },
  //       {
  //         text:
  //           "Although the talks of a EU directive on digital business taxation, internal disagreement and external opposition together with procedural complications make this extremely unlikely."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will South Africa's parliament schedule a vote to amend Section 25 of the constitution?",
  //     pro: [
  //       {
  //         text:
  //           "The South African Committee is engaging in a public participation process.  The committee will very soon file a report to the National Assembly. So far, the tides seem to strongly favor amending Section 25."
  //       },
  //       {
  //         text:
  //           "In February, the National Assembly gave the go-ahead for Section 25 of the Constitution to be amended to give effect to government policy of expropriating land without compensation."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "South African banks against amending Section 25: Allowing the government to just take land and not compensate in any way would cause a lot of uncomfortable landowners to be unwilling to invest in their land."
  //       },
  //       {
  //         text:
  //           "South Africa: notwithstanding political and public support for amending Section 25 of the Constitution, this process is delicate and a long period of consultations is likely to take place."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 1 August 2018, will the Moroccan government and the Polisario Front meet for official negotiations over Western Sahara?",
  //     pro: [
  //       {
  //         text:
  //           "Moroccan government has been asking the UN to assist in addressing the Polisario Front fighters. Polisario Front has met with other groups in the past, suggesting that negotiations are now a real possibility."
  //       },
  //       {
  //         text:
  //           "The Western Sahara is viewed as the last colony in Africa. New momentum for self-determination referendums is likely to create diplomatic goodwill for renewed meetings."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Western Sahara: The diplomatic climate is getting cold and cloudy. Despite UN attention, the Moroccan government is becoming more hostile to any warming of relations."
  //       },
  //       {
  //         text:
  //           "The negotiations over Western Sahara have been ongoing for a number of years and been unsuccessful, effectively reaching a stalemate that will hardly resolve soon."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Ireland's referendum to repeal the Eighth Amendment pass?",
  //     pro: [
  //       {
  //         text:
  //           "Irish referendum: diminished Catholic Church's power and increased women rights both suggest that the 8th Amendment is likely to be repealed."
  //       },
  //       {
  //         text:
  //           "Ireland is likely to repeal 8th Amendment, polls suggest. The campaign for women’s rights has gained momentum and increased international attention."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Notwithstanding campaigners success, Ireland remains a country with a strong Catholic majority and a repeal remains unlikely."
  //       },
  //       {
  //         text:
  //           "Latest polls suggest that the support for the repeal has recently slowed down."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the Philippines' President Rodrigo Duterte experience a significant leadership disruption before 1 July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Philippine President Rodrigo Duterte is skating on thin ice following his charges of crimes against humanity and his multiple shocking statements."
  //       },
  //       {
  //         text:
  //           "International pressure is mounting on Rodrigo Duterte. Some say his days as President are close to an end."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Even though Rodrigo Duterte is very controversial, it is unlikely he will have a significant leadership disruption soon. His government is the most popular in decades."
  //       },
  //       {
  //         text:
  //           "Philippines President Duterte seems to have support among the population. The economy appears to be growing, which keeps people happy."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "'Before 8 September 2018, will Poland, Estonia, Latvia, or Lithuania accuse Russia of intervening militarily in its territory without permission?",
  //     pro: [
  //       {
  //         text:
  //           "Tensions between Eastern Europe countries and Russia do not seem to wind down. Analysts say accusations of military intervention are likely to follow."
  //       },
  //       {
  //         text:
  //           "Polish diplomat harshly criticizes Russian actions and threatens to follow with formal accusations."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "After the spy poisoning case and the US election meddling, Russia’s interests are in keeping Eastern Europe countries happy."
  //       },
  //       {
  //         text:
  //           "RAND report suggest that East European countries are unlikely to start formal accusations to Russia, afraid of Russian repercussions."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Afghanistan's President Ashraf Ghani experience a significant leadership disruption before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The political turmoil of Afghanistan is expected to increase in the following months due to revived Taliban terrorism. The next months will be Asraf Ghani's biggest challenge."
  //       },
  //       {
  //         text:
  //           "Poll suggest a steady decrease of support for Afghanistan's President Ashraf Ghani."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "In a recent interview, Ashraf Ghani seems confident to consolidate his power after NATO troops will totally withdraw in the next few years."
  //       },
  //       {
  //         text:
  //           "Afghanistan: In the last years, the region has seen increased political stability that is expected to continue in the following months."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will ACLED record any riot/protest events in Gambia in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Local environmentalists and other activists have been rallying more urgently for the closure of the Julakay sand mining operation in Faraba Banta, citing severe damage to the surrounding land."
  //       },
  //       {
  //         text:
  //           "Environmental activists are dissatisfied with the speed of change following the ousting of dictator Yahya Jammeh, in recent months organizing protests against the Bakoteh dumpsite, the demolition of a wildlife preserve, and the dumping of waste into coastal waters."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "National polls indicate increasing optimism and approval of the government after the autocratic leader Yahya Jammeh was defeated in elections in 2016."
  //       },
  //       {
  //         text:
  //           "A diverse group of international donors, including the European Union, African Development Bank, the World Bank, and the Islamic Development Bank, have pledged 1.45 billion euros to Gambia over three years to strengthen the economy and the country’s democratic institutions."
  //       }
  //     ]
  //   },
  //   {
  //     question: "Will Turkish forces take Manbij before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The Turkish army announced that, in cooperation with US soldiers, they have begun to patrol the outskirts of the city of Manbij."
  //       },
  //       {
  //         text:
  //           "With a plan for the Kurdish YPG militia to withdraw from Manbij, there are no longer any substantial roadblocks to Turkish forces occupying the city in the near future."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "With Kobane and Tal Abyad still under the control of Kurdish forces, the Turkish Armed Forces will likely focus on these two cities rather than Manbij in the coming months."
  //       },
  //       {
  //         text:
  //           "Turkish Foreign Minister Mevlut Cavusoglu, after meeting with US Secretary of State Mike Pompeo, suggested that their joint roadmap to retake Manbij may take up to six months to complete."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will a Loya Jirga convene in Afghanistan before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The NATO-led Resolute Support Mission in Afghanistan reaffirmed its support of the Afghanistan’s national security, encouraging the formation of a Loya Jirga to negotiate peace with the Taliban."
  //       },
  //       {
  //         text:
  //           "The Associated Press reports that a Loya Jirga may convene in the coming weeks to declare a fatwa against suicide bombings."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "A recent spate of suicide bombings targeting top religious leaders in Afghanistan may prevent a Loya Jirga from convening this summer."
  //       },
  //       {
  //         text:
  //           "Trying to increase their influence in Afghanistan, ISIS has vowed to attack any Loya Jirga that occurs within the next two months."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will FEWS NET publish a Food Security Alert with 'famine' and 'Ethiopia' in its headline between 1 July 2018 and 31 July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Large regions of Ethiopia has experienced droughts for the past three years."
  //       },
  //       {
  //         text:
  //           "Conflict along the border of the Somali and Oromo regions of Ethiopia has displaced 1 million people."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The Urban Productive Safety Net Project, launched in Ethiopia in 2017, has already ensured food security for 400,000 of the poorest urban residents in the country, supplementing the 10m rural citizens covered by the flagship rural safety net programme."
  //       },
  //       {
  //         text:
  //           "In March 2018, the World Bank pledged $300m in the next five years towards food security in Ethiopia."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will FEWS NET publish a Food Security Alert with 'famine' and 'Yemen' in its headline between 1 July 2018 and 31 July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Mohsin Siddiqui, a leading Oxfam director, warns that “Yemen is already the world’s worst humanitarian crisis and is steadily slipping towards famine.”"
  //       },
  //       {
  //         text:
  //           "Saudi and Emirati troops recently attacked the port city of Hodeida, where the majority of Yemen’s food and aid shipments are delivered to feed the 8 million Yemenis on the brink of famine."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Several governments and aid organizations have dramatically increased the amount of aid delivered to Yemen, including the UAE, the Red Crescent, and KSRelief."
  //       },
  //       {
  //         text:
  //           "Prominent aid organizations are drawing international attention to attacks on Yemeni port cities important for the delivery of food aid, putting pressure on the Saudis and Emiratis to cease their military operations to protect aid delivery."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Zimbabwe hold a general election between 21 July and 21 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Priscilla Chigumba, the chairperson of the Zimbabwe Electoral Commission, insists that “nothing stops the election” from happening on July 30."
  //       },
  //       {
  //         text:
  //           "The European Union announced its plans to oversee the Zimbabwe election this summer in order to ensure a free and fair election."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Zimbabwean opposition parties seek a delay in elections because the ruling government failed to give a copy of the voter rolls to all candidates."
  //       },
  //       {
  //         text:
  //           "Elections in doubt as opposition parties in Zimbabwe threaten to boycott upcoming elections due to unfair practices by the ruling party."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will ACLED record any civilian fatalities in Ghana in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "There were 14 civilian fatalities from May 2017 to April 2018 in Ghana, averaging to 1,16 civilian fatalities per month. This trend has been consistent in the last two years, since the New Patriotic Party (NPP) took office."
  //       },
  //       {
  //         text:
  //           "Violence against civilians in Ghana has increased in recent years, with a slightly higher number of casualties over the summer months."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Although attacks by al-Qaeda militants have occurred in several West African cities, Ghana has seen very little civilian violence in the past months and it looks like that trend will continue into the summer 2018."
  //       },
  //       {
  //         text:
  //           "Data shows violence against civilians in Ghana tends to cluster around elections. Next major election will not take place until 2020."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 12 July 2018, will Macedonia announce a change to its official name?",
  //     pro: [
  //       {
  //         text:
  //           "Greek prime minister Alexis Tsipras says Macedonia has to change its name. He is confident to settle name dispute by early July."
  //       },
  //       {
  //         text:
  //           "The Greek public are overwhelmingly in favor of a change of name to Macedonia, with mass demonstrations over 100,000 strong organized across the country."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The foreign ministers of Greece and Macedonia met in the lakeside resort of Ohrid but remain far from an agreement about the conditions of a name change to the latter country."
  //       },
  //       {
  //         text:
  //           "Macedonia (FYROM) is reluctant to agree to Greece’s demands of changing FYROM’s constitution, stalling talks regarding Macedonia’s name change."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Venezuela's President Nicolás Maduro experience a significant leadership disruption before 1 July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The International Criminal Court has announced a preliminary examination into human rights abuses by the Venezuelan government, putting pressure on its president to resign."
  //       },
  //       {
  //         text:
  //           "After years of hyperinflation, falling oil production, and shortages, polls indicate that Venezuela’s population is becoming increasingly impatient with the ruling party."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Maduro authorized the release of dozens of political activists, in a show of goodwill aimed at reuniting a fractured population."
  //       },
  //       {
  //         text:
  //           "UN analysts fear that Venezuela’s upcoming election will not be fair, reporting that political opponents have been muzzled and election posts filled with allies, setting the stage for an easy win for incumbent Nicolás Maduro."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will negotiators announce the completion of the Regional Comprehensive Economic Partnership (RCEP) free trade agreement?",
  //     pro: [
  //       {
  //         text:
  //           "Sources in the Indian government agree “there is a pressure to conclude the RCEP negotiations at the earliest.”"
  //       },
  //       {
  //         text:
  //           "Trade ministers of 16 countries are set to meet on July 1 in Tokyo to accelerate progress on the RCEP trade pact."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Completion of the RCEP agreement in doubt as India remains wary of effect that lower duties for China will have on its trade deficit."
  //       },
  //       {
  //         text:
  //           "Indonesia trade minister Enggartiasto Lukita estimates that progress in negotiations has reached 80% and is confident that an agreement will be reached with all countries in spring 2019."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will there be a locally-transmitted case of the Zika virus in Singapore between 1 July 2018 and 31 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Zika on the rise in SouthEast Asia. Data shows cases of the Zika virus being locally transmitted for many previous months; a trend that is expected to continue."
  //       },
  //       {
  //         text:
  //           "Although the Zika epidemics is now under control, the chances of locally transmitted contagions still remain high in the Singapore region, particularly during summer months."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "New vaccines against Zika are expected to be widely available in South East Asia in the next month."
  //       },
  //       {
  //         text:
  //           "According to the official government, there are no currently active clusters of Zika in Singapore. Travel restrictions over disease concerns have been lifted in the region."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will Saudi Arabia announce that it is ending the blockade of Yemen's Hudaydah port?",
  //     pro: [
  //       {
  //         text:
  //           "The recent Saudi Arabia opening for humanitarian aids to enter Yemen rises hopes of ending the blockade. Activists now think that a resolution of the Yemeni crisis is close."
  //       },
  //       {
  //         text:
  //           "Increased media attention together with international pressure make experts believe that the days of the Saudi Arabia blockade of Yemen’s Hudaydah port are close to an end."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Saudi Arabia seems to have every intention in continuing the blockade against Yemen."
  //       },
  //       {
  //         text:
  //           "Media attention has once more been brought to the Yemeni crisis. The three years blockade imposed by Saudi Arabia have intensified over the last couple months, worrying many international observers."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the Council of the European Union make an Article 7.1 determination against a member state before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The EU Council is being pressured to officially sanctioning (through Article 7.1) several member states, including the UK and Czech Republic, to enforce cooperation among member states."
  //       },
  //       {
  //         text:
  //           "Several EU members are afraid that more states will try to follow the example set by Czech Republic and Poland, refusing to accept refugees. Article 7.1 is a likely to be an effective deterrent that can be quickly invoked."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Poland only needs six dissenting votes in order to avoid an Article 7.1 determination. Romania and Malta, former Eastern Bloc countries, might dissent fearing damaging historical alliances with Poland."
  //       },
  //       {
  //         text:
  //           "EU Council is likely to make Article 7.1 determination against a member state, but this will likely take a long time due to bureaucratic complications."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "'Will Saudi Arabia execute or be targeted in an acknowledged national military attack before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Increased tensions between Saudi Arabia against Iran and Houthi rebels suggests that violence is expected to increase over the summer 2018."
  //       },
  //       {
  //         text:
  //           "After the US nuclear deal withdrawal, the risk of Iran trying to strengthen its influence in the region through military action, has increased. Saudi Arabia might be its primary target."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Although tension is high between Saudi Arabia and Iran and Houthi, violence in the region will likely occur through unofficial military actions."
  //       },
  //       {
  //         text:
  //           "Middle East observers think that acknowledged national military attacks involving Saudi Arabia are unlikely, given that they are likely to trigger a war that could escalate out of proportion."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will any G7 nation engage in an acknowledged national military attack against Syria before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "According to the recent claims made by the POTUS, a national military attack against Syria is likely to occur soon."
  //       },
  //       {
  //         text:
  //           "Increasing violence against Syrian civilians by the Assad regime is likely to induce G7 nations to attack Syria as done in the past, political commentators say."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Russians or Syrians will try some diplomatic gambit to defuse tensions in Syria. POTUS has made clear that US does not want to remain committed in Syria."
  //       },
  //       {
  //         text:
  //           "Despite tough rhetoric, military attacks against Syria are unlikely as the stakes would be too high. Russia has signalled that it considers any missile attack against Assad as an attack on an ally and might retaliate."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will ACLED record any riot/protest events in Gabon in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "After the recent political elections, Gabon is suffering increasing internal tensions."
  //       },
  //       {
  //         text:
  //           "ACLED recorded 12 different riots in Gabon in the last 365 days, equally distributed across the year. Chances are that this trend will continue after the controversial elections held last April."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Gabon: Although the period previous the elections was dominated by instability, the newly formed government is expected to bring a wave of reforms that will stabilize internal unrest."
  //       },
  //       {
  //         text:
  //           "Despite generalized discontent with the government, Gabon has not seen out-of-norm violence. Any form of protest is expected to use non-violent means (e.g. strikes)."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the UN Security Council adopt a resolution concerning Myanmar between 31 June 2018 and 31 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "The Myanmar crisis is worsening. UN Security Council is expected to act soon."
  //       },
  //       {
  //         text:
  //           "A letter signed by 12 Nobel Peace Prize winners pushes the UN to adopt a quick resolution concerning the Myanmar crisis."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The UN has been extremely slow to react to the Myanmar crisis. Nothing so far has let observers believe in a change of actions."
  //       },
  //       {
  //         text:
  //           "While the UN has acknowledged the problems in Myanmar, continuing from the violence last fall, little has been done this year."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Honduras President Juan Orlando Hernández experience a significant leadership disruption before 31 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "An international commission’s corruption case of several officials in President Hernández’s government has led to a collapse of the public’s trust in the governing party, the latest national polls indicate."
  //       },
  //       {
  //         text:
  //           "Suspicions regarding the legitimacy of Hernández’s re-election persist as several European countries call for an investigation into the violent quelling of protests following the election by government security forces."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Following U.S. Vice-President Mike Pence’s meeting with, and public show of support for, President Hernández, the Honduran leader’s position appears to more secure than in previous months."
  //       },
  //       {
  //         text:
  //           "Efforts by President Hernández’s cabinet to modernize Honduras’ infrastructure through strategic partnerships with tech giants Amazon (AMZN) and Google (GOOG) have increased optimism that the country’s economy will soon improve."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will there be a heavy fuel oil spill of 1,000 gallons or more in the Arctic between 6 June and 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "With the reduction of sea ice, Arctic trader routes for the transport of heavy fuel oil become available, resulting in an increased risk of Arctic oil spill."
  //       },
  //       {
  //         text:
  //           "Russian oil companies spill more than 30 million barrels on land each year.  This poor record is bound to apply to the Arctic as new trade routes become available."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "A recent report by EnvironmentWatchers show that new environmental policies reduced the risk of oil spills."
  //       },
  //       {
  //         text:
  //           "The IMO has embarked on a body of work aimed at mitigating the risks of fuel oil accidents. This could reduce the short term risk of oil spills in the near future."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the WHO declare a Public Health Emergency of International Concern (PHEIC) before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "European health analysts warn that, despite only a few cases in Congo, the highly virulent Ebola virus can spread rapidly in just a few weeks, possibly necessitating a PHEIC declaration."
  //       },
  //       {
  //         text:
  //           "In addition to the five cases of Ebola in the Congo last month, the WHO has now reported two cases in Uganda, citing fears of a potential widespread outbreak this summer."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The meeting of the WHO Emergency Committee is satisfied that a PHEIC is not currently necessary in the Congo, convincing many that the Ebola outbreak there will not spread significantly."
  //       },
  //       {
  //         text:
  //           "The Congolese health office reports no new cases of Ebola in the past two weeks."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Armenia's Prime Minister Nikol Pashinyan experience a significant leadership disruption before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Journalists are investigating the dark past of recently elected Armenian leader Nikol Pashinyan. What will emerge can potentially shake the leadership of the popular leader."
  //       },
  //       {
  //         text:
  //           "Although popular, Nikol Pashinyan is experiencing strong opposition from his own party and previous exponents of the government."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Nikol Pashinyan recent popularity stems from the protests he led to remove Serzh Sarksyan from office as Prime Minister. With Pashinyan enjoying huge public support, Armenia has secured long term political stability."
  //       },
  //       {
  //         text:
  //           "Recent opinion polls clearly show that Nikol Pashinyan is experiencing unprecedented political support."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will either the International Atomic Energy Agency (IAEA) or the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO) conduct on-site inspections of a nuclear facility in North Korea before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "North Korea is highly motivated in collaborating with the US. Any requests by IAEA or CTBTO to conduct on-site inspections is likely to be approved."
  //       },
  //       {
  //         text:
  //           "POTUS recently tweeted about the new agreement with North Korea, which would allow international agencies to lead on-site inspections."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Kim Jong-un is backing off from US-North Korea agreement on nuclear inspections."
  //       },
  //       {
  //         text:
  //           "The time scale for international on-site inspections in North Korean nuclear facilities is likely to be extremely long."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Ukraine's Prime Minister Volodymyr Groysman experience a significant leadership disruption before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Volodymyr Groysman’s party has seen its popularity sharply declining in the last 3 years."
  //       },
  //       {
  //         text:
  //           "Corruption scandal hits Volodymyr Groysman. If confirmed, these accusations will soon likely force him to step down."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "In the last 5 years, Ukraine Prime Minister Volodymyr Groysman managed to stabilize his position after the 2013 riots."
  //       },
  //       {
  //         text:
  //           "Volodymyr Groysman is on the rise. New polls suggest increasing popularity of the Ukraine Prime Minister."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will there be a locally-transmitted case of the Zika virus in Ukraine, Russia, Georgia or Armenia between 1 June 2018 and 31 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Following the discovery of Zika-carrying mosquitoes in Turkey in early 2018, a new study by German researchers predicts that the virus could spread to neighboring countries, including Georgia, Armenia, and Iran, by the end of the summer."
  //       },
  //       {
  //         text:
  //           "With millions of tourists descending on Russia for the 2018 World Cup, there is a high risk of Zika transmission this summer, WHO analysts warn."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The health ministers of both Russian and Ukraine have both declared that there is no risk of the Zika virus spreading to either of those countries."
  //       },
  //       {
  //         text:
  //           "Despite the growing range of the Zika virus, Korean researchers estimate that it will take several more years before it reaches Eastern Europe, including Georgia, Ukraine, and Romania."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Before 8 September 2018, will a new Iraqi Council of Ministers receive a vote of confidence?",
  //     pro: [
  //       {
  //         text:
  //           "Notwithstanding the recent corruption scandals, a vote of confidence to the Iraqi Council of Ministers is very much likely, analysts say."
  //       },
  //       {
  //         text:
  //           "The recent vote recount will allow Iraqi Council of Ministers to strengthen its position, thus justifying a vote of confidence."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Allegations of voter fraud along with the fear of turmoil surrounding the parliamentary vote make the vote of confidence in Iraqi Council of Ministers unlikely."
  //       },
  //       {
  //         text:
  //           "Haidar al-Abadi, current Iraqi Prime Minister, has cautioned that continued request for recounts will most likely lead to political instability."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will ACLED record any riot/protest events in Cameroon in July 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Increasing tensions between the Cameroonian government and the minority Anglophone community has become increasingly violent, threatening to accelerate into armed conflict this summer, said a senior analyst at the International Crisis Group."
  //       },
  //       {
  //         text:
  //           "In the past eight months, over 100 rioters have been killed by security forces in Cameroon, likely leading to more riots and protests this summer, a new UN report states."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "The Catholic Church has expressed its willingness to mediate peace talks between the Cameroon government and the secessionist faction, possibly leading to a decrease in riots in the foreseeable future."
  //       },
  //       {
  //         text:
  //           "Several secessionist leaders have been arrested by Cameroonian security forces in the past week, leading many in the government to believe that the secessionists’ ability to organize protests and riots will diminish substantially."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will China execute or be targeted in an acknowledged national military attack before 1 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Vietnam increases its artillery in the South China Sea. China might soon retaliate."
  //       },
  //       {
  //         text:
  //           "Tensions escalate in the South China Sea. International watchers worry about direct conflicts involving China."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "International Peace agencies are working night and day to diffuse tensions concerning the South China Sea. An international peace agreement with China is expected in the coming weeks."
  //       },
  //       {
  //         text:
  //           "With relations in Asia being worked on diplomatically among the US and Korea, China cannot afford to become an aggressor among the newly founded sense of peace among these two nations."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Israel execute or be targeted in an acknowledged national military attack before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "Israel building of new settlements in occupied regions, is escalating an already tense climate."
  //       },
  //       {
  //         text:
  //           "Wikileaks publishes documents suggesting that Israel and Iran are planning for a direct attack in Syria that will take place in the near future."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Violence in Israel has very rarely been in the form of an acknowledged military action. Violence in the region is expected to continue in unofficial ways."
  //       },
  //       {
  //         text:
  //           "Israel is unlikely to start military actions, now that the presence of Russia in the Middle East is growing."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Zimbabwe re-join the Commonwealth of Nations before 1 January 2019?",
  //     pro: [
  //       {
  //         text:
  //           "A Commonwealth Assessment Mission completed a five-day trip to Zimbabwe, where it was reported that major progress has been made. According to anonymous sources, the mission is recommending accelerated re-admission for Zimbabwe as early as summer 2018."
  //       },
  //       {
  //         text:
  //           "Zimbabwe’s invitation of international election observers to monitor their upcoming presidential elections may pave the way for Zimbabwe’s rapid readmission to the Commonwealth by boosting trust among other Commonwealth nations."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "While other Commonwealth nations have expressed hope that Zimbabwe will rejoin the group, UN analysts expect that the earliest that Zimbabwe can fulfill all of the necessary requirements is by mid-2019."
  //       },
  //       {
  //         text:
  //           "Anonymous sources indicate that there are some within the Commonwealth Secretariat that are unconvinced that the upcoming Zimbabwe elections will be fair and caution against rushing the country’s readmission, possibly until the next elections in two years."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will Pakistan execute or be targeted in an acknowledged national military attack before 1 August 2018?",
  //     pro: [
  //       {
  //         text:
  //           "There has been an increase in cross border attacks between India and Pakistan. Ceasefire violations have intensified in Uri sector for the first time in 15 years. More than 1,000 villagers are fleeing their homes to escape the violence."
  //       },
  //       {
  //         text:
  //           "Tensions between India and Pakistan intensified after an attack on an army base in Sunjuwan area in Jammu city.  Following the attack, Indian defence minister, Nirmala Sitharaman, warned Pakistan “it will pay for its misadventure”."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Although Pakistan is experiencing a lot of tensions, violence will likely continue to be from terrorist groups, insurgents and civilians rather than national military forces."
  //       },
  //       {
  //         text:
  //           "The high chances of Indian retaliation suggest that a potential acknowledged national military action by Pakistan is highly unlikely."
  //       }
  //     ]
  //   },
  //   {
  //     question:
  //       "Will the Afghan Taliban participate in official peace talks with the governments of Afghanistan or the United States before 8 September 2018?",
  //     pro: [
  //       {
  //         text:
  //           "In a recent tweet, POTUS says he is willing to initiate talks with Afghan Taliban to reach an agreement before the end of the summer."
  //       },
  //       {
  //         text:
  //           "New diplomatic talks make experts believe that peace negotiations with Afghan Taliban groups are likely to take place in August."
  //       }
  //     ],
  //     against: [
  //       {
  //         text:
  //           "Afghanistan: The chance of peace talks with the Taliban before September 2018 is slim. Taliban said that talks are useless until foreign invading forces leave Afghanistan."
  //       },
  //       {
  //         text:
  //           "POTUS has exacerbated the dialogue with the Taliban, making peace talks ever more complicated."
  //       }
  //     ]
  //   }
  // ]
// };

data.sourceHandles = _.pluck(data.sources, "handle");
data.sourcesByHandle = _.indexBy(data.sources, "handle");
