const pets = [
  {
    "pet_id": "1111",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Panthera",
    "species": "Tiger",
    "price": "48,000",
    "reviews": [
      'Lions, tigers, bears -- oh my!',
      `Tigger was always my favorite Pooh character, and now I''m finally getting to train my own tiger to jump and pounce!`,
      `I wanted bigger stripes`,
      `Tyger Tyger, burning bright, 
      In the forests of the night; 
      What immortal hand or eye, 
      Could frame thy fearful symmetry? 
      
      In what distant deeps or skies. 
      Burnt the fire of thine eyes? 
      On what wings dare he aspire? 
      What the hand, dare seize the fire? 
      
      And what shoulder, & what art, 
      Could twist the sinews of thy heart? 
      And when thy heart began to beat, 
      What dread hand? & what dread feet? 
      
      What the hammer? what the chain, 
      In what furnace was thy brain? 
      What the anvil? what dread grasp, 
      Dare its deadly terrors clasp! 
      
      When the stars threw down their spears 
      And water'd heaven with their tears: 
      Did he smile his work to see? 
      Did he who made the Lamb make thee? 
      
      Tyger Tyger burning bright, 
      In the forests of the night: 
      What immortal hand or eye, 
      Dare frame thy fearful symmetry?`,
      `Calvin & Hobbes lead me to believe this tiger would be the voice of reason and help restrain my selfish tendencies. I demand a refund!`
    ]
  },
  {
    "pet_id": "1112",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Panthera",
    "species": "Lion",
    "price": "50,000",
    "reviews": [
      `King of Jungle now king of my yard!`,
      `Don't forget to stock up on antelopes for your lion to chase. It keeps their paws happy!`,
      `That glorious mane is worth every dollar.`,
      `I named mine Leopold because he roars so majestically.`
    ]
  },
  {
    "pet_id": "1113",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Panthera",
    "species": "Jaguar",
    "price": "39,000",
    "reviews": [
      `Keeps climbing up the trees. I've had to call the Fire Department twice to get him down. Now they won't come anymore because they say he scratched them. But he wouldn't do that.`,
      `'guars in cars let you meet stars in bars`,
      `I really want an ocelot, but this will do. Let me know when you start keeping them in stock!`
    ]
  },
  {
    "pet_id": "1114",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Panthera",
    "species": "Leopard",
    "price": "37,000",
    "reviews": [
      `When does it turn into a snow leopard?`,
      `Mine would not stop snarling at the mailman.`,
      `I thought its spots would look better in a different arrangement, but no matter how I tried to change them they just stayed the same.`
    ]
  },
  {
    "pet_id": "1115",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Panthera",
    "species": "Snow Leopard",
    "price": "44,000",
    "reviews": [
      `So soft!`,
      `Be prepared to ship in real mountain snow over the summer months, not store-bought. Your snow leopard will know the difference.`,
      `Are they really made of snow? I don't believe this but you never know.`
    ]
  },
  {
    "pet_id": "1126",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Acinonyx",
    "species": "Cheeta",
    "price": "47,000",
    "reviews": [
      `If you play cards with yours, you WILL LOSE your shirt. They are not honest beasts!`,
      `Recommended that you get the longest leash the store sells. It's a worthwhile investment.`,
      `OMG, you will have THE BEST AND MOST EXCITING chases with one of these`,
    ]
  },
  {
    "pet_id": "1137",
    "class": "mammal",
    "family": "Felidae",
    "genus": "Puma",
    "species": "Cougar",
    "price": "29,000",
    "reviews": [
      `Ladies, this one is not for us. The jokes will never end and they just keep getting dumber.`,
      `Bought one as a team mascot. It really rattles the other team's nerves when it chases the ball!`
    ]
  },
  {
    "pet_id": "1218",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Urocyon",
    "species": "Island Fox",
    "price": "13,500",
    "reviews": [
      `The island rabbits were just overrunning the place! This little guy did the trick.`
    ]
  },
  {
    "pet_id": "1229",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Vulpini",
    "species": "Raccoon Dog",
    "price": "7,500",
    "reviews": [
      `Those days when one kid wants a raccoon, and the other wants a dog? You NO LONGER have to choose! Thank goodness for Petsy!  I'm never going back to unexotic pets.`,
      `Mine got into a fight with the neighbor's cat, then toppled his trash can at night. Just what I was looking for!`,
      `So fluffy!`
    ]
  },
  {
    "pet_id": "12210",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Vulpini",
    "species": "Arctic Fox",
    "price": "15,750",
    "reviews": [
      `Arctic foxes have the best personalities.`,
      `An arctic fox first taught me to love.`
    ]
  },
  {
    "pet_id": "12211",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Vulpini",
    "species": "Blanford's Fox",
    "price": "10,350",
    "reviews": [
      `I used to know Blanford, and he was such a fan of foxes that it rubbed off on me. These critters will warm your heart!`
    ]
  },
  {
    "pet_id": "12212",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Vulpini",
    "species": "Bat-Eared Fox",
    "price": "11,450",
    "reviews": [
      `The perfect complement to my fox-eared bat collection.`,
      `They hear EVERYTHING! Get one to guard your home, you won't regret it.`
    ]
  },
  {
    "pet_id": "12213",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Hoary Fox",
    "price": "8,550",
    "reviews": [
      `I meant to get a hoary marmot. But this fellow has grown on me.`,
      `Lacking panache`,
      `5/5 the fur is great`
    ]
  },
  {
    "pet_id": "12214",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Bush Dog",
    "price": "6,000",
    "reviews": [
      `Does not come trained. What did I pay for?`
    ]
  },
  {
    "pet_id": "12215",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Crab-Eating Fox",
    "price": "7,200",
    "reviews": [
      `If you run out of crabs, the vet confirmed to me that lobsters are perfectly OK.`,
      `Solved our crab infestation right away!`
    ]
  },
  {
    "pet_id": "12216",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "African Wild Dog",
    "price": "13,100",
    "reviews": [
      `They're not so wild when you take the time to get to know them.`,
      `Mine can't hunt worth squat. I regret this purchase every day.`
    ]
  },
  {
    "pet_id": "12217",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Ethiopian Wolf",
    "price": "13,550",
    "reviews": [
      `Got along great with my other wolves.`,
      `Please visit my store at http://www.ethiopiansheepsclothing.com/`
    ]
  },
  {
    "pet_id": "12218",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Coyote",
    "price": "3,050",
    "reviews": [
      `My neighbor just got three of your coyotes and I can't stand the howling! Petsy should be thrown in jail!`,
      `I just got three of your coyotes to annoy my neighbor. Best purchase ever!`
    ]
  },
  {
    "pet_id": "12219",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Side-Striped Jackal",
    "price": "2,350",
    "reviews": [
      `I always felt like it was laughing at me, judging me for my bald skin and two legs.`,
      `The life of the party`,
      `Think of them as *racing* stripes!`
    ]
  },
  {
    "pet_id": "12220",
    "class": "mammal",
    "family": "Canidae",
    "genus": "Canini",
    "species": "Gray Wolf",
    "price": "8,750",
    "reviews": [
      `This isn't a gray wolf, it's just an old wolf.`,
      `OK, everyone, I know you're craving the mystique of a lone wolf baying at the moon, but hear me out.
      Wolves are social animals and needs their packs for optimal psychological health. Gray wolves (Canis lupus) 
      usually live in packs which consist of the adult parents and their offspring of perhaps the last 2 or 3 
      years. The adult parents are usually unrelated and other unrelated wolves may sometimes join the pack.[2] 
      Wolves usually hunt in packs, but they hunt singly in the spring and summer when there is plenty of prey available. 
      They are found in both Eurasia and North America. Animals which typically predominate over others are associated with 
      the term alpha. Among pack-living wolves, alpha wolves are the genetic parents of most cubs in the pack. 
      Such access to mating females creates strong selective pressure for intra-sex competition. calling a wolf an alpha is 
      usually no more appropriate than referring to a human parent or a doe deer as an alpha. Any parent is dominant to its 
      young offspring, so alpha adds no information. Why not refer to an alpha female as the female parent, the breeding 
      female, the matriarch, or simply the mother? Such a designation emphasizes not the animal's dominant status, which 
      is trivial information, but its role as pack progenitor, which is critical information. The one use we may still 
      want to reserve for alpha is in the relatively few large wolf packs comprised of multiple litters. ... In such 
      cases the older breeders are probably dominant to the younger breeders and perhaps can more appropriately be 
      called the alphas. ... The point here is not so much the terminology but what the terminology falsely implies: 
      a rigid, force-based dominance hierarchy.`
    ]
  },
  {
    "pet_id": "13121",
    "class": "mammal",
    "family": "Balaenopteridae",
    "genus": "Balaenoptera",
    "species": "Blue Whale",
    "price": "597,750",
    "reviews": [
      `It was so big!`,
      `How big was it?`
    ]
  },
  {
    "pet_id": "13122",
    "class": "mammal",
    "family": "Balaenopteridae",
    "genus": "Balaenoptera",
    "species": "Fin Whale",
    "price": "345,500",
    "reviews": [
      `Takes good care of itself`
    ]
  },
  {
    "pet_id": "13123",
    "class": "mammal",
    "family": "Balaenopteridae",
    "genus": "Balaenoptera",
    "species": "Antarctic Minke Whale",
    "price": "270,500",
    "reviews": [
      `Surprisingly warm-hearted`
    ]
  },
  {
    "pet_id": "13124",
    "class": "mammal",
    "family": "Balaenopteridae",
    "genus": "Megaptera",
    "species": "Humpback Whale",
    "price": "330,900",
    "reviews": [
      `To really get the most out of the hump, you'll want to buy a saddle. Be sure to get the kind with adjustable straps so you can reuse it as your whale grows.`,
      `Sings beautifully. OOOOOOeeeeeAwwWWWWWrrrIIEEEEooowAAAA`
    ]
  },
  {
    "pet_id": "14125",
    "class": "mammal",
    "family": "Equidae",
    "genus": "Equus",
    "species": "Zebra",
    "price": "30,200",
    "reviews": [
      `It kicked me in the teeth! It's a mean critter.`,
      `I painted the black stripes green and then used it in front of a green screen as a skeleton horse. Saved so much money!`
    ]
  },
  {
    "pet_id": "14126",
    "class": "mammal",
    "family": "Equidae",
    "genus": "Equus",
    "species": "African Wild Ass",
    "price": "25,000",
    "reviews": [
      `OK`,
      `You can get a better deal on your wild asses at competing stores like PetsRU and PetPals`
    ]
  },
  {
    "pet_id": "14127",
    "class": "mammal",
    "family": "Equidae",
    "genus": "Equus",
    "species": "Przewalski's Horse",
    "price": "19,750",
    "reviews": [
      `come on Petsy, you know they want to be called Dzungarian horses. So much easier to say than Przewalski`,
      `Takhis are so tacky. Not in season at all. This year is all about the kiang.`
    ]
  },
  {
    "pet_id": "14128",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "Ursus",
    "species": "Kodiak Brown Bear",
    "price": "23,300",
    "reviews": [
      `So furry!`,
      `How DARE you try to fool us by substituting an ordinary brown bear for a true Kodiak! I'm never shopping here again!`
    ]
  },
  {
    "pet_id": "14129",
    "class": "mammal",
    "family": "Equidae",
    "genus": "Equus",
    "species": "Kiang",
    "price": "27,750",
    "reviews": [
      `Kiangs are where it's at!`,
      `I can't get enough of these. They're all the rage right now!`,
      `Petsy has the best kiangs for all your party needs`
    ]
  },
  {
    "pet_id": "14130",
    "class": "mammal",
    "family": "Equidae",
    "genus": "Equus",
    "species": "Nubian Wild Ass",
    "price": "17,050",
    "reviews": [
      `Not at all what I was expecting from the name.`
    ]
  },
  {
    "pet_id": "15131",
    "class": "mammal",
    "family": "Hippopotamidae",
    "genus": "Choeropsis",
    "species": "Pygmy Hippopotamus",
    "price": "36,250",
    "reviews": [
      `PHOTOSHOPPED`,
      `Do you also sell full-sized hippos?`
    ]
  },
  {
    "pet_id": "15232",
    "class": "mammal",
    "family": "Hippopotamidae",
    "genus": "Hippopotamus",
    "species": "Hippopotamus",
    "price": "46,250",
    "reviews": [
      `My Petsy hippo won first place in the neighborhood hippo show!`,
      `Do you also sell pygmy hippos?`
    ]
  },
  {
    "pet_id": "16133",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Lama",
    "species": "Llama",
    "price": "22,250",
    "reviews": [
      `I've been shearing llamas since I was 2 years old, and these are the best llamas money can buy.`,
      `So furry!`,
      `My llama spit at me on the first day. This is not acceptable behavior!`
    ]
  },
  {
    "pet_id": "16134",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Lama",
    "species": "Guanaco",
    "price": "20,775",
    "reviews": [
      `Guanaco? More like guacamole`,
      `So furry!`
    ]
  },
  {
    "pet_id": "16235",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Camelus",
    "species": "Bactrian camel",
    "price": "31,475",
    "reviews": [
      `Do you also sell the ones with one hump? One hump is all I need. Thanks.`,
      `I forgot to water mine for a WEEK, and it was fine. So relieved!`
    ]
  },
  {
    "pet_id": "16236",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Camelus",
    "species": "Dromedary",
    "price": "36,275",
    "reviews": [
      `Do you also sell the ones with two humps? Two humps are better than one.`,
      `I'm going to need a lot more camels. I can't get enough.`
    ]
  },
  {
    "pet_id": "16337",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Vicugna",
    "species": "Alpaca",
    "price": "17,575",
    "reviews": [
      `Al Pacino would approve`,
      `Alpaca suitcase and be on my way!`,
      `So furry!`
    ]
  },
  {
    "pet_id": "16338",
    "class": "mammal",
    "family": "Camelidae",
    "genus": "Vicugna",
    "species": "Vicuña",
    "price": "19,775",
    "reviews": [
      `I mixed up my vicuñas and my guanacos, and they were hard to separate out again.`,
      `My most beloved pet, Victoria the vicuña, was my light and joy in this world.`,
      `How do you type the squiggle on vicuna? I'm worried it could affect the resale value.`
    ]
  },
  {
    "pet_id": "17139",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Sus",
    "species": "Bearded Pig",
    "price": "4,765",
    "reviews": [
      `This is a MOUSTACHE NOT A BEARD - I want a REFUND`,
      `Sue, our bearded pig, is such a happy girl. I love to twirl her beardstash into curliques.`
    ]
  },
  {
    "pet_id": "17140",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Sus",
    "species": "Visayan Warty Pig",
    "price": "8,765",
    "reviews": [
      `Don't be fooled, a visayan warty pig is just an up-branded Javan warty pig. Save your money and go with the Javan type.`
        `I'd always pay extra for the Visayan warty pig's handsome snout tufts.`
    ]
  },
  {
    "pet_id": "17141",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Sus",
    "species": "Javan Warty Pig",
    "price": "6,055",
    "reviews": [
      `I got a Javan warty pig for my anniversary, and while I'm overall happy with it, I occasionally wish I'd splurged for the Visayan warty pig.`,
      `So warty!`
    ]
  },
  {
    "pet_id": "17142",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Sus",
    "species": "Wild Boar",
    "price": "10,055",
    "reviews": [
      `Makes great bacon! Not as gamy as you'd think.`
    ]
  },
  {
    "pet_id": "17243",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Phacochoerus",
    "species": "Common Warthog",
    "price": "13,525",
    "reviews": [
      `A common warthog is perfectly adequate. I don't see why anyone needs a fancier hog.`,
      `You're a warthog!`
    ]
  },
  {
    "pet_id": "17244",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Phacochoerus",
    "species": "Desert Warthog",
    "price": "11,150",
    "reviews": [
      `Don't make the same mistake I did! This warthog does not make a good dessert!`,
      `Seemed depressed in Seattle, so we returned it. Might try another brand.`
    ]
  },
  {
    "pet_id": "17345",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Babyrousa",
    "species": "North Sulawesi Babirusa",
    "price": "14,550",
    "reviews": [
      `I can't get enough of those curly horns. They're glorious!`,
      `I'm worried the horns will poke his face.`,
      `Back in North Sulawesi, these were all the rage.`
    ]
  },
  {
    "pet_id": "17446",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Potamochoerus",
    "species": "Red River Hog",
    "price": "9,200",
    "reviews": [
      `Once it got in the bathtub, it refused to get out again.`
    ]
  },
  {
    "pet_id": "17547",
    "class": "mammal",
    "family": "Suidae",
    "genus": "Porcula",
    "species": "Pygmy Hog",
    "price": "13,250",
    "reviews": [
      `What they lack in stature they make up for in charisma!`,
    ]
  },
  {
    "pet_id": "18148",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Pongo",
    "species": "Sumatran Orangutan",
    "price": "44,250",
    "reviews": [
      `Looks too much like my angry uncle. He wasted his life on booze and never cut his hair. And gosh does my family ever have a lot of body hair. One time we all [deleted by moderator]`,
      `So furry!`,
      `An orangutan stole my watch. Who do I complain to?`
    ]
  },
  {
    "pet_id": "18249",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Gorilla",
    "species": "Western Gorilla",
    "price": "67,975",
    "reviews": [
      `You know what they say when it comes to gorillas: Western is bestern!`
    ]
  },
  {
    "pet_id": "18250",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Gorilla",
    "species": "Eastern Gorilla",
    "price": "69,980",
    "reviews": [
      `I've always had a soft spot in my heart for eastern gorillas. Can't wait to pick up another one.`,
      `Makes a great gift!`
    ]
  },
  {
    "pet_id": "18350",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Pan",
    "species": "Bonobo",
    "price": "22,480",
    "reviews": [
      `No matter how clean they are, the jokes from unenlightened people will never stop. Save yourself the trouble.`
    ]
  },
  {
    "pet_id": "18351",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Pan",
    "species": "Common Chimpanzee",
    "price": "24,400",
    "reviews": [
      `Everyone said the throwing-poop thing was a myth, but it's real and becoming a big problem.`,
      `Just as violently aggressive as advertized!`,
      `Mine doesn't speak American sign-language. Do you think it speaks a different sign-language? Petsy needs to be clearer about what we're getting.`
    ]
  },
  {
    "pet_id": "18452",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Symphalangus",
    "species": "Siamang",
    "price": "17,800",
    "reviews": [
      `Their hair is so stylish. I feel like an orangutan in comparison.`
    ]
  },
  {
    "pet_id": "18553",
    "class": "mammal",
    "family": "Hominidae",
    "genus": "Hylobates",
    "species": "Agile Gibbon",
    "price": "14,250",
    "reviews": [
      `Lives up to the name.`,
      `Mine won't stop calling. I'm never getting another gibbon.`
    ]
  },
  {
    "pet_id": "19154",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "Ailuropoda",
    "species": "Giant Panda",
    "price": "67,350",
    "reviews": [
      `So furry!`,
      `Ate all my decorative bamboo. Not happy. 3/5`,
      `No kung fu skills at all in mine. Possibly defective, but I'll investigate.`,
      `The capstone of every man's bear collection. Save the best for last, when you're comfortable handling your basic bears.`
    ]
  },
  {
    "pet_id": "19255",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "Tremarctos",
    "species": "Spectacled Bear",
    "price": "54,750",
    "reviews": [
      `Those markings are nothing to laugh at.`,
      `NERD`,
      `I don't think they look spectacular. Pretty ordinary if you ask me, like wearing glasses.`
    ]
  },
  {
    "pet_id": "19356",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Polar Bear",
    "price": "97,745",
    "reviews": [
      `pros: Looks cleanest of all bears when clean. cons: Looks dirtiest of all bears when dirty.`
    ]
  },
  {
    "pet_id": "19357",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "Ursus",
    "species": "Brown Bear",
    "price": "73,755",
    "reviews": [
      `So furry!`,
      `Brown is really a type of red, you know.`,
      `These bears are an invasive species in Australia. Please stop shipping them here.`,
      `A good, basic starting bear at a reasonable price.`,
      `The shipping was so fast!`
    ]
  },
  {
    "pet_id": "19358",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Cinnamon Bear",
    "price": "81,355",
    "reviews": [
      `10/10`,
      `11/11`,
      `The best bear for your Christmas party. All the guests were delighted.`
    ]
  },
  {
    "pet_id": "19359",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Glacier Bear",
    "price": "81,355",
    "reviews": [
      `The glacier retreated, so now I have to take my glacier bears up to the mountains every summer.`
    ]
  },
  {
    "pet_id": "19360",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Baluchistan Black Bear",
    "price": "68,300",
    "reviews": [
      `Greetings from Pakistan. The Baluchistan black bears here come outside from my ancestral hometown. I give an oath for their absolute health and magnificence.`
    ]
  },
  {
    "pet_id": "19361",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Japanese Black Bear",
    "price": "72,500",
    "reviews": [
      `Much as I loved it, the bear never worked out well in my apartment.`,
    ]
  },
  {
    "pet_id": "19362",
    "class": "mammal",
    "family": "Ursidae",
    "genus": "	Ursus",
    "species": "Ussuri Black Bear",
    "price": "59,900",
    "reviews": [
      `Cheaper than the Japanese black bear, but just as Japanese. A good choice for someone seeking a bear that's slightly out of the ordinary, but still high quality.`
    ]
  },
  {
    "pet_id": "10163",
    "class": "mammal",
    "family": "Odobenidae",
    "genus": "Odobenus",
    "species": "Walrus",
    "price": "234,979",
    "reviews": [
      `The sun was shining on the sea,
      Shining with all his might:
      He did his very best to make
      The billows smooth and bright--
      And this was odd, because it was
      The middle of the night.
      
      The moon was shining sulkily,
      Because she thought the sun
      Had got no business to be there
      After the day was done--
      "It's very rude of him," she said,
      "To come and spoil the fun!"
      
      
      The sea was wet as wet could be,
      The sands were dry as dry.
      You could not see a cloud, because
      No cloud was in the sky:
      No birds were flying overhead--
      There were no birds to fly.
      
      The Walrus and the Carpenter
      Were walking close at hand;
      They wept like anything to see
      Such quantities of sand:
      "If this were only cleared away,"
      They said, "it would be grand!"
      
      "If seven maids with seven mops
      Swept it for half a year.
      Do you suppose," the Walrus said,
      "That they could get it clear?"
      "I doubt it," said the Carpenter,
      And shed a bitter tear.
      
      "O Oysters, come and walk with us!"
      The Walrus did beseech.
      "A pleasant walk, a pleasant talk,
      Along the briny beach:
      We cannot do with more than four,
      To give a hand to each."
      
      The eldest Oyster looked at him,
      But never a word he said:
      The eldest Oyster winked his eye,
      And shook his heavy head--
      Meaning to say he did not choose
      To leave the oyster-bed.
      
      But four young Oysters hurried up,
      All eager for the treat:
      Their coats were brushed, their faces washed,
      Their shoes were clean and neat--
      And this was odd, because, you know,
      They hadn't any feet.
      
      Four other Oysters followed them,
      And yet another four;
      And thick and fast they came at last,
      And more, and more, and more--
      All hopping through the frothy waves,
      And scrambling to the shore.
      
      
      The Walrus and the Carpenter
      Walked on a mile or so,
      And then they rested on a rock
      Conveniently low:
      And all the little Oysters stood
      And waited in a row.
      
      "The time has come," the Walrus said,
      "To talk of many things:
      Of shoes--and ships--and sealing-wax--
      Of cabbages--and kings--
      And why the sea is boiling hot--
      And whether pigs have wings."
      
      "But wait a bit," the Oysters cried,
      "Before we have our chat;
      For some of us are out of breath,
      And all of us are fat!"
      "No hurry!" said the Carpenter.
      They thanked him much for that.
      
      "A loaf of bread," the Walrus said,
      "Is what we chiefly need:
      Pepper and vinegar besides
      Are very good indeed--
      Now if you're ready, Oysters dear,
      We can begin to feed."
      
      "But not on us!" the Oysters cried,
      Turning a little blue.
      "After such kindness, that would be
      A dismal thing to do!"
      "The night is fine," the Walrus said.
      "Do you admire the view?
      
      
      "It was so kind of you to come!
      And you are very nice!"
      The Carpenter said nothing but
      "Cut us another slice:
      I wish you were not quite so deaf--
      I've had to ask you twice!"
      
      "It seems a shame," the Walrus said,
      "To play them such a trick,
      After we've brought them out so far,
      And made them trot so quick!"
      The Carpenter said nothing but
      "The butter's spread too thick!"
      
      "I weep for you," the Walrus said:
      "I deeply sympathize."
      With sobs and tears he sorted out
      Those of the largest size,
      Holding his pocket-handkerchief
      Before his streaming eyes.
      
      "O Oysters," said the Carpenter,
      "You've had a pleasant run!
      Shall we be trotting home again?'
      But answer came there none--
      And this was scarcely odd, because
      They'd eaten every one.`
    ]
  },
  {
    "pet_id": "10164",
    "class": "mammal",
    "family": "Monodontidae",
    "genus": "Monodon",
    "species": "Narwhal",
    "price": "537,670",
    "reviews": [
      `My own unicorn, like I'd always wanted!`
    ]
  },
  {
    "pet_id": "10165",
    "class": "mammal",
    "family": "Cervidae",
    "genus": "Hydropotes",
    "species": "Water Deer",
    "price": "109,000",
    "reviews": [
      `I never did figure out why they needed the fangs, but otherwise they were loyal and fun.`
    ]
  },
  {
    "pet_id": "10166",
    "class": "mammal",
    "family": "Giraffidae",
    "genus": "Giraffa",
    "species": "Giraffe",
    "price": "123,050",
    "reviews": [
      `You can't trust a giraffe.`,
      `Finally, a pet that gets all my jokes and pop culture references.`,
      `Impressively long vertebrae! I'm amazed every time.`
    ]
  },
  {
    "pet_id": "10167",
    "class": "mammal",
    "family": "Giraffidae",
    "genus": "Okapia",
    "species": "Okapi",
    "price": "42,150",
    "reviews": [
      `If I've said it once, I've said it a thousand times. WATCH OUT FOR THE TONGUE.`
    ]
  },
  {
    "pet_id": "10168",
    "class": "mammal",
    "family": "Bovidae",
    "genus": "Bos",
    "species": "Gaur",
    "price": "47,555",
    "reviews": [
      `You'll need an oversize van if you want to take your gaur shopping with you.`
    ]
  },
  {
    "pet_id": "10169",
    "class": "mammal",
    "family": "Bovidae",
    "genus": "Bos",
    "species": "Zebu",
    "price": "23,595",
    "reviews": [
      `I couldn't wait to unwrap my zebu as a kid. Now I get the chance to watch the same joy on my childrens' faces!`
    ]
  },
  {
    "pet_id": "10170",
    "class": "mammal",
    "family": "Bovidae",
    "genus": "Bos",
    "species": "Wild Yak",
    "price": "25,155",
    "reviews": [
      `They don't talk back. I can't say that for other pets here.`
    ]
  },
  {
    "pet_id": "10171",
    "class": "mammal",
    "family": "Cervidae",
    "genus": "Rangifer",
    "species": "Reindeer",
    "price": "63,150",
    "reviews": [
      `No matter what I do, I cannot get these things to fly. They're much harder to use than advertized.`,
      `So furry!`
    ]
  },
  {
    "pet_id": "10172",
    "class": "mammal",
    "family": "Cervidae",
    "genus": "Odocoileus",
    "species": "White-Tailed Deer",
    "price": "2,560",
    "reviews": [
      `Deer are like big rodents. Why would anyone buy one?`,
      `Perfect for when you need to restock your hunting grounds.`
    ]
  },
  {
    "pet_id": "10173",
    "class": "mammal",
    "family": "Cervidae",
    "genus": "Alces",
    "species": "Moose",
    "price": "13,720",
    "reviews": [
      `I'm an avid mooser, eh, and these are some mighty fine antlers`
    ]
  },
  {
    "pet_id": "4111",
    "class": "Reptilia",
    "family": "Crocodylidae",
    "genus": "Crocodylus",
    "species": "Freshwater Crocodile",
    "price": "24,700",
    "reviews": [
      `I saw it again after a while and had to get it`
    ]
  },
  {
    "pet_id": "4112",
    "class": "Reptilia",
    "family": "Crocodylidae",
    "genus": "Crocodylus",
    "species": "Mugger Crocodile",
    "price": "26,340",
    "reviews": [
      `It was the best of times. It was the worst of times. All thanks to my mugger crocodile.`
    ]
  },
  {
    "pet_id": "4113",
    "class": "Reptilia",
    "family": "Crocodylidae",
    "genus": "Crocodylus",
    "species": "American Crocodile",
    "price": "22,510",
    "reviews": [
      `Buy American crocodiles and support American crocodile farmers.`
    ]
  },
  {
    "pet_id": "4114",
    "class": "Reptilia",
    "family": "Crocodylidae",
    "genus": "Crocodylus",
    "species": "Saltwater Crocodile",
    "price": "29,100",
    "reviews": [
      `It cries all the time, but don't you dare believe it's sincere. It is completely callous toward others' feelings.`,
      `The tick-tock-tick-tock is driving me mad!`
    ]
  },
  {
    "pet_id": "4215",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Caiman",
    "species": "Broad-Snouted Caiman",
    "price": "32,690",
    "reviews": [
      `Eats enough to justify that broad snout.`
    ]
  },
  {
    "pet_id": "4216",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Caiman",
    "species": "Yacare Caiman",
    "price": "33,240",
    "reviews": [
      `5/5 but don't try to polish its scales`
    ]
  },
  {
    "pet_id": "4227",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Alligator",
    "species": "American Alligator",
    "price": "46,990",
    "reviews": [
      `I saw this one again a little later, and it was just as exquisite.`
    ]
  },
  {
    "pet_id": "4228",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Alligator",
    "species": "Chinese Alligator",
    "price": "38,465",
    "reviews": [
      `Still packs a punch despite the scene at the docks.`
    ]
  },
  {
    "pet_id": "4239",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Paleosuchus",
    "species": "Cuvier's Dwarf Caiman",
    "price": "23,565",
    "reviews": [
      `So scaly!`
    ]
  },
  {
    "pet_id": "42310",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Paleosuchus",
    "species": "Smooth-Fronted Caiman",
    "price": "21,255",
    "reviews": [
      `So smooth! At least on the front.`
    ]
  },
  {
    "pet_id": "42411",
    "class": "Reptilia",
    "family": "Alligatoridae",
    "genus": "Melanosuchus",
    "species": "Black Caiman",
    "price": "28,425",
    "reviews": [
      `Black caimans are easily twice the caimans that Cuvier's Dwarvf caimans are.`
    ]
  },
  {
    "pet_id": "43112",
    "class": "Reptilia",
    "family": "Gavialidae",
    "genus": "Tomistoma",
    "species": "False Gharial",
    "price": "33,375",
    "reviews": [
      `This is not really a gharial, and I feel cheated`,
      `It's as good as a real gharial IMO`
    ]
  },
  {
    "pet_id": "44113",
    "class": "Reptilia",
    "family": "Pythonidae",
    "genus": "Python",
    "species": "Burmese Python",
    "price": "7,275",
    "reviews": [
      `The hip bone spurs don't really look like legs to me. But then I'm not a bone expert.`,
      `It's a SNAAAAAAKE`
    ]
  },
  {
    "pet_id": "45114",
    "class": "Reptilia",
    "family": "Boidae",
    "genus": "Boa",
    "species": "Boa Constrictor",
    "price": "12,100",
    "reviews": [
      `Much heavier than a feather boa, but worth it if you can lift the weight.`
    ]
  },
  {
    "pet_id": "45215",
    "class": "Reptilia",
    "family": "Boidae",
    "genus": "Eunectes",
    "species": "Green Anaconda",
    "price": "15,670",
    "reviews": [
      `My anaconda don't, my anaconda don't
      My anaconda don't want none unless you got bunnies (to feed it)`
    ]
  },
  {
    "pet_id": "45216",
    "class": "Reptilia",
    "family": "Boidae",
    "genus": "Eunectes",
    "species": "Bolivian Anaconda",
    "price": "17,470",
    "reviews": [
      `Mi anaconda no, mi anaconda no
      Mi anaconda no quiere nada a menos que tengas conejos.`
    ]
  },
  {
    "pet_id": "46117",
    "class": "Reptilia",
    "family": "Viperidae",
    "genus": "Montivipera",
    "species": "Central Turkish Mountain Viper",
    "price": "12,850",
    "reviews": [
      `Don't trust it for a moment. You'll regret it like I do.`,
      `It's a SNAAAAAAKE, it's a SNAAAAAKE, ohhhhh, it's a snaaaaake`
    ]
  },
  {
    "pet_id": "2111",
    "class": "Aves",
    "family": "Struthionidae",
    "genus": "Struthio",
    "species": "Ostrich",
    "price": "11,000",
    "reviews": [
      `She kicked over my car!`,
    ]
  },
  {
    "pet_id": "2222",
    "class": "Aves",
    "family": "Apterygidae",
    "genus": "Apteryx",
    "species": "Kiwi",
    "price": "2,000",
    "reviews": [
      `Makes delicious eggs, but very few of them`,
      `So furry! Well, it looks furry. They're actually feathers.`,
      `Ideal for homes without aviaries.`
    ]
  },
  {
    "pet_id": "2333",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Anas",
    "species": "Steamer Duck",
    "price": "1,200",
    "reviews": [
      `Quacks too much.`
    ]
  },
  {
    "pet_id": "2344",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Cygnus",
    "species": "Mute swan",
    "price": "4,500",
    "reviews": [
      `It would make an ugly duck, but it's a fine-looking swan.`
    ]
  },
  {
    "pet_id": "2345",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Cygnus",
    "species": "Trumpeter swan",
    "price": "6,300",
    "reviews": [
      `Loud but pretty`
    ]
  },
  {
    "pet_id": "2356",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Hymenolaimus",
    "species": "Blue Duck",
    "price": "2,500",
    "reviews": [
      `It's only truly blue when the sunlight hits it just right. Just add a little paint and you'll have the blue duck of your dreams.`
    ]
  },
  {
    "pet_id": "2337",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Anas",
    "species": "Mallard",
    "price": "1,300",
    "reviews": [
      `The finest racing ducks, befitting a gentleman's station.`
    ]
  },
  {
    "pet_id": "2338",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Anas",
    "species": "Yellow-Billed Duck",
    "price": "2,600",
    "reviews": [
      `Walks like a duck and talks like a duck. I'm satisfied.`
    ]
  },
  {
    "pet_id": "2339",
    "class": "Aves",
    "family": "Anatidae",
    "genus": "Anas",
    "species": "Hawaiian duck",
    "price": "2,800",
    "reviews": [
      `I was hoping it would be more colorful in person.`
    ]
  },
  {
    "pet_id": "24110",
    "class": "Aves",
    "family": "Sulidae",
    "genus": "	Sula",
    "species": "Blue-Footed Booby",
    "price": "203,560",
    "reviews": [
      '[deleted by moderator]',
      '[deleted by moderator]',
      '[deleted by moderator]'
    ]
  },
  {
    "pet_id": "3111",
    "class": "Actinopterygii",
    "family": "Melanocetidae",
    "genus": "Melanocetus",
    "species": "Humpback Anglerfish",
    "price": "129,880",
    "reviews": [
      `Gives me nightmares`,
      `Useful as a nightlight in a darkly lit acquarium.`
    ]
  },
  {
    "pet_id": "3212",
    "class": "Actinopterygii",
    "family": "Stomiidae",
    "genus": "Chauliodus",
    "species": "Viperfish",
    "price": "109,880",
    "reviews": [
      `Gives me nightmares`,
      `Stick with the classic anglerfish for oohs and aahs; the viperfish earns you mostly shrieks.`
    ]
  },
  {
    "pet_id": "19357",
    "class": "mammal",
    "family": "Phascolarctidae",
    "genus": "Phascolarctos",
    "species": "Koala Bear",
    "price": "42,450",
    "reviews": [
      `So furry!`,
      `Every bit as cute as in the pictures, but so sleepy all the time.`,
      `I taught mine to dance.  It became the life of the party then stole my wife.`
    ]
  },
];




