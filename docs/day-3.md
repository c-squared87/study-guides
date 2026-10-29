# WGU Introduction to IT — Day 3 Study Guide

## Servers, Infrastructure, Virtualization & Cloud Computing

### Day 3 Goals

By the end of this study session, you should be able to:

1. Explain what a server is and how it differs from a typical client computer.
2. Identify common types of servers and the services they provide.
3. Explain what IT infrastructure means.
4. Describe how servers, networks, storage, and applications work together.
5. Explain virtualization.
6. Explain what a virtual machine (VM) is.
7. Explain why organizations use virtualization.
8. Define cloud computing.
9. Distinguish between on-premises and cloud infrastructure.
10. Explain IaaS, PaaS, and SaaS.
11. Describe how cloud computing changes IT management.
12. Connect today's concepts to the Day 1 and Day 2 mental models.

---

# 1. The Big Picture

On Day 1, we looked at IT as an ecosystem:

**People → Processes → Applications → Data → Technology**

On Day 2, we zoomed in on an individual computer:

**User → Application → Operating System → CPU/RAM/Storage → Hardware**

Today we're going to zoom back out.

Most modern applications aren't running entirely on your laptop. When you use a website or enterprise application, your computer is usually communicating with other computers.

A simplified example:

**Laptop → Network → Application Server → Database Server → Storage**

This is where the concept of **IT infrastructure** becomes important.

### IT infrastructure

IT infrastructure is the collection of technology resources that allow an organization's applications and services to operate.

It can include:

- Servers
- Networks
- Storage
- Databases
- Operating systems
- Virtual machines
- Cloud services
- Data centers
- Security systems
- Backup systems
- Monitoring systems
- Identity and access systems

Think of infrastructure as the **foundation that applications and business processes depend on**.

---

# 2. What Is a Server?

A **server** is a computer or software system that provides a service or resource to other computers or applications.

The computer requesting the service is generally called the **client**.

A simple model is:

**Client → Request → Server → Response → Client**

For example, when you open a website:

1. Your computer sends a request.
2. A server receives the request.
3. The server processes it.
4. The server sends information back.
5. Your browser displays the result.

The important thing to understand is that **"server" describes a role**.

A server doesn't necessarily have to look like a giant computer sitting in a data center.

A server could be:

- A physical computer
- A virtual machine
- A cloud resource
- A software application running on a computer

---

# 3. Client vs. Server

The simplest distinction is:

| Client | Server |
|---|---|
| Requests services | Provides services |
| Usually used directly by a person | Usually provides services to other systems |
| Laptop | Application server |
| Smartphone | Database server |
| Web browser | Web server |
| Mobile app | File server |

For example:

When you use an analytics application:

**Your laptop = client**

**Analytics application server = server**

**Database server = server**

The client might request:

> "Give me the savings opportunities for Company A."

The application server processes the request and may ask the database server for the required data.

---

# 4. A Server Doesn't Have to Be a Giant Computer

This is an important misconception to avoid.

You might imagine a server as a large physical machine like this:

**Physical Server → Application**

But modern IT environments often look more like:

**Physical Server → Virtual Machine → Application**

Or:

**Cloud Provider → Virtual Server → Application**

A virtual machine can perform the role of a server just like a physical computer can.

This becomes extremely important when we discuss **virtualization**.

---

# 5. Common Types of Servers

Different servers perform different jobs.

## Web Server

A **web server** provides web content and handles web requests.

For example:

**Browser → Web Server**

The web server might return:

- HTML
- Images
- CSS
- JavaScript
- Other web resources

---

## Application Server

An **application server** runs application logic.

For example, your financial analytics application might contain logic such as:

> Find purchasing patterns that could generate savings.

The application server could perform that processing.

---

## Database Server

A **database server** stores and retrieves data.

For example:

**Application → Database Server**

The application might ask:

> Give me all savings opportunities for CompanyID 123.

The database server retrieves the appropriate data.

---

## File Server

A **file server** provides centralized access to files.

Organizations might use file servers to store:

