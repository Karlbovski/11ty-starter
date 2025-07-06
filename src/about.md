---
title: About
summary: 
  I'm the  meta-description in frontmatter. 
  I got super-powers! 
layout: "layouts/home.html"
---

{% block content %}
 <div>
  <h2>You wanna have an easy and happy life with <b>11ty</b>?</h2>
  <h3>Always think at the Eleventy Data Cascade</h3>
  <small>the order of priority for sources of data is (from highest priority to lowest):</small>

  <ol>
    <li><a href="https://www.11ty.dev/docs/data-computed/" rel=noopener target=_blank>Computed Data</a></li>
    <li><a href="https://www.11ty.dev/docs/data-frontmatter/" rel=noopener target=_blank>Front Matter Data in a Template </a></li>
    <li><a href="https://www.11ty.dev/docs/layouts/#front-matter-data-in-layouts" rel=noopener target=_blank>Front Matter Data in Layouts</a></li>
    <li><a href="https://www.11ty.dev/docs/data-template-dir/" rel=noopener target=_blank>Template Data Files</a></li>
    <li> <a href="https://www.11ty.dev/docs/data-template-dir/" rel=noopener target=_blank>Directory Data Files (and ascending Parent Directories)</a></li>
    <li><a href="https://www.11ty.dev/docs/data-global/" rel=noopener target=_blank>Global Data Files</a></li>
    <li><a href="https://www.11ty.dev/docs/data-global-custom/" rel=noopener target=_blank>Custom Global Data</a></li>
  </ol>
 </div>
{% endblock %}