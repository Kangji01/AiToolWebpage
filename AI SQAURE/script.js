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
