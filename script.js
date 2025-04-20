const tools = [
    {
      id: 1,
      name: "GitHub Copilot",
      description: "GPT 기반 코드 자동 완성 도구. VS Code, JetBrains 등에서 사용 가능.",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      link: "https://github.com/features/copilot",
      rating: 4.8,
      baseCount: 10 // 초기 리뷰 수
    },
    {
      id: 2,
      name: "Cursor",
      description: "AI 기반 코드 편집기. 리팩토링, 코드 검색에 탁월.",
      image: "https://www.cursor.so/favicon.ico",
      link: "https://www.cursor.so",
      rating: 4.7,
      baseCount: 5 // 초기 리뷰 수
    },
    {
      id: 3,
      name: "Windsurf",
      description: "무료 사용 가능한 Copilot 대안. 빠른 자동 완성과 실시간 추천 제공.",
      image: "https://windsurf.com/logo/windsurf_teal_logo.svg",
      link: "https://windsurf.com/",
      rating: 4.6,
      baseCount: 3 // 초기 리뷰 수
    }
  ];
  
  // 도구 목록 출력 (index.html)
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
      detailSection.innerHTML = `
        <h2>${tool.name}</h2>
        <img src="${tool.image}" alt="${tool.name} 로고" />
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">🔗 공식 사이트 이동</a>
        <p id="avg-rating">⭐ 평균 별점: ${tool.rating.toFixed(1)}</p>
      `;
    }
  
    // 리뷰 불러오기
    const savedReviews = JSON.parse(localStorage.getItem(`reviews-${toolId}`)) || [];
    savedReviews.forEach(r => addReviewToList(r));
  
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const content = document.getElementById("review-comment").value;
      const rating = document.getElementById("review-rating").value;
      const newReview = { content, rating };
  
      savedReviews.push(newReview);
      localStorage.setItem(`reviews-${toolId}`, JSON.stringify(savedReviews));
      addReviewToList(newReview);
  
      // 리뷰 제출 후 평균 별점 갱신
      updateAverageRating(toolId);
  
      reviewForm.reset();
    });
  
    function addReviewToList(review) {
      const li = document.createElement("li");
      li.textContent = `⭐ ${review.rating}점 - ${review.content}`;
      reviewList.appendChild(li);
    }
  
    // 평균 별점 계산 함수
    function getAverageRating(toolId) {
      const tool = tools.find(t => t.id === toolId);
      const reviews = JSON.parse(localStorage.getItem(`reviews-${toolId}`)) || [];
  
      const totalRating = reviews.reduce((total, review) => total + parseInt(review.rating), 0);
      const totalCount = reviews.length;
  
      const averageRating = totalCount > 0 ? (totalRating / totalCount).toFixed(1) : tool.rating.toFixed(1);
      return averageRating;
    }
  
    // 평균 별점 표시 갱신 함수
    function updateAverageRating(toolId) {
      const avg = getAverageRating(toolId);
      const ratingEl = document.getElementById("avg-rating");
      if (ratingEl) {
        ratingEl.textContent = `⭐ 평균 별점: ${avg}`;
      }
    }
  }
  
  // 전체 리뷰 보기 (reviews.html)
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
  