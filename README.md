# Simple Conf Website
Jekyll template for creating simple conference websites. Based on [Minimal
theme](http://pages-themes.github.io/minimal).

## Usage

### Creating a banner
Write the text for the banner between the following tags:  
```yml
{% include start-banner.html %}

<!-- Banner text here -->

{% include end-banner.html %}
```

**Note:** Text inside a banner needs to be formatted using HTML (e.g., `<a
href="">...</a>` for links.)  

### Creating multi timezone event link
Create a new `<div></div>` element with the unix timestamps:

```html
<div class="time-fmt-local" data-start="1652374800" data-duration="3600" data-show-timezone-link="true"></div>
```

Fields:
1. `data-start`: UNIX timestamp when the event starts  
2. `data-duration`: Event length in seconds  
3. `data-show-timezone-link`: Bool to toggle dataandtime.com link  


### Creating an embedded YouTube Player

Create an embedded YT player with width 420px and 16:9 aspect ratio using the following tags:  

```yml
{% include start-embedded-yt.html %}
https://www.youtube.com/embed/j5dCWp3EfOM
{% include end-embedded-yt.html %}
```

### Creating a new event
Jekyll automatically collects events from the `pages/events` directory and
organizes them into future, past and current events.

To create a new event, create a new markdown file under `pages/events` with the
following content:

```yml
---
title: Event's title
layout: default
categories: past-event
when-happened: Some date here
when-happened-epoch: 1640075647 <!-- UNIX epoch, used for sorting -->
preview-img: assets/img/calm-kickoff/yt_thumbnail.jpg <!-- Preview image for events page listing -->
---

<!-- Markdown content for the event here -->
```

Each event should have only one of the following `categories` tag:  
1. `past-event`: Listed under "Past Event"  
2. `cur-event`: Listed under "Current Events"  
3. `future-event`: Listed under "Upcoming Events"  

### Creating new tab page (navigation item)
1. Create a new markdown file in `pages/` directory that starts with the
   following content:
```yml
---
title: "Page title here"
layout: default
categories: "navigation"
order: 4
---
```
   
2. Make sure the `categories` field is set to navigation. Use the `order` field
   to set the relative order of the navigation items.



## Customizing

### Configuration variables

Minimal will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]
```

Additionally, you may choose to set the following optional variables:

```yml
logo: [Location of the logo]
show_downloads: ["true" or "false" to indicate whether to provide a download URL]
google_analytics: [Your Google Analytics tracking ID]
```

