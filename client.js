const {Kafka}=require ("kafkajs");
const dotenv= require("dotenv");
dotenv.config();
exports.kafka= new Kafka({
    clientId:"my-app",
    brokers:[`${process.env.PRIVATE_IP}:9092`],
});