const express = require("express")
const app = express();
const swaggerUI = require('swagger-ui-express');
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load('./api.yaml');
const cors = require('cors');
app.use(cors({
    origin:"https://65f016dff10d4b8b8ebcfddb--claimsfrontend.netlify.app",
    credentials:true
}));
//Metric collection
const client = require("prom-client");

// const config = require('./config/secret');

require("dotenv").config({path: "/home/tanisha/Desktop/Bootcamp/P and A/Claim Management system/server/config/config.env"});
// console.log(config.secretKey);

//Using middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//Importing routes
const post = require("../server/routes/claimant");
const policy = require("../server/routes/policy");
const user = require("../server/routes/user");


//Using routes
app.use("/api/v1",post);
app.use("/api/v2",policy);
app.use("/api/v3",user);


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

//Monitoring tools
//Collect ram, memory, utilization, etc

const collectDefaultMetrices = client.collectDefaultMetrics;
collectDefaultMetrices({register : client.register});

app.get("/metrics", async (req, res) =>
{
    res.setHeader("Content-Type", client.register.contentType);
    const metrics = await client.register.metrics();
    res.send(metrics);
});

module.exports = app;


