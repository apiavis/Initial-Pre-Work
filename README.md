# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

If the computer that is going to access https://www.techtonic.com/ has just been powered on, then there are no IP (internet protocol) addresses stored in the DNS (domain name system) cache, since the DNS cache is cleared whenever a client is powered off (FitzGerald, Dennis, & Durcikova, 2017).  Therefore, clicking on https://www.techtonic.com will require that the client we are using first request the IP address for the web server hosting the site, and the client will also need to establish a connection with the server.

Since the client likely has a configuration table with routing information for its subnet, it begins by routing a DNS request to the subnet router through a message containing the destination IP address of a DNS server (FitzGerald, Dennis, & Durcikova, 2017).  The DNS request gets passed to the transport layer, and then to the network layer.  The network layer determines that the DNS server is outside of the client’s subnet.  At this point, it attaches an IP packet, and routes it to the destination DNS server.  When it is received by the router that is part of the same network as the DNS server, the router recognizes that the DNS destination IP address is part of its own network, so it sends the message to the DNS server.  The DNS server processes the DNS request, translates the domain name to the IP address, and sends the message containing the IP address of https://www.techtonic.com/ back to the client in the reverse order of the path previously described.  When the client receives the IP address, it gets stored in its cache (FitzGerald, Dennis, & Durcikova, 2017).

At this point, the client needs to establish a TCP (transmission control protocol) connection with the server in order to begin a session.  To begin, the client sends a SYN (synchronize) message to the server.  The server responds with an ACK (acknowledgement) message.  The server also needs to send its own SYN message, which is reciprocated by an ACK message from the client.  Once ACK is received, the session has been established, and segments begin flowing between the sender and receiver (FitzGerald, Dennis, & Durcikova, 2017).  

The application layer (web browser) on the client sends an HTTP request to the transport layer with the IP address corresponding to https://www.techtonic.com/ (Sexton, 2016).  The transport layer determines whether or not the message needs to be broken down into smaller segments.  If so, it will break the message into segments, which will be reorganized into the original message when it reaches the final destination.  If the request is small enough to fit in one segment, it gets transmitted to the network layer.  The message is then routed to the web server hosting https://www.techtonic.com/ (FitzGerald, Dennis, & Durcikova, 2017).  Once the web server receives the message, the application layer sends out a series of TCP/IP packets to the destination IP address of the client that made the original request.

Resources

FitzGerald, J., Dennis, A., & Durcikova, A. (2017). Business data communications and
networking (13th ed.). Retrieved from https://vitalsource.com  

Sexton, Patrick.  (2016).  How a webpage is loaded and displayed.  Retrieved April 16,
2019 from https://varvy.com/pagespeed/display.html  

## From start to finish, how does data reach you to be rendered in the browser?

Once the session between the client and server is established, data packets are sent from the server to the client through the network.  The web server evaluates the destination IP address (of the client) and recognizes that it is outside of its subnet, so it is routes packets over the internet to the destination IP address.  One of the first messages received by the client is the HTML file for the webpage.  This file not only contains text, but it also contains references to other types of files.  The web browser on the client side reads the HTML file (this process is called parsing) looking for CSS, JavaScript or image files that are referenced (Sexton, 2016).  If these references are found, the resources are then requested from the web server as well.  
All of these requests and transmissions occur during the single open session that the client and server established.  

In the case that the web page being requested contains pictures and images, the web page is built in the order of requests received by the transport layer and then the application layer.  In other words, the web browser requests delivery of the packets to the application layer as soon as they arrive, which is why it sometimes appears as though a web page is being loaded piece by piece.  In the case of large image files, segmentation may be necessary to transmit them across the network (MDN Web Docs, 2018).  Once all of the data for the web page have been transmitted and received by the client, we can enjoy browsing the web page we requested, and the session between the client and server can be terminated.

Resources

MDN Web Docs.  (2018).  How the Web works.  Retrieved April 16, 2019 from 
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works  

Sexton, Patrick.  (2016).  How a webpage is loaded and displayed.  Retrieved April 16,
2019 from https://varvy.com/pagespeed/display.html  

## What code is rendered in the browser?

The code rendered in the browser is primarily a combination of HTML, CSS, and JavaScript.  These languages instruct the browser to display the website correctly (Westfall, 2018).

Resources

Westfall, Philip.  (2018).  Web Terminology 101: What You Need to Know [with illustrations].  Retrieved April 16, 2019 from https://www.pagecloud.com/blog/website-terminology

## What is the server-side code’s main function?

Server-side code interacts with databases and files, delivers pages to the client, and processes user input.  Server-side code allows users to save and retrieve data and directs navigation to other pages (Segue Technologies, 2013).

Resources

Segue Technologies.  (2013).  Client-Side vs. Server-Side Code: What’s the Difference?  Retrieved April 16, 2019 from https://www.seguetech.com/client-server-side-code/

## What is the client-side code’s main function?

The client side code’s main function is to allow actions to be executed on a page that has been fully loaded (Westfall, 2018).  This allows web pages to be more interactive, and to be manipulated without needing to interact with a database (Segue Technologies, 2013).

Resources

Segue Technologies.  (2013).  Client-Side vs. Server-Side Code: What’s the Difference?  Retrieved April 16, 2019 from https://www.seguetech.com/client-server-side-code/

Westfall, Philip.  (2018).  Web Terminology 101: What You Need to Know [with illustrations].  Retrieved April 16, 2019 from https://www.pagecloud.com/blog/website-terminology

## What is runtime?

Runtime is the time it takes for a program to be executed.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

If the website is requested by a single client, one instance of each of the client-side assets are created on the client.

## How many instances of the server-side code are available at any given time?

This depends on how many servers the code is stored on.  There are as many instances of the server-side code as servers that host the website documents.

## How many instances of the databases connected to the server application are created?

Typically, there is one instance of the database being connected to the server application.
