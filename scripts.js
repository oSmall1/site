function showRandomQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Do what you can, with what you have, where you are.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The journey is the destination. Every pedal stroke brings you closer to yourself.",
        "Cycling long distances teaches you that limits are only boundaries set by the mind. Push past them.",
        "In the end, it’s not the bike or the distance that defines you—it’s the heart and perseverance you put into every ride.",
        "Sometimes, the best way to clear your mind is to put your feet on the pedals and let the road guide you.",
        "It’s not about how fast you ride, but how far you can go when the world around you feels endless."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}