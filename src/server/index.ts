/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/17 19:20
 * @Email: fred.zhen@gmail.com
 */
import express from 'express';
import cors from 'cors';
import { today, thisWeek, thisMonth } from "../utils/1time_use";
import { serverPort } from "../utils/constants";
import bodyParser from "body-parser";
import { Post } from "../utils/interfaces";
import { NewUser, User} from "../utils/users";

const app = express();
app.use(cors())
app.use(bodyParser.json());

const allPosts = [today, thisWeek, thisMonth];
const allUsers: User[] = [];

app.get("/posts", (req, res) => {
  res.json(allPosts);
});

app.post<{}, {}, Post>("/posts", (req, res) => {
  const post = { ...req.body, id: (Math.random() * 100000).toFixed()};
  allPosts.push(post);
  res.json(post);
})

app.get("/users", (req, res) => {
  const resAllUsers = [];
  for (let user of allUsers) {
    const { password, ...rest } = user;
    resAllUsers.push(rest);
  }
  res.json(resAllUsers);
});
app.post<{}, {}, NewUser>("/users", (req, res) => {
  const user: User = { ...req.body, id: (Math.random() * 100000).toFixed()};
  allUsers.push(user);
  const { password, ...rest} = user;
  res.json(rest);
})
app.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}`);
});

