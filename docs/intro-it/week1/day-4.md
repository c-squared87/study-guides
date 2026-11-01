# WGU Introduction to IT — Day 4 Study Guide

## Networking Fundamentals

### Topic

**Networks, IP Addresses, DNS, Protocols, and How Data Moves**

---

# Day 4 Goals

By the end of this study session, you should be able to:

1. Explain what a computer network is.
2. Explain why organizations use networks.
3. Distinguish between LANs, WANs, and the Internet.
4. Explain the roles of switches and routers.
5. Explain what an IP address is.
6. Distinguish between private and public IP addresses.
7. Explain the basic purpose of DNS.
8. Explain what a protocol is.
9. Identify common networking protocols such as HTTP, HTTPS, TCP, UDP, and DNS.
10. Explain the difference between TCP and UDP at a high level.
11. Explain the difference between a MAC address and an IP address.
12. Trace a simplified request from a user's computer to a web server.
13. Connect networking concepts to the servers, infrastructure, and cloud concepts from Day 3.

---

# 1. The Big Picture

On Day 3, we started looking at how computers communicate with servers:

**User → Client → Network → Application Server → Database Server**

Today we're going to focus on the **network** portion of that architecture.

A network allows computers and other devices to communicate with one another.

A simplified example:

**Laptop → Wi-Fi → Router → Internet → Web Server**

When you open a website, send an email, or use an enterprise application, information is traveling across one or more networks.

Networking is therefore one of the fundamental pieces connecting everything we've studied so far.

---

# 2. What Is a Computer Network?

A **computer network** is a collection of connected devices that can communicate and share resources.

Devices on a network might include:

- Computers
- Servers
- Smartphones
- Printers
- Routers
- Switches
- IoT devices
- Storage systems
- Security devices

Networks allow devices to:

- Exchange information
- Access applications
- Share files
- Access databases
- Access the Internet
- Share printers
- Communicate with servers

A network doesn't necessarily mean the Internet.

A small office network is a network.

A hospital's internal network is a network.

A home Wi-Fi network is a network.

The Internet is a **network of networks**.

---

# 3. Why Do Organizations Use Networks?

Networks allow organizations to connect people, systems, and resources.

Consider a healthcare organization.

An employee might need to access:

- An internal application
- A database
- A file server
- Email
- A cloud application
- The Internet
- A printer

Without networking, these systems would largely exist in isolation.

Networking allows them to communicate.

### Example

A financial analyst might use:

**Laptop → Corporate Network → Analytics Application → Database**

The network is what allows those components to communicate.

---

# 4. LAN — Local Area Network

A **LAN**, or **Local Area Network**, connects devices within a relatively limited geographic area.

Examples include:

- Home network
- Office network
- School network
- Hospital building
- Corporate building

A typical office might have:

**Laptop**

↓  

**Wi-Fi / Ethernet**

↓  

**Switch**

↓  

**Internal Network**

The LAN allows devices within the organization to communicate.

---

# 5. WAN — Wide Area Network

A **WAN**, or **Wide Area Network**, connects networks across larger geographic areas.

For example, a company might have offices in:

- Tennessee
- Georgia
- Texas
- California

Those offices could have their own LANs.

A WAN can connect them:

**Office LAN → WAN → Office LAN**

WANs can span:

- Cities
- States
- Countries
- Continents

The Internet is an enormous interconnected collection of networks rather than simply one large LAN.

---

# 6. Internet vs. Network

This distinction is important.

A **network** is any connected group of devices.

The **Internet** is a massive global network of interconnected networks.

For example:

**Your Home Network**

↓

**Internet Service Provider**

↓

**Internet**

↓

**Web Server**

Your home network is only one small network participating in the larger Internet.

---

# 7. Wired vs. Wireless Networking

Devices can connect to networks in different ways.

## Wired

A device connects using a physical cable.

Common example:

**Ethernet cable**

Advantages can include:

- Consistent connection
- High speeds
- Low interference
- Predictable performance

---

## Wireless

A device connects using radio signals.

The most common example is **Wi-Fi**.

For example:

**Laptop → Wi-Fi → Wireless Access Point**

Wireless networking provides mobility and convenience.

However, wireless connections can be affected by:

- Distance
- Walls
- Interference
- Signal strength
- Congestion

---

# 8. What Is a Network Switch?

A **network switch** connects devices within a network and helps direct network traffic to the appropriate device.

Imagine an office with:

- 20 laptops
- 5 printers
- 3 servers
- 2 wireless access points

A switch can connect many of these devices to the same local network.

