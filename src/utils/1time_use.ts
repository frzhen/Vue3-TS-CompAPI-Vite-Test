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
  created: DateTime.now().toISO()
}

export const thisWeek: Post = {
  id: "2",
  title: "This Week",
  created: DateTime.now().minus({day: 5}).toISO()
}

export const thisMonth: Post = {
  id: "3",
  title: "This Month",
  created: DateTime.now().minus({ week: 3}).toISO()
}
