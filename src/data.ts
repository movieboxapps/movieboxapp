/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Feature, DeviceConfig, StudioStatus, LiveEvent, MovieRelease, Plan, Review, FAQItem } from './types';

export const PREMIUM_FEATURES: Feature[] = [
  {
    id: 'no-ads',
    icon: 'ShieldAlert',
    title: 'Ad-Filtering Media Gateway',
    description: 'Unlike standard competitors that saturate the viewing screen with invasive sponsor banners, pop-up redirects, and video commercial breaks, our integrated streaming pipeline filters out ad-trackers to ensure fluid, uninterrupted playback.',
    benefit: 'Saves up to 25% of absolute movie runtime compared to standard platforms',
    isPro: true
  },
  {
    id: '4k-stream',
    icon: 'Tv',
    title: '4K UHD Direct Stream Resolver',
    description: 'Bypass standard low-bitrate limits. Our advanced media engine decodes authentic 4K UHD video streams, including high-contrast HDR10+ and Dolby Vision, with multi-threaded connection pooling that minimizes buffers.',
    benefit: 'Maximum pixels and color fidelity optimized for high-end OLED and QLED screens',
    isPro: true
  },
  {
    id: 'offline',
    icon: 'Download',
    title: 'Smart Offline Storage Cache',
    description: 'Download whole TV series and high-resolution movies to local storage. Our high-efficiency stream container reduces file sizes by up to 45% while preserving pristine crystal-clear 1080p and 4K digital audio.',
    benefit: 'Frictionless entertainment during offline commutes, flights, and travel',
    isPro: true
  },
  {
    id: 'subtitles',
    icon: 'Languages',
    title: 'Synchronized Multilingual Captions',
    description: 'Access built-in SRT subtitle files translated into over 45 international languages. Supports instant sync offsets, customizable font sizes, opacity backdrops, and active caption positioning.',
    benefit: 'Read and enjoy diverse international cinema in your preferred dialect',
    isPro: true
  }
];

export const COMFORT_FEATURES: Feature[] = [
  {
    id: 'resume',
    icon: 'Play',
    title: 'Instant Progress Resume Sync',
    description: 'Our system securely caches your current video timestamp. Switch from a mobile screen to a Smart TV and resume exactly where you paused, with zero buffering or manual searching.',
    benefit: 'Convenient progress tracking across all your streaming devices'
  },
  {
    id: 'cast',
    icon: 'Cast',
    title: 'Universal High-Speed Casting',
    description: 'Built-in wireless casting protocols support instant connections to Google Chromecast, Apple AirPlay, Smart DLNA devices, and Roku systems in a single tap.',
    benefit: 'Project small mobile streams onto massive home-theater projection systems'
  },
  {
    id: 'gestures',
    icon: 'Sliders',
    title: 'Ergonomic Swipe Control Gestures',
    description: 'Engineered specifically for single-handed mobile navigation. Simply slide your thumb on the screen to seamlessly alter volume levels, adjust brightness, or seek forward/backward.',
    benefit: 'Highly intuitive, distraction-free control over physical playback parameters'
  },
  {
    id: 'parental',
    icon: 'Lock',
    title: 'Pin-Locked Family Content Control',
    description: 'Enforce absolute family safety. Restrict adult content folders, specific ratings, or administrative settings behind a customizable four-digit security pin.',
    benefit: 'Keeps home theater screens age-appropriate and secure for children'
  }
];