A simplified model:

**Laptop A**

↘

**Switch**

↗

**Server**

The switch helps determine where network traffic should go within the local network.

---

# 9. What Is a Router?

A **router** connects different networks and determines where network traffic should be sent.

For example:

**Home Network → Router → Internet**

The router connects your local network to another network.

In a corporate environment, routers can connect:

**Corporate Network → Other Networks**

The easiest distinction to remember:

> **Switches primarily connect devices within a network. Routers connect different networks.**

This is a simplification, but it is a useful beginner mental model.

---

# 10. Switch vs. Router

| Device | Primary Role |
|---|---|
| **Switch** | Connects devices within a network |
| **Router** | Connects different networks |
| **Wireless Access Point** | Provides wireless network connectivity |

### Example

A small office might look like:

**Laptop**

↓

**Wi-Fi Access Point**

↓

**Switch**

↓

**Router**

↓

**Internet**

Not every network will physically look exactly like this, but it provides a useful conceptual model.

---

# 11. What Is an IP Address?

An **IP address** is an address used to identify a device or network interface on an IP network.

Think of an IP address as a **network address**.

Just as a postal address helps identify where something should be delivered, an IP address helps network traffic determine where information should go.

An example IPv4 address looks like:

**192.168.1.25**

IPv4 addresses contain four numerical sections separated by periods.

Another example:

**10.0.0.15**

You don't need to memorize the mathematical details of IPv4 yet.

The important concept is:

> **Devices communicating over an IP network need addresses so traffic can be delivered to the correct destination.**

---

# 12. IPv4 vs. IPv6

There are two major versions of the Internet Protocol that you will encounter.

## IPv4

IPv4 uses addresses such as:

**192.168.1.25**

IPv4 has a limited number of available addresses.

---

## IPv6

IPv6 was developed in part because the world needed far more IP addresses.

An IPv6 address looks very different:

**2001:0db8:85a3::8a2e:0370:7334**

IPv6 addresses are much larger than IPv4 addresses.

For this course, you don't need to memorize IPv6 addressing rules.

Just remember:

**IPv4 = older, widely used addressing system**

**IPv6 = newer addressing system with a vastly larger address space**

---

# 13. Private vs. Public IP Addresses

Not every IP address is directly reachable from the public Internet.

## Private IP Address

A **private IP address** is used within a private network.

Examples include addresses beginning with:

- 10.x.x.x
- 172.16.x.x through 172.31.x.x
- 192.168.x.x

For example:

**192.168.1.25**

might identify your laptop within your home network.

---

## Public IP Address

A **public IP address** can be used for communication across the public Internet.

Your home network may have a public IP address assigned by your Internet service provider.

The basic concept is:

**Private IP → Internal network**

**Public IP → Public Internet**

---

# 14. What Is DNS?

One of the most important networking concepts you'll encounter is **DNS**.

DNS stands for:

**Domain Name System**

DNS translates human-friendly domain names into IP addresses.

For example, humans prefer to type:

**example.com**

Computers ultimately need network addresses such as:

**93.184.216.34**

DNS helps connect those two concepts.

A simplified process is:

**Browser → DNS → IP Address**

Then:

**Browser → IP Address → Web Server**

---

# 15. Why Do We Need DNS?

Imagine if you had to memorize the IP address of every website you used.

Instead of typing:

**example.com**

you would have to remember something like:

**93.184.216.34**

And if the website changed servers, the address might change.

DNS allows humans to use names while the network infrastructure works with addresses.

Think of DNS as somewhat like a **phone book for domain names and IP addresses**.

The analogy isn't perfect, but it's useful for understanding the basic purpose.

---

# 16. What Is a Protocol?

A **protocol** is a set of rules that defines how systems communicate.

Imagine two people trying to have a conversation.

They need some shared understanding about:

- Language
- Timing
- Meaning
- Structure

Computers need similar rules.

Networking protocols define things such as:

- How information is formatted
- How it is transmitted
- How systems identify one another
- How errors are handled
- How communication begins and ends

Protocols allow devices built by different companies to communicate consistently.

---

# 17. Common Networking Protocols

There are many networking protocols.

You don't need to memorize all of them today.

Focus on these:

| Protocol | Basic Purpose |
|---|---|
| **HTTP** | Web communication |
| **HTTPS** | Secure web communication |
| **DNS** | Domain name resolution |
| **TCP** | Reliable transport of data |
| **UDP** | Faster, connectionless transport |
| **IP** | Addressing and routing network traffic |

These protocols work at different layers of networking.

