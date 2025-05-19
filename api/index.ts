// 네이버 검색 API 예제 - 블로그 검색
var express = require("express");
var app = express();
var client_id = "IZLWXNNEvUfR0qEmFrJC";
var client_secret = "tPShelVvVU";

app.get("/search/blog", function (req, res) {
  const { query, display, start, sort } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/blog?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/news", function (req, res) {
  const { query, display, start, sort } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/news?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/cafearticle", function (req, res) {
  const { query, display, start, sort } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/cafearitcle?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/kin", function (req, res) {
  const { query, display, start, sort } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/kin?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/webkr", function (req, res) {
  const { query, display, start } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/webkr?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/shop", function (req, res) {
  const { query, display, start, filter, exclude } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/shop?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start, filter, exclude },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/doc", function (req, res) {
  const { query, display, start } = req.query;
  var api_url = "https://openapi.naver.com/v1/search/doc?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { query, display, start },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/search/kin?query=주식&display=10&start=1&sort=sim app listening on port 3000!"
  );
});