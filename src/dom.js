import { JSDOM } from "jsdom";

export default function dom(html) {
  const fragment = JSDOM.fragment(html.toString());
  return fragment;
}
