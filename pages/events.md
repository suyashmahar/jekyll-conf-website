---
title: "Events"
layout: default
categories: "navigation"
order: 9
---


{% 
    assign sortedCurrentEvents = site.pages 
    | sort:"when-happened-epoch" 
    | reverse 
    | where_exp: "item", "item.categories contains 'cur-event'" 
%}

{% if sortedCurrentEvents.size > 0 %}
# Current Events
<ol>
    {% for page in sortedCurrentEvents %}
    <li> {{ page.when-happened-epoch }} |  <a href="{{page.url}}">{{ page.title }}</a></li>
    {% endfor %}
</ol>
{% endif %}

# Upcoming Events

{% 
    assign sortedUpcoming = site.pages 
    | sort:"when-happened-epoch" 
    | reverse 
    | where_exp: "item", "item.categories contains 'future-event'" 
%}

{% if sortedUpcoming.size > 0 %}
<ol>

    {% for page in sortedUpcoming %}
    <li> {{ page.when-happened }} |  <a href="{{page.url}}">{{ page.title }}</a></li>
    {% endfor %}
</ol>

{% else %}
To be announced...

{% endif %}

# Past Events

{% 
    assign sortedPastEvents = site.pages 
    | sort:"when-happened-epoch" 
    | reverse 
    | where_exp: "item", "item.categories contains 'past-event'" 
%}

{% if sortedPastEvents.size > 0 %}
<ol>

    {% for page in sortedPastEvents %}
    <li class="event-header"> 
        {{ page.when-happened }} |  <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
        {% if page.preview-img != nil %}
        <br>
        <a href="{{ page.url | relative_url }}">
          <img class="event-thumbnail-img" src="{{ page.preview-img | relative_url }}" alt="{{page.title}} thumbnail image">
        </a>
        {% endif %}
    </li>
    {% endfor %}
</ol>
{% endif %}
