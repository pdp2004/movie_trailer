import React, { useState } from "react";

const trailersData = {
    "Trending Trailers": [
        {
            id: 1,
            Title: "Avatar",
            Year: "2009",
            Rated: "PG-13",
            Released: "18 Dec 2009",
            Runtime: "162 min",
            Genre: "Action, Adventure, Fantasy",
            Director: "James Cameron",
            Writer: "James Cameron",
            Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            Language: "English, Spanish",
            Country: "USA, UK",
            Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
            Poster: "/assets/images/image7.jpg",
            Metascore: "83",
            imdbRating: "7.9",
            imdbVotes: "890,617",
            imdbID: "tt0499549",
            Type: "movie",
            Response: "True", // Replace with actual image paths
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 2,
            Title: "I Am Legend",
          Year: "2007",
          Rated: "PG-13",
          Released: "14 Dec 2007",
          Runtime: "101 min",
          Genre: "Drama, Horror, Sci-Fi",
          Director: "Francis Lawrence",
          Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
          Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
          Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
          Language: "English",
          Country: "USA",
          Awards: "9 wins & 21 nominations.",
          Poster: "/assets/images/image1.jpg",
          Metascore: "65",
          imdbRating: "7.2",
          imdbVotes: "533,874",
          imdbID: "tt0480249",
          "Type": "movie",
          "Response": "True",
          VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 3,
            Title: "300",
          Year: "2006",
          Rated: "R",
          Released: "09 Mar 2007",
          Runtime: "117 min",
          Genre: "Action, Drama, Fantasy",
          Director: "Zack Snyder",
          Writer: "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
          Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
          Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
          Language: "English",
          Country: "USA",
          Awards: "16 wins & 42 nominations.",
          Poster: "/assets/images/image2.jpg",
          Metascore: "52",
          imdbRating: "7.7",
          imdbVotes: "611,046",
          imdbID: "tt0416449",
          "Type": "movie",
          "Response": "True",
          VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 4,
            Title: "The Avengers",
          Year: "2012",
          Rated: "PG-13",
          Released: "04 May 2012",
          Runtime: "143 min",
          Genre: "Action, Sci-Fi, Thriller",
          Director: "Joss Whedon",
          Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
          Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
          Language: "English, Russian",
          Country: "USA",
          Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
          Poster: "/assets/images/image3.jpg",
          Metascore: "69",
          imdbRating: "8.1",
          imdbVotes: "1,003,301",
          imdbID: "tt0848228",
          "Type": "movie",
          "Response": "True",
          VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 5,
            Title: "The Wolf of Wall Street",
            Year: "2013",
            Rated: "R",
            Released: "25 Dec 2013",
            Runtime: "180 min",
            Genre: "Biography, Comedy, Crime",
            Director: "Martin Scorsese",
            Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
            Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
            Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
            Language: "English, French",
            Country: "USA",
            Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
            Poster: "/assets/images/image4.jpg",
            Metascore: "75",
            imdbRating: "8.2",
            imdbVotes: "786,985",
            imdbID: "tt0993846",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 6,
            Title: "Interstellar",
          Year: "2014",
          Rated: "PG-13",
          Released: "07 Nov 2014",
          Runtime: "169 min",
          Genre: "Adventure, Drama, Sci-Fi",
          Director: "Christopher Nolan",
          Writer: "Jonathan Nolan, Christopher Nolan",
          Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
          Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          Language: "English",
          Country: "USA, UK",
          Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
          Poster: "/assets/images/image5.jpg",
          Metascore: "74",
          imdbRating: "8.6",
          imdbVotes: "937,412",
          imdbID: "tt0816692",
          "Type": "movie",
          "Response": "True",
          VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },{
            id: 7,
            Title: "Game of Thrones",
            Year: "2011–",
            Rated: "TV-MA",
            Released: "17 Apr 2011",
            Runtime: "56 min",
            Genre: "Adventure, Drama, Fantasy",
            Director: "N/A",
            Writer: "David Benioff, D.B. Weiss",
            Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
            Plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
            Language: "English",
            Country: "USA, UK",
            Awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
            Poster: "/assets/images/image6.jpg",
            Metascore: "N/A",
            imdbRating: "9.5",
            imdbVotes: "1,046,830",
            imdbID: "tt0944947",
            "Type": "series",
            "totalSeasons": "7",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 8,
            Title: "Vikings",
            Year: "2013–",
            Rated: "TV-14",
            Released: "03 Mar 2013",
            Runtime: "44 min",
            Genre: "Action, Drama, History",
            Director: "N/A",
            Writer: "Michael Hirst",
            Actors: "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
            Plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
            Language: "English, Old English, Norse, Old, Latin",
            Country: "Ireland, Canada",
            Awards: "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
            Poster: "/assets/images/image.jpg",
            Metascore: "N/A",
            imdbRating: "8.6",
            imdbVotes: "198,041",
            imdbID: "tt2306299",
            "Type": "series",
            "totalSeasons": "5",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 9,
            Title: "Gotham",
            Year: "2014–",
            Rated: "TV-14",
            Released: "01 Aug 2014",
            Runtime: "42 min",
            Genre: "Action, Crime, Drama",
            Director: "N/A",
            Writer: "Bruno Heller",
            Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
            Plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
            Language: "English",
            Country: "USA",
            Awards: "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
            Poster: "/assets/images/image7.jpg",
            Metascore: "N/A",
            imdbRating: "8.0",
            imdbVotes: "133,375",
            imdbID: "tt3749900",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 10,
            Title: "Power",
            Year: "2014–",
            Rated: "TV-MA",
            Released: "N/A",
            Runtime: "50 min",
            Genre: "Crime, Drama",
            Director: "N/A",
            Writer: "Courtney Kemp Agboh",
            Actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
            Plot: "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
            Language: "English",
            Country: "USA",
            Awards: "1 win & 6 nominations.",
            Poster: "/assets/images/image.jpg",
            Metascore: "N/A",
            imdbRating: "8.0",
            imdbVotes: "14,770",
            imdbID: "tt3281796",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 11,
            Title: "Narcos",
            Year: "2015–",
            Rated: "TV-MA",
            Released: "28 Aug 2015",
            Runtime: "49 min",
            Genre: "Biography, Crime, Drama",
            Director: "N/A",
            Writer: "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
            Actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
            Plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
            Language: "English, Spanish",
            Country: "USA",
            Awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
            Poster: "/assets/images/image7.jpg",
            Metascore: "N/A",
            imdbRating: "8.9",
            imdbVotes: "118,680",
            imdbID: "tt2707408",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 12,
            Title: "Breaking Bad",
            Year: "2008–2013",
            Rated: "TV-14",
            Released: "20 Jan 2008",
            Runtime: "49 min",
            Genre: "Crime, Drama, Thriller",
            Director: "N/A",
            Writer: "Vince Gilligan",
            Actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
            Plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
            Language: "English, Spanish",
            Country: "USA",
            Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
            Poster: "/assets/images/image4.jpg",
            Metascore: "N/A",
            imdbRating: "9.5",
            imdbVotes: "889,883",
            imdbID: "tt0903747",
            "Type": "series",
            "totalSeasons": "5",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 13,
            ComingSoon: true,
            Title: "Doctor Strange",
            Year: "2016",
            Rated: "N/A",
            Released: "04 Nov 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Fantasy",
            Director: "Scott Derrickson",
            Writer: "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
            Actors: "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
            Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
            Language: "English",
            Country: "USA",
            Awards: "N/A",
            Poster: "/assets/images/image2.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt1211837",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 14,
            ComingSoon: true,
            Title: "Rogue One: A Star Wars Story",
            Year: "2016",
            Rated: "N/A",
            Released: "16 Dec 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Sci-Fi",
            Director: "Gareth Edwards",
            Writer: "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
            Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
            Plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
            Language: "English",
            Country: "USA",
            Awards: "1 nomination.",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt3748528",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 15,
            ComingSoon: true,
            Title: "Assassin's Creed",
            Year: "2016",
            Rated: "N/A",
            Released: "21 Dec 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Fantasy",
            Director: "Justin Kurzel",
            Writer: "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
            Actors: "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
            Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
            Language: "English",
            Country: "UK, France, USA, Hong Kong",
            Awards: "N/A",
            Poster: "/assets/images/image.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt2094766",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 16,
            ComingSoon: true,
            Title: "Luke Cage",
            Year: "2016–",
            Rated: "TV-MA",
            Released: "30 Sep 2016",
            Runtime: "55 min",
            Genre: "Action, Crime, Drama",
            Director: "N/A",
            Writer: "Cheo Hodari Coker",
            Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
            Plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
            Language: "English",
            Country: "USA",
            Awards: "N/A",
            Poster: "/assets/images/image6.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt3322314",
            "Type": "series",
            "totalSeasons": "1",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          }
        // Other trending trailers...
    ],
    "Most Anticipated": [
        {
            id: 2,
            Title: "I Am Legend",
            Year: "2007",
            Rated: "PG-13",
            Released: "14 Dec 2007",
            Runtime: "101 min",
            Genre: "Drama, Horror, Sci-Fi",
            Director: "Francis Lawrence",
            Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
            Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
            Plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            Language: "English",
            Country: "USA",
            Awards: "9 wins & 21 nominations.",
            Poster: "/assets/images/image1.jpg",
            Metascore: "65",
            imdbRating: "7.2",
            imdbVotes: "533,874",
            imdbID: "tt0480249",
            Type: "movie",
            Response: "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 3,
            Title: "300",
          Year: "2006",
          Rated: "R",
          Released: "09 Mar 2007",
          Runtime: "117 min",
          Genre: "Action, Drama, Fantasy",
          Director: "Zack Snyder",
          Writer: "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
          Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
          Plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
          Language: "English",
          Country: "USA",
          Awards: "16 wins & 42 nominations.",
          Poster: "/assets/images/image2.jpg",
          Metascore: "52",
          imdbRating: "7.7",
          imdbVotes: "611,046",
          imdbID: "tt0416449",
          "Type": "movie",
          "Response": "True",
          VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 6,
        Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
      Poster: "/assets/images/image5.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "937,412",
      imdbID: "tt0816692",
      "Type": "movie",
      "Response": "True",
      VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
        },
        {
            id: 9,
            Title: "Gotham",
            Year: "2014–",
            Rated: "TV-14",
            Released: "01 Aug 2014",
            Runtime: "42 min",
            Genre: "Action, Crime, Drama",
            Director: "N/A",
            Writer: "Bruno Heller",
            Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
            Plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
            Language: "English",
            Country: "USA",
            Awards: "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
            Poster: "/assets/images/image7.jpg",
            Metascore: "N/A",
            imdbRating: "8.0",
            imdbVotes: "133,375",
            imdbID: "tt3749900",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
        // Other most popular trailers...
    ],
    "Most Popular": [
        {
            id: 10,
            Title: "Power",
            Year: "2014–",
            Rated: "TV-MA",
            Released: "N/A",
            Runtime: "50 min",
            Genre: "Crime, Drama",
            Director: "N/A",
            Writer: "Courtney Kemp Agboh",
            Actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
            Plot: "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
            Language: "English",
            Country: "USA",
            Awards: "1 win & 6 nominations.",
            Poster: "/assets/images/image.jpg",
            Metascore: "N/A",
            imdbRating: "8.0",
            imdbVotes: "14,770",
            imdbID: "tt3281796",
            "Type": "series",
            "totalSeasons": "3",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 11,
            Title: "Narcos",
            Year: "2015–",
            Rated: "TV-MA",
            Released: "28 Aug 2015",
            Runtime: "49 min",
            Genre: "Biography, Crime, Drama",
            Director: "N/A",
            Writer: "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
            Actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
            Plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
            Language: "English, Spanish",
            Country: "USA",
            Awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
            Poster: "/assets/images/image7.jpg",
            Metascore: "N/A",
            imdbRating: "8.9",
            imdbVotes: "118,680",
            imdbID: "tt2707408",
            "Type": "series",
            "totalSeasons": "2",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
        // Other most anticipated trailers...
    ],
    "Recently Added": [
        {
            id: 12,
            Title: "Breaking Bad",
            Year: "2008–2013",
            Rated: "TV-14",
            Released: "20 Jan 2008",
            Runtime: "49 min",
            Genre: "Crime, Drama, Thriller",
            Director: "N/A",
            Writer: "Vince Gilligan",
            Actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
            Plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
            Language: "English, Spanish",
            Country: "USA",
            Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
            Poster: "/assets/images/image4.jpg",
            Metascore: "N/A",
            imdbRating: "9.5",
            imdbVotes: "889,883",
            imdbID: "tt0903747",
            "Type": "series",
            "totalSeasons": "5",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 13,
            ComingSoon: true,
            Title: "Doctor Strange",
            Year: "2016",
            Rated: "N/A",
            Released: "04 Nov 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Fantasy",
            Director: "Scott Derrickson",
            Writer: "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
            Actors: "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
            Plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
            Language: "English",
            Country: "USA",
            Awards: "N/A",
            Poster: "/assets/images/image2.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt1211837",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 14,
            ComingSoon: true,
            Title: "Rogue One: A Star Wars Story",
            Year: "2016",
            Rated: "N/A",
            Released: "16 Dec 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Sci-Fi",
            Director: "Gareth Edwards",
            Writer: "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
            Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
            Plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
            Language: "English",
            Country: "USA",
            Awards: "1 nomination.",
            Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt3748528",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 15,
            ComingSoon: true,
            Title: "Assassin's Creed",
            Year: "2016",
            Rated: "N/A",
            Released: "21 Dec 2016",
            Runtime: "N/A",
            Genre: "Action, Adventure, Fantasy",
            Director: "Justin Kurzel",
            Writer: "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
            Actors: "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
            Plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
            Language: "English",
            Country: "UK, France, USA, Hong Kong",
            Awards: "N/A",
            Poster: "/assets/images/image.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt2094766",
            "Type": "movie",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
          {
            id: 16,
            ComingSoon: true,
            Title: "Luke Cage",
            Year: "2016–",
            Rated: "TV-MA",
            Released: "30 Sep 2016",
            Runtime: "55 min",
            Genre: "Action, Crime, Drama",
            Director: "N/A",
            Writer: "Cheo Hodari Coker",
            Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
            Plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
            Language: "English",
            Country: "USA",
            Awards: "N/A",
            Poster: "/assets/images/image6.jpg",
            Metascore: "N/A",
            imdbRating: "N/A",
            imdbVotes: "N/A",
            imdbID: "tt3322314",
            "Type": "series",
            "totalSeasons": "1",
            "Response": "True",
            VideoUrl: "https://youtu.be/l3_NRFKNAGg?si=7_620SmqojFXnXoz"
          },
        // Other recently added trailers...
    ]
};

function App() {
    const [activeTab, setActiveTab] = useState("Trending Trailers");
    const [searchQuery, setSearchQuery] = useState("");
    const [playingTrailer, setPlayingTrailer] = useState(null); // Store which trailer is playing

    const tabs = ["Trending Trailers", "Most Anticipated", "Most Popular", "Recently Added"];

    // Filter trailers based on search query
    const filteredTrailers = trailersData[activeTab].filter((trailer) =>
        trailer.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePlay = (id) => {
        if (playingTrailer === id) {
            setPlayingTrailer(null); // If the same trailer is clicked again, stop playing
        } else {
            setPlayingTrailer(id); // Play the clicked trailer
        }
    };

    return (
        <div className="app">
            <div className="navbar">
                {/* Logo */}
                <div className="logo">
                    <span className="imdb-logo">Pdp</span>
                </div>

                {/* Menu */}
                <div className="menu">
                    <button className="menu-button"><i className="bi bi-list"></i>Menu</button>
                </div>

                {/* Search Box */}
                <div className="search-box">
                    <select className="dropdown">
                        <option>All</option>
                        <option>Titles</option>
                        <option>TV Episodes</option>
                        <option>Celebs</option>
                        <option>Companies</option>
                        <option>Keywords</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search  Pdp"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button className="search-icon"><i className="bi bi-search"></i></button>
                </div>

                {/* Other Options */}
                <div className="options">
                    <span className="imdb-pro">Pdp<span className="pro">Pro</span></span>
                    <button className="watchlist">Watchlist</button>
                    <button className="sign-in">Sign In</button>
                    <select className="language-dropdown">
                        <option>EN</option>
                    </select>
                </div>
            </div>
            <header className="header">
                <h1><b>Watch New Movie & TV Trailers</b></h1>

                <nav className="tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={activeTab === tab ? "active-tab" : ""}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </header>

            <main className="trailers-container">
                {filteredTrailers.map((trailer) => (
                    <div key={trailer.id} className="trailer-card">
                        {/* Poster Image with Play Button */}
                        <div className="poster-container">
                            {playingTrailer === trailer.id ? (
                                <iframe
                                    width="100%"
                                    height="300"
                                    src={trailer.VideoUrl}
                                    title={trailer.Title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : trailer.Poster ? (
                                <img src={trailer.Poster} alt={trailer.Title} className="trailer-image" />
                            ) : (
                                <div className="no-image">No Image Available</div> // Fallback if no poster
                            )}
                            <button
                                className="play-button"
                                onClick={() => handlePlay(trailer.id)}
                            >
                                {playingTrailer === trailer.id ? "Pause" : "Play"}
                            </button>
                        </div>
                        <div className="trailer-info">
                            <p className="trailer-title">{trailer.Title}</p>
                            <p className="trailer-duration">{trailer.Runtime}</p>
                            <p className="trailer-year">{trailer.Year}</p>
                            <p className="trailer-language">{trailer.Language} , {trailer.Country}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;
