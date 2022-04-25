---
layout: default
title: Receitas do Dia
permalink: /home
sections:
  - banner.html
  - cards.md
  - fourth.html
  - sixth.html
---

{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}