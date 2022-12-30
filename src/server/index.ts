/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/17 19:20
 * @Email: fred.zhen@gmail.com
 */
import express, { Request, Response } from 'express';
import cors from 'cors';
import { today, thisWeek, thisMonth } from "../utils/1time_use";
import { serverPort } from "../utils/constants";
import bodyParser from "body-parser";
import { Post } from "../utils/interfaces";
import { NewUser, User} from "../utils/users";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

const allPosts = [today, thisWeek, thisMonth];
const allUsers: User[] = [];

const SECRET = 'my-secret';
const COOKIE = 'vuejs-jwt';

function authenticate (id: string, req: Request, res: Response) {
  // token (sign)
  const token = jsonwebtoken.sign({ id }, SECRET, {
    issuer: '1dataops',
    expiresIn: '30 days'
  });
  // set a cookie: httpOnly option disable JS access to the token
  res.cookie(COOKIE, token, { httpOnly: true });
}
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
  authenticate(user.id, req, res);
  const { password, ...rest} = user;
  res.json(rest);
})
app.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}`);
});

