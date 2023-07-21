import React, { useState, useEffect } from "react";
import notesData from "./song-notecounts";
import songInfo from "./SongInfo.js";
import songDb from "./songDB.json";
import Song from "./Song.jsx";

export default function App() {
  const notesDataSongs = notesData.split(/\n/);
  const songTitles = notesDataSongs.map((song) => {
    let splitted = song.split(",");
    return splitted[10];
  });
  const [csvValue, setCsvValue] = useState("");
  const [songData, setSongData] = useState(songDb);
  const [searchText, setSearchText] = useState("");
  const [levelFilters, setLevelFilters] = useState([]);
  const [styleFilter, setStyleFilter] = useState("ALL VERSION");
  function inputHandler(e) {
    setSearchText(e.target.value);
  }
  function checkDifficulty(difficulty) {
    let splitDiff = difficulty.split(``);
    let numbersRegex = new RegExp(/\d/);
    console.log(splitDiff);
    let newDiff = "";
    for (let i = 0; i < splitDiff.length; i++) {
      if (splitDiff[i] == "[") newDiff += splitDiff[i];
      else if (splitDiff[i] == "C") newDiff += splitDiff[i];
      else if (splitDiff[i] == "N") newDiff += splitDiff[i];
      else if (splitDiff[i] == "B") newDiff += splitDiff[i];
      else if (splitDiff[i] == "S") newDiff += splitDiff[i];
      else if (splitDiff[i] == "]") newDiff += splitDiff[i];
      else if (numbersRegex.test(splitDiff[i]) == true) newDiff += splitDiff[i];
    }
    console.log(newDiff);
    return newDiff;
  }
  function createCnFlags(song) {
    song.beginnerCn = false;
    song.beginnerBss = false;
    song.normalCn = false;
    song.normalBss = false;
    song.hyperCn = false;
    song.hyperBss = false;
    song.anotherCn = false;
    song.anotherBss = false;
    song.leggendariaCn = false;
    song.leggendariaBss = false;
    let cnRegex = new RegExp(/[CN]/);
    let bssRegex = new RegExp(/[BSS]/);
    if (cnRegex.test(song.beginnerDiff) == true) {
      song.beginnerCn = true;
    }
    if (bssRegex.test(song.beginnerDiff) == true) {
      song.beginnerBss = true;
    }
    if (cnRegex.test(song.normalDiff) == true) {
      song.normalCn = true;
    }
    if (bssRegex.test(song.normalDiff) == true) {
      song.normalBss = true;
    }
    if (cnRegex.test(song.hyperDiff) == true) {
      song.hyperCn = true;
    }
    if (bssRegex.test(song.hyperDiff) == true) {
      song.hyperBss = true;
    }
    if (cnRegex.test(song.anotherDiff) == true) {
      song.anotherCn = true;
    }
    if (bssRegex.test(song.anotherDiff) == true) {
      song.anotherBss = true;
    }
    if (cnRegex.test(song.leggendariaDiff) == true) {
      song.leggendariaCn = true;
    }
    if (bssRegex.test(song.leggendariaDiff) == true) {
      song.leggendariaBss = true;
    }
    let numbersRegex = new RegExp(/\d/);
    let beginnerSplit = song.beginnerDiff.split(``);
    let newbeginnerDiff = "";
    let normalSplit = song.normalDiff.split(``);
    let newnormalDiff = "";
    let hyperSplit = song.hyperDiff.split(``);
    let newhyperDiff = "";
    let anotherSplit = song.anotherDiff.split(``);
    let newanotherDiff = "";
    let leggendariaSplit = song.leggendariaDiff.split(``);
    let newleggendariaDiff = "";
    for (let i = 0; i < beginnerSplit.length; i++) {
      if (numbersRegex.test(beginnerSplit[i]) == true)
        newbeginnerDiff += beginnerSplit[i];
    }
    for (let i = 0; i < normalSplit.length; i++) {
      if (numbersRegex.test(normalSplit[i]) == true)
        newnormalDiff += normalSplit[i];
    }
    for (let i = 0; i < hyperSplit.length; i++) {
      if (numbersRegex.test(hyperSplit[i]) == true)
        newhyperDiff += hyperSplit[i];
    }
    for (let i = 0; i < anotherSplit.length; i++) {
      if (numbersRegex.test(anotherSplit[i]) == true)
        newanotherDiff += anotherSplit[i];
    }
    for (let i = 0; i < leggendariaSplit.length; i++) {
      if (numbersRegex.test(leggendariaSplit[i]) == true)
        newleggendariaDiff += leggendariaSplit[i];
    }
    song.beginnerDiff = newbeginnerDiff;
    song.normalDiff = newnormalDiff;
    song.hyperDiff = newhyperDiff;
    song.anotherDiff = newanotherDiff;
    song.leggendariaDiff = newleggendariaDiff;
  }
  function createDb() {
    console.log("DB BEING CREATED!!");
    const testDb = songInfo.split(/\n/);
    const newTestDb = testDb.map((song) => {
      let splitSong = song.split(",");
      let o = new Object();
      o.title = splitSong[11];
      o.genre = splitSong[10];
      o.artist = splitSong[12];
      o.bpm = splitSong[9];
      o.version = splitSong[13];
      o.beginnerDiff = checkDifficulty(splitSong[0]);
      o.normalDiff = checkDifficulty(splitSong[1]);
      o.hyperDiff = checkDifficulty(splitSong[2]);
      o.anotherDiff = checkDifficulty(splitSong[3]);
      o.leggendariaDiff = checkDifficulty(splitSong[4]);
      createCnFlags(o);
      return o;
    });
    console.log(newTestDb);
    mergeNotecounts(newTestDb);
  }
  function mergeNotecounts(songDataCopy) {
    let matchFound = false;
    let counter = 0;
    let splitNotesDataSongs = notesDataSongs.map((song) => song.split(","));
    for (let i = 0; i < splitNotesDataSongs.length; i++) {
      matchFound = false;
      for (let j = 0; j < songDataCopy.length; j++) {
        if (splitNotesDataSongs[i][0] === songDataCopy[j].title) {
          songDataCopy[j].beginnerNotecount = splitNotesDataSongs[i][1];
          songDataCopy[j].normalNotecount = splitNotesDataSongs[i][2];
          songDataCopy[j].hyperNotecount = splitNotesDataSongs[i][3];
          songDataCopy[j].anotherNotecount = splitNotesDataSongs[i][4];
          songDataCopy[j].leggendariaNotecount = splitNotesDataSongs[i][5];
          songDataCopy[j].beginnerF = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (2 / 9)
          );
          songDataCopy[j].beginnerD = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (3 / 9)
          );
          songDataCopy[j].beginnerC = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (4 / 9)
          );
          songDataCopy[j].beginnerB = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (5 / 9)
          );
          songDataCopy[j].beginnerA = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (6 / 9)
          );
          songDataCopy[j].beginnerAA = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (7 / 9)
          );
          songDataCopy[j].beginnerAAA = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * (8 / 9)
          );
          songDataCopy[j].beginnermaxMinus = Math.round(
            songDataCopy[j].beginnerNotecount * 2 * 0.9444
          );
          songDataCopy[j].normalF = Math.round(
            songDataCopy[j].normalNotecount * 2 * (2 / 9)
          );
          songDataCopy[j].normalD = Math.round(
            songDataCopy[j].normalNotecount * 2 * (3 / 9)
          );
          songDataCopy[j].normalC = Math.round(
            songDataCopy[j].normalNotecount * 2 * (4 / 9)
          );
          songDataCopy[j].normalB = Math.round(
            songDataCopy[j].normalNotecount * 2 * (5 / 9)
          );
          songDataCopy[j].normalA = Math.round(
            songDataCopy[j].normalNotecount * 2 * (6 / 9)
          );
          songDataCopy[j].normalAA = Math.round(
            songDataCopy[j].normalNotecount * 2 * (7 / 9)
          );
          songDataCopy[j].normalAAA = Math.round(
            songDataCopy[j].normalNotecount * 2 * (8 / 9)
          );
          songDataCopy[j].normalmaxMinus = Math.round(
            songDataCopy[j].normalNotecount * 2 * 0.9444
          );
          songDataCopy[j].hyperF = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (2 / 9)
          );
          songDataCopy[j].hyperD = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (3 / 9)
          );
          songDataCopy[j].hyperC = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (4 / 9)
          );
          songDataCopy[j].hyperB = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (5 / 9)
          );
          songDataCopy[j].hyperA = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (6 / 9)
          );
          songDataCopy[j].hyperAA = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (7 / 9)
          );
          songDataCopy[j].hyperAAA = Math.round(
            songDataCopy[j].hyperNotecount * 2 * (8 / 9)
          );
          songDataCopy[j].hypermaxMinus = Math.round(
            songDataCopy[j].hyperNotecount * 2 * 0.9444
          );
          songDataCopy[j].anotherF = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (2 / 9)
          );
          songDataCopy[j].anotherD = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (3 / 9)
          );
          songDataCopy[j].anotherC = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (4 / 9)
          );
          songDataCopy[j].anotherB = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (5 / 9)
          );
          songDataCopy[j].anotherA = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (6 / 9)
          );
          songDataCopy[j].anotherAA = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (7 / 9)
          );
          songDataCopy[j].anotherAAA = Math.round(
            songDataCopy[j].anotherNotecount * 2 * (8 / 9)
          );
          songDataCopy[j].anothermaxMinus = Math.round(
            songDataCopy[j].anotherNotecount * 2 * 0.9444
          );
          songDataCopy[j].leggendariaF = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (2 / 9)
          );
          songDataCopy[j].leggendariaD = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (3 / 9)
          );
          songDataCopy[j].leggendariaC = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (4 / 9)
          );
          songDataCopy[j].leggendariaB = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (5 / 9)
          );
          songDataCopy[j].leggendariaA = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (6 / 9)
          );
          songDataCopy[j].leggendariaAA = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (7 / 9)
          );
          songDataCopy[j].leggendariaAAA = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * (8 / 9)
          );
          songDataCopy[j].leggendariamaxMinus = Math.round(
            songDataCopy[j].leggendariaNotecount * 2 * 0.9444
          );
          songDataCopy[j].csvName = splitNotesDataSongs[i][10];
          matchFound = true;
          counter++;
          break;
        }
      }
      if (matchFound === false) console.log(splitNotesDataSongs[i]);
    }
    setSongData(songDataCopy);
    localStorage.setItem("songDB", JSON.stringify(songDataCopy));
  }
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("songDB")) === null) {
      createDb();
    } else setSongData(JSON.parse(localStorage.getItem("songDB")));
  }, []);
  function checkDb() {
    if (JSON.parse(localStorage.getItem("songDB")) === null)
      alert("NO DB PRESENT!");
    else alert("DB Found");
  }
  function clearDb() {
    localStorage.clear();
    setSongData([]);
  }
  function parseCsv(value) {
    const initialData = csvValue.split(/\n/);
    let matchFound = null;
    let counter = 0;
    let headers = initialData.shift();
    let allSongs = initialData.map((song) => song.split(","));
    let songDataCopy = [...songData];
    for (let i = 0; i < allSongs.length; i++) {
      matchFound = false;
      for (let j = 0; j < songDataCopy.length; j++) {
        if (allSongs[i][1] === songDataCopy[j].csvName) {
          songDataCopy[j].playcount = allSongs[i][4];
          songDataCopy[j].beginnerScore = allSongs[i][5];
          songDataCopy[j].beginnerPgreat = allSongs[i][6];
          songDataCopy[j].beginnerGreat = allSongs[i][7];
          songDataCopy[j].beginnerMisscount = allSongs[i][8];
          songDataCopy[j].beginnerClearType = allSongs[i][9];
          songDataCopy[j].beginnerDjlevel = allSongs[i][10];
          songDataCopy[j].normalScore = allSongs[i][13];
          songDataCopy[j].normalPgreat = allSongs[i][14];
          songDataCopy[j].normalGreat = allSongs[i][15];
          songDataCopy[j].normalMisscount = allSongs[i][16];
          songDataCopy[j].normalClearType = allSongs[i][17];
          songDataCopy[j].normalDjlevel = allSongs[i][18];
          songDataCopy[j].hyperScore = allSongs[i][20];
          songDataCopy[j].hyperPgreat = allSongs[i][21];
          songDataCopy[j].hyperGreat = allSongs[i][22];
          songDataCopy[j].hyperMisscount = allSongs[i][23];
          songDataCopy[j].hyperClearType = allSongs[i][24];
          songDataCopy[j].hyperDjlevel = allSongs[i][25];
          songDataCopy[j].anotherScore = allSongs[i][27];
          songDataCopy[j].anotherPgreat = allSongs[i][28];
          songDataCopy[j].anotherGreat = allSongs[i][29];
          songDataCopy[j].anotherMisscount = allSongs[i][30];
          songDataCopy[j].anotherClearType = allSongs[i][31];
          songDataCopy[j].anotherDjlevel = allSongs[i][32];
          songDataCopy[j].leggendariaScore = allSongs[i][34];
          songDataCopy[j].leggendariaPgreat = allSongs[i][35];
          songDataCopy[j].leggendariaGreat = allSongs[i][36];
          songDataCopy[j].leggendariaMisscount = allSongs[i][37];
          songDataCopy[j].leggendariaClearType = allSongs[i][38];
          songDataCopy[j].leggendariaDjlevel = allSongs[i][39];
          songDataCopy[j].beginnerScorePercent =
            Math.round(
              (songDataCopy[j].beginnerScore /
                (songDataCopy[j].beginnerNotecount * 2)) *
                100 *
                100
            ) / 100
              ? Math.round(
                  (songDataCopy[j].beginnerScore /
                    (songDataCopy[j].beginnerNotecount * 2)) *
                    100 *
                    100
                ) / 100
              : "NO SCORE";
          songDataCopy[j].normalScorePercent =
            Math.round(
              (songDataCopy[j].normalScore /
                (songDataCopy[j].normalNotecount * 2)) *
                100 *
                100
            ) / 100
              ? Math.round(
                  (songDataCopy[j].normalScore /
                    (songDataCopy[j].normalNotecount * 2)) *
                    100 *
                    100
                ) / 100
              : "NO SCORE";
          songDataCopy[j].hyperScorePercent =
            Math.round(
              (songDataCopy[j].hyperScore /
                (songDataCopy[j].hyperNotecount * 2)) *
                100 *
                100
            ) / 100
              ? Math.round(
                  (songDataCopy[j].hyperScore /
                    (songDataCopy[j].hyperNotecount * 2)) *
                    100 *
                    100
                ) / 100
              : "NO SCORE";
          songDataCopy[j].anotherScorePercent =
            Math.round(
              (songDataCopy[j].anotherScore /
                (songDataCopy[j].anotherNotecount * 2)) *
                100 *
                100
            ) / 100
              ? Math.round(
                  (songDataCopy[j].anotherScore /
                    (songDataCopy[j].anotherNotecount * 2)) *
                    100 *
                    100
                ) / 100
              : "NO SCORE";
          songDataCopy[j].leggendariaScorePercent =
            Math.round(
              (songDataCopy[j].leggendariaScore /
                (songDataCopy[j].leggendariaNotecount * 2)) *
                100 *
                100
            ) / 100
              ? Math.round(
                  (songDataCopy[j].leggendariaScore /
                    (songDataCopy[j].leggendariaNotecount * 2)) *
                    100 *
                    100
                ) / 100
              : "NO SCORE";
          songDataCopy[j].normalLamp = checkClearType(
            songDataCopy[j].normalClearType
          );
          songDataCopy[j].hyperLamp = checkClearType(
            songDataCopy[j].hyperClearType
          );
          songDataCopy[j].anotherLamp = checkClearType(
            songDataCopy[j].anotherClearType
          );
          songDataCopy[j].leggendariaLamp = checkClearType(
            songDataCopy[j].leggendariaClearType
          );
          matchFound = true;
          counter++;
          break;
        }
      }
      if (matchFound === false) console.log(allSongs[i]);
      setSongData(songDataCopy);
    }
    console.log(counter);
  }

  function checkClearType(clear) {
    if (clear == "NO PLAY") {
      return "noplay";
    }
    if (clear == "EASY CLEAR") {
      return "easy";
    }
    if (clear == "CLEAR") {
      return "clear";
    }
    if (clear == "HARD CLEAR") {
      return "hard";
    }
    if (clear == "EX HARD CLEAR") {
      return "exhard";
    }
    if (clear == "FULLCOMBO CLEAR") {
      return "fullcombo";
    }
  }
  function searchFunction(e) {
    setSearchText(e.target.value);
  }
  function displayedSongData(str, levelFilters, styleFilter) {
    const filteredSongData = songData.filter((song) => {
      if (str === "") return songData;
      else {
        return song.title.toLowerCase().includes(str);
      }
    });
    let levelFilteredData = filteredSongData.filter((song) => {
      if (levelFilters.length > 0) {
        for (let i = 0; i < levelFilters.length; i++) {
          if (song.normalDiff === levelFilters[i]) return song;
          if (song.hyperDiff === levelFilters[i]) return song;
          if (song.anotherDiff === levelFilters[i]) return song;
        }
      } else return filteredSongData;
    });
    if (styleFilter === "ALL VERSION") {
      return levelFilteredData.map((song) => <Song song={song} />);
    } else {
      return levelFilteredData
        .filter((song) => song.version === styleFilter)
        .map((song) => <Song song={song} />);
    }
  }

  function checkHandler(e) {
    if (e.target.checked) {
      setLevelFilters([...levelFilters, e.target.value]);
    } else {
      setLevelFilters(levelFilters.filter((tag) => tag !== e.target.value));
    }
    console.log(levelFilters);
  }

  function styleHandler(e) {
    setStyleFilter(e.target.value);
  }
  return (
    <div>
      <form>
        <h2>Another IIDX CSV Viewer</h2>
        <textarea
          className="csv-input"
          id="csv-input"
          type="textarea"
          placeholder="copy/paste your CSV here"
          onChange={(e) => setCsvValue(e.target.value)}
          value={csvValue}
        ></textarea>
        <hr></hr>
        <button onClick={parseCsv} className="submit-button" type="button">
          Parse
        </button>
        <button onClick={clearDb} className="submit-button" type="button">
          Clear DB
        </button>
        <button
          onClick={() => checkDifficulty(songData[1196].anotherDiff)}
          className="submit-button"
          type="button"
        >
          Check Difficulty
        </button>
        <button
          onClick={() => {
            console.log(songData, "songData");
          }}
          className="submit-button"
          type="button"
        >
          console.log songData
        </button>
        <button
          onClick={() => {
            console.clear();
          }}
          className="submit-button"
          type="button"
        >
          console.clear
        </button>
      </form>
      <div className="fix-search-area">
      <div className="search-area">
        <div className="title-search-title">Search By Title:</div>
        <input
          type="text"
          placeholder="検索"
          onChange={searchFunction}
          value={searchText}
          className="title-search"
        ></input>
        <fieldset className="level-filter">
          <div className="level-filter-title">Level</div>
          <div className="level-filter-sub">
            <input
              type="checkbox"
              onChange={checkHandler}
              id="1"
              name="1"
              value="1"
            ></input>
            <label for="12">1</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="2"
              name="2"
              value="2"
            ></input>
            <label for="12">2</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="3"
              name="3"
              value="3"
            ></input>
            <label for="12">3</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="4"
              name="4"
              value="4"
            ></input>
            <label for="12">4</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="5"
              name="5"
              value="5"
            ></input>
            <label for="12">5</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="6"
              name="6"
              value="6"
            ></input>
            <label for="12">6</label>
          </div>
          <div className="level-filter-sub">
            <input
              type="checkbox"
              onChange={checkHandler}
              id="7"
              name="7"
              value="7"
            ></input>
            <label for="12">7</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="8"
              name="8"
              value="8"
            ></input>
            <label for="12">8</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="9"
              name="9"
              value="9"
            ></input>
            <label for="12">9</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="10"
              name="10"
              value="10"
            ></input>
            <label for="12">10</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="11"
              name="11"
              value="11"
            ></input>
            <label for="12">11</label>
            <input
              type="checkbox"
              onChange={checkHandler}
              id="12"
              name="12"
              value="12"
            ></input>
            <label for="12">12</label>
          </div>
          <button type="button">Reset Labels</button>
        </fieldset>
        <label for="style" className="style-filter-title">Style:</label>
        <select name="style" value={styleFilter} onChange={styleHandler} className="style-filter">
          <option value="ALL VERSION">ALL VERSION</option>
          <option value="1st Style">1st&substream</option>
          <option value="2nd Style">2nd style</option>
          <option value="3rd Style">3rd style</option>
          <option value="4th Style">4th style</option>
          <option value="5th Style">5th style</option>
          <option value="6th Style">6th style</option>
          <option value="7th Style">7th style</option>
          <option value="8th Style">8th style</option>
          <option value="9th Style">9th style</option>
          <option value="10th Style">10th style</option>
          <option value="IIDX RED">IIDX RED</option>
          <option value="HAPPY SKY">HAPPY SKY</option>
          <option value="DistorteD">DistorteD</option>
          <option value="GOLD">GOLD</option>
          <option value="DJ TROOPERS">DJ TROOPERS</option>
          <option value="EMPRESS">EMPRESS</option>
          <option value="SIRIUS">SIRIUS</option>
          <option value="Resort Anthem">Resort Anthem</option>
          <option value="Lincle">Lincle</option>
          <option value="tricoro">tricoro</option>
          <option value="SPADA">SPADA</option>
          <option value="PENDUAL">PENDUAL</option>
          <option value="copula">copula</option>
          <option value="SINOBUZ">SINOBUZ</option>
          <option value="CANNON BALLERS">CANNON BALLERS</option>
          <option value="Rootage">Rootage</option>
          <option value="HEROIC VERSE">HEROIC VERSE</option>
          <option value="BISTROVER">BISTROVER</option>
          <option value="CastHour">CastHour</option>
          <option value="RESIDENT">RESIDENT</option>
        </select>
      </div>
      </div>
      <table className="score-table">
        <tr className="table-title">
          <th className="title">Song Name/Artist</th>
          <th>Normal</th>
          <th>Hyper</th>
          <th>Another</th>
          <th>Leggendaria</th>
        </tr>
        {displayedSongData(searchText, levelFilters, styleFilter)}
      </table>
    </div>
  );
}
