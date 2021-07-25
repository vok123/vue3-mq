<template>
  <CodeExample :code="code" alignment="left"></CodeExample>
</template>

<script setup>
import CodeExample from "../components/CodeExample.vue";
const code1 = `<mq-responsive target="xs-md" tag="span">
    This is for mobile users
</mq-responsive>`;
const code2 = `<mq-responsive tag="ul" list-tag="li" group>
    <template #sm>
      This is for small screens
    </template>
    <template #sm:2>
      This is another for small screens
    </template>
    <template #sm+>
      Will appear on small and above screens 
    </template>
    <template #xl>
      Will appear on extra large screens
    </template>
  </mq-responsive>`;

const code = [
  { lang: "html", output: code1, id: 0, button: "Target Property" },
  { lang: "html", output: code2, id: 1, button: "Breakpoint Slots" },
];
</script>
