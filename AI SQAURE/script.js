// tools 배열: 전체 도구 정보 정의 + 카테고리 포함
const tools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "범용형",
    description: "OpenAI가 만든 GPT 언어모델",
    image: "img/chatgpt.png",
    video: "https://www.youtube.com/embed/DQacCB9tDaw",
    link: "https://chat.openai.com/",
    reviews: []
  },
  {
    id: 2,
    name: "Gemini",
    category: "범용형",
    description: "Google의 AI 언어모델",
    image: "img/gemini.png",
    video: "https://www.youtube.com/embed/_fuimO6ErKI",
    link: "https://gemini.google.com/",
    reviews: []
  },
  {
    id: 3,
    name: "Perplexity",
    category: "범용형",
    description: "검색 기반의 AI 답변 시스템",
    image: "img/perplexity.png",
    video: "https://www.youtube.com/embed/pcWUjJFjnLs",
    link: "https://www.perplexity.ai/",
    reviews: []
  },
  {
    id: 4,
    name: "Claude",
    category: "범용형",
    description: "Anthropic이 만든 친화적 AI",
    image: "img/claude.png",
    video: "https://www.youtube.com/embed/LQusVP1-1UU",
    link: "https://claude.ai/",
    reviews: []
  },
  {
    id: 5,
    name: "Notion AI",
    category: "콘텐츠",
    description: "문서 작성과 요약에 강한 생산성 도구",
    image: "img/notion.png",
    video: "https://www.youtube.com/embed/y-kM5kD2nm0?si=llgHb_ewEAURY-bA",
    link: "https://www.notion.so/product/ai",
    reviews: []
  },
  {
    id: 6,
    name: "Copy.ai",
    category: "콘텐츠",
    description: "마케팅용 글, 블로그 콘텐츠 자동 생성",
    image: "img/copy.jpg",
    video: "https://www.youtube.com/embed/cPf251bDKY0?si=CiPEW14DNB5Onhea",
    link: "https://www.copy.ai/",
    reviews: []
  },
  {
    id: 7,
    name: "Jasper",
    category: "콘텐츠",
    description: "SEO 최적화 콘텐츠 제작에 강력",
    image: "img/jasper.png",
    video: "https://youtube.com/embed/1eI8YhziZyg?si=ql0v7POW5K4kqPpR",
    link: "https://www.jasper.ai/",
    reviews: []
  },
  {
    id: 8,
    name: "Midjourney",
    category: "이미지",
    description: "예술 스타일의 고품질 이미지 생성",
    image: "img/midjourney.png",
    video: "https://www.youtube.com/embed/vIh8nu1tcDI",
    link: "https://www.midjourney.com/",
    reviews: []
  },
  {
    id: 9,
    name: "DALL·E",
    category: "이미지",
    description: "텍스트 기반 이미지 생성, OpenAI 제공",
    image: "img/dall_e.png",
    video: "https://www.youtube.com/embed/sqQrN0iZBs0",
    link: "https://openai.com/dall-e",
    reviews: []
  },
  {
    id: 10,
    name: "Leonardo AI",
    category: "이미지",
    description: "게임/캐릭터 아트에 특화된 생성형 도구",
    image: "img/leonardo.png",
    video: "https://www.youtube.com/embed/K2ikNSRqh8E",
    link: "https://leonardo.ai/",
    reviews: []
  },
  {
    id: 11,
    name: "Gamma.app",
    category: "생산성",
    description: "프레젠테이션 자동 제작 플랫폼",
    image: "img/gamma.png",
    video: "https://www.youtube.com/embed/r9VOYJM6nZc",
    link: "https://gamma.app/",
    reviews: []
  },
  {
    id: 12,
    name: "Fireflies.ai",
    category: "생산성",
    description: "회의 음성 자동 기록 및 요약",
    image: "img/fireflies.png",
    video: "https://www.youtube.com/embed/H5fdzoAeLCE",
    link: "https://fireflies.ai/",
    reviews: []
  },
  {
    id: 13,
    name: "SlidesAI",
    category: "생산성",
    description: "Google Slides에서 슬라이드 자동 생성",
    image: "img/Slides.png",
    video: "https://www.youtube.com/embed/Q-ytqYuam5k",
    link: "https://www.slidesai.io/",
    reviews: []
  },
  {
    id: 14,
    name: "Cursor AI",
    category: "코딩",
    description: "AI가 탑재된 VS Code 기반 IDE",
    image: "img/cursor.png",
    video: "https://www.youtube.com/embed/LR04bU_yV5k",
    link: "https://www.cursor.so/",
    reviews: []
  },
  {
    id: 15,
    name: "Codeium",
    category: "코딩",
    description: "코드 자동 완성과 보완 기능 제공",
    image: "img/codium.png",
    video: "https://www.youtube.com/embed/GNe9zTLhnD0",
    link: "https://codeium.com/",
    reviews: []
  },
  {
    id: 16,
    name: "GitHub Copilot",
    category: "코딩",
    description: "GitHub와 OpenAI가 협업한 코드 보조 AI",
    image: "img/copilot.png",
    video: "https://www.youtube.com/embed/SGUCcjHTmGY",
    link: "https://github.com/features/copilot",
    reviews: []
  },
  {
    id: 17,
    name: "ElevenLabs",
    category: "음성",
    description: "자연스러운 AI 음성 합성 도구",
    image: "img/elevenlabs.png",
    video: "https://www.youtube.com/embed/v-EYzZCLF48",
    link: "https://www.elevenlabs.io/",
    reviews: []
  },
  {
    id: 18,
    name: "Voicemod",
    category: "음성",
    description: "실시간 음성 변조 효과 제공",
    image: "img/voicemod.png",
    video: "https://www.youtube.com/embed/i9inJhMTLqg",
    link: "https://www.voicemod.net/",
    reviews: []
  },
  {
    id: 19,
    name: "Descript",
    category: "음성",
    description: "오디오 편집 및 AI 나레이션 생성",
    image: "img/descript.png",
    video: "https://www.youtube.com/embed/Dk1TxDKzb68",
    link: "https://www.descript.com/",
    reviews: []
  },
  {
    id: 20,
    name: "Amazon CodeWhisperer",
    category: "코딩",
    description: "AWS에서 제공하는 AI 코딩 추천 도구",
    image: "img/aws.png",
    video: "https://www.youtube.com/embed/rHNMfOK8pWI",
    link: "https://aws.amazon.com/codewhisperer/",
    reviews: []
  },
  {
    id: 21,
    name: "NotebookLM",
    category: "코딩",
    description: "사용자 문서를 기반으로 답변하는 Google의 AI 비서",
    image: "img/notebooklm.png",
    video: "https://www.youtube.com/embed/6dHmu1GALmA",
    link: "https://notebooklm.google/",
    reviews: []
  }
];

