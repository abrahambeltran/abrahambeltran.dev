document.addEventListener("DOMContentLoaded", function() {
    'use strict';
  
    var html = document.querySelector('html'),
      menuOpenIcon = document.querySelector(".icon__menu"),
      menuCloseIcon = document.querySelector(".nav__icon-close"),
      menuList = document.querySelector(".main-nav"),
      searchOpenIcon = document.querySelector(".icon__search"),
      searchCloseIcon = document.querySelector(".search__close"),
      searchInput = document.querySelector(".search__text"),
      search = document.querySelector(".search"),
      searchBox = document.querySelector(".search__box"),
      toggleTheme = document.querySelector(".toggle-theme"),
      btnScrollToTop = document.querySelector(".top");
  
  
    /* =======================================================
    // Menu + Search + Theme Switcher
    ======================================================= */
    menuOpenIcon.addEventListener("click", () => {
      menuOpen();
    });
  
    menuCloseIcon.addEventListener("click", () => {
      menuClose();
    });
  
    function menuOpen() {
      menuList.classList.add("is-open");
    }
    
    function menuClose() {
      menuList.classList.remove("is-open");
    }
  
    searchOpenIcon.addEventListener("click", () => {
      searchOpen();
    });
  
    searchCloseIcon.addEventListener("click", () => {
      searchClose();
    });
  
    function searchOpen() {
      search.classList.add("is-visible");
      setTimeout(function () {
        searchInput.focus();
      }, 250);
    }
  
    function searchClose() {
      search.classList.remove("is-visible");
    }
  
    searchBox.addEventListener("keydown", function(event) {
      if (event.target == this || event.keyCode == 27) {
        search.classList.remove('is-visible');
      }
    });
  
    if (toggleTheme) {
      toggleTheme.addEventListener("click", () => {
        darkMode();
      });
    };
  
  
    // Theme Switcher
    function darkMode() {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        localStorage.setItem("theme", "light");
        document.documentElement.removeAttribute("dark");
        document.documentElement.setAttribute("light", "");
      } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        localStorage.setItem("theme", "dark");
        document.documentElement.removeAttribute("light");
        document.documentElement.setAttribute("dark", "");
      }
    }
});