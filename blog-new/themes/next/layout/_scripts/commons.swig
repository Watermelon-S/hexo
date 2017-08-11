{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js',
    'src/pjax.js',
    'src/nprogress.js',
    'src/jquery.mCustomScrollbar.concat.min.js',
    'src/mystyle.js'
  ]
%}

{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}
