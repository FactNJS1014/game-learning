export interface GddTemplate {
  id: string;
  name: string;
  genre: string;
  engineRecommendation: string;
  gameOverview: string;
  coreGameplayLoop: string;
  playerMechanics: string;
  enemyTypes: string;
  artStyle: string;
  audioVision: string;
  monetization: string;
  milestones: string;
}

export const sampleGddTemplates: GddTemplate[] = [
  {
    id: 'gdd-souls-like',
    name: 'Action Combat RPG',
    genre: 'Souls-like / Action RPG',
    engineRecommendation: 'Unreal Engine 5 or Unity (HDRP)',
    gameOverview: 'A dark, atmospheric fantasy action game focusing on precision timing, stamina management, and punishing boss encounters.',
    coreGameplayLoop: 'Explore Dungeon -> Engage Hostile Enemies -> Manage Stamina & Dodge -> Harvest Souls/Essence -> Upgrade Attributes at Checkpoint Shrine -> Defeat Area Overlord.',
    playerMechanics: 'Light Attack, Heavy Attack, Parry (0.2s window), Dodge Roll (invincibility frames), Estus Flask healing, Lock-on targeting.',
    enemyTypes: 'Swordsman (basic attacks), Archer (distance pressure), Heavy Brute (armor hyper-armor), Boss (multi-phase transform at 50% HP).',
    artStyle: 'Grimdark Gothic, ruined castles, desaturated palette with vibrant orange soul fires.',
    audioVision: 'Heavy metallic sword clashes, wind howls, orchestral strings during boss battles.',
    monetization: 'Premium upfront purchase on Steam / Epic Games / Consoles ($19.99 - $29.99).',
    milestones: 'M1: Greybox Combat Arena -> M2: 3 Enemy Archetypes -> M3: Level 1 Greybox -> M4: Polish & Sound -> M5: Steam Demo.',
  },
  {
    id: 'gdd-2d-metroidvania',
    name: 'Sci-Fi Metroidvania',
    genre: '2D Action Adventure / Metroidvania',
    engineRecommendation: 'Unity (Universal Render Pipeline 2D)',
    gameOverview: 'A fast-paced sci-fi platformer on a derelict space colony where unlocking movement upgrades grants access to previously impassable zones.',
    coreGameplayLoop: 'Explore Connected Map -> Find Obstacle (High ledge, Laser gate) -> Defeat Mini-Boss -> Unlock New Ability (Double Jump, Dash) -> Backtrack & Open New Region.',
    playerMechanics: 'Wall Jump, Energy Blaster, Dash (passes through lasers), Morph into micro-drone.',
    enemyTypes: 'Patrolling Security Drones, Wall-crawling Parasites, Shielded Turrets.',
    artStyle: 'Crisp hand-drawn pixel art with dynamic 2D neon rim lights.',
    audioVision: 'Synthwave ambient background music, punchy 8-bit laser impacts.',
    monetization: 'Premium indie release ($14.99) with physical switch edition.',
    milestones: 'M1: Core Movement Physics -> M2: Map Room Connector -> M3: 2 Upgrade Abilities -> M4: Vertical Slice Demo.',
  },
];

export const initialGddData = {
  title: 'Shadows of Eldoria',
  genre: 'Action Adventure RPG',
  platform: 'PC / Steam / Consoles',
  targetAudience: 'Teens & Adults (15-35), fans of souls-like & zelda exploration',
  coreLoop: 'Explore ancient dungeons -> Encounter hostile sentinels -> Dodge & Counter-attack -> Collect Shards -> Upgrade Skills at Shrines -> Defeat Dungeon Guardian.',
  story: 'In an ancient realm corrupted by void crystal shards, an exiled knight awakens with the power to manipulate time anchors and must restore light to the kingdom.',
  mechanics: 'Third-person movement, dynamic camera orbit, light/heavy slash combo, 0.2s parry window, time-rewind dodge (stamina cost), inventory quick-slot.',
  artStyle: 'Stylized dark fantasy with saturated magical runes and cinematic directional lighting.',
  monetization: 'Premium upfront purchase ($24.99 USD) with no microtransactions.',
};

export const defaultBalanceValues = {
  playerHealth: 120,
  playerDamage: 28,
  playerDefense: 15,
  playerAttackSpeed: 1.2,
  enemyHealth: 180,
  enemyDamage: 22,
  enemyDefense: 10,
  enemyAttackSpeed: 0.9,
};