For now, focus on their **purpose** rather than memorizing every technical detail.

---

# 18. HTTP

**HTTP** stands for:

**Hypertext Transfer Protocol**

HTTP is one of the primary protocols used for communication between web browsers and web servers.

For example:

**Browser → HTTP Request → Web Server**

The server responds:

**Web Server → HTTP Response → Browser**

This is part of how web applications work.

---

# 19. HTTPS

**HTTPS** is HTTP with security provided through encryption using **TLS**.

You will commonly see:

**https://**

instead of:

**http://**

HTTPS helps protect information traveling between a client and a web server.

For example, when logging into a banking website, you don't want your username and password traveling across the network as readable text.

HTTPS helps protect that communication.

We'll study encryption and cybersecurity in more depth later.

For now:

> **HTTP = web communication**

> **HTTPS = secure web communication**

---

# 20. TCP

**TCP**, or **Transmission Control Protocol**, provides reliable communication between systems.

TCP is designed to make sure data is delivered reliably and in the correct order.

If some information is lost, TCP can help detect the problem and retransmit it.

Think of TCP as prioritizing:

**Reliability**

This is useful for things such as:

- Web applications
- File transfers
- Email
- Database communication

---

# 21. UDP

**UDP**, or **User Datagram Protocol**, takes a different approach.

UDP does not provide the same level of reliability and connection management as TCP.

That can make it faster and more efficient for certain types of communication.

UDP can be useful for:

- Streaming
- Voice communication
- Online gaming
- Real-time applications

For some applications, receiving information quickly is more important than guaranteeing that every packet arrives perfectly.

### Simplified comparison

**TCP → Reliability**

**UDP → Speed / lower overhead**

This is a simplification, but it is the right mental model for this stage of your learning.

---

# 22. TCP vs. UDP

| TCP | UDP |
|---|---|
| Reliable | Less reliable |
| Connection-oriented | Connectionless |
| Tracks delivery | Does not provide the same delivery guarantees |
| Retransmits lost data | Does not automatically retransmit in the same way |
| More overhead | Lower overhead |
| Useful when accuracy matters | Useful when speed matters |

You don't need to memorize every technical difference yet.

The key idea is:

> **TCP emphasizes reliable delivery. UDP emphasizes speed and low overhead.**

---

# 23. What Is a MAC Address?

A **MAC address** is a hardware/network interface identifier associated with a network interface.

A MAC address might look something like:

**00:1A:2B:3C:4D:5E**

MAC addresses operate at a different level from IP addresses.

For now, think of the difference this way:

**MAC address → identifies a network interface on the local network**

**IP address → provides an address used for communication across IP networks**

This distinction will become clearer when you study networking more deeply.

---

# 24. MAC Address vs. IP Address

| MAC Address | IP Address |
|---|---|
| Associated with network interface | Network address |
| Used primarily at the local network level | Used for IP communication |
| Typically represented in hexadecimal | IPv4 commonly represented in decimal notation |
| Example: `00:1A:2B:3C:4D:5E` | Example: `192.168.1.25` |

Don't get too deep into this distinction yet.

At this stage, simply understand that **MAC addresses and IP addresses serve different purposes**.

---

# 25. How Does a Web Request Actually Work?

Let's put today's concepts together.

Imagine you type:

**example.com**

into your browser.

A simplified version of what happens is:

### Step 1 — You enter the domain

**User → Browser**

You type:

**example.com**

### Step 2 — DNS lookup

Your computer needs to determine which IP address corresponds to that domain.

**Browser → DNS**

DNS responds with an IP address.

### Step 3 — Network communication

Your computer sends traffic toward the destination IP address.

**Laptop → Router → Internet**

### Step 4 — Web server receives the request

The request reaches the appropriate web server.

**Internet → Web Server**

### Step 5 — Server processes request

The server determines what information to return.

### Step 6 — Response returns

The server sends information back through the network.

**Web Server → Internet → Router → Laptop**

### Step 7 — Browser displays the result

Your browser processes the response and displays the webpage.

---

# 26. Putting It All Together

Here's the complete simplified architecture:

**User**

↓

**Browser**

↓

**DNS**

↓

**Network**

↓

**Router**

↓

**Internet**

↓

**Web/Application Server**

↓

**Database Server**

↓

**Storage**

Notice how much of Day 3 is present.

We have:

- Client
- Network
- Server
- Database
- Storage
- Infrastructure
- Cloud

Day 4 adds the networking concepts that connect those pieces.

---

# 27. The Network Is the Connector

