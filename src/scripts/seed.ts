import connectToDatabase from '@/lib/MongoDBConnection';
import VoidRelic from '@/models/VoidRelic';
import { RELIC_ERAS } from '@/constants/RelicEras';
import { RELIC_DROP_CHANCE } from '@/constants/RelicDropChance';

const seedRelics = async () => {
  try {
    await connectToDatabase();
    console.log('Connected to MongoDB');

    const relics = [
      {
        name: 'Lith A6',
        era: RELIC_ERAS.LITH,
        isVaulted: false,
        itemDrops: [
          {
            name: 'Bronco Prime Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Masseter Prime Handle',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Hildryn Prime Systems Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Shade Prime Systems',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Forma Blueprint',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Akarius Prime Receiver',
            rarity: RELIC_DROP_CHANCE.RARE,
          },
        ],
      },
      {
        name: 'Meso A7',
        era: RELIC_ERAS.MESO,
        isVaulted: false,
        itemDrops: [
          {
            name: 'Fang Prime Blade',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Sevagoth Prime Neuroptics Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Paris Prime String',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Braton Prime Stock',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Orthos Prime Blade',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Akarius Prime Blueprint',
            rarity: RELIC_DROP_CHANCE.RARE,
          },
        ],
      },
      {
        name: 'Neo A13',
        era: RELIC_ERAS.NEO,
        isVaulted: false,
        itemDrops: [
          {
            name: 'Akarius Prime Barrel',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Forma Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Lex Prime Barrel',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Wisp Prime Neuroptics Blueprint',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Sevagoth Prime Blueprint',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Acceltra Prime Barrel',
            rarity: RELIC_DROP_CHANCE.RARE,
          },
        ],
      },
      {
        name: 'Axi A19',
        era: RELIC_ERAS.AXI,
        isVaulted: false,
        itemDrops: [
          {
            name: 'Epitaph Prime Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Paris Prime Blueprint',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Bronco Prime Receiver',
            rarity: RELIC_DROP_CHANCE.COMMON,
          },
          {
            name: 'Larkspur Prime Receiver',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Xaku Prime Systems Blueprint',
            rarity: RELIC_DROP_CHANCE.UNCOMMON,
          },
          {
            name: 'Acceltra Prime Stock',
            rarity: RELIC_DROP_CHANCE.RARE,
          },
        ],
      },
    ];

    for (const relic of relics) {
      const doc = new VoidRelic(relic);
      await doc.save();
    }

    console.log('Seeded relics to the database');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed relics:', error);
    process.exit(1);
  }
};

seedRelics();
