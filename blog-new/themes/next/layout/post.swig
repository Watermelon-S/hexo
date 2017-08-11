{% extends '_layout.swig' %}
{% import '_macro/post.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}


{% block title %} {{ page.title }} | {{ config.title }} {% endblock %}

{% block page_class %}page-post-detail{% endblock %}

{% block content %}
  {% if theme.toc.enable and toc(page.content).length > 1 %}
    <!--noindex-->
      <section class="post-toc-wrap motion-element sidebar-panel sidebar-panel-active">
        <div class="post-toc">

          {% if page.toc_number === undefined %}
            {% set toc = toc(page.content, { "class": "nav", list_number: theme.toc.number }) %}
          {% else %}
            {% set toc = toc(page.content, { "class": "nav", list_number: page.toc_number }) %}
          {% endif %}

          {% if toc.length <= 1 %}
            <p class="post-toc-empty">{{ __('post.toc_empty') }}</p>
          {% else %}
            <p><strong>文章目录</strong></p>
            <div class="post-toc-content">{{ toc }}</div>
          {% endif %}

        </div>
      </section>
    <!--/noindex-->
  {% endif %}

  <div id="posts" class="posts-expand">
    {{ post_template.render(page) }}

    <div class="post-spread">
      {% if theme.jiathis %}
        {% include '_partials/share/jiathis.swig' %}
      {% elseif theme.baidushare %}
        {% include '_partials/share/baidushare.swig' %}
      {% elseif theme.add_this_id %}
        {% include '_partials/share/add-this.swig' %}
      {% elseif theme.duoshuo_shortname and theme.duoshuo_share %}
        {% include '_partials/share/duoshuo_share.swig' %}
      {% endif %}
    </div>
  </div>

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(true) }}
{% endblock %}

{% block script_extra %}
{% endblock %}
