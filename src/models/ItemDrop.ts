import mongoose from 'mongoose';
import { RELIC_DROP_CHANCE } from '@/constants/RelicDropChance';

const ItemDropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      enum: Object.values(RELIC_DROP_CHANCE),
      required: true,
    },
  },
  {
    _id: false, // Disable automatic _id field
    strict: true, // Ensure only defined fields are stored
  },
);

export default ItemDropSchema;
