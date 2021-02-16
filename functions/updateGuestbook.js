// Update guestbook gist
require("dotenv").config();

exports.handler = async function (event, _context, callback) {
  try {
    const bodyContent = JSON.parse(event.body);
    const { userMessage } = bodyContent;

    if (!userMessage) {
      callback(null, { statusCode: 400, body: "Missing Params!" });
      return;
    }
    callback(null, { statusCode: 201, body: "Success!" });
  } catch {
    callback(null, { statusCode: 400, body: "Error!" });
    return;
  }
};
