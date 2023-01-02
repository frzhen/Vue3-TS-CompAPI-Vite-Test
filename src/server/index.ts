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

app.put<{}, {}, Post>("/posts", (req, res) => {
  const index = allPosts.findIndex(x => x.id === req.body.id);
  if (index === -1) {
    throw Error(`Post with id ${req.body.id} was not found`);
  }
  const existingPost = allPosts[index];
  allPosts[index] = {...existingPost, ...req.body};
  res.json(allPosts[index]);
})

app.get("/users", (req, res) => {
  const resAllUsers = [];
  for (let user of allUsers) {
    const { password, ...rest } = user;
    resAllUsers.push(rest);
  }
  res.json(resAllUsers);
});

app.get("/current-user", (req, res) => {
  try {
    const token = req.cookies[COOKIE];
    const result = jsonwebtoken.verify(token, SECRET) as { id: string };
    res.json({ id: result.id });
  } catch (e) {
    res.status(404).end();
  }
})

app.post<{}, {}, NewUser>("/login", (req, res) => {
  const targetUser = allUsers.find(x => x.username === req.body.username);

  if (!targetUser || targetUser.password !== req.body.password) {
    res.status(401).end();
  } else {
    authenticate(targetUser.id, req, res);
    res.status(200).end();
  }
})

app.post("/logout", (req, res)=> {
  res.cookie(COOKIE, "", { httpOnly: true });
  res.status(200).end();
})
app.post<{}, {}, NewUser>("/register-user", (req, res) => {
  const user: User = { ...req.body, id: (Math.random() * 100000).toFixed()};
  allUsers.push(user);
  authenticate(user.id, req, res);
  const { password, ...rest} = user;
  res.json(rest);
})


app.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}`);
});

