const {Kafka}=require ("kafkajs");
exports.kafka= new Kafka({
    clientId:"my-app",
    brokers:["172.21.176.1:9092"],
});