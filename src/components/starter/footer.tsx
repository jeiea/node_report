import { component$ } from "@builder.io/qwik";
import { GoMarkGithub16 } from "@qwikest/icons/octicons";
import { css } from "~/styled-system/css";
import { container } from "~/styled-system/patterns";

export default component$(() => {
  return (
    <footer class={container()}>
      <GoMarkGithub16
        class={css({ width: "8", height: "8", marginBottom: "4" })}
      />
    </footer>
  );
});