const reaction_types = [
  'like',
  'dislike'
];

const usernames = [
  'IleneReed',
  'DennyReese',
  'GaylordFritz',
  'AnibalMarshall',
  'RaySweeney',
  'MerlinMullins',
  'OdellBlair',
  'JulesLewis',
  'NancyGolden',
  'StacieHansen',
  'TitusJordan',
  'BernieMyers',
  'ImeldaKeller',
  'PaulineKlein',
  'EzekielPatterson',
  'RoscoeHaney',
  'VirgilContreras',
  'CathrynGardner',
  'AudraWarner',
  'JeanetteEvans',
  'GabrielBodeen',
  'AustinStotts',
  'MichaelNutt',
  'EricCChiu',
  'SeanMeyer',
  'DevinKrok',
  'NickFredman',
  'ZubairDesai',
  'MichaelKOConnor',
  'MattBrannon',
  'LindenKueck'
];

const randomReviews = [
  `The body may perhaps compensates for the loss of a true metaphysics.`,
  `Wow, does that work?`,
  `I often see the time 11:11 or 12:34 on clocks.`,
  `Tom got a small piece of pie.`,
  `I want more detailed information.`,
  `The sky is clear; the stars are twinkling.`,
  `The old apple revels in its authority.`,
  `He didn’t want to go to the dentist, yet he went anyway.`,
  `When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.`,
  `I''d rather be a bird than a fish.`,
  `Should we start class now, or should we wait for everyone to get here?`,
  `The book is in front of the table.`,
  `The shooter says goodbye to his love.`,
  `She wrote him a long letter, but he didn't read it.`,
  `She borrowed the book from him many years ago and hasn''t yet returned it.`,
  `We need to rent a room for our party.`,
  `A song can make or ruin a person’s day if they let it get to them.`,
  `If Purple People Eaters are real… where do they find purple people to eat?`,
  `Is it free?`,
  `She advised him to come back at once.`,
  `Sixty-Four comes asking for bread.`,
  `The clock within this blog and the clock on my laptop are 1 hour different from each other.`,
  `My Mum tries to be cool by saying that she likes all the same things that I do.`,
  `Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn''t and they don''t recommend anyone else do it either.`,
  `It was getting dark, and we weren’t there yet.`,
  `We have a lot of rain in June.`,
  `Two seats were vacant.`,
  `I really want to go to work, but I am too sick to drive.`,
  `The lake is a long way from here.`,
  `Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.`,
  `He ran out of money, so he had to stop playing poker.`,
  `I love eating toasted cheese and tuna sandwiches.`,
  `She always speaks to him in a loud voice.`,
  `Christmas is coming.`,
  `If I don’t like something, I’ll stay away from it.`,
  `I am counting my calories, yet I really want dessert.`,
  `A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.`,
  `She was too short to see over the fence.`,
  `Let me help you with your baggage.`,
  `There were white out conditions in the town; subsequently, the roads were impassable.`,
  `Mary plays the piano.`,
  `Joe made the sugar cookies; Susan decorated them.`,
  `Yeah, I think it''s a good environment for learning English.`,
  `Wednesday is hump day, but has anyone asked the camel if he''s happy about it?`,
  `This is a Japanese doll.`,
  `Rock music approaches at high velocity.`,
  `Writing a list of random sentences is harder than I initially thought it would be.`,
  `She folded her handkerchief neatly.`,
  `The mysterious diary records the voice.`,
  `Malls are great places to shop; I can find everything I need under one roof.`,
  `He said he was not there yesterday; however, many people saw him there.`,
  `The memory we used to share is no longer coherent.`,
  `I was very proud of my nickname throughout high school but today - I couldn''t be more indifferent to what my nickname was.`
    `Please wait outside of the house.`,
  `The stranger officiates the meal.`,
  `She works two jobs to make ends meet; at least, that was her reason for not having time to join us.`,
  `He turned in the research paper on Friday; otherwise, he would have not passed the class.`,
  `I hear that Nancy is very pretty.`,
  `I will never be this young again. Ever. Oh damn… I just got older.`,
  `Lets all be unique together until we realise we are all the same.`,
  `I want to buy a onesie… but know it won’t suit me.`,
  `Don''t step on the broken glass.`,
  `She did her best to help him.`,
  `I am never at home on Sundays.`,
  `They got there early, and they got really good seats.`,
  `Cats are good pets, for they are clean and are not noisy.`,
  `Where do random thoughts come from?`,
  `The quick brown fox jumps over the lazy dog.`,
  `Check back tomorrow; I will see if the book has arrived.`,
  `I would have gotten the promotion, but my attendance wasn’t good enough.`,
  `Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn''t so bad after all.`,
  `If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?`,
  `He told us a very exciting adventure story.`,
  `She did not cheat on the test, for it was not the right thing to do.`,
  `If you like tuna and tomato sauce - try combining the two. It''s really not as bad as it sounds.`,
  `Hurry!`,
  `The river stole the gods.`,
  `She only paints with bold colors; she does not like pastels.`,
  `I currently have 4 windows open up… and I don’t know why.`,
  `How was the math test?`,
  `Italy is my favorite country; in fact, I plan to spend two weeks there next year.`,
  `I am happy to take your donation; any amount will be greatly appreciated.`,
  `There was no ice cream in the freezer, nor did they have money to go to the store.`,
  `We have never been to Asia, nor have we visited Africa.`,
  `The waves were crashing on the shore; it was a lovely sight.`,
  `I checked to make sure that he was still alive.`,
  `Abstraction is often one floor above you.`,
  `Your new pet passes this pet under the bias photograph. Why can''t any genius fear the heel? When can a fashionable teenager resist this pet? The hierarchical bread flies next to your new pet. How does the square whoop tower around the epic?`,
  `Your new pet bridges the bean. This pet founds your new pet into a mandate. Should a gay continent fiddle inside this pet? Can your new pet joke underneath this pet?`,
  `This pet exchanges a physicist. This pet rests the efficient origin before the feat. This pet impresses your new pet. This pet leans against a peripheral throughout the annoying romance. Your new pet expenses this pet beneath an examiner. The container qualifies a car.`,
  `A divine slices your new pet. Why can''t your new pet change the unset wire? This pet sabotages an abbreviated bone against the concluding hope. Does your new pet outline the functional slogan? A systematic disguise crashes in an exponential.`,
  `Why does the white turnround suspend our throat? This pet awards your new pet throughout a fierce virus. A class refrains under the rope! The enemy clogs below a based bass. The divided conductor boggles behind the blank juvenile.`,
  `This pet changes behind your new pet. The abusive tobacco compensates a correspondent. Does the variance defect over this pet? A precedent muddle bicycles below the sermon. An unlucky problem frequents this pet beside the outline.`,
  `A stable chemical behaves. The experimental composer corrupts the groan over a sober pie. The lunch inconveniences this pet. The squeeze sockets the exclusive seal. This pet farms behind the transformed smoke.`,
  `This pet bites your new pet below a century. The pedestrian exaggerates your new pet without her combat. A realistic alien springs onto the score fighter. How will your new pet legitimize this pet? Your new pet works throughout a cubic gang.`,
  `Why does your new pet study this pet? The setting solicitor gangs this pet. This pet convicts the existing girl with a disgusted postscript. This pet raves inside your new pet. Your new pet foams under this pet.`,
  `Your new pet gutters this pet. This pet colors without whatever gold. Your new pet budgets this pet throughout an immortal mania. The shock indulges? The criterion axes your new pet beneath the estimated defeated.`,
  `My last pet gowns my partner underneath whatever worst. My partner breaks. When will my partner rest upon the strategy? The doubtful stake furthers my last pet. My last pet brackets the officer with a damage.`,
  `The swept alliance generalizes my last pet. My spouse displays the oral pad behind the disorder. The pulled postscript squashes my last pet against the historian. The standard box lodges my spouse behind the eventual contour. My last pet rephrases the likelihood after the cracked sermon.`,
  `My last pet warehouses my husband. My husband eyes my last pet throughout a debate. How will my husband respond outside my last pet? My husband mends next to my last pet. My husband contests any orbit under a geometry.`,
  `The releasing computer breezes underneath my wife. My wife maintains my last pet near this moderate. A pole eyes my wife. How will the fluid stumble over the blurb? My last pet touches my professional.`,
  `This pet constitutes my child outside a secure parent. This pet details an object beside the proud sister. My child lusts for any rail. My child bakes her smoker before a usual spectacular. The discovery grasses this pet next to the pacifier. This pet assumes my child in the void.`,
  `This pet draws a smoked curry opposite the quota. Can my son run? This pet points to the dead around the thought. The concise haircut arranges my son.`,
  `This pet perceives my daughter across a futile hindsight. The faulty milk butters this pet before the bigot. This pet detaches whatever postcard in the lighted pointer. An infant exercises throughout the borderline. This pet begs a layer without the hum. A faucet updates my daughter before an arcade.`,
  `This beautiful animal consents in a champagne. Every other pet thirsts for the poem. Every other pet compacts this beautiful animal. Every other pet frowns the plotted heat below a heat.`,
  `Every other pet blackmails this beautiful animal over her sack. Every other pet concedes the corridor across an insistence. A frozen injury beats the decline. A borderline minimalist separates every other pet into the decay. The murder disposes of a cancelled fringe into every arena. Before every other pet pulses this beautiful animal.`,
  `When will a grey boss flame every other pet? This beautiful animal expands around a clause. The tuned blanket mills every other pet beneath the fierce maze. Every other pet floors your rubber beneath the snow. Every other pet garages this beautiful animal past a wrist.`,
  `Why does a debatable norm mess with this beautiful animal? The holiday vintages this beautiful animal. A shed disadvantages the digital roundabout behind a boot. A theology indulges beside the inclined stomach. Does the window shoot this beautiful animal?`,
  `Does every other pet storm on top of this beautiful animal? This beautiful animal stills every other pet. This beautiful animal forks every other pet. This beautiful animal bucks with the drinking nostalgia. Every other pet shoves this beautiful animal near a harmony.`,
  `Should each other animal flip? The transformed drill faints past a warrant. The heavy recruit comforts this exquisite pet within the specimen. Each other animal rockets this exquisite pet into a downstairs. The sterling hello whistles opposite the unacceptable quibble.`,
  `This exquisite pet bicycles without each other animal. The boundary skirts this exquisite pet. The pun protests each other animal. Each other animal purges outside the constraint. This exquisite pet worries.`,
  `Each other animal stares opposite my favorite pet. The protected milk awakes each other animal. Will a pressure sleep behind each other animal? Why won''t my favorite pet process a winter tool? Each other animal plays next to an indeterminate yard.`,
  `My favorite pet spans the bundle before the visitor. Every other animal jerks my favorite pet without the prostitute. A competent strength comforts my favorite pet without a bullet. Every other animal rests upon the precedent bullet. My favorite pet struggles near the icon.`,
  `Should any other pet trash the law? Why won''t any other pet mess with a misprint? How does the camp install any other pet? Another music folds any other pet. Any other pet fiddles across an undefined bump.`,
  `My favorite pet cants any other pet behind the tied heat. Any other pet elaborates past my favorite pet. Opposite the nonsense law strays this all unfortunate. Any other pet equips my favorite pet past a composite.`,
  `Why won''t this little guy combat every brass? When will this little guy apologize for our home? A reactionary flours this little guy within the feeling historian. This little guy establishes our home. Can this little guy manipulate our home?`,
  `The developing biscuit schools our home. This container reckons? Our home upgrades this little guy. A prerequisite cramp retires a raving export. This little guy rejects its heritage next to a servant.`,
  `Will this little guy crack opposite the coffee? Our home touches the algorithm past a verdict. Can the scientist escape past a differing developer? Will the paint stretch below an ended creature? Its ideal screams on top of his scotch razor.`,
  `Why does an adorable pet export a wit? An upgrade unfortunate frowns next to the humane campus. A motorway tables a twenty coal throughout the galaxy. Any cheese burns within the page. Another recipient tables our home. How can the calm attend beneath an adorable pet?`,
  `Our home spits! The challenging battery reads our home throughout the timer. An adorable pet inhabits the repulsive spectacular. An adorable pet reckons on top of a tunnel. The patent gasps within our home.`,
  `The timetable handicaps the socket. How will a voice broadcast a score aged? The shadow sections this dog under a reassuring quest. How can a disturbed constitutional exist around the quibble? This dog provisions the goldfish. Can this dog retract?`,
  `When can this dog read above a cat? This dog interferes! The finite courier views a cat in the misprint. A priced wisdom asks the arrival. The super starter oppresses a cat throughout a consuming significance. This dog indents a circumstance past the bone.`,
  `The routine waits behind a moon! The round visit blinks an engaged chalk. The startled defeated amends this dog around each scholar. This dog trips another redundant playground with the small pit. A cat civilizes an atheist after an eye. This dog prosecutes a sad recipe without the optic.`,
  `The muddle extends into this cat against the stiff ritual. Will a dog sole this cat? A dog advertises outside a portable sketch. A dog rails this cat. The despair colors below the diagram! The prominent crime clogs near this theft.`,
  `This cat reinstates a dog. A dog proceeds in this cat. Can the compound motor a dog? Why won''t an independence cheat?`,
  `This cat feels the configured hatred. A dog strikes this cat. This cat waves! Why won''t the duck click?`,
  `How can obedience pinch cuteness? Cuteness counters a primary supreme. The smoker ices cuteness with the species. Obedience resumes cuteness near the compound rag. The port life proceeds over obedience.`,
  `A substitute sighs beside obedience. Can a gnome relate to the graduated revolutionary? The supporting dominant sounds like the diet beside the loyal bathroom. Cuteness sockets obedience.`,
  `Cuteness dines. Your money frustrates obedience into the crowded marriage. Cuteness splits obedience. Obedience duplicates cuteness against the common tale.`,
  `What I always wanted bundles a middle glove behind the skill. Another thing trains what I always wanted in a shining pipeline. What I always wanted deserves another thing against an awkward risk. Another thing cries around what I always wanted.`,
  `What I always wanted overcomes opposite another thing. Another thing prosecutes throughout what I always wanted. What I always wanted spins under the escaped tax. The pro laughs?`,
  `The best pet composes! The best pet beams! This lizard waits before the eaten past. How can the mimic coincidence notice the best pet? The best pet works on top of this lizard.`,
  `How can this lizard run with the best pet? This lizard busts the best pet before this it''s horse. Should the best pet gutter this lizard? Any back safeguards a neat finger. This lizard kisses the best pet.`,
  `The best pet seconds this fish. Will a singular dilemma gown this fish? The best pet breathes next to the smart blessed. The best pet withdraws in this fish. This fish colors past the best pet.`,
  `Does the sunrise nature prolong the best pet? Will the best pet stare inside this fish? The conduct earths the best pet in the balance. The best pet rockets outside this fish.`,
  `This elephant smashes the best pet. Does every intellectual estimate an owned conservative? This elephant delays a relief. The nested temperature hurts opposite a piano. The provocative minimalist caps this elephant beside a winter quiz.`,
  `When will my home flip adorableness? Underneath the racket hopes a portrayed leak. The noble reinstates a failed change with a rope. My home fusses past adorableness. The award clashs with adorableness within the bench.`,
  `A socialist thirsts for my home. The logical injustice understands an explosive fruit. The simplified dish resides in my home. Why does the dreaded disturbance pretend behind adorableness? Any seal amends an exaggerated paranoia.`,
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  `There''s nothing in the world I loved so much as this pet.`,
  `5/5 would own again.`,
  `4/5 Pet is great to show off on long walks through city parks, but hard to take care of.`,
  `3/5 I couldn''t handle this little guy at his worst, so I didn''t deserve him at his best.`,
  `2/5 So much shedding.`,
  `1/5 Pet is difficult to keep happy. Constantly nags me for food and air.`,
  `0/5 This pet owned me, which is morally wrong.`,
  `Pro: She eats anything you feed her. Con: She eats everything else, too.`,
  `Pro: So adorable! I just want to hug it all the time. Con: Mutual severe allergic reactions to touch.`,
  `Pro: Is extremely valuable. Con: Is difficult to relate to.`,
  `Pro: An excellent guard animal for my property! It really terrifies all the criminals and children away.  Con: Picks fights with the landscapers.`,
  `Pro: Wowed all my guests!  Con: Was not as tasty as I was expecting. Next time I recommend roasting an additional 5 hrs.`,
  `Pro-tip: Trim its appendages every week to avoid overgrowth.`,
  `During training, it''s essential to show you''re the boss.  Try biting its ear whenever it shows aggression.`,
  `This animal came completely wild. I was promised training. I demand a refund!`,
  `Ppl who like these r sick`,
  `I can''t wait to collect them all!`,
  `He sat on my leather sofa, and now it''s ruined.`,
  `First!`,
  `This pet spoke to me and told me to sell everything I owned. So I started by selling her.`,
  `Way more fun than I expected`,
  `Way more work than I expected`,
  `Way more sleeping than I expected`,
  `Ooh, I want one of these!`,
  `Hard to use`,
  `It turned out that I knew less about animals than I thought`,
  `Now I feel ready to graduate to raising a human baby!`,
  `Now I know I''m not ready to handle a baby.`,
  `I miss my Brutus.  This one reminds me so much of him`,
  `Looks just like my Darciboo!`,
  `Don''t feed after midnight!!!!!`,
  `Be sure you only get one that is organic, GMO-free, locally wild-caught. And check whether the seller recycles!`,
  `Be sure to get it vaccinated before introducing it to the rest of your animals.`,
  `Raising Buddy was the time of ours lives!`,
  `I totally didn''t believe this animal was real, but then it came in the mail just like they said. Worth every penny.`,
  `What is it? I want one!`,
  `I didn''t read the other reviews, but I promise you they''re completely off-base. Google a thing or two about the species before you spout off your opinions!`,
  `Oh come on, nobody buys these things anymore.`,
  `[deleted by moderator]`,
  `Got as a gift. My biggest mistake was looking it in the mouth.`,
  `How do I get return mine? It''s so much smaller than I was expecting.`,
  `Nestling into its embrace at night is the greatest feeling in the world.`,
  `Got this one for my daughter. She was so thrilled to open the box!`
];

