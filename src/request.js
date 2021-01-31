// const key = "kYCElECIeiE8jXmR";
// const secret = "PdWXvtfXqPiwz17TZJxloa4CsILMG7Ev";

// const key = "YeAtF6uKgu0fAXg9";
// const secret = "S4cY9HAdMtZKw7CvmdZ2ktMBYMQzK6IC";

// const key = "	DYyBCw6aj1DhMp02";
// const secret = "h3OATEtrftc5X78B6GdJdkTwlxO7WOae";

const key = "G332VwrVCCvy4oE2";
const secret = "FRlBlWWnrHQHEGWlKZoFwPA9r5Hvumx9";

const requests = {
  livescore: {
    EPL: `/scores/live.json?competition_id=2&key=${key}&secret=${secret}`,
    UEFA: `/scores/live.json?key=${key}&secret=${secret}&competition_id=244`,
    LALIGA: `/scores/live.json?competition_id=3&key=${key}&secret=${secret}`,
    BUNDESLIGA: `/scores/live.json?competition_id=1&key=${key}&secret=${secret}`,
  },

  fixture: {
    EPL: `/fixtures/matches.json?competition_id=2&key=${key}&secret=${secret}`,
    UEFA: `/fixtures/matches.json?key=${key}&secret=${secret}&competition_id=244`,
    LALIGA: `/fixtures/matches.json?competition_id=3&key=${key}&secret=${secret}`,
    BUNDESLIGA: `/fixtures/matches.json?competition_id=1&key=${key}&secret=${secret}`,
  },

  history: {
    EPL: `/scores/history.json?competition_id=2&key=${key}&secret=${secret}`,
    UEFA: `/scores/history.json?key=${key}&secret=${secret}&competition_id=244`,
    LALIGA: `/scores/history.json?competition_id=3&key=${key}&secret=${secret}`,
    BUNDESLIGA: `/scores/history.json?competition_id=1&key=${key}&secret=${secret}`,
  },
  standing: {
    EPL: `/leagues/table.json?competition_id=2&key=${key}&secret=${secret}`,
    UEFA: `/leagues/table.json?competition_id=2&key=${key}&secret=${secret}`,
    LALIGA: `/leagues/table.json?competition_id=3&key=${key}&secret=${secret}`,
    BUNDESLIGA: `/leagues/table.json?competition_id=1&key=${key}&secret=${secret}`,
  },

  LIVES: `/scores/live.json?key=${key}&secret=${secret}`,
};

export default requests;
