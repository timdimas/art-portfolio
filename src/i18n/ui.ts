export const locales = ["el", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "el";

const el = {
	meta: {
		title: "ΟΝΟΜΑ ΕΠΩΝΥΜΟ — 2D/3D Animator · Concept Artist · Sound Designer",
		description:
			"Πορτφόλιο 2D/3D καλλιτέχνη. Επιλεγμένα έργα, εκπαίδευση, εμπειρία και το κύριο project «Το Δέος της Ανθρωπότητας».",
	},
	toggle: {
		label: "EN",
		aria: "Αλλαγή γλώσσας σε English",
	},
	header: {
		name: "ΟΝΟΜΑ ΕΠΩΝΥΜΟ",
		navLabel: "Ενότητες",
		nav: {
			about: "Για μένα",
			work: "Έργα",
			featured: "Case Study",
			contact: "Επικοινωνία",
		},
	},
	hero: {
		identity: "ΟΝΟΜΑ ΕΠΩΝΥΜΟ",
		role: "2D/3D ANIMATOR · CONCEPT ARTIST · SOUND DESIGNER",
		metaRight: "ΣΕΛ. 01",
		posterAlt: "Κεντρική αφίσα — Το Δέος της Ανθρωπότητας",
		project: "ΤΟ ΔΕΟΣ ΤΗΣ ΑΝΘΡΩΠΟΤΗΤΑΣ",
		featured: "ΕΠΙΛΕΓΜΕΝΟ ΕΡΓΟ",
	},
	about: {
		eyebrow: "ΓΙΑ ΜΕΝΑ",
		title: "Ο δημιουργός",
		titleEm: "πίσω από",
		titleAfter: "τα καρέ",
		identity: "ΟΝΟΜΑ ΕΠΩΝΥΜΟ",
		posterAlt: "Αφίσα — Το Δέος της Ανθρωπότητας",
		posterCaption: "ΑΦΙΣΑ /",
		posterCaptionEm: "ΑΝΘΡΩΠΟΤΗΤΑΣ",
		availability: "ΔΙΑΘΕΣΙΜΟΤΗΤΑ: ΕΤΟΙΜΟΣ ΓΙΑ ΣΥΝΕΡΓΑΣΙΕΣ",
		bio1: "Είμαι ο {name} — καλλιτέχνης που εργάζεται στη διασταύρωση 2D και 3D animation, concept art και sound design. Δουλεύω κυρίως πάνω σε προσωπικά projects με κινηματογραφικό χαρακτήρα, όπως η ταινία μικρού μήκους «Το Δέος της Ανθρωπότητας».",
		bio2: "Αυτό το portfolio συγκεντρώνει επιλεγμένη δουλειά — το κύριο έργο μου και μικρότερα projects. Πρόσθεσε εδώ μια πραγματική βιογραφία και τι σε ενδιαφέρει.",
		toolsHeading: "ΕΡΓΑΛΕΙΑ / TOOLS",
		educationHeading: "ΕΚΠΑΙΔΕΥΣΗ / EDUCATION",
		education: [
			{
				year: "20XX",
				title: "Σχολή / Τμήμα",
				org: "Πανεπιστήμιο ή σχολή",
				note: "Τίτλος σπουδών — πρόσθεσε τα πραγματικά στοιχεία.",
			},
			{
				year: "20XX",
				title: "Σεμινάριο / Εργαστήριο",
				org: "Φορέας",
				note: "Εξειδίκευση σε animation ή concept art.",
			},
		],
		experienceHeading: "ΕΜΠΕΙΡΙΑ / EXPERIENCE",
		experience: [
			{
				year: "20XX—",
				title: "Freelance 2D/3D Artist",
				org: "Ανεξάρτητη εργασία",
				note: "Animation, concept art, sound design.",
			},
			{
				year: "20XX",
				title: "Role / Project",
				org: "Ομάδα ή πελάτης",
				note: "Περιγραφή ρόλου και ευθυνών.",
			},
			{
				year: "20XX",
				title: "Το Δέος της Ανθρωπότητας",
				org: "Προσωπικό έργο",
				note: "Concept, animation, σκηνοθεσία, sound design — ταινία μικρού μήκους 2D/3D.",
			},
		],
	},
	work: {
		eyebrow: "ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ",
		title: "Η δουλειά",
		titleEm: "που με εκπροσωπεί",
		titleAfter: "",
		intro: "Το κύριο έργο μου προβάλλεται πρώτο. Τα υπόλοιπα projects προστίθενται καθώς ολοκληρώνονται.",
		featured: {
			title: "Το Δέος της Ανθρωπότητας",
			en: "THE AWE OF HUMANITY",
			year: "2026",
			tags: "2D/3D HYBRID · ANIMATED SHORT · CONCEPT · SOUND",
			blurb: "Σε ένα μεσαιωνικό βασίλειο κάτω από τη σκιά της σκοτεινής μαγείας, ένας επαναστάτης αντιμετωπίζει τον τύραννο — τον άλλοτε παιδικό του φίλο.",
		},
		others: [
			{
				title: "Project 02",
				year: "20XX",
				note: "Πρόσθεσε το επόμενο έργο σου — εικόνα, τίτλο και μία γραμμή.",
			},
			{
				title: "Project 03",
				year: "20XX",
				note: "Πρόσθεσε το επόμενο έργο σου — εικόνα, τίτλο και μία γραμμή.",
			},
			{
				title: "Project 04",
				year: "20XX",
				note: "Πρόσθεσε το επόμενο έργο σου — εικόνα, τίτλο και μία γραμμή.",
			},
		],
		cta: "ΔΕΣ ΤΟ ΕΡΓΟ",
	},
	featured: {
		eyebrow: "CASE STUDY",
		title: "Το Δέος",
		titleEm: "της Ανθρωπότητας",
		titleAfter: "",
		subtitle: "THE AWE OF HUMANITY — 2026 — 2D/3D HYBRID ANIMATED SHORT",
		aside: [
			"Κάτω από αυτή τη γραμμή:",
			"Ο τρόπος που κινείται · η ιστορία · το όραμα",
			"Το pipeline · τα νούμερα · τα στιγμιότυπα",
		],
	},
	frames: {
		eyebrow: "ΤΟ ΡΙΛ / ΚΑΡΕ ΚΑΡΕ",
		title: "Δες το να κινείται,",
		titleEm: "καρέ καρέ",
		titleAfter: "",
		intro: "Πραγματικά καρέ από το τελικό cut. Προχώρα με τα βέλη ή το πληκτρολόγιο — κάθε καρέ κουβαλά τον χρόνο του μέσα από το ίδιο το φιλμ.",
		counter: "{count} ΚΑΡΕ / ΒΕΛΗ ← → Ή ΚΛΙΚ",
		frameAlt: "Καρέ {index} στο {timecode}",
		prevAria: "Προηγούμενο καρέ",
		nextAria: "Επόμενο καρέ",
		thumbAria: "Πήγαινε στο καρέ {index} στο {timecode}",
		footnote: "Καρέ από το τελικό cut. GIF και βίντεο μπορούν να προστεθούν εδώ αργότερα.",
	},
	story: {
		eyebrow: "Η ΙΣΤΟΡΙΑ / ΠΙΣΩ ΑΠΟ ΤΟ ΦΙΛΜ",
		title: "Η φιλία, η εξιλέωση και",
		titleEm: "η ανθρώπινη φύση",
		titleAfter: "",
		intro: "Το Δέος της Ανθρωπότητας χρησιμοποιεί τη σκοτεινή φαντασία ως καμβά για να εξερευνήσει σύγχρονους προβληματισμούς — τη βία του πολέμου και την εσωτερική σύγκρουση ανάμεσα στον προσωπικό δεσμό και το καθήκον.",
		facts: [
			{ label: "FORMAT", value: "Ταινία μικρού μήκους · 2D/3D Hybrid" },
			{ label: "ΕΙΔΟΣ", value: "Dark Fantasy" },
			{ label: "ΡΟΛΟΣ", value: "Concept · Animation · Σκηνοθεσία · Sound" },
			{ label: "ΕΤΟΣ", value: "2025" },
		],
		beats: [
			{
				id: "01",
				title: "BERNEBURG",
				text: "Ένα μεσαιωνικό βασίλειο υποδουλωμένο στη σκοτεινή μαγεία. Ο λαός ζει υπό την τυραννία του Kembrak, ενός ηγεμόνα που κυβερνά μέσω του φόβου.",
			},
			{
				id: "02",
				title: "UTIO",
				text: "Ο πρώην παιδικός φίλος του Kembrak και επιζών μιας αιματηρής εξέγερσης. Τραυματισμένος, αποτελεί την τελευταία ελπίδα του λαού.",
			},
			{
				id: "03",
				title: "Η ΣΥΝΑΝΤΗΣΗ",
				text: "Ο επαναστάτης καλείται να αντιμετωπίσει τον τύραννο — τον άλλοτε παιδικό του φίλο. Η πάλη ανάμεσα στον προσωπικό δεσμό και το καθήκον.",
			},
		],
		quote: "«Ένας άνθρωπος γίνεται τέρας όταν ο φόβος γίνεται εξουσία.»",
		cite: "KEMBRAK — ΑΠΟ ΤΟ ΦΙΛΜ",
	},
	vision: {
		eyebrow: "ΣΚΗΝΟΘΕΤΙΚΟ ΟΡΑΜΑ / ΑΝΑΦΟΡΕΣ",
		title: "Κινηματογραφικός",
		titleEm: "μινιμαλισμός",
		titleAfter: "& slow cinema",
		intro: "Η σκηνοθετική προσέγγιση αντλεί από τρεις κόσμους — για να φτιάξει κάτι δικό της.",
		influences: [
			{
				id: "01",
				name: "",
				title: "Αφηγηματική λιτότητα",
				text: "Καθυστέρηση της πληροφορίας για να μεγαλώσει η αγωνία. Η φύση δεν είναι απλό σκηνικό — είναι αυτόνομος χαρακτήρας που παρατηρεί και ορίζει τη δράση.",
			},
			{
				id: "02",
				name: "",
				title: "Γεωμετρία & φως",
				text: "Γεωμετρικά, στατικά πλάνα και φυσικός φωτισμός. Τονίζουν την ψυχολογική απομόνωση των χαρακτήρων μέσα στον χώρο.",
			},
			{
				id: "03",
				name: "",
				title: "Η μνήμη ασπρόμαυρη",
				text: "Εικαστική μετάβαση σε στιλιζαρισμένο ασπρόμαυρο στα flashbacks — καταγράφοντας την υποκειμενική και τραυματική φύση της ανάμνησης.",
			},
		],
		studies: [
			{ label: "MOTION STUDY 01", note: "Κίνηση & χρόνος" },
			{ label: "MOTION STUDY 02", note: "Φως & σιλουέτα" },
			{ label: "MOTION STUDY 03", note: "Καρέ και ρυθμός" },
		],
	},
	pipeline: {
		eyebrow: "ΤΕΧΝΙΚΗ ΕΚΤΕΛΕΣΗ / PIPELINE",
		title: "Μία",
		titleEm: "έρευνα",
		titleAfter: "πάνω στη σύζευξη 2D & 3D",
		intro: "Το έργο είναι τεχνική έρευνα πάνω στο πώς η δισδιάστατη και η τρισδιάστατη ψηφιακή τέχνη μπορούν να γίνουν ένα ομοιογενές οπτικό αποτέλεσμα.",
		stages: [
			{
				id: "01",
				label: "2D CHARACTER ANIMATION",
				tool: "Clip Studio Paint",
				text: "Σχεδιασμός με βάση την ιαπωνική τεχνοτροπία. Εκφραστικότητα, ανατομία και χορογραφία μάχης μέσα από μελέτη live-action υλικού.",
			},
			{
				id: "02",
				label: "3D ENVIRONMENTS & HYBRID",
				tool: "Βάθος · Κάμερα · Φως",
				text: "3D αντικείμενα και περιβάλλοντα για βάθος, δυναμικές κινήσεις κάμερας και ρεαλιστικό φωτισμό — ενοποιημένα με το 2D σε ομοιογενές αποτέλεσμα.",
			},
			{
				id: "03",
				label: "SOUND DESIGN",
				tool: "Φλογέρα · Φυσικός ήχος",
				text: "Σύνθεση φυσικών ηχογραφήσεων. Απουσία μουσικής στις σκηνές εσωτερικότητας για να ενισχύσει την ατμόσφαιρα — παραδοσιακή φλογέρα ηχογραφημένη επί τόπου.",
			},
			{
				id: "04",
				label: "POST · EDIT · COMPOSITING",
				tool: "DaVinci Resolve",
				text: "Edit, compositing και color σταθεροποίηση. Το τελικό cut που φέρνει μαζί χιλιάδες καρέ και στρώματα σε μία συνεχή αφήγηση.",
			},
		],
		footnote: "BERNEBURG — Η ΠΟΛΗ ΩΣ ΣΚΗΝΙΚΟ",
		bgAlt: "Το βασίλειο του Berneburg — 3D environment",
	},
	characters: {
		eyebrow: "ΣΧΕΔΙΑΣΜΟΣ ΧΑΡΑΚΤΗΡΩΝ / CHARACTER DESIGN",
		title: "Δύο φίλοι,",
		titleEm: "δύο κόσμοι",
		titleAfter: "",
		intro: "Ο επαναστάτης και ο τύραννος — σχεδιασμένοι ο ένας για τον άλλον. Τα φύλλα χαρακτήρων πάνω στο light table, και η μάχη τους σε κίνηση.",
		badge: "ΦΥΛΛΟ ΧΑΡΑΚΤΗΡΑ",
		duel: [
			{
				name: "UTIO",
				role: "Ο ΕΠΑΝΑΣΤΑΤΗΣ",
				text: "Επιζών μιας αιματηρής εξέγερσης. Τραυματισμένος, φέρνει την τελευταία ελπίδα του λαού — και το βάρος μιας παλιάς φιλίας.",
			},
			{
				name: "KEMBRAK",
				role: "Ο ΤΥΡΑΝΝΟΣ",
				text: "Ο ηγεμόνας του Berneburg που κυβερνά μέσω του φόβου. Ο άλλοτε παιδικός φίλος του Utio — το τέρας που έγινε από άνθρωπο.",
			},
		],
		fightHeading: "Η ΜΑΧΗ / THE FIGHT",
		fightCount: "4 ΚΑΡΕ ΣΕ ΚΙΝΗΣΗ",
		fight: [
			{ label: "SEQ 01 / Η ΑΡΧΗ" },
			{ label: "SEQ 02 / Η ΕΠΙΘΕΣΗ" },
			{ label: "SEQ 03 / Η ΑΝΤΑΛΛΑΓΗ" },
			{ label: "SEQ 04 / ΤΟ ΤΕΛΟΣ" },
		],
	},
	metrics: {
		title: "Το έργο",
		titleEm: "σε αριθμούς",
		titleAfter: "",
		intro: "Τα πραγματικά μεγέθη της παραγωγής — τι χρειάστηκε για να ζωντανέψει ο κόσμος του Berneburg.",
		stats: [
			{ value: "4.000+", label: "Χειροποίητα καρέ & στρώματα χρώματος" },
			{ value: "25", label: "3D περιβάλλοντα" },
			{ value: "70", label: "2D φόντα" },
			{ value: "30", label: "Υβριδικά (2D/3D) φόντα" },
			{ value: "70+", label: "Custom 2D & 3D props" },
		],
	},
	gallery: {
		eyebrow: "ΣΤΙΓΜΙΟΤΥΠΑ / ΕΠΙΛΕΓΜΕΝΑ ΚΑΡΕ",
		title: "Η δουλειά,",
		titleEm: "σκορπισμένη",
		titleAfter: "στο τραπέζι",
		intro: "Καρέ από το τελικό cut, τοποθετημένα σαν εκτυπώσεις πάνω στο light table — με τον χρόνο τους γραμμένο στο περιθώριο.",
		alt: "Στιγμιότυπο στο {timecode}",
	},
	video: {
		eyebrow: "ΒΙΝΤΕΟ / WATCH",
		title: "Δες το να",
		titleEm: "κινείται",
		titleAfter: "",
		intro: "Το trailer και το πλήρες φιλμ. Κάθε καρέ που είδες πιο πάνω — εδώ έχει ήχο, ρυθμό και χρόνο.",
		filmTitle: "ΤΟ ΔΕΟΣ ΤΗΣ ΑΝΘΡΩΠΟΤΗΤΑΣ",
		fullFilmCaption: "ΠΛΗΡΕΣ ΦΙΛΜ",
		opensOn: "ΑΝΟΙΓΕΙ ΣΤΟ YOUTUBE →",
		posterAlt: "Το Δέος της Ανθρωπότητας — πλήρες φιλμ στο YouTube",
	},
	footer: {
		endLabel: "ΤΕΛΟΣ ΤΟΥ ΡΙΛ",
		creatorHeading: "Ο ΔΗΜΙΟΥΡΓΟΣ",
		name: "ΟΝΟΜΑ",
		nameEm: "ΕΠΩΝΥΜΟ",
		contactHeading: "ΕΠΙΚΟΙΝΩΝΙΑ",
		creditsText:
			"Γραμμένο, ζωγραφισμένο και μονταρισμένο από τον δημιουργό. Τα καρέ παρουσιάζονται στη σειρά του και με τον πραγματικό τους χρόνο από το τελικό cut.",
		copyright: "© 2026 — ΤΟ ΔΕΟΣ ΤΗΣ ΑΝΘΡΩΠΟΤΗΤΑΣ / THE AWE OF HUMANITY",
	},
};

export type UI = typeof el;

const en: UI = {
	meta: {
		title: "NAME SURNAME — 2D/3D Animator · Concept Artist · Sound Designer",
		description:
			"Portfolio of a 2D/3D artist. Selected works, education, experience and the main project “The Awe of Humanity”.",
	},
	toggle: {
		label: "ΕΛ",
		aria: "Switch language to Greek",
	},
	header: {
		name: "NAME SURNAME",
		navLabel: "Sections",
		nav: {
			about: "About",
			work: "Work",
			featured: "Case Study",
			contact: "Contact",
		},
	},
	hero: {
		identity: "NAME SURNAME",
		role: "2D/3D ANIMATOR · CONCEPT ARTIST · SOUND DESIGNER",
		metaRight: "PAGE 01",
		posterAlt: "Main poster — The Awe of Humanity",
		project: "THE AWE OF HUMANITY",
		featured: "FEATURED WORK",
	},
	about: {
		eyebrow: "PAGE 02 / ABOUT",
		title: "The creator",
		titleEm: "behind",
		titleAfter: "the frames",
		identity: "NAME SURNAME",
		posterAlt: "Poster — The Awe of Humanity",
		posterCaption: "POSTER /",
		posterCaptionEm: "OF HUMANITY",
		availability: "AVAILABILITY: OPEN FOR COLLABORATIONS",
		bio1: "I am {name} — an artist working at the intersection of 2D and 3D animation, concept art and sound design. I mainly work on personal projects with a cinematic character, such as the short film “The Awe of Humanity”.",
		bio2: "This portfolio gathers selected work — my main project and smaller ones. Add a real bio and your interests here.",
		toolsHeading: "TOOLS",
		educationHeading: "EDUCATION",
		education: [
			{
				year: "20XX",
				title: "School / Department",
				org: "University or school",
				note: "Degree — add the real details.",
			},
			{
				year: "20XX",
				title: "Seminar / Workshop",
				org: "Institution",
				note: "Specialization in animation or concept art.",
			},
		],
		experienceHeading: "EXPERIENCE",
		experience: [
			{
				year: "20XX—",
				title: "Freelance 2D/3D Artist",
				org: "Independent work",
				note: "Animation, concept art, sound design.",
			},
			{
				year: "20XX",
				title: "Role / Project",
				org: "Team or client",
				note: "Description of role and responsibilities.",
			},
			{
				year: "20XX",
				title: "The Awe of Humanity",
				org: "Personal project",
				note: "Concept, animation, direction, sound design — 2D/3D short film.",
			},
		],
	},
	work: {
		eyebrow: "PAGE 03 / SELECTED WORKS",
		title: "The work",
		titleEm: "that represents me",
		titleAfter: "",
		intro: "My main project is shown first. The remaining projects are added as they are completed.",
		featured: {
			title: "The Awe of Humanity",
			en: "THE AWE OF HUMANITY",
			year: "2026",
			tags: "2D/3D HYBRID · ANIMATED SHORT · CONCEPT · SOUND",
			blurb: "In a medieval kingdom under the shadow of dark magic, a rebel confronts the tyrant — his former childhood friend.",
		},
		others: [
			{
				title: "Project 02",
				year: "20XX",
				note: "Add your next work — image, title and one line.",
			},
			{
				title: "Project 03",
				year: "20XX",
				note: "Add your next work — image, title and one line.",
			},
			{
				title: "Project 04",
				year: "20XX",
				note: "Add your next work — image, title and one line.",
			},
		],
		cta: "VIEW THE WORK",
	},
	featured: {
		eyebrow: "CASE STUDY / PAGE 04",
		title: "The Awe",
		titleEm: "of Humanity",
		titleAfter: "",
		subtitle: "THE AWE OF HUMANITY — 2026 — 2D/3D HYBRID ANIMATED SHORT",
		aside: [
			"Below this line:",
			"How it moves · the story · the vision",
			"The pipeline · the numbers · the stills",
		],
	},
	frames: {
		eyebrow: "THE REEL / FRAME BY FRAME",
		title: "See it move,",
		titleEm: "frame by frame",
		titleAfter: "",
		intro: "Real frames from the final cut. Move with the arrows or the keyboard — every frame carries its time within the film itself.",
		counter: "{count} FRAMES / ARROWS ← → OR CLICK",
		frameAlt: "Frame {index} at {timecode}",
		prevAria: "Previous frame",
		nextAria: "Next frame",
		thumbAria: "Go to frame {index} at {timecode}",
		footnote: "Frames from the final cut. GIFs and video can be added here later.",
	},
	story: {
		eyebrow: "THE STORY / BEHIND THE FILM",
		title: "Friendship, redemption and",
		titleEm: "human nature",
		titleAfter: "",
		intro: "The Awe of Humanity uses dark fantasy as a canvas to explore modern concerns — the violence of war and the inner conflict between personal bonds and duty.",
		facts: [
			{ label: "FORMAT", value: "Short film · 2D/3D Hybrid" },
			{ label: "GENRE", value: "Dark Fantasy" },
			{ label: "ROLE", value: "Concept · Animation · Direction · Sound" },
			{ label: "YEAR", value: "2025" },
		],
		beats: [
			{
				id: "01",
				title: "BERNEBURG",
				text: "A medieval kingdom enslaved to dark magic. The people live under the tyranny of Kembrak, a ruler who governs through fear.",
			},
			{
				id: "02",
				title: "UTIO",
				text: "Kembrak’s former childhood friend and a survivor of a bloody uprising. Wounded, he is the people’s last hope.",
			},
			{
				id: "03",
				title: "THE MEETING",
				text: "The rebel is called to face the tyrant — his former childhood friend. The struggle between the personal bond and duty.",
			},
		],
		quote: "“A man becomes a monster when fear becomes power.”",
		cite: "KEMBRAK — FROM THE FILM",
	},
	vision: {
		eyebrow: "DIRECTORIAL VISION / REFERENCES",
		title: "Cinematic",
		titleEm: "minimalism",
		titleAfter: "& slow cinema",
		intro: "The directorial approach draws from three worlds — to create something of its own.",
		influences: [
			{
				id: "01",
				name: "",
				title: "Narrative austerity",
				text: "Delaying information to let the suspense grow. Nature is not a simple backdrop — it is an autonomous character that observes and defines the action.",
			},
			{
				id: "02",
				name: "",
				title: "Geometry & light",
				text: "Geometric, static shots and natural lighting. They emphasize the psychological isolation of the characters within the space.",
			},
			{
				id: "03",
				name: "",
				title: "Memory in black and white",
				text: "A visual transition to stylized black and white in the flashbacks — recording the subjective and traumatic nature of memory.",
			},
		],
		studies: [
			{ label: "MOTION STUDY 01", note: "Motion & time" },
			{ label: "MOTION STUDY 02", note: "Light & silhouette" },
			{ label: "MOTION STUDY 03", note: "Frames and rhythm" },
		],
	},
	pipeline: {
		eyebrow: "TECHNICAL EXECUTION / PIPELINE",
		title: "A",
		titleEm: "research",
		titleAfter: "on the union of 2D & 3D",
		intro: "The project is a technical research on how two-dimensional and three-dimensional digital art can become one homogeneous visual result.",
		stages: [
			{
				id: "01",
				label: "2D CHARACTER ANIMATION",
				tool: "Clip Studio Paint",
				text: "Drawing based on the Japanese style. Expressiveness, anatomy and fight choreography through the study of live-action footage.",
			},
			{
				id: "02",
				label: "3D ENVIRONMENTS & HYBRID",
				tool: "Depth · Camera · Light",
				text: "3D objects and environments for depth, dynamic camera moves and realistic lighting — unified with the 2D into a homogeneous result.",
			},
			{
				id: "03",
				label: "SOUND DESIGN",
				tool: "Flogera · Natural sound",
				text: "Composition of natural recordings. No music in the introspective scenes to enhance the atmosphere — a traditional flogera recorded on location.",
			},
			{
				id: "04",
				label: "POST · EDIT · COMPOSITING",
				tool: "DaVinci Resolve",
				text: "Edit, compositing and color stabilization. The final cut brings together thousands of frames and layers into one continuous narrative.",
			},
		],
		footnote: "BERNEBURG — THE CITY AS A SET",
		bgAlt: "The kingdom of Berneburg — 3D environment",
	},
	characters: {
		eyebrow: "CHARACTER DESIGN",
		title: "Two friends,",
		titleEm: "two worlds",
		titleAfter: "",
		intro: "The rebel and the tyrant — designed for each other. The character sheets on the light table, and their battle in motion.",
		badge: "CHARACTER SHEET",
		duel: [
			{
				name: "UTIO",
				role: "THE REBEL",
				text: "A survivor of a bloody uprising. Wounded, he carries the people’s last hope — and the weight of an old friendship.",
			},
			{
				name: "KEMBRAK",
				role: "THE TYRANT",
				text: "The ruler of Berneburg who governs through fear. Utio’s former childhood friend — the monster a man became.",
			},
		],
		fightHeading: "THE FIGHT",
		fightCount: "4 FRAMES IN MOTION",
		fight: [
			{ label: "SEQ 01 / THE BEGINNING" },
			{ label: "SEQ 02 / THE ATTACK" },
			{ label: "SEQ 03 / THE EXCHANGE" },
			{ label: "SEQ 04 / THE END" },
		],
	},
	metrics: {
		title: "The project",
		titleEm: "in numbers",
		titleAfter: "",
		intro: "The real scale of the production — what it took to bring the world of Berneburg to life.",
		stats: [
			{ value: "4.000+", label: "Handmade frames & color layers" },
			{ value: "25", label: "3D environments" },
			{ value: "70", label: "2D backgrounds" },
			{ value: "30", label: "Hybrid (2D/3D) backgrounds" },
			{ value: "70+", label: "Custom 2D & 3D props" },
		],
	},
	gallery: {
		eyebrow: "STILLS / SELECTED FRAMES",
		title: "The work,",
		titleEm: "scattered",
		titleAfter: "on the table",
		intro: "Frames from the final cut, placed like prints on the light table — with their time written in the margin.",
		alt: "Still at {timecode}",
	},
	video: {
		eyebrow: "VIDEO / WATCH",
		title: "See it",
		titleEm: "move",
		titleAfter: "",
		intro: "The trailer and the full film. Every frame you saw above — here with sound, rhythm and time.",
		filmTitle: "THE AWE OF HUMANITY",
		fullFilmCaption: "FULL FILM",
		opensOn: "OPENS ON YOUTUBE →",
		posterAlt: "The Awe of Humanity — full film on YouTube",
	},
	footer: {
		endLabel: "END OF THE REEL",
		creatorHeading: "THE CREATOR",
		name: "NAME",
		nameEm: "SURNAME",
		contactHeading: "CONTACT",
		creditsText:
			"Written, painted and edited by the creator. The frames are presented in order and with their real time from the final cut.",
		copyright: "© 2026 — ΤΟ ΔΕΟΣ ΤΗΣ ΑΝΘΡΩΠΟΤΗΤΑΣ / THE AWE OF HUMANITY",
	},
};

export const ui: Record<Locale, UI> = { el, en };

export function getT(locale: Locale): UI {
	return ui[locale] ?? ui[defaultLocale];
}

export function format(template: string, vars: Record<string, string | number> = {}): string {
	return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
}
