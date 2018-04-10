{% extends '_layout.swig' %}
{% import '_macro/post.swig' as post_template %}
{% import '_macro/sidebar.swig' as sidebar_template %}

{% block title %} {{ config.title }} {% endblock %}

{% block page_class %}
  {% if is_home() %} page-home {% endif %}
{% endblock %}

{% block content %}
	<section id="posts" class="posts-expand">
	<div class="row">
        <ul class="grid-lod effect-2" id="grid">
        	<li class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
        		<article role="pge-title-content" class="blog-header">

                	<header>

                    	<h2><span>News</span> Updates from studio</h2>

                    </header>

                    <p>Get all information about our studio from latest news posts & updates page.</p>

                </article>
        	</li>
        	{% for post in page.posts %}
        		<li class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">{{ post_template.render(post, true) }}</li>
		    {% endfor %}
        </ul>
    </div>

  	</section>
  {% include '_partials/pagination.swig' %}
{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(false) }}
{% endblock %}
