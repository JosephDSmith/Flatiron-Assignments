function gameObject() {
  const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turqoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 2,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return game;
}

function numPointsScored(playersName) {
  if (gameObject().home.players.hasOwnProperty(playersName)) {
    return gameObject().home.players[playersName].points;
  } else {
    return gameObject().away.players[playersName].points;
  }
}

function shoeSize(playersName) {
  if (gameObject().home.players.hasOwnProperty(playersName)) {
    return gameObject().home.players[playersName].shoe;
  } else {
    return gameObject().away.players[playersName].shoe;
  }
}
function teamColors(teamName) {
  if (teamName === "Brooklyn Nets") {
    return gameObject().home.colors;
  } else {
    return gameObject().away.colors;
  }
}
function teamNames() {
  let n = [x, y];
  let x = gameObject().home.teamName;
  let y = gameObject().away.teamName;

  return n;
}

function playerNumbers(teamName) {
  let game = gameObject();
  let playerNumbers = [];
  let team;

  if (teamName === game.home.teamName) {
    team = game.home;
  } else {
    team = game.away;
  }
  for (const playerName in team.players) {
    const player = team.players[playerName];
    playerNumbers.push(player.number);
  }
  return playerNumbers;
}

// object.foo[88.t5]

function playerStats(playerName) {
  let game = gameObject();
  let player;
  if (playerName === game.home.players) {
    player = game.home.players[playerName];
  } else {
    player = game.away.players[playerName];
  }
  return player;
}
function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoeSize;

  for (const team in game) {
    for (const player in game[team].players) {
      if (game[team].players[player].shoe > largestShoeSize) {
        largestShoeSize = game[team].players[player].shoe;
        playerWithLargestShoeSize = game[team].players[player];
      }
    }
  }
  return playerWithLargestShoeSize.rebounds;
}
function mostPointsScored() {
  let game = gameObject();
  let mostPointsScored = 0;
  let playerWithMostPointsScored;

  for (const team in game) {
    for (const player in game[team].players) {
      if (game[team].players[player].points > mostPointsScored) {
        mostPointsScored = game[team].players[player].points;
        playerWithMostPointsScored = game[team].players[player];
      }
    }
  }
  return playerWithMostPointsScored.points;
}
function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (const player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  for (const player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else {
    return game.away.teanName;
  }
}
function playerWithLongestName() {
  const game = gameObject();
  longestName = 0;
  let longNamePlayer;

  for (const team in game) {
    for (const player in game[team].players)
      if (player.length > longestName) {
        longestName = player.length;
        longNamePlayer = player;
      }
  }
  return longNamePlayer;
}

function doesLongNameStealALot() {
  const game = gameObject();
  longestName = 0;
  let longNamePlayer;
  let mostStealsPlayer;
  let stealsCount = 0;

  for (const team in game) {
    for (const player in game[team].players)
      if (player.length > longestName) {
        longestName = player.length;
        longNamePlayer = player;
      }
  }
  for (const team in game) {
    for (const player in game[team].players) {
      if (player.steals > stealsCount) {
        mostSteals = player.steals;
        mostStealsPlayer = player;
      }
    }
  }
  if (longNamePlayer === mostStealsPlayer) {
    return "true";
  } else {
    return "false";
  }
}

 