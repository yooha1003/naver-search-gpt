const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// 네이버 검색 API 호출을 위한 공통 함수
async function naverSearch(req, res, apiPath, extraQuery = {}) {
  const params = { ...req.query, ...extraQuery };
  const url = `https://openapi.naver.com/v1/search/${apiPath}`;

  const headers = {
    "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
  };

  // 인증 정보 누락 시 에러 처리
  if (!headers["X-Naver-Client-Id"] || !headers["X-Naver-Client-Secret"]) {
    return res.status(500).json({ error: "API 인증 정보가 누락되었습니다." });
  }

  try {
    const response = await axios.get(url, {
      params: params,
      headers: headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(`[${apiPath}] Error:`, error.message);
    if (error.response) {
      console.error(`[${apiPath}] Error response:`, error.response.data);
    }
    res.status(error.response ? error.response.status : 500).json({
      error: error.message,
      details: error.response ? error.response.data : null,
    });
  }
}

// 각 검색 엔드포인트 라우트 등록
app.get("/search/blog", (req, res) =>
  naverSearch(req, res, "blog")
);

app.get("/search/news", (req, res) =>
  naverSearch(req, res, "news")
);

// cafearticle 오타 수정 (원래 cafearitcle → cafearticle)
app.get("/search/cafearticle", (req, res) =>
  naverSearch(req, res, "cafearticle")
);

app.get("/search/kin", (req, res) =>
  naverSearch(req, res, "kin")
);

app.get("/search/webkr", (req, res) =>
  naverSearch(req, res, "webkr")
);

app.get("/search/shop", (req, res) =>
  naverSearch(req, res, "shop")
);

app.get("/search/doc", (req, res) =>
  naverSearch(req, res, "doc")
);

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () =>
    console.log(
      `http://127.0.0.1:${server.address().port}/search/kin?query=주식&display=10&start=1&sort=sim app listening on port ${server.address().port}!`
    )
  );
}

module.exports = app;
