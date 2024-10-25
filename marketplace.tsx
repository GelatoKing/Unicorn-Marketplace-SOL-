<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$UWU NFT Marketplace</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-purple-50 text-gray-900">
    <nav class="bg-white shadow-md">
        <!-- ... (navigation content) ... -->
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-4xl font-bold text-pink-500 mb-8">$UWU NFT Marketplace</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="collections-grid">
            <!-- Collection cards will be dynamically inserted here -->
        </div>
    </main>

    <script>
        const collections = [
            { name: "UwU Punks", address: "PGz9jZXTVTySQBLXPabZoKMUZxHdTbztDgK1MmcwxHo" },
            { name: "Magical Cats", address: "C7aCofh2ZPEnEqDJSy7DmNJPP3Wy2R9praNc4dsUUZxm" },
            { name: "UniPuppets", address: "GftBkzB5fU88LY1WkYX1jTnasuGFCTxUohvGB7VEGMzc" },
            // Add other collections here
        ];

        function createCollectionCard(collection) {
            return `
                <a href="/${collection.name.toLowerCase().replace(/\s+/g, '-')}.html" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div class="p-6">
                        <h2 class="text-2xl font-bold mb-2">${collection.name}</h2>
                        <p class="text-gray-600">Explore the collection</p>
                    </div>
                </a>
            `;
        }

        function loadCollections() {
            const collectionsGrid = document.getElementById('collections-grid');
            collectionsGrid.innerHTML = collections.map(createCollectionCard).join('');
        }

        window.addEventListener('load', loadCollections);
    </script>
</body>
</html>