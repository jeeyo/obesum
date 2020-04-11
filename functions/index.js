const cors = require('cors')({
  origin: true,
});

const functions = require('firebase-functions');
const Firestore = require('@google-cloud/firestore');
const PROJECTID = 'obesum-978f6';
const db = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true,
});

exports.number_of_users = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    db.collection('users').get().then(snap => {
      response.status(200).send({ number_of_users: snap.size });
    });
  });
});
