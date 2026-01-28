import tailwindPostcss from "@tailwindcss/postcss";

export default {
  plugins: {
    tailwindcss: tailwindPostcss(),
    autoprefixer: {},
  },
};
