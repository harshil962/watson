if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("./sw.js"),
  );
}
let totalSeconds = 55 * 60 * 60 + 17 * 60 + 36;

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );

  if (totalSeconds > 0) {
    totalSeconds--;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Timer
  updateTimer();
  setInterval(updateTimer, 1000);

  // ========== Hero ==========
  const heroSwiper = new Swiper(".hero_swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
  });

  // Mobile carousels add a 16px inset after the last slide; desktop needs none.
  // ========== Product Carousel ==========
  const productSwiper = new Swiper(".crousel_swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: ".crousel-next",
      prevEl: ".crousel-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
    },
  });

  // ========== Flash Sale ==========
  const flashSaleSwiper = new Swiper(".flashSaleSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: ".flash-next",
      prevEl: ".flash-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
    },
  });

  // ========== Best Seller ==========
  const bestSwiper = new Swiper(".bestSwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: ".best-next",
      prevEl: ".best-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        spaceBetween: 12,
        slidesOffsetAfter: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 16,
        slidesOffsetAfter: 0,
      },
    },
  });

  // ========== Category ==========
  const categorySwiper = new Swiper(".category_swiper", {
    slidesPerView: "auto",
    spaceBetween: 48,
    grabCursor: true,
    navigation: {
      nextEl: ".category-next",
      prevEl: ".category-prev",
    },
    breakpoints: {
      0: { slidesPerView: 3.5, spaceBetween: 16, slidesOffsetAfter: 16 },
      376: {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 16,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesOffsetAfter: 16,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 48,
        slidesOffsetAfter: 0,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 48,
        slidesOffsetAfter: 0,
      },
    },
  });

  // ========== Trending ==========
  const trendingSwiper = new Swiper(".trending_swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: ".trending-next",
      prevEl: ".trending-prev",
    },
    breakpoints: {
      0: { slidesPerView: 2.5, spaceBetween: 8, slidesOffsetAfter: 16 },
      768: { slidesPerView: 4.5, spaceBetween: 24, slidesOffsetAfter: 0 },
    },
  });

  // ========== Brands ==========
  const brandsSwiper = new Swiper(".brands_swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: ".brands-next",
      prevEl: ".brands-prev",
    },
    breakpoints: {
      0: { slidesPerView: 2.5, spaceBetween: 8, slidesOffsetAfter: 16 },
      768: { slidesPerView: 4.5, spaceBetween: 24, slidesOffsetAfter: 0 },
    },
  });
});

function changeActive(button) {
  const currentItem = button.parentElement;
  const faqItems = document.querySelectorAll(".faq_item");

  faqItems.forEach((item) => {
    if (item !== currentItem) {
      item.classList.remove("active");
    }
  });

  currentItem.classList.toggle("active");
}
