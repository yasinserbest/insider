const play1weekbtn = document.querySelector(".play1Week__btn");
const playAllSeasonbtn = document.querySelector(".playAllSeanson__btn");

const leagueTable = document.querySelector(".weekly__leagueTable");
const resultsTable = document.querySelector(".weekly__matchResults");

class Team {
  constructor(name, pts = 0, p = 0, w = 0, d = 0, l = 0, gd = 0, id) {
    this.name = name;
    this.pts = pts;
    this.p = p;
    this.w = w;
    this.d = d;
    this.l = l;
    this.gd = gd;
    this.id = name.toLowerCase();
  }
}
const chealsea = new Team("CHEALSEA");
const arsenal = new Team("ARSENAL");
const mancity = new Team("MANCITY");
const liverpool = new Team("LIVERPOOL");

const teams = [arsenal, chealsea, mancity, liverpool];

let week = 1;
let match1 = "";
let match2 = "";

const play1Week = function () {
  switch (week) {
    case 1:
      match1 = playMatch(chealsea, arsenal);
      match2 = playMatch(mancity, liverpool);
      sortByPoints();
      renderMatchResults(match1, match2);
      week++;
      break;
    case 2:
      match1 = playMatch(chealsea, mancity);
      match2 = playMatch(arsenal, liverpool);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
      break;
    case 3:
      match1 = playMatch(chealsea, liverpool);
      match2 = playMatch(mancity, arsenal);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
      break;
    case 4:
      match1 = playMatch(arsenal, chealsea);
      match2 = playMatch(liverpool, mancity);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
      break;
    case 5:
      match1 = playMatch(mancity, chealsea);
      match2 = playMatch(liverpool, arsenal);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
      break;
    case 6:
      match1 = playMatch(liverpool, chealsea);
      match2 = playMatch(arsenal, mancity);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
      break;
  }
};
const playAllSeason = function () {
  switch (week) {
    case 1:
      match1 = playMatch(chealsea, arsenal);
      match2 = playMatch(mancity, liverpool);
      sortByPoints();
      renderMatchResults(match1, match2);
      week++;

    case 2:
      match1 = playMatch(chealsea, mancity);
      match2 = playMatch(arsenal, liverpool);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();

    case 3:
      match1 = playMatch(chealsea, liverpool);
      match2 = playMatch(mancity, arsenal);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();

    case 4:
      match1 = playMatch(arsenal, chealsea);
      match2 = playMatch(liverpool, mancity);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();

    case 5:
      match1 = playMatch(mancity, chealsea);
      match2 = playMatch(liverpool, arsenal);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();

    case 6:
      match1 = playMatch(liverpool, chealsea);
      match2 = playMatch(arsenal, mancity);
      renderMatchResults(match1, match2);
      week++;
      sortByPoints();
  }
};
const playMatch = function (team1, team2) {
  const team1Score = Math.trunc(Math.random() * 5) + 1; //I thought 1 team could score at most 5 goals, because here is premier league, not eredivisie
  const team2Score = Math.trunc(Math.random() * 5) + 1;

  if (team1Score > team2Score) {
    // After we get the goal numbers, we add them to the object
    team1.p += 1;
    team1.pts += 3;
    team1.w += 1;
    team1.gd += team1Score - team2Score;

    team2.p += 1;
    team2.l += 1;
    team2.gd += team2Score - team1Score;
  } else if (team2Score > team1Score) {
    team2.p += 1;
    team2.pts += 3;
    team2.w += 1;
    team2.gd += team2Score - team1Score;

    team1.p += 1;
    team1.l += 1;
    team1.gd += team1Score - team2Score;
  } else {
    team2.p += 1;
    team2.pts += 1;
    team2.d += 1;

    team1.p += 1;
    team1.pts += 1;
    team1.d += 1;
  }

  const matchHtml = ` 

    <div class="match__results--row">
    <div class="match__results--row-team1">${team1.name}</div>
    <div class="match__results--row-score">
      <input class="match__results--row-score-1"  value=${team1Score} />
      <input class="match__results--row-score-2"  value=${team2Score}  />
    </div>
    <div class="match__results--row-team2">${team2.name}</div>
  </div>
    `;

  return matchHtml;
};

const renderMatchResults = function (match1, match2) {
  const cominedHtml = `
  <div class="mt-20px">
    <div class="match__results--title ">Match Results</div>
    <div class="match__results--desc">${week}th Week Match Results</div>
      ${match1}
      ${match2}
      </div>
      `;

  resultsTable.insertAdjacentHTML("beforeend", cominedHtml);
};

const sortByPoints = function () {
  //this function sorts teams according to their points
  teams.sort((team1, team2) => {
    if (team1.pts > team2.pts) return -1;
    if (team1.pts < team2.pts) return 1;
  });

  const leagueTableTopRow = `
    <div class="leagueTable__row mt-27px">
    <div class="leagueTable__row--team">TEAMS</div>
    <div class="leagueTable__row--status">PTS</div>
    <div class="leagueTable__row--status">P</div>
    <div class="leagueTable__row--status">W</div>
    <div class="leagueTable__row--status">D</div>
    <div class="leagueTable__row--status">L</div>
    <div class="leagueTable__row--status">GD</div>
  </div>
    `;
  leagueTable.insertAdjacentHTML("beforeend", leagueTableTopRow);

  for (const team of teams) {
    let html = "";
    html = `
    <div class="leagueTable__row" id=${team.id}>
    <div class="leagueTable__row--team">${team.name}</div>
    <div class="leagueTable__row--status">${team.pts}</div>
    <div class="leagueTable__row--status p">${team.p}</div>
    <div class="leagueTable__row--status">${team.w}</div>
    <div class="leagueTable__row--status">${team.d}</div>
    <div class="leagueTable__row--status">${team.l}</div>
    <div class="leagueTable__row--status">${team.gd}</div>
  </div>
        `;
    leagueTable.insertAdjacentHTML("beforeend", html);
  }
};

play1weekbtn.addEventListener("click", function () {
  play1Week();
});
playAllSeasonbtn.addEventListener("click", function () {
  playAllSeason();
});
