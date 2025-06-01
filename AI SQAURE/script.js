// 모달 요소
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".close-btn");

// 카드 클릭 시 모달 열기
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;
    const videoURL = card.dataset.video;
    const link = card.querySelector("a");
    const linkURL = link ? link.href : "#";

    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalVideo.src = videoURL;

    // 웹사이트 링크가 있을 경우에만 모달에 버튼 추가
    let existingLink = document.getElementById("modal-link");
    if (!existingLink) {
      existingLink = document.createElement("a");
      existingLink.id = "modal-link";
      existingLink.className = "visit-button";
      existingLink.target = "_blank";
      existingLink.textContent = "🌐 공식 웹사이트 바로가기";
      modal.querySelector(".modal-content").appendChild(existingLink);
    }
    existingLink.href = linkURL;

    modal.style.display = "block";
  });
});

// 모달 닫기
closeBtn.onclick = () => {
  modal.style.display = "none";
  modalVideo.src = "";
};

// 바깥 클릭 시 닫기
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
};

// 검색 필터 기능
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(keyword) ? "block" : "none";
  });
});

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