require("dotenv").config();

exports.handler = function (event, _context, callback) {
  console.log("TEST_VAR value", process.env.TEST_VAR);
  try {
    const bodyContent = JSON.parse(event.body);
    const { name, email, message } = bodyContent;
    if (!name || !email || !message) {
      callback(null, { statusCode: 400, body: "Missing params" });
      return;
    }
    callback(/** error */ null, { statusCode: 200, body: "Success!" });
  } catch {
    callback(null, { statusCode: 400, body: "Error!" });
    return;
  }

  // More stuff to be done here
};
