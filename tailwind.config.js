/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['inter', "sans-serif"],
            },
            backdropBlur: {
                custom: "397.3px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#00DC82",
                secondary: "#003C3C",
                "primary-text": "#000000",
                "secondary-text": "#838383",
                "gradient-1": "#FF5D5D",
                "gradient-2": "#4794FF",
                "cta-text": "#FFFFFF", // Other Text & CTA
            },
            fontSize: {
                // Web Sizes
                "web-h1": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
                "web-h2": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
                "web-h3": ["27px", { lineHeight: "1.4", fontWeight: "700" }],
                "web-h4": ["22px", { lineHeight: "1.5", fontWeight: "600" }],
                "web-body1": ["18px", { lineHeight: "1.6", fontWeight: "500" }],
                "web-body2": ["16px", { lineHeight: "1.6", fontWeight: "500" }],
                "web-cta": ["18px", { lineHeight: "1.6", fontWeight: "600" }],
                // Mobile Sizes
                "mobile-h1": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
                "mobile-h2": ["20px", { lineHeight: "1.3", fontWeight: "700" }],
                "mobile-h3": ["18px", { lineHeight: "1.4", fontWeight: "700" }],
                "mobile-h4": ["16px", { lineHeight: "1.5", fontWeight: "600" }],
                "mobile-body1": [
                    "16px",
                    { lineHeight: "1.6", fontWeight: "500" },
                ],
                "mobile-body2": [
                    "14px",
                    { lineHeight: "1.6", fontWeight: "500" },
                ],
                "mobile-cta": [
                    "16px",
                    { lineHeight: "1.6", fontWeight: "600" },
                ],
            },
            padding: {
                "screen-1440": "150px",
                "screen-1200": "120px",
                "screen-992": "70px",
                "screen-768": "40px",
                "screen-320": "16px",
            },
        },
    },
    plugins: [],
};
