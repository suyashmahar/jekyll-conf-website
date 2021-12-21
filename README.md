# Simple Conf Website
Jekyll template for creating simple conference websites. Based on [Minimal
theme](http://pages-themes.github.io/minimal).

## Usage

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

