/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/22 21:38
 * @Email: fred.zhen@gmail.com
 */
import {DateTime} from "luxon";


export interface Post {
  id: string;
  title: string;
  created: string;
  markdown: string;
  html: string;
}

export interface TimelinePost extends Omit<Post, 'created'> {
  created: DateTime
}
