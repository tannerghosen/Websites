# Paridaey Website

# Summary:
## What is this website?
This is a Minecraft gaming community website I created for a friend of mine. It provided the IPs for the servers, with the rest of the
content-filling of the site to be done by said friend. The friend requested the site be done with a Windows 98 style, so I used a 3rd-party
Windows 98 stylesheet, which I found on GitHub, created by jdan (https://github.com/jdan/98.css/). I gave the user credit and included the
MIT license in the website's files.

## How does it accomplish this? (Code Explanation)
The website is a Single Page Application, with sections of the page being hidden, so the user cannot see it on first glance. By clicking on
the side bar, the respective section will be unhidden while everything else will be made hidden. This was accomplished by using jQuery's
removeAttr, and using hide and show for when the section needs to be displayed and hidden respectively.