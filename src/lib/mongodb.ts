import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('Undefined MONGODB_URI environment variable');
}

let cached = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    connection: null,
    promise: null,
  };
}

async function connectToDatabase() {
  if (cached.connection) {
    return cached.connection;
  } else {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
}

export default connectToDatabase;