- Documents
- Spreadsheets
- Reports
- Shared files
- Images

---

## Authentication Server

An **authentication server** helps determine whether a user is who they claim to be.

For example:

**User → Login → Authentication System**

The authentication system may verify:

- Username
- Password
- MFA
- Identity credentials

This connects directly to cybersecurity, which we'll study later.

---

# 6. What Is IT Infrastructure?

**IT infrastructure** is the underlying technology environment that supports an organization's applications and services.

Think about a hospital or healthcare company.

An application might appear simple to the user:

**User → Healthcare Application**

But underneath it could involve:

**User → Laptop → Network → Application Server → Database → Storage → Backup → Security → Monitoring**

All of those supporting components are part of the broader infrastructure.

### Infrastructure can include:

- Physical servers
- Virtual machines
- Networks
- Storage
- Databases
- Operating systems
- Data centers
- Cloud services
- Backup systems
- Security systems
- Monitoring tools
- Identity systems

---

# 7. Infrastructure vs. Application

This distinction is worth learning.

An **application** performs a task for users.

**Infrastructure provides the resources that allow the application to operate.**

A useful analogy is a restaurant.

The restaurant's ordering application might be like the **restaurant's menu and ordering process**.

Infrastructure is more like:

- Building
- Electricity
- Kitchen
- Refrigeration
- Plumbing
- Equipment

The customer interacts primarily with the restaurant's services.

They don't necessarily think about the infrastructure making those services possible.

The same thing happens in IT.

Users interact with applications.

IT infrastructure supports those applications behind the scenes.

---

# 8. On-Premises Infrastructure

**On-premises** means an organization owns or directly operates its infrastructure in its own facilities or controlled environment.

For example:

**Company → Data Center → Physical Servers**

The organization might be responsible for:

- Buying servers
- Installing servers
- Installing operating systems
- Maintaining hardware
- Replacing failed components
- Managing networking
- Managing storage
- Managing databases
- Managing security
- Providing backups
- Monitoring systems
- Providing electricity and cooling

This can be expensive and complex.

---

# 9. What Is a Data Center?

A **data center** is a facility designed to house and operate IT infrastructure.

A data center may contain:

- Servers
- Storage systems
- Network equipment
- Power systems
- Cooling systems
- Physical security
- Backup power
- Fire suppression systems
- Monitoring systems

Large organizations may operate their own data centers.

However, many organizations instead use cloud providers that operate enormous data centers on their behalf.

---

# 10. Why Do Organizations Use Servers?

Servers provide several important advantages.

### Centralization

Instead of storing everything on individual employee computers, organizations can centralize services.

### Shared Resources

Many users can use the same application or service.

### Centralized Data

Data can be stored in controlled systems rather than scattered across individual devices.

### Security

Organizations can apply centralized security controls.

### Management

IT teams can manage systems centrally.

### Backup and Recovery

Centralized systems can make backup and recovery easier to manage.

### Controlled Access

Organizations can determine which users are allowed to access which systems and data.

---

# 11. What Is Virtualization?

**Virtualization** is the process of creating virtual versions of computing resources.

One of the most important examples is a **virtual machine**.

Instead of having:

**Physical Server → One Computer**

You can have:

**Physical Server → VM 1 + VM 2 + VM 3 + VM 4**

Each VM behaves like an independent computer.

This allows one physical machine to support multiple logical computers.

---

# 12. What Is a Virtual Machine?

A **virtual machine (VM)** is a software-based computer that runs on physical hardware.

A VM can have its own:

- Operating system
- CPU resources
- RAM allocation
- Storage
- Applications
- Network configuration

For example:

**Physical Server**

→ Windows VM  
→ Linux VM  
→ Database VM  
→ Application VM

From the perspective of the software running inside the VM, it behaves much like a normal computer.

---

# 13. Why Use Virtualization?

Virtualization provides several important advantages.

## Better Hardware Utilization

Without virtualization, a physical server might use only a fraction of its available resources.

Virtualization allows multiple workloads to share the same physical machine.

## Isolation

Different VMs can operate independently.

