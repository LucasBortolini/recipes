---
layout: default
title: Beba Água
permalink: /home
sections:
  - banner.html
  - cards.md
  - fourth.html
  - blog.html
  - sixth.html
---

{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}