<!DOCTYPE html>

<html class="dark" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fernando HOUSSOU - Formation IA Professionnelle</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary": "#442b00",
                        "on-primary-fixed": "#001f28",
                        "tertiary-fixed": "#ffddb1",
                        "on-surface-variant": "#bbc9cf",
                        "primary-fixed": "#b7eaff",
                        "inverse-on-surface": "#2b3134",
                        "inverse-primary": "#00677f",
                        "on-tertiary-fixed-variant": "#624000",
                        "on-surface": "#dde3e7",
                        "on-background": "#dde3e7",
                        "tertiary-container": "#feb127",
                        "on-secondary-fixed-variant": "#7200a3",
                        "surface-container-low": "#161d1f",
                        "surface-tint": "#4cd6ff",
                        "on-secondary-fixed": "#310049",
                        "on-error": "#690005",
                        "inverse-surface": "#dde3e7",
                        "error-container": "#93000a",
                        "surface-container-lowest": "#090f12",
                        "primary": "#a4e6ff",
                        "on-tertiary-container": "#6b4700",
                        "surface-container-highest": "#2f3639",
                        "on-secondary-container": "#f5d6ff",
                        "outline-variant": "#3c494e",
                        "secondary-container": "#9d03de",
                        "on-primary-container": "#00566a",
                        "surface-container": "#1a2123",
                        "background": "#0e1417",
                        "on-error-container": "#ffdad6",
                        "on-tertiary-fixed": "#291800",
                        "secondary": "#e8b3ff",
                        "surface-container-high": "#242b2e",
                        "surface-bright": "#333a3d",
                        "primary-container": "#00d1ff",
                        "tertiary-fixed-dim": "#ffba49",
                        "on-secondary": "#500074",
                        "surface-dim": "#0e1417",
                        "outline": "#859399",
                        "error": "#ffb4ab",
                        "secondary-fixed": "#f6d9ff",
                        "on-primary": "#003543",
                        "on-primary-fixed-variant": "#004e60",
                        "surface-variant": "#2f3639",
                        "surface": "#0e1417",
                        "primary-fixed-dim": "#4cd6ff",
                        "tertiary": "#ffd59c",
                        "secondary-fixed-dim": "#e8b3ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "24px",
                        "stack-md": "16px",
                        "section-gap": "120px",
                        "margin-mobile": "16px",
                        "container-max": "1280px",
                        "stack-sm": "8px",
                        "stack-lg": "32px"
                    },
                    "fontFamily": {
                        "display-lg": ["Plus Jakarta Sans"],
                        "label-caps": ["Plus Jakarta Sans"],
                        "body-lg": ["Plus Jakarta Sans"],
                        "headline-md": ["Plus Jakarta Sans"],
                        "body-md": ["Plus Jakarta Sans"]
                    },
                    "fontSize": {
                        "display-lg-mobile": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.01em", "fontWeight": "800" }],
                        "display-lg": ["64px", { "lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
                        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #05070A;
            color: #dde3e7;
            overflow-x: hidden;
        }

        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-panel:hover {
            border-color: rgba(0, 209, 255, 0.3);
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-4px);
        }

        .primary-glow {
            box-shadow: 0 0 20px rgba(0, 209, 255, 0.4);
        }

        .text-gradient {
            background: linear-gradient(135deg, #a4e6ff 0%, #e8b3ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nebula-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(circle at 20% 30%, rgba(0, 209, 255, 0.05) 0%, transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(157, 3, 222, 0.05) 0%, transparent 40%);
        }

        .btn-hover-effect:active {
            transform: scale(0.96);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .instructor-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
        }
    </style>

</head>
<body class="font-body-md text-body-md">
<div class="nebula-bg"></div>
<!-- Navigation Shell -->
<nav class="sticky top-0 w-full z-50 bg-surface/30 backdrop-blur-md dark:bg-surface/30 border-b border-white/10 shadow-sm">
<div class="max-w-container-max mx-auto flex justify-between items-center px-gutter py-4">
<div class="font-display-lg text-body-lg font-extrabold text-on-surface dark:text-on-surface">Fernando HOUSSOU</div>
<div class="hidden md:flex items-center gap-stack-lg">
<a class="text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">À Propos</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">CV</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">Projets</a>
<a class="text-on-surface-variant hover:text-on-surface transition-colors duration-200" href="#">Contact</a>
<button class="ml-4 px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-bold btn-hover-effect primary-glow transition-all">S'inscrire</button>
</div>
<div class="flex items-center gap-stack-md">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">language</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">light_mode</span>
<button class="md:hidden flex items-center p-2 text-on-surface">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</nav>
<main>
<!-- Hero Section -->
<section class="relative pt-24 pb-section-gap px-gutter overflow-hidden">
<div class="absolute inset-0 z-0 opacity-40">

</div>
<div class="max-w-[1000px] mx-auto text-center relative z-10">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-fixed-dim font-label-caps mb-stack-lg animate-pulse">
<span class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(76,214,255,1)]"></span>
                    WEBINAIRE GRATUIT EN DIRECT
                </div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-lg leading-tight">
                    Dominez l'<span class="text-gradient">Intelligence Artificielle</span> dans votre domaine
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
                    Apprends à intégrer l'IA dans ton métier et à gagner du temps, améliorer ta productivité et développer de nouvelles opportunités professionnelles.
                </p>
<div class="flex flex-wrap justify-center gap-stack-md mb-12">
<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant">
<span class="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
<span class="text-on-surface font-bold">Chaque samedi</span>
</div>
<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant">
<span class="material-symbols-outlined text-primary text-[20px]">schedule</span>
<span class="text-on-surface font-bold">19h00 (Heure du Bénin)</span>
</div>
<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant">
<span class="material-symbols-outlined text-primary text-[20px]">video_call</span>
<span class="text-on-surface font-bold">En ligne sur Google Meet</span>
</div>
</div>
<div class="flex flex-col sm:flex-row items-center justify-center gap-stack-md">
<button class="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-white font-bold text-lg primary-glow btn-hover-effect transition-all flex items-center justify-center gap-2">
                        S'inscrire gratuitement
                        <span class="material-symbols-outlined">trending_flat</span>
</button>
<button class="w-full sm:w-auto px-10 py-4 rounded-xl border border-outline-variant hover:bg-white/5 text-on-surface font-bold text-lg btn-hover-effect transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined">groups</span>
                        Rejoindre le groupe WhatsApp
                    </button>
</div>
</div>
<!-- Dashboard Preview -->
<div class="mt-20 max-w-container-max mx-auto">
<div class="glass-panel p-2 rounded-[2rem] shadow-2xl relative overflow-hidden group">
<img class="w-full h-auto rounded-[1.5rem] object-cover aspect-video" data-alt="A high-end 3D visual representing Artificial Intelligence as a glowing, iridescent CPU chip surrounded by streaming data particles and glass-like neural networks. The lighting is dramatic and cinematic, featuring deep purples, electric blues, and subtle neon highlights against a dark, tech-inspired background. The aesthetic is futuristic and premium, matching the dark mode cockpit feel of an AI education platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDER-8MzTVi7OsbLXpnglhlZK-toWyjvQLavu9NMI-2T16HuzJPz3B7yzPrbwnvHQAZPfwvh9XUCMtTs6VdYSivuK_12xpv7nw6hp6bmO5J82g8fXbj_Sx-cuM6w8L33Xse3kMQ1TPAJwn0sNW57XLfucg117bxWHmNm8y2Fy1n1Ibt9x7xVu8cox9DPb_tMhmvLwAvY8G2Qj26dS_NbqmVEBIp71T8zsN_alAdsfdv9xkKjvc9uqUe4Amv1DqgrVqBlOKTdsg294w"/>
<div class="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</section>
<!-- What you will learn - Bento Grid -->
<section class="py-section-gap px-gutter bg-surface-container-lowest/50">
<div class="max-w-container-max mx-auto">
<div class="text-center mb-20">
<h2 class="font-headline-md text-headline-md mb-stack-md">Ce que vous allez <span class="text-gradient">apprendre</span></h2>
<p class="text-on-surface-variant max-w-xl mx-auto">Un programme structuré pour passer du curieux à l'expert IA dans votre pratique quotidienne.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
<!-- Step 1 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-primary-container font-display-lg text-headline-md mb-4">01</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Comprendre l'IA simplement</h3>
<p class="text-on-surface-variant font-body-md">Découvrez ce qu'est réellement l'intelligence artificielle et comment elle fonctionne sans jargon technique complexe.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">psychology</span>
</div>
</div>
<!-- Step 2 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-secondary font-display-lg text-headline-md mb-4">02</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Utiliser ChatGPT efficacement</h3>
<p class="text-on-surface-variant font-body-md">Apprenez à obtenir de meilleurs résultats grâce aux bonnes méthodes de prompting et à l'ingénierie conversationnelle.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">chat</span>
</div>
</div>
<!-- Step 3 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-tertiary-container font-display-lg text-headline-md mb-4">03</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Les meilleurs outils IA du moment</h3>
<p class="text-on-surface-variant font-body-md">Découvrez les outils adaptés à votre métier pour la création d'images, de vidéos, et l'analyse de données.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">architecture</span>
</div>
</div>
<!-- Step 4 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-primary font-display-lg text-headline-md mb-4">04</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Automatiser certaines tâches</h3>
<p class="text-on-surface-variant font-body-md">Gagnez plusieurs heures par semaine grâce à l'automatisation des processus répétitifs et fastidieux.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">auto_mode</span>
</div>
</div>
<!-- Step 5 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-secondary-fixed-dim font-display-lg text-headline-md mb-4">05</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Cas pratiques par métier</h3>
<p class="text-on-surface-variant font-body-md">Applications concrètes pour graphistes, comptables, juristes, secrétaires, marketeurs et entrepreneurs.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">work</span>
</div>
</div>
<!-- Step 6 -->
<div class="glass-panel p-stack-lg rounded-2xl relative">
<div class="text-tertiary font-display-lg text-headline-md mb-4">06</div>
<h3 class="font-headline-md text-xl text-on-surface mb-stack-sm">Session Questions / Réponses</h3>
<p class="text-on-surface-variant font-body-md">Posez directement vos questions et obtenez des solutions personnalisées pour votre secteur d'activité.</p>
<div class="absolute top-stack-lg right-stack-lg w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">forum</span>
</div>
</div>
</div>
</div>
</section>
<!-- Quote & Theme Section -->
<section class="py-section-gap px-gutter relative overflow-hidden">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -z-10"></div>
<div class="max-w-[900px] mx-auto">
<div class="glass-panel p-12 rounded-[2.5rem] border-white/20 text-center relative overflow-hidden">
<span class="material-symbols-outlined text-[64px] text-primary/40 absolute top-8 left-8">format_quote</span>
<h2 class="font-headline-md text-3xl md:text-4xl text-on-surface italic mb-stack-lg leading-relaxed pt-8 relative z-10">
                        "L'IA ne va pas te remplacer... Mais quelqu'un qui l'utilise pourrait te remplacer."
                    </h2>
<p class="text-on-surface-variant font-body-lg mb-stack-lg">
                        Apprends à utiliser l'IA dans ton métier pour rester compétitif et développer de nouvelles compétences stratégiques.
                    </p>
<button class="px-8 py-3 rounded-xl bg-primary-container text-on-primary-container font-bold btn-hover-effect transition-all">S'inscrire gratuitement</button>
</div>
</div>
</section>
<!-- Instructor Section -->
<section class="py-section-gap px-gutter bg-surface-container-low">
<div class="max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
<div class="md:col-span-5">
<div class="relative w-full aspect-square max-w-[400px] mx-auto md:mx-0">
<div class="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-container/20 to-secondary-container/20 border border-white/10 -rotate-3"></div>
<div class="relative z-10 w-full h-full rounded-[2.5rem] bg-cover bg-center border border-white/20 rotate-3 transition-transform hover:rotate-0 duration-500" data-alt="A professional headshot of Fernando HOUSSOU, a specialist in digital productivity. He is a confident African man in professional attire, smiling warmly against a clean, modern studio background with soft bokeh lighting. The image captures a sense of expertise, approachability, and technological leadership, styled with high-end editorial lighting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjy1o8hWnlgNennBSJU3sL8OFGLqHCi0oPMIRxJ4JEZysjt5T7-zV51PCxsZMDicLBICawNCZxfUqJGK76_YfuA3qWKe-wLYxXipzoZNLNqBZZPAw12XWNH-pSlSLmlr-PNC7RaezBbtWnxypyDLOvpkZAwRJ7Pq7Xbj4h5u5XhWX-tnq26XqN9vgMpQSajuZtZvWoqeXO6FUjr7PwkIFvU4_K3Tf6HeG8Hx_oaDs39q0Lol9EaAtzAOfvFsNsVaOtgZsaeHgRD4s')"></div>
</div>
</div>
<div class="md:col-span-7">
<div class="instructor-card glass-panel p-stack-lg md:p-12 rounded-[2.5rem]">
<h4 class="font-label-caps text-primary mb-2">VOTRE FORMATEUR</h4>
<h2 class="font-display-lg text-4xl mb-4">Fernando HOUSSOU</h2>
<p class="text-on-surface font-bold text-lg mb-6">Spécialiste en productivité numérique, automatisation et intégration de l'intelligence artificielle dans les métiers.</p>
<div class="space-y-4 text-on-surface-variant">
<p>Fondateur et dirigeant de plusieurs projets digitaux en Afrique, il accompagne les professionnels et les entreprises dans leur transformation numérique.</p>
<p>Chaque semaine, il partage des méthodes pratiques, des outils accessibles et des cas réels d'utilisation adaptés aux réalités africaines.</p>
</div>
<div class="mt-8 flex gap-4">
<a class="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">link</span>
</a>
<a class="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">public</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="py-section-gap px-gutter">
<div class="max-w-[800px] mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-md text-headline-md mb-4">Questions Fréquentes</h2>
<p class="text-on-surface-variant">Tout ce que vous devez savoir avant de nous rejoindre.</p>
</div>
<div class="space-y-4">
<details class="group glass-panel rounded-2xl overflow-hidden" open="">
<summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-all list-none">
<span class="font-bold text-lg text-on-surface flex items-center gap-3">
<span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">?</span>
                                Est-ce gratuit ?
                            </span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-6 pb-6 text-on-surface-variant">
                            Oui, l'accès au direct est entièrement gratuit pour permettre à un maximum de professionnels de s'initier à ces technologies révolutionnaires.
                        </div>
</details>
<details class="group glass-panel rounded-2xl overflow-hidden">
<summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-all list-none">
<span class="font-bold text-lg text-on-surface flex items-center gap-3">
<span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">?</span>
                                Dois-je être expert en informatique ?
                            </span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-6 pb-6 text-on-surface-variant">
                            Non, les méthodes présentées sont accessibles à tous, sans compétences techniques préalables. Nous mettons un point d'honneur à simplifier les concepts.
                        </div>
</details>
<details class="group glass-panel rounded-2xl overflow-hidden">
<summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-all list-none">
<span class="font-bold text-lg text-on-surface flex items-center gap-3">
<span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">?</span>
                                Comment vais-je recevoir le lien Google Meet ?
                            </span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-6 pb-6 text-on-surface-variant">
                            Le lien de connexion vous sera envoyé par e-mail et sur le groupe WhatsApp communautaire 30 minutes avant le début de la session.
                        </div>
</details>
<details class="group glass-panel rounded-2xl overflow-hidden">
<summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-all list-none">
<span class="font-bold text-lg text-on-surface flex items-center gap-3">
<span class="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">?</span>
                                Puis-je poser mes questions ?
                            </span>
<span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-6 pb-6 text-on-surface-variant">
                            Absolument ! Une session dédiée de 20 minutes est prévue à la fin de chaque présentation pour répondre aux problématiques spécifiques des participants.
                        </div>
</details>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-section-gap px-gutter text-center relative">
<div class="max-w-[800px] mx-auto py-16 px-8 rounded-[3rem] bg-gradient-to-b from-surface-container-high to-surface-container-lowest border border-white/5 relative overflow-hidden">
<div class="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full"></div>
<div class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
<h2 class="font-display-lg text-headline-md mb-4">Prêt à transformer votre carrière ?</h2>
<p class="text-on-surface-variant mb-10 max-w-lg mx-auto">Rejoignez des centaines de professionnels africains qui domptent déjà l'IA.</p>
<button class="px-12 py-5 rounded-2xl bg-primary-container text-on-primary-container font-extrabold text-xl primary-glow btn-hover-effect transition-all mb-4">
                    Réserver ma place gratuite
                </button>
<p class="text-label-caps text-on-surface-variant/60">Places limitées à 250 participants par session</p>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant">
<div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
<div>
<div class="font-display-lg text-body-lg font-bold text-on-surface mb-4">Fernando HOUSSOU</div>
<p class="text-on-surface-variant text-body-md pr-8">Fondateur &amp; Directeur chez SOFITAR. Passionné par l'autonomisation technologique du continent africain.</p>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-3">
<h5 class="font-bold text-on-surface">Explorer</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">À Propos</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">CV</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Projets</a></li>
</ul>
</div>
<div class="space-y-3">
<h5 class="font-bold text-on-surface">Légal</h5>
<ul class="space-y-2">
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Confidentialité</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div>
<h5 class="font-bold text-on-surface mb-4">Réseaux Sociaux</h5>
<div class="flex gap-4">
<a class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center hover:bg-primary/20 transition-all" href="#">
<svg class="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center hover:bg-primary/20 transition-all" href="#">
<svg class="w-6 h-6 fill-current" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
</a>
<a class="w-12 h-12 rounded-xl glass-panel flex items-center justify-center hover:bg-primary/20 transition-all" href="#">
<span class="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
</div>
<div class="max-w-container-max mx-auto px-gutter mt-12 pt-8 border-t border-white/5 text-center">
<p class="text-on-surface-variant text-sm">© 2024 Fernando HOUSSOU. Fondateur &amp; Directeur at SOFITAR. Tous droits réservés.</p>
</div>
</footer>
<script>
        // Micro-interaction for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Hover effect for glass panels (light sweep)
        const cards = document.querySelectorAll('.glass-panel');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    </script>

</body></html>
