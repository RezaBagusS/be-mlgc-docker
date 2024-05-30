const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const {storeData, getHistory } = require('../services/storeData');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { result, suggestion } = await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    "id": id,
    "result": result,
    "suggestion": suggestion,
    "createdAt": createdAt
  }

  await storeData(id,data);

  const response = h.response({
    status: 'success',
    message: 'Model is predicted successfully',
    data
  })
  response.code(201);
  
  return response;
}

async function getHistoriesHandler(request, h) {
  // const data = {
  //   "id": id,
  //   "result": label,
  //   "explanation": explanation,
  //   "suggestion": suggestion,
  //   "confidenceScore": confidenceScore,
  //   "createdAt": createdAt
  // }

  const histories = await getHistory();

  const data = histories.map((item) => {
    return {
      id: item.id,
      history: {
        result: item.result,
        suggestion: item.suggestion,
        createdAt: item.createdAt,
        id: item.id
      }
    }
  })

  const response = h.response({
    status: 'success',
    data: data
  })

  response.code(200);
  return response;
}

module.exports = {
  postPredictHandler,
  getHistoriesHandler
};
