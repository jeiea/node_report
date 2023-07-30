import type { ClassList, QwikIntrinsicElements } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import { cx } from "~/styled-system/css";
import { container } from "~/styled-system/patterns";

export const Container = component$(
  ({
    attributes,
    class: classList,
  }: {
    attributes?: QwikIntrinsicElements["div"];
    class?: ClassList;
  }) => {
    return (
      <div {...attributes} class={cx(container(), classList?.toString())}>
        <Slot />
      </div>
    );
  }
);