export const DEVICE_CONFIGS: DeviceConfig[] = [
  {
    id: 'android',
    name: 'Android Mobile & Tablets',
    icon: 'Smartphone',
    fileName: 'MovieBox_App_v4.8.2_Release.apk',
    fileSize: '32.4 MB',
    version: 'v4.8.2 (Security Checked)',
    releaseDate: 'July 2026',
    isRecommended: true,
    steps: [
      { step: 1, title: 'Download Certified APK', description: 'Acquire the authentic, cryptographically signed APK installer from our direct mirror node.' },
      { step: 2, title: 'Permit Unknown Installers', description: 'Open Settings > Apps & Security, and toggle "Install Unknown Apps" for your web browser or file manager.' },
      { step: 3, title: 'Launch Package Setup', description: 'Locate the file in your Downloads folder using any file manager, tap to open, and confirm the installation.' },
      { step: 4, title: 'Stream Your First Title', description: 'Open the MovieBox App icon from your mobile screen, set up your language options, and start streaming.' }
    ]
  },
  {
    id: 'firestick',
    name: 'Amazon Fire TV / Stick / Cube',
    icon: 'Tv2',
    fileName: 'MovieBox_App_v4.8.2_FireOS.apk',
    fileSize: '32.4 MB',
    version: 'v4.8.2 (TV Edition)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Get Downloader App', description: 'Go to your Fire TV Home screen, search the Amazon Appstore for the free "Downloader" app, and install it.' },
      { step: 2, title: 'Enable Sideload Permissions', description: 'Go to Settings > My Fire TV > Developer Options. Enable "Install Unknown Apps" for the Downloader utility.' },
      { step: 3, title: 'Enter Direct Download Code', description: 'Open Downloader, type our direct shortcode or download link into the URL field, and initiate the transfer.' },
      { step: 4, title: 'Install and Clean Cache', description: 'Approve the installation wizard, click Done, and select "Delete APK" to instantly clear the temporary installer.' }
    ]
  },
  {
    id: 'smarttv',
    name: 'Android TV & Media Boxes',
    icon: 'Monitor',
    fileName: 'MovieBox_App_v4.8.2_AndroidTV.apk',
    fileSize: '35.1 MB',
    version: 'v4.8.2 (Leanback Custom)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Save APK to USB Drive', description: 'Download our Android TV APK to a desktop computer and transfer it to a FAT32-formatted USB drive.' },
      { step: 2, title: 'Connect USB to Your TV', description: 'Plug the USB drive into your Smart TV or Android TV box and launch a File Commander app from Google Play.' },
      { step: 3, title: 'Run TV Package Installer', description: 'Browse the USB contents inside the explorer app, click the MovieBox APK file, and authorize the installation.' },
      { step: 4, title: 'Add App to Main Ribbon', description: 'Pin the MovieBox App icon to your TV home screen quick access row for convenient one-click launching.' }
    ]
  },
  {
    id: 'ios',
    name: 'Apple iOS (iPhone & iPad)',
    icon: 'Tablet',
    fileName: 'MovieBox_App_v4.8.2_iOS.ipa',
    fileSize: '38.2 MB',
    version: 'v4.8.2 (iOS Mobile)',
    releaseDate: 'July 2026',
    steps: [
      { step: 1, title: 'Acquire Sideload Signer', description: 'Download a secure computer-based sideload program such as AltStore, Sideloadly, or the Scarlet client.' },
      { step: 2, title: 'Download iOS IPA File', description: 'Get the official MovieBox App IPA file from our verified mirrors directly to your computer or iPad device.' },
      { step: 3, title: 'Sign and Deploy IPA', description: 'Connect your iOS device to your PC/Mac, load our IPA inside the signer utility, and sign it with your Apple ID.' },
      { step: 4, title: 'Trust Developer Certificate', description: 'On iOS, go to Settings > General > VPN & Device Management, select your profile, click "Trust", and launch.' }
    ]
  }
];

export const STUDIOS: StudioStatus[] = [
  { name: 'Unified Indexing', status: 'INDEXED', count: '18,500+ Movies' },
  { name: 'Live Sports Channels', status: 'INDEXED', count: '120+ Active Feeds' },
  { name: 'Multilingual Support', status: 'INDEXED', count: '45+ Languages' },
  { name: 'Global Network Mirrors', status: 'INDEXED', count: '12 Secure Nodes' },
  { name: 'User Trust Score', status: 'INDEXED', count: '99.8% Certified Safe' }
];

export const LIVE_EVENTS: LiveEvent[] = [
  {
    id: 'sports-1',
    sport: 'Premier League Soccer Tournament',
    category: 'LIVE NOW',
    teamHome: 'Manchester City',
    teamAway: 'Arsenal',
    status: 'LIVE',
    timeInfo: 'LIVE - 2ND HALF',
    channel: 'SPORTS NETWORK GATEWAY HD'
  },
  {
    id: 'sports-2',
    sport: 'UFC Light Heavyweight Bout',
    category: 'UPCOMING',
    teamHome: 'Ankalaev',
    teamAway: 'Pereira',
    status: 'UPCOMING',
    timeInfo: 'Tonight, 10:00 PM EST',
    channel: 'PREMIUM MAIN EVENT PPV',
    isPPV: true
  },
  {
    id: 'sports-3',
    sport: 'NBA Championship Series',
    category: 'LIVE NOW',
    teamHome: 'Golden State',
    teamAway: 'Boston Celtics',
    status: 'LIVE',
    timeInfo: 'LIVE - 3RD QUARTER',
    channel: 'WORLD ATHLETIC HD STREAM'
  },
  {
    id: 'sports-4',
    sport: 'Formula 1 World Championship',
    category: 'UPCOMING',
    teamHome: 'Monaco GP - Race',
    teamAway: 'All Constructors',
    status: 'UPCOMING',
    timeInfo: 'Tomorrow, 08:00 AM EST',
    channel: 'INTERNATIONAL SPEEDWAY FEED'
  }
];

