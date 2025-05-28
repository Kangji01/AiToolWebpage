//여기 image, link, videoUrl 안채워진거 수정해주세요
const tools = [
  {
    id: 1,
    name: "GitHub Copilot",
    description: "GPT 기반 코드 자동 완성 도구. VS Code, JetBrains 등에서 사용 가능.",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/features/copilot",
    rating: 4.8,
    baseCount: 10,
    videoUrl: "https://github.githubassets.com/assets/features-breakout-agent-mode-4425fdb3e918.mp4" // 여기에 실제 embed 링크
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
    name: "ChatGPT",
    description: "OpenAI의 대화형 AI 모델. 코드 작성 및 디버깅에 유용.",
    image: "https://openai.com/favicon.ico",
    link: "https://openai.com/chatgpt",
    rating: 4.3,
    baseCount: 10,  
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3"
  },
  {
    id: 4,
    name: "NotebookLM",
    description: "Google의 AI 기반 코드 작성 도구. 실시간 협업 가능.",
    image: "https://notebooklm.google/favicon.ico",
    link: "https://notebooklm.google/",
    rating: 4.8,
    baseCount: 10,
    videoUrl: "https://notebooklm.google/_/static/v4/videos/upload_your_sources.mp4" // 영상 없는 경우는 빈 문자열
  },
  {
    id: 5,
    name: "Replit",
    description: "AI 기반 코드 작성 및 디버깅 도구. 실시간 협업 가능.",
    image: "https://play-lh.googleusercontent.com/baV9RL2D0iV8JkTtCzSxeLf6XxCJMWQYbyXMqyQfc0OQGtjkCyUenUbLb5tefYfMxfU",
    link: "https://replit.com/",
    rating: 3.4,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5"
  },
  {
    id: 6,
    name: "Windsurf",
    description: "무료 사용 가능한 Copilot 대안. 빠른 자동 완성과 실시간 추천 제공.(구 Codeium)",
    image: "https://windsurf.com/logo/windsurf_teal_logo.svg",
    link: "https://windsurf.com/",
    rating: 3.6,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6"
  },
  {
    id: 7,
    name: "IntelliCode",
    description: "Microsoft의 AI 기반 코드 추천 도구. Visual Studio에서 사용 가능.", 
    image: "https://visualstudio.microsoft.com/favicon.ico",
    link: "https://visualstudio.microsoft.com/services/intellicode/",
    rating: 4.2,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_7"
  },
  {
    id: 8,
    name: "DeepCode",
    description: "AI 기반 코드 리뷰 및 버그 탐지 도구.",
    image: "https://deepcode.ai/favicon.ico",
    link: "https://www.deepcode.ai/",
    rating: 4.1,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_8"
  },
  {
    id: 9,
    name: "Codex",
    description: "OpenAI의 AI 모델을 활용한 코드 생성 도구.",
    image: "https://openai.com/favicon.ico",
    link: "https://openai.com/research/codex",
    rating: 4.0,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_9"
  },
  {
    id: 10,
    name: "Tabnine",
    description: "AI 기반 코드 자동완성 툴. 다양한 IDE 지원.",
    image: "https://tabnine.com/favicon.ico",
    link: "https://www.tabnine.com/",
    rating: 3.9,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_10"
  }
];

// index.html - 상위 3개 도구 카드 출력
const indexToolList = document.getElementById("index-tool-list");
if (indexToolList) {
  const featuredTools = tools.slice(0, 3); // 상위 3개 도구만 표시
  featuredTools.forEach(tool => {
    indexToolList.innerHTML += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${tool.image}" class="card-img-top p-4" alt="${tool.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.description}</p>
            <p class="text-warning">⭐ ${tool.rating.toFixed(1)} / 5</p>
            <a href="tool.html?id=${tool.id}" class="btn btn-primary mt-auto">자세히 보기</a>
          </div>
        </div>
      </div>
    `;
  });
}

// catalog.html - 전체 도구 카드 출력
const catalogToolList = document.getElementById("catalog-list");
if (catalogToolList) {
  tools.forEach(tool => {
    catalogToolList.innerHTML += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${tool.image}" class="card-img-top p-4" alt="${tool.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.description}</p>
            <p class="text-warning">⭐ ${tool.rating.toFixed(1)} / 5</p>
            <a href="tool.html?id=${tool.id}" class="btn btn-primary mt-auto">자세히 보기</a>
          </div>
        </div>
      </div>
    `;
  });
}

