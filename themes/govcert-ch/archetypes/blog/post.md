---
title: "{{ replace .Name "-" " " | title }}"
author: GovCERT.ch
draft: true
dateadded: {{ .Date }} 
lastmod: null 
date: {{ .Date }} 
---

## Headings
**Important**: Start headings at level ``##``, as the top most level is used by the title of the blogpost.

You can link to [content like this](https://www.example.com). Or you can use [^1]

[^1]: [The Site of Example.com](https://www.example.com)


To greate a grey highlight box, do

<div class="well">

This is **in a grey box**. IMPORTANT: You need to have an empty line before and after the markdown.

</div>

### Subheading

All content, including images, should be placed inside the ``assets`` subfolder. This way, all content for the blog post lives inside the folder for the blog post and can easily be transfered. 

You can [link to content](https://www.google.ch). To add images, use:

![Alternate Text](assets/image.png)

To add images that can be "clicked to enlarge", use

[![large](assets/image.png)](assets/image_huge.png)

(You can also use the same image for the inline and enlarged display.)

You can add tables:

| Col 1 | Col 2 |
| ----- | ----- |
| 1     | 2     |
| 3     | 4     |

Or description lists:

link
: go to

compile
: my

### Code Listings
You can list code as follows

```
for x in range(10):
    print(x)
```

You can also use Code highlighting

```Go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

