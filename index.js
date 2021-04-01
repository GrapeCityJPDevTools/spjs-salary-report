// Import stylesheets
import "./style.css";
import "./license.js";

// Spread.Sheets関連モジュールのインポート
import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-resources-ja";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white";

GC.Spread.Common.CultureManager.culture("ja-jp");

// SpreadJSを初期化します
var spreadNS = GC.Spread.Sheets;
var spread = new spreadNS.Workbook(document.getElementById("ss"));
var sheet = spread.getSheet(0);
