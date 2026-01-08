module.exports = async function (context, req) {
  // For now: return demo data (you'll later replace with DB query)
  const sessions = [
    { sessionId: 1, instrument: "Guitar", duration: 45, song: "Wonderwall" },
    { sessionId: 2, instrument: "Piano", duration: 30, song: "Clair de Lune" }
  ];

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: sessions
  };
};
