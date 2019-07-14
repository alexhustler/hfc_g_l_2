// Configuration options
import { generatedIfps } from "./ifpsGenerator";

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
    // {
    //   name: "Riley Countian",
    //   handle: "rileycountian"
    // }
  ],
  ifps : generatedIfps,
};

data.sourceHandles = _.pluck(data.sources, "handle");
data.sourcesByHandle = _.indexBy(data.sources, "handle");
