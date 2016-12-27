{%
  set js_algolia = [
    'src/algolia.js'
  ]
%}
{% for common in js_algolia %}

  {# S: Include Algolia instantsearch.js library #}
  {% set algolia_instant_css = url_for('//cdn.bootcss.com/instantsearch.js/1.5.1/instantsearch.css') %}
  {% if theme.vendors.algolia_instant_css %}
    {% set algolia_instant_css = theme.vendors.algolia_instant_css %}
  {% endif %}
  <link rel="stylesheet" href="{{ algolia_instant_css }}">

  {% set algolia_instant_js = url_for('//cdn.bootcss.com/instantsearch.js/1.5.1/instantsearch.js') %}
  {% if theme.vendors.algolia_instant_js %}
    {% set algolia_instant_js = theme.vendors.algolia_instant_js %}
  {% endif %}
  <script src="{{ algolia_instant_js }}"></script>
  {# E: Include Algolia instantsearch.js library #}

  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}