<div class="site-meta {% if theme.custom_logo.enabled %}custom-logo{% endif %}">
  {% if theme.custom_logo.image and theme.scheme === 'Muse' %}
    <div class="site-meta-headline">
      <a>
        <img class="custom-logo-image" src="{{ theme.custom_logo.image }}"
             alt="{{ config.title }}"/>
      </a>
    </div>
  {% endif %}

  <div class="custom-logo-site-title">
    <a href="{{ config.root }}"  class="brand" rel="start">
      <span class="logo-line-before"><i></i></span>
      <span class="site-title">{{ config.title }}</span>
      <span class="logo-line-after"><i></i></span>
    </a>
  </div>
  <p class="site-subtitle">{{ config.subtitle }}</p>
</div>

<div class="site-nav-toggle">
  <button>
    <span class="btn-bar"></span>
    <span class="btn-bar"></span>
    <span class="btn-bar"></span>
  </button>
</div>

<nav class="site-nav">
  <!-- {% set hasSearch = theme.swiftype_key || theme.tinysou_Key || config.search %} -->
  {% set hasSearch = theme.swiftype_key || theme.tinysou_Key || config.search || theme.algolia %}

  {% if theme.menu %}
  <nav class="nav">
    <input type="checkbox" class="nav__cb" id="menu-cb" />
    <div class="nav__content">
        <ul id="menu" class="menu nav__items">
          {% for name, path in theme.menu %}
            {% set itemName = name.toLowerCase() %}
            <li class="menu-item menu-item-{{ itemName }} nav__item">
              <a href="{{ url_for(path) }}" rel="section" >
                {% if theme.menu_icons.enable %}
                  <i class="menu-item-icon fa fa-fw fa-{{theme.menu_icons[itemName] | default('question-circle') | lower }}"></i> <br />
                {% endif %}
                {{ __('menu.' + itemName) }}
              </a>
            </li>
          {% endfor %}

          {% if hasSearch %}
            <li class="menu-item menu-item-search nav__item">
              {% if theme.swiftype_key %}
                <a href="javascript:;" class="st-search-show-outputs">
              {% elseif config.search %}
                <a href="javascript:;" class="popup-trigger">
              {% elseif theme.algolia %}
                <a href="javascript:;" class="popup-trigger">
              {% endif %}
                {% if theme.menu_icons.enable %}
                  <i class="menu-item-icon fa fa-search fa-fw"></i> <br />
                {% endif %}
                {{ __('menu.search') }}
              </a>
            </li>
          {% endif %}
        </ul>
      </div>
      <label class="nav__btn" for="menu-cb"><span>一</span></label>
  </nav>
    
  {% endif %}

  {% if hasSearch %}
    <div class="site-search">
      {% include 'search.swig' %}
    </div>
  {% endif %}
</nav>

