{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js',
    'src/wave-canvas.js',
    'src/jquery-pjax.js'
  ]
%}

{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}
