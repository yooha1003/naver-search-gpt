const express = require("express");
const request = require("request"); // 상단에서 한 번만 로드
const app = express();

const client_id = process.env.CLIENT_ID; // 환경 변수 사용
const client_secret = process.env.CLIENT_SECRET;

app.get("/search/blog", function (req, res) {
  const { query, display, start, sort } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/blog?";
  const options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/news", function (req, res) {
  const { query, display, start, sort } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/news?";
  const options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/cafearticle", function (req, res) {
  const { query, display, start, sort } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/cafearticle?"; // 오타 수정
  const options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/kin", function (req, res) {
  const { query, display, start, sort } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/kin?";
  const options = {
    url: api_url,
    qs: { query, display, start, sort },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/webkr", function (req, res) {
  const { query, display, start } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/webkr?";
  const options = {
    url: api_url,
    qs: { query, display, start },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/shop", function (req, res) {
  const { query, display, start, filter, exclude } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/shop?";
  const options = {
    url: api_url,
    qs: { query, display, start, filter, exclude },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.get("/search/doc", function (req, res) {
  const { query, display, start } = req.query;
  const api_url = "https://openapi.naver.com/v1/search/doc?";
  const options = {
    url: api_url,
    qs: { query, display, start },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set("Content-Type", "application/json").send(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

// app.listen(3000, function () {
//   console.log("http://127.0.0.1:3000/search/kin?query=주식&display=10&start=1&sort=sim app listening on port 3000!");
// });

module.exports = app; // Vercel에 적합한 내보내기