// EXERCISE 3: TELL ME A JOKE

// elem.innerHTML is used to populate a div with HTML.
// Create a website with a div tag containing a random joke given an array of jokes.
// Use Math.random() and fetch jokes from internet (Use any website to create this array).
// Your website should show a random joke on every reload. Minimum length of your joke array should be 10.

let jokes = [`I told my wife she was drawing her eyebrows too high. She looked surprised.`,
    `Why don't scientists trust atoms? Because they make up everything.`,
    `I asked my dog what's two minus two. He said nothing.`,
    `I told my computer I needed a break, and now it won't stop sending me Kit-Kat ads.`,
    `Parallel lines have so much in common. It's a shame they'll never meet.`,
    `I used to play piano by ear, but now I use my hands.`,
    `I don't trust stairs because they're always up to something.`,
    `Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.`,
    `I have a photographic memory, but I always forget to remove the lens cap.`,
    `I got a job at a bakery because I kneaded dough.`
];

function tellJoke() {
    let randomizer = parseInt(Math.random()*10);
    let joke = jokes[randomizer];
    document.querySelector('.container').innerHTML = joke;
}

tellJoke();

document.querySelector("#btn").addEventListener("click", () => {
    tellJoke();
})
