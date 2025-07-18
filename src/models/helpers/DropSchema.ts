import mongoose from 'mongoose';

const DropSchema = new mongoose.Schema(
  {
    common: {
      type: [String],
      validate: [
        (arr: string[]) => arr.length === 3,
        'Must have exactly 3 common drops',
      ],
      required: true,
    },
    uncommon: {
      type: [String],
      validate: [
        (arr: string[]) => arr.length === 2,
        'Must have exactly 2 uncommon drops',
      ],
      required: true,
    },
    rare: {
      type: [String],
      validate: [
        (arr: string[]) => arr.length === 1,
        'Must have exactly 1 rare drop',
      ],
      required: true,
    },
  },
  { _id: false }, // Don't create a subdocument ID
);

export default DropSchema;