A problem in one VM doesn't necessarily bring down every other VM.

## Flexibility

IT teams can create, configure, move, and remove virtual machines more easily than physical machines.

## Cost Efficiency

Fewer physical servers can mean:

- Less hardware
- Less electricity
- Less cooling
- Less physical space
- Less maintenance

This is one reason virtualization became such an important part of modern IT infrastructure.

---

# 14. Virtualization Mental Model

Think of virtualization as separating the **logical computer** from the **physical hardware**.

Instead of:

**Physical Hardware → One Computer**

you can have:

**Physical Hardware → Virtualization → Multiple Virtual Computers**

This creates an important abstraction between applications and physical hardware.

We'll come back to the concept of **abstraction** later.

---

# 15. What Is Cloud Computing?

**Cloud computing** means using computing resources and services provided over a network, typically the Internet.

Instead of an organization buying and operating every physical server itself, it can obtain computing resources from a cloud provider.

For example:

**Company → Cloud Provider → Computing Resources**

Common cloud providers include:

- Microsoft Azure
- Amazon Web Services (AWS)
- Google Cloud

The cloud provider operates enormous amounts of infrastructure.

Organizations can consume those resources without necessarily owning the underlying physical hardware.

---

# 16. Cloud Does Not Mean "The Internet"

This distinction is important.

The **Internet** is a global network connecting computers and networks.

The **cloud** refers to computing resources and services delivered over networks.

For example:

**Internet**

= the network used to connect systems.

**Cloud**

= computing resources and services you access through that network.

Cloud providers can provide:

- Computing
- Storage
- Databases
- Networking
- Security services
- AI services
- Monitoring
- Backup services

---

# 17. On-Premises vs. Cloud

Consider a company that needs a database.

### On-Premises

The company might:

1. Buy a physical server.
2. Install it in a data center.
3. Install the operating system.
4. Install database software.
5. Configure storage.
6. Configure networking.
7. Maintain the hardware.
8. Monitor the system.
9. Handle backups.
10. Replace failed components.

### Cloud

The company might instead:

1. Select a cloud database service.
2. Configure the database.
3. Set permissions.
4. Connect the application.
5. Load the data.
6. Monitor the service.

The cloud provider handles much of the underlying physical infrastructure.

However, **cloud does not mean the customer has no responsibilities**.

The customer may still be responsible for:

- Data
- Permissions
- Application configuration
- Database design
- Business rules
- Security settings
- User access

This distinction becomes very important in cybersecurity.

---

# 18. Cloud Providers

The three major cloud providers you'll commonly encounter are:

### Microsoft Azure

Microsoft's cloud computing platform.

### Amazon Web Services

Usually referred to as **AWS**.

### Google Cloud

Google's cloud computing platform.

All three provide many categories of services, including:

- Compute
- Storage
- Databases
- Networking
- Security
- AI
- Analytics

You don't need to memorize specific services yet.

For now, understand the basic concept:

> **Cloud providers allow organizations to consume computing infrastructure and services without owning all of the physical infrastructure themselves.**

---

# 19. IaaS — Infrastructure as a Service

**IaaS** stands for **Infrastructure as a Service**.

The provider gives you fundamental infrastructure resources.

Examples include:

- Virtual machines
- Storage
- Networking
- Computing resources

The customer generally has more responsibility.

A simplified model:

**Provider:** Physical hardware + virtualization

**Customer:** Operating system + applications + data

### Mental shortcut

**IaaS = "Give me infrastructure."**

---

# 20. PaaS — Platform as a Service

**PaaS** stands for **Platform as a Service**.

The provider manages more of the underlying infrastructure and provides an environment where developers can build and run applications.

A simplified model:

**Provider:** Infrastructure + operating environment/platform

**Customer:** Application + data

### Mental shortcut

**PaaS = "Give me an environment where I can build and run my application."**

---

# 21. SaaS — Software as a Service

**SaaS** stands for **Software as a Service**.

The provider delivers a completed software application.

The customer generally uses the application rather than managing the infrastructure underneath it.

Examples include:

