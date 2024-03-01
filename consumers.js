const { kafka } = require("./client");
const group= process.argv[2];
async function init() {
  const consumer = kafka.consumer({ groupId: group });

  console.log("consumer connecting....");
  await consumer.connect();
  console.log("consumer connected");

  await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`[${group}][${topic}]: PART :${partition}`, message.value.toString());
    },
  });

  // Never disconnect consumer
}

init();
