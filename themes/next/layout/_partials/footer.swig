<!-- logo -->
    <h1 class="hide">
        <a href="/" title="SouthVeil" {% if theme.pjax %} data-pjax {% endif %}><img src="{{ theme.custom_logo.image }}" title="SouthVeil" alt="SouthVeil"/></a>
    </h1>
<!-- logo -->
<div class="links-of-author motion-element">
  
</div>
  {% if theme.social %}
    <ul role="social-icons">
      {% for name, link in theme.social %}
        <li>
          <a href="{{ link }}" target="_blank" title="{{ name }}">
            <i class="fa fa-{{ theme.social_icons[name] | default('globe') | lower }}" aria-hidden="true"></i>
          </a>
        </li>
      {% endfor %}
    </ul>
  {% endif %}

<p class="copy-right">
    {% set current = date(Date.now(), "YYYY") %}
    &copy; {% if theme.since and theme.since != current %} {{ theme.since }} - {% endif %}
    <span itemprop="copyrightYear">{{ current }}</span>
    <span class="author" itemprop="copyrightHolder">{{ config.author }}</span>..All rights Resved
    
</p>
<p class="copy-right">
    Hosted by <a href="https://pages.coding.me">Coding Pages</a>
</p>
{% if theme.copyright %}
  <div class="copy-right">
    <div class="powered-by">
      {{ __('footer.powered', '<a class="theme-link" href="https://hexo.io">Hexo</a>') }}
    </div>

    <div class="theme-info">
      {{ __('footer.theme') }} -
      <a class="theme-link" href="https://github.com/iissnan/hexo-theme-next">
        NexT.{{ theme.scheme }}
      </a>
    </div>
  </div>
{% endif %}



