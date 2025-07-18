import mongoose from 'mongoose';
import ItemDropSchema from './ItemDrop';
import { RELIC_ERAS } from '../constants/RelicEras';
import { RELIC_REFINEMENT_LEVELS } from '../constants/RelicRefinementLevels';

const VoidRelicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    era: {
      type: String,
      enum: Object.values(RELIC_ERAS),
    },
    isVaulted: {
      type: Boolean,
    },
    refinementLevel: {
      type: String,
      enum: Object.values(RELIC_REFINEMENT_LEVELS),
    },
    itemDrops: {
      type: [ItemDropSchema],
      required: true,
    },
  },
  {
    strict: true,
  },
);

// Avoid re-registering model during hot reloads
export default mongoose.models.VoidRelic ||
  mongoose.model('void_relic', VoidRelicSchema);