- Web-based email
- CRM systems
- Collaboration applications
- Office applications
- Enterprise software

### Mental shortcut

**SaaS = "Give me the software."**

---

# 22. IaaS vs. PaaS vs. SaaS

The easiest way to understand the three models is to think about **who manages what**.

| Model | Provider Manages | Customer Manages |
|---|---|---|
| IaaS | Physical infrastructure, virtualization | OS, applications, data |
| PaaS | Infrastructure + platform | Application, data |
| SaaS | Infrastructure + platform + application | Primarily configuration, users, data |

The general pattern is:

**IaaS → More customer responsibility**

**PaaS → Shared responsibility**

**SaaS → More provider responsibility**

Don't worry about memorizing every boundary yet.

The important concept is that **cloud services exist at different levels of abstraction**.

---

# 23. Real-World Example: Financial Analytics Application

Imagine an organization using a financial analytics application.

The user might see:

**User → Analytics Application**

But behind the scenes:

**User → Laptop → Internet/Corporate Network → Cloud Infrastructure → Application → Database → Data**

The cloud environment might contain:

- Virtual machines
- Application servers
- Database servers
- Storage
- Networking
- Security systems
- Monitoring
- Backup systems

The user doesn't need to understand all of that to use the application.

This is one of the major benefits of abstraction.

---

# 24. What Is Abstraction?

**Abstraction** means hiding unnecessary implementation details so that users or systems can interact with something at a higher level.

Consider your laptop.

You might use:

**Microsoft Word → Operating System → Hardware**

You don't need to manually tell the CPU:

> "Move these bytes from this memory location and perform this instruction."

The operating system and hardware abstraction handle those details.

Similarly, a cloud application might look like:

**User → Application**

But underneath:

**Application → VM → Physical Server → Data Center**

The user interacts with the higher-level abstraction.

---

# 25. Availability and Redundancy

Organizations often don't want an application to stop working because one server fails.

For example:

**Application Server 1**

**Application Server 2**

**Application Server 3**

If Server 1 fails, the other servers may continue serving users.

This is an example of **redundancy**.

Redundancy means having additional components or resources available so that the failure of one component does not necessarily cause the entire system to fail.

Redundancy can exist at many levels:

- Multiple servers
- Multiple network connections
- Backup storage
- Backup power
- Replicated databases
- Multiple data centers

This concept will become increasingly important when we study networking, cloud computing, and cybersecurity.

---

# 26. Infrastructure as a System

Let's combine everything we've learned.

A simplified modern application might look like this:

**User**

↓  

**Client Device**

↓  

**Network**

↓  

**Web/Application Server**

↓  

**Database Server**

↓  

**Storage**

And underneath those systems:

**Virtualization**

↓  

**Physical Servers**

↓  

**Data Center**

Or, in a cloud environment:

**Cloud Provider**

↓  

**Compute / Database / Storage / Networking**

↓  

**Application**

↓  

**User**

This is the architecture mindset we're beginning to develop.

---

# 27. Connecting Days 1, 2, and 3

This is one of the most important sections of today's lesson.

## Day 1 — What Is IT?

We learned:

**People + Processes + Applications + Data + Technology**

We were looking at IT from an organizational perspective.

---

## Day 2 — What's Inside a Computer?

We learned:

**Application → Operating System → CPU/RAM/Storage → Hardware**

We were looking inside an individual computer.

---

## Day 3 — How Do Organizations Build Larger Systems?

Now we're looking at:

**User → Client Device → Network → Application Server → Database Server → Storage**

And underneath:

**Physical Hardware → Virtualization → Virtual Machines → Cloud Services**

We're moving from:

**Individual Computer**

to

**IT Systems**

to

**IT Infrastructure**

That progression is extremely important for the rest of this course.

---

# 28. Day 3 Vocabulary

