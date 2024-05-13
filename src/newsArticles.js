const newsArticles = [
    {
        title: 'Top News',
        id: 1,
        articles: [
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Priscilla Alvarez and Zachary Cohen, CNN",
                "title": "DHS watchdog says Trump's agency appears to have altered report on Russian interference in 2020 election in part because of politics",
                "description": "Former President Donald Trump's Department of Homeland Security delayed and altered an intelligence report related to Russian interference in the 2020 election, making changes that \"appear to be based in part on political considerations,\" according to a newly…",
                "url": "https://www.cnn.com/2022/05/03/politics/donald-trump-russian-interference-election-politics/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503184104-01-homeland-security-super-tease.jpg",
                "publishedAt": "2022-05-04T00:12:16Z",
                "content": "Washington (CNN)Former President Donald Trump's Department of Homeland Security delayed and altered an intelligence report related to Russian interference in the 2020 election, making changes that \"a… [+4687 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Amanda Musa, CNN",
                "title": "The body of a missing 15-year-old boy was recovered from the Mississippi River",
                "description": "The body of a 15-year-old boy was recovered from the Mississippi River on Monday, New Orleans Mayor LaToya Cantrell said in a statement Monday.",
                "url": "https://www.cnn.com/2022/05/03/us/mississippi-river-body-teen-boy-identified/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503172720-new-orleans-body-found-super-tease.jpg",
                "publishedAt": "2022-05-04T00:48:42Z",
                "content": "(CNN)The body of a 15-year-old boy was recovered from the Mississippi River on Monday, New Orleans Mayor LaToya Cantrell said in a statement Monday.\r\nThe mayor's announcement came a week after the Co… [+1326 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Andy Rose, CNN",
                "title": "Missouri executes man convicted of murdering and robbing an elderly couple in 1996",
                "description": "Carman Deck, who was condemned to death following a double murder conviction and three trials, was executed Tuesday evening in Bonne Terre, Missouri, by lethal injection.",
                "url": "https://www.cnn.com/2022/05/03/us/carman-deck-missouri-execution/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503202911-01-carman-deck-missouri-execution-super-tease.jpg",
                "publishedAt": "2022-05-04T01:08:56Z",
                "content": "(CNN)Carman Deck, who was condemned to death following a double murder conviction and three trials, was executed Tuesday evening in Bonne Terre, Missouri, by lethal injection.\r\nDeck was accused of fa… [+2221 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Story by Nell Lewis; video by Hazel Pfeifer, CNN",
                "title": "'Babysitting' the next generation of New Zealand's endangered sea lions",
                "description": "Sea lions are making a comeback on New Zealand's mainland, but they need protection to safeguard their future.",
                "url": "https://www.cnn.com/travel/article/new-zealand-sea-lion-babysitters-c2e-spc-intl/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220418144849-sea-lion-sofa-card-super-tease.jpg",
                "publishedAt": "2022-05-04T01:58:47Z",
                "content": "(CNN) Like many teenagers, Hannah Yeardley, a 17-year-old living in Dunedin, New Zealand, babysits in her spare time. The only difference is that it's not children she's looking after, it's sea lion … [+5927 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Francesca Street, CNN",
                "title": "Stay in a sumptuous room inside the Moulin Rouge",
                "description": "Sitting atop one of the world's most famous nightclubs is a scarlet red windmill. And inside the windmill lies a secret room, hitherto unseen by the public.",
                "url": "https://www.cnn.com/travel/article/moulin-rouge-airbnb-windmill/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503114528-01-moulin-airbnb-extra-super-tease.jpg",
                "publishedAt": "2022-05-04T02:18:58Z",
                "content": "(CNN) Sitting atop one of the world's most famous nightclubs is a scarlet red windmill. And inside the windmill lies a secret room, hitherto unseen by the public.\r\nNext month, a select number of trav… [+2506 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Brad Lendon and Gawon Bae, CNN",
                "title": "North Korea launches suspected ballistic missile, Japan says",
                "description": "North Korea fired a possible ballistic missile on Wednesday, the Japanese Prime Minister's office said in a tweet.",
                "url": "https://www.cnn.com/2022/05/03/asia/north-korea-missile-launch-intl-hnk-ml/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/150325082132-social-gfx-breaking-news-super-tease.jpg",
                "publishedAt": "2022-05-04T03:52:50Z",
                "content": "Seoul, South Korea (CNN)North Korea fired a possible ballistic missile on Wednesday, the Japanese Prime Minister's office said in a tweet.\r\nThe South Korean Joint Chiefs of Staff said North Korea fir… [+144 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Stephen Collinson",
                "title": "Supreme Court's draft opinion sends electric shock through midterm campaigns",
                "description": "The October surprise may have arrived in early May.",
                "url": "https://www.cnn.com/2022/05/04/politics/supreme-court-draft-opinion-midterm-shock/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220503195117-outside-supreme-court-0503.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-05-04T04:04:19Z",
                "content": "The October surprise may have arrived in early May.\r\nThe seismic revelation that the conservative majority on the Supreme Court appears ready to overturn nearly a half century-long constitutional rig… [+9161 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Eric Bradner, Dan Merica and Gregory Krieg, CNN",
                "title": "6 takeaways from Ohio and Indiana primaries",
                "description": "Ohio's Republican Senate primary was the first major midterm test of former President Donald Trump's enduring influence over the Republican Party -- and Trump's candidate won.",
                "url": "https://www.cnn.com/2022/05/04/politics/ohio-indiana-primary-takeaways/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503225138-06-jd-vance-ohio-wins-050322-super-tease.jpg",
                "publishedAt": "2022-05-04T04:08:55Z",
                "content": "(CNN)Ohio's Republican Senate primary was the first major midterm test of former President Donald Trump's enduring influence over the Republican Party -- and Trump's candidate won.\r\nJ.D. Vance, the v… [+8447 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Sean Lyngaas, CNN",
                "title": "Chinese hackers cast wide net for trade secrets in US, Europe and Asia, researchers say",
                "description": "Chinese government-linked hackers have tried to steal sensitive data from some three dozen manufacturing and technology firms in the US, Europe and Asia, security researchers said Wednesday, in findings that shed new light on Beijing's alleged use of hacking …",
                "url": "https://www.cnn.com/2022/05/04/politics/china-hackers-economic-espionage-manufacturing/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210713153708-01-computer-hacking-stock-super-tease.jpg",
                "publishedAt": "2022-05-04T04:14:55Z",
                "content": "(CNN)Chinese government-linked hackers have tried to steal sensitive data from some three dozen manufacturing and technology firms in the US, Europe and Asia, security researchers said Wednesday, in … [+3797 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "By Seán Federico-O'Murchú, <a href=\"/profiles/brad-lendon\">Brad Lendon</a> and <a href=\"/profiles/andrew-raine\">Andrew Raine</a>, CNN",
                "title": "Russia's war in Ukraine",
                "description": "More than 150 people evacuated from the besieged city of Mariupol arrived in the city of Zaporizhzhia, President Volodymyr Zelensky said Tuesday night, while another government official said four more evacuation corridors were planned for Wednesday. Follow he…",
                "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-04-22/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503145430-zaporizhzhia-refugees-050322-super-tease.jpg",
                "publishedAt": "2022-05-04T04:16:33Z",
                "content": "Russian forces launched attacks on several targets that appear related to the transport of military equipment in Ukraine. They included three railway power substations damaged by missile strikes in t… [+3835 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Ivana Kottasová, CNN",
                "title": "There is still much stigma around the condition that cost this woman and her son their lives",
                "description": "Here is what to do when you or someone you know might be at risk of suicide.",
                "url": "https://www.cnn.com/2022/05/04/uk/as-equals-post-partum-depression-intl-cmd/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220429083618-01-as-equals-maternal-mental-health-top-super-tease.jpg",
                "publishedAt": "2022-05-04T05:03:28Z",
                "content": "The Expert View: According to Raines, as many as 80% of all new mothers experience \"baby blues\": temporary bouts of anxiety, tearfulness or low mood in the first weeks after giving birth, explaining … [+466 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Luke McGee",
                "title": "Boris Johnson faces his first serious electoral test since his reputation hit rock bottom",
                "description": "Ever since the \"Partygate\" scandal rocked Boris Johnson's premiership at the end of last year, the British Prime Minister has repeatedly dodged questions about his future by asserting that what the public wants is for politicians to get on with running the co…",
                "url": "https://www.cnn.com/2022/05/04/world/boris-johnson-electoral-test-analysis-intl-cmd/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220412085815-boris-johnson-0407.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-05-04T06:35:35Z",
                "content": "Ever since the Partygate scandal rocked Boris Johnsons premiership at the end of last year, the British Prime Minister has repeatedly dodged questions about his future by asserting that what the publ… [+7986 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Elizabeth Wolfe and Amara Walker, CNN",
                "title": "New details emerge about the relationship between an Alabama inmate and corrections officer as search for them continues",
                "description": "As the search continues for a fugitive inmate and Alabama corrections officer accused of helping him escape, new details are emerging about the pair's relationship and the officer's apparent preparations for their getaway.",
                "url": "https://www.cnn.com/2022/05/04/us/alabama-vicky-white-casey-white-search-wednesday/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220501071557-vicki-white-casey-white-super-tease.jpg",
                "publishedAt": "2022-05-04T07:53:07Z",
                "content": "(CNN)As the search continues for a fugitive inmate and Alabama corrections officer accused of helping him escape, new details are emerging about the pair's relationship and the officer's apparent pre… [+5962 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Leanne Brown, CNN",
                "title": "Fast White Bean, Chorizo and Hearty Greens Stew",
                "description": "Fast White Bean, Chorizo and Hearty Greens Stew is made of pantry staples, comes together quickly, and makes a delicious and nourishing meal.",
                "url": "https://www.cnn.com/2022/05/04/health/bean-chorizo-stew-recipe-wellness/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220429133432-bean-chorizo-stew-recipe-wellness-super-tease.jpg",
                "publishedAt": "2022-05-04T08:10:09Z",
                "content": "This recipe is featured in the CNN story \"Feeling cooking burnout? Let yourself off the hook with these 'good enough' strategies.\" Leanne Brown is the author of \"Good Enough: A Cookbook.\"\r\n (CNN)It h… [+2559 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Leanne Brown, CNN",
                "title": "Cauliflower-Cheese Pita Sandwich",
                "description": "The Cauliflower-Cheese Pita Sandwich makes for a filling lunch, with its crispy and vibrant, mustardy cauliflower and gooey cheese and spinach.",
                "url": "https://www.cnn.com/2022/05/04/health/cauliflower-cheese-pita-sandwich-recipe-wellness/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220429134037-cauliflower-cheese-pita-sandwich-recipe-wellness-super-tease.jpg",
                "publishedAt": "2022-05-04T08:10:23Z",
                "content": "This recipe is featured in the CNN story \"Feeling cooking burnout? Let yourself off the hook with these 'good enough' strategies.\" Leanne Brown is the author of \"Good Enough: A Cookbook.\"\r\n (CNN)I fi… [+871 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Casey Barber, CNN",
                "title": "Feeling cooking burnout? Let yourself off the hook with these 'good enough' strategies",
                "description": "Instead of beating ourselves up over what we think a \"good cook\" should be, cookbook author Leanne Brown encourages us to think of what is \"good enough\" and reframe our approach to the process of cooking with a few mental shifts and tactics.",
                "url": "https://www.cnn.com/2022/05/04/health/cooking-tips-good-enough-recipes-wellness/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220429132354-01-good-enough-recipes-wellness-stock-super-tease.jpg",
                "publishedAt": "2022-05-04T08:13:34Z",
                "content": "(CNN)It has been a long two years in the kitchen. Whether you were an enthusiastic home cook or a reluctant one, the pandemic has made everyone burned out by the act of cooking. It's also made us rea… [+6970 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Nectar Gan, CNN",
                "title": "A Chinese man surnamed 'Ma' was detained. The news wiped off $26 billion from Alibaba's stock",
                "description": "For Chinese tech tycoon Jack Ma, there's a price to freedom: $26 billion.",
                "url": "https://www.cnn.com/2022/05/04/business/china-jack-ma-rumor-detention-intl-hnk/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504035829-jack-ma-alibaba-file-05162019-super-tease.jpg",
                "publishedAt": "2022-05-04T08:45:57Z",
                "content": "A version of this story appeared in CNN's Meanwhile in China newsletter, a three-times-a-week update exploring what you need to know about the country's rise and how it impacts the world. Sign up her… [+5686 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Virginia Langmaid",
                "title": "Fewer than 1 in 5 US parents say they'll get Covid-19 vaccines for kids under 5 as soon as they can, survey finds",
                "description": "US children under 5 are getting closer to authorized Covid-19 vaccines, but most parents may be reluctant to actually get them when they become available, a new survey found.",
                "url": "https://www.cnn.com/2022/05/04/health/kff-vaccine-monitor-survey/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210920145813-pfizer-vaccine-file.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2022-05-04T09:01:59Z",
                "content": "US children under 5 are getting closer to authorized Covid-19 vaccines, but most parents may be reluctant to actually get them when they become available, a new survey found.\r\nAccording to the Kaiser… [+2133 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Kate Sullivan, CNN",
                "title": "White House will host first food insecurity conference in 50 years",
                "description": "President Joe Biden will convene a White House conference in September focused on ending hunger and improving nutrition across the nation, a White House official told CNN, as the US sees higher rates of food insecurity amid the coronavirus pandemic.",
                "url": "https://www.cnn.com/2022/05/04/politics/white-house-conference-food-insecurity-jose-andres/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/180515120442-white-house-exterior-05-13-2018-super-tease.jpg",
                "publishedAt": "2022-05-04T09:06:33Z",
                "content": "(CNN)President Joe Biden will convene a White House conference in September focused on ending hunger and improving nutrition across the nation, a White House official told CNN, as the US sees higher … [+3973 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Laura He, CNN Business",
                "title": "China market analyst quits after his social media accounts were frozen",
                "description": "Hong Hao, a prominent market analyst in China, has left the state-owned bank he worked for just days after his social media accounts were shut down following downbeat remarks he made about the economy.",
                "url": "https://www.cnn.com/2022/05/04/investing/hong-hao-resign-bocom-international-intl-hnk/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504053029-02-hao-hong-file-12062017-super-tease.jpg",
                "publishedAt": "2022-05-04T09:59:40Z",
                "content": "Hong Kong (CNN Business)Hong Hao, a prominent market analyst in China, has left the state-owned bank he worked for just days after his social media accounts were shut down following downbeat remarks … [+646 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Delia Gallagher, CNN",
                "title": "Pope Francis slams pro-war Russian patriarch: Don't be 'Putin's altar boy'",
                "description": "Pope Francis warned the leader of the Russian Orthodox Church, Patriarch Kirill, not to become \"Putin's altar boy,\" he said in an interview this week.",
                "url": "https://www.cnn.com/2022/05/04/europe/pope-francis-patriarch-kirill-ukraine-invasion-intl/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220314184451-patriarch-kirill-file-010622-super-tease.jpg",
                "publishedAt": "2022-05-04T10:15:08Z",
                "content": "Rome (CNN)Pope Francis warned the leader of the Russian Orthodox Church, Patriarch Kirill, not to become \"Putin's altar boy,\" he said in an interview this week. \r\nIn his strongest words to date again… [+591 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Anneken Tappe, CNN Business",
                "title": "The Fed is about to make history again",
                "description": "All eyes are on the Federal Reserve Wednesday as the central bank wraps up its latest policy meeting and is expected to raise interest rates by a half-percentage point.",
                "url": "https://www.cnn.com/2022/05/04/economy/federal-reserve-interest-rate-hike/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220502215411-02-jerome-powell-0321-restricted-super-tease.jpg",
                "publishedAt": "2022-05-04T10:21:42Z",
                "content": "New York (CNN Business)All eyes will be on the Federal Reserve Wednesday as it wraps up a crucial policy meeting in Washington, DC, the outcome of which will have repercussions for millions of Americ… [+993 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Laura He, CNN Business",
                "title": "Warren Buffett-backed BYD shrugs off China's lockdowns",
                "description": "BYD, the Warren Buffett-backed Chinese electric vehicle maker, had a bumper month in the world's largest car market, despite strict Covid lockdowns that have disrupted production and sales for many of its major rivals.",
                "url": "https://www.cnn.com/2022/05/04/business/byd-china-ev-boom-covid-lockdowns-intl-hnk/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504040805-byd-0316-super-tease.jpg",
                "publishedAt": "2022-05-04T10:46:31Z",
                "content": "Hong Kong (CNN Business)BYD, the Warren Buffett-backed Chinese electric vehiclemaker, had a bumper month in the world's largest car market, despitestrict Covid lockdowns that have disrupted productio… [+2497 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Nick Valencia, CNN",
                "title": "Louisiana lawmakers and former state police leader at odds over cooperation in Ronald Greene death probe",
                "description": "A special legislative committee investigating the 2019 death of Ronald Greene in police custody is seeking to hold the former head of Louisiana State Police in contempt for allegedly failing to cooperate with a subpoena for journals he kept during his tenure,…",
                "url": "https://www.cnn.com/2022/05/04/us/ronald-greene-investigation-subpoena/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503224533-kevin-reeves-2017-file-super-tease.jpg",
                "publishedAt": "2022-05-04T10:46:56Z",
                "content": "(CNN)A special legislative committee investigating the 2019 death of Ronald Greene in police custody is seeking to hold the former head of Louisiana State Police in contempt for allegedly failing to … [+4094 chars]"
            },
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "By CNN Business",
                "title": "Stocks rise ahead of expected Fed rate hike",
                "description": "Here's the latest news on what stocks are doing.",
                "url": "https://www.cnn.com/business/live-news/stock-market-news-fed-rate/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220429155452-nyse-042822-super-tease.jpg",
                "publishedAt": "2022-05-04T10:48:24Z",
                "content": "The European Union is proposing to ban all oil imports from Russia by the end of the year and remove the country's biggest bank, Sberbank, from the SWIFT international payments network.\r\nEuropean Com… [+610 chars]"
            },
        ],
        imageURL: '',
    },
    {
        title: 'General',
        id: 2,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "CNBCTV18"
                },
                "author": "CNBCTV18.com",
                "title": "Stock Market Live News Updates: Sensex live today Nifty50 live today Nestle HCL Tech Larsen Toubro Tech Russia - CNBCTV18",
                "description": "Stock Market Highlights: Indian equity benchmarks BSE Sensex and NSE Nifty50 continued to rise for a second straight day on Thursday led by gains across IT stocks and heavyweights Reliance Industries, Infosys and the HDFC twins. Broader markets also strengthe…",
                "url": "https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-nifty50-bse-sensex-hcl-tech-nestle-lt-tech-tata-elxsi-brent-crude-bitcoin-gold-price-13222162.htm",
                "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg",
                "publishedAt": "2022-04-21T12:17:49Z",
                "content": "Why Saurabh Mukherjea likes HDFC Bank \r\nSaurabh Mukherjea, Founder at Marcellus Investment Managers, says in an interview to CNBC-TV18 that HDFC Bank's delivery over the past three, five, 10 or even … [+1086 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Sachin Pilot Meets Sonia Gandhi Over His Future Role In Congress: Sources - NDTV",
                "description": "Rajasthan Congress leader Sachin Pilot met with Sonia Gandhi today amid reports that he has expressed his fervent wish to become Chief Minister.",
                "url": "https://www.ndtv.com/india-news/sachin-pilot-meets-sonia-gandhi-over-his-future-role-in-congress-sources-2907424",
                "urlToImage": "https://c.ndtvimg.com/2021-10/an9r19h4_sachin-pilot-pti-photo_625x300_06_October_21.jpg",
                "publishedAt": "2022-04-21T12:03:22Z",
                "content": "The political call on Sonia Gandhi's role will be taken by Sonia Gandhi. (FILE)\r\nNew Delhi: Rajasthan Congress leader Sachin Pilot met with Sonia Gandhi today amid reports that he has expressed his f… [+1845 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Long Covid More Severe In Women Than Men, Suggests Study - Mint",
                "description": "The study found that 91% of patients, who were followed up for five months on average, continued to experience Covid-19 symptoms. Breathlessness was the most common symptom of long Covid-19, followed by fatigue",
                "url": "https://www.livemint.com/news/india/long-covid-more-severe-in-women-than-men-suggests-study-11650538683775.html",
                "urlToImage": "https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg",
                "publishedAt": "2022-04-21T11:37:19Z",
                "content": "Post-coronavirus complications, also called long Covid syndrome, induce more symptoms in women than men, a new study has found. \r\nThe new research, published in the Journal of Women's Health, reveale… [+2402 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "CDC confirms 4 Americans got Coronavirus from Mink; here is all you need to know about the first animal-to-human transmission of COVID virus - Times of India",
                "description": "The US health agency recently revealed that a variant of COVID witnessed majorly in mink in 2020 had infected at least four Americans.",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/cdc-confirms-4-americans-got-coronavirus-from-mink-here-is-all-you-need-to-know-about-the-first-animal-to-human-transmission-of-covid-virus/photostory/90979229.cms",
                "urlToImage": "https://static.toiimg.com/photo/90979239.cms",
                "publishedAt": "2022-04-21T10:45:00Z",
                "content": "COVID-19 causing coronavirus belongs to a large family of viruses called coronavirus. As per the information available on the website of the CDC, some coronaviruses cause cold-like illnesses in peopl… [+728 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Tech Desk",
                "title": "Apple MagSafe Battery Pack Will Now Charge Your iPhone Faster: Here’s How - News18",
                "description": "Apple is offering its new firmware update for the MagSafe accessory that promises to give you faster charging for the compatible iPhone models.",
                "url": "https://www.news18.com/news/tech/apple-magsafe-battery-pack-will-now-charge-your-iphone-faster-heres-how-5026621.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/04/apple-iphone-magsafe-battery-165053750816x9.jpg",
                "publishedAt": "2022-04-21T10:41:56Z",
                "content": "Apple iPhone users who bought the MagSafe battery pack can now charge their iPhones at a faster speed. The company has released a new firmware update that boosts the charging speed of the MagSafe bat… [+1953 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "No 11 after 14! iPhone 11 said to be counting its LAST days - HT Tech",
                "description": "iPhone 11 now said to be discontinued after iPhone 14 launch later in 2022. Here are all the details.",
                "url": "https://tech.hindustantimes.com/mobile/news/no-11-after-14-iphone-11-said-to-be-counting-its-last-days-71650537406297.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/iPhone_11_1596385103788_1596385118692_1650537576825.JPG",
                "publishedAt": "2022-04-21T10:40:12Z",
                "content": "Back in 2019, the iPhone 11 was a big deal for Apple fans. After the weirdly compromised iPhone XR, the iPhone 11 introduced modern niceties like an ultra wide camera, an edge-to-edge display, the Fa… [+1877 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Manchester United"
                },
                "author": "Communications Department",
                "title": "Official statement: Erik ten Hag - Man Utd",
                "description": "Manchester United is delighted to announce the appointment of Erik ten Hag as Men's First Team Manager, subject to work visa requirements.",
                "url": "https://www.manutd.com/en/news/detail/erik-ten-hag-appointed-as-man-utd-manager-official-statement",
                "urlToImage": "https://assets.manutd.com/AssetPicker/images/0/0/16/141/1084869/NMS_Article_Header_copy1650534418325_large.jpg",
                "publishedAt": "2022-04-21T10:10:00Z",
                "content": "<ul><li>Share With email</li><li>Copy Link</li></ul>\r\nManchester United is delighted to announce the appointment of Erik ten Hag as Mens First Team Manager, subject to work visa requirements, from th… [+82 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "PTI",
                "title": "Kishor wants to join Cong without preconditions, his induction will help party: Gen secy Tariq Anwar - The Indian Express",
                "description": "Discussing the party's fortunes, Anwar said the Congress would be the natural leader of an anti-BJP front for the 2024 general elections as no other party has its pan-India appeal or its presence.",
                "url": "https://indianexpress.com/article/india/kishor-wants-to-join-cong-preconditions-induction-will-help-party-congress-gen-secy-tariq-anwar-7880283/",
                "urlToImage": "https://images.indianexpress.com/2018/09/tariq-anwar.jpg",
                "publishedAt": "2022-04-21T10:03:18Z",
                "content": "Describing Prashant Kishor as a brand with proven credentials, Congress general secretary Tariq Anwar on Thursday said the poll strategist is willing to join the party without any preconditions and h… [+4915 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "\"Don't Lecture Judiciary\": Supreme Court To Centre Over Abu Salem Plea - NDTV",
                "description": "On gangster Abu Salem's petition against his jail sentence, the Supreme Court today used stern words while rejecting the Union Home Ministry's stance that the plea is premature.",
                "url": "https://www.ndtv.com/india-news/dont-lecture-judiciary-supreme-court-to-centre-over-abu-salem-plea-2906903",
                "urlToImage": "https://i.ndtvimg.com/i/2017-06/abu-salem_650x400_71497587927.jpg",
                "publishedAt": "2022-04-21T10:00:24Z",
                "content": "Abu Salem plea: The Supreme Court objected to the Centre asking it to decide on the case. (File)\r\nNew Delhi: On gangster Abu Salem's petition against his jail sentence exceeding 25 years, the Supreme… [+2776 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": null,
                "title": "Nord CE 2 Lite 5G and Nord Buds arriving on April 28 in India as OnePlus goes big on brand Nord - India Today",
                "description": "Brand Nord from the house of OnePlus is growing. Two more products -- OnePlus Nord CE 2 Lite 5G and OnePlus Nord Buds -- will be launching in India on April 28.",
                "url": "https://www.indiatoday.in/technology/news/story/oneplus-nord-ce-2-lite-5g-buds-launch-india-april-28-1940164-2022-04-21",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/OnePlus_Nord_CE_2_Lite_5G_and_-647x363.jpeg?EgEFMdJRwkxcWtYg2J4692ceDaR3v3g1",
                "publishedAt": "2022-04-21T09:42:11Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "Priyanka Chopra honoured mom, mom-in-law with daughter Malti's name. Here's how - Hindustan Times",
                "description": "The name of Priyanka Chopra's daughter was revealed on Thursday after the media got their hands on the child's birth certificate.",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/priyanka-chopra-honoured-mom-madhu-chopra-mom-in-law-denise-jonas-with-daughter-malti-s-name-here-s-how-101650530353702.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/Priyanka_Chopra_1650530350307_1650530350460.jpg",
                "publishedAt": "2022-04-21T09:28:15Z",
                "content": "The name of Priyanka Chopra and Nick Jonas' daughter was finally revealed on Thursday. As per a TMZ report, the birth certificate for the newborn baby unveiled that she has been named Malti Marie Cho… [+2121 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livelaw.in"
                },
                "author": "Srishti Ojha",
                "title": "You Require Bulldozers To Remove Stalls & Chairs?: Supreme Court Asks NDMC On Jahangirpuri Demolitions - Live Law - Indian Legal News",
                "description": "To remove stalls, chairs, bench, boxes, you require a bulldozer?, the Supreme Court on Thursday...",
                "url": "https://www.livelaw.in/top-stories/you-require-bulldozers-to-remove-stalls-chairs-supreme-court-asks-ndmc-on-jahangirpuri-demolitions-197162",
                "urlToImage": "https://www.livelaw.in/h-upload/2022/04/20/415272-jahangirpuri-demolitions-sc.jpg",
                "publishedAt": "2022-04-21T09:14:19Z",
                "content": "\"To remove stalls, chairs, bench, boxes, you require a bulldozer?\", the Supreme Court on Thursday asked the North Delhi Municipal Corporation in relation to the anti-encroachment drive carried by it … [+3227 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Watch: NASA's Perseverance Rover Captures Stunning Video of Solar Eclipse On Mars - NDTV",
                "description": "NASA's Perseverance Mars rover has captured a mesmerising video of a solar eclipse on the Red Planet. The camera onboard the SUV-sized rover captured the footage of Phobos, Mars potato-shaped moon, crossing the face of the Sun.",
                "url": "https://www.ndtv.com/world-news/watch-nasas-perseverance-rover-captures-stunning-video-of-solar-eclipse-on-mars-2906661",
                "urlToImage": "https://c.ndtvimg.com/2022-04/6mucfk4g_mars-650_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T09:02:03Z",
                "content": "The eclipse lasted a little over 40 seconds.\r\nUS space agency National Aeronautics and Space Administration's (NASA) Perseverance Mars rover has captured a mesmerising video of a solar eclipse on the… [+2009 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": null,
                "title": "Omicron and its 9 sub-types driving up Delhi Covid cases, say govt sources - India Today",
                "description": "Government sources attributed the rise in the number of Covid cases in Delhi to the Omicron variant of coronavirus and its sub-types.",
                "url": "https://www.indiatoday.in/coronavirus-outbreak/story/delhi-covid-cases-omicron-sub-types-1940147-2022-04-21",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Coronaviruss-647x363.jpeg?tghPHp5D35v8aprchguXYILJcwaYeIx5",
                "publishedAt": "2022-04-21T09:02:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Iplt20.com"
                },
                "author": null,
                "title": "Matheesha Pathirana joins Chennai Super Kings as a replacement for Adam Milne - IPLT20.com",
                "description": "Matheesha Pathirana joins Chennai Super Kings as a replacement for Adam Milne",
                "url": "https://www.iplt20.com/news/3778/matheesha-pathirana-joins-chennai-super-kings-as-a-replacement-for-adam-milne",
                "urlToImage": "https://assets.iplt20.com/bcci/articles/1650530256__AI_8942%20%281%29.jpg",
                "publishedAt": "2022-04-21T08:46:13Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Moneycontrol News",
                "title": "Boris Johnson India Visit LIVE Updates: UK PM meets Gautam Adani in Ahemdabad - Moneycontrol",
                "description": "Boris Johnson's India Visit Live Updates: The British Prime Minister said that his long-delayed visit to India will deepen the strategic trade, defence, and people-to-people ties between the two countries.",
                "url": "https://www.moneycontrol.com/news/india/boris-johnson-india-visit-live-updates-india-visit-will-deepen-strategic-ties-says-british-pm-boris-johnson-8387411.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/1-boris-johnson-sabarmati-visit-770x433.jpg",
                "publishedAt": "2022-04-21T08:38:00Z",
                "content": "Boris Johnson India Visit LIVE Updates: British Prime Minister Boris Johnson arrived earlier today in Ahmedabad, Gujarat for his two-day visit to India. This is Johnson's first major trip to India as… [+4452 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "8-Hour Blackouts Hit India, Point To \"Looming Power Crisis\" - NDTV",
                "description": "An already sweltering summer and acute coal shortages are triggering blackouts across parts of India, raising fears of a new power crisis that could roil Asia's third-biggest economy.",
                "url": "https://www.ndtv.com/india-news/eight-hour-blackouts-slam-india-after-hottest-march-since-1901-2906423",
                "urlToImage": "https://c.ndtvimg.com/2022-04/4adlt3r4_power-grid-generic-reuters_625x300_15_April_22.jpg",
                "publishedAt": "2022-04-21T08:11:16Z",
                "content": "The blackouts across parts of India are raising fears of a new power crisis. (Representational)\r\nAn already sweltering summer and acute coal shortages are triggering blackouts across parts of India, … [+5347 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "\"Mariupol Has Been Liberated\": Putin Says \"Success\" For Russian Forces - NDTV",
                "description": "President Vladimir Putin on Thursday hailed Russia's \"liberation\" of Mariupol after Defence Minister Sergei Shoigu told him Moscow controlled the Ukrainian port city apart from the giant Azovstal steel plant.",
                "url": "https://www.ndtv.com/world-news/vladimir-putin-hails-successful-liberation-of-mariupol-news-agency-afp-2906410",
                "urlToImage": "https://c.ndtvimg.com/2022-04/s0n78k4o_mariupol_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T08:10:38Z",
                "content": "Russian forces have advanced inside Ukraine's Mariupol\r\nMoscow: President Vladimir Putin on Thursday hailed Russia's \"liberation\" of Mariupol after Defence Minister Sergei Shoigu told him Moscow cont… [+1199 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Man Aman Singh Chhina",
                "title": "Explained: What is Russia’s new nuclear missile Sarmat, capable of striking ‘anywhere in the world’? - The Indian Express",
                "description": "The RS-28 Sarmat, also called Satan-II, is reported to be able to carry ten or more warheads and decoys, and has the capability of firing over either of the earth’s poles with a range of 11,000 to 18,000 km.",
                "url": "https://indianexpress.com/article/explained/explained-russia-ukraine-war-nuclear-missile-sarmat-7880021/",
                "urlToImage": "https://images.indianexpress.com/2022/04/ICBM.jpg",
                "publishedAt": "2022-04-21T08:05:23Z",
                "content": "Amidst stiff resistance from Ukraine in the ongoing war and harsh sanctions imposed by the West, Russia went ahead and tested its new Inter Continental Ballistic Missile (ICBM) Sarmat on Wednesday. T… [+3668 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ThePrint"
                },
                "author": null,
                "title": "On Jupiter’s icy moon Europa, shallow pools of underground salt water offer promise of life - ThePrint",
                "description": "While shallow water processes have been suspected on Europa, if findings of study are confirmed, it could mean they play bigger-than-expected role in shaping its surface features.",
                "url": "https://theprint.in/science/on-jupiters-icy-moon-europa-shallow-pools-of-underground-salt-water-offer-promise-of-life/923670/",
                "urlToImage": "https://static.theprint.in/wp-content/uploads/2022/04/Europa_moon.jpg",
                "publishedAt": "2022-04-21T07:23:12Z",
                "content": "Bengaluru: A new study has hinted at the presence of shallow pools of underground salt water under the icy shell of Europa, Jupiter’s sixth closest moon and the smallest of the four Galilean moons, m… [+4448 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Koimoi"
                },
                "author": "Koimoi.com Team",
                "title": "Jersey Box Office Day 1 Advance Booking (A Day Before Release): Shahid Kapoor’s Film Is Entirely Word-Of-Mouth Dependent As There’s Hardly Any Buzz - Koimoi",
                "description": "Finally, Shahid Kapoor fans have got a chance to cheer as his Jersey to hit theatres tomorrow. Here's its advance booking report.",
                "url": "https://www.koimoi.com/box-office/jersey-box-office-day-1-advance-booking-a-day-before-release-shahid-kapoors-film-is-entirely-word-of-mouth-dependent-as-theres-hardly-any-buzz/",
                "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/04/jersey-box-office-day-1-advance-booking-a-day-before-release-001.jpg",
                "publishedAt": "2022-04-21T06:53:26Z",
                "content": "Jersey Box Office Day 1 Advance Booking (A Day Before Release)(Photo Credit: Still From Jersey)\r\nFinally, Shahid Kapoor fans have got a chance to cheer as his Jersey to hit theatres tomorrow. The fil… [+1506 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Neeraj Chauhan",
                "title": "National database on internal security in works: Amit Shah - Hindustan Times",
                "description": "The Union home minister said the database will go a long way in helping investigations and ensuring convictions of terror accused | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/national-database-on-internal-security-in-works-amit-shah-101650523423101.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/0807e2d0-c13d-11ec-bc83-62b7767857b3_1650523421994.jpg",
                "publishedAt": "2022-04-21T06:43:42Z",
                "content": "New Delhi: Union home minister Amit Shah on Thursday said the Centre is working on a national database related to internal security covering bomb blasts, terror funding, fake currency, narcotics, haw… [+1551 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT News Desk",
                "title": "Top LeT commander Yousuf Kantroo among 2 terrorists killed in J&K's Baramulla - Hindustan Times",
                "description": "Yousuf Kantroo, a top LeT commander who was on the hit list of Indian Army, was involved in several killings of civilians and security forces personnel. | Latest News India",
                "url": "https://www.hindustantimes.com/india-news/top-let-commander-yousuf-kantroo-killed-in-encounter-in-kashmir-s-baramulla-101650520152247.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/20891acc-bf58-11ec-bc83-62b7767857b3_1650314712075_1650521832815.jpg",
                "publishedAt": "2022-04-21T06:18:26Z",
                "content": "A top commander of the banned outfit Lashkar-e-Taiba (LeT) and one other terrorist were killed in an encounter in Jammu and Kashmir's Baramulla district, the police said. The counterterrorism operati… [+1208 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Citytoday.news"
                },
                "author": "Murali",
                "title": "Liver cancer is increasing because of unhealthy lifestyle – Mysuru Today - citytoday",
                "description": "Prime News, National, Karnataka, Health, Disease, Mysuru, April 21:- Liver cancer is rising because of an unhealthy lifestyle, said Dr M S Vishveshwara, Chief Radiation Oncologist and Medical Superint",
                "url": "https://citytoday.news/liver-cancer-is-increasing-because-of-unhealthy-lifestyle/",
                "urlToImage": null,
                "publishedAt": "2022-04-21T05:41:53Z",
                "content": "Prime News, National, Karnataka, Health, Disease, Mysuru, April 21:- Liver cancer is rising because of an unhealthy lifestyle, said Dr M S Vishveshwara, Chief Radiation Oncologist and Medical Superin… [+2215 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Bollywood Life"
                },
                "author": "Nikita Thakkar",
                "title": "Akshay Kumar, Rashmika Mandanna, Ranveer Singh and more stars who were massively trolled for controversial ads - Bollywood Life",
                "description": "Akshay Kumar had to issue an apology after he received severe backlash over his latest advertisement. Here's a list of stars who have been trolled for similar reasons.",
                "url": "https://www.bollywoodlife.com/photos/akshay-kumar-rashmika-mandanna-ranveer-singh-and-more-stars-who-were-massively-trolled-for-controversial-ads-bollywood-galleries-entertainment-news-2054655/",
                "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2022/04/Akshay-15-600x315.png",
                "publishedAt": "2022-04-21T05:24:49Z",
                "content": "Akshay Kumar is currently ruling the headlines. The actor has extended an apology to his fans after he received backlash for being a part of an advertisement promoting a tobacco brand. It was recentl… [+506 chars]"
            },
        ],
        imageURL: '',
    },
    {
        title: 'Business',
        id: 3,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "CNBCTV18"
                },
                "author": "CNBCTV18.com",
                "title": "Stock Market LIVE Updates: Power, metal, IT help Nifty reclaim 16,800; Sensex up 400 points - CNBCTV18",
                "description": "Stock Market LIVE Updates: Indian equity benchmarks BSE Sensex and NSE Nifty50 built on opening gains on Thursday tracking positive global cues, after the Fed hiked the key interest rate by an expected 50 bps and ruled out more aggressive tightening of policy…",
                "url": "https://www.cnbctv18.com/market/stocks/stock-market-news-live-updates-sgx-nifty50-bse-sensex-lic-ipo-listing-fed-interest-rate-hike-rbi-policy-action-brent-crude-bitcoin-gold-rate-vix-13383522.htm",
                "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/07/BSE-Sensex.jpg",
                "publishedAt": "2022-05-05T08:35:17Z",
                "content": "Market Watch | Unmesh Sharma, Head-Institutional Equities, HDFC Securities (fundamental) on earnings\r\nTo a large extent, what we see is 60 percent of corporate profits are quite ring fenced and solid… [+482 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Moneycontrol News",
                "title": "LIC IPO Live Updates: Second day of bidding, issue subscribed 86%, Policyholders 2.61 times, Staff 1.8... - Moneycontrol",
                "description": "The government will be selling a 3.5 percent stake entirely through an offer for sale (OFS). Of which 10 percent of the shares are reserved for LIC policyholders and 0.7 percent for LIC employees. Also, 31.25 percent is reserved for household (retail) investo…",
                "url": "https://www.moneycontrol.com/news/business/ipo/lic-ipo-live-updates-second-day-of-bidding-set-to-begin-as-day-1-sees-employees-portion-fully-subscribed-retail-portion-booked-60-8455231.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/LIC-IPO-1-770x433.jpg",
                "publishedAt": "2022-05-05T08:35:02Z",
                "content": "Indian life insurance market is still underinsured compared to major economies\r\nIndia’s life insurance penetration stood at 3.2 percent in CY20 compared to the global average of 3.3 percent. Among As… [+672 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Ravindra Sonavane",
                "title": "Delhivery shares slump in unlisted market ahead of IPO - Moneycontrol",
                "description": "Delhivery has set the price band in its IPO at Rs 462-487 a share, valuing the company at Rs 35,283 crore at the upper end. This is down about 19% from the current price in the unlisted market.",
                "url": "https://www.moneycontrol.com/news/business/ipo/delhivery-shares-slump-in-unlisted-market-ahead-of-ipo-8456741.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/03/Delhivery-770x433.jpg",
                "publishedAt": "2022-05-05T06:41:31Z",
                "content": "Shares of logistics and supply-chain startup Delhivery Ltd are down nearly 40 percent in the unlisted market from the peak of Rs 950 apiece in January ahead of its initial public offering (IPO).\r\nThe… [+3368 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Auto Desk",
                "title": "Top 10 carmakers in India in April: Tata, Hyundai in tight race for second spot - HT Auto",
                "description": "Top 10 car brands in India in April 2022: Maruti Suzuki remains the leader among top 10 carmakers with a market share of more than 40 percent. The closest rival Hyundai has a market share of around 15 percent.",
                "url": "https://auto.hindustantimes.com/auto/cars/top-10-carmakers-in-india-in-april-tata-hyundai-in-tight-race-for-second-spot-41651727194438.html",
                "urlToImage": "https://images.hindustantimes.com/auto/img/2022/05/05/600x338/Maruti_Suzuki__1651730447216_1651730447399.JPG",
                "publishedAt": "2022-05-05T06:01:56Z",
                "content": "The Indian auto industry has been reeling under the global chip shortage crisis for some time. While it tries to emerge from the Covid-19 lockdown and the ongoing slowdown in economy, the chip crisis… [+5506 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Business Desk",
                "title": "ICICI Bank, Bank of Baroda Hike Repo-Linked Lending Rates by 40 bps. How it Will Impact - News18",
                "description": "After a mid-cyclic RBI rate hike, on Thursday, ICICI Bank raises the external benchmark lending rate by 40 bps to 8.10 per cent.",
                "url": "https://www.news18.com/news/business/savings-and-investments/icici-bank-bank-of-baroda-hike-repo-linked-lending-rates-by-40-bps-how-it-will-impact-5113153.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/02/money-164422405416x9.jpg",
                "publishedAt": "2022-05-05T05:57:03Z",
                "content": "After a mid-cyclic RBI rate hike, on Thursday, ICICI Bank raises the external benchmark lending rate by 40 bps to 8.10 per cent. “ICICI Bank External Benchmark Lending Rate\" (I-EBLR) is referenced to… [+2978 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Family Leaves Food Court Table Full Of Trash, Internet says \"Never Seen A Mess This bad\" - NDTV",
                "description": "A shocking photo taken moments after a family exited a KFC in Saudi Arabia has left the internet outraged. The image, shared on Reddit, shows piles of KFC containers and half-eaten meals scattered across three tables in a food court in Riyadh.",
                "url": "https://www.ndtv.com/offbeat/family-leaves-food-court-table-full-of-trash-internet-says-never-seen-a-mess-this-bad-2947274",
                "urlToImage": "https://i.ndtvimg.com/i/2018-03/kfc-britain-reuters_650x400_71519957735.jpg",
                "publishedAt": "2022-05-05T05:42:08Z",
                "content": "The infuriating photo has received thousands of views and left internet outraged. (Representative Photo)\r\nA shocking photo taken moments after a family exited a KFC outlet in Saudi Arabia has left th… [+1908 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Chandra R Srikanth",
                "title": "EXCLUSIVE: Ola Cars CEO Arun Sirdeshmukh and Ola group strategy head Amit Anchal to exit - Moneycontrol",
                "description": "An Ola spokesperson confirmed Siredeshmukh's exit in response to queries from Moneycontrol, but she firmly denied Anchal was leaving and said he was still part of the company.",
                "url": "https://www.moneycontrol.com/news/companies-2/exclusive-ola-cars-ceo-arun-sirdeshmukh-and-olas-group-strategy-head-amit-anchal-to-exit-8456481.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/image-770x433.png",
                "publishedAt": "2022-05-05T05:13:41Z",
                "content": "SoftBank-backed Ola's vehicle commerce CEO Arun Sirdeshmukh and its chief of group strategy Amit Anchal are leaving the firm, people familiar with the matter said, marking crucial exits when it is gr… [+5079 chars]"
            },
            {
                "source": {
                    "id": "al-jazeera-english",
                    "name": "Al Jazeera English"
                },
                "author": "Al Jazeera",
                "title": "US plans to impose sanctions on China’s Hikvision: Report - Al Jazeera English",
                "description": "Firm has been accused of enabling human rights abuses by supplying cameras used in the repression of the Uighurs.",
                "url": "https://www.aljazeera.com/economy/2022/5/5/us-plans-to-impose-sanctions-on-chinas-hikvision-report",
                "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/05/2019-11-14T033821Z_833322944_RC2RAD9UMWCT_RTRMADP_3_HIKVISION-PROBE.jpg?resize=1200%2C630",
                "publishedAt": "2022-05-05T04:56:51Z",
                "content": "The United States is moving towards imposing new sanctions on Chinese video surveillance company Hikvision, the Financial Times reported on Wednesday, citing four people familiar with the talks.\r\nThe… [+2884 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "Bloomberg",
                "title": "Fed hikes rates half point, will shrink assets to curb inflation - Economic Times",
                "description": "It will begin allowing its holdings of Treasuries and mortgage-backed securities to decline in June at an initial combined monthly pace of $47.5 billion, stepping up over three months to $95 billion.",
                "url": "https://economictimes.indiatimes.com/markets/stocks/news/fed-hikes-rates-half-point-will-shrink-assets-to-curb-inflation/articleshow/91324995.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-91324975,width-1070,height-580,imgsize-101188,overlay-etmarkets/photo.jpg",
                "publishedAt": "2022-05-05T04:33:00Z",
                "content": "The Federal Reserve delivered the biggest interest-rate increase since 2000 and signaled it would keep hiking at that pace over the next couple of meetings, unleashing the most aggressive policy acti… [+5308 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Moneycontrol News",
                "title": "What should investors do with Kotak Mahindra Bank after earnings; buy, sell or hold? - Moneycontrol",
                "description": "Asset quality has improved sequentially, with the bank reporting gross non-performing assets (NPAs), as a percentage of total advances, of 2.34% in the March quarter, down 91 bps from a year ago.",
                "url": "https://www.moneycontrol.com/news/business/stocks/what-should-investors-do-with-kotak-mahindra-bank-after-earnings-buy-sell-or-hold-8455411.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/10/kotak-mahindra-bank-770x433.jpg",
                "publishedAt": "2022-05-05T04:11:30Z",
                "content": "Kotak Mahindra Bank share price rose 2 percent in early trade on May 5, a day after the company reported its March quarter earnings.\r\nPrivate sector lender Kotak Mahindra Bank on Wednesday reported a… [+4741 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CarToq.com"
                },
                "author": "Paarth Khatri",
                "title": "2022 Mahindra Scorpio rendered ahead of launch: What it could look like - CarToq.com",
                "description": "Mahindra has been testing the new generation of the Scorpio for quite some years now. They will be launching the new-gen Scorpio finally this year. 2022 also marks the 20th anniversary of the Scorpio as it was first introduced back in 2002. Here, we have a re…",
                "url": "https://www.cartoq.com/2022-mahindra-scorpio-rendered-ahead-of-launch/",
                "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/05/alturus-scorpio-featured.jpg",
                "publishedAt": "2022-05-05T03:29:39Z",
                "content": "Mahindra has been testing the new generation of the Scorpio for quite some years now. They will be launching the new-gen Scorpio finally this year. 2022 also marks the 20th anniversary of the Scorpio… [+2845 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Ayushman Baruah",
                "title": "Cognizant Reports 11.5% Rise In Q1 Net Profit, Posts Highest Ever Quarterly Revenue | Mint - Mint",
                "description": "Cognizant revised its full year 2022 revenue growth guidance to 9-11% in constant currency at $19.8-20.2 billion which includes an improved organic revenue growth outlook and a lower inorganic contribution, reflecting a disciplined acquisition strategy",
                "url": "https://www.livemint.com/companies/company-results/cognizant-reports-11-5-rise-in-q1-net-profit-posts-highest-quarterly-revenue-11651719210348.html",
                "urlToImage": "https://images.livemint.com/img/2022/05/05/600x338/Brian_Humphries_1649184230977_1651719976173.jpg",
                "publishedAt": "2022-05-05T03:06:41Z",
                "content": "BENGALURU: Nasdaq-listed Cognizant Technology Solutions Corps March quarter net profit rose 11.5% year-on-year to $563 million, on the back of an 11% increase in revenue in constant currency to $4.8 … [+2645 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BloombergQuint"
                },
                "author": "Smriti Chaudhary",
                "title": "Stock Market Today: All You Need To Know Going Into Trade On May 5 - BloombergQuint",
                "description": "Stocks in the news, big brokerage calls of the day, complete trade setup and much more!",
                "url": "https://www.bloombergquint.com/markets/stock-market-today-all-you-need-to-know-going-into-trade-on-may-5",
                "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2022-05%2Fe51c3a28-d79d-4ac1-bfeb-dff4dff7c852%2F364592445__1_.jpg?rect=0%2C0%2C4899%2C2572&w=1200&auto=format%2Ccompress&ogImage=true",
                "publishedAt": "2022-05-05T02:49:42Z",
                "content": "Inter-Se Fund Transfer Of Stocks Between iShares Core MSCI Total International Stock ETF and iShares Core Total International Stock Mauritius Co.\r\nThese are the stocks:\r\nAarti Industries, Aavas Finan… [+2914 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CarToq.com"
                },
                "author": "Paarth Khatri",
                "title": "Volkswagen Taigun now comes with TPMS & idle start/stop as standard - CarToq.com",
                "description": "Volkswagen has added a tyre pressure monitoring system and an engine idle start/stop system to Taigun. Both of these features are now offered as standard across all variants of the mid-size SUV. Volkswagen has also increased the prices of the Taigun. The pric…",
                "url": "https://www.cartoq.com/volkswagen-taigun-now-comes-with-tpms-idle-start-stop-as-standard/",
                "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/05/taigun-tpms-featured.jpg",
                "publishedAt": "2022-05-05T02:33:22Z",
                "content": "Volkswagen has added a tyre pressure monitoring system and an engine idle start/stop system to Taigun. Both of these features are now offered as standard across all variants of the mid-size SUV. Volk… [+3006 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Moneycontrol News",
                "title": "Fuel Prices on May 5: Check out petrol, diesel rates in Mumbai, Delhi and other cities - Moneycontrol",
                "description": "According to a price notification from fuel retailers, petrol in Delhi costs Rs 105.41 per litre and diesel Rs 96.67 per litre.",
                "url": "https://www.moneycontrol.com/news/business/commodities/fuel-prices-on-may-5-check-out-petrol-diesel-rates-in-mumbai-delhi-and-other-cities-8455251.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/07/petroldieselpetrol-pumpfuel-station-770x433.jpg",
                "publishedAt": "2022-05-05T02:15:25Z",
                "content": "Prices of petrol and diesel have remained steady for almost a month now. Since the end of a four-and-a-half-month hiatus in rate revision on March 22, rates of petrol and diesel have increased by Rs … [+3353 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BloombergQuint"
                },
                "author": "Nickey Mirchandani",
                "title": "Tata Steel Says May Review Dividend Policy - BloombergQuint",
                "description": "Tata Steel may review its dividend policy sometime soon even as it has recommended its highest payout in its history.",
                "url": "https://www.bloombergquint.com/business/tata-steel-says-may-review-dividend-policy",
                "urlToImage": "https://gumlet.assettype.com/bloombergquint%2F2019-09%2F03de7ac8-7982-4a58-ad77-c36935fc0bea%2Fm1226023.jpg?rect=0%2C567%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true",
                "publishedAt": "2022-05-05T02:14:29Z",
                "content": "Tata Steel Ltd. said it may review its dividend policy sometime soon even as the company has recommended its highest payout in its history.\r\nThe companys current capital allocation policy continues t… [+1024 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ETMarkets.com",
                "title": "SGX Nifty rises 150 points; here's what changed for markets while you were sleeping - Economic Times",
                "description": "Major Asian stocks started Thursday with a healthy advance after the Federal Reserve lifted interest rates but played down any chance of a huge 75 basis-point lift in the near future. MSCI's index of Asia-Pacific shares outside Japan was up by 1.08 per cent.",
                "url": "https://economictimes.indiatimes.com/markets/stocks/news/sgx-nifty-rises-150-points-heres-what-changed-for-markets-while-you-were-sleeping/articleshow/91331766.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-91331746,width-1070,height-580,imgsize-32610,overlay-etmarkets/photo.jpg",
                "publishedAt": "2022-05-05T02:14:00Z",
                "content": "After a steep fall in the previous session, the Indian equity market was set for a gap-up start on Thursday, tracking strong global sentiments. US stocks rallied sharply after the Fed downplayed the … [+4368 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cardekho.com"
                },
                "author": "Rohit",
                "title": "Skoda Kushaq Is Now Pricier By Up To Rs 70,000 - CarDekho",
                "description": "The price hike is applicable to all trims, save for the recently launched Ambition Classic variants     Skoda now retails the Kushaq from Rs 11.29 lakh to Rs 18.79 lakh.    Price hike ranges between Rs 5,000 and Rs 70,000.    No changes under the hood, still …",
                "url": "https://www.cardekho.com/india-car-news/skoda-kushaq-is-now-pricier-by-up-to-rs-70000-29020.htm",
                "urlToImage": "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/29019/1651682403491/GeneralNews.jpg",
                "publishedAt": "2022-05-05T02:00:00Z",
                "content": "<ul><li>Skoda now retails the Kushaq from Rs 11.29 lakh to Rs 18.79 lakh.\r\n</li><li>Price hike ranges between Rs 5,000 and Rs 70,000.\r\n</li><li>No changes under the hood, still offered with both 1-li… [+2211 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Decrypt"
                },
                "author": "Jason Nelson",
                "title": "Gucci to Begin Accepting Bitcoin in Some Stores - Decrypt",
                "description": "Gucci is the latest luxury brand to begin accepting crypto payments.",
                "url": "https://decrypt.co/99504/gucci-begin-accepting-bitcoin-some-stores",
                "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/05/gucci-store-gID_2.jpeg",
                "publishedAt": "2022-05-05T01:02:54Z",
                "content": "Iconic fashion brand Gucci will begin accepting cryptocurrency in some of its U.S. locations later this month, with plans to roll out the program to other North American stores this summer.\r\nAccordin… [+1810 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Business Standard"
                },
                "author": "Dev Chatterjee",
                "title": "Ambuja acquisition could be LICs windfall; acquirer to make open offer - Business Standard",
                "description": "LIC owns 6.3 per cent stake worth Rs 4,602 crore in Ambuja Cements and 5.66 per cent stake worth Rs 2,445 crore in ACC",
                "url": "https://www.business-standard.com/article/markets/ambuja-acquisition-could-be-lic-s-windfall-acquirer-to-make-open-offer-122050500067_1.html",
                "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/14/full/1649910583-7398.jpg",
                "publishedAt": "2022-05-05T00:30:00Z",
                "content": "Business Standard has always strived hard to provide up-to-date information and commentary on developments that are of interest to you and have wider political and economic implications for the count… [+1029 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investing.com"
                },
                "author": "Investing.com",
                "title": "Dow futures Ease as Fed Lifts Interest Rates - Investing.com India",
                "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
                "url": "https://in.investing.com/news/dow-futures-ease-as-fed-lifts-interest-rates-3188215",
                "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/1bd749940631b1cc01aa4b7f59d62af2_w_800_h_450.jpg",
                "publishedAt": "2022-05-04T22:56:39Z",
                "content": "By Oliver Gray \r\nInvesting.com - \r\nDow futures\r\n were trading slightly lower during Thursdays evening deals, following broad based gains among major benchmark averages after Federal Reserve policymak… [+2113 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Business Standard"
                },
                "author": "Press Trust of India",
                "title": "Future Retail MD Rakesh Biyani steps down, Company Secretary resigns - Business Standard",
                "description": "The Future Group flagship firm is facing an insolvency petition by its lenders before the National Company Law Tribunal",
                "url": "https://www.business-standard.com/article/companies/future-retail-md-rakesh-biyani-steps-down-company-secretary-resigns-122050401269_1.html",
                "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-10/19/full/1634587674-9989.jpg",
                "publishedAt": "2022-05-04T19:21:00Z",
                "content": "Future Retail Managing Director Rakesh Biyani has stepped down while officials, including the company secretary of the debt-ridden firm, have tendered resignations.\r\nThe Future Group flagship firm is… [+3385 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Correspondent",
                "title": "Centre asks VPN services to log, hand over customer data - Hindustan Times",
                "description": "The new directives from India’s Computer Emergency Response Team (CERT-in), the government’s nodal agency for detecting and responding to cyber incidents, may have far-reaching ramifications on how VPN services are offered and used in the country. | Latest Ne…",
                "url": "https://www.hindustantimes.com/india-news/centre-asks-vpn-services-to-log-hand-over-customer-data-101651689707080.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/05/04/1600x900/ANI-20211215234-0_1643197757291_1651690785023.jpg",
                "publishedAt": "2022-05-04T18:41:46Z",
                "content": "Soon, companies offering virtual private network (VPN) or cloud services in India may be required to collect, as well as maintain, extensive and accurate data of their consumers for five years under … [+2391 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Kitco NEWS"
                },
                "author": "http://www.facebook.com/kitconews",
                "title": "Gold sees modest rally following mildly dovish FOMC statement - Kitco NEWS",
                "description": "Senior Technical Analyst Jim Wyckoff prepares investors with an overview of how the markets opened and closed. What moved metal prices? How do the technicals look? By looking at important developments",
                "url": "https://www.kitco.com/news/2022-05-04/Gold-sees-modest-rally-following-mildly-dovish-FOMC-statement.html",
                "urlToImage": "https://www.kitco.com/news/2022-05-04/images/goldchart_0504_pm.png",
                "publishedAt": "2022-05-04T18:12:00Z",
                "content": "Editor's Note: With so much market volatility, stay on top of daily news! Get caught up in minutes with our speedy summary of today's must-read news and expert opinions. Sign up here! \r\n(Kitco News) … [+4035 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Moneycontrol"
                },
                "author": "Moneycontrol News",
                "title": "Travel aggregator ixigo appoints Rahul Gautam as Group CFO - Moneycontrol",
                "description": "The appointment will come into effect from May 5, 2022, the company said, adding that Gautam would be replacing former Group CFO Ravi Gupta, who resigned due to &quot;personal reasons&quot;.",
                "url": "https://www.moneycontrol.com/news/business/travel-aggregator-ixigo-appoints-rahul-gautam-as-group-cfo-8454801.html",
                "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/05/Ixigo-770x433.jpg",
                "publishedAt": "2022-05-04T17:35:52Z",
                "content": "Travel aggregator ixigo on May 4 announced the appointment of Rahul Gautam, a veteran in the realm of capital markets and corporate finance, as its new Group Chief Financial Officer.\r\nThe appointment… [+1269 chars]"
            },
        ],
        imageURL: '',
    },
    {
        title: 'Entertainment',
        id: 4,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "\"A Superstar Once Said...\": Taapsee Pannu On Working With Shah Rukh Khan In Dunki - NDTV",
                "description": "Taapsee Pannu shared a quote from Shah Rukh Khan's film Om Shanti Om",
                "url": "https://www.ndtv.com/entertainment/a-superstar-once-said-taapsee-pannu-on-working-with-shah-rukh-khan-in-dunki-2907358",
                "urlToImage": "https://c.ndtvimg.com/2022-04/lc1j9m1_taapsee_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T11:36:56Z",
                "content": "A throwback picture of Taapsee Pannu and SRK from Badla promotions.\r\nNew Delhi: Taapsee Pannu, who is all set to co-star with Shah Rukh Khan in Rajkumar Hirani's next project Dunki, shared a tweet, i… [+2004 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "Zee Media Bureau",
                "title": "Ranbir Kapoor, Alia Bhatt took only 4 pheras instead of 7 at wedding, here`s why - Zee News",
                "description": "The intimate wedding of Ranbir Kapoor and Alia Bhatt is the latest talk of the town. The couple tied the knot in an intimate ceremony, that was attended by only close friends and family members. The celebrations took place at Ranbir s house  Vastu  in Bandra.",
                "url": "https://zeenews.india.com/people/ranbir-kapoor-alia-bhatt-took-only-4-pheras-instead-of-7-at-wedding-heres-why-2455916.html",
                "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1034159-alia-ranbir-wedding-kat-dee.gif",
                "publishedAt": "2022-04-21T10:35:15Z",
                "content": "NEW DELHI: The intimate wedding of Ranbir Kapoor and Alia Bhatt is the latest talk of the town. The couple tied the knot in an intimate ceremony, that was attended by only close friends and family me… [+1693 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "KGF Chapter 2 box office week 1 collection: Yash film zooms past ₹700 crore mark - Hindustan Times",
                "description": "KGF Chapter 2 box office week 1 collection: The Yash-starrer has registered the second-best opening week of any Indian film ever, earning ₹719 crores at the global box office in seven days.",
                "url": "https://www.hindustantimes.com/entertainment/others/kgf-chapter-2-box-office-week-1-yash-s-film-zooms-past-700-crore-mark-registers-second-best-opening-week-ever-101650532648191.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/KGF_2_1650533688830_1650533700797.jpeg",
                "publishedAt": "2022-04-21T09:40:29Z",
                "content": "Kannada film KGF: Chapter 2 has ticked off another milestone during its outstanding run at the box office. On Wednesday, as it completed one week of release, the film crossed the 700 crore mark in wo… [+1959 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "PINKVILLA"
                },
                "author": "Shefali Fernandes",
                "title": "Katrina Kaif's leaked photos with Radikaa Sarathkumar from the sets of Merry Christmas go viral - PINKVILLA",
                "description": "A few leaked photos of Katrina Kaif with Tamil actress Radikaa Sarathkumar from the sets Merry Christmas are going viral.",
                "url": "https://www.pinkvilla.com/entertainment/news/katrina-kaifs-leaked-photos-radikaa-sarathkumar-sets-merry-christmas-go-viral-1073338",
                "urlToImage": "https://www.pinkvilla.com/files/styles/fbimagesection/public/katrina_kaif_social__0.jpg?itok=zQ5CWLvR",
                "publishedAt": "2022-04-21T09:32:00Z",
                "content": "Katrina Kaif's fans are excited to see her teaming up with South superstar Vijay Sethupathi in Merry Christmas. The film was officially announced in December 2021 with a photo featuring Katrina and V… [+1594 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "Priyanka Chopra honoured mom, mom-in-law with daughter Malti's name. Here's how - Hindustan Times",
                "description": "The name of Priyanka Chopra's daughter was revealed on Thursday after the media got their hands on the child's birth certificate.",
                "url": "https://www.hindustantimes.com/entertainment/bollywood/priyanka-chopra-honoured-mom-madhu-chopra-mom-in-law-denise-jonas-with-daughter-malti-s-name-here-s-how-101650530353702.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/Priyanka_Chopra_1650530350307_1650530350460.jpg",
                "publishedAt": "2022-04-21T09:28:15Z",
                "content": "The name of Priyanka Chopra and Nick Jonas' daughter was finally revealed on Thursday. As per a TMZ report, the birth certificate for the newborn baby unveiled that she has been named Malti Marie Cho… [+2121 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": null,
                "title": "Sara Ali Khan gets upset after a photographer pushes her, but actress’ polite attitude wins hearts - Times of India",
                "description": "Sara Ali Khan is one of the most loved actresses in Bollywood. From fans to paparazzi Sara is everyone’s favorite. The actress is quite humble, kind, and sweet towards everyone. She often gets papped up in the city, where she always greets fans and shutterbug…",
                "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/sara-ali-khan-gets-upset-after-a-photographer-pushes-her-but-actress-polite-attitude-wins-hearts/videoshow/90977258.cms",
                "urlToImage": "https://timesofindia.indiatimes.com/photo/90977258/size-60248/90977258.jpg",
                "publishedAt": "2022-04-21T08:55:54Z",
                "content": "Sara Ali Khan is one of the most loved actresses in Bollywood\r\n. From fans to paparazzi Sara is everyones favorite. The actress is quite humble, kind, and sweet towards everyone. She often gets pappe… [+1846 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Aamir Khan Rings In Summer With Son Azad Rao Khan And Delicious Mangoes - See Post - NDTV Food",
                "description": "The official Instagram handle of Aamir Khan Productions shared a post recently, where the father-son duo was seen devouring mangoes.",
                "url": "https://food.ndtv.com/news/aamir-khan-rings-in-summer-with-son-azad-rao-khan-and-delicious-mangoes-see-post-2906592",
                "urlToImage": "https://c.ndtvimg.com/2022-04/024pcap8_aamir-khan_625x300_21_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-04-21T08:25:56Z",
                "content": "What's that one thing we love the most about summer season? The most common reply will probably be the sweet and juicy mangoes. Agreed? Rightly referred to as the king of fruits, mangoes give us a qu… [+1717 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Kareena And Karisma Celebrated Mom Babita's Birthday With This Dreamy Cake - NDTV Food",
                "description": "Babita Kapoor recently celebrated her 75th birthday! Her daughters surprised her with this dreamy cake.",
                "url": "https://food.ndtv.com/news/kareena-and-karisma-celebrated-mom-babitas-birthday-with-this-dreamy-cake-2906437",
                "urlToImage": "https://c.ndtvimg.com/2019-01/fce1f8ng_kareena-karisma-instagram_625x300_15_January_19.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-04-21T07:35:30Z",
                "content": "There is no denying that any celebration is incomplete without a cake. We all love to surprise our loved ones with their favourite cake flavour and make the event as special as possible! Recently, Ka… [+1750 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "IndiaGlitz.com"
                },
                "author": "IndiaGlitz",
                "title": "Kajal Aggarwal opens about what exactly happened at her childbirth and how she is feeling now - Tamil News - Telugu Cinema - IndiaGlitz",
                "description": "Top actress Kajal Aggarwal who got married to long time lover Gautham Kitchlu in 2020 gave birth to a boy baby on April 19th.  She later revealed that he has been named Neil Kitchlu.",
                "url": "https://www.indiaglitz.com/actress-kajal-aggarwal-childbirth-experience-son-neil-kitchlu-acharya-indian-2-tamil-news-312705",
                "urlToImage": "https://1847884116.rsc.cdn77.org/tamil/news/kajalaggarwal-son-neilkitchlu-2142022-2f6.jpg",
                "publishedAt": "2022-04-21T06:55:51Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Koimoi"
                },
                "author": "Koimoi.com Team",
                "title": "Jersey Box Office Day 1 Advance Booking (A Day Before Release): Shahid Kapoor’s Film Is Entirely Word-Of-Mouth Dependent As There’s Hardly Any Buzz - Koimoi",
                "description": "Finally, Shahid Kapoor fans have got a chance to cheer as his Jersey to hit theatres tomorrow. Here's its advance booking report.",
                "url": "https://www.koimoi.com/box-office/jersey-box-office-day-1-advance-booking-a-day-before-release-shahid-kapoors-film-is-entirely-word-of-mouth-dependent-as-theres-hardly-any-buzz/",
                "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/04/jersey-box-office-day-1-advance-booking-a-day-before-release-001.jpg",
                "publishedAt": "2022-04-21T06:53:26Z",
                "content": "Jersey Box Office Day 1 Advance Booking (A Day Before Release)(Photo Credit: Still From Jersey)\r\nFinally, Shahid Kapoor fans have got a chance to cheer as his Jersey to hit theatres tomorrow. The fil… [+1506 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Greatandhra.com"
                },
                "author": "IANS",
                "title": "Chiranjeevi got Rajamouli's approval for Ram Charan's dates.. - Greatandhra",
                "description": "Following the success of 'RRR,' Ram Charan, who has begun promoting his upcoming release 'Acharya,' revealed intriguing details about Koratala Siva's directorial.",
                "url": "https://www.greatandhra.com/movies/news/chiranjeevi-got-rajamoulis-approval-for-ram-charans-dates-120516",
                "urlToImage": "https://www.greatandhra.com/newphotos10/chiru_rajamouli11650523258.jpg",
                "publishedAt": "2022-04-21T06:42:42Z",
                "content": "Following the success of 'RRR,' Ram Charan, who has begun promoting his upcoming release 'Acharya,' revealed intriguing details about Koratala Siva's directorial.\r\nDuring a media conversation, Ram Ch… [+1093 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Navya Naveli Nanda's Latest Post Has Left Everyone Guessing - NDTV",
                "description": "Navya Naveli Nanda has shared photos from her trip to the mountains",
                "url": "https://www.ndtv.com/entertainment/navya-naveli-nandas-latest-post-has-left-everyone-guessing-2905948",
                "urlToImage": "https://c.ndtvimg.com/2022-04/gnaht53g_navya-naveli-nanda_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T06:13:28Z",
                "content": "New Delhi: Navya Naveli Nanda is no stranger to attention from Bollywood fans. She is the granddaughter of one of India's biggest acting legends, Amitabh Bachchan and has always been the cynosure of … [+1908 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Entertainment Desk",
                "title": "Shehnaaz Gill says she didn’t understand people’s love for Shah Rukh Khan initially, reveals why she’ll always address Salman Khan as ‘sir’ - The Indian Express",
                "description": "Shehnaaz Gill said that she wasn't a fan of Shah Rukh Khan till she actually saw his films.",
                "url": "https://indianexpress.com/article/entertainment/bollywood/shehnaaz-gill-didnt-understand-peoples-love-for-shah-rukh-khan-7879617/",
                "urlToImage": "https://images.indianexpress.com/2022/04/shehnaaz-gill-shah-rukh-khan.jpg",
                "publishedAt": "2022-04-21T06:10:48Z",
                "content": "During an interaction with comedian Tanmay Bhat, they reacted to the cult classic Andaz Apna Apna, and she opened up about her admiration for Shah Rukh. She said, “Punjab mein rehti thi, main apni du… [+1103 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Bollywood Life"
                },
                "author": "Janhvi Sharma",
                "title": "Palak Tiwari gets massively body-shamed over her latest look; netizens call her a 'skeleton' – view pics - Bollywood Life",
                "description": "Shweta Tiwari's daughter Palak Tiwari was recently trolled and body-shamed by haters for being too skinny. A user wrote,",
                "url": "https://www.bollywoodlife.com/photos/bollywood-galleries-palak-tiwari-gets-massively-body-shamed-over-her-latest-look-netizens-call-her-a-skeleton-view-pics-2054694/",
                "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2022/04/MicrosoftTeams-image-638-600x315.jpg",
                "publishedAt": "2022-04-21T05:51:31Z",
                "content": "A user wrote, Kaanta patla, while another user said, She need to eat some vada pao. Third user wrote, Ya stick kon hai."
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": null,
                "title": "Kiara Advani's look from Bhool Bhulaiyya 2 will send chills down your spine. Watch - India Today",
                "description": "Kiara Advani's first look from Bhool Bhulaiyya 2 has been released and fans are super-excited! The film releases on May 20, 2022.",
                "url": "https://www.indiatoday.in/movies/bollywood/story/kiara-advani-s-look-from-bhool-bhulaiyya-2-will-send-chills-down-your-spine-watch-1939986-2022-04-21",
                "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/kiara__8_-647x363.png?.Y5CUJamfFXVYcSR2pzClOFXvG44s5VP",
                "publishedAt": "2022-04-21T05:50:53Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "etimes.in",
                "title": "A 27-year-old shot in Karnataka during the screening of' KGF 2' - Times of India",
                "description": "A 27-year-old man was shot a couple of times by an unknown person at the Rajashree cinema house in Haveri, Karnatak",
                "url": "https://timesofindia.indiatimes.com/entertainment/telugu/movies/news/a-27-year-old-shot-in-karnataka-during-the-screening-of-kgf-2/articleshow/90972717.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-90972752,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-19170/90972752.jpg",
                "publishedAt": "2022-04-21T05:36:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Bollywood Life"
                },
                "author": "Nikita Thakkar",
                "title": "Akshay Kumar, Rashmika Mandanna, Ranveer Singh and more stars who were massively trolled for controversial ads - Bollywood Life",
                "description": "Akshay Kumar had to issue an apology after he received severe backlash over his latest advertisement. Here's a list of stars who have been trolled for similar reasons.",
                "url": "https://www.bollywoodlife.com/photos/akshay-kumar-rashmika-mandanna-ranveer-singh-and-more-stars-who-were-massively-trolled-for-controversial-ads-bollywood-galleries-entertainment-news-2054655/",
                "urlToImage": "https://st1.bollywoodlife.com/wp-content/uploads/2022/04/Akshay-15-600x315.png",
                "publishedAt": "2022-04-21T05:24:49Z",
                "content": "Akshay Kumar is currently ruling the headlines. The actor has extended an apology to his fans after he received backlash for being a part of an advertisement promoting a tobacco brand. It was recentl… [+506 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Entertainment Desk",
                "title": "Mandana Karimi clarifies her ‘well-known director’ ex isn't Anurag Kashyap - Hindustan Times",
                "description": "Mandana Karimi has clarified that the director with whom she had a 'secret relationship' with isn't Anurag Kashyap. She said that Anurag and she ‘are still friends' whereas the filmmaker with whom she was in a relationship, isn't her friend. | Web Series",
                "url": "https://www.hindustantimes.com/entertainment/web-series/lock-upp-s-mandana-karimi-clarifies-her-well-known-director-boyfriend-isn-t-anurag-kashyap-we-re-friends-101650516607780.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/Mandana_Karimi-Anurag_Kashyap_1650517056421_1650517066431.jfif",
                "publishedAt": "2022-04-21T05:19:16Z",
                "content": "Mandana Karimi, actor, model and recently evicted Lock Upp contestant, has said that the 'very well-known director' with whom she had a 'secret relationship' isn't filmmaker Anurag Kashyap. In a new … [+3448 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Nimrat Kaur On Her Absence From Bollywood: \"I Genuinely Wanted To Work...\" - NDTV Movies",
                "description": "\"I haven't consciously stayed away from Bollywood,\" said Nimrat Kaur",
                "url": "https://www.ndtv.com/entertainment/nimrat-kaur-on-her-absence-from-bollywood-i-genuinely-wanted-to-work-2906071",
                "urlToImage": "https://c.ndtvimg.com/2022-04/ik7g5r18_nimrat-kaur_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T05:16:46Z",
                "content": "Nimrat on break from Bollywood (Courtesy: nimratofficial)\r\nNew Delhi: Nimrat Kaur was last seen in Abhishek Bachchan's Dasvi as Bimla Devi. This was her first Bollywood project in seven years. Now, i… [+1562 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Buzz Staff",
                "title": "Hardik Pandya 'Ditched' IPL to Perform at Coachella With Doja Cat. Here's 'Proof' - News18",
                "description": "Gujarat Titans captain Hardik Pandya is an all-rounder indeed.",
                "url": "https://www.news18.com/news/buzz/hardik-pandya-ditched-ipl-to-perform-at-coachella-with-doja-cat-heres-proof-5023147.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/04/hardik-pandya-coachella-165051595816x9.png",
                "publishedAt": "2022-04-21T04:47:10Z",
                "content": "Did Hardik Pandya leave IPL 2022 midway to attend the Coachella 2022? Not really. Although Hardik Pandya has an elder sibling in Krunal Pandya, the younger Pandya brother may have a doppelganger in a… [+2115 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Sohini Sengupta",
                "title": "Little girl practising an introduction before entering classroom is a must-watch - Hindustan Times",
                "description": "This video that has gone viral on Instagram shows how a little girl, Harley Mae, practices how to introduce herself before entering her classroom. | Trending",
                "url": "https://www.hindustantimes.com/trending/little-girl-practising-an-introduction-before-entering-classroom-is-a-mustwatch-101650514173773.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/Little_girl_practising_an_introduction_before_entering_classroom_is_a_must_watch_1650515119567_1650515134971.png",
                "publishedAt": "2022-04-21T04:26:36Z",
                "content": "Do you remember your first day of school? And now with the pandemic, many little kids are going to school for the first time in their life. And this is making them quite anxious about how they will m… [+1586 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thedirect.com"
                },
                "author": "Russ Milheim",
                "title": "Marvel Accidentally Reveals Moon Knight Episode 4 Deleted Scene Details - The Direct",
                "description": "A new recap of Moon Knight's fourth episode posted by Marvel has revealed a deleted scene not included on the final cut of the installment found on Disney+.",
                "url": "https://thedirect.com/article/moon-knight-episode-4-deleted-scene",
                "urlToImage": "https://images.thedirect.com/media/article_full/moon-knight-deleted-scene.jpg",
                "publishedAt": "2022-04-21T03:43:54Z",
                "content": "WARNING: This article contains spoilers for Episode 4 of Moon Knight.\r\nThe Marvel Studios Disney+ series Moon Knight just aired its fourth episode, and fans across the world are undoubtedly still pro… [+3421 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Entertainment Bureau",
                "title": "Tejasswi Prakash Blushes When Asked To Show Mehendi Dedicated To Karan Kundrra On Lock Upp Sets - News18",
                "description": "Tejasswi Prakash was spotted on the sets of Lock Upp on Wednesday night. The actress made her way to Kangana Ranaut's show to pick her boyfriend Karan Kundrra.",
                "url": "https://www.news18.com/news/movies/tejasswi-prakash-blushes-when-asked-to-show-mehendi-dedicated-to-karan-kundrra-on-lock-upp-sets-5022697.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/04/tejasswi-prakash-165051133216x9.jpg",
                "publishedAt": "2022-04-21T03:25:33Z",
                "content": "Tejasswi Prakash made her way to the sets of Lock Upp to pick up her beau Karan Kundrra after his shoot. The actor is seen as the jailer on the reality show hosted by Kangana Ranaut. On Wednesday nig… [+1566 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": null,
                "title": "Vicky Kaushal takes a dip in Ganga in Rishikesh, a female fan writes, 'Roz Roz kaise Dil aa Jata hai tum pe' - Times of India",
                "description": "A video of Vicky Kaushal is doing rounds on social media. One of the talented actors in the current generation of Btown stars, Vicky recently took to his Instagram handle and shared a video of himself taking a dip in river Ganga. The video was shot at Rishike…",
                "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/vicky-kaushal-takes-a-dip-in-ganga-in-rishikesh-a-female-fan-writes-roz-roz-kaise-dil-aa-jata-hai-tum-pe/videoshow/90970353.cms",
                "urlToImage": "https://timesofindia.indiatimes.com/photo/90970353/size-50494/90970353.jpg",
                "publishedAt": "2022-04-21T03:14:00Z",
                "content": "A video of Vicky Kaushal\r\n is doing rounds on social media. One of the talented actors in the current generation of Btown stars, Vicky recently took to his Instagram handle and shared a video of hims… [+1558 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "etimes.in",
                "title": "Anushka Sharma's brother Karnesh Ssharma opens up about his sister stepping away from her production comp - Times of India",
                "description": "Anushka Sharma is one actress in Bollywood who has not only delivered some memorable performances as an actor but a",
                "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/anushka-sharmas-brother-karnesh-ssharma-opens-up-about-his-sister-stepping-away-from-her-production-company-says-her-priority-has-shifted/articleshow/90970054.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-90970054,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-31986/90970054.jpg",
                "publishedAt": "2022-04-21T02:51:00Z",
                "content": null
            }
        ],
        imageURL: '',
    },
    {
        title: 'Health',
        id: 5,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Long Covid More Severe In Women Than Men, Suggests Study - Mint",
                "description": "The study found that 91% of patients, who were followed up for five months on average, continued to experience Covid-19 symptoms. Breathlessness was the most common symptom of long Covid-19, followed by fatigue",
                "url": "https://www.livemint.com/news/india/long-covid-more-severe-in-women-than-men-suggests-study-11650538683775.html",
                "urlToImage": "https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg",
                "publishedAt": "2022-04-21T11:37:19Z",
                "content": "Post-coronavirus complications, also called long Covid syndrome, induce more symptoms in women than men, a new study has found. \r\nThe new research, published in the Journal of Women's Health, reveale… [+2402 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The European Scientist"
                },
                "author": "Alex Reis",
                "title": "Air pollution increases risk of getting COVID-19 in young adults - The European Scientist",
                "description": "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open.",
                "url": "https://www.europeanscientist.com/en/environment/air-pollution-increases-risk-of-getting-covid-19-in-young-adults/",
                "urlToImage": "https://www.europeanscientist.com/wp-content/uploads/2022/04/46385A43-4ABE-46E7-8556-37B944126F7F.jpeg",
                "publishedAt": "2022-04-21T11:22:43Z",
                "content": "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open.\r\nAs pollutants can increase the risk of… [+2206 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thewire.in"
                },
                "author": "Prakash Nagarkatti and Mitzi Nagarkatti",
                "title": "Why We Can't 'Boost' Our Way Out of the COVID-19 Pandemic in the Long Term – The Wire Science - The Wire Science",
                "description": "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
                "url": "https://science.thewire.in/health/we-cannot-boost-our-way-out-of-covid-19-pandemic-in-long-term/",
                "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
                "publishedAt": "2022-04-21T11:20:35Z",
                "content": "A woman receives a booster shot of a COVID-19 vaccine at Taipei main station, Taiwan, January 24, 2022. Photo: Reuters/Ann Wang/File Photo\r\n<ul><li>mRNA vaccines have failed to provide long-term prot… [+7979 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Keralakaumudi.com"
                },
                "author": "Kerala Kaumudi",
                "title": "Let's manage pain, learn about 'Pain Medicine' - LIFESTYLE - GENERAL - Kerala Kaumudi ",
                "description": "Pain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more than 3 months.",
                "url": "https://keralakaumudi.com/en/news/news.php?id=797844&u",
                "urlToImage": "https://keralakaumudi.com/web-news/en/2022/04/NMAN0327506/image/pain.1650539584.jpg",
                "publishedAt": "2022-04-21T11:14:14Z",
                "content": "What is Pain Medicine?\r\nPain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more tha… [+6986 chars]"
            },
            {
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": "Dr. Michael Daignault, USA TODAY",
                "title": "We've long been told salt is bad for you. Is it really? - USA TODAY",
                "description": "We've long debated how bad salt really is in our diet. Table salt, however, is not actually the problem. Sodium and processed foods are the danger.",
                "url": "https://www.usatoday.com/story/life/health-wellness/2022/04/21/salt-sodium-how-much-too-much-your-food/7383952001/",
                "urlToImage": "https://www.gannett-cdn.com/-mm-/27594c94e294278da7a9705c8a139c700fad0370/c=0-188-1998-1312/local/-/media/2021/07/27/USATODAY/usatsports/french-fries-and-salt.jpg?auto=webp&format=pjpg&width=1200",
                "publishedAt": "2022-04-21T11:01:15Z",
                "content": "For years now, we’ve continued to debate whether salt is actually “bad” for our health. And in discussing healthy diet and lifestyle choices with both my ER patients and friends alike, the common thr… [+3565 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "THE WEEK"
                },
                "author": "PTI",
                "title": "Good HDL cholesterol may keep Alzheimer's away: study - The Week",
                "description": "Having good cholesterol or high-density lipoprotein (HDL) in the body is essential to health as it may protect the brain and keep Alzheimer's disease at bay, according to a recent study. Researchers from University of Southern California's (USC) Keck School o…",
                "url": "https://www.theweek.in/news/health/2022/04/21/good-hdl-cholesterol-may-keep-alzheimer-s-away--study-.html",
                "urlToImage": "https://www.theweek.in/content/dam/week/news/2020/images/2022/2/10/HDL-Good-HDL-cholesterol-high-density-lipoprotein-LDL.jpg",
                "publishedAt": "2022-04-21T10:46:17Z",
                "content": "Having good cholesterol or high-density lipoprotein (HDL) in the body is essential to health as it may protect the brain and keep Alzheimer's disease at bay, according to a recent study.\r\nResearchers… [+2926 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "CDC confirms 4 Americans got Coronavirus from Mink; here is all you need to know about the first animal-to-human transmission of COVID virus - Times of India",
                "description": "The US health agency recently revealed that a variant of COVID witnessed majorly in mink in 2020 had infected at least four Americans.",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/cdc-confirms-4-americans-got-coronavirus-from-mink-here-is-all-you-need-to-know-about-the-first-animal-to-human-transmission-of-covid-virus/photostory/90979229.cms",
                "urlToImage": "https://static.toiimg.com/photo/90979239.cms",
                "publishedAt": "2022-04-21T10:45:00Z",
                "content": "COVID-19 causing coronavirus belongs to a large family of viruses called coronavirus. As per the information available on the website of the CDC, some coronaviruses cause cold-like illnesses in peopl… [+728 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ANI News"
                },
                "author": null,
                "title": "Genetic differences can affect ability to utilize energy of various nutrients: Report - ANI News",
                "description": "Helsinki [Finland], April 21 (ANI): According to a new study by the University of Helsinki, minor genetic differences can affect the ability to utilize the energy of various nutrients.",
                "url": "https://www.aninews.in/news/health/genetic-differences-can-affect-ability-to-utilize-energy-of-various-nutrients-report20220421155949",
                "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/GENEEEEEEEE2022042109041120220421102941-thumbnail-154x87-70.jpg",
                "publishedAt": "2022-04-21T10:29:00Z",
                "content": "ANI | Updated: Apr 21, 2022 15:59 IST\r\nHelsinki [Finland], April 21 (ANI): According to a new study by the University of Helsinki, minor genetic differences can affect the ability to utilize the ener… [+3713 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Education Diary"
                },
                "author": "iednewsdesk",
                "title": "Johns Hopkins University: Mediterranean-Style Diet Further Linked to Reduced Risk of Preeclampsia in Pregnant Women of All Races - India Education Diary",
                "description": "A new Johns Hopkins Medicine study that surveyed a racially diverse group of more than 8,000 women has added to evidence that following a Mediterranean-style diet could lower the risk of preeclampsia by at least 20%.Preeclampsia is a potentially leth",
                "url": "https://indiaeducationdiary.in/johns-hopkins-university-mediterranean-style-diet-further-linked-to-reduced-risk-of-preeclampsia-in-pregnant-women-of-all-races/",
                "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2021/05/Johns-Hopkins-University.jpg",
                "publishedAt": "2022-04-21T10:21:08Z",
                "content": "A new Johns Hopkins Medicine study that surveyed a racially diverse group of more than 8,000 women has added to evidence that following a Mediterranean-style diet could lower the risk of preeclampsia… [+4835 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Education Diary"
                },
                "author": "iednewsdesk",
                "title": "Johns Hopkins University: Lab Grown, Self-Sustainable Muscle Cells Repair Muscle Injury and Disease, Mouse Study Shows - India Education Diary",
                "description": "In proof-of-concept experiments, Johns Hopkins Medicine scientists say they have successfully cultivated human muscle stem cells capable of renewing themselves and repairing muscle tissue damage in mice, potentially advancing efforts to treat muscle",
                "url": "https://indiaeducationdiary.in/johns-hopkins-university-lab-grown-self-sustainable-muscle-cells-repair-muscle-injury-and-disease-mouse-study-shows/",
                "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2021/05/Johns-Hopkins-University.jpg",
                "publishedAt": "2022-04-21T10:21:08Z",
                "content": "In proof-of-concept experiments, Johns Hopkins Medicine scientists say they have successfully cultivated human muscle stem cells capable of renewing themselves and repairing muscle tissue damage in m… [+4568 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET Online",
                "title": "Did you have pneumonia during Covid infection? You may be at a great risk of dementia, says study - Economic Times",
                "description": "Those with Covid pneumonia have higher risk of dementia than others.",
                "url": "https://economictimes.indiatimes.com/magazines/panache/did-you-have-pneumonia-during-covid-infection-you-may-be-at-a-great-risk-of-dementia-says-study/articleshow/90977886.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-90978178,width-1070,height-580,imgsize-1507897,overlay-etpanache/photo.jpg",
                "publishedAt": "2022-04-21T09:38:00Z",
                "content": "The long term impact of Covid is truly taking a new meaning. According to a recent study conducted by the University of Missouri (MU) researchers, patients who suffered from pneumonia during their Co… [+1679 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET HealthWorld",
                "title": "Bacteria in urine may signal aggressive prostate cancer: Study - ETHealthWorld",
                "description": "Researchers in the UK have identified five types of bacteria in urine which may be linked to aggressive prostate cancer. The findings, published in the journal European Urology Oncology, could help pave the way for treatments that could target these particula…",
                "url": "https://health.economictimes.indiatimes.com/news/diagnostics/bacteria-in-urine-may-signal-aggressive-prostate-cancer-study/90976478",
                "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-90976478,imgsize-63992,width-1200,height-628,overlay-ethealthworld/bacteria-in-urine-may-signal-aggressive-prostate-cancer-study.jpg",
                "publishedAt": "2022-04-21T09:15:00Z",
                "content": "London, Researchers in the UK have identified five types of bacteria in urine which may be linked to aggressive prostate cancer. The findings, published in the journal European Urology Oncology, coul… [+3001 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Down To Earth Magazine"
                },
                "author": null,
                "title": "Genetically modified mosquitoes for controlling vector-borne diseases? Successful trial gives hope - Down To Earth Magazine",
                "description": "The findings were achieved after a decade of fight for public acceptance, regulatory approvals",
                "url": "https://www.downtoearth.org.in/news/science-technology/genetically-modified-mosquitoes-for-controlling-vector-borne-diseases-successful-trial-gives-hope-82495",
                "urlToImage": "https://cdn.downtoearth.org.in/library/large/2022-04-21/0.27720900_1650526400_istock-1033519616.jpg",
                "publishedAt": "2022-04-21T08:49:00Z",
                "content": "The findings were achieved after a decade of fight for public acceptance, regulatory approvalsPreliminary results of an open-air study of genetically engineered mosquitoes — with an aim to suppress a… [+3671 chars]"
            },
            {
                "source": {
                    "id": "the-irish-times",
                    "name": "The Irish Times"
                },
                "author": "Gina Kolata",
                "title": "Study finds no benefit to restricting diet by time of the day - The Irish Times",
                "description": "Research carried out in China included 139 people with obesity",
                "url": "https://www.irishtimes.com/life-and-style/health-family/study-finds-no-benefit-to-restricting-diet-by-time-of-the-day-1.4858302",
                "urlToImage": "https://www.irishtimes.com/image-creator/?id=1.4858301&origw=1440",
                "publishedAt": "2022-04-21T08:41:28Z",
                "content": "The weight-loss idea is quite appealing: Limit your eating to a period of six to eight hours each day, during which you can have whatever you want.\r\nStudies in mice seemed to support so-called time-r… [+5057 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Weather Channel"
                },
                "author": null,
                "title": "During Pregnancy, Inhaled Nanoparticles Can Enter the Placenta from Lungs, Cause Low Birth Weight in Babies: Study | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
                "description": "Nanoparticles are particles between 1 and 100 nanometers wide and are found in thousands of common products such as sunscreens, pharmaceuticals and sports equipment. - Articles from The Weather Channel | weather.com",
                "url": "https://weather.com/en-IN/india/health/news/2022-04-21-inhalation-of-nanoparticles-cause-low-birth-weight-in-babies",
                "urlToImage": "https://s.w-x.co/in-fetus.jpg",
                "publishedAt": "2022-04-21T07:17:05Z",
                "content": "Inhaling harmful nanoparticles during pregnancy can cause them to escape the lungs and enter the placenta, resulting in babies with low birth weights, according to a study.\r\nNanoparticles are particl… [+2335 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Zoom"
                },
                "author": "TN Digital",
                "title": "Intermittent fasting is not for all, experts list health problems that could worsen on this diet - Times Now",
                "description": "Intermittent fasting decreases glucose concentration and increases fatty acid oxidation which helps the body break down stored fats.",
                "url": "https://www.timesnownews.com/health/intermittent-fasting-is-not-for-all-experts-list-health-problems-that-could-worsen-on-this-diet-article-90974386",
                "urlToImage": "https://static.tnn.in/thumb/msid-90974386,imgsize-100,width-1280,height-720,resizemode-75/90974386.jpg",
                "publishedAt": "2022-04-21T06:50:00Z",
                "content": "As COVID-19 cases rise in Delhi, here's what experts have to say on Omicron variant, opening of schools, vaccination and more"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Lifestyle Desk",
                "title": "Worried About Your Family’s Health Due to White Sugar? Here Are Some Amazing Healthy Alternatives - News18",
                "description": "To help you make better diet choices and yet continue enjoying the same sweetness, here are 5 healthy substitutes to processed sugar that not only make your food tasty but also have their own health benefits.",
                "url": "https://www.news18.com/news/lifestyle/worried-about-your-familys-health-due-to-white-sugar-here-are-some-amazing-healthy-alternatives-5021071.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2021/12/sugar-2-164088097016x9.jpg",
                "publishedAt": "2022-04-21T06:36:36Z",
                "content": "While sugary foods and sweets uplift our moods like nothing else, it isnt hidden from anyone that sugar is more harmful than beneficial. Excessive processed sugar consumption can cause chronic health… [+1943 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Citytoday.news"
                },
                "author": "Murali",
                "title": "Liver cancer is increasing because of unhealthy lifestyle – Mysuru Today - citytoday",
                "description": "Prime News, National, Karnataka, Health, Disease, Mysuru, April 21:- Liver cancer is rising because of an unhealthy lifestyle, said Dr M S Vishveshwara, Chief Radiation Oncologist and Medical Superint",
                "url": "https://citytoday.news/liver-cancer-is-increasing-because-of-unhealthy-lifestyle/",
                "urlToImage": null,
                "publishedAt": "2022-04-21T05:41:53Z",
                "content": "Prime News, National, Karnataka, Health, Disease, Mysuru, April 21:- Liver cancer is rising because of an unhealthy lifestyle, said Dr M S Vishveshwara, Chief Radiation Oncologist and Medical Superin… [+2215 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News-Medical.Net"
                },
                "author": null,
                "title": "What Diseases Can You Get From Mosquitoes? - News-Medical.Net",
                "description": "Mosquito-borne diseases are infectious diseases that are spread by the bite of infected mosquitoes carrying the pathogens.",
                "url": "https://www.news-medical.net/health/Mosquito-borne-Diseases.aspx",
                "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22408_16505192945721791.jpg",
                "publishedAt": "2022-04-21T05:22:00Z",
                "content": "IntroductionBackgroundProtective measuresDiseases by Mosquito TypeMalariaDengueYellow FeverZikaChikungunyaWest Nile VirusJapanese Encephalitis (JE)Lymphatic FilariasisReferencesFurther Reading\r\nMosqu… [+12385 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "AP",
                "title": "Puzzling outbreak of liver disease in kids spreads to EU, US - The Indian Express",
                "description": "British officials reported 74 cases of hepatitis, or liver inflammation, found in children since January.",
                "url": "https://indianexpress.com/article/parenting/health-fitness/puzzling-outbreak-of-liver-disease-in-kids-spreads-to-eu-us-7879146/",
                "urlToImage": "https://images.indianexpress.com/2022/04/world-hepatitis-day_1200_thinkstockphotos-482859418.jpg",
                "publishedAt": "2022-04-21T05:11:54Z",
                "content": "Health officials say they have detected more cases of a mysterious liver disease in children that was first identified in Britain, with new infections spreading to Europe and the U.S.Last week, Briti… [+2340 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News-Medical.Net"
                },
                "author": null,
                "title": "Researchers test an experimental treatment for metastatic cancer - News-Medical.Net",
                "description": "Researchers at the University of Oklahoma are testing an experimental treatment for metastatic cancer focusing on pancreatic cancer.",
                "url": "https://www.news-medical.net/news/20220420/Researchers-test-an-experimental-treatment-for-metastatic-cancer.aspx",
                "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/174318220-620x480.jpg",
                "publishedAt": "2022-04-21T03:43:00Z",
                "content": "Researchers at the University of Oklahoma are testing an experimental treatment for metastatic cancer focusing on pancreatic cancer. Metastasis, the condition when cancer cells spread beyond the orig… [+3107 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News-Medical.Net"
                },
                "author": null,
                "title": "Revolutionary mRNA vaccine technology: History, facts and the future - News-Medical.Net",
                "description": "mRNA vaccine technology is a field full of promise – as well as unanswered questions – for communities living with the burden of the world’s most deadly infectious diseases.",
                "url": "https://www.news-medical.net/news/20220420/Revolutionary-mRNA-vaccine-technology-History-facts-and-the-future.aspx",
                "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Malaria_3-620x480.jpg",
                "publishedAt": "2022-04-21T03:40:00Z",
                "content": "mRNA vaccine technology is a field full of promise – as well as unanswered questions – for communities living with the burden of the world’s most deadly infectious diseases.\r\nDespite appearances, mRN… [+7815 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC Focus Magazine"
                },
                "author": "Victoria Woollaston",
                "title": "“Microbiome friendly” beauty products: Do they work? - BBC Science Focus Magazine",
                "description": "More and more hygiene products are claiming to be ‘microbiome friendly’ but how important is our skin microbiome, and can an out-of-whack bacterial community lead to conditions like eczema and dry skin?",
                "url": "https://www.sciencefocus.com/news/skin-microbiome-beauty-products/",
                "urlToImage": "https://images.immediate.co.uk/production/volatile/sites/4/2022/04/Skin-microbiome-products-326e8ad.jpg",
                "publishedAt": "2022-04-21T03:10:25Z",
                "content": "At the moment were born, each of us is seeded with trillions of bacteria cells that live and thrive on our skin. These cells form whats known as our skin microbiome. The exact makeup of each persons … [+7887 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "More Impactful Omicron Sublineages: Virologist Explains 3 Ways Covid Variant Is Evolving | Mint - Mint",
                "description": "Noting that Omicron emerged as three distinct lineages BA.1, BA.2 and BA.3, he said that despite the head start of BA.1, we've seen BA.2 overtake BA.1 across the world over the course of January to April.",
                "url": "https://www.livemint.com/news/world/more-impactful-omicron-sublineages-virologist-explains-3-ways-covid-variant-is-evolving-11650504424902.html",
                "urlToImage": "https://images.livemint.com/img/2022/04/21/600x338/coronavirus_1608178200730_1608178208280_1650507833493.PNG",
                "publishedAt": "2022-04-21T02:24:48Z",
                "content": "With too many Omicron sub-variants circulating at the moment, eminent virologist Trevor Bedford pointed out we are likely to see more impactful sublineages of the variant in the recent future. He fur… [+2338 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Asianetnews.com"
                },
                "author": "Team Newsable",
                "title": "Breakfast that can control your 'blood sugar' levels: protein to fibre-rich fruits and more - Asianet Newsable ",
                "description": "Here are some healthy breakfast options that can control your blood sugar levels; read on",
                "url": "https://newsable.asianetnews.com/gallery/lifestyle/breakfast-that-can-control-your-blood-sugar-levels-protein-to-fibre-rich-fruits-and-more-rba-ran6vm",
                "urlToImage": "https://static-ai.asianetnews.com/images/01fsnvn31yd12wmpa8rdvbemr1/omicron-affecting-diabetic-patient--4-_1200x630xt.jpg",
                "publishedAt": "2022-04-21T01:30:35Z",
                "content": "Here are some healthy breakfast options that can control your blood sugar levels; read on\r\nMany experts recommend including all food categories in breakfast to effectively regulate sugar levels, incl… [+2148 chars]"
            }
        ],
        imageURL: '',
    },
    {
        title: 'Science',
        id: 6,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "Interesting Engineering"
                },
                "author": "Chris Young",
                "title": "New \"bacteria bricks\" could be the building blocks for future Mars habitats - Interesting Engineering",
                "description": "Scientists working with the Indian Space Research Organization (ISRO) proposed a method for building habitats on Mars using \"bacteria bricks\".",
                "url": "https://interestingengineering.com/bacteria-bricks-mars-habitats",
                "urlToImage": "https://inteng-storage.s3.amazonaws.com/img/iea/y5wW5B1pGX/sizes/mars-habitat_md.jpeg",
                "publishedAt": "2022-04-21T11:59:54Z",
                "content": "Scientists working with the Indian Space Research Organization (ISRO) proposed a method for building habitats on Mars using \"bacteria bricks\", a press statement reveals.\r\nIn a paper in the journal PL… [+1953 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Devdiscourse"
                },
                "author": "Devdiscourse News Desk",
                "title": "Black holes demolish thousands of nearby stars to fuel growth, reveals new Chandra study - Devdiscourse",
                "description": "Read more about Black holes demolish thousands of nearby stars to fuel growth, reveals new Chandra study on Devdiscourse",
                "url": "https://www.devdiscourse.com/article/science-environment/2011093-black-holes-demolish-thousands-of-nearby-stars-to-fuel-growth-reveals-new-chandra-study",
                "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/26_01_2022_07_13_09_0644018.jpg?width=920&format=jpeg",
                "publishedAt": "2022-04-21T10:34:40Z",
                "content": "A new survey of over 100 galaxies has found that black holes raze thousands of stars and use their remains to pack on weight. This discovery, made with NASA's Chandra X-ray Observatory, could help ex… [+1729 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thevalleypost.com"
                },
                "author": "Izer",
                "title": "NASA's Creativity Helicopter continues to defy expectations - Valley Post",
                "description": "After more than a year of accomplishments, NASA has extended flight operations for the Mars Innovation helicopter through September. The space agency's",
                "url": "https://www.thevalleypost.com/nasas-creativity-helicopter-continues-to-defy-expectations/",
                "urlToImage": "https://www.thevalleypost.com/wp-content/uploads/2022/04/NASAs-Creativity-Helicopter-continues-to-defy-expectations.jpg",
                "publishedAt": "2022-04-21T10:14:39Z",
                "content": "After more than a year of accomplishments, NASA has extended flight operations for the Mars Innovation helicopter through September. \r\nThe space agency’s $2.2 billion spacecraft touched down on Mars … [+3281 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Republic World"
                },
                "author": "Harsh Vardhan",
                "title": "NASA defers arrival of Axiom Space astronauts to April 24; SpaceX Crew-4 delayed again - Republic World",
                "description": "NASA said that the departure of Axiom-1 astronauts from ISS has been pushed to 6:05 am (IST) on April 24 and the new splashdown timing is 11:16 pm.",
                "url": "https://www.republicworld.com/science/space/nasa-defers-arrival-of-axiom-space-astronauts-to-april-24-spacex-crew-4-delayed-again-articleshow.html",
                "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/cclaqcsneeghmbh0_1650535574.jpeg",
                "publishedAt": "2022-04-21T10:13:00Z",
                "content": "The private astronaut team of Axiom Space will stay aboard the International Space Station (ISS) for a couple more days as NASA is still waiting for the weather to turn favourable. In a recent missio… [+1923 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Space.com"
                },
                "author": "Mike Wall",
                "title": "SpaceX Falcon 9 rocket to launch on record-tying 12th mission Thursday: Watch it live - Space.com",
                "description": "Liftoff is scheduled for Thursday (April 21) at 11:14 a.m. EDT (1514 GMT).",
                "url": "https://www.space.com/spacex-falcon-9-starlink-group-4-14-launch",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/PZDRzAF3YK9BzYCmgWL3sE-1200-80.jpg",
                "publishedAt": "2022-04-21T10:00:32Z",
                "content": "A SpaceX Falcon 9 rocket will lift off for a record-tying 12th time on Thursday (April 21), and you can watch the action live.\r\nThe two-stage Falcon 9\r\n is scheduled to launch Thursday at 11:14 a.m. … [+2891 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Watch: NASA's Perseverance Rover Captures Stunning Video of Solar Eclipse On Mars - NDTV",
                "description": "NASA's Perseverance Mars rover has captured a mesmerising video of a solar eclipse on the Red Planet. The camera onboard the SUV-sized rover captured the footage of Phobos, Mars potato-shaped moon, crossing the face of the Sun.",
                "url": "https://www.ndtv.com/world-news/watch-nasas-perseverance-rover-captures-stunning-video-of-solar-eclipse-on-mars-2906661",
                "urlToImage": "https://c.ndtvimg.com/2022-04/6mucfk4g_mars-650_625x300_21_April_22.jpg",
                "publishedAt": "2022-04-21T09:02:03Z",
                "content": "The eclipse lasted a little over 40 seconds.\r\nUS space agency National Aeronautics and Space Administration's (NASA) Perseverance Mars rover has captured a mesmerising video of a solar eclipse on the… [+2009 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Buzz Staff",
                "title": "Fire in Space: NASA Reveals Findings of 5-Year-long Combustion Experiment on ISS - News18",
                "description": "The experiments began back in 2017, results of which came to light recently",
                "url": "https://www.news18.com/news/buzz/fire-in-space-nasa-reveals-findings-of-5-year-long-combustion-experiment-on-iss-5025373.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/nasa-3-1-164334244716x9.png",
                "publishedAt": "2022-04-21T08:25:31Z",
                "content": "Human civilisation took a giant leap toward modern-day sapiens when fire was discovered. Fire, although seen and used everywhere, still has some secrets waiting to be unravelled. There still are char… [+2016 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thesaxon.org"
                },
                "author": null,
                "title": "NASA has mapped the sunrise on Mars - The Saxon",
                "description": "April 21, 2022, 10:39 am Science and Technology The picture was taken on April 10, 2022. Representatives of the US National Aeronautics and Space Administration (NASA) shared another extraterrestrial footage. It depicts the sunrise on Mars. The photo, as note…",
                "url": "https://thesaxon.org/nasa-has-mapped-the-sunrise-on-mars/",
                "urlToImage": null,
                "publishedAt": "2022-04-21T08:15:41Z",
                "content": "April 21, 2022, 10:39 am Science and Technology The picture was taken on April 10, 2022.\r\nRepresentatives of the US National Aeronautics and Space Administration (NASA) shared another extraterrestria… [+1205 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Weather Channel"
                },
                "author": null,
                "title": "Scientists Finally Produce Explanation for Dune Formation On Jupiter's Moon, Io | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
                "description": "Data from the Galileo mission, which ran from 1989 to 2003, revealed that volcanic activity on Io is so high that its volcanoes resurface the small world repeatedly and rapidly. - Articles from The Weather Channel | weather.com",
                "url": "https://weather.com/en-IN/india/space/news/2022-04-21-scientist-offer-explanation-dune-formation-jupiter-moon-io",
                "urlToImage": "https://s.w-x.co/in-jupiter_moon_io.jpg",
                "publishedAt": "2022-04-21T08:02:19Z",
                "content": "Jupiters innermost moon, Io, has grand meandering ridges whose existence should not be possible owing to its icy and roiling surface. While their presence had left scientists perplexed for years, a s… [+2070 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ThePrint"
                },
                "author": null,
                "title": "On Jupiter’s icy moon Europa, shallow pools of underground salt water offer promise of life - ThePrint",
                "description": "While shallow water processes have been suspected on Europa, if findings of study are confirmed, it could mean they play bigger-than-expected role in shaping its surface features.",
                "url": "https://theprint.in/science/on-jupiters-icy-moon-europa-shallow-pools-of-underground-salt-water-offer-promise-of-life/923670/",
                "urlToImage": "https://static.theprint.in/wp-content/uploads/2022/04/Europa_moon.jpg",
                "publishedAt": "2022-04-21T07:23:12Z",
                "content": "Bengaluru: A new study has hinted at the presence of shallow pools of underground salt water under the icy shell of Europa, Jupiter’s sixth closest moon and the smallest of the four Galilean moons, m… [+4448 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "NASA says Hubble Space Telescope awesome dance of 5 galaxies; Check photo - HT Tech",
                "description": "NASA says Hubble Space Telescope captured a mesmerizing look of an unusual collection of five galaxies. NASA says it is unique!",
                "url": "https://tech.hindustantimes.com/tech/news/nasa-says-hubble-space-telescope-awesome-dance-of-5-galaxies-check-photo-71650523114670.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/Hubble_telescope_1650523202227_1650523253830.png",
                "publishedAt": "2022-04-21T06:41:33Z",
                "content": "32 years! Thats how much time has been spent by NASA's Hubble Space Telescope to discover new galaxies, mesmerizing moments of stars, planets, and a lot more. Yes, it is the birthday of the Hubble Sp… [+2255 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News9live.com"
                },
                "author": "News9 Staff",
                "title": "Chinas Earth 2.0 is the latest dream that fuels mankinds interstellar ambitions - News9 LIVE",
                "description": "The mission, currently in its initial design phase, will be funded by the Chinese Academy of...",
                "url": "https://www.news9live.com/science/chinas-earth-20-is-the-latest-tool-that-fuels-mankinds-interstellar-ambitions-165813",
                "urlToImage": "https://media.news9live.com/h-upload/2022/04/21/308219-exoplanets.jpg",
                "publishedAt": "2022-04-21T06:39:10Z",
                "content": "Space is fascinating, and one of the major reasons for it is how little we know about the world outside our tiny blue planet. Space agencies around the world are spending billions in their search for… [+3772 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Devdiscourse"
                },
                "author": "Devdiscourse News Desk",
                "title": "Science News Roundup: Scientists prepare for CERN collider restart in the hunt for \"dark matter\"; Omicron BA.2 overall makes up more than 90% of COVID variants in U.S. - CDC and more - Devdiscourse",
                "description": "Read more about Science News Roundup: Scientists prepare for CERN collider restart in the hunt for \"dark matter\"; Omicron BA.2 overall makes up more than 90% of COVID variants in U.S. - CDC and more  on Devdiscourse",
                "url": "https://www.devdiscourse.com/article/science-environment/2010708-science-news-roundup-scientists-prepare-for-cern-collider-restart-in-the-hunt-for-dark-matter-omicron-ba2-overall-makes-up",
                "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/12_03_2022_17_47_32_547558.jpg?width=920&format=jpeg",
                "publishedAt": "2022-04-21T05:03:13Z",
                "content": "Following is a summary of current science news briefs.\r\nScientists prepare for CERN collider restart in the hunt for \"dark matter\"\r\nScientists at Europe's physics research center will this week fire … [+3701 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "Do NOT miss April 23-29 sunrise! RARE celestial view of 4 planets coming; MOON and Mercury to join later - HT Tech",
                "description": "The four planets of our solar system will line up as a quartet on the dawn hours of April 29. NASA says you don’t need telescope to see it.",
                "url": "https://tech.hindustantimes.com/tech/news/do-not-miss-april-23-29-sunrise-rare-celestial-view-of-4-planets-coming-moon-and-mercury-to-join-later-71650515334974.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/Space_1650515656075_1650515661318.jpg",
                "publishedAt": "2022-04-21T04:32:00Z",
                "content": "If you love stargazing, then prepare to give up your sleep a little and wake up early on April 29. We know it sounds cruel for all the sleep lovers but the view will be worth it. Because NASA says th… [+2068 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Astronaut Speaks on 50th Anniversary of Apollo 16 Launch - WHNT News 19",
                "description": "50 years ago Wednesday, Apollo 16 astronauts John Young and Charlie Duke landed on the surface of the moon. To celebrate that anniversary Duke took the time ...",
                "url": "https://www.youtube.com/watch?v=wQGlWcOOXCw",
                "urlToImage": "https://i.ytimg.com/vi/wQGlWcOOXCw/maxresdefault.jpg",
                "publishedAt": "2022-04-20T22:40:40Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "SlashGear"
                },
                "author": "Ray Fernandez",
                "title": "Why There Haven't Been More Trips To The Moon, According To Astronauts - SlashGear",
                "description": "NASA is working hard to return humans to the moon under its Artemis program, but why did it take so long to get the ball rolling? Here&#039;s what astronauts say.",
                "url": "https://www.slashgear.com/838817/why-there-havent-been-more-trips-to-the-moon-according-to-astronauts/",
                "urlToImage": "https://www.slashgear.com/img/gallery/why-there-havent-been-more-trips-to-the-moon-according-to-astronauts/l-intro-1650491069.jpg",
                "publishedAt": "2022-04-20T21:45:00Z",
                "content": "In 2019, Insider reported that astronauts believed budget and politics were the main barriers that kept humanity away from returning to the moon. \"If it wasn't for the political risk, we would be on … [+1834 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Loren Grush",
                "title": "Astrobotic unveils private robotic lunar lander it aims to launch to the Moon this year - The Verge",
                "description": "On April 20th, commercial space company Astrobotic unveiled its new Peregrine robotic lunar lander, which the company aims to land on the Moon by the end of the year.",
                "url": "https://www.theverge.com/2022/4/20/23033696/astrobotic-peregrine-lunar-lander-nasa-moon",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/pQug_ftRVbzC1jRVfL1L4Y8BdQo=/0x147:2048x1219/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23404553/52018273796_b5aae3ff76_k.jpg",
                "publishedAt": "2022-04-20T20:16:56Z",
                "content": "Meet the Peregrine lander\r\nAstrobotic CEO John Thornton unveiling the Peregrine lander\r\nImage: Astrobotic\r\nThis afternoon, commercial space company Astrobotic unveiled its nearly complete robotic lun… [+5677 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Deccan Herald"
                },
                "author": "DHNS",
                "title": "A bat that navigates using sound - Deccan Herald",
                "description": "Egyptian fruit bats use echolocation during daylight hours even though they have good eyesight, according to a study by a team of researchers at Tel Aviv University. In their paper published in the journal Current Biology, the group suggests explanations for …",
                "url": "https://www.deccanherald.com/science-and-environment/a-bat-that-navigates-using-sound-1102436.html",
                "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2022/04/21/egyptian-fruit-bat-1102436-1650503411.jpg",
                "publishedAt": "2022-04-20T16:23:01Z",
                "content": "Egyptian fruit bats use echolocation during daylight hours even though they have good eyesight, according to a study by a team of researchers at Tel Aviv University. In their paper published in the j… [+864 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Tribune India"
                },
                "author": "The Tribune India",
                "title": "Surprised astronomers find new type of star explosion — a micronova - The Tribune India",
                "description": "Astronomers have detected a previously unknown type of stellar explosion called a micronova involving thermonuclear blasts at the polar regions of a type of burned-out star called a white dwarf after it has siphoned material from a companion star.",
                "url": "https://www.tribuneindia.com/news/science-technology/surprised-astronomers-find-new-type-of-star-explosion-%E2%80%94-a-micronova-388005",
                "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/4/2022_4$largeimg_121417954.JPG",
                "publishedAt": "2022-04-20T16:19:00Z",
                "content": "Washington, April 20\r\nAstronomers have detected a previously unknown type of stellar explosion called a micronova involving thermonuclear blasts at the polar regions of a type of burned-out star call… [+3665 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Phys.Org"
                },
                "author": "Maria Jimenez Moya",
                "title": "Sci-fi becomes real life: NASA doctor 'holoports' to International Space Station - Phys.org",
                "description": "Star Wars turned into real life? A NASA doctor appeared as a hologram at the International Space Station for a telemedicine visit with an astronaut in Oct. 8, 2021, according to a recent release from NASA.",
                "url": "https://phys.org/news/2022-04-sci-fi-real-life-nasa-doctor.html",
                "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2018/1-iss.jpg",
                "publishedAt": "2022-04-20T15:10:43Z",
                "content": "Star Wars turned into real life? A NASA doctor appeared as a hologram at the International Space Station for a telemedicine visit with an astronaut in Oct. 8, 2021, according to a recent release from… [+1457 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WION"
                },
                "author": "WION Web Team",
                "title": "Mysterious `flying whirlpool` over Hawaii turns out to be a dying SpaceX rocket - WION",
                "description": "The skies of Hawaii had a marvelous show on display just a few days ago. The night skies over the island lit up by a tiny speck that resembled a flying whirlpool. The spiral structure spun and spun as it fell till it disappeared.",
                "url": "https://www.wionews.com/science/mysterious-flying-whirlpool-over-hawaii-turns-out-to-be-dying-spacex-rocket-472434",
                "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/04/20/256050-spacex-whirlpool.jpg",
                "publishedAt": "2022-04-20T13:46:09Z",
                "content": "The skies of Hawaii had a marvelous show on display just a few days ago. The night skies over the island lit up by a tiny speck that resembled a 'flying whirlpool'. The spiral structure spun and spun… [+1083 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Siasat Daily"
                },
                "author": "ANI",
                "title": "Astronomers have discovered the most distant galaxy ever - The Siasat Daily",
                "description": "Cambridge: An international team of astronomers has discovered the most distant astronomical object of all time: a galaxy. Shining only about 300 million years after the Big Bang, it may contain the oldest stars in the universe or a supermassive black hole. T…",
                "url": "https://www.siasat.com/astronomers-have-discovered-the-most-distant-galaxy-ever-2312449/",
                "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2022/04/galaxy_apr20.jpg",
                "publishedAt": "2022-04-20T13:44:00Z",
                "content": "Cambridge: An international team of astronomers has discovered the most distant astronomical object of all time: a galaxy. Shining only about 300 million years after the Big Bang, it may contain the … [+4127 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Tech Explorist"
                },
                "author": "https://www.facebook.com/sakharkar.ashwini",
                "title": "Scientists successfully visualized crystal nucleation - Tech Explorist",
                "description": "Paving the way for the design of safer and more stable active substances.",
                "url": "https://www.techexplorist.com/scientists-successfully-visualized-crystal-nucleation/46551/",
                "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2022/04/crystal-wand.jpg",
                "publishedAt": "2022-04-20T11:20:25Z",
                "content": "While crystallization is a ubiquitous and necessary process, the microscopic picture of crystal nucleation is yet to be established. It is important to develop the tiny picture of crystal nucleation … [+1753 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Republic World"
                },
                "author": "Harsh Vardhan",
                "title": "SpaceX rolls out Falcon 9 and Dragon capsule to launch pad for NASA's Crew-4 mission - Republic World",
                "description": "SpaceX, on April 19, rolled out its Falcon 9 rocket mounted with the Dragon capsule to Launch Complex 39A at NASA's Kennedy Space Center in Florida.",
                "url": "https://www.republicworld.com/science/space/spacex-rolls-out-falcon-9-and-dragon-capsule-to-launch-pad-for-nasas-crew-4-mission-articleshow.html",
                "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/kzyxvyzeyi7zmchy_1650451864.jpeg",
                "publishedAt": "2022-04-20T11:11:00Z",
                "content": "SpaceX, on April 19, rolled out its Falcon 9 rocket mounted with the Dragon capsule to Launch Complex 39A at NASA's Kennedy Space Center in Florida. The rocket is being prepared for the Crew-4 missio… [+2279 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Devdiscourse"
                },
                "author": "Devdiscourse News Desk",
                "title": "See this angelic image of two merging galaxies captured by Hubble telescope - Devdiscourse",
                "description": "Read more about See this angelic image of two merging galaxies captured by Hubble telescope on Devdiscourse",
                "url": "https://www.devdiscourse.com/article/science-environment/2009393-see-this-angelic-image-of-two-merging-galaxies-captured-by-hubble-telescope",
                "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/20_04_2022_11_45_30_2033076.jpg?width=920&format=jpeg",
                "publishedAt": "2022-04-20T06:15:46Z",
                "content": "The NASA/ESA Hubble Space Telescope has captured a stunning new image of two merging galaxies in the VV689 system (the Angel Wing). The two galaxies are in the midst of a collision, giving the impres… [+1282 chars]"
            }
        ],
        imageURL: '',
    },
    {
        title: 'Sports',
        id: 7,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "Manchester United"
                },
                "author": "Communications Department",
                "title": "Official statement: Erik ten Hag - Man Utd",
                "description": "Manchester United is delighted to announce the appointment of Erik ten Hag as Men's First Team Manager, subject to work visa requirements.",
                "url": "https://www.manutd.com/en/news/detail/erik-ten-hag-appointed-as-man-utd-manager-official-statement",
                "urlToImage": "https://assets.manutd.com/AssetPicker/images/0/0/16/141/1084869/NMS_Article_Header_copy1650534418325_large.jpg",
                "publishedAt": "2022-04-21T10:10:00Z",
                "content": "<ul><li>Share With email</li><li>Copy Link</li></ul>\r\nManchester United is delighted to announce the appointment of Erik ten Hag as Mens First Team Manager, subject to work visa requirements, from th… [+82 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "'Even Shaheen doesn't bowl over 145 kph, but Umran...': Ex-Pakistan captain - Hindustan Times",
                "description": "After impressing Dale Steyn, Ravi Shastri, Sunil Gavaskar and Kapil Dev, Umran Malik's popularity has reached the other side of the border.",
                "url": "https://www.hindustantimes.com/cricket/ipl-2022-even-shaheen-afridi-doesn-t-bowl-over-145-kph-but-umran-malik-pakistan-legend-rashid-latif-says-srh-pacer-will-make-a-name-for-himself-101650531002768.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/21/1600x900/shaheen-umran-getty-ipl_1650531274939_1650531280372.jpg",
                "publishedAt": "2022-04-21T09:04:15Z",
                "content": "With one impressive performances after the other in IPL 2022, Umran Malik is winning admirers. From Dale Steyn to Ravi Shastri to Sunil Gavaskar to the legendary Kapil Dev, all are in awe of the 21-y… [+2337 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Formula 1"
                },
                "author": "F1",
                "title": "Sainz to remain with Ferrari until 2024 following contract extension - Formula 1",
                "description": "Ferrari have rewarded Carlos Sainz’s fine form with a fresh two-year contract that will keep him at the famous Formula 1 team until at least the end of 2024.",
                "url": "https://www.formula1.com/en/latest/article.breaking-sainz-to-remain-with-ferrari-until-2024-following-contract.5WQKCJkNKDXWEtZsAYkBh7.html",
                "urlToImage": "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/Preview/GettyImages-1390627528.jpg",
                "publishedAt": "2022-04-21T08:36:32Z",
                "content": "Ferrari have rewarded Carlos Sainzs fine form with a fresh two-year contract that will keep him at the famous Formula 1 team until at least the end of 2024.\r\nThe Spaniard had a stellar debut season w… [+2490 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Vishesh Roy",
                "title": "Watch: Arjun Tendulkar Cleans Up Ishan Kishan With Searing Yorker In Mumbai Indians Training - NDTV Sports",
                "description": "IPL 2022: Arjun Tendulkar bowled a brilliant yorker and it ended up castling Ishan Kishan during a training session.",
                "url": "https://sports.ndtv.com/ipl-2022/arjun-tendulkar-cleans-up-ishan-kishan-with-searing-yorker-during-mumbai-indians-training-watch-2906507",
                "urlToImage": "https://c.ndtvimg.com/2022-02/lcc6k61o_arjun-tendulkar-bcci-ipl_625x300_13_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-04-21T08:15:35Z",
                "content": "Arjun Tendulkar is yet to play a game for the Mumbai Indians in the ongoing Indian Premier League (IPL) 2022 edition but he has already garnered a lot of attention and the fans are desperately waitin… [+1107 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "GQ India"
                },
                "author": "Umaima Saeed",
                "title": "Inside Rajasthan Royals bowler Yuzvendra Chahal’s luxurious life: A luxurious home in Gurgaon, Porsche Cayenne, over Rs 31 crore income from IPL and more - GQ India",
                "description": "Yuzvendra Chahal first came to the limelight when he ended the National Under-19 Cooch Behar Trophy in 2009 as its leading wicket-taker. Know about his luxurious life",
                "url": "https://www.gqindia.com/get-smart/content/inside-rajasthan-royals-bowler-yuzvendra-chahals-luxurious-life-a-luxurious-home-in-gurgaon-a-porsche-cayenne-rs-32-crore-income-ipl-and-more",
                "urlToImage": "https://assets.gqindia.com/photos/6260f9ee904ce73072684bbb/16:9/w_1280,c_limit/Yuzvendra%20Chahal%E2%80%99s%20luxurious%20life.jpeg",
                "publishedAt": "2022-04-21T07:27:29Z",
                "content": "Rajasthan Royals spin bowling sensation Yuzvendra Chahal was the showstopper on Monday during the IPL 2022 match against Kolkata Knight Riders. Chahal became the 19th bowler to take a hat-trick in th… [+1165 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "DAWN.com"
                },
                "author": "Reuters",
                "title": "Tennis star Maria Sharapova says she is pregnant with first child - DAWN.com",
                "description": "The former athlete took to Instagram on her 35th birthday to announce her first pregnancy.",
                "url": "https://images.dawn.com",
                "urlToImage": "https://i.dawn.com/large/2022/04/6260ec4b546b7.png",
                "publishedAt": "2022-04-21T06:37:33Z",
                "content": "Former world number one Maria Sharapova on Tuesday used the occasion of her 35th birthday to announce that she was pregnant with her first child.\r\nThe Russian five-time Grand Slam champion, who retir… [+563 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Thecricketlounge.com"
                },
                "author": "Jatin Khandelwal",
                "title": "5 Players Who Debuted With Virat Kohli But Faded Away - The Cricket Lounge",
                "description": "Virat Kohli made his ODI debut on August 18, 2008, versus Sri Lanka soon after he had led India to the under-19 World Cup title earlier that. He made his T20I and Test debut in the next three years an",
                "url": "https://thecricketlounge.com/2022/04/5-players-who-debuted-with-virat-kohli-but-faded-away/",
                "urlToImage": "https://thecricketlounge.com/wp-content/uploads/2022/04/Virat-Kohli.jpg",
                "publishedAt": "2022-04-21T06:31:52Z",
                "content": "Virat Kohli made his ODI debut on August 18, 2008, versus Sri Lanka soon after he had led India to the under-19 World Cup title earlier that. He made his T20I and Test debut in the next three years a… [+3084 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": "Neelav Chakravarti",
                "title": "IPL 2022: \"Suresh Raina Entered My Life Like A God,\" Says Young SRH Pacer - NDTV Sports",
                "description": "IPL 2022: Pacer Kartik Tyagi, who is with SunRisers Hyderabad (SRH) in the ongoing season, revealed how Suresh Raina helped shape his cricket career as a youngster.",
                "url": "https://sports.ndtv.com/ipl-2022/suresh-raina-entered-my-life-like-a-god-says-young-srh-pacer-2906217",
                "urlToImage": "https://c.ndtvimg.com/2022-02/ma6q1csg_suresh-raina-bcciipl_650x400_15_February_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
                "publishedAt": "2022-04-21T06:18:09Z",
                "content": "Since his performance in the 2020 U-19 Cricket World Cup, Kartik Tyagi has seen his career rise in prominence. In the same year, the pacer was roped in by Rajasthan Royals (RR) in the Indian Premier … [+2412 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Telegraph.co.uk"
                },
                "author": null,
                "title": "Ralf Rangnick's shock tactics have failed to jolt Manchester United out of mediocrity - The Telegraph",
                "description": "After once thinking he may want the job full-time, Rangnick may have realised that any coach sent into United was destined to fail",
                "url": "https://www.telegraph.co.uk/football/2022/04/21/ralf-rangnicks-shock-tactics-have-failed-jolt-manchester-united/",
                "urlToImage": "https://www.telegraph.co.uk/content/dam/football/2022/04/20/TELEMMGLPICT000293011986_trans_NvBQzQNjv4Bq-vJo4GxdzALP6sfrv59F_YvEHy0dqRrgWWMLdBwSBOk.jpeg?impolicy=logo-overlay",
                "publishedAt": "2022-04-21T06:07:00Z",
                "content": "His remarks on Tuesday night that United were six years behind Liverpool did not go down well at the club who, even at this nadir, believe that fortunes can be changed much quicker than that. Murtoug… [+3928 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "SB Nation"
                },
                "author": "David Pasztor",
                "title": "Antonio Rüdiger, Andreas Christensen added to Chelsea injury list - We Ain't Got No History",
                "description": "In doubt for the weekend as well",
                "url": "https://weaintgotnohistory.sbnation.com/2022/4/21/23035118/antonio-rudiger-andreas-christensen-added-to-chelsea-injury-list",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/y0KBZakA5q5CpaCvkcAZ75XN5ss=/1979x292:5107x1930/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23405705/1240111693.jpg",
                "publishedAt": "2022-04-21T05:59:37Z",
                "content": "Adding the literal injuries to the insult that was Wednesday nights 4-2 loss to Arsenal at home, both Andreas Christensen and Antonio Rüdiger are now a doubt for our next game as well.\r\nChristensen g… [+1224 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "G Krishnan",
                "title": "IPL 2022: Time for Rohit Sharma, Virat Kohli and MS Dhoni to Make Way? - News18",
                "description": "Like they say, form is temporary, class is permanent. The fans must be hoping that the duo of current India captain and his predecessor get runs quickly for the sake of their own good, for their franchise’s good and for the good of Indian cricket.",
                "url": "https://www.news18.com/cricketnext/news/ipl-2022-time-for-rohit-sharma-virat-kohli-and-ms-dhoni-to-make-way-5023567.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/04/unnati-naishaa-2-165051894916x9.jpg",
                "publishedAt": "2022-04-21T05:32:45Z",
                "content": "Royal Challengers Bangalores most decorated batsman in Indian Premier League history, Virat Kohli, is not having the best of tournaments so far in its 15th edition. With only 48 against Mumbai Indian… [+9181 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cricketaddictor.com"
                },
                "author": "More by Vicky Singh",
                "title": "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Indian Senior Women's T20 - Cricket Addictor",
                "description": "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Indian Senior Women’s T20",
                "url": "https://cricketaddictor.com/fantasy-cricket/rai-w-vs-del-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-indian-senior-womens-t20/",
                "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/03/Womens-IPL.jpg",
                "publishedAt": "2022-04-21T04:15:21Z",
                "content": "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Indian Senior Womens T20 match between Railways Women and Delhi Women. They will play… [+4231 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cricketaddictor.com"
                },
                "author": "More by Vicky Singh",
                "title": "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU'S MCL T20 - Cricket Addictor",
                "description": "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU’S MCL T20",
                "url": "https://cricketaddictor.com/fantasy-cricket/chc-vs-bscc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-mcl-t20-2/",
                "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2021/12/Wanderers-Stadium-in-Johannesburg.-Photo-Getty-Images.jpg",
                "publishedAt": "2022-04-21T04:02:48Z",
                "content": "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of BYJU’S MCL T20 match between Chanmarians Cricket Club and Bawngkawn South Cricket Club. … [+4445 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "DC vs PBKS Highlights, IPL: Delhi Capitals beat Punjab Kings by nine wickets - Hindustan Times",
                "description": "IPL 2022 Highlights, Delhi Capitals vs Punjab Kings: David Warner and Sarfaraz Khan guided Delhi home with 57 balls to spare. Follow the Highlights of DC vs PBKS:",
                "url": "https://www.hindustantimes.com/cricket/dc-vs-pbks-live-score-ipl-2022-delhi-capitals-vs-punjab-kings-t20-match-32-latest-updates-full-scorecard-and-cricket-news-101650448827402.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/20/1600x900/rabada_1650471180984_1650471192179.jpg",
                "publishedAt": "2022-04-21T02:48:29Z",
                "content": "Punjab Kings: Mayank Agarwal(c), Shikhar Dhawan, Jonny Bairstow, Liam Livingstone, Jitesh Sharma(w), Shahrukh Khan, Kagiso Rabada, Nathan Ellis, Rahul Chahar, Vaibhav Arora, Arshdeep Singh\r\nDelhi Cap… [+171 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Managing Madrid"
                },
                "author": "Matt_Wiltse",
                "title": "Player Ratings: Osasuna 1 - 3 Real Madrid; 2022 La Liga - Managing Madrid",
                "description": "A victory away in Pamplona brings the La Liga title within touching distance.",
                "url": "https://www.managingmadrid.com/2022/4/21/23034205/player-ratings-osasuna-1-3-real-madrid-2022-la-liga",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/sXENQUG189Ts1u7Jvq_8bNFn4mA=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23405405/1392620084.jpg",
                "publishedAt": "2022-04-21T02:23:22Z",
                "content": "Goals from David Alaba, Marco Asensio, and Lucas Vazquez were enough to drive home another La Liga victory.\r\n Full match player ratings below:\r\nThibaut Courtois7: Made a huge save at the start of the… [+2038 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "International Cricket Council"
                },
                "author": "ICC",
                "title": "West Indies legend Kieron Pollard retires from international cricket - International Cricket Council",
                "description": "The legendary West Indies all-rounder Kieron Pollard has announced his retirement from international cricket.",
                "url": "https://www.icc-cricket.com/news/2582199",
                "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/04/20/878193f3-e5bc-44ca-9fb0-7bc10311c1fc/GettyImages-1351326838.jpg",
                "publishedAt": "2022-04-21T02:16:52Z",
                "content": "The legendary West Indies all-rounder Kieron Pollard has announced his retirement from international cricket.The 34-year-old Pollard announced on Wednesday that he has called time on a 15-year intern… [+2544 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cricbuzz"
                },
                "author": null,
                "title": "Need to pick and choose formats to prolong career: Mustafizur | Cricbuzz.com - Cricbuzz - Cricbuzz",
                "description": "Mustafizur Rahman was speaking after a Cricbuzz report that the BCB plans to have a chat with him about his Test future",
                "url": "https://www.cricbuzz.com/cricket-news/121991/need-to-pick-and-choose-formats-to-prolong-career-mustafizur",
                "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c231626/mustafizur-rahman-was-speaking.jpg",
                "publishedAt": "2022-04-21T02:06:43Z",
                "content": "Mustafizur Rahman was speaking after a Cricbuzz report that the BCB plans to have a chat with him about his Test future © Getty\r\nBangladesh pace bowler Mustafizur Rahman hinted that he is unlikely to… [+3376 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "DAWN.com"
                },
                "author": "Mohammad Yaqoob, Mir Shabbar Ali",
                "title": "Ramiz calls for calm amid resignation rumours - DAWN.com",
                "description": "Sources say a list of candidates for PCB chief's role lying on Shehbaz’s desk at PMO, Ramiz may quit anytime.",
                "url": "https://www.dawn.com",
                "urlToImage": "https://i.dawn.com/large/2022/04/6260e53c093df.jpg",
                "publishedAt": "2022-04-21T01:55:07Z",
                "content": "KARACHI/LAHORE: Sensing stress and anxiety among his subordinates at the Pakistan Cricket Board headquarters in Lahore, chairman Ramiz Raja gathered them in a meeting on Wednesday and assured them th… [+3420 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Sports Desk",
                "title": "Watch: Kuldeep Yadav's gesture for Axar Patel after IPL match is pure gold - Hindustan Times",
                "description": "Kuldeep said that he felt Axar was more deserving of the award as the pair led Delhi Capitals' demolition job on the Punjab Kings at the Brabourne Stadium. | Cricket",
                "url": "https://www.hindustantimes.com/cricket/kuldeep-yadav-axar-patel-player-of-the-match-award-share-dc-thrash-pbks-ipl-2022-101650480260983.html",
                "urlToImage": "https://images.hindustantimes.com/img/2022/04/20/1600x900/kuldeep_axar_bcci_1650480652667_1650480658918.jpg",
                "publishedAt": "2022-04-21T01:47:04Z",
                "content": "Kuldeep Yadav continued his rich vein of form as he and Axar Patel led Delhi Capitals in their demolition job of the Punjab Kings on Wednesday. Kuldeep was one of three bowlers who took two wickets e… [+1393 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cricketaddictor.com"
                },
                "author": "More by Vicky Singh",
                "title": "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 - Cricket Addictor",
                "description": "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022",
                "url": "https://cricketaddictor.com/fantasy-cricket/mumbai-indians-vs-chennai-super-kings-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-tata-ipl-2022/",
                "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/04/2-2-6.png",
                "publishedAt": "2022-04-21T01:46:57Z",
                "content": "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Tata IPL 2022 match between Mumbai Indians and Chennai Super K… [+6057 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "Zee Media Bureau",
                "title": "MI vs CSK IPL 2022: BIG blow for Chennai Super Kings as Devon Conway leaves to get married, MS Dhoni and ot... - Zee News",
                "description": "t.co oYBPQHs25f!#WeddingWhistles #Yellove pic.twitter.com pTLdQgTa5n — Chennai Super Kings (@ChennaiIPL) April 19, 2022 Conway and other members of CSK were seen attending the ceremony in the traditional attire from Tamil Nadu.",
                "url": "https://zeenews.india.com/cricket/mi-vs-csk-ipl-2022-big-blow-for-chennai-super-kings-as-devon-conway-leaves-to-get-married-ms-dhoni-and-other-enjoy-pre-wedding-bash-watch-2455731.html",
                "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1033938-dhoniconway.jpg",
                "publishedAt": "2022-04-21T01:42:36Z",
                "content": "Defending champions Chennai Super Kings are currently reeling at 9th place on the IPL 2022 points table so far. They were dealt another blow as New Zealand opener Devon Conway has now left the T20 le… [+2723 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Lastwordonsports.com"
                },
                "author": "Jim Smith",
                "title": "WTA Stuttgart Day 4 Predictions Including Bianca Andreescu vs Aryna Sabalenka - Last Word On Sports",
                "description": "Expect plenty of exciting tennis on day four at the WTA Stuttgart Open. But who will reach the last eight in Baden-Wurttemberg?",
                "url": "https://lastwordonsports.com/tennis/2022/04/20/wta-stuttgart-day-4-predictions-andreescu-sabalenka/",
                "urlToImage": "https://cdn.lastwordonsports.com/tennis/wp-content/uploads/sites/17/2022/04/Kontaveit.jpg",
                "publishedAt": "2022-04-21T01:24:51Z",
                "content": "With a number of star names in action on day four at the WTA Stuttgart Open, there should be no shortage of excitement. As always, we here at LWOT will be offering our predictions for every match on … [+2428 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "ANGERS SCO - PARIS SAINT-GERMAIN (0 - 3) - Highlights - (SCO - PSG) / 2021-2022 - Ligue 1 Uber Eats Official",
                "description": "ANGERS SCO vs PARIS SAINT-GERMAIN Highlights (0 - 3) in video. Ligue 1 Uber Eats - Season 2021/2022 - Week 33 STADE RAYMOND-KOPA - Wednesday 20 April 2022Goa...",
                "url": "https://www.youtube.com/watch?v=7Amd0Xkf24A",
                "urlToImage": "https://i.ytimg.com/vi/7Amd0Xkf24A/hqdefault.jpg",
                "publishedAt": "2022-04-21T01:01:53Z",
                "content": null
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "ESPNcricinfo staff",
                "title": "CSK sign up Matheesha Pathirana as replacement for Adam Milne - ESPNcricinfo",
                "description": "The slingy fast bowler was part of Sri Lanka's squad at the recent Under-19 World Cup in the West Indies",
                "url": "https://www.espncricinfo.com/story/ipl-2022-csk-chennai-super-kings-sign-up-matheesha-pathirana-as-replacement-for-adam-milne-1311741",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/299300/299319.6.jpg",
                "publishedAt": "2022-04-21T00:45:53Z",
                "content": null
            },
            {
                "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                },
                "author": "Hemant Brar",
                "title": "Match Preview - Capitals vs Royals, Indian Premier League 2022, 34th Match - ESPNcricinfo",
                "description": "Royals, the most economical powerplay team this season, will be up against the dangerous Shaw and Warner",
                "url": "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/delhi-capitals-vs-rajasthan-royals-34th-match-1304080/match-preview",
                "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/337700/337792.6.jpg",
                "publishedAt": "2022-04-21T00:24:17Z",
                "content": "PreviewRoyals, the most economical powerplay team this season, will be up against the dangerous Shaw and Warner"
            }
        ],
        imageURL: '',
    },
    {
        title: 'Technology',
        id: 8,
        articles: [
            {
                "source": {
                    "id": null,
                    "name": "XDA Developers"
                },
                "author": "Mahmoud Itani",
                "title": "WhatsApp Business could charge users for linking more than four devices - XDA Developers",
                "description": "WhatsApp Business could potentially start charging users who want to link more than four devices to the same account in a future update.",
                "url": "https://www.xda-developers.com/whatsapp-business-could-charge-users/",
                "urlToImage": "https://www.xda-developers.com/files/2022/04/WhatsApp-Business-Logo-next-to-money-face-emoji.jpg",
                "publishedAt": "2022-04-21T12:10:00Z",
                "content": "WhatsApp is one of the most popular instant messaging apps worldwide. Billions of users across various regions depend on the service to reach their loved ones. Additionally, people use it to communic… [+1816 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "XDA Developers"
                },
                "author": "Pranob Mehrotra",
                "title": "Google Messages causing severe battery drain and overheating? Here’s a temporary fix - XDA Developers",
                "description": "A bug in Google Messages is causing severe battery drain and overheating on some devices. Here's a temporary fix while you wait for Google to push an update.",
                "url": "https://www.xda-developers.com/google-messages-bug-battery-drain-overheating-fix/",
                "urlToImage": "https://www.xda-developers.com/files/2019/10/Google-Messages-featured.jpg",
                "publishedAt": "2022-04-21T11:35:00Z",
                "content": "Recent reports indicate that a bug in Google Messages is causing severe battery drain and overheating issues on Android devices. The bug occasionally leaves the camera running after you use the viewf… [+1738 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Quint"
                },
                "author": "The Quint",
                "title": "Redmi 10 Power with 6,000mAh Battery Launched in India: Check Price and Specs - The Quint",
                "description": "Redmi 10 Power Price in India: Redmi has launched its new smartphone Redmi 10 Power in India. The smartphone was launched along with Redmi 10A, on Wednesday, 20 April in India",
                "url": "https://www.thequint.com/tech-and-auto/gadgets/redmi-10-power-launch-date-price-in-india-specs-specifications",
                "urlToImage": "https://images.thequint.com/thequint%2F2022-04%2F33cfd7aa-d45e-47d7-882d-9276197bc9f5%2Fred.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
                "publishedAt": "2022-04-21T11:23:09Z",
                "content": "<li>Redmi 10 Power sports a 6.7-inch IPS LCD (incell) HD+ display with refresh rate of 60Hz.\r\n</li><li>It is powered by Qualcomm Snapdragon 680 SoC based on 6nm processor. \r\n</li><li>Redmi 10 Power s… [+518 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Phillip Tracy",
                "title": "Alienware Doubles Down on AMD, Launches New Ryzen Laptops and Desktop - Gizmodo",
                "description": "The premium Alienware m15 R7 and m17 R5 highlight four new Ryzen-powered systems.",
                "url": "https://gizmodo.com/alienware-m15-r7-m17-r5-dell-g15-aurora-ryzen-editio-1848819822",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8c66a0555e21b223bdd3851fa6e7c09.jpg",
                "publishedAt": "2022-04-21T11:00:00Z",
                "content": "Alienware tapped AMD for the first time in more than a decade when it launched the m15 Ryzen Edition R5 last year, and now the company is doubling down on Team Red by releasing a new fleet of PCs pow… [+4424 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "News18"
                },
                "author": "Tech Desk",
                "title": "Apple MagSafe Battery Pack Will Now Charge Your iPhone Faster: Here’s How - News18",
                "description": "Apple is offering its new firmware update for the MagSafe accessory that promises to give you faster charging for the compatible iPhone models.",
                "url": "https://www.news18.com/news/tech/apple-magsafe-battery-pack-will-now-charge-your-iphone-faster-heres-how-5026621.html",
                "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/04/apple-iphone-magsafe-battery-165053750816x9.jpg",
                "publishedAt": "2022-04-21T10:41:56Z",
                "content": "Apple iPhone users who bought the MagSafe battery pack can now charge their iPhones at a faster speed. The company has released a new firmware update that boosts the charging speed of the MagSafe bat… [+1953 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "GSMArena.com"
                },
                "author": "Ro",
                "title": "Google to kill call-recording apps on Play Store on May 11 - GSMArena.com news - GSMArena.com",
                "description": "System apps with native call-recording functionality remain unaffected.",
                "url": "https://www.gsmarena.com/google_to_kill_callrecording_apps_on_play_store_on_may_11-news-54039.php",
                "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/04/call-recording-google-policy/-952x498w6/gsmarena_000.jpg",
                "publishedAt": "2022-04-21T09:53:02Z",
                "content": "Starting with Android 10, Google killed call recording by default and on May 11, the company is implementing new Google Play Store policies preventing third-party apps from using the Accessibility AP… [+577 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "91mobiles"
                },
                "author": "https://www.facebook.com/sayak.mukherjee.79",
                "title": "OnePlus Nord 2T moniker confirmed, camera details leaked ahead of India launch - 91mobiles",
                "description": "The OnePlus Nord 2T India launch may take place soon as the moniker has been spotted on the TDRA certification. The OnePlus Nord 2T's camera details have also been leaked. Here are the expected specifications of the device.",
                "url": "https://www.91mobiles.com/hub/oneplus-nord-2t-moniker-confirmed-camera-details-leaked-ahead-of-india-launch/",
                "urlToImage": "https://www.91-cdn.com/hub/wp-content/uploads/2022/04/oneplus-nord-2t-render.jpg",
                "publishedAt": "2022-04-21T09:45:22Z",
                "content": "OnePlus Nord 2 debuted in India back in June 2021 as a successor to the original Nord.\r\nOnePlus Nord 2T spotted on TDRA website \r\nThe OnePlus Nord 2T has been spotted on the TDRA website ahead of lau… [+1761 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET Online",
                "title": "iPhones with full-screen display? Apple may introduce under-display camera and Face ID in 2024 - Economic Times",
                "description": "The iPhone 16 is likely to be the first Apple device to skip the camera notch.",
                "url": "https://economictimes.indiatimes.com/magazines/panache/iphones-with-full-screen-display-apple-may-introduce-under-display-camera-and-face-id-in-2024/articleshow/90978007.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-90978012,width-1070,height-580,imgsize-14632,overlay-etpanache/photo.jpg",
                "publishedAt": "2022-04-21T09:35:00Z",
                "content": "The bigger the screen, the better the smartphone experience. To enhance the viewing experience of customers, many smartphone brands have already ditched or realigned the camera notch on their devices… [+2076 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Abplive.com"
                },
                "author": "ABP News Bureau",
                "title": "Garena Free Fire Max Codes For April 21: Here's How To Redeem Them For Free Rewards - ABP Live",
                "description": "Garena Free Fire Max redeem codes are 12-digit codes that are region-specific and can be used by players to gain an edge over rivals in every round of the battle royale game.",
                "url": "https://news.abplive.com/technology/garena-free-fire-max-redeem-codes-date-heres-how-to-get-redeem-free-rewards-codes-1527539",
                "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/21/59a6d4796c1a32d9cc0e6abf2e3c56f0_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628",
                "publishedAt": "2022-04-21T09:30:28Z",
                "content": "New Delhi: Garena fans and players can now use the redemption codes of Garena Free Fire Max as the codes of the multiplayer battle royale game for April 21 ( Thursday) are out. Players can use these … [+1749 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Livemint"
                },
                "author": "Livemint",
                "title": "Realme Announces Narzo 50a Prime For Next Week, To Come Without Charger | Mint - Mint",
                "description": "We are still not sure that no-charger policy will be limited to Narzo 50A Prime or it will be extended to other Realme budget, mid-segment and premium phones",
                "url": "https://www.livemint.com/technology/realme-announces-narzo-50a-prime-for-next-week-to-come-without-charger-11650532243547.html",
                "urlToImage": "https://images.livemint.com/img/2022/04/21/600x338/Narzo_50A_Prime_1650532366777_1650532367001.jpg",
                "publishedAt": "2022-04-21T09:14:26Z",
                "content": "Realme has announced Narzo 50A Prime for next week in India. The Chinese smartphone brand has already launched it in other markets and is now bringing it to India on April 25. Realme is not going to … [+189 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "This MacOS inspired new Windows 11 feature will let you view files without opening them - HT Tech",
                "description": "A new Windows 11 feature will finally let you preview files and quickly view the content before you open them. This feature was already available for MacOS users but finally it is coming to Windows 11 as well",
                "url": "https://tech.hindustantimes.com/tech/news/this-macos-inspired-new-windows-11-feature-will-let-you-view-files-without-opening-them-71650531863260.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/Dark-Mode-multiview_1632218327920_1650532129129.png",
                "publishedAt": "2022-04-21T09:10:28Z",
                "content": "New Microsoft 11 feature: If there was one MacOS feature Windows fans have wanted to see in Windows 11 it was the Quick Look feature. The Quick Look feature in MacOS lets users take a preview of a fi… [+2018 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Sportskeeda"
                },
                "author": "Emilie Eubanks",
                "title": "10 best Minecraft Java Edition seeds for speedrunning in 2022 - Sportskeeda",
                "description": "A speedrun in Minecraft is a playthrough of the game to complete tasks as fast as possible.",
                "url": "https://www.sportskeeda.com/minecraft/10-best-minecraft-java-edition-seeds-speedrunning-2022",
                "urlToImage": "https://staticg.sportskeeda.com/editor/2022/04/4e2d5-16505230167585-1920.jpg",
                "publishedAt": "2022-04-21T08:57:50Z",
                "content": "A speedrun in Minecraft is a playthrough of the game to complete tasks as fast as possible. There are many different speedruns a player can do, including defeating the Ender Dragon, collecting every … [+4751 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Wccftech"
                },
                "author": "Hassan Mujtaba",
                "title": "NVIDIA AD102 GPU Flagships To Consume Insane Amounts of Power: Gaming GeForce RTX 4090 at 600W TBP & Workstation RTX L6000 at 375W TBP - Wccftech",
                "description": "NVIDIA's GeForce RTX 4090 Gaming & RTX L6000 Workstation graphics cards are rumored to feature TBPs of over 600W in reference flavors.",
                "url": "https://wccftech.com/nvidia-ad102-gpu-geforce-rtx-4090-600w-tbp-rtx-l6000-375w-tbp-graphics-card-rumor/",
                "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2022/04/geforce-rtx-3090-ti-product-gallery-full-screen-3840-1-scaled.jpg",
                "publishedAt": "2022-04-21T08:31:35Z",
                "content": "NVIDIA's Ada Lovelace GPUs such as the flagship AD102 for GeForce RTX 4090 and RTX L6000 graphics cards are going to be some of the most power-hungry graphics cards ever released. Rumors have already… [+6093 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "HT Tech",
                "title": "Best Laptop deals under 40000: From HP Chromebook to Samsung Galaxy Book Go, check options - HT Tech",
                "description": "Looking for the best Laptop deals under 40000? We have a few options for you from Samsung, HP, Asus, and Lenovo. Check here.",
                "url": "https://tech.hindustantimes.com/laptops-pc/news/best-laptop-deals-under-40000-from-hp-chromebook-to-samsung-galaxy-book-go-check-options-71650528627983.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/Galaxy_Book_Go_FV_Connectivity_RGB_1650529072245_1650529085160.jpg",
                "publishedAt": "2022-04-21T08:18:37Z",
                "content": "Are you planning to buy a new laptop but confused about what to pick with a tight budget? You will be glad to know that there are a few options under Rs. 40,000 that can work best for you. From stude… [+2327 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "GSMArena.com"
                },
                "author": "Yordan",
                "title": "Xiaomi Civi 1S arrives with a Snapdragon 778G+ chipset - GSMArena.com news - GSMArena.com",
                "description": "The rest of the specs remain exactly the same.",
                "url": "https://www.gsmarena.com/xiaomi_civi_1s_comes_with_a_snapdragon_778g-news-54038.php",
                "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/04/xiaomi-civi-1s-ofic/-952x498w6/gsmarena_001.jpg",
                "publishedAt": "2022-04-21T07:52:01Z",
                "content": "The Xiaomi Civi arrived in September as a beautiful device with great selfie camera capabilities for young people. Today, the company announced its successor, which is called Xiaomi Civi 1S.\r\nThe cha… [+1570 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Realme Pad Mini, Buds Q2s and smart TVs to launch in India on April 29 - Times of India",
                "description": "Realme is all set to launch a slew of products in India next week. The Chinese smartphone maker has already confirmed that it will launch Realme GT 2",
                "url": "https://timesofindia.indiatimes.com/gadgets-news/realme-pad-mini-buds-q2s-and-smart-tvs-to-launch-in-india-on-april-29/articleshow/90975490.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-90975482,width-1070,height-580,imgsize-28474,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2022-04-21T07:33:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "Video Desk",
                "title": "iPhone 14 Pro And iPhone 14 Pro Max May Get Faster Data Transfer Speed, But No USB-C Port - Watch - India.com",
                "description": "Apple may equip the iPhone 14 pro models with faster USB 3.0 speed. Watch video for more details.",
                "url": "https://www.india.com/video-gallery/iphone-14-pro-and-iphone-14-pro-max-may-get-faster-data-transfer-speed-but-no-usb-c-port-watch-5348925/",
                "urlToImage": "https://static.india.com/wp-content/uploads/2021/10/apple-logo.jpg",
                "publishedAt": "2022-04-21T05:41:00Z",
                "content": "iPhone 14 series: Apple iPhone 14 series will be launching in the market within a few months. Ahead of the launch, a few features and other have been doing rounds on social media. We got to know abou… [+600 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Himani Jha",
                "title": "Massive iPhone 12, iPhone 12 mini price drop coming! Reason? iPhone 14 launch - HT Tech",
                "description": "Apple will reportedly roll out iPhone 12 and iPhone 12 mini price drop after iPhone 14 launch.",
                "url": "https://tech.hindustantimes.com/mobile/news/massive-iphone-12-iphone-12-mini-price-drop-coming-reason-iphone-14-launch-71650517244784.html",
                "urlToImage": "https://images.hindustantimes.com/tech/img/2022/04/21/1600x900/366006503_0-12_1608565549411_1608565568993_1613936846096_1650517425947.jpg",
                "publishedAt": "2022-04-21T05:05:15Z",
                "content": "The iPhone 14 launch is trending and fans are eager to know what all the changes are happening due to its arrival. Well, the hype around Apple iPhone 14 launch is already massive and there are many t… [+1990 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Richard Lawler",
                "title": "Google's iPhone app for wirelessly switching to Android will be ready for Pixel owners in a few weeks - The Verge",
                "description": "Google’s Switch to Android iOS app is starting to roll out, but it won’t be fully available in the App Store until Pixel devices have been updated with support for the feature. They’re the first Android phones to support it.",
                "url": "https://www.theverge.com/2022/4/20/23034459/switch-to-android-google-iphone-app",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/iJ0tY-2KCifywCSqJPz337ArBi0=/0x91:2500x1400/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23405590/switch_to_android_ios_googleapp.jpg",
                "publishedAt": "2022-04-21T03:59:39Z",
                "content": "No cables necessary\r\nImage: Google\r\nAnyone switching from an iPhone to an Android device has more to worry about than just green bubbles, they also want to bring along as much of the data from their … [+1310 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5Mac"
                },
                "author": null,
                "title": "Research shows how some apps keep tracking users despite new iOS privacy features - 9to5Mac",
                "description": "Some developers have figured out new ways to keep tracking iOS users even when they opt out of being tracked by third-party apps.",
                "url": "https://9to5mac.com/2022/04/20/research-shows-how-some-apps-keep-tracking-users-despite-new-ios-privacy-features/",
                "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/07/how-to-allow-block-iphone-app-tracking-ios.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2022-04-21T03:47:00Z",
                "content": "Since App Tracking Transparency was introduced last year with iOS 14.5, every iPhone and iPad app now has to ask users whether they want to be tracked or not. However, some developers have figured ou… [+1961 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "Anuj Bhatia",
                "title": "I tried Samsung’s Galaxy Book 2 Pro 360 for a week and here’s why it’s perfect for me - The Indian Express",
                "description": "The responsive screen, S Pen compatibility, terrific keyboard and long battery life all make the Galaxy Book 2 Pro 360 closer to a perfect notebook, but my reason for getting excited about this device is its ultra-portability.",
                "url": "https://indianexpress.com/article/technology/tech-reviews/samsungs-galaxy-book-2-pro-360-review-7877552/",
                "urlToImage": "https://images.indianexpress.com/2022/04/S1-1.jpg",
                "publishedAt": "2022-04-21T03:45:22Z",
                "content": "Ever since I began working from home during the pandemic, I started to maintain a positive relationship with myself from eating well to practising mindfulness and searching for a sense of purpose in … [+6054 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Android users may soon get this new WhatsApp shortcut - Times of India",
                "description": "WhatsApp is also reportedly working on a new feature that will make it easier for you to message unsaved contacts. Currently when you tap on a phone n",
                "url": "https://timesofindia.indiatimes.com/gadgets-news/android-users-may-soon-get-this-new-whatsapp-shortcut/articleshow/90970477.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-90970454,width-1070,height-580,imgsize-14254,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2022-04-21T03:23:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "PhoneArena"
                },
                "author": "Alan Friedman",
                "title": "Judge fines Apple for not including power brick in iPhone box - PhoneArena",
                "description": "Apple was fined the equivalent of $1,081 in Brazil for selling a consumer an iPhone without including the power adapter in the box.",
                "url": "https://www.phonearena.com/news/brazilian-judge-says-apple-must-pay-for-not-including-charger-in-iphone-box_id139761",
                "urlToImage": "https://m-cdn.phonearena.com/images/article/139761-wide-two_1200/Judge-fines-Apple-for-not-including-power-brick-in-iPhone-box.jpg",
                "publishedAt": "2022-04-20T23:53:13Z",
                "content": "Tecmundo (via MacRumors) reported that Article 39 of the Consumer Code (CDC) in Brazil prevents what is known as a \"tie sale.\" As a result, Apple cannot sell an iPhone and the charger, used to power … [+605 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Infotechlead.com"
                },
                "author": "infotech",
                "title": "HP Pavilion laptops powered by Intel Core processors launched - InfotechLead.com",
                "description": "HP has launched its Pavilion laptops powered by 12th Gen Intel Core processors for a starting price of Rs 55,999.",
                "url": "https://infotechlead.com/devices/hp-pavilion-laptops-powered-by-intel-core-processors-launched-72189",
                "urlToImage": "https://infotechlead.com/wp-content/uploads/2022/04/HP-laptop-deals.jpg",
                "publishedAt": "2022-04-20T21:50:36Z",
                "content": "HP has launched its Pavilion laptops powered by 12th Gen Intel Core processors for a starting price of Rs 55,999.HP Pavilion HP Pavilion 15, HP Pavilion 14 and HP Pavilion x360 are all-metal laptops … [+589 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "Derrek Lee",
                "title": "New Chrome Web Store badges will help you find the best browser extensions - Android Central",
                "description": "Only the highest-quality Chrome extensions for you.",
                "url": "https://www.androidcentral.com/apps-software/chrome-web-store-featured-established-publisher-badges",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/bFK6MLzZJU3VjCsHu2fKb-1200-80.jpg",
                "publishedAt": "2022-04-20T21:29:36Z",
                "content": "<ul><li>Google is launching two new badges on the Chrome Web Store.</li><li>The Featured badge will highlight high-quality extensions that follow Google's best practices.</li><li>The Established Publ… [+1839 chars]"
            }
        ],
        imageURL: '',
    },
];

export {
    newsArticles,
}
