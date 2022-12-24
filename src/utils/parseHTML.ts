/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/24 12:08
 * @Email: fred.zhen@gmail.com
 */
import {marked} from "marked";
import highlightjs from "highlight.js";
import { Ref } from 'vue';

export const parseHTML = ( markdown: string, html: Ref<any>): void => {
  marked.parse(markdown, {
    gfm: true,
    breaks: true,
    highlight: (code) => {
      return highlightjs.highlightAuto(code).value;
    }
  }, (err, parseResult) => {
    html.value = parseResult;
  });
}
