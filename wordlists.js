const wordLists = {

  // ANIMALS  

  cretaceousDinosaurs: {
    words: ['CRETACEOUS', 'ABELISAURUS', 'ACROCANTHOSAURUS', 'ALBERTOSAURUS', 'AMARGASAURUS', 'ANKYLOSAURUS', 'ARGENTINOSAURUS', 'BARYONYX', 'CARNOTAURUS', 'CHASMOSAURUS', 'DEINONYCHUS', 'EDMONTOSAURUS', 'GALLIMIMUS', 'GIGANOTOSAURUS', 'GORGOSAURUS', 'IGUANODON', 'LEAELLYNASAURA', 'MINMI', 'ORNITHOMIMUS', 'PACHYCEPHALOSAURUS', 'PARASAUROLOPHUS', 'PROTOCERATOPS', 'SPINOSAURUS', 'STEGOCERAS', 'SUCHOMIMUS', 'TARBOSAURUS', 'TRICERATOPS', 'TROODON', 'TYRANNOSAURUS', 'UTAHRAPTOR', 'VELOCIRAPTOR', 'DINOSAUR', 'FOSSIL', 'BONE', 'CLAW', 'TEETH', 'SKULL', 'CARNIVORE', 'HERBIVORE', 'BIPEDAL', 'HORN', 'FRILL', 'CREST', 'PREDATOR', 'RAPTOR'],
    facts: [
      "🦴 All we know about Abelisaurus comes from a single skull fragment — a mysterious puzzle with many missing pieces.",
      "🪖 Acrocanthosaurus had a tall ridge along its back, like a warrior wearing a spiny crest into battle.",
      "👀 Albertosaurus looked a lot like T-Rex, but its eyes were set on the sides — always watching the world around it.",
      "🦕 Amargasaurus carried a dramatic double row of spines down its neck and back, like sails catching ancient winds.",
      "🛡️ Ankylosaurus had a powerful tail club — a living tank armed for defense.",
      "🌍 Argentinosaurus was one of the largest land animals ever… and we’ve barely found any of it!",
      "🐊 Baryonyx had a long, crocodile-like snout and loved to fish — a river hunter on two legs.",
      "🐂 Carnotaurus, the 'meat-eating bull', had two strange horns and ran like a predator with a headpiece.",
      "🎭 Chasmosaurus had a frill with giant holes — maybe for defense, maybe for showtime.",
      "🦶 Deinonychus was named for its terrifying claw — a hooked blade on each toe built for attack.",
      "🦆 Edmontosaurus, one of the 'duck-billed' dinos, roamed wide plains and munched on plants.",
      "💨 Gallimimus looked like an ostrich and ran like the wind — fast, sleek, and hard to catch.",
      "📏 Giganotosaurus was even bigger than T-Rex — a towering predator in its own right.",
      "😨 Gorgosaurus means 'dreadful lizard' — and with teeth like knives, it earned the title.",
      "🦷 Iguanodon was named after an iguana’s tooth — the second dinosaur ever to get a name.",
      "❄️ Leaellynasaura was a tiny dino from cold climates, possibly feathered and quick on its feet.",
      "🏃‍♂️ Minmi was a speedy little tank — armored but agile, with longer legs than most of its kind.",
      "🦤 Ornithomimus had bird-like feet and a name that means just that — 'bird mimic.'",
      "🥊 Pachycephalosaurus had a dome-shaped skull built for battle — likely used in headbutting duels to prove who ruled the herd.",
      "🎺 Parasaurolophus had a long, curved crest with hollow tubes — a dinosaur trumpet built for sound.",
      "🦜 Protoceratops had a parrot-like beak and a frill to match — small but striking.",
      "⛵ Spinosaurus had a sail on its back — maybe to soak up sun, maybe just to show off.",
      "🥚 Stegoceras had a thick dome of bone on its head — perfect for headbutts or prehistoric posing.",
      "🐊 Suchomimus looked like a crocodile with a sail — a fish hunter with flair.",
      "👑 Tarbosaurus ruled its land like T-Rex ruled its own — a fearsome apex predator.",
      "🦏 Triceratops had three bold horns and a giant frill — its name literally means 'three-horned face.'",
      "🧠 Troodon was small, smart, and sharp — with big eyes and bigger claws.",
      "🌍 Tyrannosaurus was the king of dinosaurs — towering, toothy, and unforgettable.",
      "🦶 Utahraptor had a giant claw for hunting — a supersized version of its raptor cousins.",
      "⚡ Velociraptor was fast, fierce, and clever — a true 'swift plunderer' of the ancient world."
    ]
  },
  
  domesticAnimals: {
      words: ["ALPACA", "CAMEL", "CHICKEN", "DONKEY", "GOAT", "MINK", "CATTLE", "CAT", "DOG", "FERRET", "HORSE", "PIG", "RABBIT", "WATER BUFFALO", "SILVER FOX", "SHEEP", "YAK", "MOUSE", "RAT", "HEDGEHOG", "LLAMA", "DOVE", "CANARY", "COCKATIEL", "DUCK", "GOOSE", "PIGEON", "TURKEY", "GUINEAFOWL", "HONEY BEE", "SILKMOTH", "GOLDFISH", "KOI", "GUINEA PIG"],
      facts: [
        "🐕 Dogs were the first to walk beside us — a friendship older than any written word.",
        "🍞 After so many meals together, dogs can thrive on bread and stew, unlike their wild cousins.",
        "🐏 Once, all sheep wore earth tones, but we taught them to grow fleeces white as snow or dark as twilight.",
        "🐖 Pigs cannot sweat, so they cool off in puddles and shade — clever comfort-seekers.",
        "🐄 The cow’s story is written deep in its genes — one of the first to have a fully-mapped genome.",
        "🐈 A cat’s front limbs are bound by floating bones, letting them slip through any place their whiskers fit.",
        "🧀 Neolithic farmers kept goats for milk and meat, and their bell calls still echo through the hills.",
        "🥚 A hardworking hen can give over 300 eggs in a single turning of the seasons.",
        "🐴 Ten donkeys were once buried with a pharaoh, as if honored like noble humans.",
        "🦆 Ducklings don’t make their own waterproofing — they borrow their mother’s oil for their fluffy adventures.",
        "🐫 Dromedary camels can survive losing more than 30% of their water — and keep walking.",
        "🐝 Honeybees dance and scent the air with messages only other bees can read.",
        "🐎 Horses nap standing or curled on the ground, choosing comfort or watchfulness as needed.",
        "🕸️ Sericulture is the gentle craft of raising silkworms for threads softer than breath.",
        "🕊️ Pigeons have lived with humans since Mesopotamia, over five thousand years ago.",
        "🪿 During a quiet pandemic patrol, geese once stood watch at a border with Vietnam — wings flared like guards.",
        "🐂 Yaks don’t moo — they grunk and squeak, like old boots and hidden horns.",
        "🦙 Llamas bring calm to those in pain, quietly visiting hospitals as certified therapy animals.",
        "🐑 Alpacas are separated not by sound or stride, but by their wool — some curly, some straight.",
        "🍗 Guineafowl can stand in for chicken in a stew, and some say they bring even more flavor.",
        "🎯 Ferrets were once sport companions, hunting rabbits through tunnels in a tradition called rabbiting.",
        "🎩 White doves flutter through magic acts and ceremonies, bringing softness and illusion together.",
        "🐟 Goldfish released into the wild grow bold and large — so much that they become invaders.",
        "🐇 Rabbits hopped into human lives when the Romans first invited them indoors.",
        "🎏 Koi are the bright-painted variant of humble carp, swimming not for food but for beauty.",
        "🐁 A ‘fancy mouse’ is one bred for show — tiny, whiskered, and well-groomed for pageantry.",
        "🦦 Some still debate whether domestic mink are truly tamed, or only wearing the mask of calm.",
        "🦊 Silver foxes were born from experiments that asked how wild things become our companions.",
        "🦔 In ancient Greece, hedgehogs were welcomed inside homes to eat the insects no one else wanted."
      ]
  },

  jurassicDinosaurs: {
    words: ['JURASSIC', 'ALLOSAURUS', 'APATOSAURUS', 'ARCHAEOPTERYX', 'BRACHIOSAURUS', 'BRONTOSAURUS', 'CAMARASAURUS', 'CAMPTOSAURUS', 'CERATOSAURUS', 'COMPSOGNATHUS', 'DILOPHOSAURUS', 'DIPLODOCUS', 'HUAYANGOSAURUS', 'LESOTHOSAURUS', 'MEGALOSAURUS', 'OZRAPTOR', 'SARCOSAURUS', 'STEGOSAURUS', 'TIANCHISAURUS', 'VULCANODON', 'DINOSAUR', 'FOSSIL', 'BONE', 'CLAW', 'TEETH', 'SKULL', 'CARNIVORE', 'HERBIVORE', 'BIPEDAL', 'HORN', 'CREST', 'PREDATOR', 'SAUROPOD'],
    facts: [
      "🌋 At the end of the Triassic, a mass extinction wiped out half of all species — clearing the stage for dinosaurs to rise.",
      "🦖 During the Jurassic Period, dinosaurs finally ruled the land — towering, thundering, and thriving.",
      "🍖 Allosaurus was a top predator, strong enough to take on Stegosaurus or even long-necked giants like Diplodocus.",
      "📏 Apatosaurus stretched up to 75 feet long — one of the biggest land animals to ever walk the Earth.",
      "🪶 Archaeopteryx looked like a bird with claws — feathered, winged, and caught between two worlds.",
      "🦒 Brachiosaurus stood tall, with front legs longer than the back — built like a dinosaur giraffe.",
      "🌀 Brontosaurus was once thought to be a mistake — until science gave it its name back in 2015.",
      "💨 Camarasaurus had hollow bones and air sacs that made it lighter — and helped it breathe like a ballooning behemoth.",
      "🌿 Camptosaurus had a clever jaw — grinding up plants with teeth made for chewing, not chomping.",
      "🦏 Ceratosaurus had a horn on its nose and two more above its eyes — a three-horned hunter on the move.",
      "🦐 Compsognathus was once the smallest known dinosaur — until even tinier fossils came to light.",
      "🎭 Dilophosaurus had twin crests on its head — and legs built for speed and ambush.",
      "🐍 Diplodocus may have used its long tail like a whip — snapping at danger from behind.",
      "🍃 Huayangosaurus was the smallest known stegosaur — still armored, but compact and low to the ground.",
      "✂️ Lesothosaurus didn't chew like modern grazers — it chopped plants with a swift bite instead.",
      "📖 Megalosaurus was named before the word 'dinosaur' even existed — the first of its kind in the fossil record.",
      "🌏 Ozraptor is one of the oldest dinosaurs ever found in Australia — a fossil from a forgotten land.",
      "🦴 Sarcosaurus is known only from a hip bone, a vertebra, and part of a leg — a mystery told in fragments.",
      "🧠 Stegosaurus had a brain the size of a walnut — proof that size isn’t everything.",
      "🎬 The species name of one Tianchisaurus means 'nedegoapeferima' — a tribute to the stars of *Jurassic Park*.",
      "🦷 Vulcanodon got its name from teeth found in volcanic rock — but they turned out to be a mix-up from sandstone and another species."
    ]
  },

  popularDinosaurs: {
    words: ['ALLOSAURUS', 'ANKYLOSAURUS', 'APATOSAURUS', 'BRACHIOSAURUS', 'BRONTOSAURUS', 'CARNOTAURUS', 'COMPSOGNATHUS', 'DIPLODOCUS', 'IGUANODON', 'PACHYCEPHALOSAURUS', 'PARASAUROLOPHUS', 'SPINOSAURUS', 'STEGOSAURUS', 'TRICERATOPS', 'TYRANNOSAURUS', 'VELOCIRAPTOR', 'DINOSAUR', 'FOSSIL', 'BONE', 'CLAW', 'TEETH', 'SKULL', 'CARNIVORE', 'HERBIVORE', 'BIPEDAL', 'HORN', 'CREST', 'FRILL', 'PREDATOR', 'SAUROPOD'],
    facts: [
      "🍖 Allosaurus was a top predator, strong enough to take on Stegosaurus or even long-necked giants like Diplodocus.",
      "🛡️ Ankylosaurus had a powerful tail club — a living tank armed for defense.",
      "📏 Apatosaurus stretched up to 75 feet long — one of the biggest land animals to ever walk the Earth.",
      "🦒 Brachiosaurus stood tall, with front legs longer than the back — built like a dinosaur giraffe.",
      "🌀 Brontosaurus was once thought to be a mistake — until science gave it its name back in 2015.",
      "🐂 Carnotaurus, the 'meat-eating bull', had two strange horns and ran like a predator with a headpiece.",
      "🦐 Compsognathus was once the smallest known dinosaur — until even tinier fossils came to light.",
      "🐍 Diplodocus may have used its long tail like a whip — snapping at danger from behind.",
      "🦷 Iguanodon was named after an iguana’s tooth — the second dinosaur ever to get a name.",
      "🥊 Pachycephalosaurus had a dome-shaped skull built for battle — likely used in headbutting duels to prove who ruled the herd.",
      "🎺 Parasaurolophus had a long, curved crest with hollow tubes — a dinosaur trumpet built for sound.",
      "⛵ Spinosaurus had a sail on its back — maybe to soak up sun, maybe just to show off.",
      "🧠 Stegosaurus had a brain the size of a walnut — proof that size isn’t everything.",
      "🦏 Triceratops had three bold horns and a giant frill — its name literally means 'three-horned face.'",
      "🌍 Tyrannosaurus was the king of dinosaurs — towering, toothy, and unforgettable.",
      "⚡ Velociraptor was fast, fierce, and clever — a true 'swift plunderer' of the ancient world."
    ]
  },

  triassicDinosaurs: {
    words: ['TRIASSIC', 'ALWALKERIA', 'ASYLOSAURUS', 'CAMPOSAURUS', 'CHINDESAURUS', 'COELOPHYSIS', 'COLORADISAURUS', 'DAEMONOSAURUS', 'EOCURSOR', 'EORAPTOR', 'GOJIRASAURUS', 'HERRERASAURUS', 'LILIENSTERNUS', 'LYCORHINUS', 'MELANOROSAURUS', 'MUSSAURUS', 'PANTYDRACO', 'PISANOSAURUS', 'PLATEOSAURUS', 'RIOJASAURUS', 'SATURNALIA', 'STAURIKOSAURUS', 'THECODONTOSAURUS', 'DINOSAUR', 'FOSSIL', 'BONE', 'CLAW', 'TEETH', 'SKULL', 'CARNIVORE', 'HERBIVORE', 'OMNIVORE', 'BIPEDAL', 'HORN', 'CREST', 'FRILL', 'PREDATOR', 'SAUROPOD', 'THEROPOD', 'HUNTER'],
    facts: [
      "🌅 Dinosaurs first appeared in the Triassic — small, nimble, two-legged creatures stepping into a brand-new world.",
      "🐊 The fiercest hunters in the Triassic weren’t dinosaurs — they were crocodile-like beasts called pseudosuchians.",
      "🌿 Alwalkeria was a tiny, early dinosaur that likely ate both plants and small prey.",
      "🦴 Asylosaurus is known from just a few bones — a glimpse of an early sauropod in the making.",
      "👣 Camposaurus left behind only a few leg bones — but they tell us it ran on two swift feet.",
      "⚡ Coelophysis was quick and slender — one of the earliest dinosaurs we know in fossil form.",
      "📏 Coloradisaurus was a miniature version of the giants that would come later — small, but long-necked.",
      "👀 Daemonosaurus had big eyes, a stubby snout, and teeth that jutted forward — a true Triassic oddball.",
      "🌱 Eocursor was one of the first plant-eaters in the dinosaur lineage — small, swift, and sharp-eyed.",
      "⏳ Eoraptor lived at the dawn of the dinosaurs — one of the very first to walk the Earth.",
      "🦖 Gojirasaurus, named after Godzilla, was a towering predator for its time — fierce and fast.",
      "🧬 Herrerasaurus was one of the earliest theropods — a link between what was and what would be.",
      "🏃‍♂️ Liliensternus was built for speed — hunting smaller plant-eaters with agility and precision.",
      "🐺 Lycorhinus means 'wolf snout' — a misnamed mystery, once thought to be a mammal’s skull.",
      "🌳 Melanorosaurus was a long-necked herbivore, among the biggest of the Triassic plant-eaters.",
      "🐭 Despite its name meaning 'mouse lizard', Mussaurus grew into a lumbering ancestor of giants.",
      "🌀 Pantydraco’s name comes from a Welsh spring — not pants! — and means 'valley dragon'.",
      "🔄 Pisanosaurus had a jaw that chewed in ways dinosaurs wouldn’t use again for millions of years.",
      "🧩 Plateosaurus fossils are everywhere in Europe — with over 100 skeletons found so far!",
      "🧠 Riojasaurus’s first skeleton was missing a skull — it took decades to complete the picture.",
      "🍂 Saturnalia was one of the first herbivores to take over after earlier creatures vanished mysteriously.",
      "🧪 Some scientists think Staurikosaurus and Herrerasaurus may have been the same dino in disguise.",
      "🦷 Thecodontosaurus means 'socket-tooth lizard' — all because the first fossil was just a jawbone."
    ]
  },
  
  // FOOD
  
  fruits: {
      words: ["APPLE", "BANANA", "ORANGE", "KIWI", "MANGO", "GRAPE", "PEAR", "MELON", "CHERRY", "LEMON", "APRICOT", "AVOCADO", "BLACKBERRY", "BLUEBERRY", "BOYSENBERRY", "CITRON", "COCONUT", "CRANBERRY", "CURRANT", "DATE", "DRAGONFRUIT", "DURIAN", "ELDERBERRY", "FIG", "LIME", "GOOSEBERRY", "GRAPEFRUIT", "GUAVA", "JACKFRUIT", "PLUM", "KUMQUAT", "LYCHEE", "CANTALOUPE", "HONEYDEW", "WATERMELON", "NECTARINE", "CLEMENTINE", "TANGERINE", "PAPAYA", "PASSIONFRUIT", "PEACH", "PERSIMMON", "PINEAPPLE", "POMEGRANATE", "POMELO", "QUINCE", "RASPBERRY", "STRAWBERRY", "YUZU"],
      facts: [
        "🍌 Harvest Wordlings giggle that bananas are berries… but strawberries are just pretending!",
        "🍊 Oranges were once so rare in Europe, they were given like treasure during winter festivals.",
        "🍎 Apples are 25% air—no wonder they float in cider streams and orchard ponds.",
        "🥝 Kiwi was once called the ‘Chinese gooseberry’—but it got a cuter name in New Zealand!",
        "🍇 Grapes explode in the microwave… and the Wordlings kindly ask you not to test this.",
        "🌹 Cherries bloom with the roses and carry the same perfume in their spring breeze.",
        "🍐 Old pear trees have watched over generations—they can live for more than a hundred years!",
        "🍋 In the misty orchards of East Asia, yuzus glow like lemons, but their taste is a whisper of floral lime and morning breeze.",
        "🍓 Raspberries are made of many tiny pieces, each holding hands to form the whole — like a fruit that grew from a gathering.",
        "🍐 A quince is stubborn and sour until softened by time or fire — a fruit that must be earned, not taken.",
        "🍊 Pomelos are the gentle giants of the citrus grove, nearly ten inches wide and heavy with mellow sweetness.",
        "🌺 In Armenian stories, pomegranates hold seeds of life, luck, and love — one fruit, many blessings.",
        "🌸 Some plum trees cannot bloom alone. Without a nearby friend, their flowers go unanswered and bear no fruit.",
        "🍍 Pineapples got their name from explorers who saw pinecones and tasted paradise — and the name stuck like sunlight on skin.",
        "🍑 Take the fuzz off a peach and you’re left with a nectarine — just as sweet, just a little smoother.",
        "🌶️ The seeds of a papaya carry a peppery surprise, sharp enough to stand in for black peppercorns at any table.",
        "🍉 In parts of Japan, watermelons are grown in shapes: hearts for romance, squares for shelves — a fruit made whimsical.",
        "🍬 Lychee seeds must be left behind; though the fruit is soft and fragrant, the seed carries danger at its core.",
        "🌞 A guava holds five times the sunshine of an orange — bursting with brightness in every bite.",
        "⚠️ Grapefruits carry warnings. Their juice can twist the power of medicine, so potions and fruit must be chosen wisely.",
        "🌰 A fig’s flower lives inside the fruit — hidden, secret, only seen when the fig is opened like a little lantern.",
        "🚫 The durian’s smell is so strong that hotels and trains ask it to stay outside, no matter how sweet its heart may be.",
        "🌴 Date trees wear long feather-like fronds and stretch toward desert skies, dreaming of oasis winds.",
        "🐉 Dragonfruit earned its name from armor and scales — leathery skin and spikes like something from a myth.",
        "🥥 Coconuts are patient voyagers. They float across oceans for up to 110 days, looking for soft sand and new beginnings.",
        "🍒 Cranberries are called superfruits — not for flying, but for brimming with little strengths: vitamins, color, and courage."
      ]
  },

  // GEOLOGY
  
  gemstones: {
      words: ["AGATE", "ALEXANDRITE", "AMBER", "AMETHYST", "APATITE", "BERYL", "CHALCEDONY", "CITRINE", "CORUNDUM", "DIAMOND", "EMERALD", "GARNET", "ONYX", "OPAL", "PEARL", "PERIDOT", "QUARTZ", "ROSE QUARTZ", "RUBY", "SAPPHIRE", "TOPAZ", "TOURMALINE", "TURQUOISE", "ZIRCON"],
      facts: [
        "💎 Gemlings say only four stones are called truly precious: diamond, ruby, sapphire, and emerald.",
        "🌿 Amber isn't a stone at all—it's the ancient memory of trees, hardened into golden glass.",
        "🧡 Some say you can find tiny creatures or petals frozen in amber’s golden embrace.",
        "💜 Amethyst's violet glow comes from whispers of iron and sunlight trapped deep inside.",
        "🦷 Wordlings whisper that Apatite is what teeth dream of becoming.",
        "💠 Diamond is the hardest truth the earth can speak.",
        "🔷 Though diamonds begin pure, a single impurity can turn them blue, brown, or rainbow-touched.",
        "🔮 Garnets come in every color—but blue ones are so rare that even Gemlings blink twice.",
        "💚 A tsavorite garnet may not be 'precious,' but it shines with the price of royalty.",
        "💧 Opals are soft water trapped in stone—sometimes as much as a fifth of their weight!",
        "🌈 Opals don't follow crystal rules—they're pure rainbow chaos.",
        "🦪 Pearls are made by sea-mollusks when they turn irritation into treasure.",
        "🌿 Peridot is what olivine becomes when it gets dressed up for a ball.",
        "🍏 Peridot glows green thanks to iron hiding in its heart.",
        "🎨 Quartz wears many colors—when it's purple, we call it amethyst; when golden, citrine.",
        "🪨 Pure quartz is clear as truth—some call it rock crystal.",
        "🔥 Both ruby and sapphire are born from the same mineral, corundum—just dressed in different flames."
      ]
  },

    igneousRocks: {
    words: ["IGNEOUS", "MOLTEN", "INTRUSIVE", "CRYSTALLIZE", "EXTRUSIVE", "ERUPT", "AMORPHOUS", "BASALT", "DIORITE", "TRAP ROCK", "GABBRO", "GRANITE", "OBSIDIAN", "PERIDOTITE", "PUMICE", "RHYOLITE", "FIRE OPAL", "UNAKITE", "WELDED TUFF", "VOLCANO", "SCORIA", "PEGMATITE", "MAGMA", "DOLERITE", "DIABASE", "DACITE", "INTRUSION", "GLASS", "PLUTONIC", "HYPABYSSAL", "COUNTRY ROCK", "BATHOLITH", "STOCK", "LACCOLITH", "SILL", "DIKE", "PHANERITIC", "APHANITIC", "PORPHYRY"],
    facts: [
        "🌋 Igneous rocks are born from fire — they form when molten magma cools and stills into stone.",
        "🔮 Some igneous rocks form deep beneath the surface, cooling slowly to grow crystals large enough to hold in your hand.",
        "✨ Some igneous rocks erupt onto the land, cooling quickly in the open air and setting their stories in tiny crystal grains.",
        "🪞 When lava cools too fast to crystalize, it turns into volcanic glass — smooth, dark, and mirror-like.",
        "🚧 'Trap rock' is a builder’s name for dark igneous stones used to make roads and sturdy paths.",
        "🌍 About 15% of the Earth’s land is built from igneous stone — quiet reminders of once-molten origins.",
        "🔦 Some of these rocks hide riches: veins of tin, tungsten, and other treasured minerals.",
        "🧱 Most igneous rocks are born deep in the Earth as intrusions — hidden until the land rises or wears away.",
        "🗻 These intrusions press into the Earth’s crust, wrapped in older rock like secrets waiting to be uncovered.",
        "🏔️ The hearts of great mountain ranges are often made of ancient intrusive stone, weathered but enduring.",
        "🌑 When formed deep and long ago, they’re called plutonic — named for the god of the underworld.",
        "🖤 More than 90% of all volcanic rock is basalt — black and ancient, like cooled midnight.",
        "🪨 Some basalt cools into long, neat columns — like stone honeycombs in places like Giant’s Causeway.",
        "🔥 Magma rises through the Earth because it’s lighter than the rock around it — like a bubble seeking sky.",
        "🔍 In some fine-grained rocks, the crystals are so small they must be studied under a microscope to be known.",
        "🪵 The rock that surrounds an intrusion is called country rock — it keeps the heat in so magma cools slowly.",
        "📏 A vast intrusion is called a batholith if it’s enormous, or a stock if it’s merely large.",
        "🏔️ A laccolith forms a stone dome beneath the surface, fed by a narrow crack called a dike.",
        "📚 A sill slides in flat between layers of older stone — like a secret page tucked into a book.",
        "🌘 Hypabyssal rocks form near the surface, fine-grained and quick to settle into solidness.",
        "🔎 If the crystals are large enough to see without aid, the texture is called phaneritic. If not, it’s aphantic — hidden from plain sight.",
        "🪄 When large crystals appear in a finer background, the result is a porphyry — like gemstones in velvet.",
        "⚖️ Igneous rocks are named by their chemistry — how much silica they hold shapes their destiny.",
        "🪐 Basalt isn’t just found on Earth — it paves the plains of Venus and darkens the stones of Mars.",
        "🧱 Granite is strong, massive, and unyielding — perfect for walls, counters, and ancient monuments.",
        "🖤 Obsidian breaks into razor edges, sharp and beautiful — once used to make tools, blades, and quiet weapons.",
        "❄️ Snowflake obsidian forms when tiny white crystals of cristobalite bloom inside volcanic glass — frozen petals in midnight stone.",
        "🌬️ Pumice is made of bubbles — lava cooled so quickly it kept the air inside, making a rock that floats like a sponge of stone."
    ]
  },
  
  sedimentaryRocks: {
      words: ["SEDIMENTARY", "SEDIMENT", "CLASTIC", "CHEMICAL", "ORGANIC", "CALICHE", "PUDDINGSTONE", "CHALK", "LIMESTONE", "CHERT", "COAL", "CONGLOMERATE", "COQUINA", "FOSSIL", "DIATOMITE", "DOLOMITE", "FLINT", "ROCK SALT", "SANDSTONE", "SHALE", "SILTSTONE", "CEMENTATION", "DETRITUS", "STRATA", "BEDDING", "SEDIMENTOLOGY", "GRAVEL", "SAND", "MUD", "SILT", "CLAY", "BRECCIA", "MUDROCK", "EVAPORITE", "COMPACTION", "LITHIFICATION", "DIAGENESIS", "LAMINATION", "DUNE", "RIPPLE", "BIOTURBATION", "MATRIX"],
      facts: [
          "🌍 Sedimentary rocks are storytellers — made in three ways: from fragments, from minerals, or from once-living things.",
          "🪶 These rocks form slowly as layers of tiny pieces settle and are gently pressed into stone over time.",
          "🪺 Sediments can come from broken stone or living things left behind — bits of yesterday turned into tomorrow.",
          "🍃 Geological debris is born from weathered cliffs and crumbled mountains, carried by wind, water, or time.",
          "📚 Sedimentary rock covers most of the land we walk on, though it's only a thin crust atop the deeper Earth.",
          "📖 These rocks stack in layers called strata — soft pages in the ancient book of the world.",
          "🛸 Even Mars, dusty and distant, holds sedimentary rocks — proof that water once moved across its face.",
          "🌱 From coal to drinking water, sedimentary rocks are quiet holders of treasures we rely on every day.",
          "🧩 Clastic rocks are built from puzzle pieces of older stones, pressed and glued together by pressure and patience.",
          "🌾 Loose sediments are named by size — gravel clatters, sand sighs, and mud smooths into stillness.",
          "🐚 Many limestones are made from the bones of ocean life — coral, mollusks, and tiny drifting creatures.",
          "🌲 Coal is ancient vegetation, transformed by time and pressure into a rock that still remembers leaves and light.",
          "🔬 Chert forms from the skeletons of microscopic ocean folk — radiolaria and diatoms, hidden but enduring.",
          "🌀 Diagenesis is the slow magic of change beneath the surface — transformation without a single breath of air.",
          "🌊 Coquina is made entirely of broken shells, and can only be born where the waves never rest.",
          "🦴 Fossils are most often found in sedimentary stone — each one a memory cradled in ancient silt.",
          "⏳ A fossil’s best chance comes in places where sediment settles quickly and few bacteria sleep.",
          "🐾 Footprints, burrows, and other marks left behind are called trace fossils — echoes of movement and life.",
          "🌊 Ripple marks form where water flows — in rivers, on beaches, or in the quiet shifts of tidal flats."
      ]
  },
  
  metamorphicRocks: {
      words: ["METAMOPRHIC", "FOLIATION", "ANTHRACITE", "GNEISS", "HORNFELS", "LAPIS LAZULI", "MARBLE", "MARIPOSITE", "NOVACULITE", "PHYLLITE", "QUARTZITE", "SCHIST", "SKARN", "SLATE", "SOAPSTONE", "METAMORPHISM", "PROTOLITH", "INDEX MINERAL", "THERMAL", "CATACLASTIC", "HYDROTHERMAL", "IMPACT", "FISSILITY"],
      facts: [
          "🌀 Metamorphic rocks are born from change — when older stones are transformed by heat, pressure, and time into something entirely new.",
          "📜 The rock before the change is called a protolith — it might be volcanic, sedimentary, or already a stone shaped by change once before.",
          "🌍 Some rocks are changed deep within the Earth, others by the slow press of tectonic plates — all shaped in the hidden chambers beneath our feet.",
          "💎 Certain minerals, called index minerals, act like timekeepers — revealing how hot and how deep a rock’s transformation truly went.",
          "🔍 Metamorphic rocks often sparkle with larger crystals than they began with — time and pressure coaxed them to grow.",
          "📚 Many metamorphic stones wear stripes or layers called foliation — a record of stress folded into every line.",
          "🔲 We name these rocks by their texture and how clearly their layers show — some whisper their history, while others shout.",
          "🔥 When magma creeps too close, it can bake nearby stone — creating a rim of changed rock through contact metamorphism.",
          "⏳ Some of Earth’s oldest stones are metamorphic — like the Acasta Gneiss in Canada, which remembers the world over 4 billion years ago.",
          "🪵 Slate breaks in smooth, even sheets — a gift of structure that made it perfect for roofs, tiles, and chalkboard days.",
          "🎨 Marble begins as limestone or dolomite, but metamorphosis polishes it into sculpture-ready stone, luminous and strong.",
          "⚠️ Schist has pronounced lines of weakness — beautiful, yes, but tricky for those building upon it.",
          "🪓 Quartzite began as sandstone — but time’s pressure turned it so tough that early humans shaped tools from its unyielding surface.",
          "⚡ Slate, being a fine insulator, once guarded the earliest electric switchboards — keeping sparks at bay with quiet grace.",
          "🔥 Soapstone, soft and smooth, was carved by Native Americans into bowls, pipes, and ornaments thousands of years ago.",
          "⛏️ Soapstone was one of the first stones humans quarried — rising close to the surface, asking only to be shaped.",
          "🌟 In the Gold Rush days, prospectors learned to follow the glitter in mariposite — a green stone often veined with promise."
      ]
  },

  // MUSIC
  
  miku: {
    words: ["HATSUNE MIKU", "VOCALOID", "CRYPTON", "TWINTAILS", "VIRTUAL", "IDOL", "HOLOGRAM", "SINGER", "FIRST SOUND", "FUTURE", "SAKI FUJITA", "KEI GARO", "YAMAHA", "PHONIC", "VOICEBANK", "DANCE", "SPRING ONION", "LEEK", "PROJECT DIVA", "CHARACTER", "TURQUOISE", "ANDROID", "COMPUTER", "JAPANESE", "SYNTHESIZER", "RHYTHM"],
    facts: [
      "🎤 Idol Wordlings say Miku was the very first voice in a new digital songbook—CV-01, the start of it all.",
      "🌟 Sometimes, you can catch her performing live in light and holograms, like a dream on stage.",
      "🎙️ Her voice was woven from Saki Fujita’s, like sunlight filtered through a synthesizer.",
      "💫 'Hatsune Miku' means 'The First Sound of the Future'—a whisper from tomorrow itself.",
      "🎨 Wordlings say her turquoise glow was chosen before anything else—just the color, and a dream of music.",
      "🎹 Her shade of turquoise matches the tones of Yamaha’s magical music machines.",
      "🧤 The glowing sleeve on her arm? It holds echoes of synthesizer lights from long ago.",
      "🗣️ Miku doesn’t speak like us—she sings in syllables, phonics stitched into melody.",
      "📅 Pop Idol Wordlings celebrate her birthday on August 31st, when the songs began again.",
      "🤖 Miku was imagined as a future diva in a world where songs had vanished—but she brought them back.",
      "🌍 She was the first to bring her voice across oceans with Vocaloid 3’s English library.",
      "🎧 At first, she wasn’t meant for fans at all—just for pros. But the world had other plans.",
      "🧅 Thanks to one silly video, Miku’s now forever dancing with spring onions and leeks.",
      "🎮 Sega Wordlings built her a stage in rhythm—an entire world of beats called Project Diva."
    ]
  },
  
  mikusongs: {
    words: ["ABSOLUNOTE", "ACUTE", "AGEAGE AGAIN", "AIKOTOBA", "ALIEN ALIEN", "BLACK ROCK SHOOTER", "CANTARELLA", "CAT FOOD", "CATCH THE WAVE", "CENDRILLON", "DANCE OF MANY", "DEAR", "DECORATOR", "DEEP SEA GIRL", "DREAMING LEAF", "DENPARADIGM", "DRAMATURGY", "DOUBLEGANGER", "ELECTRIC ANGEL", "ENVY CAT WALK", "FINDER", "FROM Y TO Y", "GHOST RULE", "GIGANTIC GIRL", "GIZMO", "HAND IN HAND", "HIBIKASE", "HIBANA", "HIGH SCHOOL DAYS", "HOLY STAR", "INNOCENCE", "INTERVIEWER", "JITTERBUG", "KIMI NI", "KNIFE", "KNIGHT OF LIGHT", "LOVE IS WAR", "LUCID DREAMING", "MAGNET", "MARGINAL", "MASTER OF PUPPETS", "METEOR", "MIRACLE PAINT", "MOON", "MOUSOU SKETCH", "NEKOMIMI SWITCH", "PINK MOON", "PINKY SWEAR", "PO PI PO", "PROMISE", "PUZZLE", "ROLLING GIRL", "ROMEO AND CINDERELLA", "SAIHATE", "SAKURA NO AME", "SECRET POLICE", "SENBONZAKURA", "SOUND", "SLUMP", "STAR STORY", "STARDUSTER", "STARGAZER", "STEP FORWARD", "SUMMER IDOL", "SWEET DEVIL", "SYSTEMATIC LOVE", "TELL YOUR WORLD", "THE FIRST SOUND", "THE SECRET GARDEN", "THE WORLD IS MINE", "TIME LIMIT", "TIME MACHINE", "TORINOKOCITY", "TRICOLORE AIRLINE", "UNHAPPY REFRAIN", "VELVET ARABESQUE", "WEEKENDER GIRL", "WOLF GIRL", "YELLOW", "YUMEYUME"],
    facts: [
      "🎤 Idol Wordlings say Miku was the very first voice in a new digital songbook — CV-01, the start of it all.",
      "🌟 Sometimes, you can catch her performing live in light and holograms, like a dream on stage.",
      "🎙️ Her voice was woven from Saki Fujita’s, like sunlight filtered through a synthesizer.",
      "💫 'Hatsune Miku' means 'The First Sound of the Future' — a whisper from tomorrow itself.",
      "🎨 Wordlings say her turquoise glow was chosen before anything else — just the color, and a dream of music.",
      "🎹 Miku's shade of turquoise matches the tones of Yamaha’s magical music machines.",
      "🧤 The glowing sleeve on Miku's arm? It holds echoes of synthesizer lights from long ago.",
      "🗣️ Miku doesn’t speak like us—she sings in syllables, phonics stitched into melody.",
      "📅 Pop Idol Wordlings celebrate Miku's birthday on August 31st, when the songs began again.",
      "🤖 Miku was imagined as a future diva in a world where songs had vanished — but she brought them back.",
      "🌍 Miku was the first to bring her voice across oceans with Vocaloid 3’s English library.",
      "🎧 At first, she wasn’t meant for fans at all — just for pros. But the world had other plans.",
      "🧅 Thanks to one silly video, Miku’s now forever dancing with spring onions and leeks.",
      "🎮 Sega Wordlings built her a stage in rhythm — an entire world of beats called Project Diva."
    ]
  },

  // OTHER

  cozy: {
      words: ["TEA", "BLANKET", "FIREPLACE", "BOOK", "CANDLE", "WINDOW", "SOCKS", "COCOA", "QUILT", "SLIPPERS"],
      facts: [
        "🕯️ Hearthlings remember when candles were made from beeswax or fat—every flicker hard-earned.",
        "📖 Reading by firelight was once a winter treasure, saved for the longest nights.",
        "🧵 The oldest known quilt comes from 3400 BC—Hearthlings say it still dreams in patterns.",
        "👣 Slippers were invented in ancient China to make footsteps soft and silent indoors.",
        "🍵 In the 1800s, tea was so precious it came with a key—locked in its own tiny chest.",
        "🧦 Wool socks are naturally cozy *and* fight off foot-odor gremlins — Hearthling tested."
      ]
  },

}
