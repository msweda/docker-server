const express = require('express');
const { body, validationResult } = require('express-validator/check');
const repo = require('./repo');
const router = express.Router();

router.post('/', [
  body('shoeName').exists().isString().trim(),
  body('indicator').exists().isInt({ min: 1, max: 5 }).toInt(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { shoeName, indicator } = req.body;
    await repo.post(shoeName, indicator);
    return res.status(200).json({ shoeName, indicator });
  } catch(e) {
    return res.status(500).json({ errors: [e] });
  }
});

router.get('/', [
  body('shoeName').exists().isString().trim(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { shoeName } = req.body;
    const result = await repo.get(shoeName);
    const { rows } = result;
    const { avg } = rows[0];
    return res.status(200).json({ avg });
  } catch(e) {
    return res.status(500).json({ errors: [e] });
  }
});

function useTrueToSizeRouter(parentRouter) {
  parentRouter.use('/true-to-size', router);
}

module.exports = useTrueToSizeRouter;