// 카테고리별 섹션 ID 매핑
const categoryMap = {
  "범용형": "general-list",
  "콘텐츠": "writing-list",
  "이미지": "image-list",
  "생산성": "productivity-list",
  "코딩": "coding-list",
  "음성": "voice-list"
};

// 각 카테고리 섹션에 카드 삽입 및 초기화 함수
function initializeCards() {
  Object.keys(categoryMap).forEach(category => {
    const container = document.getElementById(categoryMap[category]);
    if (container) {
      container.innerHTML = ''; 
      tools.filter(tool => tool.category === category).forEach(tool => {
        container.innerHTML += `
          <div class="card" data-tool-id="${tool.id}" data-video="${tool.video}" data-link="${tool.link}">
              <h3><img src="${tool.image}" class="web_logo" alt="${tool.name} 로고"/>${tool.name}</h3>
              <p>${tool.description}</p>
              <div class="average-stars" id="avg-stars-${tool.id}"></div>
          </div>
        `;
      });
    }
  });

  tools.forEach(tool => {
    const avgDiv = document.getElementById(`avg-stars-${tool.id}`);
    if (avgDiv) {
      if (tool.reviews && tool.reviews.length > 0) {
        const avg = tool.reviews.reduce((sum, r) => sum + r.rating, 0) / tool.reviews.length;
        const rounded = Math.round(avg);
        avgDiv.innerHTML = '★'.repeat(rounded) + '☆'.repeat(5 - rounded) + ` (${avg.toFixed(1)})`;
      } else {
        avgDiv.innerHTML = '⭐ 평균 없음';
      }
    }
  });

  // 새롭게 생성된 카드들에 이벤트 리스너를 다시 연결
  attachCardEventListeners();
}

