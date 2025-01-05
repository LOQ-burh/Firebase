/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
// const { db } = require("./src/configs");
const app = express();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// app.use(db)

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

app.get("/greeting", (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Greeting from Firebase Google cloud");
});

app.use("", require("./src/routes"))

const api = functions.https.onRequest(app);

module.exports = {
  api,
};
