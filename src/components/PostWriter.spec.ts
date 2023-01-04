/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/4 19:49
 * @Email: fred.zhen@gmail.com
 */
import { createPinia, Pinia, setActivePinia } from "pinia";
import { createMemoryHistory, createRouter, Router} from "vue-router";
import {beforeEach, describe, it, expect } from "vitest";
import {routes} from "../routers";
import PostWriter from './PostWriter.vue';
import { mount } from "@vue/test-utils";
import {useUsers} from "../store/users";

describe("PostWriter", () => {
  let pinia: Pinia;
  let router: Router;

  beforeEach(() => {
    // added pinia and router plugins for the component
    pinia = createPinia();
    setActivePinia(pinia);
    const user = useUsers();
    user.currentUserId = "1";
    router = createRouter({
      history: createMemoryHistory(),
      routes: routes
    });
  });

  it("write a post using markdown", async () => {
    return new Promise<void>(async (resolve) => {
      const wrapper = mount(PostWriter, {
        global: {
          plugins: [pinia, router],
        },
        props: {
          post: {
            id: "1",
            title: "title",
            authorId: "1",
            created: "",
            markdown: "",
            html: "",
          }
        }
      });
      // console.log(wrapper.html());
      wrapper.find<HTMLDivElement>('[data-test-id="contenteditable"]').element.innerText = '# Test Title';
      await wrapper.find('[data-test-id="contenteditable"]').trigger('input');

      setTimeout(async () => {
        await wrapper.find('[data-test-id="save-post"]').trigger('click');
        // console.log(wrapper.html());
        console.log((wrapper.emitted().submit)[0]);
        expect((wrapper.emitted().submit)[0]).toMatchInlineSnapshot(`
          [
            {
              "authorId": "1",
              "created": "",
              "html": "<h1 id=\\"test-title\\">Test Title</h1>
          ",
              "id": "1",
              "markdown": "# Test Title",
              "title": "title",
            },
          ]
        `);
        resolve();
      }, 350);
    });
  });
})

