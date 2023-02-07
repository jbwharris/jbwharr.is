---
title: "jbwharr.is blog"
layout: "homepage.njk"
homepage: true
eleventyNavigation:
key: Blog
icon: rss
order: 1
---
{% for post in collections.posts %}
<div class="col-lg-4 col-sm-6 mb-3">
        <div class="card">
        <img class="card-img-top thumbnail-preview" src="{{ post.data.thumbnail | url }}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ post.data.title }}</h5>
            <p class="card-text">{{ post.data.description }}</p>
            <a href="{{ post.url | url }}" class="btn btn-primary text-light">Read More</a>
        </div>
    </div>
</div>
{% endfor %}