---
layout: blog
title: Blog
description: Articles and insights from Redwood Lane on Salesforce automation, development, consulting, and more.
keywords: Salesforce, Blog, Admin Tips, Developer Insights, Automation, CRM, Redwood Lane
image: /images/global/RL-Sharing.webp
pagination:
  enabled: true
  collection: posts
  per_page: 5
  permalink: /blog/page/:num/
---
<div class="hero">
    <img 
        src="{{ '/images/blog/rl-hero-blog.webp' | relative_url }}" 
        srcset="
            {{ '/images/blog/rl-hero-blog-small.webp' | relative_url }} 480w,
            {{ '/images/blog/rl-hero-blog-medium.webp' | relative_url }} 768w,
            {{ '/images/blog/rl-hero-blog.webp' | relative_url }} 1920w
        "
        sizes="100vw" 
        alt="Redwood Lane Blog" 
        class="hero-img">
    <div class="hero-text">
        <div class="hero-content">
            <h1>Welcome to the Blog</h1>
            <p>Advice to help businesses automate, integrate, and scale</p>
            <a href="{{ '/contact/' | relative_url }}" class="cta-button">Get in Touch</a>
        </div>
    </div>
</div>
<h1>Redwood Lane Blog</h1>
<div class="blog-wrapper">
<div class="blog-list">
  {% for post in paginator.posts %}
    <article class="post-card">
      <div class="post-thumbnail">
        {% if post.hero_image %}
          <a href="{{ post.url | relative_url }}">
            <img src="{{ post.hero_image | relative_url }}" alt="{{ post.title }} thumbnail">
          </a>
        {% endif %}
      </div>
      <div class="post-content">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
      </div>
    </article>
  {% endfor %}
</div>
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">← Previous</a>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <strong>{{ page }}</strong>
    {% else %}
      <a href="{{ paginator.paginate_path | replace: ':num', page | relative_url }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Next →</a>
  {% endif %}
</div>
</div>