// tool.html - 상세 + 리뷰
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
      if (tool.videoUrl.includes("youtube.com")) {
        videoEmbed = `
          <div class="video-container text-center my-3">
            <iframe width="100%" height="315" src="${tool.videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
        `;
      } else {
        videoEmbed = `
          <div class="video-container text-center my-3">
            <video controls width="100%">
              <source src="${tool.videoUrl}" type="video/mp4">
              지원되지 않는 영상 형식입니다.
            </video>
          </div>
        `;
      }
    }

    detailSection.innerHTML = `
      <h2>${tool.name}</h2>
      <img src="${tool.image}" alt="${tool.name} 로고" class="my-3"/>
      <p>${tool.description}</p>
      <a href="${tool.link}" target="_blank" class="btn btn-outline-primary mb-3">🔗 공식 사이트 이동</a>
      <p id="avg-rating">⭐ 평균 별점: ${tool.rating.toFixed(1)}</p>
      ${videoEmbed}
    `;
  }

  // 기존 리뷰 로드
  const saved = JSON.parse(localStorage.getItem(`reviews-${toolId}`)) || [];
  saved.forEach(r => addReviewToList(r));

  // 리뷰 폼 제출
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reviewer-name").value;
    const rating = document.getElementById("review-rating").value;
    const content = document.getElementById("review-comment").value;

    const newReview = { name, rating, content };
    saved.push(newReview);
    localStorage.setItem(`reviews-${toolId}`, JSON.stringify(saved));
    addReviewToList(newReview);
    reviewForm.reset();
    updateAverageRating(toolId);
  });

  function addReviewToList(review) {
    const li = document.createElement("li");
    li.className = "list-group-item";
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
      const reviewHTML = `
        <div class="mb-4">
          <h5 class="text-primary">${tool.name}</h5>
          <ul class="list-group">
            ${saved.map(r => `<li class="list-group-item">⭐ ${r.rating} - ${r.content}</li>`).join("")}
          </ul>
        </div>`;
      fullList.innerHTML += reviewHTML;
    }
  });
}

// 별점 계산
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

// 맨 위/아래 버튼
document.getElementById("scroll-top")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("scroll-bottom")?.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// 스크롤 위치 따라 버튼 보이기/숨기기
window.addEventListener("scroll", () => {
  const scrollTopBtn = document.getElementById("scroll-top");
  const scrollBottomBtn = document.getElementById("scroll-bottom");
  const scrolled = window.scrollY;
  const bottomBuffer = 300;
  if (scrollTopBtn) scrollTopBtn.style.display = scrolled > 300 ? "block" : "none";
  if (scrollBottomBtn) {
    scrollBottomBtn.style.display = (scrolled < document.body.scrollHeight - window.innerHeight - bottomBuffer) ? "block" : "none";
  }
});

// 네비게이션 바 스크롤 시 숨기기/보이기
let lastScrollY = window.scrollY;
const navbar = document.getElementById('main-navbar');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom <= 0) {
    // 헤더가 안 보이면 nav를 fixed로 상단에 고정
    navbar.classList.add('navbar-fixed');
    if (window.scrollY > lastScrollY) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
  } else {
    // 헤더가 보이면 nav를 일반 흐름으로 (fixed 해제)
    navbar.classList.remove('navbar-fixed');
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});