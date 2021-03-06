import test from "ava";
import { SAMPLE_ENV } from "babel-dotenv";
import { honesty } from "../src/index";

test("foo", t => {
  t.pass();
});

test("bar", async t => {
  const bar = Promise.resolve("bar");

  t.is(await bar, "bar");
});

test("SAMPLE_ENV loads", t => {
  t.is(SAMPLE_ENV, "foobar");
});

test("honesty returns true", t => {
  t.truthy(honesty());
});
