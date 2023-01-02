/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/22 21:39
 * @Email: fred.zhen@gmail.com
 */
import {DateTime} from "luxon";
import {Post} from "./interfaces";


export const today: Post = {
  id: "1",
  title: "Today",
  authorId: "-1",
  created: DateTime.now().toISO(),
  markdown: '',
  html: ''
}

export const thisWeek: Post = {
  id: "2",
  title: "This Week",
  authorId: "-1",
  created: DateTime.now().minus({day: 5}).toISO(),
  markdown: '',
  html: ''
}

export const thisMonth: Post = {
  id: "3",
  title: "This Month",
  authorId: "-1",
  created: DateTime.now().minus({ week: 3}).toISO(),
  markdown: '',
  html: ''
}
