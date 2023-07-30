import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Container } from "~/components/starter/container";
import { css } from "~/styled-system/css";

export default component$(() => {
  return (
    <Container>
      <button
        class={css({
          rounded: "lg",
          backgroundColor: "sky.600",
          cursor: "pointer",
          color: "white",
          padding: "1",
          _hover: { backgroundColor: "sky.500" },
          _active: { backgroundColor: "sky.400" },
        })}
      >
        asdf
      </button>
    </Container>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
