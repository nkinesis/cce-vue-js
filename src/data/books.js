// Source: https://www.kaggle.com/datasets/sootersaalu/amazon-top-50-bestselling-books-2009-2019

const bookList = [
    {
        name: "10-Day Green Smoothie Cleanse",
        author: "JJ Smith",
        rating: 4.7,
        reviews: 17350,
        price: 8,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "11/22/63: A Novel",
        author: "Stephen King",
        rating: 4.6,
        reviews: 2052,
        price: 22,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "12 Rules for Life: An Antidote to Chaos",
        author: "Jordan B. Peterson",
        rating: 4.7,
        reviews: 18979,
        price: 15,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "1984 (Signet Classics)",
        author: "George Orwell",
        rating: 4.7,
        reviews: 21424,
        price: 6,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "5,000 Awesome Facts (About Everything!) (National Geographic Kids)",
        author: "National Geographic Kids",
        rating: 4.8,
        reviews: 7665,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "A Dance with Dragons (A Song of Ice and Fire)",
        author: "George R. R. Martin",
        rating: 4.4,
        reviews: 12643,
        price: 11,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons",
        author: "George R. R. Martin",
        rating: 4.7,
        reviews: 19735,
        price: 30,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "A Gentleman in Moscow: A Novel",
        author: "Amor Towles",
        rating: 4.7,
        reviews: 19699,
        price: 15,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "A Higher Loyalty: Truth, Lies, and Leadership",
        author: "James Comey",
        rating: 4.7,
        reviews: 5983,
        price: 3,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "A Man Called Ove: A Novel",
        author: "Fredrik Backman",
        rating: 4.6,
        reviews: 23848,
        price: 8,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "A Man Called Ove: A Novel",
        author: "Fredrik Backman",
        rating: 4.6,
        reviews: 23848,
        price: 8,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "A Patriot's History of the United States: From Columbus's Great Discovery to the War on Terror",
        author: "Larry Schweikart",
        rating: 4.6,
        reviews: 460,
        price: 2,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "A Stolen Life: A Memoir",
        author: "Jaycee Dugard",
        rating: 4.6,
        reviews: 4149,
        price: 32,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "A Wrinkle in Time (Time Quintet)",
        author: "Madeleine L'Engle",
        rating: 4.5,
        reviews: 5153,
        price: 5,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Act Like a Lady, Think Like a Man: What Men Really Think About Love, Relationships, Intimacy, and Commitment",
        author: "Steve Harvey",
        rating: 4.6,
        reviews: 5013,
        price: 17,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Adult Coloring Book Designs: Stress Relief Coloring Book: Garden Designs, Mandalas, Animals, and Paisley Patterns",
        author: "Adult Coloring Book Designs",
        rating: 4.5,
        reviews: 2313,
        price: 4,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Adult Coloring Book: Stress Relieving Animal Designs",
        author: "Blue Star Coloring",
        rating: 4.6,
        reviews: 2925,
        price: 6,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Adult Coloring Book: Stress Relieving Patterns",
        author: "Blue Star Coloring",
        rating: 4.4,
        reviews: 2951,
        price: 6,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Adult Coloring Books: A Coloring Book for Adults Featuring Mandalas and Henna Inspired Flowers, Animals, and Paisley…",
        author: "Coloring Books for Adults",
        rating: 4.5,
        reviews: 2426,
        price: 8,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Alexander Hamilton",
        author: "Ron Chernow",
        rating: 4.8,
        reviews: 9198,
        price: 13,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "All the Light We Cannot See",
        author: "Anthony Doerr",
        rating: 4.6,
        reviews: 36348,
        price: 14,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "All the Light We Cannot See",
        author: "Anthony Doerr",
        rating: 4.6,
        reviews: 36348,
        price: 14,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Allegiant",
        author: "Veronica Roth",
        rating: 3.9,
        reviews: 6310,
        price: 13,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "American Sniper: The Autobiography of the Most Lethal Sniper in U.S. Military History",
        author: "Chris Kyle",
        rating: 4.6,
        reviews: 15921,
        price: 9,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "And the Mountains Echoed",
        author: "Khaled Hosseini",
        rating: 4.3,
        reviews: 12159,
        price: 13,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Arguing with Idiots: How to Stop Small Minds and Big Government",
        author: "Glenn Beck",
        rating: 4.6,
        reviews: 798,
        price: 5,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Astrophysics for People in a Hurry",
        author: "Neil deGrasse Tyson",
        rating: 4.7,
        reviews: 9374,
        price: 9,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Autobiography of Mark Twain, Vol. 1",
        author: "Mark Twain",
        rating: 4.2,
        reviews: 491,
        price: 14,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Baby Touch and Feel: Animals",
        author: "DK",
        rating: 4.6,
        reviews: 5360,
        price: 5,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Balance (Angie's Extreme Stress Menders)",
        author: "Angie Grace",
        rating: 4.6,
        reviews: 1909,
        price: 11,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Barefoot Contessa Foolproof: Recipes You Can Trust: A Cookbook",
        author: "Ina Garten",
        rating: 4.8,
        reviews: 1296,
        price: 24,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Barefoot Contessa, How Easy Is That?: Fabulous Recipes & Easy Tips",
        author: "Ina Garten",
        rating: 4.7,
        reviews: 615,
        price: 21,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Becoming",
        author: "Michelle Obama",
        rating: 4.8,
        reviews: 61133,
        price: 11,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Becoming",
        author: "Michelle Obama",
        rating: 4.8,
        reviews: 61133,
        price: 11,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Being Mortal: Medicine and What Matters in the End",
        author: "Atul Gawande",
        rating: 4.8,
        reviews: 11113,
        price: 15,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        rating: 4.7,
        reviews: 10070,
        price: 13,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Between the World and Me",
        author: "Ta-Nehisi Coates",
        rating: 4.7,
        reviews: 10070,
        price: 13,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Born to Run",
        author: "Bruce Springsteen",
        rating: 4.7,
        reviews: 3729,
        price: 18,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Breaking Dawn (The Twilight Saga, Book 4)",
        author: "Stephenie Meyer",
        rating: 4.6,
        reviews: 9769,
        price: 13,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Broke: The Plan to Restore Our Trust, Truth and Treasure",
        author: "Glenn Beck",
        rating: 4.5,
        reviews: 471,
        price: 8,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Brown Bear, Brown Bear, What Do You See?",
        author: "Bill Martin Jr.",
        rating: 4.9,
        reviews: 14344,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Brown Bear, Brown Bear, What Do You See?",
        author: "Bill Martin Jr.",
        rating: 4.9,
        reviews: 14344,
        price: 5,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Cabin Fever (Diary of a Wimpy Kid, Book 6)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 4505,
        price: 0,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Calm the F*ck Down: An Irreverent Adult Coloring Book (Irreverent Book Series)",
        author: "Sasha O'Hara",
        rating: 4.6,
        reviews: 10369,
        price: 4,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Can't Hurt Me: Master Your Mind and Defy the Odds",
        author: "David Goggins",
        rating: 4.8,
        reviews: 16244,
        price: 18,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Capital in the Twenty First Century",
        author: "Thomas Piketty",
        rating: 4.5,
        reviews: 2884,
        price: 28,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Catching Fire (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 22614,
        price: 11,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Catching Fire (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 22614,
        price: 11,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Catching Fire (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 22614,
        price: 11,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Cravings: Recipes for All the Food You Want to Eat: A Cookbook",
        author: "Chrissy Teigen",
        rating: 4.7,
        reviews: 4761,
        price: 16,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Crazy Love: Overwhelmed by a Relentless God",
        author: "Francis Chan",
        rating: 4.7,
        reviews: 1542,
        price: 14,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Crazy Love: Overwhelmed by a Relentless God",
        author: "Francis Chan",
        rating: 4.7,
        reviews: 1542,
        price: 14,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Crazy Love: Overwhelmed by a Relentless God",
        author: "Francis Chan",
        rating: 4.7,
        reviews: 1542,
        price: 14,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Crazy Rich Asians (Crazy Rich Asians Trilogy)",
        author: "Kevin Kwan",
        rating: 4.3,
        reviews: 6143,
        price: 8,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Creative Haven Creative Cats Coloring Book (Adult Coloring)",
        author: "Marjorie Sarnat",
        rating: 4.8,
        reviews: 4022,
        price: 4,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Creative Haven Owls Coloring Book (Adult Coloring)",
        author: "Marjorie Sarnat",
        rating: 4.8,
        reviews: 3871,
        price: 5,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Cutting for Stone",
        author: "Abraham Verghese",
        rating: 4.6,
        reviews: 4866,
        price: 11,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Cutting for Stone",
        author: "Abraham Verghese",
        rating: 4.6,
        reviews: 4866,
        price: 11,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead",
        author: "Brené Brown",
        rating: 4.8,
        reviews: 1329,
        price: 10,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
        author: "Malcolm Gladwell",
        rating: 4.4,
        reviews: 4642,
        price: 13,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Dead And Gone: A Sookie Stackhouse Novel (Sookie Stackhouse/True Blood)",
        author: "Charlaine Harris",
        rating: 4.6,
        reviews: 1541,
        price: 4,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Dead in the Family (Sookie Stackhouse/True Blood, Book 10)",
        author: "Charlaine Harris",
        rating: 4.3,
        reviews: 1924,
        price: 8,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Dead Reckoning (Sookie Stackhouse/True Blood, Book 11)",
        author: "Charlaine Harris",
        rating: 4.2,
        reviews: 2094,
        price: 4,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Dear Zoo: A Lift-the-Flap Book",
        author: "Rod Campbell",
        rating: 4.8,
        reviews: 10922,
        price: 5,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Dear Zoo: A Lift-the-Flap Book",
        author: "Rod Campbell",
        rating: 4.8,
        reviews: 10922,
        price: 5,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Dear Zoo: A Lift-the-Flap Book",
        author: "Rod Campbell",
        rating: 4.8,
        reviews: 10922,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Dear Zoo: A Lift-the-Flap Book",
        author: "Rod Campbell",
        rating: 4.8,
        reviews: 10922,
        price: 5,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Decision Points",
        author: "George W. Bush",
        rating: 4.6,
        reviews: 2137,
        price: 17,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Delivering Happiness: A Path to Profits, Passion, and Purpose",
        author: "Tony Hsieh",
        rating: 4.6,
        reviews: 1651,
        price: 15,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5",
        author: "American Psychiatric Association",
        rating: 4.5,
        reviews: 6679,
        price: 105,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5",
        author: "American Psychiatric Association",
        rating: 4.5,
        reviews: 6679,
        price: 105,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Diary of a Wimpy Kid: Hard Luck, Book 8",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 6812,
        price: 0,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Diary of a Wimpy Kid: The Last Straw (Book 3)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 3837,
        price: 15,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Diary of a Wimpy Kid: The Long Haul",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 6540,
        price: 22,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Difficult Riddles For Smart Kids: 300 Difficult Riddles And Brain Teasers Families Will Love (Books for Smart Kids)",
        author: "M Prefontaine",
        rating: 4.6,
        reviews: 7955,
        price: 5,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Divergent",
        author: "Veronica Roth",
        rating: 4.6,
        reviews: 27098,
        price: 15,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Divergent",
        author: "Veronica Roth",
        rating: 4.6,
        reviews: 27098,
        price: 15,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Divergent / Insurgent",
        author: "Veronica Roth",
        rating: 4.5,
        reviews: 17684,
        price: 6,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Divine Soul Mind Body Healing and Transmission System: The Divine Way to Heal You, Humanity, Mother Earth, and All…",
        author: "Zhi Gang Sha",
        rating: 4.6,
        reviews: 37,
        price: 6,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Doctor Sleep: A Novel",
        author: "Stephen King",
        rating: 4.7,
        reviews: 15845,
        price: 13,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Dog Days (Diary of a Wimpy Kid, Book 4) (Volume 4)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 3181,
        price: 12,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Dog Man and Cat Kid: From the Creator of Captain Underpants (Dog Man #4)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 5062,
        price: 6,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Dog Man: A Tale of Two Kitties: From the Creator of Captain Underpants (Dog Man #3)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 4786,
        price: 8,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 7235,
        price: 4,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Dog Man: Brawl of the Wild: From the Creator of Captain Underpants (Dog Man #6)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 7235,
        price: 4,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Dog Man: Fetch-22: From the Creator of Captain Underpants (Dog Man #8)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 12619,
        price: 8,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Dog Man: For Whom the Ball Rolls: From the Creator of Captain Underpants (Dog Man #7)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 9089,
        price: 8,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Dog Man: Lord of the Fleas: From the Creator of Captain Underpants (Dog Man #5)",
        author: "Dav Pilkey",
        rating: 4.9,
        reviews: 5470,
        price: 6,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Double Down (Diary of a Wimpy Kid #11)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 5118,
        price: 20,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Dover Creative Haven Art Nouveau Animal Designs Coloring Book (Creative Haven Coloring Books)",
        author: "Marty Noble",
        rating: 4.6,
        reviews: 2134,
        price: 5,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Drive: The Surprising Truth About What Motivates Us",
        author: "Daniel H. Pink",
        rating: 4.5,
        reviews: 2525,
        price: 16,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Eat This Not That! Supermarket Survival Guide: The No-Diet Weight Loss Solution",
        author: "David Zinczenko",
        rating: 4.5,
        reviews: 720,
        price: 1,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Eat This, Not That! Thousands of Simple Food Swaps that Can Save You 10, 20, 30 Pounds--or More!",
        author: "David Zinczenko",
        rating: 4.3,
        reviews: 956,
        price: 14,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition",
        author: "Joel Fuhrman MD",
        rating: 4.5,
        reviews: 6346,
        price: 9,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition",
        author: "Joel Fuhrman MD",
        rating: 4.5,
        reviews: 6346,
        price: 9,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Eclipse (Twilight Sagas)",
        author: "Stephenie Meyer",
        rating: 4.7,
        reviews: 5505,
        price: 7,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Eclipse (Twilight)",
        author: "Stephenie Meyer",
        rating: 4.7,
        reviews: 5505,
        price: 18,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Educated: A Memoir",
        author: "Tara Westover",
        rating: 4.7,
        reviews: 28729,
        price: 15,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Educated: A Memoir",
        author: "Tara Westover",
        rating: 4.7,
        reviews: 28729,
        price: 15,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Enchanted Forest: An Inky Quest and Coloring book (Activity Books, Mindfulness and Meditation, Illustrated Floral Prints…",
        author: "Johanna Basford",
        rating: 4.7,
        reviews: 5413,
        price: 9,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Fahrenheit 451",
        author: "Ray Bradbury",
        rating: 4.6,
        reviews: 10721,
        price: 8,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Fahrenheit 451",
        author: "Ray Bradbury",
        rating: 4.6,
        reviews: 10721,
        price: 8,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Fantastic Beasts and Where to Find Them: The Original Screenplay (Harry Potter)",
        author: "J.K. Rowling",
        rating: 4.7,
        reviews: 4370,
        price: 15,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Fear: Trump in the White House",
        author: "Bob Woodward",
        rating: 4.4,
        reviews: 6042,
        price: 2,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Fifty Shades Darker",
        author: "E L James",
        rating: 4.4,
        reviews: 23631,
        price: 7,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Fifty Shades Freed: Book Three of the Fifty Shades Trilogy (Fifty Shades of Grey Series) (English Edition)",
        author: "E L James",
        rating: 4.5,
        reviews: 20262,
        price: 11,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)",
        author: "E L James",
        rating: 3.8,
        reviews: 47265,
        price: 14,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)",
        author: "E L James",
        rating: 3.8,
        reviews: 47265,
        price: 14,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Fifty Shades Trilogy (Fifty Shades of Grey / Fifty Shades Darker / Fifty Shades Freed)",
        author: "E L James",
        rating: 4.5,
        reviews: 13964,
        price: 32,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Fire and Fury: Inside the Trump White House",
        author: "Michael Wolff",
        rating: 4.2,
        reviews: 13677,
        price: 6,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "First 100 Words",
        author: "Roger Priddy",
        rating: 4.7,
        reviews: 17323,
        price: 4,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "First 100 Words",
        author: "Roger Priddy",
        rating: 4.7,
        reviews: 17323,
        price: 4,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "First 100 Words",
        author: "Roger Priddy",
        rating: 4.7,
        reviews: 17323,
        price: 4,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "First 100 Words",
        author: "Roger Priddy",
        rating: 4.7,
        reviews: 17323,
        price: 4,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "First 100 Words",
        author: "Roger Priddy",
        rating: 4.7,
        reviews: 17323,
        price: 4,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Food Rules: An Eater's Manual",
        author: "Michael Pollan",
        rating: 4.4,
        reviews: 1555,
        price: 9,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Frozen (Little Golden Book)",
        author: "RH Disney",
        rating: 4.7,
        reviews: 3642,
        price: 0,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Game Change: Obama and the Clintons, McCain and Palin, and the Race of a Lifetime",
        author: "John Heilemann",
        rating: 4.4,
        reviews: 1215,
        price: 9,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        author: "George R.R. Martin",
        rating: 4.6,
        reviews: 5594,
        price: 5,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        author: "George R.R. Martin",
        rating: 4.6,
        reviews: 5594,
        price: 5,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Game of Thrones Boxed Set: A Game of Thrones/A Clash of Kings/A Storm of Swords/A Feast for Crows",
        author: "George R.R. Martin",
        rating: 4.6,
        reviews: 5594,
        price: 5,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "George Washington's Sacred Fire",
        author: "Peter A. Lillback",
        rating: 4.5,
        reviews: 408,
        price: 20,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "George Washington's Secret Six: The Spy Ring That Saved the American Revolution",
        author: "Brian Kilmeade",
        rating: 4.6,
        reviews: 4799,
        price: 16,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Giraffes Can't Dance",
        author: "Giles Andreae",
        rating: 4.8,
        reviews: 14038,
        price: 4,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Giraffes Can't Dance",
        author: "Giles Andreae",
        rating: 4.8,
        reviews: 14038,
        price: 4,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Giraffes Can't Dance",
        author: "Giles Andreae",
        rating: 4.8,
        reviews: 14038,
        price: 4,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Giraffes Can't Dance",
        author: "Giles Andreae",
        rating: 4.8,
        reviews: 14038,
        price: 4,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Giraffes Can't Dance",
        author: "Giles Andreae",
        rating: 4.8,
        reviews: 14038,
        price: 4,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Girl, Stop Apologizing: A Shame-Free Plan for Embracing and Achieving Your Goals",
        author: "Rachel Hollis",
        rating: 4.6,
        reviews: 7660,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Girl, Wash Your Face: Stop Believing the Lies About Who You Are So You Can Become Who You Were Meant to Be",
        author: "Rachel Hollis",
        rating: 4.6,
        reviews: 22288,
        price: 12,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Girl, Wash Your Face: Stop Believing the Lies About Who You Are So You Can Become Who You Were Meant to Be",
        author: "Rachel Hollis",
        rating: 4.6,
        reviews: 22288,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Glenn Beck's Common Sense: The Case Against an Out-of-Control Government, Inspired by Thomas Paine",
        author: "Glenn Beck",
        rating: 4.6,
        reviews: 1365,
        price: 11,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Go Set a Watchman: A Novel",
        author: "Harper Lee",
        rating: 3.6,
        reviews: 14982,
        price: 19,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Go the F**k to Sleep",
        author: "Adam Mansbach",
        rating: 4.8,
        reviews: 9568,
        price: 9,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Going Rogue: An American Life",
        author: "Sarah Palin",
        rating: 4.6,
        reviews: 1636,
        price: 6,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Gone Girl",
        author: "Gillian Flynn",
        rating: 4,
        reviews: 57271,
        price: 10,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Gone Girl",
        author: "Gillian Flynn",
        rating: 4,
        reviews: 57271,
        price: 10,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Gone Girl",
        author: "Gillian Flynn",
        rating: 4,
        reviews: 57271,
        price: 9,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Good Days Start With Gratitude: A 52 Week Guide To Cultivate An Attitude Of Gratitude: Gratitude Journal",
        author: "Pretty Simple Press",
        rating: 4.6,
        reviews: 10141,
        price: 6,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Good to Great: Why Some Companies Make the Leap and Others Don't",
        author: "Jim Collins",
        rating: 4.5,
        reviews: 3457,
        price: 14,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Good to Great: Why Some Companies Make the Leap and Others Don't",
        author: "Jim Collins",
        rating: 4.5,
        reviews: 3457,
        price: 14,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Good to Great: Why Some Companies Make the Leap and Others Don't",
        author: "Jim Collins",
        rating: 4.5,
        reviews: 3457,
        price: 14,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Good to Great: Why Some Companies Make the Leap and Others Don't",
        author: "Jim Collins",
        rating: 4.5,
        reviews: 3457,
        price: 14,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Goodnight Moon",
        author: "Margaret Wise Brown",
        rating: 4.8,
        reviews: 8837,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Goodnight Moon",
        author: "Margaret Wise Brown",
        rating: 4.8,
        reviews: 8837,
        price: 5,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Goodnight Moon",
        author: "Margaret Wise Brown",
        rating: 4.8,
        reviews: 8837,
        price: 5,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
        author: "Sherri Duskey Rinker",
        rating: 4.9,
        reviews: 7038,
        price: 7,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Goodnight, Goodnight Construction Site (Hardcover Books for Toddlers, Preschool Books for Kids)",
        author: "Sherri Duskey Rinker",
        rating: 4.9,
        reviews: 7038,
        price: 7,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Grain Brain: The Surprising Truth about Wheat, Carbs, and Sugar--Your Brain's Silent Killers",
        author: "David Perlmutter MD",
        rating: 4.6,
        reviews: 5972,
        price: 10,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Grey: Fifty Shades of Grey as Told by Christian (Fifty Shades of Grey Series)",
        author: "E L James",
        rating: 4.4,
        reviews: 25624,
        price: 14,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Guts",
        author: "Raina Telgemeier",
        rating: 4.8,
        reviews: 5476,
        price: 7,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Hamilton: The Revolution",
        author: "Lin-Manuel Miranda",
        rating: 4.9,
        reviews: 5867,
        price: 54,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Happy, Happy, Happy: My Life and Legacy as the Duck Commander",
        author: "Phil Robertson",
        rating: 4.8,
        reviews: 4148,
        price: 11,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Harry Potter and the Chamber of Secrets: The Illustrated Edition (Harry Potter, Book 2)",
        author: "J.K. Rowling",
        rating: 4.9,
        reviews: 19622,
        price: 30,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Harry Potter and the Cursed Child, Parts 1 & 2, Special Rehearsal Edition Script",
        author: "J.K. Rowling",
        rating: 4,
        reviews: 23973,
        price: 12,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Harry Potter and the Goblet of Fire: The Illustrated Edition (Harry Potter, Book 4) (4)",
        author: "J. K. Rowling",
        rating: 4.9,
        reviews: 7758,
        price: 18,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Harry Potter and the Prisoner of Azkaban: The Illustrated Edition (Harry Potter, Book 3)",
        author: "J.K. Rowling",
        rating: 4.9,
        reviews: 3146,
        price: 30,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Harry Potter and the Sorcerer's Stone: The Illustrated Edition (Harry Potter, Book 1)",
        author: "J.K. Rowling",
        rating: 4.9,
        reviews: 10052,
        price: 22,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Harry Potter Coloring Book",
        author: "Scholastic",
        rating: 4.7,
        reviews: 3564,
        price: 9,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Harry Potter Paperback Box Set (Books 1-7)",
        author: "J. K. Rowling",
        rating: 4.8,
        reviews: 13471,
        price: 52,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Have a Little Faith: A True Story",
        author: "Mitch Albom",
        rating: 4.8,
        reviews: 1930,
        price: 4,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Heaven is for Real: A Little Boy's Astounding Story of His Trip to Heaven and Back",
        author: "Todd Burpo",
        rating: 4.7,
        reviews: 15779,
        price: 10,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Heaven is for Real: A Little Boy's Astounding Story of His Trip to Heaven and Back",
        author: "Todd Burpo",
        rating: 4.7,
        reviews: 15779,
        price: 10,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        author: "J. D. Vance",
        rating: 4.4,
        reviews: 15526,
        price: 14,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        author: "J. D. Vance",
        rating: 4.4,
        reviews: 15526,
        price: 14,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Homebody: A Guide to Creating Spaces You Never Want to Leave",
        author: "Joanna Gaines",
        rating: 4.8,
        reviews: 3776,
        price: 22,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        rating: 4.7,
        reviews: 25001,
        price: 11,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        rating: 4.7,
        reviews: 25001,
        price: 11,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        rating: 4.7,
        reviews: 25001,
        price: 11,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        rating: 4.7,
        reviews: 25001,
        price: 11,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        rating: 4.7,
        reviews: 25001,
        price: 11,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Howard Stern Comes Again",
        author: "Howard Stern",
        rating: 4.3,
        reviews: 5272,
        price: 16,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Humans of New York",
        author: "Brandon Stanton",
        rating: 4.8,
        reviews: 3490,
        price: 15,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Humans of New York",
        author: "Brandon Stanton",
        rating: 4.8,
        reviews: 3490,
        price: 15,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Humans of New York : Stories",
        author: "Brandon Stanton",
        rating: 4.9,
        reviews: 2812,
        price: 17,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened",
        author: "Allie Brosh",
        rating: 4.7,
        reviews: 4896,
        price: 17,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "I Am Confident, Brave & Beautiful: A Coloring Book for Girls",
        author: "Hopscotch Girls",
        rating: 4.8,
        reviews: 9737,
        price: 7,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "I, Alex Cross",
        author: "James Patterson",
        rating: 4.6,
        reviews: 1320,
        price: 7,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "If Animals Kissed Good Night",
        author: "Ann Whitford Paul",
        rating: 4.8,
        reviews: 16643,
        price: 4,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "If Animals Kissed Good Night",
        author: "Ann Whitford Paul",
        rating: 4.8,
        reviews: 16643,
        price: 4,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "If I Stay",
        author: "Gayle Forman",
        rating: 4.3,
        reviews: 7153,
        price: 9,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "In the Garden of Beasts: Love, Terror, and an American Family in Hitler's Berlin",
        author: "Eric Larson",
        rating: 4.4,
        reviews: 4571,
        price: 21,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Inferno",
        author: "Dan Brown",
        rating: 4.1,
        reviews: 29651,
        price: 14,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Inheritance: Book IV (Inheritance Cycle)",
        author: "Christopher Paolini",
        rating: 4.6,
        reviews: 5299,
        price: 20,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Instant Pot Pressure Cooker Cookbook: 500 Everyday Recipes for Beginners and Advanced Users. Try Easy and Healthy…",
        author: "Jennifer Smith",
        rating: 4.4,
        reviews: 7396,
        price: 13,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Instant Pot Pressure Cooker Cookbook: 500 Everyday Recipes for Beginners and Advanced Users. Try Easy and Healthy…",
        author: "Jennifer Smith",
        rating: 4.4,
        reviews: 7396,
        price: 13,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "It's Not Supposed to Be This Way: Finding Unexpected Strength When Disappointments Leave You Shattered",
        author: "Lysa TerKeurst",
        rating: 4.8,
        reviews: 7062,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Jesus Calling: Enjoying Peace in His Presence (with Scripture References)",
        author: "Sarah Young",
        rating: 4.9,
        reviews: 19576,
        price: 8,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "JOURNEY TO THE ICE P",
        author: "RH Disney",
        rating: 4.6,
        reviews: 978,
        price: 0,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Joyland (Hard Case Crime)",
        author: "Stephen King",
        rating: 4.5,
        reviews: 4748,
        price: 12,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Killers of the Flower Moon: The Osage Murders and the Birth of the FBI",
        author: "David Grann",
        rating: 4.6,
        reviews: 8393,
        price: 17,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Killing Jesus (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.5,
        reviews: 11391,
        price: 12,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Killing Kennedy: The End of Camelot",
        author: "Bill O'Reilly",
        rating: 4.6,
        reviews: 8634,
        price: 25,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.7,
        reviews: 9342,
        price: 10,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.7,
        reviews: 9342,
        price: 10,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Killing Patton: The Strange Death of World War II's Most Audacious General (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.6,
        reviews: 10927,
        price: 6,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Killing Reagan: The Violent Assault That Changed a Presidency (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.6,
        reviews: 5235,
        price: 5,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Killing the Rising Sun: How America Vanquished World War II Japan (Bill O'Reilly's Killing Series)",
        author: "Bill O'Reilly",
        rating: 4.8,
        reviews: 8916,
        price: 6,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Kitchen Confidential Updated Edition: Adventures in the Culinary Underbelly (P.S.)",
        author: "Anthony Bourdain",
        rating: 4.8,
        reviews: 2507,
        price: 8,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Knock-Knock Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.5,
        reviews: 3673,
        price: 4,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Knock-Knock Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.5,
        reviews: 3673,
        price: 4,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Knock-Knock Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.5,
        reviews: 3673,
        price: 4,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Last Week Tonight with John Oliver Presents A Day in the Life of Marlon Bundo (Better Bundo Book, LGBT Childrens Book)",
        author: "Jill Twiss",
        rating: 4.9,
        reviews: 11881,
        price: 13,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Laugh-Out-Loud Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.6,
        reviews: 6990,
        price: 4,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Laugh-Out-Loud Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.6,
        reviews: 6990,
        price: 4,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Laugh-Out-Loud Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.6,
        reviews: 6990,
        price: 4,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Laugh-Out-Loud Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.6,
        reviews: 6990,
        price: 4,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Laugh-Out-Loud Jokes for Kids",
        author: "Rob Elliott",
        rating: 4.6,
        reviews: 6990,
        price: 4,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Lean In: Women, Work, and the Will to Lead",
        author: "Sheryl Sandberg",
        rating: 4.5,
        reviews: 6132,
        price: 13,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Leonardo da Vinci",
        author: "Walter Isaacson",
        rating: 4.5,
        reviews: 3014,
        price: 21,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Lettering and Modern Calligraphy: A Beginner's Guide: Learn Hand Lettering and Brush Lettering",
        author: "Paper Peony Press",
        rating: 4.4,
        reviews: 7550,
        price: 6,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Liberty and Tyranny: A Conservative Manifesto",
        author: "Mark R. Levin",
        rating: 4.8,
        reviews: 3828,
        price: 15,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Life",
        author: "Keith Richards",
        rating: 4.5,
        reviews: 2752,
        price: 18,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Little Bee: A Novel",
        author: "Chris Cleave",
        rating: 4.1,
        reviews: 1467,
        price: 10,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Little Blue Truck",
        author: "Alice Schertle",
        rating: 4.9,
        reviews: 1884,
        price: 0,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Little Fires Everywhere",
        author: "Celeste Ng",
        rating: 4.5,
        reviews: 25706,
        price: 12,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Looking for Alaska",
        author: "John Green",
        rating: 4.5,
        reviews: 8491,
        price: 7,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Love Wins: A Book About Heaven, Hell, and the Fate of Every Person Who Ever Lived",
        author: "Rob Bell",
        rating: 4.2,
        reviews: 1649,
        price: 13,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Love You Forever",
        author: "Robert Munsch",
        rating: 4.8,
        reviews: 18613,
        price: 5,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Love You Forever",
        author: "Robert Munsch",
        rating: 4.8,
        reviews: 18613,
        price: 5,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Magnolia Table: A Collection of Recipes for Gathering",
        author: "Joanna Gaines",
        rating: 4.8,
        reviews: 9867,
        price: 16,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Make It Ahead: A Barefoot Contessa Cookbook",
        author: "Ina Garten",
        rating: 4.5,
        reviews: 1386,
        price: 20,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
        author: "Admiral William H. McRaven",
        rating: 4.7,
        reviews: 10199,
        price: 11,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Mastering the Art of French Cooking, Vol. 2",
        author: "Julia Child",
        rating: 4.8,
        reviews: 2926,
        price: 27,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Milk and Honey",
        author: "Rupi Kaur",
        rating: 4.7,
        reviews: 17739,
        price: 8,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Milk and Honey",
        author: "Rupi Kaur",
        rating: 4.7,
        reviews: 17739,
        price: 8,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Milk and Honey",
        author: "Rupi Kaur",
        rating: 4.7,
        reviews: 17739,
        price: 8,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Milk and Vine: Inspirational Quotes From Classic Vines",
        author: "Adam Gasiewski",
        rating: 4.4,
        reviews: 3113,
        price: 6,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        rating: 4.6,
        reviews: 5542,
        price: 10,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        rating: 4.6,
        reviews: 5542,
        price: 10,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        rating: 4.6,
        reviews: 5542,
        price: 10,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Mockingjay (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.5,
        reviews: 26741,
        price: 8,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Mockingjay (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.5,
        reviews: 26741,
        price: 8,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "Mockingjay (The Hunger Games)",
        author: "Suzanne Collins",
        rating: 4.5,
        reviews: 26741,
        price: 8,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "National Geographic Kids Why?: Over 1,111 Answers to Everything",
        author: "Crispin Boyer",
        rating: 4.8,
        reviews: 5347,
        price: 16,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "National Geographic Little Kids First Big Book of Why (National Geographic Little Kids First Big Books)",
        author: "Amy Shields",
        rating: 4.8,
        reviews: 7866,
        price: 11,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "New Moon (The Twilight Saga)",
        author: "Stephenie Meyer",
        rating: 4.6,
        reviews: 5680,
        price: 10,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Night (Night)",
        author: "Elie Wiesel",
        rating: 4.7,
        reviews: 5178,
        price: 9,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "No Easy Day: The Autobiography of a Navy Seal: The Firsthand Account of the Mission That Killed Osama Bin Laden",
        author: "Mark Owen",
        rating: 4.6,
        reviews: 8093,
        price: 14,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Obama: An Intimate Portrait",
        author: "Pete Souza",
        rating: 4.9,
        reviews: 3192,
        price: 22,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Oh, the Places You'll Go!",
        author: "Dr. Seuss",
        rating: 4.9,
        reviews: 21834,
        price: 8,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Old School (Diary of a Wimpy Kid #10)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 6169,
        price: 7,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Olive Kitteridge",
        author: "Elizabeth Strout",
        rating: 4.2,
        reviews: 4519,
        price: 12,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "One Thousand Gifts: A Dare to Live Fully Right Where You Are",
        author: "Ann Voskamp",
        rating: 4.6,
        reviews: 3163,
        price: 13,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "One Thousand Gifts: A Dare to Live Fully Right Where You Are",
        author: "Ann Voskamp",
        rating: 4.6,
        reviews: 3163,
        price: 13,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Option B: Facing Adversity, Building Resilience, and Finding Joy",
        author: "Sheryl Sandberg",
        rating: 4.5,
        reviews: 1831,
        price: 9,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Origin: A Novel (Robert Langdon)",
        author: "Dan Brown",
        rating: 4.3,
        reviews: 18904,
        price: 13,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Orphan Train",
        author: "Christina Baker Kline",
        rating: 4.6,
        reviews: 21930,
        price: 11,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Outliers: The Story of Success",
        author: "Malcolm Gladwell",
        rating: 4.6,
        reviews: 10426,
        price: 20,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Outliers: The Story of Success",
        author: "Malcolm Gladwell",
        rating: 4.6,
        reviews: 10426,
        price: 20,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "P is for Potty! (Sesame Street) (Lift-the-Flap)",
        author: "Naomi Kleinberg",
        rating: 4.7,
        reviews: 10820,
        price: 5,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "P is for Potty! (Sesame Street) (Lift-the-Flap)",
        author: "Naomi Kleinberg",
        rating: 4.7,
        reviews: 10820,
        price: 5,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Percy Jackson and the Olympians Paperback Boxed Set (Books 1-3)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 548,
        price: 2,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "Player's Handbook (Dungeons & Dragons)",
        author: "Wizards RPG Team",
        rating: 4.8,
        reviews: 16990,
        price: 27,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Player's Handbook (Dungeons & Dragons)",
        author: "Wizards RPG Team",
        rating: 4.8,
        reviews: 16990,
        price: 27,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Player's Handbook (Dungeons & Dragons)",
        author: "Wizards RPG Team",
        rating: 4.8,
        reviews: 16990,
        price: 27,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Pokémon Deluxe Essential Handbook: The Need-to-Know Stats and Facts on Over 700 Pokémon",
        author: "Scholastic",
        rating: 4.7,
        reviews: 3503,
        price: 9,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
        author: "Eben Alexander",
        rating: 4.3,
        reviews: 13616,
        price: 10,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Proof of Heaven: A Neurosurgeon's Journey into the Afterlife",
        author: "Eben Alexander",
        rating: 4.3,
        reviews: 13616,
        price: 10,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Publication Manual of the American Psychological Association, 6th Edition",
        author: "American Psychological Association",
        rating: 4.5,
        reviews: 8580,
        price: 46,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Puppy Birthday to You! (Paw Patrol) (Little Golden Book)",
        author: "Golden Books",
        rating: 4.8,
        reviews: 4757,
        price: 4,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        author: "Susan Cain",
        rating: 4.6,
        reviews: 10009,
        price: 20,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        author: "Susan Cain",
        rating: 4.6,
        reviews: 10009,
        price: 7,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Radical: Taking Back Your Faith from the American Dream",
        author: "David Platt",
        rating: 4.7,
        reviews: 1985,
        price: 9,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Radical: Taking Back Your Faith from the American Dream",
        author: "David Platt",
        rating: 4.7,
        reviews: 1985,
        price: 9,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Ready Player One: A Novel",
        author: "Ernest Cline",
        rating: 4.6,
        reviews: 22536,
        price: 12,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Ready Player One: A Novel",
        author: "Ernest Cline",
        rating: 4.6,
        reviews: 22536,
        price: 12,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "Rush Revere and the Brave Pilgrims: Time-Travel Adventures with Exceptional Americans (1)",
        author: "Rush Limbaugh",
        rating: 4.9,
        reviews: 7150,
        price: 12,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Rush Revere and the First Patriots: Time-Travel Adventures With Exceptional Americans (2)",
        author: "Rush Limbaugh",
        rating: 4.9,
        reviews: 3836,
        price: 12,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
        author: "Samin Nosrat",
        rating: 4.8,
        reviews: 7802,
        price: 20,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
        author: "Samin Nosrat",
        rating: 4.8,
        reviews: 7802,
        price: 20,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Sarah's Key",
        author: "Tatiana de Rosnay",
        rating: 4.6,
        reviews: 3619,
        price: 10,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "School Zone - Big Preschool Workbook - Ages 4 and Up, Colors, Shapes, Numbers 1-10, Alphabet, Pre-Writing, Pre-Reading…",
        author: "School Zone",
        rating: 4.8,
        reviews: 23047,
        price: 6,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "School Zone - Big Preschool Workbook - Ages 4 and Up, Colors, Shapes, Numbers 1-10, Alphabet, Pre-Writing, Pre-Reading…",
        author: "School Zone",
        rating: 4.8,
        reviews: 23047,
        price: 6,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Secret Garden: An Inky Treasure Hunt and Coloring Book (For Adults, mindfulness coloring)",
        author: "Johanna Basford",
        rating: 4.7,
        reviews: 9366,
        price: 9,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Sh*t My Dad Says",
        author: "Justin Halpern",
        rating: 4.7,
        reviews: 1265,
        price: 11,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Ship of Fools: How a Selfish Ruling Class Is Bringing America to the Brink of Revolution",
        author: "Tucker Carlson",
        rating: 4.8,
        reviews: 3923,
        price: 16,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Shred: The Revolutionary Diet: 6 Weeks 4 Inches 2 Sizes",
        author: "Ian K. Smith M.D.",
        rating: 4.1,
        reviews: 2272,
        price: 6,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Sookie Stackhouse",
        author: "Charlaine Harris",
        rating: 4.7,
        reviews: 973,
        price: 25,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Soul Healing Miracles: Ancient and New Sacred Wisdom, Knowledge, and Practical Techniques for Healing the Spiritual…",
        author: "Zhi Gang Sha",
        rating: 4.6,
        reviews: 220,
        price: 17,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Steve Jobs",
        author: "Walter Isaacson",
        rating: 4.6,
        reviews: 7827,
        price: 20,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Steve Jobs",
        author: "Walter Isaacson",
        rating: 4.6,
        reviews: 7827,
        price: 20,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Strange Planet (Strange Planet Series)",
        author: "Nathan W. Pyle",
        rating: 4.9,
        reviews: 9382,
        price: 6,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "StrengthsFinder 2.0",
        author: "Gallup",
        rating: 4,
        reviews: 5069,
        price: 17,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Super Freakonomics: Global Cooling, Patriotic Prostitutes, and Why Suicide Bombers Should Buy Life Insurance",
        author: "Steven D. Levitt",
        rating: 4.5,
        reviews: 1583,
        price: 18,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Switch: How to Change Things When Change Is Hard",
        author: "Chip Heath",
        rating: 4.6,
        reviews: 1907,
        price: 13,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Sycamore Row (Jake Brigance)",
        author: "John Grisham",
        rating: 4.5,
        reviews: 23114,
        price: 18,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Teach Like a Champion: 49 Techniques that Put Students on the Path to College",
        author: "Doug Lemov",
        rating: 4.4,
        reviews: 637,
        price: 20,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Teach Like a Champion: 49 Techniques that Put Students on the Path to College",
        author: "Doug Lemov",
        rating: 4.4,
        reviews: 637,
        price: 20,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The 17 Day Diet: A Doctor's Plan Designed for Rapid Results",
        author: "Mike Moreno",
        rating: 4.3,
        reviews: 2314,
        price: 22,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman",
        author: "Timothy Ferriss",
        rating: 4.3,
        reviews: 4587,
        price: 21,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love That Lasts",
        author: "Gary Chapman",
        rating: 4.7,
        reviews: 3477,
        price: 28,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love That Lasts",
        author: "Gary Chapman",
        rating: 4.7,
        reviews: 3477,
        price: 28,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love That Lasts",
        author: "Gary Chapman",
        rating: 4.7,
        reviews: 3477,
        price: 28,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love That Lasts",
        author: "Gary Chapman",
        rating: 4.7,
        reviews: 3477,
        price: 28,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love That Lasts",
        author: "Gary Chapman",
        rating: 4.7,
        reviews: 3477,
        price: 28,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love that Lasts",
        author: "Gary Chapman",
        rating: 4.8,
        reviews: 25554,
        price: 8,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love that Lasts",
        author: "Gary Chapman",
        rating: 4.8,
        reviews: 25554,
        price: 8,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love that Lasts",
        author: "Gary Chapman",
        rating: 4.8,
        reviews: 25554,
        price: 8,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love that Lasts",
        author: "Gary Chapman",
        rating: 4.8,
        reviews: 25554,
        price: 8,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The 5 Love Languages: The Secret to Love that Lasts",
        author: "Gary Chapman",
        rating: 4.8,
        reviews: 25554,
        price: 8,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The 5000 Year Leap",
        author: "W. Cleon Skousen",
        rating: 4.8,
        reviews: 1680,
        price: 12,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.6,
        reviews: 9325,
        price: 24,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.6,
        reviews: 9325,
        price: 24,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.6,
        reviews: 9325,
        price: 24,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.6,
        reviews: 9325,
        price: 24,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.7,
        reviews: 4725,
        price: 16,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.7,
        reviews: 4725,
        price: 16,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",
        author: "Stephen R. Covey",
        rating: 4.7,
        reviews: 4725,
        price: 16,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Alchemist",
        author: "Paulo Coelho",
        rating: 4.7,
        reviews: 35799,
        price: 39,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Amateur",
        author: "Edward Klein",
        rating: 4.6,
        reviews: 2580,
        price: 9,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Art of Racing in the Rain: A Novel",
        author: "Garth Stein",
        rating: 4.7,
        reviews: 11813,
        price: 10,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Art of Racing in the Rain: A Novel",
        author: "Garth Stein",
        rating: 4.7,
        reviews: 11813,
        price: 10,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Big Short: Inside the Doomsday Machine",
        author: "Michael Lewis",
        rating: 4.7,
        reviews: 3536,
        price: 17,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Blood of Olympus (The Heroes of Olympus (5))",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 6600,
        price: 11,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Blood Sugar Solution: The UltraHealthy Program for Losing Weight, Preventing Disease, and Feeling Great Now!",
        author: "Mark Hyman M.D.",
        rating: 4.2,
        reviews: 1789,
        price: 14,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        author: "Bessel van der Kolk M.D.",
        rating: 4.8,
        reviews: 12361,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Book of Basketball: The NBA According to The Sports Guy",
        author: "Bill Simmons",
        rating: 4.7,
        reviews: 858,
        price: 53,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Book Thief",
        author: "Markus Zusak",
        rating: 4.6,
        reviews: 23148,
        price: 6,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Book Thief",
        author: "Markus Zusak",
        rating: 4.6,
        reviews: 23148,
        price: 6,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Book with No Pictures",
        author: "B. J. Novak",
        rating: 4.8,
        reviews: 8081,
        price: 8,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Book with No Pictures",
        author: "B. J. Novak",
        rating: 4.8,
        reviews: 8081,
        price: 8,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
        author: "Daniel James Brown",
        rating: 4.8,
        reviews: 23358,
        price: 12,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
        author: "Daniel James Brown",
        rating: 4.8,
        reviews: 23358,
        price: 12,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The Casual Vacancy",
        author: "J.K. Rowling",
        rating: 3.3,
        reviews: 9372,
        price: 12,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The China Study: The Most Comprehensive Study of Nutrition Ever Conducted And the Startling Implications for Diet…",
        author: "Thomas Campbell",
        rating: 4.7,
        reviews: 4633,
        price: 21,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle",
        author: "Amy Ramos",
        rating: 4.3,
        reviews: 13061,
        price: 6,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle",
        author: "Amy Ramos",
        rating: 4.3,
        reviews: 13061,
        price: 6,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Confession: A Novel",
        author: "John Grisham",
        rating: 4.3,
        reviews: 3523,
        price: 13,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Constitution of the United States",
        author: "Delegates of the Constitutional",
        rating: 4.8,
        reviews: 2774,
        price: 0,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Daily Show with Jon Stewart Presents Earth (The Book): A Visitor's Guide to the Human Race",
        author: "Jon Stewart",
        rating: 4.4,
        reviews: 440,
        price: 11,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Day the Crayons Quit",
        author: "Drew Daywalt",
        rating: 4.8,
        reviews: 8922,
        price: 9,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Day the Crayons Quit",
        author: "Drew Daywalt",
        rating: 4.8,
        reviews: 8922,
        price: 9,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Day the Crayons Quit",
        author: "Drew Daywalt",
        rating: 4.8,
        reviews: 8922,
        price: 9,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Dukan Diet: 2 Steps to Lose the Weight, 2 Steps to Keep It Off Forever",
        author: "Pierre Dukan",
        rating: 4.1,
        reviews: 2023,
        price: 15,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Elegance of the Hedgehog",
        author: "Muriel Barbery",
        rating: 4,
        reviews: 1859,
        price: 11,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Fault in Our Stars",
        author: "John Green",
        rating: 4.7,
        reviews: 50482,
        price: 13,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Fault in Our Stars",
        author: "John Green",
        rating: 4.7,
        reviews: 50482,
        price: 13,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Fault in Our Stars",
        author: "John Green",
        rating: 4.7,
        reviews: 50482,
        price: 7,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Fault in Our Stars",
        author: "John Green",
        rating: 4.7,
        reviews: 50482,
        price: 13,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Five Dysfunctions of a Team: A Leadership Fable",
        author: "Patrick Lencioni",
        rating: 4.6,
        reviews: 3207,
        price: 6,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Five Dysfunctions of a Team: A Leadership Fable",
        author: "Patrick Lencioni",
        rating: 4.6,
        reviews: 3207,
        price: 6,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Five Dysfunctions of a Team: A Leadership Fable",
        author: "Patrick Lencioni",
        rating: 4.6,
        reviews: 3207,
        price: 6,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Five Dysfunctions of a Team: A Leadership Fable",
        author: "Patrick Lencioni",
        rating: 4.6,
        reviews: 3207,
        price: 6,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Five Dysfunctions of a Team: A Leadership Fable",
        author: "Patrick Lencioni",
        rating: 4.6,
        reviews: 3207,
        price: 6,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The Five Love Languages: How to Express Heartfelt Commitment to Your Mate",
        author: "Gary Chapman",
        rating: 4.6,
        reviews: 803,
        price: 9,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)",
        author: "Don Miguel Ruiz",
        rating: 4.7,
        reviews: 23308,
        price: 6,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Getaway",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 5836,
        price: 0,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Girl on the Train",
        author: "Paula Hawkins",
        rating: 4.1,
        reviews: 79446,
        price: 18,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Girl on the Train",
        author: "Paula Hawkins",
        rating: 4.1,
        reviews: 79446,
        price: 7,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
        author: "Stieg Larsson",
        rating: 4.7,
        reviews: 7747,
        price: 14,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Girl Who Kicked the Hornet's Nest (Millennium Trilogy)",
        author: "Stieg Larsson",
        rating: 4.7,
        reviews: 7747,
        price: 14,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Girl Who Played with Fire (Millennium Series)",
        author: "Stieg Larsson",
        rating: 4.7,
        reviews: 7251,
        price: 9,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Girl Who Played with Fire (Millennium)",
        author: "Stieg Larsson",
        rating: 4.7,
        reviews: 7251,
        price: 16,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Girl with the Dragon Tattoo (Millennium Series)",
        author: "Stieg Larsson",
        rating: 4.4,
        reviews: 10559,
        price: 2,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Girl with the Dragon Tattoo (Millennium Series)",
        author: "Stieg Larsson",
        rating: 4.4,
        reviews: 10559,
        price: 2,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Going-To-Bed Book",
        author: "Sandra Boynton",
        rating: 4.8,
        reviews: 5249,
        price: 5,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "The Going-To-Bed Book",
        author: "Sandra Boynton",
        rating: 4.8,
        reviews: 5249,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
        author: "Donna Tartt",
        rating: 3.9,
        reviews: 33844,
        price: 20,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Goldfinch: A Novel (Pulitzer Prize for Fiction)",
        author: "Donna Tartt",
        rating: 3.9,
        reviews: 33844,
        price: 20,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 4.4,
        reviews: 11616,
        price: 7,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 4.4,
        reviews: 11616,
        price: 7,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 4.4,
        reviews: 11616,
        price: 7,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Guardians: A Novel",
        author: "John Grisham",
        rating: 4.5,
        reviews: 13609,
        price: 14,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "The Guernsey Literary and Potato Peel Pie Society",
        author: "Mary Ann Shaffer",
        rating: 4.7,
        reviews: 8587,
        price: 10,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Handmaid's Tale",
        author: "Margaret Atwood",
        rating: 4.3,
        reviews: 29442,
        price: 7,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Harbinger: The Ancient Mystery that Holds the Secret of America's Future",
        author: "Jonathan Cahn",
        rating: 4.6,
        reviews: 11098,
        price: 13,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Hate U Give",
        author: "Angie Thomas",
        rating: 4.8,
        reviews: 9947,
        price: 11,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Help",
        author: "Kathryn Stockett",
        rating: 4.8,
        reviews: 13871,
        price: 6,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Help",
        author: "Kathryn Stockett",
        rating: 4.8,
        reviews: 13871,
        price: 6,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Help",
        author: "Kathryn Stockett",
        rating: 4.8,
        reviews: 13871,
        price: 8,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Help",
        author: "Kathryn Stockett",
        rating: 4.8,
        reviews: 13871,
        price: 7,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The House of Hades (Heroes of Olympus, Book 4)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 6982,
        price: 14,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Hunger Games",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 32122,
        price: 14,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Hunger Games (Book 1)",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 32122,
        price: 8,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Hunger Games (Book 1)",
        author: "Suzanne Collins",
        rating: 4.7,
        reviews: 32122,
        price: 8,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Hunger Games Trilogy Boxed Set (1)",
        author: "Suzanne Collins",
        rating: 4.8,
        reviews: 16949,
        price: 30,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Hunger Games Trilogy Boxed Set (1)",
        author: "Suzanne Collins",
        rating: 4.8,
        reviews: 16949,
        price: 30,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        rating: 4.7,
        reviews: 9289,
        price: 13,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        rating: 4.7,
        reviews: 9289,
        price: 9,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        rating: 4.7,
        reviews: 9289,
        price: 9,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Instant Pot Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals",
        author: "Laurel Randolph",
        rating: 4.3,
        reviews: 7368,
        price: 7,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Instant Pot Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals",
        author: "Laurel Randolph",
        rating: 4.3,
        reviews: 7368,
        price: 7,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Last Lecture",
        author: "Randy Pausch",
        rating: 4.7,
        reviews: 4028,
        price: 9,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 4628,
        price: 7,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Last Olympian (Percy Jackson and the Olympians, Book 5)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 4628,
        price: 7,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Legend of Zelda: Hyrule Historia",
        author: "Patrick Thorpe",
        rating: 4.9,
        reviews: 5396,
        price: 20,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Lego Ideas Book: Unlock Your Imagination",
        author: "Daniel Lipkowitz",
        rating: 4.4,
        reviews: 4247,
        price: 13,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Lego Ideas Book: Unlock Your Imagination",
        author: "Daniel Lipkowitz",
        rating: 4.4,
        reviews: 4247,
        price: 13,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        author: "Marie Kondō",
        rating: 4.5,
        reviews: 22641,
        price: 11,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        author: "Marie Kondō",
        rating: 4.5,
        reviews: 22641,
        price: 11,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        author: "Marie Kondō",
        rating: 4.5,
        reviews: 22641,
        price: 11,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing",
        author: "Marie Kondō",
        rating: 4.5,
        reviews: 22641,
        price: 11,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Litigators",
        author: "John Grisham",
        rating: 4.4,
        reviews: 6222,
        price: 18,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Lost Hero (Heroes of Olympus, Book 1)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 4506,
        price: 14,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Lost Symbol",
        author: "Dan Brown",
        rating: 4.2,
        reviews: 8747,
        price: 19,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Love Dare",
        author: "Stephen Kendrick",
        rating: 4.8,
        reviews: 1655,
        price: 13,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Magnolia Story",
        author: "Chip Gaines",
        rating: 4.9,
        reviews: 7861,
        price: 5,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Mark of Athena (Heroes of Olympus, Book 3)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 6247,
        price: 10,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Martian",
        author: "Andy Weir",
        rating: 4.7,
        reviews: 39459,
        price: 9,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Maze Runner (Book 1)",
        author: "James Dashner",
        rating: 4.5,
        reviews: 10101,
        price: 8,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Meltdown (Diary of a Wimpy Kid Book 13)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 5898,
        price: 8,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Mueller Report",
        author: "The Washington Post",
        rating: 4.6,
        reviews: 2744,
        price: 12,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Nightingale: A Novel",
        author: "Kristin Hannah",
        rating: 4.8,
        reviews: 49288,
        price: 11,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Nightingale: A Novel",
        author: "Kristin Hannah",
        rating: 4.8,
        reviews: 49288,
        price: 11,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "The Official SAT Study Guide",
        author: "The College Board",
        rating: 4.4,
        reviews: 1201,
        price: 40,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Official SAT Study Guide",
        author: "The College Board",
        rating: 4.4,
        reviews: 1201,
        price: 40,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "The Official SAT Study Guide",
        author: "The College Board",
        rating: 4.4,
        reviews: 1201,
        price: 40,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Official SAT Study Guide",
        author: "The College Board",
        rating: 4.4,
        reviews: 1201,
        price: 40,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The Official SAT Study Guide",
        author: "The College Board",
        rating: 4.4,
        reviews: 1201,
        price: 40,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "The Official SAT Study Guide, 2016 Edition (Official Study Guide for the New Sat)",
        author: "The College Board",
        rating: 4.3,
        reviews: 807,
        price: 36,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Paris Wife: A Novel",
        author: "Paula McLain",
        rating: 4.3,
        reviews: 3759,
        price: 16,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Pioneer Woman Cooks: A Year of Holidays: 140 Step-by-Step Recipes for Simple, Scrumptious Celebrations",
        author: "Ree Drummond",
        rating: 4.8,
        reviews: 2663,
        price: 17,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "The Pioneer Woman Cooks: Dinnertime - Comfort Classics, Freezer Food, 16-minute Meals, and Other Delicious Ways to Solve…",
        author: "Ree Drummond",
        rating: 4.8,
        reviews: 3428,
        price: 14,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The Pioneer Woman Cooks: Food from My Frontier",
        author: "Ree Drummond",
        rating: 4.8,
        reviews: 2876,
        price: 21,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The Plant Paradox Cookbook: 100 Delicious Recipes to Help You Lose Weight, Heal Your Gut, and Live Lectin-Free",
        author: "Dr. Steven R Gundry MD",
        rating: 4.5,
        reviews: 3601,
        price: 18,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Plant Paradox: The Hidden Dangers in \"Healthy\" Foods That Cause Disease and Weight Gain",
        author: "Dr. Steven R Gundry MD",
        rating: 4.4,
        reviews: 7058,
        price: 17,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Pout-Pout Fish",
        author: "Deborah Diesen",
        rating: 4.8,
        reviews: 9784,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Pout-Pout Fish",
        author: "Deborah Diesen",
        rating: 4.8,
        reviews: 9784,
        price: 5,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Power of Habit: Why We Do What We Do in Life and Business",
        author: "Charles Duhigg",
        rating: 4.6,
        reviews: 10795,
        price: 21,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "The President Is Missing: A Novel",
        author: "James Patterson",
        rating: 4.3,
        reviews: 10191,
        price: 18,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Racketeer",
        author: "John Grisham",
        rating: 4.3,
        reviews: 14493,
        price: 18,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Red Pyramid (The Kane Chronicles, Book 1)",
        author: "Rick Riordan",
        rating: 4.6,
        reviews: 2186,
        price: 12,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Road to Serfdom: Text and Documents--The Definitive Edition (The Collected Works of F. A. Hayek, Volume 2)",
        author: "F. A. Hayek",
        rating: 4.6,
        reviews: 1204,
        price: 14,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "The Serpent's Shadow (The Kane Chronicles, Book 3)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 2091,
        price: 12,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Shack: Where Tragedy Confronts Eternity",
        author: "William P. Young",
        rating: 4.6,
        reviews: 19720,
        price: 8,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Shack: Where Tragedy Confronts Eternity",
        author: "William P. Young",
        rating: 4.6,
        reviews: 19720,
        price: 8,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Short Second Life of Bree Tanner: An Eclipse Novella (The Twilight Saga)",
        author: "Stephenie Meyer",
        rating: 4.6,
        reviews: 2122,
        price: 0,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Silent Patient",
        author: "Alex Michaelides",
        rating: 4.5,
        reviews: 27536,
        price: 14,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "The Son of Neptune (Heroes of Olympus, Book 2)",
        author: "Rick Riordan",
        rating: 4.8,
        reviews: 4290,
        price: 10,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        author: "Mark Manson",
        rating: 4.6,
        reviews: 26490,
        price: 15,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        author: "Mark Manson",
        rating: 4.6,
        reviews: 26490,
        price: 15,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        author: "Mark Manson",
        rating: 4.6,
        reviews: 26490,
        price: 15,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Sun and Her Flowers",
        author: "Rupi Kaur",
        rating: 4.7,
        reviews: 5487,
        price: 9,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Third Wheel (Diary of a Wimpy Kid, Book 7)",
        author: "Jeff Kinney",
        rating: 4.7,
        reviews: 6377,
        price: 7,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "The Throne of Fire (The Kane Chronicles, Book 2)",
        author: "Rick Riordan",
        rating: 4.7,
        reviews: 1463,
        price: 10,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "The Time Traveler's Wife",
        author: "Audrey Niffenegger",
        rating: 4.4,
        reviews: 3759,
        price: 6,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Tipping Point: How Little Things Can Make a Big Difference",
        author: "Malcolm Gladwell",
        rating: 4.4,
        reviews: 3503,
        price: 9,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness",
        author: "Dave Ramsey",
        rating: 4.7,
        reviews: 11550,
        price: 10,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Twilight Saga Collection",
        author: "Stephenie Meyer",
        rating: 4.7,
        reviews: 3801,
        price: 82,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "The Ugly Truth (Diary of a Wimpy Kid, Book 5)",
        author: "Jeff Kinney",
        rating: 4.8,
        reviews: 3796,
        price: 12,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "The Unofficial Harry Potter Cookbook: From Cauldron Cakes to Knickerbocker Glory--More Than 150 Magical Recipes for…",
        author: "Dinah Bucholz",
        rating: 4.7,
        reviews: 9030,
        price: 10,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        rating: 4.9,
        reviews: 19546,
        price: 5,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        author: "Melissa Hartwig Urban",
        rating: 4.6,
        reviews: 7508,
        price: 16,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        author: "Melissa Hartwig Urban",
        rating: 4.6,
        reviews: 7508,
        price: 16,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "The Whole30: The 30-Day Guide to Total Health and Food Freedom",
        author: "Melissa Hartwig Urban",
        rating: 4.6,
        reviews: 7508,
        price: 16,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "The Wonderful Things You Will Be",
        author: "Emily Winfield Martin",
        rating: 4.9,
        reviews: 8842,
        price: 10,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "The Wonderful Things You Will Be",
        author: "Emily Winfield Martin",
        rating: 4.9,
        reviews: 8842,
        price: 10,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "The Wonderful Things You Will Be",
        author: "Emily Winfield Martin",
        rating: 4.9,
        reviews: 8842,
        price: 10,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Wonderful Things You Will Be",
        author: "Emily Winfield Martin",
        rating: 4.9,
        reviews: 8842,
        price: 10,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "The Wonky Donkey",
        author: "Craig Smith",
        rating: 4.8,
        reviews: 30183,
        price: 4,
        year: 2018,
        genre: "Fiction"
    },
    {
        name: "The Wonky Donkey",
        author: "Craig Smith",
        rating: 4.8,
        reviews: 30183,
        price: 4,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "The Wright Brothers",
        author: "David McCullough",
        rating: 4.7,
        reviews: 6169,
        price: 16,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Things That Matter: Three Decades of Passions, Pastimes and Politics [Deckled Edge]",
        author: "Charles Krauthammer",
        rating: 4.7,
        reviews: 7034,
        price: 15,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        rating: 4.6,
        reviews: 11034,
        price: 19,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        rating: 4.6,
        reviews: 11034,
        price: 19,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Thirteen Reasons Why",
        author: "Jay Asher",
        rating: 4.5,
        reviews: 7932,
        price: 9,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Thomas Jefferson: The Art of Power",
        author: "Jon Meacham",
        rating: 4.5,
        reviews: 1904,
        price: 23,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Three Cups of Tea: One Man's Mission to Promote Peace - One School at a Time",
        author: "Greg Mortenson",
        rating: 4.3,
        reviews: 3319,
        price: 11,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Three Cups of Tea: One Man's Mission to Promote Peace - One School at a Time",
        author: "Greg Mortenson",
        rating: 4.3,
        reviews: 3319,
        price: 11,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        author: "Thug Kitchen",
        rating: 4.6,
        reviews: 11128,
        price: 23,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        author: "Thug Kitchen",
        rating: 4.6,
        reviews: 11128,
        price: 23,
        year: 2015,
        genre: "Non Fiction"
    },
    {
        name: "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        author: "Thug Kitchen",
        rating: 4.6,
        reviews: 11128,
        price: 23,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck (Thug Kitchen Cookbooks)",
        author: "Thug Kitchen",
        rating: 4.6,
        reviews: 11128,
        price: 23,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Tina Fey: Bossypants",
        author: "Tina Fey",
        rating: 4.3,
        reviews: 5977,
        price: 12,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.8,
        reviews: 26234,
        price: 0,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.8,
        reviews: 26234,
        price: 0,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.8,
        reviews: 26234,
        price: 0,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.8,
        reviews: 26234,
        price: 0,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.8,
        reviews: 26234,
        price: 7,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers",
        author: "Timothy Ferriss",
        rating: 4.6,
        reviews: 4360,
        price: 21,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "Towers of Midnight (Wheel of Time, Book Thirteen)",
        author: "Robert Jordan",
        rating: 4.8,
        reviews: 2282,
        price: 21,
        year: 2010,
        genre: "Fiction"
    },
    {
        name: "True Compass: A Memoir",
        author: "Edward M. Kennedy",
        rating: 4.5,
        reviews: 438,
        price: 15,
        year: 2009,
        genre: "Non Fiction"
    },
    {
        name: "Twilight (The Twilight Saga, Book 1)",
        author: "Stephenie Meyer",
        rating: 4.7,
        reviews: 11676,
        price: 9,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Ultimate Sticker Book: Frozen: More Than 60 Reusable Full-Color Stickers",
        author: "DK",
        rating: 4.5,
        reviews: 2586,
        price: 5,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        rating: 4.8,
        reviews: 29673,
        price: 16,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        rating: 4.8,
        reviews: 29673,
        price: 16,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        rating: 4.8,
        reviews: 29673,
        price: 16,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        rating: 4.8,
        reviews: 29673,
        price: 13,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        author: "Laura Hillenbrand",
        rating: 4.8,
        reviews: 29673,
        price: 16,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "Under the Dome: A Novel",
        author: "Stephen King",
        rating: 4.3,
        reviews: 6740,
        price: 20,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Unfreedom of the Press",
        author: "Mark R. Levin",
        rating: 4.9,
        reviews: 5956,
        price: 11,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Unicorn Coloring Book: For Kids Ages 4-8 (US Edition) (Silly Bear Coloring Books)",
        author: "Silly Bear",
        rating: 4.8,
        reviews: 6108,
        price: 4,
        year: 2019,
        genre: "Non Fiction"
    },
    {
        name: "Uninvited: Living Loved When You Feel Less Than, Left Out, and Lonely",
        author: "Lysa TerKeurst",
        rating: 4.7,
        reviews: 4585,
        price: 9,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Watchmen",
        author: "Alan Moore",
        rating: 4.8,
        reviews: 3829,
        price: 42,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Water for Elephants: A Novel",
        author: "Sara Gruen",
        rating: 4.5,
        reviews: 8958,
        price: 12,
        year: 2011,
        genre: "Fiction"
    },
    {
        name: "What Happened",
        author: "Hillary Rodham Clinton",
        rating: 4.6,
        reviews: 5492,
        price: 18,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "What If?: Serious Scientific Answers to Absurd Hypothetical Questions",
        author: "Randall Munroe",
        rating: 4.7,
        reviews: 9292,
        price: 17,
        year: 2014,
        genre: "Non Fiction"
    },
    {
        name: "What Pet Should I Get? (Classic Seuss)",
        author: "Dr. Seuss",
        rating: 4.7,
        reviews: 1873,
        price: 14,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "What Should Danny Do? (The Power to Choose Series)",
        author: "Adir Levy",
        rating: 4.8,
        reviews: 8170,
        price: 13,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "What to Expect When You're Expecting",
        author: "Heidi Murkoff",
        rating: 4.4,
        reviews: 3341,
        price: 9,
        year: 2011,
        genre: "Non Fiction"
    },
    {
        name: "Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health",
        author: "William Davis",
        rating: 4.4,
        reviews: 7497,
        price: 6,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health",
        author: "William Davis",
        rating: 4.4,
        reviews: 7497,
        price: 6,
        year: 2013,
        genre: "Non Fiction"
    },
    {
        name: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        rating: 4.8,
        reviews: 13779,
        price: 14,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "Where the Crawdads Sing",
        author: "Delia Owens",
        rating: 4.8,
        reviews: 87841,
        price: 15,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "Where the Wild Things Are",
        author: "Maurice Sendak",
        rating: 4.8,
        reviews: 9967,
        price: 13,
        year: 2009,
        genre: "Fiction"
    },
    {
        name: "Whose Boat Is This Boat?: Comments That Don't Help in the Aftermath of a Hurricane",
        author: "The Staff of The Late Show with",
        rating: 4.6,
        reviews: 6669,
        price: 12,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "Wild: From Lost to Found on the Pacific Crest Trail",
        author: "Cheryl Strayed",
        rating: 4.4,
        reviews: 17044,
        price: 18,
        year: 2012,
        genre: "Non Fiction"
    },
    {
        name: "Winter of the World: Book Two of the Century Trilogy",
        author: "Ken Follett",
        rating: 4.5,
        reviews: 10760,
        price: 15,
        year: 2012,
        genre: "Fiction"
    },
    {
        name: "Women Food and God: An Unexpected Path to Almost Everything",
        author: "Geneen Roth",
        rating: 4.2,
        reviews: 1302,
        price: 11,
        year: 2010,
        genre: "Non Fiction"
    },
    {
        name: "Wonder",
        author: "R. J. Palacio",
        rating: 4.8,
        reviews: 21625,
        price: 9,
        year: 2013,
        genre: "Fiction"
    },
    {
        name: "Wonder",
        author: "R. J. Palacio",
        rating: 4.8,
        reviews: 21625,
        price: 9,
        year: 2014,
        genre: "Fiction"
    },
    {
        name: "Wonder",
        author: "R. J. Palacio",
        rating: 4.8,
        reviews: 21625,
        price: 9,
        year: 2015,
        genre: "Fiction"
    },
    {
        name: "Wonder",
        author: "R. J. Palacio",
        rating: 4.8,
        reviews: 21625,
        price: 9,
        year: 2016,
        genre: "Fiction"
    },
    {
        name: "Wonder",
        author: "R. J. Palacio",
        rating: 4.8,
        reviews: 21625,
        price: 9,
        year: 2017,
        genre: "Fiction"
    },
    {
        name: "Wrecking Ball (Diary of a Wimpy Kid Book 14)",
        author: "Jeff Kinney",
        rating: 4.9,
        reviews: 9413,
        price: 8,
        year: 2019,
        genre: "Fiction"
    },
    {
        name: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        rating: 4.7,
        reviews: 14331,
        price: 8,
        year: 2016,
        genre: "Non Fiction"
    },
    {
        name: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        rating: 4.7,
        reviews: 14331,
        price: 8,
        year: 2017,
        genre: "Non Fiction"
    },
    {
        name: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        rating: 4.7,
        reviews: 14331,
        price: 8,
        year: 2018,
        genre: "Non Fiction"
    },
    {
        name: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        rating: 4.7,
        reviews: 14331,
        price: 8,
        year: 2019,
        genre: "Non Fiction"
    }
]

export default bookList