module.exports = async function (context, req) {
  const id = context.bindingData.id;

  context.res = {
    status: 200,
    body: { message: "Session deleted", id }
  };
};