| Term | Meaning |
|---|---|
| **Server** | System that provides services or resources to other systems |
| **Client** | System that requests or consumes services |
| **Infrastructure** | Technology resources supporting applications and services |
| **Data Center** | Facility designed to house and operate IT infrastructure |
| **On-Premises** | Infrastructure owned/operated directly by an organization |
| **Virtualization** | Creating virtual versions of computing resources |
| **Virtual Machine (VM)** | Software-based computer running on physical hardware |
| **Cloud Computing** | Computing resources/services delivered over a network |
| **IaaS** | Infrastructure as a Service |
| **PaaS** | Platform as a Service |
| **SaaS** | Software as a Service |
| **Redundancy** | Additional resources that help tolerate failures |
| **Abstraction** | Hiding implementation details behind a simpler interface |
| **Web Server** | Provides web resources/services |
| **Application Server** | Runs application logic |
| **Database Server** | Stores and retrieves data |
| **File Server** | Provides centralized file storage/access |
| **Authentication Server** | Helps verify user identity |

---

# 29. Exercise — Trace a Web Application

Choose a web application you use regularly.

It could be:

- Your banking website
- Salesforce
- A healthcare application
- Amazon
- A news website
- A project management tool
- An analytics application

Then fill out:

| Component | Your Example |
|---|---|
| User | |
| Client device | |
| Application | |
| Network | |
| Web/Application server | |
| Database | |
| Storage | |
| Virtualization likely involved? | |
| Cloud likely involved? | |

Then answer:

### Question 1

What happens when the user clicks a button that requests new data?

Try to trace the request from:

**User → Client → Network → Application → Database**

### Question 2

What happens if the application server fails?

Would the entire application necessarily stop working?

Why or why not?

### Challenge Question

Which parts of this architecture are visible to the user?

Which parts are hidden by abstraction?

---

# 30. Day 3 Quiz

## Questions

### 1. What is a server?

A. A computer that must be physically located in a data center  
B. A computer with more than 32 GB of RAM  
C. A system that provides services or resources to other systems  
D. A computer running Windows Server  

---

### 2. Which is most likely acting as a client?

A. Database server  
B. Application server  
C. Laptop running a web browser  
D. Authentication server  

---

### 3. What does IT infrastructure refer to?

A. Only physical computers  
B. The underlying technology resources supporting applications and services  
C. Only cloud computing  
D. Only networking equipment  

---

### 4. What is the primary purpose of a database server?

A. Display webpages  
B. Authenticate users  
C. Store and retrieve data  
D. Provide electricity  

---

### 5. What is virtualization?

A. Converting physical files into digital files  
B. Using one physical computer to support multiple virtual computers  
C. Connecting computers to the Internet  
D. Encrypting network traffic  

---

### 6. What is a virtual machine?

A. A physical server with multiple processors  
B. A software-based computer running on physical hardware  
C. A cloud provider  
D. A database  

---

### 7. Which is an advantage of virtualization?

A. It eliminates the need for operating systems  
B. It guarantees that hardware can never fail  
C. It can improve utilization of physical hardware  
D. It removes the need for networks  

---

### 8. What is cloud computing?

A. Storing files exclusively on your laptop  
B. Connecting two computers with Ethernet  
C. Using computing resources and services delivered over a network  
D. Using only wireless Internet  

---

### 9. Which cloud model provides basic infrastructure resources such as virtual machines and storage?

A. SaaS  
B. PaaS  
C. IaaS  
D. DNS  

---

### 10. Which cloud model provides a completed software application?

A. IaaS  
B. PaaS  
C. SaaS  
D. VM  

---

### 11. Which example best represents an on-premises environment?

A. A company uses a SaaS CRM application  
B. A company operates physical servers in its own data center  
C. A company rents a cloud database  
D. An employee uses a web browser  

---

### 12. Why might an organization use redundant application servers?

A. To make computers physically smaller  
B. To eliminate databases  
C. To reduce the impact of a server failure  
D. To eliminate operating systems  

---

### 13. Which server would most likely store and retrieve structured application data?

A. Web server  
B. File server  
C. Database server  
D. Authentication server  

---

### 14. What is abstraction?

A. Removing hardware from a computer  
B. Hiding implementation details behind a simpler interface  
C. Encrypting data  
D. Replacing a physical server with a laptop  

