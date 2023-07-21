import React from "react";
import Bar from "./Bar.jsx";

export default function Song(props) {
  function checkGradeDetails(song, difficulty) {
    if (difficulty == "normal") {
      if (song.normalDjlevel == "F") {
        if (song.normalScorePercent >= 27.78) {
          return `D-${
            Math.round(song.normalNotecount * 2 * (3 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent >= 0) {
          return `F+${song.normalScore}`;
        }
      }
      if (song.normalDjlevel == "D") {
        if (song.normalScorePercent >= 38.88) {
          return `C-${
            Math.round(song.normalNotecount * 2 * (4 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent > 33.33) {
          return `D+${
            song.normalScore - Math.round(song.normalNotecount * 2 * (3 / 9))
          }`;
        }
      }
      if (song.normalDjlevel == "C") {
        if (song.normalScorePercent >= 50) {
          return `B-${
            Math.round(song.normalNotecount * 2 * (5 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent > 44.44) {
          return `C+${
            song.normalScore - Math.round(song.normalNotecount * 2) * (4 / 9)
          }`;
        }
      }
      if (song.normalDjlevel == "B") {
        if (song.normalScorePercent >= 61.11) {
          return `A-${
            Math.round(song.normalNotecount * 2 * (6 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent > 55.56) {
          return `B+${
            song.normalScore - Math.round(song.normalNotecount * 2 * (5 / 9))
          }`;
        }
      }
      if (song.normalDjlevel == "A") {
        if (song.normalScorePercent >= 72.22) {
          return `AA-${
            Math.round(song.normalNotecount * 2 * (7 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent > 66.67) {
          return `A+${
            song.normalScore - Math.round(song.normalNotecount * 2 * (6 / 9))
          }`;
        }
      }
      if (song.normalDjlevel == "AA") {
        if (song.normalScorePercent >= 83.33) {
          return `AAA-${
            Math.round(song.normalNotecount * 2 * (8 / 9)) - song.normalScore
          }`;
        }
        if (song.normalScorePercent > 77.78) {
          return `AA+${
            song.normalScore - Math.round(song.normalNotecount * 2 * (7 / 9))
          }`;
        }
      }
      if (song.normalDjlevel == "AAA") {
        if (song.normalScorePercent > 94.44)
          return `MAX - ${
            Math.round(song.normalNotecount * 2) - song.normalScore
          }`;
      }
      if (song.normalScorePercent > 88.89) {
        return `AAA+${
          song.normalScore - Math.round(song.normalNotecount * 2 * (8 / 9))
        }`;
      }
    }
    if (difficulty == "hyper") {
      if (song.hyperDjlevel == "F") {
        if (song.hyperScorePercent >= 27.78) {
          return `D-${
            Math.round(song.hyperNotecount * 2 * (3 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent >= 0) {
          return `F+${song.hyperScore}`;
        }
      }
      if (song.hyperDjlevel == "D") {
        if (song.hyperScorePercent >= 38.88) {
          return `C-${
            Math.round(song.hyperNotecount * 2 * (4 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent > 33.33) {
          return `D+${
            song.hyperScore - Math.round(song.hyperNotecount * 2 * (3 / 9))
          }`;
        }
      }
      if (song.hyperDjlevel == "C") {
        if (song.hyperScorePercent >= 50) {
          return `B-${
            Math.round(song.hyperNotecount * 2 * (5 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent > 44.44) {
          return `C+${
            song.hyperScore - Math.round(song.hyperNotecount * 2) * (4 / 9)
          }`;
        }
      }
      if (song.hyperDjlevel == "B") {
        if (song.hyperScorePercent >= 61.11) {
          return `A-${
            Math.round(song.hyperNotecount * 2 * (6 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent > 55.56) {
          return `B+${
            song.hyperScore - Math.round(song.hyperNotecount * 2 * (5 / 9))
          }`;
        }
      }
      if (song.hyperDjlevel == "A") {
        if (song.hyperScorePercent >= 72.22) {
          return `AA-${
            Math.round(song.hyperNotecount * 2 * (7 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent > 66.67) {
          return `A+${
            song.hyperScore - Math.round(song.hyperNotecount * 2 * (6 / 9))
          }`;
        }
      }
      if (song.hyperDjlevel == "AA") {
        if (song.hyperScorePercent >= 83.33) {
          return `AAA-${
            Math.round(song.hyperNotecount * 2 * (8 / 9)) - song.hyperScore
          }`;
        }
        if (song.hyperScorePercent > 77.78) {
          return `AA+${
            song.hyperScore - Math.round(song.hyperNotecount * 2 * (7 / 9))
          }`;
        }
      }
      if (song.hyperDjlevel == "AAA") {
        if (song.hyperScorePercent > 94.44)
          return `MAX - ${
            Math.round(song.hyperNotecount * 2) - song.hyperScore
          }`;
      }
      if (song.hyperScorePercent > 88.89) {
        return `AAA+${
          song.hyperScore - Math.round(song.hyperNotecount * 2 * (8 / 9))
        }`;
      }
    }
    if (difficulty == "another") {
      if (song.anotherDjlevel == "F") {
        if (song.anotherScorePercent >= 27.78) {
          return `D-${
            Math.round(song.anotherNotecount * 2 * (3 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent >= 0) {
          return `F+${song.anotherScore}`;
        }
      }
      if (song.anotherDjlevel == "D") {
        if (song.anotherScorePercent >= 38.88) {
          return `C-${
            Math.round(song.anotherNotecount * 2 * (4 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent > 33.33) {
          return `D+${
            song.anotherScore - Math.round(song.anotherNotecount * 2 * (3 / 9))
          }`;
        }
      }
      if (song.anotherDjlevel == "C") {
        if (song.anotherScorePercent >= 50) {
          return `B-${
            Math.round(song.anotherNotecount * 2 * (5 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent > 44.44) {
          return `C+${
            song.anotherScore - Math.round(song.anotherNotecount * 2) * (4 / 9)
          }`;
        }
      }
      if (song.anotherDjlevel == "B") {
        if (song.anotherScorePercent >= 61.11) {
          return `A-${
            Math.round(song.anotherNotecount * 2 * (6 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent > 55.56) {
          return `B+${
            song.anotherScore - Math.round(song.anotherNotecount * 2 * (5 / 9))
          }`;
        }
      }
      if (song.anotherDjlevel == "A") {
        if (song.anotherScorePercent >= 72.22) {
          return `AA-${
            Math.round(song.anotherNotecount * 2 * (7 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent > 66.67) {
          return `A+${
            song.anotherScore - Math.round(song.anotherNotecount * 2 * (6 / 9))
          }`;
        }
      }
      if (song.anotherDjlevel == "AA") {
        if (song.anotherScorePercent >= 83.33) {
          return `AAA-${
            Math.round(song.anotherNotecount * 2 * (8 / 9)) - song.anotherScore
          }`;
        }
        if (song.anotherScorePercent > 77.78) {
          return `AA+${
            song.anotherScore - Math.round(song.anotherNotecount * 2 * (7 / 9))
          }`;
        }
      }
      if (song.anotherDjlevel == "AAA") {
        if (song.anotherScorePercent > 94.44)
          return `MAX - ${
            Math.round(song.anotherNotecount * 2) - song.anotherScore
          }`;
      }
      if (song.anotherScorePercent > 88.89) {
        return `AAA+${
          song.anotherScore - Math.round(song.anotherNotecount * 2 * (8 / 9))
        }`;
      }
    }
    if (difficulty == "leggendaria") {
      if (song.leggendariaDjlevel == "F") {
        if (song.leggendariaScorePercent >= 27.78) {
          return `D-${
            Math.round(song.leggendariaNotecount * 2 * (3 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent >= 0) {
          return `F+${song.leggendariaScore}`;
        }
      }
      if (song.leggendariaDjlevel == "D") {
        if (song.leggendariaScorePercent >= 38.88) {
          return `C-${
            Math.round(song.leggendariaNotecount * 2 * (4 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent > 33.33) {
          return `D+${
            song.leggendariaScore -
            Math.round(song.leggendariaNotecount * 2 * (3 / 9))
          }`;
        }
      }
      if (song.leggendariaDjlevel == "C") {
        if (song.leggendariaScorePercent >= 50) {
          return `B-${
            Math.round(song.leggendariaNotecount * 2 * (5 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent > 44.44) {
          return `C+${
            song.leggendariaScore -
            Math.round(song.leggendariaNotecount * 2) * (4 / 9)
          }`;
        }
      }
      if (song.leggendariaDjlevel == "B") {
        if (song.leggendariaScorePercent >= 61.11) {
          return `A-${
            Math.round(song.leggendariaNotecount * 2 * (6 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent > 55.56) {
          return `B+${
            song.leggendariaScore -
            Math.round(song.leggendariaNotecount * 2 * (5 / 9))
          }`;
        }
      }
      if (song.leggendariaDjlevel == "A") {
        if (song.leggendariaScorePercent >= 72.22) {
          return `AA-${
            Math.round(song.leggendariaNotecount * 2 * (7 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent > 66.67) {
          return `A+${
            song.leggendariaScore -
            Math.round(song.leggendariaNotecount * 2 * (6 / 9))
          }`;
        }
      }
      if (song.leggendariaDjlevel == "AA") {
        if (song.leggendariaScorePercent >= 83.33) {
          return `AAA-${
            Math.round(song.leggendariaNotecount * 2 * (8 / 9)) -
            song.leggendariaScore
          }`;
        }
        if (song.leggendariaScorePercent > 77.78) {
          return `AA+${
            song.leggendariaScore -
            Math.round(song.leggendariaNotecount * 2 * (7 / 9))
          }`;
        }
      }
      if (song.leggendariaDjlevel == "AAA") {
        if (song.leggendariaScorePercent > 94.44)
          return `MAX - ${
            Math.round(song.leggendariaNotecount * 2) - song.leggendariaScore
          }`;
      }
      if (song.leggendariaScorePercent > 88.89) {
        return `AAA+${
          song.leggendariaScore -
          Math.round(song.leggendariaNotecount * 2 * (8 / 9))
        }`;
      }
    }
  }
  function handleClickEvent(e) {
    e.stopPropagation();
  }
  return (
    <tr className="song-info">
      <td className="song-details">
        <div className="song-genre">{props.song.genre}</div>
        <div className="song-title">{props.song.title}</div>
        <div className="song-artist">{props.song.artist}</div>
      </td>
      <td
        className={"song-normal " + props.song.normalLamp}
        onClick={(e) => handleClickEvent(e)}
      >
        <div className="chart-details">
          <div className="difficulty">Level: {props.song.normalDiff}</div>
          <div className="notes-info">Notes: {props.song.normalNotecount}</div>
        </div>
        {props.song.normalScore !== "0" ? (
          <div className="djlevel">{props.song.normalDjlevel}</div>
        ) : (
          <div className="no-score">NO SCORE</div>
        )}
        <div className="score-details">
          {checkGradeDetails(props.song, "normal")}
        </div>
        {props.song.normalScore !== "0" && (
          <Bar percent={props.song.normalScorePercent} difficulty="normal" />
        )}
      </td>
      <td
        className={"song-hyper " + props.song.hyperLamp}
        onClick={(e) => handleClickEvent(e)}
      >
        <div className="chart-details">
          <div className="notes-info">Notes: {props.song.hyperNotecount}</div>
          <div className="difficulty">Level: {props.song.hyperDiff}</div>
        </div>
        {props.song.hyperScore !== "0" ? (
          <div className="djlevel">{props.song.hyperDjlevel}</div>
        ) : (
          <div className="no-score">NO SCORE</div>
        )}
        <div className="score-details">
          {checkGradeDetails(props.song, "hyper")}
        </div>
        {props.song.hyperScore !== "0" && (
          <Bar percent={props.song.hyperScorePercent} difficulty="hyper" />
        )}
      </td>
      <td
        className={
          props.song.anotherDiff
            ? "song-another " + props.song.anotherLamp
            : "no-chart"
        }
        onClick={(e) => handleClickEvent(e)}
      >
        {props.song.anotherDiff ? (
          <div className="chart-details">
            <div className="notes-info">
              Notes: {props.song.anotherNotecount}
            </div>
            <div className="difficulty">Level: {props.song.anotherDiff}</div>
          </div>
        ) : (
          <div className="no-chart-sub">-</div>
        )}
        {props.song.anotherDiff ? (
          props.song.anotherScore !== "0" ? (
            <div className="djlevel">{props.song.anotherDjlevel}</div>
          ) : (
            <div className="no-score">NO SCORE</div>
          )
        ) : (
          <div></div>
        )}
        <div className="score-details">
          {checkGradeDetails(props.song, "another")}
        </div>
        {props.song.anotherScore !== "0" && (
          <Bar percent={props.song.anotherScorePercent} difficulty="another" />
        )}
      </td>
      <td
        className={
          props.song.leggendariaDiff
            ? "song-leggendaria " + props.song.leggendariaLamp
            : "no-chart"
        }
        onClick={(e) => handleClickEvent(e)}
      >
        {props.song.leggendariaDiff ? (
          <div className="chart-details">
            <div className="notes-info">
              Notes: {props.song.leggendariaNotecount}
            </div>
            <div className="difficulty">
              Level: {props.song.leggendariaDiff}
            </div>
          </div>
        ) : (
          <div className="no-chart-sub">-</div>
        )}
        {props.song.leggendariaDiff ? (
          props.song.leggendariaScore !== "0" ? (
            <div className="djlevel">{props.song.leggendariaDjlevel}</div>
          ) : (
            <div className="no-score">NO SCORE</div>
          )
        ) : (
          <div></div>
        )}
        <div className="score-details">
          {checkGradeDetails(props.song, "leggendaria")}
        </div>
        {props.song.leggendariaScore !== "0" && (
          <Bar
            percent={props.song.leggendariaScorePercent}
            difficulty="leggendaria"
          />
        )}
      </td>
    </tr>
  );
}