This is perhaps the most important conceptual idea from today's lesson.

Consider the systems we've studied so far:

**Client**

**Application Server**

**Database Server**

**Cloud Infrastructure**

None of these systems are particularly useful to an organization if they cannot communicate.

The network connects them.

You can think of networking as the **communication layer connecting the IT ecosystem**.

---

# 28. Example: Healthcare Analytics Application

Let's apply this to a realistic enterprise example.

Imagine an analyst opens a healthcare supply-chain analytics application.

The analyst's computer might have:

**Private IP: 192.168.1.25**

The analyst opens the application in a browser.

The browser sends a request across the corporate network.

The traffic might travel through:

**Laptop → Wi-Fi → Switch → Router → Corporate Network → Cloud → Application Server**

The application server then requests data:

**Application Server → Database Server**

The database returns the requested information:

**Database → Application Server**

The application server sends the results back:

**Application Server → Network → Analyst's Laptop**

The analyst sees the results in the browser.

From the user's perspective, it feels like one application.

Technically, many systems are communicating behind the scenes.

---

# 29. Day 4 Vocabulary

| Term | Meaning |
|---|---|
| **Network** | Connected devices that can communicate |
| **LAN** | Local Area Network |
| **WAN** | Wide Area Network |
| **Internet** | Global interconnected network of networks |
| **Switch** | Connects devices within a network |
| **Router** | Connects different networks |
| **IP Address** | Network address used for IP communication |
| **IPv4** | Common version of IP using 32-bit addresses |
| **IPv6** | Newer IP version with a much larger address space |
| **Private IP** | IP address used within a private network |
| **Public IP** | IP address used for communication over the public Internet |
| **DNS** | Resolves domain names to IP addresses |
| **Protocol** | Rules governing communication |
| **HTTP** | Web communication protocol |
| **HTTPS** | Secure web communication |
| **TCP** | Reliable transport protocol |
| **UDP** | Lower-overhead transport protocol |
| **MAC Address** | Network interface identifier |
| **Wi-Fi** | Wireless networking technology |
| **Ethernet** | Common wired networking technology |

---

# 30. Exercise — Trace a Network Request

Choose a website or application you use regularly.

For example:

**Your company's analytics application**

Now try to trace a request.

Fill in:

| Question | Your Answer |
|---|---|
| What is the client? | |
| What network is the client connected to? | |
| Is the connection wired or wireless? | |
| What device connects the local network to other networks? | |
| What domain name does the application use? | |
| What does DNS do? | |
| What server receives the request? | |
| Does the application need a database? | |
| Where is the data stored? | |

Then draw your own simplified architecture:

**User → ______ → ______ → ______ → ______ → Data**

Try to identify the role of every component.

---

# 31. Challenge Exercise — Explain It to a Non-Technical Person

Imagine someone asks:

> "What happens when I open a website?"

Explain it without using technical jargon initially.

Then explain it again using at least these terms:

- Client
- Network
- Router
- DNS
- IP address
- Web server
- Database
- HTTPS

The goal isn't to memorize definitions.

The goal is to understand **how the concepts interact**.

---

# 32. Day 4 Quiz

## Questions

### 1. What is a computer network?

A. A type of operating system  
B. A collection of connected devices that can communicate  
C. A database  
D. A cloud provider  

---

### 2. What does LAN stand for?

A. Local Application Network  
B. Long Area Network  
C. Local Area Network  
D. Linked Access Network  

---

### 3. What is the primary role of a router?

A. Store files  
B. Connect different networks  
C. Store database records  
D. Run applications  

---

### 4. What is the primary role of a network switch?

A. Connect devices within a network  
B. Translate domain names  
C. Store webpages  
D. Encrypt databases  

---

### 5. What is an IP address?

A. A type of database  
B. A network address used for IP communication  
C. A type of operating system  
D. A programming language  

---

### 6. What does DNS primarily do?

A. Encrypt files  
B. Store databases  
C. Translate domain names into IP addresses  
D. Connect keyboards to computers  

---

### 7. What is a protocol?

A. A physical networking cable  
B. A set of rules governing communication  
C. A database server  
D. A cloud provider  

---

### 8. What is HTTPS used for?

A. Secure web communication  
B. Database storage  
C. Physical network connections  
D. CPU processing  

---

### 9. Which protocol emphasizes reliable delivery?

A. UDP  
B. DNS  
C. TCP  
D. HTTP  

---

### 10. Which protocol generally has lower overhead and does not provide TCP's same reliability guarantees?