---

### 15. Which sequence best represents a simplified modern web application?

A. Database → User → Client → Network → Application  
B. User → Client → Network → Cloud Infrastructure → Application → Database  
C. User → Database → Keyboard → Server  
D. Application → User → Storage → Network  

---

# 31. Answer Key

### 1. C — System that provides services or resources

A server is defined by the service it provides, not by its physical appearance.

### 2. C — Laptop running a web browser

The laptop is requesting services from servers, making it a client.

### 3. B — Underlying technology resources supporting applications and services

Infrastructure includes servers, networks, storage, virtualization, cloud services, and related systems.

### 4. C — Store and retrieve data

That is the primary role of a database server.

### 5. B — One physical computer supporting multiple virtual computers

This is the core concept behind virtualization.

### 6. B — Software-based computer running on physical hardware

A VM behaves like a computer even though it is implemented through software.

### 7. C — Improve utilization of physical hardware

Virtualization allows multiple workloads to share physical resources.

### 8. C — Computing resources and services delivered over a network

Cloud computing isn't simply "the Internet." It involves computing resources and services delivered through networks.

### 9. C — IaaS

Infrastructure as a Service provides fundamental computing infrastructure such as virtual machines, storage, and networking.

### 10. C — SaaS

Software as a Service provides a completed software application.

### 11. B — Company operates physical servers in its own data center

That is a classic example of on-premises infrastructure.

### 12. C — Reduce the impact of a server failure

Redundant systems help maintain availability when individual components fail.

### 13. C — Database server

Database servers specialize in storing and retrieving structured data.

### 14. B — Hiding implementation details behind a simpler interface

Abstraction lets users interact with systems without needing to understand every underlying technical detail.

### 15. B — User → Client → Network → Cloud Infrastructure → Application → Database

This represents a simplified version of a modern cloud-based application architecture.

---

# 32. Mastery Check

Before moving to Day 4, make sure you can answer these **without looking at your notes**.

## Servers

- What is a server?
- What is a client?
- Why is "server" considered a role rather than a type of physical computer?
- What does a database server do?
- What does an application server do?

## Infrastructure

- What does IT infrastructure mean?
- What is a data center?
- What does on-premises mean?
- Why do organizations need infrastructure?

## Virtualization

- What is virtualization?
- What is a virtual machine?
- Why would an organization run multiple VMs on one physical server?
- What advantages does virtualization provide?

## Cloud

- What is cloud computing?
- How is cloud different from the Internet?
- What is the difference between on-premises and cloud?
- What is IaaS?
- What is PaaS?
- What is SaaS?
- Which model generally gives the customer the most responsibility: IaaS or SaaS?

## Architecture

Can you trace a request from:

**Laptop → Network → Application Server → Database Server → Storage**

And explain what each component does?

### Scoring

**16–20 confident answers:** You're ready for Day 4.

**12–15:** Review virtualization and cloud computing, especially IaaS/PaaS/SaaS.

**Below 12:** Revisit Sections 3–22 before moving forward.

---

# 33. Key Takeaway

The biggest idea from Day 3 is:

> **Applications depend on infrastructure.**

A modern application isn't simply a piece of software sitting on someone's laptop.

It may depend on:

**Users**

↓  

**Client Devices**

↓  

**Networks**

↓  

**Application Servers**

↓  

**Database Servers**

↓  

**Storage**

↓  

**Virtual Machines**

↓  

**Physical Infrastructure**

And increasingly:

**Cloud Provider → Infrastructure → Virtualized/Managed Services → Applications → Users**

### Your progression so far

**Day 1 — What is IT?**

People + Processes + Technology + Data

**Day 2 — What's inside a computer?**

Application + OS + CPU + RAM + Storage

**Day 3 — How do organizations build larger systems?**

Clients + Networks + Servers + Infrastructure + Virtualization + Cloud

You are now moving from understanding **individual computers** to understanding **IT systems and infrastructure**. That foundation will make the upcoming networking, databases, cybersecurity, and software-development topics much easier to understand.