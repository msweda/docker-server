const pool = require('@common/postgres');

const trueToSizeRepo = {
  post: (shoeName, indicator) => {
    const query = {
      text: "INSERT INTO true_to_size(shoe_name, indicator) VALUES($1, $2)",
      values: [shoeName, indicator],
    };
    return pool.query(query);
  },

  get: (shoeName) => {
    const query = {
      text: "SELECT AVG(indicator) FROM true_to_size WHERE shoe_name = $1",
      values: [shoeName],
    };
    return pool.query(query);
  },
};

module.exports = trueToSizeRepo;