A. TCP  
B. UDP  
C. HTTPS  
D. DNS  

---

### 11. Which is an example of a private IPv4 address?

A. 8.8.8.8  
B. 192.168.1.25  
C. 172.300.1.1  
D. 255.255.255.255  

---

### 12. What is the primary purpose of a MAC address?

A. Identify a network interface at the local network level  
B. Identify a website  
C. Replace DNS  
D. Encrypt Internet traffic  

---

### 13. Which statement best describes the Internet?

A. A single corporate LAN  
B. A global network of interconnected networks  
C. A type of database  
D. A single physical server  

---

### 14. What happens first when a browser needs to determine the IP address associated with a domain name?

A. It contacts the database server  
B. It performs a DNS lookup  
C. It shuts down the router  
D. It contacts the CPU  

---

### 15. Which sequence best represents a simplified web request?

A. Database → Browser → DNS → User  
B. User → Browser → DNS → Network → Web Server → Response  
C. User → Database → Router → Browser  
D. Browser → Storage → CPU → DNS  

---

# 33. Answer Key

### 1. B — A collection of connected devices that can communicate

That's the fundamental definition of a network.

### 2. C — Local Area Network

A LAN covers a relatively limited geographic area.

### 3. B — Connect different networks

Routers move traffic between networks.

### 4. A — Connect devices within a network

Switches primarily connect devices on the same local network.

### 5. B — A network address used for IP communication

IP addresses allow network traffic to identify destinations.

### 6. C — Translate domain names into IP addresses

DNS allows humans to use names such as `example.com` rather than memorizing IP addresses.

### 7. B — A set of rules governing communication

Protocols establish rules that systems follow when communicating.

### 8. A — Secure web communication

HTTPS provides HTTP communication protected through TLS.

### 9. C — TCP

TCP emphasizes reliable and ordered delivery.

### 10. B — UDP

UDP provides lower-overhead communication without TCP's same delivery guarantees.

### 11. B — 192.168.1.25

192.168.x.x is one of the private IPv4 address ranges.

### 12. A — Identify a network interface at the local network level

A MAC address is associated with a network interface and is used primarily within local networking.

### 13. B — A global network of interconnected networks

The Internet connects enormous numbers of individual networks.

### 14. B — It performs a DNS lookup

DNS helps determine the IP address associated with a domain name.

### 15. B — User → Browser → DNS → Network → Web Server → Response

This is a simplified representation of how a web request works.

---

# 34. Mastery Check

Before moving to Day 5, make sure you can explain these concepts **without looking at your notes**.

## Networks

- What is a network?
- What is a LAN?
- What is a WAN?
- How is the Internet different from a LAN?

## Network Devices

- What does a switch do?
- What does a router do?
- What does a wireless access point do?

## IP Addresses

- What is an IP address?
- What is IPv4?
- What is IPv6?
- What is the difference between a private and public IP address?

## DNS

- What does DNS stand for?
- What problem does DNS solve?
- Why don't users normally need to memorize IP addresses?

## Protocols

- What is a protocol?
- What does HTTP do?
- What does HTTPS do?
- What does TCP do?
- What does UDP do?
- Why might an application choose UDP instead of TCP?

## Network Architecture

Can you explain this sequence?

**Laptop → Wi-Fi → Router → Internet → Web Server → Database**

And explain the role of each component?

---

# Mastery Score

**16–20 confident answers:** You're ready for Day 5.

**12–15:** Review IP addressing, DNS, and TCP/UDP.

**Below 12:** Revisit Sections 2–25 before continuing.

---

# 35. Key Takeaway

The biggest idea from Day 4 is:

> **Networks allow the components of an IT system to communicate.**

A modern application might involve:

**User**

↓  

**Client**

↓  

**Wi-Fi / Ethernet**

↓  

**Switch**

↓  

**Router**

↓  

**Network / Internet**

↓  

**Web or Application Server**

↓  

**Database Server**

↓  

**Storage**

Networking provides the communication infrastructure that connects all of these components.

### Your progression so far

**Day 1 — What is IT?**

People + Processes + Technology + Data

**Day 2 — What's inside a computer?**

Application + OS + CPU + RAM + Storage

**Day 3 — How do organizations build larger systems?**

Clients + Servers + Infrastructure + Virtualization + Cloud

**Day 4 — How do those systems communicate?**

Networks + IP Addresses + DNS + Protocols + Routers + Switches

The next major step is to understand **how organizations store, organize, retrieve, and work with the data flowing through these systems**. That leads directly into **databases, relational data, SQL, and APIs**.