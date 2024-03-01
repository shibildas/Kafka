const {kafka}=require("./client");
async function init(){
    const admin= kafka.admin();
    console.log("Admin connecting....");
    admin.connect();
    console.log("Admin connected successfully");
    console.log("Creating topics");
    await admin.createTopics({
        topics:[{
            topic:"rider-updates",
            numPartitions: 2,
        }]
    });
    console.log("Topic created success");
    admin.disconnect();
    console.log("Admin disconnected");
}
init();