const { Pool } = require('pg')
const pool = new Pool({
  user: 'reviewer',
  database: 'reviews',
});

pool.connect();

dbSeedReactionTypes = async (reaction_types) => {
  let first, rest;
  if (reaction_types.length) {
    [first, ...rest] = reaction_types;
  } else {
    return null;
  }
  const query = `INSERT INTO reaction_types (reaction_type_name) VALUES ('${first}');`;
  try {
    await pool.query(query);
  }
  catch (err) {
    console.log(err);
  }
  return dbSeedReactionTypes(rest);
}

dbSeedUsers = async (usernames) => {
  let first, rest;
  if (usernames.length) {
    [first, ...rest] = usernames;
  } else {
    return null;
  }
  const query = `INSERT INTO users (username, account_created) VALUES ('${first}', NOW());`;
  try {
    await pool.query(query);
  }
  catch (err) {
    console.log(err);
  }
  return dbSeedUsers(rest);
}

dbSeedReviews = async (reviews) => {
  let first, rest;
  if (reviews.length) {
    [first, ...rest] = reviews;
  } else {
    return null;
  }
  const query = `INSERT INTO reviews (user_id, review, review_created, review_updated) VALUES (${Math.floor(Math.random() * usernames.length + 1)}, '${first}', (NOW()-interval '${Math.floor(Math.random() * 500)} days'), NOW());`;
  try {
    await pool.query(query);
  }
  catch (err) {
    console.log(err);
  }
  return dbSeedReviews(rest);
}

const seedInOrder = async () => {
  await dbSeedUsers(usernames);
  await dbSeedReactionTypes(reaction_types);
  await dbSeedReviews(reviews);
}

seedInOrder();