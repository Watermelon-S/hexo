{% extends '_layout.swig' %}
{% import '_macro/post.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %} {{ config.title }} {% endblock %}

{% block page_class %}
  {% if is_home() %} page-home {% endif %}
{% endblock %}

{% block content %}
	<div id="home-sign">
		<div class="sign-left">123</div>
		<div class="sign-right">
			<img src="/images/test3.jpg" alt="图片"/>
		</div>
	</div>
	
  {% include '_partials/pagination.swig' %}
{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}