export const MOVIES: MovieRelease[] = [
  {
    id: 'movie-1',
    title: 'Epic Dune Chronicles',
    rating: 9.5,
    year: 2025,
    genres: ['SCI-FI', 'DRAMA'],
    description: 'Immerse yourself in a beautiful desert universe where rival factions struggle to control the singular natural resource that drives interplanetary space travel and absolute mental clarity.',
    imageSeed: 'dune'
  },
  {
    id: 'movie-2',
    title: 'The Empire Gladiators',
    rating: 9.2,
    year: 2025,
    genres: ['ACTION', 'HISTORY'],
    description: 'A courageous warrior rises from the brutal depths of regional Colosseum arenas to challenge corrupt rulers and restore justice to a falling ancient empire.',
    imageSeed: 'gladiator'
  },
  {
    id: 'movie-3',
    title: 'Chaos Team-Up Event',
    rating: 8.8,
    year: 2024,
    genres: ['COMEDY', 'ACTION'],
    description: 'Two mismatched superpowered heroes unite to fix catastrophic dimensional tears, delivering witty commentary and non-stop explosive action.',
    imageSeed: 'deadpool'
  },
  {
    id: 'movie-4',
    title: 'Dimensional Spider Web',
    rating: 9.7,
    year: 2026,
    genres: ['ANIMATION', 'SCI-FI'],
    description: 'A young spider-hero navigates complex alternate dimensions to protect his family and learn the true cost of wearing the iconic vigilante mask.',
    imageSeed: 'spiderman'
  }
];

export const GENRE_DATABASES = [
  'Action & Thrillers', 'Sci-Fi Chronicles', 'Drama Cinema', 'Horror & Suspense',
  'Anime Legends', 'Candid Documentaries', 'Kids & Family', 'Comedy & Parodies', 'Global Live Sports', 'Epic War History'
];

export const COUNTRIES_SUPPORTED = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'ES', name: 'Spain' },
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' }
];

