export const agentsData = [
  {
    id: 1,
    agentName: "Astra",
    bio: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
    role: "Controller",
    skills: [
      {
        id: 1,
        skillName: "Gravity Well",
        skillDesc: "Place Stars in Astral Form. ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable.",
        skillVid: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4",
      },
      {
        id: 2,
        skillName: "Nova Pulse",
        skillDesc: "Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
        skillVid: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4",
      },
      {
        id: 3,
        skillName: "Nebula - Dissipate",
        skillDesc:
          "Place Stars in Astral Form. ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star`s location before returning.",
        skillVid: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4",
      },
      {
        id: 4,
        skillName: "Cosmic Divide",
        skillDesc:
          "When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
        skillVid: "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4",
      },
    ],
  },
  {
    id: 2,
    agentName: "Breach",
    bio: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Aftershock",
        skillDesc: "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
        skillVid: "",
      },
      {
        id: 2,
        skillName: "Flashpoint",
        skillDesc: "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.",
        skillVid: "",
      },
      {
        id: 3,
        skillName: "Fault Line",
        skillDesc: "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.",
        skillVid: "",
      },
      {
        id: 4,
        skillName: "Rolling Thunder",
        skillDesc: "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large line. The quake dazes and knocks up anyone caught in it.",
        skillVid: "",
      },
    ],
  },
  {
    id: 3,
    agentName: "Brimstone",
    bio: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Sky Smoke",
        skillDesc: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
      },
      {
        id: 2,
        skillName: "Stim Beacon",
        skillDesc: "INSTANTLY toss a stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire and a speed boost.",
      },
      {
        id: 3,
        skillName: "Incendiary",
        skillDesc: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
      },
      {
        id: 4,
        skillName: "Orbital Strike",
        skillDesc: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
      },
    ],
  },
  {
    id: 4,
    agentName: "Chamber",
    bio: "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Rendezvous",
        skillDesc: "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.",
      },
      {
        id: 2,
        skillName: "Trademark",
        skillDesc: "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.",
      },
      {
        id: 3,
        skillName: "Headhunter",
        skillDesc: "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
      },
      {
        id: 4,
        skillName: "Tour de Force",
        skillDesc: "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.",
      },
    ],
  },
  {
    id: 5,
    agentName: "Cypher",
    bio: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Spycam",
        skillDesc:
          "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
      },
      {
        id: 2,
        skillName: "Trapwire",
        skillDesc:
          "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
      },
      {
        id: 3,
        skillName: "Cyber Cage",
        skillDesc: "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it.",
      },
      {
        id: 4,
        skillName: "Neural Theft",
        skillDesc: "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
      },
    ],
  },
  {
    id: 6,
    agentName: "Fade",
    bio: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Haunt",
        skillDesc:
          "EQUIP a haunting watcher. FIRE to throw. The watcher drops down after a set time. RE-USE to drop the watcher early. The watcher lashes out on impact, revealing enemies in its line of sight and creating terror trails to them. Enemies can destroy the watcher.",
      },
      {
        id: 2,
        skillName: "Prowler",
        skillDesc: "EQUIP a prowler. FIRE to send the prowler forward. HOLD FIRE to steer the prowler towards your crosshair. The prowler will chase down the first enemy or terror trail it sees, and nearsight the enemy on impact.",
      },
      {
        id: 3,
        skillName: "Seize",
        skillDesc: "EQUIP a knot of raw fear. FIRE to throw. The knot drops down after a set time. RE-USE to drop the knot early. The knot ruptures on impact, holding nearby enemies in place. Held enemies are deafened, and decayed.",
      },
      {
        id: 4,
        skillName: "Nightfall",
        skillDesc: "EQUIP the power of nightmare itself. FIRE to unleash a wave of unstoppable nightmare energy. Enemies caught in the wave are marked by terror trails, deafened, and decayed.",
      },
    ],
  },
  {
    id: 7,
    agentName: "Jett",
    bio: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    role: "Duelist",
    skills: [
      {
        id: 1,
        skillName: "Drift",
        skillDesc: "Holding the jump button while falling allows you to glide through the air.",
      },
      {
        id: 2,
        skillName: "Tailwind",
        skillDesc: "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.",
      },
      {
        id: 3,
        skillName: "Cloudburst",
        skillDesc: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
      },
      {
        id: 4,
        skillName: "Updraft",
        skillDesc: "INSTANTLY propel Jett high into the air.",
      },
      {
        id: 5,
        skillName: "Blade Storm",
        skillDesc: "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALTERNATE FIRE to throw all remaining daggers but does not recharge on a kill.",
      },
    ],
  },
  {
    id: 8,
    agentName: "KAYO",
    bio: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Zero/Point",
        skillDesc: "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
      },
      {
        id: 2,
        skillName: "Flash/Drive",
        skillDesc: "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
      },
      {
        id: 3,
        skillName: "Frag/Ment",
        skillDesc: "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
      },
      {
        id: 4,
        skillName: "Null/Cmd",
        skillDesc:
          "INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are suppressed for a short duration. While overloaded, KAY/O gains combat stim and can be re-stabilized if downed.",
      },
    ],
  },
  {
    id: 8,
    agentName: "Killjoy",
    bio: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    role: "Sentinel",
    skills: [
      {
        id: 1,
        skillName: "Turret",
        skillDesc: "EQUIP a Turret. FIRE to deploy a turret that automatically fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
      },
      {
        id: 2,
        skillName: "Nanoswarm",
        skillDesc: "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
      },
      {
        id: 3,
        skillName: "Alarmbot",
        skillDesc: "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.",
      },
      {
        id: 4,
        skillName: "Lockdown",
        skillDesc: "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
      },
    ],
  },
  {
    id: 9,
    agentName: "Neon",
    bio: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
    role: "Duelist",
    skills: [
      {
        id: 1,
        skillName: "High Gear",
        skillDesc: "INSTANTLY channel Neon's high power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
      },
      {
        id: 2,
        skillName: "Fast Lane",
        skillDesc: "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision.",
      },
      {
        id: 3,
        skillName: "Relay Bolt",
        skillDesc: "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
      },
      {
        id: 4,
        skillName: "Overdrive",
        skillDesc: "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.",
      },
    ],
  },
  {
    id: 10,
    agentName: "Omen",
    bio: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    role: "Controller",
    skills: [
      {
        id: 1,
        skillName: "Dark Cover",
        skillDesc:
          "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD SECONDARY FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
      },
      {
        id: 2,
        skillName: "Shrouded Step",
        skillDesc: "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
      },
      {
        id: 3,
        skillName: "Paranoia",
        skillDesc: "EQUIP a blinding orb. FIRE to throw it forward, briefly reducing the vision range and deafening all players it touches. This projectile can pass through walls.",
      },
      {
        id: 4,
        skillName: "From The Shadows",
        skillDesc:
          "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or press EQUIP for Omen to cancel his teleport.",
      },
    ],
  },
  {
    id: 11,
    agentName: "Phoenix",
    bio: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    role: "Duelist",
    skills: [
      {
        id: 1,
        skillName: "Hot Hands",
        skillDesc: "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
      },
      {
        id: 2,
        skillName: "Blaze",
        skillDesc: "EQUIP a flame wall. FIRE to create a line of flames that moves forward, creating a wall that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
      },
      {
        id: 3,
        skillName: "Curveball",
        skillDesc:
          "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
      },
      {
        id: 4,
        skillName: "Run It Back",
        skillDesc: "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
      },
    ],
  },
  {
    id: 11,
    agentName: "Reyna",
    bio: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    role: "Duelist",
    skills: [
      {
        id: 1,
        skillName: "Devour",
        skillDesc:
          "INSTANTLY consume a nearby Soul Orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If Empress is active, this skill will automatically cast and not consume the Soul Orb.",
      },
      {
        id: 2,
        skillName: "Dismiss",
        skillDesc: "INSTANTLY consume a nearby Soul Orb, becoming intangible for a short duration. If Empress is active, also become invisible.",
      },
      {
        id: 3,
        skillName: "Leer",
        skillDesc: "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      },
      {
        id: 4,
        skillName: "Empress",
        skillDesc:
          "INSTANTLY enter a frenzy, increasing firing, equip and reload speed dramatically. Grants infinite charges of Soul Harvest abilities. When an enemy dies to Reyna, or dies within 3 seconds of taking damage from Reyna, the duration is renewed.",
      },
    ],
  },
  {
    id: 12,
    agentName: "Sage",
    bio: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    role: "Sentinel",
    skills: [
      {
        id: 1,
        skillName: "Healing Orb",
        skillDesc: "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
      },
      {
        id: 2,
        skillName: "Barrier Orb",
        skillDesc: "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
      },
      {
        id: 3,
        skillName: "Slow Orb",
        skillDesc: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
      },
      {
        id: 4,
        skillName: "Resurrection",
        skillDesc: "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      },
    ],
  },
  {
    id: 13,
    agentName: "Sage",
    bio: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    role: "Sentinel",
    skills: [
      {
        id: 1,
        skillName: "Healing Orb",
        skillDesc: "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
      },
      {
        id: 2,
        skillName: "Barrier Orb",
        skillDesc: "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.",
      },
      {
        id: 3,
        skillName: "Slow Orb",
        skillDesc: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
      },
      {
        id: 4,
        skillName: "Resurrection",
        skillDesc: "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      },
    ],
  },
  {
    id: 14,
    agentName: "Skye",
    bio: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye`s side.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Guiding Light",
        skillDesc:
          "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.",
      },
      {
        id: 2,
        skillName: "Regrowth",
        skillDesc: "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
      },
      {
        id: 3,
        skillName: "Trailblazer",
        skillDesc: "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
      },
      {
        id: 4,
        skillName: "Seekers",
        skillDesc: "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.",
      },
    ],
  },
  {
    id: 15,
    agentName: "Sova",
    bio: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    role: "Initiator",
    skills: [
      {
        id: 1,
        skillName: "Recon Bolt",
        skillDesc:
          "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      },
      {
        id: 2,
        skillName: "Owl Drone",
        skillDesc: "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
      },
      {
        id: 3,
        skillName: "Shock Bolt",
        skillDesc:
          "EQUIP a bow with shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      },
      {
        id: 4,
        skillName: "Hunter`s Fury",
        skillDesc:
          "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
      },
    ],
  },
  {
    id: 16,
    agentName: "Viper",
    bio: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    role: "Controller",
    skills: [
      {
        id: 1,
        skillName: "Toxic Screen",
        skillDesc: "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
      },
      {
        id: 2,
        skillName: "Snake Bite",
        skillDesc: "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable.",
      },
      {
        id: 3,
        skillName: "Poison Cloud",
        skillDesc:
          "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
      },
      {
        id: 4,
        skillName: "Viper`s Pit",
        skillDesc:
          "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. HOLD the ability key to disperse the cloud early.",
      },
    ],
  },
  {
    id: 17,
    agentName: "Yoru",
    bio: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
    role: "Duelist",
    skills: [
      {
        id: 1,
        skillName: "Gatecrash",
        skillDesc: "EQUIP to harness a rift tether. FIRE to send the tether out moving forward. ALT FIRE to place a tether in place. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.",
      },
      {
        id: 2,
        skillName: "Fakeout",
        skillDesc:
          "EQUIP an echo that transforms into a mirror image of Yoru when activated. FIRE to instantly activate the mirror image and send it forward. ALT FIRE to place an inactive echo. USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.",
      },
      {
        id: 3,
        skillName: "Blindside",
        skillDesc: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
      },
      {
        id: 4,
        skillName: "Dimensional Drift",
        skillDesc: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
      },
    ],
  },
];
