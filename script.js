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
    videoUrl: "https://www.cursor.com/assets/landing/tab-video-dark.mp4"
  },
  {
    id: 3,
    name: "ChatGPT",
    description: "OpenAI의 대화형 AI 모델. 코드 작성 및 디버깅에 유용.",
    image: "https://openai.com/favicon.ico",
    link: "https://openai.com/chatgpt",
    rating: 4.3,
    baseCount: 10,  
    videoUrl: "https://www.youtube.com/embed?v=NO7Uo2ii1Sw&list=PLOXw6I10VTv8aE6_cu4b9J_VaraH1kYMo&index=4"
  },
  {
    id: 4,
    name: "NotebookLM",
    description: "Google의 AI 기반 코드 작성 도구. 실시간 협업 가능.",
    image: "data:image/png;base64,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",
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
    videoUrl: "https://www.youtube.com/embed/aWBiZc5XKJM?si=HabhmyfLboHsqCWo"
  },
  {
    id: 6,
    name: "Windsurf",
    description: "무료 사용 가능한 Copilot 대안. 빠른 자동 완성과 실시간 추천 제공.(구 Codeium)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxcRvAExynNfMLF25EyLbUccnHUlCsisKxA&s",
    link: "https://windsurf.com/",
    rating: 3.6,
    baseCount: 10,
    videoUrl: "https://exafunction.github.io//public/videos/cascade/cascade_context_awareness.mp4"
  },
  {
    id: 7,
    name: "IntelliCode",
    description: "Microsoft의 AI 기반 코드 추천 도구. Visual Studio에서 사용 가능.", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBj7R8OZ53lgNqbbOal57vixotMemqi4bFg&s",
    link: "https://visualstudio.microsoft.com/services/intellicode/",
    rating: 3.2,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/aEsrpLa_OMs?si=_qFIKnNdTi7upoFm"
  },
  {
    id: 8,
    name: "DeepCode",
    description: "AI 기반 코드 리뷰 및 버그 탐지 도구.",
    image: "https://www.softwidesec.com/wp-content/uploads/2024/06/o9Ha4bVC_400x400-300x300.jpg",
    link: "https://www.deepcode.ai/",
    rating: 4.1,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/PctccHRjm_w?si=_Bg8iGYBURPrsc28"
  },
  {
    id: 9,
    name: "Codex",
    description: "OpenAI의 코드 생성 도구. GitHub 저장소와 연결되어 코드베이스를 기반한 지능형 도구",
    image: "https://conserto.pro/wp-content/uploads/2022/11/microsoftteams-image-56.png",
    link: "https://openai.com/codex/",
    rating: 4.0,
    baseCount: 10,
    videoUrl: "https://www.youtube.com/embed/FUq9qRwrDrI?si=eyxovO66OndcUTrK"
  },
  {
    id: 10,
    name: "Tabnine",
    description: "AI 기반 코드 자동완성 툴. 다양한 IDE 지원.",
    image: "https://tabnine.com/favicon.ico",
    link: "https://www.tabnine.com/",
    rating: 3.9,
    baseCount: 10,
    videoUrl: "https://d3monxcmeifzlf.cloudfront.net/wp-content/uploads/2025/03/Onboarding-Planning-VEED-1.mp4"
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
        // YouTube 자동재생: autoplay=1, mute=1(자동재생 정책)
        const autoUrl = tool.videoUrl.includes("?")
          ? tool.videoUrl + "&autoplay=1&mute=1"
          : tool.videoUrl + "?autoplay=1&mute=1";
        videoEmbed = `
          <div class="video-container text-center my-3">
            <iframe width="100%" height="315" src="${tool.videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
        `;
      } else {
       // 일반 비디오 자동재생: autoplay, muted, playsinline 속성 추가
        videoEmbed = `
          <div class="video-container text-center my-3">
            <video controls autoplay muted playsinline width="100%">
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