export const COMPARE_MATRIX = [
  {
    metric: 'Monthly Service Cost',
    moviebox: 'FREE ($0.00 / Month)',
    netflix: '$15.49 - $22.99 / Month',
    disney: '$13.99 - $17.99 / Month',
    prime: '$14.99 / Month'
  },
  {
    metric: 'In-Stream Commercials',
    moviebox: 'None (Built-in Script Filters)',
    netflix: 'Frequent ads on basic tiers',
    disney: 'Frequent ads on basic tiers',
    prime: 'Frequent sponsor rolls'
  },
  {
    metric: 'Offline Downloading',
    moviebox: 'Fully Uncapped & Free',
    netflix: 'Severely restricted by tier',
    disney: 'Premium tier members only',
    prime: 'Selected titles only'
  },
  {
    metric: 'Cross-Network Library',
    moviebox: 'Unified Indexing (All platforms combined)',
    netflix: 'Netflix originals only',
    disney: 'Disney and Marvel content only',
    prime: 'Amazon platform catalog only'
  },
  {
    metric: 'Dolby & 4K Quality',
    moviebox: 'Always Included Free',
    netflix: 'Requires Premium tier ($22.99)',
    disney: 'Requires Premium tier ($17.99)',
    prime: 'Additional paid monthly add-on'
  },
  {
    metric: 'Device Sideloading Support',
    moviebox: 'Supported on mobile, sticks, and Smart TVs',
    netflix: 'Pre-installed standard apps only',
    disney: 'Pre-installed standard apps only',
    prime: 'Pre-installed standard apps only'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Standard Portal',
    price: '$0',
    period: 'free forever',
    color: 'border-emerald-800 bg-emerald-950/20 text-emerald-400',
    features: [
      'High Definition Playback (up to 1080p)',
      'Universal Server Mirror Access',
      'One-Tap TV Casting (Chromecast & AirPlay)',
      'Sponsor-supported network resources'
    ]
  },
  {
    id: 'monthly',
    name: 'Premium Stream VIP',
    price: '$4.99',
    period: 'per month',
    popular: true,
    badge: 'POPULAR UPGRADE',
    color: 'border-yellow-500 bg-yellow-950/30 text-yellow-400',
    features: [
      'Stunning 4K UHD & HDR10+ playback quality',
      '100% Ad-Free Video Streaming experience',
      'Low-Latency Dedicated High-Speed Nodes',
      'Advanced Subtitle custom synchronization',
      'Stream on 2 devices simultaneously'
    ]
  },
  {
    id: 'annual',
    name: 'Yearly Cinema Pass',
    price: '$39.99',
    period: 'per year',
    badge: 'BEST LONG-TERM VALUE',
    color: 'border-emerald-500 bg-emerald-950/30 text-emerald-400',
    features: [
      'All features included in Stream VIP level',
      'Unrestricted PPV Sports and Tournament feeds',
      'Direct Offline High-Compression Downloads',
      'Save over 30% compared to monthly rates',
      'Priority routing for newly requested movies'
    ]
  },
  {
    id: 'lifetime',
    name: 'Lifetime VIP Credentials',
    price: '$59.99',
    period: 'one-time purchase',
    badge: 'LIFETIME ACCESS UNLOCKED',
    color: 'border-amber-600 bg-amber-950/30 text-amber-500',
    features: [
      'Uncapped access forever with zero future fees',
      'Includes absolute Premium & Sport updates',
      'Stream on up to 5 devices concurrently',
      'Dedicated high-bandwidth VIP server route',
      'Premium early access to catalog releases',
      'No recurring billing ever'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: 'Marcus Vance',
    role: 'Home Theater Enthusiast',
    device: 'Amazon Firestick 4K Max',
    avatarSeed: 'marcus',
    stars: 5,
    comment: 'Honestly, this unified entertainment media player is a game changer. I discarded my combined monthly subscription bills since the MovieBox App handles all my streams in gorgeous resolution with zero buffering directly on my Fire OS system.',
    date: '3 days ago',
    verified: true
  },
  {
    id: 'review-2',
    name: 'Yuki Takahashi',
    role: 'Business Consultant & Traveler',
    device: 'Samsung Galaxy Tab S9',
    avatarSeed: 'yuki',
    stars: 5,
    comment: 'The offline caching option is a lifesaver on international flights. I downloaded a complete season of sci-fi episodes in pristine 1080p, taking up minimal storage space, and watched it seamlessly in the air.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'review-3',
    name: 'Christopher Diaz',
    role: 'Power User & Developer',
    device: 'Google Pixel 8 Pro',
    avatarSeed: 'christopher',
    stars: 5,
    comment: 'I was skeptical of the zero ad claims but this custom media client handles script filters perfectly. The gesture controls for volume and brightness are smooth and highly functional. Incredible user interface.',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 'review-4',
    name: 'Sarah Jenkins',
    role: 'Smart Home Specialist & Parent',
    device: 'Apple iPad Air & Chromecast',
    avatarSeed: 'sarah',
    stars: 5,
    comment: 'Casting movies to our family room television via Google Cast is extremely responsive. The app discovers our TV node instantly, aligns audio tracks perfectly, and streams with zero stutter.',
    date: 'Yesterday',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the MovieBox App and how does it stream media for free?',
    answer: 'The MovieBox App is an advanced, client-side metadata browser and player that indexes publicly discoverable streaming URLs from across the web. Rather than hosting copyrighted files on its own servers, it parses direct high-speed streams and presents them in a single, cohesive, ad-free interface for your convenience.',
    category: 'FUNCTIONAL'
  },
  {
    id: 'faq-2',
    question: 'Is downloading the MovieBox APK safe, verified, and malware-free?',
    answer: 'Yes. Every official build of the MovieBox APK undergoes extensive cryptographic signing and multi-layered antivirus scanning (including Virustotal, Kaspersky, and Lookout). It contains zero spyware, unapproved system hooks, or adware trackers, offering a secure alternative to third-party streaming sites.',
    category: 'SECURITY'
  },
  {
    id: 'faq-3',
    question: 'How do you install the MovieBox App on an Amazon Firestick?',
    answer: 'To install the app on a Firestick or Fire TV, first download the free "Downloader" application from the Amazon Appstore. Next, navigate to Settings > My Fire TV > Developer Options, and allow Downloader to install unknown apps. Open Downloader, input our direct APK download code or URL, download the installer, and execute the setup wizard.',
    category: 'FIRE OS'
  },
  {
    id: 'faq-4',
    question: 'Does the MovieBox App require an active subscription or registration?',
    answer: 'No registration or credit card is required. You can access our standard index list and start streaming in up to 1080p fully free. To support our developer mirrors and enjoy luxury options like Dolby Vision, ad-filtering, and offline caching, you can upgrade to our Premium VIP pass starting at just $4.99.',
    category: 'REGISTRATION'
  },
  {
    id: 'faq-5',
    question: 'How frequently does the MovieBox App update its media catalog?',
    answer: 'Our automated web-crawlers scan global digital databases, movie directories, and tournament schedules 24/7. Popular theater blockbusters, new television episodes, and global live sporting events are indexed automatically with multiple synchronized audio and subtitle tracks within hours of release.',
    category: 'CONTENT'
  },
  {
    id: 'faq-6',
    question: 'Does MovieBox offer offline downloads and 4K playback?',
    answer: 'Yes! The MovieBox App supports high-speed offline media caching, compressing stream container footprints by up to 45% while preserving deep audio-video details. Additionally, compatible devices can stream in full 4K UHD resolutions with active HDR10+ and Dolby Atmos output.',
    category: 'CAPABILITIES'
  }
];
