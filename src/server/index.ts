/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/17 19:20
 * @Email: fred.zhen@gmail.com
 */
import express from 'express';
import cors from 'cors';
import { today, thisWeek, thisMonth } from "../utils/1time_use";
import { serverPort } from "../utils/constants";

const app = express();
app.use(cors())

app.get("/posts", (req, res) => {
  res.json([today, thisWeek, thisMonth])
});

app.listen(serverPort, () => {
  console.log('Listening on port 5001');
});

