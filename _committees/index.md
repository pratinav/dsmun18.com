---
layout: notice
---

<div id="committees">
    <h1>Committees</h1>
    <div class="grid">
    {% for committee in site.committees_list %}
      <a href="/committees/{{ committee }}"><div class="grid-item"></div></a>
    {% endfor %}
    </div>
</div>
