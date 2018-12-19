// INSERT INTO reaction_types (reaction_type_name) VALUES ('like');
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
  'JeanetteEvans'
];

const reviews = [
  'She works two jobs to make ends meet; at least, that was her reason for not having time to join us.',
  'I am counting my calories, yet I really want dessert.',
  'He ran out of money, so he had to stop playing poker.',
  'She always speaks to him in a loud voice.',
  'Let me help you with your baggage.',
  `I was very proud of my nickname throughout high school but today- I couldn''t be any different to what my nickname was.`,
  `Yeah, I think it''s a good environment for learning English.`,
  'I often see the time 11:11 or 12:34 on clocks.',
  'I checked to make sure that he was still alive.',
  'There were white out conditions in the town; subsequently, the roads were impassable.',
  'I love eating toasted cheese and tuna sandwiches.',
  'A glittering gem is not enough.',
  'Rock music approaches at high velocity.',
  'I hear that Nancy is very pretty.',
  'The old apple revels in its authority.',
  'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.',
  'Mary plays the piano.',
  'I think I will buy the red car, or I will lease the blue one.',
  'I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.',
  'He told us a very exciting adventure story.',
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
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
  const query = `INSERT INTO reviews (user_id, review, review_created, review_updated) VALUES (${Math.floor(Math.random() * usernames.length + 1)}, '${first}', NOW(), NOW());`;
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