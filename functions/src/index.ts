import * as functions from 'firebase-functions';

export const helloWorld = functions
  .region('europe-west2')
  .https.onRequest((req, res) => res.send('Hello World.'));

