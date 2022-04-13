---
layout: default
title: Beba Água
permalink: /home
sections:
  - banner.html
  - cards.md
  - fifth.html
  - blog.html
  - seventh.html
---

{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}