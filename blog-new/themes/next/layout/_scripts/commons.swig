{%
  set js_commons = [
    'src/utils.js',
    'src/motion.js',
  	'src/nav.js',
  	'src/effects/masonry.pkgd.min.js',
  	'src/effects/imagesloaded.js',
  	'src/effects/classie.js',
  	'src/effects/AnimOnScroll.js',
  	'src/effects/modernizr.custom.js',
    'src/pjax.js',
    'src/nprogress.js',
    'src/jquery.mCustomScrollbar.concat.min.js',
    'src/mystyle.js'
  ]
%}

{% for common in js_commons %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/{{ common }}?v={{ theme.version }}"></script>
{% endfor %}
