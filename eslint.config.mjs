import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

<<<<<<< HEAD
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
=======
const eslintConfig = [...compat.extends("next/core-web-vitals")];
>>>>>>> aee7aec24573d7a1c4d6ff8b2349b305a23ab04b

export default eslintConfig;
