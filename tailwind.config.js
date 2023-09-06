/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
                background: "var(--background-color)",
                header_bg_color: "var(--header-bg-color)",
                font_primary_color: "var(--font-primary-color)",
                font_secondary_color: "var(--font-secondary-color)",
                font_header_color: "var(--font-header-color)",
            },
        },
    },
    plugins: [],
};
