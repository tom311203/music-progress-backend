module.exports = async function (context, req) {
  try {
    const documents = context.bindings.documents || [];
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: documents
    };
  } catch (err) {
    context.log.error("GetMediaMetadata failed:", err);
    context.res = { status: 500, body: { message: err.message } };
  }
};