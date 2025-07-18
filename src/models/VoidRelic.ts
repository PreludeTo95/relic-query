import mongoose from 'mongoose';
import DropSchema from './helpers/DropSchema';
import { RELIC_ERAS } from '../constants/RelicEras';
import { RELIC_REFINEMENT_LEVELS } from '../constants/RelicRefinementLevels';

const VoidRelicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  era: {
    type: String,
    enum: RELIC_ERAS,
  },
  isVaulted: {
    type: Boolean,
  },
  refinementLevel: {
    type: String,
    enum: RELIC_REFINEMENT_LEVELS,
  },
  itemDrops: {
    type: DropSchema,
  },
});

// Avoid re-registering model during hot reloads
export default mongoose.models.VoidRelic ||
  mongoose.model('VoidRelic', VoidRelicSchema);
