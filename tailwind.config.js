module.exports = {
    purge: [
        "./pages/**/*.jsx", 
        "./components/**/*.jsx",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                '64': 'repeat(64, minmax(0, 1fr))',
            },
            height: {
                '192': '48rem',
                'hero': '936px',
            },
            fontFamily: {
                'bungee': ['"bungee"', 'Arial', 'sans-serif'],
                'exo': ['"exo"', 'Arial', 'sans-serif'],
            },
            borderWidth: {
                '16': '16px'
            },
            colors: {
                'charcoal': '#264653ff',
                'charcoal-light': '#286065',
                'charcoal-lighter': '#257575',
                'persian-green': '#2a9d8fff',
                'orange-yellow-crayola': '#e9c46aff',
                'sandy-brown': '#f4a261ff',
                'burnt-sienna': '#e76f51ff',
                'gray': '#f0f0f0ff',

                // pixel art only
                'dark-brown': '#553717',
                'brown': '#663f16',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}