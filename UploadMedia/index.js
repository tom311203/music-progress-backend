module.exports = async function (context, req) {
  const id = context.bindingData.id;
  const fileName = context.bindingData.fileName;

  // Allow either raw text or JSON like { "content": "..." }
  let content = req.body;
  if (typeof content === "object" && content !== null) {
    content = content.content ?? JSON.stringify(content, null, 2);
  }

  if (!content) {
    context.res = {
      status: 400,
      body: { message: "Missing content in request body" }
    };
    return;
  }

  // This writes to Blob Storage via the output binding
  context.bindings.outputBlob = content;

  context.res = {
    status: 201,
    body: {
      message: "Media uploaded",
      sessionId: id,
      fileName: fileName,
      blobPath: `session-media/${id}/${fileName}`
    }
  };
};