// 카드에 모달 이벤트 리스너를 연결
function attachCardEventListeners() {
  document.querySelectorAll(".card").forEach(card => {
    if (!card.dataset.listenerAttached) {
      card.addEventListener("click", () => {
        const toolId = parseInt(card.dataset.toolId);
        const tool = tools.find(t => t.id === toolId);

        if (tool) {
          currentToolId = tool.id;
          modalTitle.textContent = tool.name;
          modalDesc.textContent = tool.description;
          modalVideo.src = tool.video;
          modalLink.href = tool.link;

          selectedRating = 0;
          Array.from(stars.children).forEach(star => star.classList.remove("selected"));
          reviewTextarea.value = "";
          displayReviews(currentToolId);
          modal.style.display = "block";
        }
      });
      card.dataset.listenerAttached = "true";
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeCards);

// 검색 기능
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(keyword) ? "block" : "none";
    });
  });
}

// 모달 기능
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalVideo = document.getElementById("modal-video");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close-btn");

// 리뷰 기능능
const stars = document.querySelector(".stars");
const reviewTextarea = document.getElementById("reviewText");
const submitReviewBtn = document.getElementById("submitReview");
const reviewsList = document.getElementById("reviewsList");
const averageRatingDisplay = document.getElementById("averageRating");

let currentToolId = null;
let selectedRating = 0; 

function displayReviews(toolId) {
  reviewsList.innerHTML = "";
  const tool = tools.find(t => t.id === toolId);
  if (tool && tool.reviews.length > 0) {
    const sortedReviews = [...tool.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

    const avg = tool.reviews.reduce((sum, r) => sum + r.rating, 0) / tool.reviews.length;
    averageRatingDisplay.textContent = `평균 별점: ${avg.toFixed(1)} / 5 (${tool.reviews.length})`;

    sortedReviews.forEach(review => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `
        <div class="review-rating">${'★'.repeat(review.rating)}</div>
        <p class="review-text">${review.text}</p>
        <p class="review-date">${new Date(review.date).toLocaleDateString()}</p>
      `;
      reviewsList.appendChild(reviewItem);
    });
  } else {
    averageRatingDisplay.textContent = "평균 별점: 아직 없음";
    reviewsList.innerHTML = "<p>아직 리뷰가 없습니다. 첫 리뷰를 작성해주세요!</p>";
  }
}

if (modal && modalTitle && modalDesc && modalVideo && modalLink && closeBtn && stars && reviewTextarea && submitReviewBtn && reviewsList) {
  closeBtn.onclick = () => {
    modal.style.display = "none";
    modalVideo.src = "";
    currentToolId = null;
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalVideo.src = "";
      currentToolId = null;
  };

  stars.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("star")) {
      const value = parseInt(e.target.dataset.value);
      Array.from(stars.children).forEach(star => {
        star.classList.toggle("selected", parseInt(star.dataset.value) <= value);
      });
    }
  });

  stars.addEventListener("mouseout", function() {
    Array.from(stars.children).forEach(star => {
      star.classList.toggle("selected", parseInt(star.dataset.value) <= selectedRating);
    });
  });

  stars.addEventListener("click", function(e) {
    if (e.target.classList.contains("star")) {
      selectedRating = parseInt(e.target.dataset.value);
      Array.from(stars.children).forEach(star => {
        star.classList.toggle("selected", parseInt(star.dataset.value) <= selectedRating);
      });
    }
  });

  // 리뷰 제출 기능
  submitReviewBtn.addEventListener("click", () => {
    const reviewText = reviewTextarea.value.trim();
    if (currentToolId && selectedRating > 0 && reviewText !== "") {
      const tool = tools.find(t => t.id === currentToolId);
      if (tool) {
        const newReview = {
          rating: selectedRating,
          text: reviewText,
          date: new Date().toISOString()
        };
        tool.reviews.push(newReview);
        displayReviews(currentToolId);

        // 카드의 평균 별점도 업데이트
        const avgDiv = document.getElementById(`avg-stars-${tool.id}`);
        if (avgDiv) {
          const avg = tool.reviews.reduce((sum, r) => sum + r.rating, 0) / tool.reviews.length;
          const rounded = Math.round(avg);
          avgDiv.innerHTML = '★'.repeat(rounded) + '☆'.repeat(5 - rounded) + ` (${avg.toFixed(1)})`;
        }

        // 입력창 초기화
        reviewTextarea.value = "";
        selectedRating = 0;
        Array.from(stars.children).forEach(star => star.classList.remove("selected"));
        alert("리뷰가 성공적으로 제출되었습니다!");
      }
    } else {
      alert("별점과 리뷰 내용을 모두 입력해주세요.");
    }
  });
}}