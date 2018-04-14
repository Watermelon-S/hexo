<!doctype html>

{% set html_class = 'theme-next ' + theme.scheme %}
{% if theme.use_motion %}
  {% set html_class = html_class + ' use-motion' %}
{% endif %}

<html class="{{ html_class | lower }}" lang="{{ config.language }}">
<head>
  {% include '_partials/head.swig' %}
  <title>{% block title %}{% endblock %}</title>
</head>

<body itemscope itemtype="http://schema.org/WebPage" lang="{{ page.lang || page.language || config.language }}">

  {% include '_third-party/analytics/index.swig' %}

  {% set container_class = " " %}
  {% if theme.sidebar.position %}
    {% set container_class = container_class + 'sidebar-position-' + theme.sidebar.position %}
  {% endif %}

  <div class="{{ container_class }} {% block page_class %}{% endblock %} ">
    <div class="headband"></div>
    <!-- header -->
    <header id="header" itemscope itemtype="http://schema.org/WPHeader" role="header">
      <div class="container"> {%- include '_partials/header.swig' %} </div>
      {% if theme.home_banner.enable %}
          <div class="header-bgimg">
             <img src="{{ theme.home_banner.default }}">
          </div>
      {% endif %}
    </header>
    <!-- header -->
    <!-- main -->
    <main role="main-inner-wrapper" class="container">
        <div id="content" class="content">
            {% block content %}{% endblock %}
        </div>
    </main>
    <!-- main -->
    <!-- footer -->
    <footer role="footer">
        {% include '_partials/footer.swig' %}
        {% include '_third-party/analytics/busuanzi-counter.swig' %}
        {% block footer %}{% endblock %}
    </footer>
    {% if not theme.sidebar.b2t %}
      <button class="back-to-top">
        <i class="fa fa-arrow-up"></i>
        {% if theme.sidebar.scrollpercent %}
          <span id="scrollpercent"><span>0</span>%</span>
        {% endif %}
      </button>
    {% endif %}
    <!-- footer -->
  </div>

  {% include '_scripts/vendors.swig' %}
  {% include '_third-party/comments/index.swig' %}
  {% include '_scripts/commons.swig' %}

  {% set scheme_script = '_scripts/schemes/' + theme.scheme | lower + '.swig' %}
  {% include scheme_script %}

  {% include '_scripts/boostrap.swig' %}

  {% block script_extra %}{% endblock %}

  {% include '_third-party/search/index.swig' %}
  {% include '_third-party/analytics/lean-analytics.swig' %}
  {% include '_third-party/seo/baidu-push.swig' %}
  {% include '_third-party/mathjax.swig' %}
  {% include '_third-party/exturl.swig' %}
</body>
</html>
