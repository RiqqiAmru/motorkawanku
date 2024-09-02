/** @type {import('tailwindcss').Config} */
import { Flowbite } from "flowbite-react";
export default {
  content: ["./src/**/*.{html,js}", Flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [Flowbite.plugin()],
};
