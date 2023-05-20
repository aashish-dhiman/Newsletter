const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
require("dotenv").config();

const app = express();
app.use(
    express.static(process.cwd() + "/public", {
        // Specify MIME type explicitly for CSS files
        setHeaders: (res, path, stat) => {
            if (path.endsWith(".css")) {
                res.setHeader("Content-Type", "text/css");
            }
        },
    })
);
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const KEY = process.env.MAILCHIMP_API_KEY;
const listID = process.env.MAILCHIMP_LIST_ID;
console.log(KEY, listID);
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            },
        ],
    };

    const JsonData = JSON.stringify(data);

    const url = `https://us21.api.mailchimp.com/3.0/lists/${listID}`;
    const options = {
        method: "POST",
        auth: `aashish:${KEY}`,
    };
    const request = https.request(url, options, function (response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function (d) {
            // console.log(JSON.parse(d));
        });
    });
    request.write(JsonData);
    request.end();
});

app.post("/fail", function (req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on Port 3000");
});

module.exports = app;
