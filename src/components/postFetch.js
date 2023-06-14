const blogPosts = [
    "post1.md",
    "post2.md",
    // Add more Markdown file paths as needed
  ];
  
  function fetchBlogPosts() {
    blogPosts.forEach((post) => {
      fetch(post)
        .then((response) => response.text())
        .then((markdownContent) => {
          const htmlContent = marked(markdownContent); // Use a Markdown library of your choice
          renderBlogPost(htmlContent);
        })
        .catch((error) => console.log(error));
    });
  }
  
  function renderBlogPost(htmlContent) {
    const contentElement = document.getElementById("content");
    const article = document.createElement("article");
    article.innerHTML = htmlContent;
    contentElement.appendChild(article);
  }
  
  fetchBlogPosts();