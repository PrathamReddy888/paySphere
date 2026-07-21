const express = require("express");
const { finalizePayroll, getPayrollSummary, exportPayrollCSV } = require("../controllers/payroll.controller");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/finalize", auth, finalizePayroll);
router.get("/summary", auth, getPayrollSummary);
router.get("/export-csv", auth, exportPayrollCSV);

module.exports = router;
