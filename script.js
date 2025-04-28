const tools = [
  {
    id: 1,
    name: "GitHub Copilot",
    description: "GPT 기반 코드 자동 완성 도구. VS Code, JetBrains 등에서 사용 가능.",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/features/copilot",
    rating: 4.8,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/4RfD5JiXt3A&t=1s" // 여기에 실제 embed 링크
  },
  {
    id: 2,
    name: "Cursor",
    description: "AI 기반 코드 편집기. 리팩토링, 코드 검색에 탁월.",
    image: "https://www.cursor.so/favicon.ico",
    link: "https://www.cursor.so",
    rating: 4.7,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2"
  },
  {
    id: 3,
    name: "Windsurf",
    description: "무료 사용 가능한 Copilot 대안. 빠른 자동 완성과 실시간 추천 제공.",
    image: "https://windsurf.com/logo/windsurf_teal_logo.svg",
    link: "https://windsurf.com/",
    rating: 4.6,
    baseCount: 10,
    videoUrl: "" // 영상 없는 경우는 빈 문자열
  }
];

// index.html - 도구 목록 출력
const toolList = document.getElementById("tool-list");
if (toolList) {
  tools.forEach(tool => {
    const card = document.createElement("article");
    card.className = "tool-card";
    card.innerHTML = `
      <img src="${tool.image}" alt="${tool.name} 로고">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <p>⭐ ${tool.rating.toFixed(1)} / 5</p>
      <button onclick="location.href='tool.html?id=${tool.id}'">자세히 보기</button>
    `;
    toolList.appendChild(card);
  });
}

// tool.html - 도구 상세 + 리뷰 기능
const detailSection = document.getElementById("tool-detail");
const reviewForm = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");

if (detailSection) {
  const urlParams = new URLSearchParams(window.location.search);
  const toolId = parseInt(urlParams.get("id"));
  const tool = tools.find(t => t.id === toolId);

  if (tool) {
    let videoEmbed = "";
    if (tool.videoUrl) {
      videoEmbed = `
        <div class="video-container">
          <iframe width="560" height="315" src="${tool.videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    }

    detailSection.innerHTML = `
      <h2>${tool.name}</h2>
      <img src="${tool.image}" alt="${tool.name} 로고" />
      <p>${tool.description}</p>
      <a href="${tool.link}" target="_blank">🔗 공식 사이트 이동</a>
      <p id="avg-rating">⭐ 평균 별점: ${tool.rating.toFixed(1)}</p>
      ${videoEmbed}
    `;
  }

  // 리뷰 불러오기
  const saved = JSON.parse(localStorage.getItem(`reviews-${toolId}`)) || [];
  saved.forEach(r => addReviewToList(r));

  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = document.getElementById("review").value;
    const rating = document.getElementById("rating").value;
    const newReview = { content, rating };

    saved.push(newReview);
    localStorage.setItem(`reviews-${toolId}`, JSON.stringify(saved));
    addReviewToList(newReview);

    reviewForm.reset();
    updateAverageRating(toolId); // ⭐ 리뷰 등록 시 평균 별점 업데이트
  });

  function addReviewToList(review) {
    const li = document.createElement("li");
    li.textContent = `⭐ ${review.rating}점 - ${review.content}`;
    reviewList.appendChild(li);
  }
}

// reviews.html - 전체 리뷰 보기
const fullList = document.getElementById("full-review-list");
if (fullList) {
  tools.forEach(tool => {
    const saved = JSON.parse(localStorage.getItem(`reviews-${tool.id}`)) || [];
    if (saved.length > 0) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${tool.name}</strong><ul>${saved.map(r => `<li>⭐ ${r.rating} - ${r.content}</li>`).join("")}</ul>`;
      fullList.appendChild(li);
    }
  });
}

// 별점 계산 함수
function getAverageRating(toolId) {
  const tool = tools.find(t => t.id === toolId);
  const baseTotal = tool.rating * tool.baseCount;

  const reviews = getReviews(toolId);
  const newRatings = reviews.map(r => parseFloat(r.rating));
  const newTotal = newRatings.reduce((a, b) => a + b, 0);

  const totalRating = baseTotal + newTotal;
  const totalCount = tool.baseCount + newRatings.length;

  return (totalCount === 0) ? "N/A" : (totalRating / totalCount).toFixed(1);
}

function updateAverageRating(toolId) {
  const avg = getAverageRating(toolId);
  const ratingEl = document.getElementById("avg-rating");
  if (ratingEl) {
    ratingEl.textContent = `⭐ 평균 별점: ${avg}`;
  }
}

function getReviews(toolId) {
  return JSON.parse(localStorage.getItem(`reviews-${toolId}`)) || [];
}

function saveReviews(toolId, reviews) {
  localStorage.setItem(`reviews-${toolId}`, JSON.stringify(reviews));
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  if (form) {
    const toolId = parseInt(new URLSearchParams(window.location.search).get("id"));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reviewer-name").value;
      const rating = parseInt(document.getElementById("review-rating").value);
      const comment = document.getElementById("review-comment").value;
      const newReview = { name, rating, comment };

      const existing = getReviews(toolId);
      existing.push(newReview);
      saveReviews(toolId, existing);

      renderReviews(toolId);
      updateAverageRating(toolId);

      form.reset();
    });

    updateAverageRating(toolId);
  }
});
